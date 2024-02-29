/*
 * noVNC: HTML5 VNC client
 * Copyright (C) 2012 Joel Martin
 * Copyright (C) 2016 Samuel Mannehed for Cendio AB
 * Copyright (C) 2016 Pierre Ossman for Cendio AB
 * Licensed under MPL 2.0 (see LICENSE.txt)
 *
 * See README.md for usage and integration instructions.
 */

/* jslint white: false, browser: true */
/* global window, this.parent.getElementById, Util, WebUtil, RFB, Display */

import * as Log from '../core/util/logging.js';
import { isTouchDevice, browserSupportsCursorURIs as cursorURIsSupported } from '../core/util/browsers.js';
import RFB from "../core/rfb.js";
import * as WebUtil from "./webutil.js";

function uuid() {
  var u='',i=0;
  while(i++<36) {
    var c='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i-1],r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);
    u+=(c=='-'||c=='4')?c:v.toString(16)
  }
  return u;
}

class EnVNCViewer {

    // parent: a div or element that is the parent of the elements created by this object
    // options: a dict with options.  Can be null.  Supercedes options given through the URL.
    constructor(parent, options) {
        this.parent = parent;
        this.guid = uuid();
        this.moduleDir = new URL('./', import.meta.url).pathname;

        this.connected = false;
        this.desktopName = "";

        this.resizeTimeout = null;
        this.statusTimeout = null;
        this.hideKeyboardTimeout = null;
        this.idleControlbarTimeout = null;
        this.closeControlbarTimeout = null;

        this.controlbarGrabbed = false;
        this.controlbarDrag = false;
        this.controlbarMouseDownClientY = 0;
        this.controlbarMouseDownOffsetY = 0;

        this.isSafari = false;
        this.lastKeyboardinput = null;
        this.defaultKeyboardinputLen = 100;

        this.inhibit_reconnect = true;
        this.reconnect_callback = null;
        this.reconnect_password = null;

        this.settings = {};

    
        this.commandCounter = 0;
        this.startFrame = 0;
        this.endFrame = 0;
        this.curFrame = 0;

        this.lastResizeWidth = 0;
        this.lastResizeHeight = 0;
        this.mouseIn = false;

        // enum for timesteps
        this.timeStepEnum = {
            MFNTS_STAY_AT_CURRENT: 4,
            MFNTS_JUMP_TO_END: 3,
            MFNTS_OFF: 2,
        };

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
        this.noVNC_hl_button  = this.parent.querySelector("#noVNC_hl_button");
        this.ens_part_hl_toggle = this.parent.querySelector("#ens_part_hl_toggle");
        this.noVNC_hid_ln_button = this.parent.querySelector("#noVNC_hid_ln_button");
        this.ens_hid_ln_toggle = this.parent.querySelector("#ens_hid_ln_toggle");
        this.ens_fit_viewport_btn = this.parent.querySelector("#ens_fit_viewport_btn");
        this.noVNC_fit_viewport_btn = this.parent.querySelector("#noVNC_fit_viewport_btn");
        this.ens_reset_view_btn = this.parent.querySelector("#ens_reset_view_btn");
        this.noVNC_reset_view_btn = this.parent.querySelector("#noVNC_reset_view_btn");

        // Hook up EnSight event callbacks
        // For play-pause button and seek-bar, 'this' is the UI object and this.viewer is the EnVNCViewer
        this.parent.querySelector("#play-pause").viewer = this;
        this.parent.querySelector("#play-pause").addEventListener("click", function () {
            if (this.playing) {
                this.playing = false;
                //Stop playing
                this.viewer.sendEnsMessage("STOP", false, "ensight.solution_time.stop()");
                this.src = this.viewer.moduleDir+'images/icons/playf_off.svg';
            } else {
                this.playing = true;
                //Start playing
                this.viewer.sendEnsMessage("PLAY_FORWARD", false, "ensight.solution_time.play_forward()");
                this.src = this.viewer.moduleDir+'images/icons/stop_off.svg';
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

        this.prime(options)
    }

    makeTag(name) {
        this.commandCounter += 1;
        var tag = this.commandCounter.toString()+"_"+this.guid+"_"+name;
        return tag;
    }

    prime(callback) {
        if (document.readyState === "interactive" || document.readyState === "complete") {
            this.load(callback);
        } else {
            document.addEventListener('DOMContentLoaded', this.load.bind(this, callback));
        }
    }

    // Setup rfb object, load settings from browser storage, then call
    // this.init to setup the UI/menus
    load(options) {
        WebUtil.initSettings(function (t, options) { t.start(options); } , this, options);
    }

    // Render default UI
    // options: null if unset, or the string representation of a json dictionary
    //          if not null, the 'ws' entry will be used as a URL containing connection options
    //          http[s]://[host][:port]/?[password=<psw>]&[view_only=<0|1>]
    start(options) {

        // Setup global variables first
        this.isSafari = (navigator.userAgent.indexOf('Safari') !== -1 &&
                       navigator.userAgent.indexOf('Chrome') === -1);

        let ws_url = null;
        if (options) {
            if (options instanceof URL) {
                ws_url = options;
            } else {
                let options_dict = JSON.parse(options);
                if (options_dict != null && options_dict["ws"] !== undefined) {
                    ws_url = new URL(options_dict["ws"]);
                }
            }
        }

        this.initSettings(ws_url);
        this.initFullscreen();

        // Setup event handlers
        this.addResizeHandlers();

        this.parent.classList.remove("noVNC_loading");

        var autoconnect = WebUtil.getConfigVar('autoconnect', true);
        if (autoconnect === 'true' || autoconnect == '1') {
            autoconnect = true;

            let psw = null;
            if (ws_url) {
                psw = ws_url.searchParams.get("password");
            }
            this.connect(null, psw);
        } else {
            autoconnect = false;
        }

        if (typeof callback === "function") {
            callback(this.rfb);
        }
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

    initSettings(ws_url) {
        var i;

        // if port == 80 (or 443) then it won't be present and should be
        // set manually
        var port = window.location.port;
        if (!port) {
            if (window.location.protocol.substring(0,5) == 'https') {
                port = 443;
            }
            else if (window.location.protocol.substring(0,4) == 'http') {
                port = 80;
            }
        }

        /* Populate the controls if defaults are provided in the URL */
        if (ws_url && ws_url.hostname) {
            this.initSetting('host', ws_url.hostname, null);
        } else {
            this.initSetting('host', window.location.hostname, null);
        }
        if (ws_url && ws_url.port) {
            this.initSetting('port', ws_url.port, null);
        } else {
            this.initSetting('port', null, port);
        }
        if (ws_url && ws_url.protocol) {
            this.initSetting('encrypt', (ws_url.protocol === "https:"), null);
        } else {
            this.initSetting('encrypt', (window.location.protocol === "https:"), null);
        }
        this.initSetting('cursor', null, !isTouchDevice);
        this.initSetting('view_clip', null, false);
        this.initSetting('resize', null, 'off');
        this.initSetting('shared', null, true);
        this.initSetting('view_only', null, false);

        var path = WebUtil.getConfigVar('path', 'websockify');


        if (ws_url) {
            //var token = WebUtil.getConfigVar('token', null);
            let token = ws_url.searchParams.get("token");
            if (token) {
                // if token is already present in the path we should use it
                path = WebUtil.injectParamIfMissing(path, "token", token);
                WebUtil.createCookie('token', token, 1)
            }
        }

        if (ws_url) {
            let searchParams = new URLSearchParams(ws_url.search);
            let instanceName = searchParams.get("instance_name");
            if (instanceName) {
                path = WebUtil.injectParamIfMissing(path, "instance_name", instanceName);
            }
            let url_port = searchParams.get("port");
            if (url_port !== null) {
                this.initSetting('port', url_port, null);
            }
        } else {
            let searchParams = new URLSearchParams(window.location.search);
            let instanceName = searchParams.get("instance_name");
            if (instanceName) {
                path = WebUtil.injectParamIfMissing(path, "instance_name", instanceName);
            }
            // see if there's an explict port query parameter
            let url_port = searchParams.get("port");
            if (url_port !== null) {
                this.initSetting('port', url_port, null);
            }
        }

        this.updateSetting('path', path);

        this.initSetting('repeaterID', null, '');
        this.initSetting('reconnect', null, false);
        this.initSetting('reconnect_delay', null, 5000);

    }

    initRFB() {
        try {
            this.rfb = new RFB({'target': this.parent.querySelector('#noVNC_canvas'),
                                'onNotification': this.notification.bind(this),
                                'onUpdateState': this.updateState.bind(this),
                                'onDisconnected': this.disconnectFinished.bind(this),
                                'onPasswordRequired': this.passwordRequired.bind(this),
                                'onXvpInit': null, //this.updateXvpButton.bind(this),
                                'onClipboard': this.clipboardReceive.bind(this),
                                'onBell': this.bell.bind(this),
                                'onFBUComplete': this.initialResize.bind(this),
                                'onFBResize': this.updateSessionSize.bind(this),
                                'onDesktopName': this.updateDesktopName.bind(this)});
            return true;
        } catch (exc) {
            var msg = "Unable to create RFB client -- " + exc;
            Log.Error(msg);
            this.showStatus(msg, 'error');
            return false;
        }
    }

/* ------^-------
*     /INIT
* ==============
* EVENT HANDLERS
* ------v------*/

    addResizeHandlers() {
        window.addEventListener('resize', this.applyResizeMode.bind(this));
        //window.addEventListener('resize', this.updateViewClip.bind(this));
        window.addEventListener('resize', this.sendResizeCommand.bind(this));
    }

    addFullscreenHandlers() {
        this.parent.querySelector("#noVNC_fullscreen_button")
            .addEventListener('click', this.toggleFullscreen.bind(this));
    }

/* ------^-------
 * /EVENT HANDLERS
 * ==============
 *     VISUAL
 * ------v------*/

    updateState(rfb, state, oldstate) {
        var msg;

        this.parent.classList.remove("noVNC_connecting");
        this.parent.classList.remove("noVNC_connected");
        this.parent.classList.remove("noVNC_disconnecting");
        this.parent.classList.remove("noVNC_reconnecting");

        switch (state) {
            case 'connecting':
                this.parent.querySelector("#noVNC_transition_text").textContent = "Connecting...";
                this.parent.classList.add("noVNC_connecting");
                break;
            case 'connected':
                this.connected = true;
                this.inhibit_reconnect = false;
                this.parent.classList.add("noVNC_connected");
                if (rfb && rfb.get_encrypt()) {
                    msg = "Connected (encrypted) to " + this.desktopName;
                } else {
                    msg = "Connected (unencrypted) to " + this.desktopName;
                }
                this.showStatus(msg);

                // Resize EnSight to match rendering window
                //var vncScreenElem = this.parent.querySelector("#noVNC_connected");
                //var ss = this.screenSize();
                this.sendResizeCommand();

                // Set up partlist callbacks to EnSight
                this.registerEnsCallback("PARTLIST",        "ensight.objs.core", "['PARTS']");
                this.registerEnsCallback("PARTLIST",        "'ENS_PART'", "[ensight.objs.enums.VISIBLE]");
                this.registerEnsCallback("PARTSELECT",      "ensight.objs.core.selection(ensight.objs.ENS_PART)", "['CHILDREN']");
                this.registerEnsCallback("TIMESTEP",        "ensight.objs.core", "['TIMESTEP']");
                this.registerEnsCallback("TIMESTEP_LIMITS", "ensight.objs.core", "['TIMESTEP_LIMITS']");
                this.registerEnsCallback("VARLIST",         "ensight.objs.core", "['VARIABLES']");


                // Part highlight callback register
                this.registerEnsCallback("PARTHIGHLIGHT", "ensight.objs.core", "['PARTHIGHLIGHT']");
                // get initial info
                this.sendEnsMessage("PARTHIGHLIGHT_UPDATED", true, "ensight.objs.core.PARTHIGHLIGHT");

                // Overlay hidden lines callback register
                this.registerEnsCallback("HIDDENLINE", "ensight.objs.core","['HIDDENLINE']");
                // get initial info
                this.sendEnsMessage("HIDDENLINE_UPDATED", true, "ensight.objs.core.HIDDENLINE");

                // Synthetic menu register
                this.registerEnsCallback("SYNTHETIC_MENU", "ensight.objs.core","['SYNTHETIC_MENU']");

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
                this.connected = false;
                this.parent.querySelector("#noVNC_transition_text").textContent = "Disconnecting...";
                this.parent.classList.add("noVNC_disconnecting");

                var part_list = this.parent.querySelector('#partlist');
                while (part_list.children.length > 1) {
                    part_list.removeChild(part_list.lastChild);
                }
                var var_list = this.parent.querySelector('#varlist');
                while (var_list.children.length > 1) {
                    var_list.removeChild(var_list.lastChild);
                }
                this.parent.querySelector('#ens_partlist').style.display = "none";
                this.parent.querySelector('#ens_varlist').style.display = "none";
                this.startFrame = 0;
                this.endFrame = 0;
                this.curFrame = 0;
                this.updateFrameLabel();
                //this.parent.querySelector("#play-pause").innerHTML = "Play";
                this.parent.querySelector("#seek-bar").value = 0;

                break;
            case 'disconnected':
                this.showStatus("Disconnected");
                break;
            default:
                msg = "Invalid UI state";
                Log.Error(msg);
                this.showStatus(msg, 'error');
                break;
        }
    }

    showStatus(text, status_type, time) {
        var statusElem = this.parent.querySelector('#noVNC_status');

        clearTimeout(this.statusTimeout);

        if (typeof status_type === 'undefined') {
            status_type = 'normal';
        }

        statusElem.classList.remove("noVNC_status_normal");
        statusElem.classList.remove("noVNC_status_warn");
        statusElem.classList.remove("noVNC_status_error");

        switch (status_type) {
            case 'warning':
            case 'warn':
                statusElem.classList.add("noVNC_status_warn");
                break;
            case 'error':
                statusElem.classList.add("noVNC_status_error");
                break;
            case 'normal':
            case 'info':
            default:
                statusElem.classList.add("noVNC_status_normal");
                break;
        }

        statusElem.textContent = text;
        statusElem.classList.add("noVNC_open");

        // If no time was specified, show the status for 1.5 seconds
        if (typeof time === 'undefined') {
            time = 1500;
        }

        // Error messages do not timeout
        if (status_type !== 'error') {
            this.statusTimeout = window.setTimeout(this.hideStatus.bind(this), time);
        }
    }

    hideStatus() {
        clearTimeout(this.statusTimeout);
        this.parent.querySelector('#noVNC_status').classList.remove("noVNC_open");
    }

    notification (rfb, msg, level, options) {
        this.showStatus(msg, level);
    }

/* ------^-------
 *    /VISUAL
 * ==============
 *    SETTINGS
 * ------v------*/

    // Initialize and store a setting.  Set name to val, if val is not null or undefined.  
    // If val is invalid, try to get it from the page URL.  If not present in the URL, use defVal.
    initSetting(name, val, defVal) {
        if (typeof val !== 'undefined' && val !== null) {
            this.updateSetting(name, val);
            return val;
        } else {
            // val is invalid.  Check the URL for a value.
            var valurl = WebUtil.getConfigVar(name);
            if (valurl !== null) {
                this.updateSetting(name, valurl);
                return valurl;
            } else {
                this.updateSetting(name, defVal);
                return defVal;
            }
        }
    }

    updateSetting(name, value) {
        if (name && (typeof value !== 'undefined')) {
            this.settings[name] = value;
        }
    }

    // Read form control compatible setting from cookie
    getSetting(name) {
        var val = this.settings[name];
        
        if (typeof val !== 'undefined' && val !== null) {
            if (name == "shared" || name == "view_only" || name == "view_clip" || name == "cursor" || name == "encrypt" || name == "reconnect") {
                if (val.toString().toLowerCase() in { '0': 1, 'no': 1, 'false': 1 }) {
                    val = false;
                } else {
                    val = true;
                }
            }
        }
        
        return val;
    }

/* ------^-------
 *   /SETTINGS
 * ==============
 *   CLIPBOARD
 * ------v------*/
    
    clipboardReceive(rfb, text) {
        // Exchange Ens messages through the clipboard.  If a VNC client posts a message
        // formed like this to the clipboard, dispatch it through this.handleEnsMessage()
        // <ensret [msg num]_[Session UUID]>'[message]'
        if (text.startsWith("<ensret")) {
            var iTagStart = text.indexOf(this.guid);
            var iTagEnd = text.indexOf('>');
            if (iTagStart >= 0 && iTagEnd >= 0 && this.guid.length > 0) {
                iTagStart += this.guid.length+1;

                var tag = text.substr(iTagStart,iTagEnd-iTagStart);

                var commandID = -1;
                var endCommandID = text.indexOf('_');
                if (endCommandID > 0) {
                    //skip 8 chars for "<ensret ", then parse up to the first underscore char
                    commandID = JSON.parse( text.substr(8, endCommandID-8) );
                }

                var jsObj = null;
                if (text.length-1 > iTagEnd+2 && text[iTagEnd+1] == "'" && text[text.length-1] == "'") {
                    jsObj = JSON.parse( text.substr(iTagEnd+2, (text.length-1)-(iTagEnd+2)) );
                }
                this.handleEnsMessage(tag, commandID, jsObj);
            }
        }
    }

    clipboardClear() {
        //this.parent.querySelector('#noVNC_clipboard_text').value = "";
        this.rfb.clipboardPasteFrom("");
    }
/* ------^-------
 *  /CLIPBOARD
 * ==============
 *  CONNECTION
 * ------v------*/
    connect(event, password) {
        var host = this.getSetting('host');
        var port = this.getSetting('port');
        var path = this.getSetting('path');

        if (password === null) {
            password = undefined;
        }

        if (typeof password === 'undefined') {
            password = WebUtil.getConfigVar('password');
        }

        if ((!host) || (!port)) {
            var msg = "Must set host and port";
            Log.Error(msg);
            this.showStatus(msg, 'error');
            return;
        }

        if (!this.initRFB()) return;

        this.rfb.set_encrypt(this.getSetting('encrypt'));
        this.rfb.set_shared(this.getSetting('shared'));
        this.rfb.set_repeaterID(this.getSetting('repeaterID'));

        this.updateLocalCursor();
        this.updateViewOnly();

        this.rfb.connect(host, port, password, path);

    }

    disconnect() {
        this.rfb.disconnect();

        // Disable automatic reconnecting
        this.inhibit_reconnect = true;

        // Restore the callback used for initial resize
        this.rfb.set_onFBUComplete(this.initialResize);

        // Don't display the connection settings until we're actually disconnected
    }

    reconnect() {
        this.reconnect_callback = null;

        // if reconnect has been disabled in the meantime, do nothing.
        if (this.inhibit_reconnect) {
            return;
        }

        this.connect(null, this.reconnect_password);
    }

    disconnectFinished(rfb, reason) {
        if (typeof reason !== 'undefined') {
            this.showStatus(reason, 'error');
        } else if (this.getSetting('reconnect', false) === true && !this.inhibit_reconnect) {
            this.parent.querySelector("#noVNC_transition_text").textContent = "Reconnecting...";
            this.parent.classList.add("noVNC_reconnecting");

            var delay = parseInt(this.getSetting('reconnect_delay'));
            this.reconnect_callback = setTimeout(this.reconnect, delay);
            return;
        }
    }
/* ------^-------
 *  /CONNECTION
 * ==============
 *   PASSWORD
 * ------v------*/

    passwordRequired(rfb, msg) {

        this.parent.querySelector('#noVNC_password_dlg')
            .classList.add('noVNC_open');

        setTimeout(function () {
                this.parent.querySelector('#noVNC_password_input').focus();
            }, 100);

        if (typeof msg === 'undefined') {
            msg = "Password is required";
        }
        Log.Warn(msg);
        this.showStatus(msg, "warning");
    }

    setPassword(e) {
        var inputElem = this.parent.querySelector('#noVNC_password_input');
        var password = inputElem.value;
        // Clear the input after reading the password
        inputElem.value = "";
        this.rfb.sendPassword(password);
        this.reconnect_password = password;
        this.parent.querySelector('#noVNC_password_dlg')
            .classList.remove('noVNC_open');
        // Prevent actually submitting the form
        e.preventDefault();
    }

/* ------^-------
 *  /PASSWORD
 * ==============
 *   FULLSCREEN
 * ------v------*/
    isFullscreen() {
        return (document.fullscreenElement || // alternative standard method
                document.mozFullScreenElement || // currently working methods
                document.webkitFullscreenElement ||
                document.msFullscreenElement);
    }

    toggleFullscreen() {
        if (this.isFullscreen()) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (this.parent.requestFullscreen) {
                this.parent.requestFullscreen();
            } else if (this.parent.mozRequestFullScreen) {
                this.parent.mozRequestFullScreen();
            } else if (this.parent.webkitRequestFullscreen) {
                this.parent.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (this.parent.body.msRequestFullscreen) {
                this.parent.body.msRequestFullscreen();
            }
        }
    }

/* ------^-------
 *  /FULLSCREEN
 * ==============
 *     RESIZE
 * ------v------*/

    // Apply remote resizing or local scaling
    applyResizeMode() {
        if (!this.rfb) return;

        var screen = this.screenSize();

        if (screen && this.connected && this.rfb.get_display()) {

            var display = this.rfb.get_display();
            var resizeMode = this.getSetting('resize');
            display.set_scale(1);

            if (resizeMode === 'remote') {

                // Request changing the resolution of the remote display to
                // the size of the local browser viewport.

                // In order to not send multiple requests before the browser-resize
                // is finished we wait 0.5 seconds before sending the request.
                clearTimeout(this.resizeTimeout);
                this.resizeTimeout = setTimeout(function(){
                    // Request a remote size covering the viewport
                    if (this.rfb.requestDesktopSize(screen.w, screen.h)) {
                        Log.Debug('Requested new desktop size: ' +
                                   screen.w + 'x' + screen.h);
                    }
                }, 500);

            } else {
                this.updateScaling();
            }
        }
    }

    // Re-calculate local scaling
    updateScaling() {
        if (!this.rfb) return;

        var resizeMode = this.getSetting('resize');
        if (resizeMode !== 'scale' && resizeMode !== 'downscale') {
            return;
        }

        var screen = this.screenSize();

        if (!screen || !this.connected || !this.rfb.get_display()) {
            return;
        }

        var display = this.rfb.get_display();
        var downscaleOnly = resizeMode === 'downscale';
        display.autoscale(screen.w, screen.h, downscaleOnly);
        this.fixScrollbars();
    }

    sendResizeCommand() {
        if (!this.rfb) return;

        var tol = 5;
        // Make sure the resize is by more than tol pixels, in width or height.   Prevents excessive resize requests.
        // Also avoids problems where Chrome can get into a weird feedback loop going to fullscreen mode, 
        // where it resizes back and forth between 1920x1080 and 1920x1079
        if (this.parent.clientWidth  < this.lastResizeWidth-tol  || this.parent.clientWidth  > this.lastResizeWidth+tol ||
            this.parent.clientHeight < this.lastResizeHeight-tol || this.parent.clientHeight > this.lastResizeHeight+tol) {

            this.lastResizeWidth = this.parent.clientWidth;
            this.lastResizeHeight = this.parent.clientHeight;

            this.sendEnsMessage("RESIZE", false, "ensight.objs.core.WINDOWSIZE=["+this.parent.clientWidth+","+this.parent.clientHeight+"]");
        }
    }

    // Gets the the size of the available viewport in the browser window
    screenSize() {
        var screen = this.parent.querySelector('#noVNC_screen');
        return {w: screen.offsetWidth, h: screen.offsetHeight};
    }

    // Normally we only apply the current resize mode after a window resize
    // event. This means that when a new connection is opened, there is no
    // resize mode active.
    // We have to wait until the first FBU because this is where the client
    // will find the supported encodings of the server. Some calls later in
    // the chain is dependant on knowing the server-capabilities.
    initialResize(rfb, fbu) {
        this.applyResizeMode();
        // After doing this once, we remove the callback.
        this.rfb.set_onFBUComplete(function() { });
    }

/* ------^-------
 *    /RESIZE
 * ==============
 *     MISC
 * ------v------*/

    setMouseButton(num) {
        var view_only = this.rfb.get_view_only();
        if (this.rfb && !view_only) {
            this.rfb.get_mouse().set_touchButton(num);
        }

        var blist = [0, 1,2,4];
        for (var b = 0; b < blist.length; b++) {
            var button = this.parent.querySelector('#noVNC_mouse_button' +
                                                 blist[b]);
            if (blist[b] === num && !view_only) {
                button.classList.remove("noVNC_hidden");
            } else {
                button.classList.add("noVNC_hidden");
            }
        }
    }
    updateLocalCursor() {
        if (!this.rfb) return;
        this.rfb.set_local_cursor(this.getSetting('cursor'));
    }

    updateViewOnly() {
        if (!this.rfb) return;
        this.rfb.set_view_only(this.getSetting('view_only'));
    }

    updateLogging() {
        WebUtil.init_logging(this.getSetting('logging'));
    }

    updateSessionSize(rfb, width, height) {
        //this.updateViewClip();
        this.updateScaling();
        this.fixScrollbars();
    }

    fixScrollbars() {
        // This is a hack because Chrome screws up the calculation
        // for when scrollbars are needed. So to fix it we temporarily
        // toggle them off and on.
        var screen = this.parent.querySelector('#noVNC_screen');
        screen.style.overflow = 'hidden';
        // Force Chrome to recalculate the layout by asking for
        // an element's dimensions
        screen.getBoundingClientRect();
        screen.style.overflow = "";
    }

    updateDesktopName(rfb, name) {
        this.desktopName = name;
        // Display the desktop name in the document title
        //this.parent.title = name + " - noVNC";
    }

    bell(rfb) {
    }

    //Helper to add options to dropdown.
    addOption(selectbox, text, value) {
        var optn = document.createElement("OPTION");
        optn.text = text;
        optn.value = value;
        selectbox.options.add(optn);
    }

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

        curFrameLabel.innerText = '['+(this.curFrame + 1).toString() + ' / '+(1 + this.endFrame - this.startFrame).toString()+']'
        if (this.endFrame > 0) {
            seekBar.value = 1000 * this.curFrame / this.endFrame;
        }
    }

    // return the partlist in ansys-nexus-viewer component form
    parts() {
        let return_list = [];
        for(const part of this.partlist) {
            return_list.push(part.pathname);
        }
        return return_list;
    }

/* ------^-------
 *    /MISC
 * =================
 * Ens Communication
 * ------v------*/

    //Register callback, to be notified when an Ens attribute changes
    //
    //tag:             string: the Ens response message, received when object(s) to watch changes, will have the string tag
    //pyObjsToTag:     string: contains Ens Python object to watch
    //pyAttribToWatch: string: contains the attrib on pyObjsToTag to watch
    registerEnsCallback(tag, pyObjsToTag, pyAttribToWatch) {
        this.rfb.clipboardPasteFrom("<enscmd "+this.makeTag("REG")+" json>ensight.objs.addcallback(" +pyObjsToTag+ ", None, '"+this.makeTag(tag)+"', attrs="+pyAttribToWatch+")");
    }

    //Send a message to an Ens app.
    //
    //tag:             string: the Ens response message, if any, will have this tag
    //isQuery:         bool:   if true, 'msg' will be evaluated and a json object will be sent in response.  
    //                         if false, just execute the message
    //                  Note that if you set isQuery to true when the return value of the Python code is None,
    //                  it will throw an error, so if you're just executing something, set isQuery to false.
    //msg:             string: contains Ens Python code to execute or evaluate
    //return val:      int:    command ID which can later be matched to the ID passed in to handleEnsMessage
    sendEnsMessage(tag, isQuery, msg) {
        if (isQuery) {
            this.rfb.clipboardPasteFrom("<enscmd " + this.makeTag(tag) + " json>"+msg);
        } else {
            this.rfb.clipboardPasteFrom("<enscmd " + this.makeTag(tag) + " exec>"+msg);
        }
        return this.commandCounter;
    }

    //Handle a message from an Ens app, such as a response from a call to sendEnsMessage(), or a notification from
    //a callback registered through registerEnsCallback().
    // 
    //tag:             string:    the Ens response message, if any, will have this tag
    //commandID:       int:       unique ID for each command, returned from sendEnsMessage().  Could be used so a client can
    //                            send commands and match up responses later.
    //obj:             js object: The message can optionally include a js object (encoded as json, parsed by the caller)
    handleEnsMessage(tag, commandID, obj) {
        if (tag == "PARTLIST") {
            // Notification that the partlist has changed.  Request a new partlist
            this.sendEnsMessage("NEWPLIST", true, "[[p.DESCRIPTION, p.VISIBLE, p.PATHNAME] for p in ensight.objs.core.PARTS]");

        } else if (tag == "NEWPLIST") {
            if (obj) {
                var plist = obj;
                let part_list = this.parent.querySelector('#partlist');
                while (part_list.children.length > 1) {
                    part_list.removeChild(part_list.lastChild);
                }
                // reset the partlist as well
                this.partlist = [];
                for (let i = 0; i < plist.length; i++) {
                    this.partlist.push( {'name': plist[i][0], 'visible': plist[i][1], 'pathname': plist[i][2]} );
                    let option = document.createElement('option');

                    var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.name = "partlistCheckbox";
                    checkbox.defaultValue = plist[i][0];
                    checkbox.value = plist[i][0];
                    checkbox.id = "partlistCheckbox"+i.toString();
                    checkbox.partid = i;
                    checkbox.checked = plist[i][1];
                    checkbox.viewer = this;

                    // In the onclick CB, 'this' is the var list label object, and this.viewer is the EnVNCViewer object
                    checkbox.onclick = function () {
                        if (this.checked) {
                            this.viewer.sendEnsMessage("SHOWPARTS", false, "ensight.objs.core.PARTS["+this.partid.toString()+"].VISIBLE=1");
                        } else {
                            this.viewer.sendEnsMessage("HIDEPARTS", false, "ensight.objs.core.PARTS["+this.partid.toString()+"].VISIBLE=0");
                        }
                    };

                    var label = document.createElement('label');
                    label.htmlFor = "partlistCheckbox"+i.toString();  //Lets a click on this label also count as a click on the checkbox
                    label.appendChild(document.createTextNode(plist[i][0]));

                    part_list.appendChild(checkbox);
                    part_list.appendChild(label);
                    var mybr = document.createElement('br');
                    part_list.appendChild(mybr);
                }
                const parts_event = new CustomEvent('parts-changed', {bubbles: true, detail: {}});
                this.parent.dispatchEvent(parts_event);
            }
        } else if (tag == "VARLIST") {
            this.sendEnsMessage("NEWVARLIST", true, "[v.DESCRIPTION for v in ensight.objs.core.VARIABLES if (v.VARTYPE==ensight.objs.enums.ENS_VAR_VECTOR or v.VARTYPE==ensight.objs.enums.ENS_VAR_SCALAR) and not v.PRIVATE]");
        } else if (tag == "NEWVARLIST") {
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
                    // In the onclick CB, 'this' is the var list label object, and this.viewer is the EnVNCViewer object
                    label.onclick = function () {
                        var newSelected = !this.selected;
                        let var_list = this.viewer.parent.querySelector('#varlist');
                        for (let i = 1; i < var_list.children.length; i++) {
                            if (var_list.children[i].selected) {
                                var_list.children[i].selected=false;
                                var_list.children[i].updateColor();
                            }
                        }
                        this.selected = newSelected;
                        var cmd = "";

                        if (this.selected) {
                            cmd = "v = ensight.objs.core.VARIABLES['"+this.textContent.toString()+"']\n" +
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
            if(obj) {
                this.noVNC_hl_button.src = this.moduleDir+'images/icons/highlight3.svg';
            } else {
                this.noVNC_hl_button.src = this.moduleDir+'images/icons/highlight3_off.svg';
            }
        } else if (tag === "HIDDENLINE") {
            this.sendEnsMessage("HIDDENLINE_UPDATED", true, "ensight.objs.core.HIDDENLINE");
        } else if (tag === "HIDDENLINE_UPDATED") {
            this.noVNC_hid_ln_button.setAttribute('data-toggle', obj);
            if (obj) {
                this.noVNC_hid_ln_button.src = this.moduleDir+'images/icons/ens10_Part_hiddenline_on.svg';
            } else {
                this.noVNC_hid_ln_button.src = this.moduleDir+'images/icons/ang10_Part_hiddenline_off.svg';
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
                    this.noVNC_timestep_monitor.src = this.moduleDir+'images/icons/play_once_mode.svg';
                    this.noVNC_timestep_monitor.setAttribute('data-toggle', 'true');
                } else {
                    this.noVNC_timestep_monitor.src = this.moduleDir+'images/icons/play_once_desens.svg';
                    this.noVNC_timestep_monitor.setAttribute('data-toggle', 'false');
                }
            } else {
                // hide completely
                this.ens_timestep_monitor.style.display = 'none';
            }
        }
    }

    /* ------^-------
     * /Ens Communication
     * ================= */

    // ============jQuery contextmenu=============
    registerContextMenu (selector, items, global_callback) {
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
            $(selector).contextMenu({x: x_pos, y: y_pos});
        }
    }

    updateContextMenu () {
        if ($.contextMenu) {
            $.contextMenu('update');
        }
    }

    destroyContextMenu () {
        if ($.contextMenu) {
            $.contextMenu('destroy');
        }
    }

    // Parse menu items into the format accepted by jQuery-contextmenu
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

    
    getToggle(el, value) {
        // get the current value and negate it to get the new value
        let toggle = !(el.getAttribute(value) === 'true');
        // save, check and return
        el.setAttribute(value, toggle);
        // we return the appropriate Python bool.
        return toggle ? "True" : "False";
    }


// ============jQuery contextmenu=============

};

export default EnVNCViewer;
