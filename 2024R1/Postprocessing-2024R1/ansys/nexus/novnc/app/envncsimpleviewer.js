/*
 *  *************************************************************
 *  (c)2023 ANSYS, Inc. Unauthorized use, distribution,
 *                           or duplication is prohibited.
 *   All Rights Reserved.
 *
 *   Restricted Rights Legend
 *
 *   Use, duplication, or disclosure of this
 *   software and its documentation by the
 *   Government is subject to restrictions as
 *   set forth in subdivision [(b)(3)(ii)] of
 *   the Rights in Technical Data and Computer
 *   Software clause at 52.227-7013.
 *  *************************************************************
 */
import EnVNCBase from "./envncbase.js";

function uuid() {
    var u = '', i = 0;
    while (i++ < 36) {
        var c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i - 1], r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        u += (c == '-' || c == '4') ? c : v.toString(16)
    }
    return u;
}


// A VNC viewer with a proof of concept UI.  
// It uses EnVNCBase to connect to an EnSight or EnVision session and pass keyboard and mouse events.
// This class creates a hamburger menu with part and var lists, a time slider for transient data, 
// a context-sensitive right click menu, and a toolbar with 5 buttons.
//
// Commands are sent, and responses received, by posting text to the clipboard.  
// EnSight's VNCManager class processes the commands and sends responses.

class EnVNCSimpleViewer extends EnVNCBase {

    // parent: a div or element that is the parent of the elements created by this object
    // options: a dict with options.  Can be null.  Supercedes options given through the URL.
    constructor(parent, options, rest_url) {
        super(parent, options, rest_url);

        // For generating IDs for commands
        this.guid = uuid();
        this.commandCounter = 0;

        // For showing GUI when the mouse is in frame
        this.mouseIn = false;

        // For the time slider 
        this.timeStepEnum = {
            MFNTS_STAY_AT_CURRENT: 4,
            MFNTS_JUMP_TO_END: 3,
            MFNTS_OFF: 2,
        };
        this.startFrame = 0;
        this.endFrame = 0;
        this.curFrame = 0;

        // jQuery contextmenu members
        this.has_right_clicked = false;
        this.contextMenuXPosition = 0;
        this.contextMenuYPosition = 0;

        // Cached partlist  [ {'name': "name", 'visible': true, 'pathname': "case..."} ]
        this.partlist = [];

        // UI elements
        this.ens_timestep_monitor = this.parent.querySelector('#ens_timestep_monitor');
        this.noVNC_timestep_monitor = this.parent.querySelector('#noVNC_timestep_monitor');
        this.ens_toggle_controls = this.parent.querySelector("#toggle_controls");
        this.ens_fullscreen_toggle = this.parent.querySelector("#ens_fullscreen_toggle");
        this.noVNC_canvas = this.parent.querySelector("#noVNC_canvas");
        this.noVNC_hl_button = this.parent.querySelector("#noVNC_hl_button");
        this.ens_part_hl_toggle = this.parent.querySelector("#ens_part_hl_toggle");
        this.noVNC_hid_ln_button = this.parent.querySelector("#noVNC_hid_ln_button");
        this.ens_hid_ln_toggle = this.parent.querySelector("#ens_hid_ln_toggle");
        this.ens_fit_viewport_btn = this.parent.querySelector("#ens_fit_viewport_btn");
        this.noVNC_fit_viewport_btn = this.parent.querySelector("#noVNC_fit_viewport_btn");
        this.ens_reset_view_btn = this.parent.querySelector("#ens_reset_view_btn");
        this.noVNC_reset_view_btn = this.parent.querySelector("#noVNC_reset_view_btn");

        // Hook up EnSight event callbacks
        // For play-pause button and seek-bar, 'this' is the UI object and this.viewer is the EnVNCSimpleViewer
        this.parent.querySelector("#play-pause").viewer = this;
        this.parent.querySelector("#play-pause").addEventListener("click", function () {
            if (this.playing) {
                this.playing = false;
                //Stop playing
                this.viewer.sendEnsMessage("STOP", false, "ensight.solution_time.stop()");
                this.src = this.viewer.moduleDir + 'images/icons/playf_off.svg';
            } else {
                this.playing = true;
                //Start playing
                this.viewer.sendEnsMessage("PLAY_FORWARD", false, "ensight.solution_time.play_forward()");
                this.src = this.viewer.moduleDir + 'images/icons/stop_off.svg';
                //Update the frame label to take out the current timestep
                this.viewer.updateFrameLabel();
            }
        });

        // Event on mouse up, after dragging the time slider
        this.parent.querySelector("#seek-bar").viewer = this;
        this.parent.querySelector("#seek-bar").addEventListener("change", function () {
            if (this.viewer.endFrame > 0) {
                this.viewer.curFrame = ((this.value - this.min) / (this.max - this.min) * this.viewer.endFrame) | 0;
                this.viewer.sendEnsMessage("SET_TIMESTEP", false, "ensight.objs.core.TIMESTEP = " + this.viewer.curFrame.toString());
                this.viewer.updateFrameLabel();
            }
        });

        // Event on mouse drag, while dragging the time slider
        this.parent.querySelector("#seek-bar").addEventListener("input", function () {
            if (this.viewer.endFrame > 0) {
                this.viewer.curFrame = ((this.value - this.min) / (this.max - this.min) * this.viewer.endFrame) | 0;
                this.viewer.updateFrameLabel();
            }
        });

        // Cycle from nothing displayed, to part list, to var list, back to nothing
        this.parent.querySelector("#ens_ui_toggle_img").addEventListener("click", function () {
            if (true) {
                //Cycle nothing -> part -> var -> nothing
                var plist = this.parent.querySelector('#ens_partlist');
                var vlist = this.parent.querySelector('#ens_varlist');

                if (plist.style.display == "flex") {         //part list on
                    plist.style.display = "none";
                    vlist.style.display = "flex";
                } else if (vlist.style.display == "flex") {  //var list on
                    plist.style.display = "none";
                    vlist.style.display = "none";
                } else {                                     //nothing on
                    plist.style.display = "flex";
                    vlist.style.display = "none";
                }
            } else {
                //Cycle nothing -> part -> var -> time controls -> nothing
                var plist = this.parent.querySelector('#ens_partlist');
                var vlist = this.parent.querySelector('#ens_varlist');
                var allPlayControls = this.parent.querySelector("#video_controls");

                if (plist.style.display == "flex") {         //part list on -> var list on
                    plist.style.display = "none";
                    vlist.style.display = "flex";
                } else if (vlist.style.display == "flex") {  //var list on -> time controls, if present, or -> nothing on
                    vlist.style.display = "none";
                    if (UI.startFrame < UI.endFrame) {
                        allPlayControls.style.display = "flex";
                    }
                } else if (allPlayControls.style.display == "flex") {  //time controls on -> nothing on
                    allPlayControls.style.display = "none";
                } else {                                     //nothing on -> part list on
                    plist.style.display = "flex";
                    vlist.style.display = "none";
                }
            }
        }.bind(this));

        this.parent.addEventListener("mouseenter", function () {
            this.mouseIn = true;
            // controls the set of toggle option icons at the bottom right corner
            this.ens_toggle_controls.style.display = "flex";
            // controls the video-controls at bottom left corner.
            this.updateFrameLabel();
        }.bind(this) );

        this.parent.addEventListener("mouseleave", function () {
            this.mouseIn = false;
            this.ens_toggle_controls.style.display = "none";
            this.updateFrameLabel();
        }.bind(this) );

        // timestep monitor toggle click action
        this.noVNC_timestep_monitor.addEventListener("click", function (e) {
            let element = e.target;  // get the clicked element
            let toggle_var = this.getToggle(element, 'data-toggle');  // get the toggle value to send
            let value;
            if (toggle_var === 'True') {
                value = this.timeStepEnum.MFNTS_JUMP_TO_END;
            } else {
                value = this.timeStepEnum.MFNTS_STAY_AT_CURRENT;
            }
            this.sendEnsMessage("SOLUTIONTIME_MONITOR", false, "ensight.objs.core.SOLUTIONTIME_MONITOR=" + value);
        }.bind(this));

        // part highlighting toggle click action
        this.noVNC_hl_button.addEventListener("click", function (e) {
            let element = e.target;  // get the clicked element
            let toggle_var = this.getToggle(element, 'data-toggle');  // get the toggle value to send
            // trigger message to Ens to set the new value.
            // if you're setting something, make sure isQuery is false, otherwise the action will fail.
            this.sendEnsMessage("PARTHIGHLIGHT", false, "ensight.objs.core.PARTHIGHLIGHT=" + toggle_var);
        }.bind(this));

        // hidden line overlay click action
        this.noVNC_hid_ln_button.addEventListener("click", function (e) {
            let element = e.target;
            let toggle_var = this.getToggle(element, 'data-toggle');
            if (toggle_var === "True") {
                this.sendEnsMessage("HIDDENLINE", false, 'ensight.view.hidden_line("ON", 0.0, 0.0, 0.0)');
            } else {
                this.sendEnsMessage("HIDDENLINE", false, 'ensight.view.hidden_line("OFF")');
            }
        }.bind(this));

        // fit to viewport click action
        this.noVNC_fit_viewport_btn.addEventListener("click", function (e) {
            this.sendEnsMessage("FITVIEWPORT", false, "ensight.view_transf.fit_current_viewport()");
        }.bind(this));

        // reset view click action
        this.noVNC_reset_view_btn.addEventListener("click", function (e) {
            this.sendEnsMessage("RESETVIEW", false, "ensight.view_transf.initialize_viewports()");
        }.bind(this));

        // contextmenu/right click action, suppresses the default one.
        this.noVNC_canvas.addEventListener("contextmenu", function (e) {
            e.preventDefault();

            if (this.isFullscreen()) {
                // Do not show the context menu in fullscreen mode.  jQuery ContextMenu library breaks if the menu is created
                // on a fullscreen child div.  Seems to only work with fullscreen document.documentElement.
                return false;
            }
            // set this to avoid ENS events that are uncalled for
            this.has_right_clicked = true;
            // there's no other clean way to pass the x,y to trigger the menu, so we use 'this' var.
            // note that coordinates are with respect to this.parent. VNC coordinates might be off sometimes.
            this.contextMenuXPosition = e.pageX;
            this.contextMenuYPosition = e.pageY;
            return false; // stopPropagation
        }.bind(this));

        this.initFullscreen();
    }


    initFullscreen() {
        // Only show the button if fullscreen is properly supported
        // * Safari doesn't support alphanumerical input while in fullscreen
        if (!this.isSafari &&
            (document.documentElement.requestFullscreen ||
             document.documentElement.mozRequestFullScreen ||
             document.documentElement.webkitRequestFullscreen ||
             document.body.msRequestFullscreen)) {
            this.parent.querySelector('#noVNC_fullscreen_button')
                .classList.remove("noVNC_hidden");
            this.addFullscreenHandlers();
        }
    }


    addFullscreenHandlers() {
        this.parent.querySelector("#noVNC_fullscreen_button")
            .addEventListener('click', this.toggleFullscreen.bind(this));
    }


    // Handle transitions between connecting, connected, disconnecting, and disconnected
    updateState(rfb, state, oldstate) {
        // Base class does the majority of the work
        super.updateState(rfb, state, oldstate);

        // After connecting, enable GUI and send queries for part, var, and time metadata.  
        // Hide GUI and cleanup on disconnect.
        switch (state) {
            case 'connected':
                // Show hamburger menu
                this.parent.querySelector('#ens_ui_toggle').style.display = "flex";

                // Set up partlist callbacks to EnSight
                this.registerEnsCallback("PARTLIST", "ensight.objs.core", "['PARTS']");
                this.registerEnsCallback("PARTLIST", "'ENS_PART'", "[ensight.objs.enums.VISIBLE]");
                this.registerEnsCallback("PARTSELECT", "ensight.objs.core.selection(ensight.objs.ENS_PART)", "['CHILDREN']");
                this.registerEnsCallback("TIMESTEP", "ensight.objs.core", "['TIMESTEP']");
                this.registerEnsCallback("TIMESTEP_LIMITS", "ensight.objs.core", "['TIMESTEP_LIMITS']");
                this.registerEnsCallback("VARLIST", "ensight.objs.core", "['VARIABLES']");


                // Part highlight callback register
                this.registerEnsCallback("PARTHIGHLIGHT", "ensight.objs.core", "['PARTHIGHLIGHT']");
                // get initial info
                this.sendEnsMessage("PARTHIGHLIGHT_UPDATED", true, "ensight.objs.core.PARTHIGHLIGHT");

                // Overlay hidden lines callback register
                this.registerEnsCallback("HIDDENLINE", "ensight.objs.core", "['HIDDENLINE']");
                // get initial info
                this.sendEnsMessage("HIDDENLINE_UPDATED", true, "ensight.objs.core.HIDDENLINE");

                // Synthetic menu register
                this.registerEnsCallback("SYNTHETIC_MENU", "ensight.objs.core", "['SYNTHETIC_MENU']");

                // Register for timestep monitor var
                this.registerEnsCallback("SOLUTIONTIME_MONITOR", "ensight.objs.core", "['SOLUTIONTIME_MONITOR']");
                // get initial info
                this.sendEnsMessage("SOLUTIONTIME_MONITOR_UPDATED", true, "ensight.objs.core.SOLUTIONTIME_MONITOR");

                // Get time info
                this.sendEnsMessage("NEWTIMESTEP_LIMITS", true, "ensight.objs.core.TIMESTEP_LIMITS");
                this.sendEnsMessage("NEWTIMESTEP", true, "ensight.objs.core.TIMESTEP");

                // Request a new partlist, as an array of pairs of [part name, 0 or 1 if part is visible]
                this.sendEnsMessage("NEWPLIST", true, "[[p.DESCRIPTION, p.VISIBLE, p.PATHNAME] for p in ensight.objs.core.PARTS]");

                // Request a new list of non-private scalar and vector variable names
                this.sendEnsMessage("NEWVARLIST", true, "[v.DESCRIPTION for v in ensight.objs.core.VARIABLES if (v.VARTYPE==ensight.objs.enums.ENS_VAR_VECTOR or v.VARTYPE==ensight.objs.enums.ENS_VAR_SCALAR) and not v.PRIVATE]");
                break;
            case 'disconnecting':
                var part_list = this.parent.querySelector('#partlist');
                while (part_list.children.length > 1) {
                    part_list.removeChild(part_list.lastChild);
                }
                var var_list = this.parent.querySelector('#varlist');
                while (var_list.children.length > 1) {
                    var_list.removeChild(var_list.lastChild);
                }
                this.parent.querySelector('#ens_ui_toggle').style.display = "none";
                this.parent.querySelector('#ens_partlist').style.display = "none";
                this.parent.querySelector('#ens_varlist').style.display = "none";
                this.startFrame = 0;
                this.endFrame = 0;
                this.curFrame = 0;
                this.updateFrameLabel();
                //this.parent.querySelector("#play-pause").innerHTML = "Play";
                this.parent.querySelector("#seek-bar").value = 0;

                break;
            default:
                break;
        }
    }
    clipboardReceive(rfb, text) {
        // Exchange Ens messages through the clipboard.  If a VNC client posts a message
        // formed like this to the clipboard, dispatch it through this.handleEnsMessage()
        // <ensret [msg num]_[Session UUID]>'[message]'
        if (text.startsWith("<ensret")) {
            var iTagStart = text.indexOf(this.guid);
            var iTagEnd = text.indexOf('>');
            if (iTagStart >= 0 && iTagEnd >= 0 && this.guid.length > 0) {
                iTagStart += this.guid.length + 1;

                var tag = text.substr(iTagStart, iTagEnd - iTagStart);

                var commandID = -1;
                var endCommandID = text.indexOf('_');
                if (endCommandID > 0) {
                    //skip 8 chars for "<ensret ", then parse up to the first underscore char
                    commandID = JSON.parse(text.substr(8, endCommandID - 8));
                }

                var jsObj = null;
                if (text.length - 1 > iTagEnd + 2 && text[iTagEnd + 1] == "'" && text[text.length - 1] == "'") {
                    jsObj = JSON.parse(text.substr(iTagEnd + 2, (text.length - 1) - (iTagEnd + 2)));
                }
                this.handleEnsMessage(tag, commandID, jsObj);
            }
        }
    }

    // ============jQuery contextmenu=============
    registerContextMenu(selector, items, global_callback) {
        if ($.contextMenu) {
            $.contextMenu({
                selector: selector,
                trigger: 'none',
                callback: global_callback,
                items: items
            });
        }
    }

    triggerContextMenu(selector, x_pos, y_pos) {
        if ($(selector).contextMenu) {
            $(selector).contextMenu({ x: x_pos, y: y_pos });
        }
    }

    updateContextMenu() {
        if ($.contextMenu) {
            $.contextMenu('update');
        }
    }

    destroyContextMenu() {
        if ($.contextMenu) {
            $.contextMenu('destroy');
        }
    }

    // Parse right-click menu items into the format accepted by jQuery-contextmenu
    getMenuItems(children) {
        let items = {}; // init
        let obtained_separator = false; // to check for repeated separators.
        for (let i = 0; i < children.length; i++) {
            let child = children[i]; // of form ['displayname', 'extensionval', flag, children_list]
            if (child.length >= 4) { // avoiding possible indexing errors
                let flag = child[2];
                // check flag before adding.
                if (flag === 0) {
                    let ext_val = child[1];
                    // edge case
                    if (ext_val === null) {
                        continue;
                    }

                    let display_name = child[0];
                    // beware of using integers for the map's key, will mess up ordering.
                    // so we generate a random string.
                    let ext_name = i.toString() + "-item-" + ext_val.toString() + "-item-" + child[4].toString();
                    let grand_children = child[3];

                    // check for separators
                    if (ext_val === "separator") {
                        // we only add the separator if the last one wasn't a separator.
                        if (!obtained_separator) {
                            // separators can be many, so we number them
                            items[ext_name] = "---------";
                        }
                        // set flag
                        obtained_separator = true;
                        // separators dont have any other value, so continue.
                        continue;
                    } else {
                        obtained_separator = false;
                    }

                    items[ext_name] = {
                        "name": display_name,
                    };

                    // if extension value is 0, disable the menu item.
                    // sometimes the first child in the list is a header and does nothing.
                    if (ext_val === 0) {
                        items[ext_name]["disabled"] = true;
                        continue;
                    }

                    // if child has children, then add them as sub-menu items recursively.
                    if (grand_children != null && grand_children.length > 0) {
                        items[ext_name]["items"] = this.getMenuItems(grand_children);
                    }
                }
            }
        }
        return items;
    }

    isMenuItemsValid(items) {
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                // return true if even one of the display names is valid.
                if (items[key].hasOwnProperty("name")) {
                    // has to have a "name" and name has to be valid.
                    if (this.isValid(items[key]["name"])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    isValid(value) {
        return value !== null && typeof value !== "undefined" && value !== "";
    }

    getSelectValues(select) {
        var result = [];
        var options = select && select.options;
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];
            if (opt.selected) {
                result.push(opt.value || opt.text);
            }
        }
        return result;
    }


    // Change a UI toggle's state, and return the new value
    getToggle(el, value) {
        // get the current value and negate it to get the new value
        let toggle = !(el.getAttribute(value) === 'true');
        // save, check and return
        el.setAttribute(value, toggle);
        // we return the appropriate Python bool.
        return toggle ? "True" : "False";
    }


    // Update time slider UI
    updateFrameLabel() {
        var curFrameLabel = this.parent.querySelector("#current-frame");
        //var playPauseButton = this.parent.querySelector("#play-pause");
        var seekBar = this.parent.querySelector("#seek-bar");
        var allPlayControls = this.parent.querySelector("#video_controls");
        if (this.startFrame < this.endFrame && this.mouseIn) {
            allPlayControls.style.display = "flex";
        } else {
            allPlayControls.style.display = "none";
        }

        curFrameLabel.innerText = '[' + (this.curFrame + 1).toString() + ' / ' + (1 + this.endFrame - this.startFrame).toString() + ']'
        if (this.endFrame > 0) {
            seekBar.value = 1000 * this.curFrame / this.endFrame;
        }
    }

    // return the partlist in ansys-nexus-viewer component form
    parts() {
        let return_list = [];
        for (const part of this.partlist) {
            return_list.push(part.pathname);
        }
        return return_list;
    }


    /* =================
     * Ens Communication
     * ------v------*/
    makeTag(name) {
        this.commandCounter += 1;
        var tag = this.commandCounter.toString() + "_" + this.guid + "_" + name;
        return tag;
    }

    // Register callback, to be notified when an Ens attribute changes
    //
    // tag:             string: the Ens response message, received when object(s) to watch changes, will have the string tag
    // pyObjsToTag:     string: contains Ens Python object to watch
    // pyAttribToWatch: string: contains the attrib on pyObjsToTag to watch
    registerEnsCallback(tag, pyObjsToTag, pyAttribToWatch) {
        this.rfb.clipboardPasteFrom("<enscmd " + this.makeTag("REG") + " json>ensight.objs.addcallback(" + pyObjsToTag + ", None, '" + this.makeTag(tag) + "', attrs=" + pyAttribToWatch + ")");
    }

    // Send a message to an Ens app.
    //
    // tag:             string: the Ens response message, if any, will have this tag
    // isQuery:         bool:   if true, 'msg' will be evaluated and a json object will be sent in response.  
    //                          if false, just execute the message
    //                  Note that if you set isQuery to true when the return value of the Python code is None,
    //                  it will throw an error, so if you're just executing something, set isQuery to false.
    // msg:             string: contains Ens Python code to execute or evaluate
    // return val:      int:    command ID which can later be matched to the ID passed in to handleEnsMessage
    sendEnsMessage(tag, isQuery, msg) {
        if (isQuery) {
            this.rfb.clipboardPasteFrom("<enscmd " + this.makeTag(tag) + " json>" + msg);
        } else {
            this.rfb.clipboardPasteFrom("<enscmd " + this.makeTag(tag) + " exec>" + msg);
        }
        return this.commandCounter;
    }

    // Handle a message from an Ens app, such as a response from a call to sendEnsMessage(), or a notification from
    // a callback registered through registerEnsCallback().
    // 
    // tag:             string:    the Ens response message, if any, will have this tag
    // commandID:       int:       unique ID for each command, returned from sendEnsMessage().  Could be used so a client can
    //                             send commands and match up responses later.
    // obj:             js object: The message can optionally include a js object (encoded as json, parsed by the caller)
    handleEnsMessage(tag, commandID, obj) {
        if (tag == "PARTLIST") {
            // Notification that the partlist has changed.  Request a new partlist
            this.sendEnsMessage("NEWPLIST", true, "[[p.DESCRIPTION, p.VISIBLE, p.PATHNAME] for p in ensight.objs.core.PARTS]");

        } else if (tag == "NEWPLIST") {
            // Receive new partlist and update UI
            if (obj) {
                var plist = obj;
                let part_list = this.parent.querySelector('#partlist');
                while (part_list.children.length > 1) {
                    part_list.removeChild(part_list.lastChild);
                }
                // reset the partlist as well
                this.partlist = [];
                for (let i = 0; i < plist.length; i++) {
                    this.partlist.push({ 'name': plist[i][0], 'visible': plist[i][1], 'pathname': plist[i][2] });
                    let option = document.createElement('option');

                    var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.name = "partlistCheckbox";
                    checkbox.defaultValue = plist[i][0];
                    checkbox.value = plist[i][0];
                    checkbox.id = "partlistCheckbox" + i.toString();
                    checkbox.partid = i;
                    checkbox.checked = plist[i][1];
                    checkbox.viewer = this;

                    // In the onclick CB, 'this' is the var list label object, and this.viewer is the EnVNCSimpleViewer object
                    checkbox.onclick = function () {
                        if (this.checked) {
                            this.viewer.sendEnsMessage("SHOWPARTS", false, "ensight.objs.core.PARTS[" + this.partid.toString() + "].VISIBLE=1");
                        } else {
                            this.viewer.sendEnsMessage("HIDEPARTS", false, "ensight.objs.core.PARTS[" + this.partid.toString() + "].VISIBLE=0");
                        }
                    };

                    var label = document.createElement('label');
                    label.htmlFor = "partlistCheckbox" + i.toString();  //Lets a click on this label also count as a click on the checkbox
                    label.appendChild(document.createTextNode(plist[i][0]));

                    part_list.appendChild(checkbox);
                    part_list.appendChild(label);
                    var mybr = document.createElement('br');
                    part_list.appendChild(mybr);
                }
                const parts_event = new CustomEvent('parts-changed', { bubbles: true, detail: {} });
                this.parent.dispatchEvent(parts_event);
            }
        } else if (tag == "VARLIST") {
            // Notification that the var list has changed.  Request a new var list
            this.sendEnsMessage("NEWVARLIST", true, "[v.DESCRIPTION for v in ensight.objs.core.VARIABLES if (v.VARTYPE==ensight.objs.enums.ENS_VAR_VECTOR or v.VARTYPE==ensight.objs.enums.ENS_VAR_SCALAR) and not v.PRIVATE]");

        } else if (tag == "NEWVARLIST") {
            // Receive new var list and update UI
            if (obj) {
                var vlist = obj;
                let var_list = this.parent.querySelector('#varlist');
                while (var_list.children.length > 1) {
                    var_list.removeChild(var_list.lastChild);
                }

                for (let i = 0; i < vlist.length; i++) {
                    var label = document.createElement('label');
                    label.textContent = vlist[i];
                    label.selected = false;
                    label.mouseover = false;
                    label.viewer = this;

                    label.updateColor = function () {
                        if (this.selected && this.mouseover) {
                            this.style.backgroundColor = "rgba(130,130,255,0.5)";
                        } else if (this.selected && !this.mouseover) {
                            this.style.backgroundColor = "rgba(150,150,255,0.5)";
                        } else if (!this.selected && this.mouseover) {
                            this.style.backgroundColor = "rgba(200,200,255,0.5)";
                        } else {
                            this.style.backgroundColor = "initial";
                        }
                    };
                    label.onmouseenter = function () {
                        this.mouseover = true;
                        this.updateColor();
                    }
                    label.onmouseleave = function () {
                        this.mouseover = false;
                        this.updateColor();
                    }
                    // In the onclick CB, 'this' is the var list label object, and this.viewer is the EnVNCSimpleViewer object
                    label.onclick = function () {
                        var newSelected = !this.selected;
                        let var_list = this.viewer.parent.querySelector('#varlist');
                        for (let i = 1; i < var_list.children.length; i++) {
                            if (var_list.children[i].selected) {
                                var_list.children[i].selected = false;
                                var_list.children[i].updateColor();
                            }
                        }
                        this.selected = newSelected;
                        var cmd = "";

                        if (this.selected) {
                            cmd = "v = ensight.objs.core.VARIABLES['" + this.textContent.toString() + "']\n" +
                                "for p in ensight.objs.core.PARTS:\n" +
                                "    p.COLORBYPALETTE = v";
                        } else {
                            cmd = "for p in ensight.objs.core.PARTS:\n" +
                                "    p.COLORBYPALETTE = None";
                        }
                        this.viewer.sendEnsMessage("COLORALLPARTSBY", false, cmd);
                        this.updateColor();
                    };

                    var_list.appendChild(label);
                    var mybr = document.createElement('br');
                    var_list.appendChild(mybr);
                }
            }

        } else if (tag == "PARTSELECT") {
            // Notification that the part selection has changed.  Request the new part selection
            this.sendEnsMessage("NEWPSELECT", true, "[p.DESCRIPTION for p in ensight.objs.core.selection(ensight.objs.ENS_PART).CHILDREN]");

        } else if (tag == "NEWPSELECT") {
            // (Something could have been done with the part selection here)
            if (obj) {
                var plist = obj;
                let part_select = this.parent.querySelector('#partlist');
                for (let i = 0; i < part_select.length; i++) {
                    part_select.options[i].selected = (plist.indexOf(part_select.options[i].text) >= 0);
                }
            }

        } else if (tag == "TIMESTEP_LIMITS") {
            // Notification that the timestep limits have changed.  Request the new value
            this.sendEnsMessage("NEWTIMESTEP_LIMITS", true, "ensight.objs.core.TIMESTEP_LIMITS");

        } else if (tag == "NEWTIMESTEP_LIMITS") {
            // Received new timestep limits as an array of 2 ints
            if (obj) {
                var timestepLimits = obj;
                this.startFrame = timestepLimits[0];
                this.endFrame = timestepLimits[1];
                this.updateFrameLabel();
            }

        } else if (tag == "TIMESTEP") {
            // Notification that the timestep has changed.  Request the new value
            this.sendEnsMessage("NEWTIMESTEP", true, "ensight.objs.core.TIMESTEP");

        } else if (tag == "NEWTIMESTEP") {
            // Received new current timestep as an int
            if (obj) {
                var timestep = obj;
                this.curFrame = timestep;
                this.updateFrameLabel();
            }
        } else if (tag === "PARTHIGHLIGHT") {
            // here we're notified that the part highlighting setting has changed.
            // we then send another message asking what changed, i.e current value of that variable.
            this.sendEnsMessage("PARTHIGHLIGHT_UPDATED", true, "ensight.objs.core.PARTHIGHLIGHT");
        } else if (tag === "PARTHIGHLIGHT_UPDATED") {
            // this is called back giving the current value of the variable.
            // every time there's a callback, save the value, check and set the icon image here.
            this.noVNC_hl_button.setAttribute('data-toggle', obj);
            if (obj) {
                this.noVNC_hl_button.src = this.moduleDir + 'images/icons/highlight3.svg';
            } else {
                this.noVNC_hl_button.src = this.moduleDir + 'images/icons/highlight3_off.svg';
            }
        } else if (tag === "HIDDENLINE") {
            this.sendEnsMessage("HIDDENLINE_UPDATED", true, "ensight.objs.core.HIDDENLINE");
        } else if (tag === "HIDDENLINE_UPDATED") {
            this.noVNC_hid_ln_button.setAttribute('data-toggle', obj);
            if (obj) {
                this.noVNC_hid_ln_button.src = this.moduleDir + 'images/icons/ens10_Part_hiddenline_on.svg';
            } else {
                this.noVNC_hid_ln_button.src = this.moduleDir + 'images/icons/ang10_Part_hiddenline_off.svg';
            }
        } else if (tag === "SYNTHETIC_MENU") {
            // ask for the contents only if the current client made the right click.
            if (this.has_right_clicked) {
                this.sendEnsMessage("SYNTHETIC_MENU_CONTENTS", true, "ensight.objs.core.SYNTHETIC_MENU['menu']");
                this.has_right_clicked = false;
            }
        } else if (tag === "SYNTHETIC_MENU_CONTENTS") {
            // get list of menu items
            // form: ['display_text', 'extname', flags, [...children...(list of lists)...]
            if (obj) {
                let items = this.getMenuItems(obj[3]);
                // check if we have valid menu items before triggering menu
                if (this.isMenuItemsValid(items)) {
                    // cleanup before drawing. Otherwise it uses the previously drawn menu.
                    this.destroyContextMenu();
                    // register first. second arg is the common onclick callback for all items.
                    this.registerContextMenu('#noVNC_canvas', items, function (key, options) {
                        let item_id = key.split('-item-')[1];
                        let menu_namespace = key.split('-item-')[2];
                        if (menu_namespace === "menu.fullscreen.toggle") {
                            // Special case handler for fullscreen toggle command
                            this.toggleFullscreen();
                        } else {
                            // build the command to send to EnSight.
                            // key here is the extension name
                            let command = "ensight.objs.core.SYNTHETIC_MENU['extensions'][" + item_id + "].run_info(ensight.objs.core.SYNTHETIC_MENU['info'])";
                            // trigger a message with the command
                            this.sendEnsMessage("SYNTHETIC_MENU_SELECT", false, command);
                        }
                    }.bind(this));
                    // trigger menu at position
                    this.triggerContextMenu('#noVNC_canvas', this.contextMenuXPosition, this.contextMenuYPosition);
                }
            }
        } else if (tag === "SOLUTIONTIME_MONITOR") {
            this.sendEnsMessage("SOLUTIONTIME_MONITOR_UPDATED", true, "ensight.objs.core.SOLUTIONTIME_MONITOR");
        } else if (tag === "SOLUTIONTIME_MONITOR_UPDATED") {
            // should be valid and shouldn't be off
            if (this.isValid(obj) && obj !== this.timeStepEnum.MFNTS_OFF) {
                this.ens_timestep_monitor.style.display = 'flex';

                if (obj === this.timeStepEnum.MFNTS_JUMP_TO_END) {
                    this.noVNC_timestep_monitor.src = this.moduleDir + 'images/icons/play_once_mode.svg';
                    this.noVNC_timestep_monitor.setAttribute('data-toggle', 'true');
                } else {
                    this.noVNC_timestep_monitor.src = this.moduleDir + 'images/icons/play_once_desens.svg';
                    this.noVNC_timestep_monitor.setAttribute('data-toggle', 'false');
                }
            } else {
                // hide completely
                this.ens_timestep_monitor.style.display = 'none';
            }
        }
    }

}

export default EnVNCSimpleViewer;