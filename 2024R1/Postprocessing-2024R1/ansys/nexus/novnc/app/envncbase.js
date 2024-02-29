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

/*
 * This class was inspired by the noVNC HTML5 VNC client
 * Licensed under MPL 2.0
 */

import * as Log from '../core/util/logging.js';
import { isTouchDevice, browserSupportsCursorURIs as cursorURIsSupported } from '../core/util/browsers.js';
import RFB from "../core/rfb.js";
import * as WebUtil from "./webutil.js";


// A simple VNC viewer, that connects to an EnSight or EnVision session, passing keyboard and mouse events
class EnVNCBase {

    // parent: a div or element that is the parent of the elements created by this object
    // options: either a URL object for the websocket, or a json encoded string containing a "ws" key whose value is a URL.
    // rest_url: If available, REST calls can be made against this URL
    constructor(parent, options, rest_url) {
        this.parent = parent;
        this.moduleDir = new URL('./', import.meta.url).pathname;

        this.connected = false;

        this.rest_url = null;   
        this.rest_security_token = null;

        if (rest_url instanceof URL) {
            this.rest_url = rest_url;
            this.rest_url.pathname = "";
            this.rest_url.search = "";
        }
        this.event_src = null;

        this.desktopName = "";

        this.resizeTimeout = null;
        this.statusTimeout = null;

        this.isSafari = false;
        this.lastKeyboardinput = null;
        this.defaultKeyboardinputLen = 100;

        this.inhibit_reconnect = true;
        this.reconnect_callback = null;
        this.reconnect_password = null;

        this.settings = {};


        this.lastResizeWidth = 0;
        this.lastResizeHeight = 0;

        this.prime(options);
    }


    prime(options) {
        if (document.readyState === "interactive" || document.readyState === "complete") {
            this.load(options);
        } else {
            document.addEventListener('DOMContentLoaded', this.load.bind(this, options));
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
                WebUtil.createCookie('token', token, 1);
                this.rest_security_token = token;
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


    registerEvents() {
        // Example REST call to listen for part list changes
        if (this.rest_url && this.rest_security_token) {
            // Register interest in changes to the part list
            let cmd = {"obj":   "ensight.objs.core", 
                       "tag":   "PARTLIST", 
                       "attrs": "['PARTS']" };
            let cmdstr = JSON.stringify(cmd);
            let cmdurl = this.rest_url;
            cmdurl.pathname = "/ensight/v1/ABC/register_event";
            fetch(cmdurl, {method: "PUT", body: cmdstr, headers: {Authorization: "Bearer "+this.rest_security_token}})
                .then(function (response) {
                    if (!response.ok) {
                        console.log("REST call failed to register event");
                    }
                });
        }
    }


    openEventStream() {
        if (this.rest_url && this.rest_security_token) {
            // Open one EventSource that receives all event callbacks.
            this.event_src = new EventSource("/ensight/v1/"+this.rest_security_token+"/open_callback_stream");
            this.event_src.addEventListener(this.rest_security_token, function (e) {
                console.log("REST event: tag="+e.lastEventId+", attr="+e.data);
            });
        }
    }


    closeEventStream() {
        if (this.event_src) {
            this.event_src.close();
            this.event_src = null;
        }
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
                this.sendResizeCommand();
                //this.openEventStream();
                //this.registerEvents();
                break;
            case 'disconnecting':
                this.connected = false;
                this.parent.querySelector("#noVNC_transition_text").textContent = "Disconnecting...";
                this.parent.classList.add("noVNC_disconnecting");

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
    }

    clipboardClear() {
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
        //this.closeEventStream();

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
        if ((!this.rfb) || (!this.connected)) return;

        const tol = 5;
        // Make sure the resize is by more than tol pixels, in width or height.   Prevents excessive resize requests.
        // Also avoids problems where Chrome can get into a weird feedback loop going to fullscreen mode, 
        // where it resizes back and forth between 1920x1080 and 1920x1079
        if (this.parent.clientWidth  < this.lastResizeWidth-tol  || this.parent.clientWidth  > this.lastResizeWidth+tol ||
            this.parent.clientHeight < this.lastResizeHeight-tol || this.parent.clientHeight > this.lastResizeHeight+tol) {

            this.lastResizeWidth = this.parent.clientWidth;
            this.lastResizeHeight = this.parent.clientHeight;
            
            if (this.rest_url && this.rest_security_token) {
                let cmdstr = "ensight.objs.core.WINDOWSIZE=[" + this.parent.clientWidth + "," + this.parent.clientHeight + "]";
                let cmdurl = this.rest_url;
                cmdurl.pathname = "/ensight/v1/ABC/exec";
                fetch(cmdurl, {method: "PUT", body: "\""+cmdstr+"\"", headers: {Authorization: "Bearer "+this.rest_security_token}})
                    .then(function (response) {
                        if (!response.ok) {
                            console.log("REST call failed to resize");
                        }
                    });
            } else {
                //This is the only use of the original clipboard based communication.
                this.rfb.clipboardPasteFrom("<enscmd UNUSED_TAG exec>ensight.objs.core.WINDOWSIZE=[" + this.parent.clientWidth + "," + this.parent.clientHeight + "]");
            }
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

    /* ------^-------
     *    /MISC
     * --------------   
     */
};

export default EnVNCBase;
