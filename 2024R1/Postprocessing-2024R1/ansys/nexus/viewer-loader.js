/*
 * Copyright 2018-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 *
 * Restricted Rights Legend
 *
 * Use, duplication, or disclosure of this
 * software and its documentation by the
 * Government is subject to restrictions as
 * set forth in subdivision [(b)(3)(ii)] of
 * the Rights in Technical Data and Computer
 * Software clause at 52.227-7013.
 */
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

// We need thisScriptDir to have the URL without any query parameters.
// Then we get rid of the file name from the pathname.
// Last, we remove "angular/" if found.
let ourUrl = new URL(document.currentScript.src);
let thisScriptDir = ourUrl.origin + ourUrl.pathname;
thisScriptDir = thisScriptDir.substring(0, thisScriptDir.lastIndexOf('/')) + '/';
thisScriptDir = thisScriptDir.replace("/angular/", "/");
// Ensure the required modules are loaded: jquery, inflate, unzip, ANSYSViewer
const AnsysNexusViewerDepends = [["jQuery", "utils/jquery.min.js"],
    ["JSUnzip", "utils/js-unzip.js"],
    ["JSInflate", "utils/js-inflate.js"],
    ["jQueryContextMenuCSS", "novnc/vendor/jQuery-contextMenu/jquery.contextMenu.min.css"],
    ["jQueryContextMenu", "novnc/vendor/jQuery-contextMenu/jquery.contextMenu.min.js"],
    ["jQueryContextMenuUI", "novnc/vendor/jQuery-contextMenu/jquery.ui.position.min.js"],
    ["GLTFViewer", "ANSYSViewer_min.js"],
    ["", "closure-library/closure/goog/base.js"],
    ["", "google-protobuf/google-protobuf.js"],
    ["proto.ensightservice", "dynamic_scene_graph_pb.js"],
    ["", "threejs/three.js"],
    ["", "threejs/ArcballControls.js"],
    ["", "threejs/GLTFLoader.js"]];


for (const depLoad of AnsysNexusViewerDepends) {
    // Only load if not already loaded
    if ((depLoad[0].length === 0) || (!window.hasOwnProperty(depLoad[0]))) {
        if (depLoad[1].endsWith(".js")) {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = thisScriptDir + depLoad[1];
            script.async = false;  // async=false ensures scripts are loaded in order, because jquery context menus depend on jquery
            document.getElementsByTagName('head')[0].appendChild(script);
        } else if (depLoad[1].endsWith(".css")) {
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = thisScriptDir + depLoad[1];
            link.async = false;
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    }
}

// Define HTML template(s)
const AnsysNexusViewerTemplate = document.createElement('template');
AnsysNexusViewerTemplate.innerHTML = `
<style>
.ansys-nexus-viewer {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
.ansys-nexus-proxy {
  margin:auto;
  width:9.375rem;
  height:6.5625rem;
}
.ansys-nexus-play {
  position: absolute;
  width: 2.5rem;
  height: 3.125rem;
  top:50%; left: 50%; transform: translate(-50%, -50%);
  pointer-events:none;
  display: none;
}
.ansys-nexus-proxy:hover + .ansys-nexus-play {
  display: block;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #888;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #888 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
<div class="ansys-nexus-viewer" style="position:relative">
<img class="ansys-nexus-proxy" id="proxy-img" src="/ansys/nexus/images/proxy_viewer.png" style="display:none">
<img class="ansys-nexus-play" id="proxy-play" src="/ansys/nexus/images/play.png">
<div class="ansys-nexus-viewer" id="render-div" style="display: none"><h1>Viewer Active</h1></div>
<div class="lds-ring" id="render-wait" style="position:absolute;right:0;top:0;display:none"><div></div><div></div><div></div><div></div></div>
</div>
`;

// Interface to the GLTFViewer renderer
class GLTFViewerGlue {
    constructor(parent) {
        this._parent = parent;
        this._renderer = null;
        this._webgl_support = null;
    }

    internalRenderer() {
        return this._renderer;
    }

    renderImage() {
        if (this._renderer) {
            return this._renderer.GetRenderedImage();
        }
        return null;
    }

    mouseIn(e) {
        // When the mouse enters an active viewer, mark it as more "recent"
        this._parent.refreshInstance();
    }

    divID() {
        return 'avz-viewer-' + this._parent.guid;
    }

    resizeRenderer(width, height) {
        if (this._renderer === null) return;
        this._renderer.UpdateLayout();
    }

    setPerspective(on) {
        if (this._renderer === null) return;
        this._renderer.scene.navigator.persp = on;
    }

    parts() {
        if (this._renderer === null) return [];
        return this._renderer.GetParts();
    }

    setSrc(url, extension) {
        if (this._renderer === null) return;
        this._renderer.AddFiles(null, url, extension, GLTFViewer.LT_REPLACE);
    }

    setActive(on) {
        let renderDiv = this._parent.querySelector('#render-div');
        if (on) {
            if (this._webgl_support === null) this._webgl_support = webgl_support();
            if (this._webgl_support) {
                // Default options
                let options = {
                    showLogo: false,
                    showFileOpen: false,
                    allowEdit: false,
                    showHighlight: false,
                    showAbout: false,
                    showMarkup: false,
                    showOptions: false,
                    showViewport: false,
                    showExplode: false
                };
                // override from parent
                if (this._parent.renderer_options !== null) {
                    options = this._parent.renderer_options;
                    if (typeof (options) === 'string') options = JSON.parse(options);
                }
                // The avz renderer needs to go into a div with a unique global id
                renderDiv.innerHTML = '<div class="ansys-nexus-viewer" id="' + this.divID() + '"></div>';
                let avzDiv = this._parent.querySelector('#' + this.divID());
                avzDiv.addEventListener('mouseenter', this.mouseIn.bind(this));
                this._renderer = new GLTFViewer(this.divID(), this._parent.src, this._parent.src_ext, null, options);
                this.setPerspective(this._parent.perspective);
            } else {
                // Display WebGL error message
                renderDiv.innerHTML = '<div class="ansys-nexus-viewer" id="' + this.divID() + '"></div>';
                let avzDiv = this._parent.querySelector('#' + this.divID());
                avzDiv.innerHTML = '<em>Warning: WebGL is not supported by this browser.<br>3D interactive geometry will not be displayed.</em>';
            }
        } else {
            // Handle deactivation
            if (this._renderer !== null) this._renderer.Clear();
            this._renderer = null;
            renderDiv.innerHTML = '';
        }
    }
}


// A list of the created instances
var AnsysNexusViewerInstanceList = [];
// A list of the currently active instances
var AnsysNexusViewerActiveInstanceList = [];
// The real limit varies based on browser implementations. Some browsers limit per-domain (cross-pages)
// and some limit per-tab or per-page.  The maximum is usually 8 or 16.  4 reflects the idea that other
// WebGL-based components might be in use and the fact that we cannot track over tabs/pages.
const AnsysNexusViewerMaxActiveInstances = 4;
// Internal "uid" generation.  Not a true UID, but a sequence of unique strings
var AnsysNexusViewerBaseUID = 0xC6476AE;

// Define the new element <ansys-nexus-viewer>
class AnsysNexusViewer extends HTMLElement {

    // Called at object creation
    constructor() {
        super();
        this._guid = this.generateUID();
        this._renderer = "webgl";  // 'webgl' or 'envnc'
        this._renderer_options = null;  // pass-thru to the renderer
        this._src = null;  // 3D data source URL
        this._src_ext = null; // 3D data source extension (type) used with data URI src values
        this._proxy_img = null;  // proxy image URL
        this._proxy_size = [0, 0]; // The size of the proxy image
        this._observer = null; // resizing observer
        this._perspective = false;  // perspective mode
        this._aspect_ratio = null;  // aspect_ratio override
        this._render_instance = null; // The specific instance for the target renderer
        this._proxy_only = null;  // if not null, proxy hover message. No activation possible.
        this._ui = "";            // 'envnc' renderer uses this to selected a UI.  'none' or 'simple'
    }

    //  Called when added to the DOM
    connectedCallback() {
        // root of the local instance DOM
        this.appendChild(AnsysNexusViewerTemplate.content.cloneNode(true));
        // register the new instance
        AnsysNexusViewerInstanceList.push(this);
        // parse the element attributes
        const guid = this.getAttribute('guid');
        if (guid !== null) {
            this._guid = guid;
        }
        const renderer = this.getAttribute('renderer');
        if (renderer !== null) {
            this._renderer = renderer;
        }
        const perspective = this.getAttribute('perspective');
        if (perspective !== null) {
            this.perspective = (perspective === 'true');
        }
        // some items can be null
        this._renderer_options = this.getAttribute('renderer_options');
        this.aspect_ratio = this.getAttribute('aspect_ratio');
        this.src_ext = this.getAttribute('src_ext');
        this.src = this.getAttribute('src');
        this.proxy_img = this.getAttribute('proxy_img');
        this.proxy_only = this.getAttribute('proxy_only');
        if (this._renderer === 'webgl') {
            this._render_instance = new GLTFViewerGlue(this);
        } else if (this._renderer === 'envnc') {
            this._render_instance = new EnVNCViewerGlue(this);
        } else if (this._renderer === 'sgeo') {
            this._render_instance = new ThreeJSViewerGlue(this);
        }
        const ui = this.getAttribute('ui');
        if (ui !== null) {
            this._ui = ui;
        }
        // Don't activate until all fields are set
        let activate = this.getAttribute('active');
        if (activate === null) {
            // If we have a source but no proxy, then activate
            activate = (this.src !== null) && (this._proxy_img === null);
        } else {
            activate = (activate === 'true')
        }
        if (activate) {
            this._indirectActivate(activate);
        } else {
            this._setVisibility(false);
        }
        let proxyElem = this.querySelector('#proxy-img');
        if (this.proxy_only === null) {
            proxyElem.onclick = this._proxyClicked.bind(this);
        } else {
            let proxyPlayElem = this.querySelector('#proxy-play');
            proxyPlayElem.style.display = 'none';
            proxyElem.setAttribute("title", this.proxy_only);
        }
        proxyElem.onload = this._proxyLoaded.bind(this);

        // Use ResizeObserver if at all possible.  If not, fall back to
        // a much more expensive setInterval() approach.
        try {
            this._observer = new ResizeObserver(this._directObserverCallback.bind(this));
            this._observer.observe(this.querySelector('#render-div'));
        } catch (error) {
            setInterval(this._indirectObserverCallback.bind(this), 500);
        }
    }

    // Called when removed from the DOM
    disconnectedCallback() {
        this.active = false;
        let idx = AnsysNexusViewerInstanceList.indexOf(this);
        if (idx >= 0) {
            AnsysNexusViewerInstanceList.splice(idx, 1);
        }
    }

    // Instance management
    generateUID() {
        AnsysNexusViewerBaseUID += 1;
        return AnsysNexusViewerBaseUID.toString();
    }

    _freeActiveInstance() {
        // Make sure that there is room for at least one additional active instance
        if (AnsysNexusViewerActiveInstanceList.length >= AnsysNexusViewerMaxActiveInstances) {
            // items at the head are the oldest...
            AnsysNexusViewerActiveInstanceList[0].active = false;
        }
    }

    refreshInstance() {
        // If the user begins to interact with an instance, that instance can
        // be made to look more recent so that it is not reaped in the original
        // activation order
        const idx = AnsysNexusViewerActiveInstanceList.indexOf(this);
        if (idx >= 0) {
            AnsysNexusViewerActiveInstanceList.push(AnsysNexusViewerActiveInstanceList.splice(idx, 1)[0]);
        }
    }

    // Activation GUI handling
    _proxyClicked() {
        this.active = true;
    }

    // Grab the proxy image size (for aspect ratio control)
    _proxyLoaded() {
        let proxyElem = this.querySelector('#proxy-img');
        this._proxy_size = [proxyElem.width, proxyElem.height];
    }

    // Resize handling: enforce aspect ratios, etc
    _indirectObserverCallback() {
        // Three resizing cases:
        // 1) aspect_ratio is null - assume external styles are controlling things
        if (this.aspect_ratio === null) return;
        // 2) aspect_ratio is a number - use it
        let aspectRatio = this.aspect_ratio;
        // 3) aspect_ratio is proxy - use the proxy image aspect ratio: this._proxy_size
        if ((this.aspect_ratio === "proxy") && (this._proxy_size[1] > 0)) {
            aspectRatio = this._proxy_size[0] / this._proxy_size[1];
        }
        // Apply the aspect ratio to the div
        let renderDiv = this.querySelector('#render-div');
        let newHeight = Math.round(renderDiv.clientWidth / aspectRatio);
        let oldHeight = renderDiv.clientHeight;
        if (oldHeight != newHeight) {
            renderDiv.style.height = newHeight + 'px';
            this._render_instance.resizeRenderer(renderDiv.clientWidth, newHeight);
        }
    }

    _directObserverCallback() {
        setTimeout(this._indirectObserverCallback.bind(this), 0);
    }

    // display either the proxy image or the renderer div
    _setVisibility(on) {
        let proxyElem = this.querySelector('#proxy-img');
        let renderDiv = this.querySelector('#render-div');
        if (on) {
            proxyElem.style.display = 'none';
            renderDiv.style.display = 'block';
        } else {
            proxyElem.style.display = 'block';
            renderDiv.style.display = 'none';
        }
    }

    // Display the spinning wait logo
    loadingStatus(on) {
        let waitDiv = this.querySelector('#render-wait');
        if (on) {
            waitDiv.style.display = 'block';
        } else {
            waitDiv.style.display = 'none';
        }
    }

    // The various modules may be loaded async
    // If the GLTFViewer module has been loaded, this function returns true
    _dependentModulesLoaded() {
        return (typeof webgl_support === "function");
    }

    // We have been asked to activate via html attribute, we might need to try later...
    _indirectActivate(on) {
        if (this._dependentModulesLoaded()) {
            this.active = on;
        } else {
            setTimeout(this._indirectActivate.bind(this, on), 10);
        }
    }

    // Find the file(type) extension name for the target URI
    urlType(url) {
        if (url === null) return null;
        let newUrl = new URL(url, thisScriptDir);
        let pathname = newUrl.pathname;
        if (pathname.toLowerCase().endsWith('avz')) return 'AVZ';
        if (pathname.toLowerCase().endsWith('scdoc')) return 'SCDOC';
        if (pathname.toLowerCase().endsWith('evsn')) return 'EVSN';
        return null;
    }

    // Return a data URI for a PNG representation of the current rendered image
    renderImage() {
        if (this.active) {
            return this._render_instance.renderImage();
        }
        return null;
    }

    // properties
    // guid (read only)
    get guid() {
        return this._guid;
    }

    // renderer (read only)
    get renderer() {
        return this._renderer;
    }

    // renderer_options (read only)
    get renderer_options() {
        return this._renderer_options;
    }

    // parts (read only)
    get parts() {
        if (this.active) {
            return this._render_instance.parts();
        }
        return [];
    }

    // internal_render_instance (read only)
    get internal_render_instance() {
        if (this.active) {
            return this._render_instance.internalRenderer();
        }
        return null;
    }

    // active
    set active(value) {
        const idx = AnsysNexusViewerActiveInstanceList.indexOf(this);
        if (value) {
            if (idx < 0) {
                // Make sure there is space for this instance to become active
                this._freeActiveInstance();
                // activate
                AnsysNexusViewerActiveInstanceList.push(this);
                this._setVisibility(true)
                // Actually activate the instance
                this._render_instance.setActive(true);
                const event = new CustomEvent('active-changed', {detail: {active: true}});
                this.dispatchEvent(event);
            }
        } else {
            if (idx >= 0) {
                // deactivate
                AnsysNexusViewerActiveInstanceList.splice(idx, 1);
                this._setVisibility(false);
                // Actually deactivate the instance
                this._render_instance.setActive(false);
                const event = new CustomEvent('active-changed', {detail: {active: false}});
                this.dispatchEvent(event);
                const parts_event = new CustomEvent('parts-changed', {detail: {}});
                this.dispatchEvent(parts_event);
            }
        }
    }

    get active() {
        return AnsysNexusViewerActiveInstanceList.indexOf(this) >= 0;
    }

    // perspective
    set perspective(value) {
        if (value != this._perspective) {
            this._perspective = value;
            if (this._render_instance !== null) this._render_instance.setPerspective(value);
            const event = new CustomEvent('perspective-changed', {detail: {perspective: this._perspective}});
            this.dispatchEvent(event);
        }
    }

    get perspective() {
        return this._perspective;
    }

    // aspect_ratio ('proxy' or a float)
    set aspect_ratio(value) {
        if (value != this._aspect_ratio) {
            this._aspect_ratio = value;
            const event = new CustomEvent('aspect-ratio-changed', {detail: {aspect_ratio: this._aspect_ratio}});
            this.dispatchEvent(event);
        }
    }

    get aspect_ratio() {
        return this._aspect_ratio;
    }

    // src
    set src(value) {
        this._src = value;
        // Update the source extension if the extension has not been set
        if ((value !== null) && (this.src_ext === null)) {
            this.src_ext = this.urlType(value);
        }
        if (this._render_instance !== null) this._render_instance.setSrc(value, this._src_ext);
        const event = new CustomEvent('src-changed', {
            detail: {
                src: this._src,
                ext: this._src_ext
            }
        });
        this.dispatchEvent(event);
    }

    get src() {
        return this._src;
    }

    // src_ext
    set src_ext(value) {
        if (value != this._src_ext) {
            this._src_ext = value;
        }
    }

    get src_ext() {
        return this._src_ext;
    }

    // proxy_img
    set proxy_img(value) {
        if (value != this._proxy_img) {
            this._proxy_img = value;
            let proxy_elem = this.querySelector('#proxy-img');
            proxy_elem.src = this._proxy_img;
            proxy_elem.style.height = '100%';
            proxy_elem.style.width = '100%';
            const event = new CustomEvent('proxy-img-changed', {detail: {proxy_img: this._proxy_img}});
            this.dispatchEvent(event);
        }
    }

    get proxy_img() {
        return this._proxy_img;
    }

    // proxy_only
    set proxy_only(value) {
        this._proxy_only = value;
    }

    get proxy_only() {
        return this._proxy_only;
    }
}

// register the web component
if (!window.customElements.get('ansys-nexus-viewer')) {
    window.customElements.define('ansys-nexus-viewer', AnsysNexusViewer);
}

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
// Interface to the GLTFViewer renderer
class EnVNCViewerGlue {
  constructor(parent) {
    this._parent = parent;
    this._renderer = null;
    this._token = '';
  }
  internalRenderer() {
    return this._renderer;
  }
  renderImage() {
    if (this._renderer) {
      let rfb = this._renderer.rfb;
      return rfb.renderImage();
    }
    return null;
  }
  mouseIn(e) {
    // When the mouse enters an active viewer, mark it as more "recent"
    this._parent.refreshInstance();
  }
  divID() {
    return 'vnc-viewer-' + this._parent.guid;
  }
  resizeRenderer(width, height) {
    if (this._renderer === null) return;

    this._renderer.sendResizeCommand();
    //this._renderer.UpdateLayout();
  }
  setPerspective(on) {
    if (this._renderer === null) return;
    //this._renderer.scene.navigator.persp = on;
  }
  parts() {
    if (this._renderer === null) return [];
    return this._renderer.parts();
  }
  setSrc(url, extension) {
    if (this._renderer === null) return;
    //this._renderer.AddFiles(null, url, extension, GLTFViewer.LT_REPLACE);
  }

  setActive(on) {
      let renderDiv = this._parent.querySelector('#render-div');
      // Validate options
      let token = null;
      if (!this._parent.renderer_options) {
          this.displayError("Error starting session: Component needs renderer_options, containing a dict with http and ws entries for connecting to the web socket server.");
          return;
      }
      let options_dict = null;
      try {
          options_dict = JSON.parse(this._parent.renderer_options);
          if (!options_dict) {
              this.displayError("Error starting session: Component's renderer_options are empty or unreadable.");
              return;
          }
      } catch (e) {
          this.displayError("Error starting session: Component's renderer_options could not be parsed as a dictionary.");
          return;
      }

      if (options_dict["connect_to_running_ens"] !== true) {
          // Send the request to launch or shutdown ensight/envision
          if (options_dict["http"] === undefined || options_dict["ws"] === undefined) {
              this.displayError("Error starting session: Component's renderer_options dict must contain entries named 'http' and 'ws'");
              return;
          }

          if (on) {
              // Activate an ensight/envision instance owned by this component

              // Create the http request to reserve a session
              let http_url = new URL(options_dict["http"]);
              http_url.pathname = "/v1/reserve/local_envision";
              // FIXME: this._parent.src is NOT a proper URL, the origin appears
              // to be missing in some situation.  Check with the team for a better
              // understanding a better solution. For now, strip off everything
              // after the pathname (get rid of an optional search term).
              let parent_src = this._parent.src;
              let question_mark_loc = -1;
              if (parent_src) {
                question_mark_loc = parent_src.indexOf('?');
                if (question_mark_loc > -1) {
                    parent_src = parent_src.substring(0, question_mark_loc);
                }
                if (parent_src.endsWith(".evsn") || parent_src.endsWith(".csf") ||
                    parent_src.endsWith(".ply") || parent_src.endsWith(".stl")) {
                    http_url.pathname = "/v1/reserve/local_envision";
                } else {
                    http_url.pathname = "/v1/reserve/local_ensight";
                }
              }
              let separator = "?";
              if (options_dict["extra_query_args"] !== undefined) {
                http_url.search = http_url.search + separator + options_dict["extra_query_args"];
                separator = "&";
              }
              if (options_dict["security_token"] !== undefined) {
                  http_url.search = http_url.search + separator + "security_token="+options_dict["security_token"];
                  separator = "&";
              }
              if (this._parent.src !== null) {
                http_url.search = http_url.search + separator + "target_pathname="+this._parent.src;
                separator = "&";
              }

              // Send the request to reserve the session
              fetch(http_url)
                  .then(function (response) {
                      if (!response.ok) {
                          // If the reservation fails, break out of the fetch/then chain by throwing an error
                          throw new Error(response.statusText);
                      } else {
                          // Pass the json response, as a Promise to the next 'then' clause
                          return response.json();
                      }
                  })
                  .then(function (response_dict) {
                      token = response_dict["token"];
                      if (!token) {
                          throw new Error("Bad response from session reservation");
                      }
                      this._token = token;
                      this.setupActiveDiv();

                      let vncDiv = this._parent.querySelector('#' + this.divID());
                      vncDiv.addEventListener('mouseenter', this.mouseIn.bind(this));

                      let ws_url = new URL(options_dict["ws"]);
                      if (!ws_url.search) {
                          ws_url.search = "?token="+this._token;
                      } else {
                          ws_url.search += "&token="+this._token;
                      }
                      if (options_dict["extra_query_args"] !== undefined) {
                        ws_url.search += separator + options_dict["extra_query_args"];
                      }
                      this.createRenderer(vncDiv, ws_url, http_url);
                  }.bind(this))
                  .catch((error) => {
                      this.displayError("Error activating session: " + error);
                  });

          } else {
              // Deactivate an ensight/envision instance owned by this component
              if (this._renderer !== null) {
                  this._renderer.disconnect();
                  this._renderer = null;
              }

              // This REST call to release can be redundant.  If ensight or envision was started with
              // the 'exit_on_last_disconnect' vnc option, the _renderer.disconnect() call will implicitly
              // cause the app to exit, and websocketserver will release the session.
              // If we extend this component to connect to persistent apps, this REST call could be necessary.
              if (this._token) {
                  // Create the http request to release the session
                  let http_url = new URL(options_dict["http"]);
                  http_url.pathname = "/v1/release/"+this._token;

                  // Send the request to release the session
                  fetch(http_url)
                    .then((response) => {
                        if (!response.ok) {
                            // This is not a problem.  The websocketserver may have already released the resource.
                        }
                    })
                    .catch((error) => {
                        this.displayError("Error deactivating session: " + error);
                    });
              }
              this._token = '';

              renderDiv.innerHTML = '';
          }
      } else {
          if (options_dict["ws"] === undefined) {
              this.displayError("Error starting session: Component's renderer_options dict must contain entry named 'ws'");
              return;
          }

          if (on) {
              // Connect to an existing ensight/envision instance
              this.setupActiveDiv();

              let vncDiv = this._parent.querySelector('#' + this.divID());
              vncDiv.addEventListener('mouseenter', this.mouseIn.bind(this));

              let ws_url = new URL(options_dict["ws"]);
              try {
                  this.createRenderer(vncDiv, ws_url, null);
              } catch(error) {
                  this.displayError("Error activating session: " + error);
              }

          } else {
              // Disconnect from an existing ensight/envision instance
              if (this._renderer !== null) {
                  this._renderer.disconnect();
                  this._renderer = null;
              }
              this._token = '';
              renderDiv.innerHTML = '';
          }
      }

      //TODO: Find a way to watch this._renderer.connected.  It changes to false
      //if EnSight dies, crashes, or is told to exit but not by the component.
      //Then call 'this._parent.active = false;' to set the component back to deactivated.
  }


  createRenderer(vncDiv, ws_url, http_url) {
      // The JS interpreted in Qt 5.10 does not support import() so this
      // code prevents the file from loading (syntax error) in Fluent.
      // Since Fluent does not use the EnVNCSimpleViewer() this code will never be
      // executed there and for the other cases, it basically works.
      if (this._parent._ui == "none") {
          // Use a barebones viewer if the component has: ui="none"
          let load_promise = eval("import('/ansys/nexus/novnc/app/envncbase.js')");
          load_promise.then(EnVNCBase => {
              this._renderer = new EnVNCBase.default(vncDiv, ws_url, http_url);
          });
      } else {
          // Default to the simple prototype UI
          let load_promise = eval("import('/ansys/nexus/novnc/app/envncsimpleviewer.js')");
          load_promise.then(EnVNCSimpleViewer => {
              this._renderer = new EnVNCSimpleViewer.default(vncDiv, ws_url, http_url);
          });
      }
  }


  displayError(err_str) {
    let renderDiv = this._parent.querySelector('#render-div');
    renderDiv.innerHTML = "<h1>"+err_str+"</h1>";
  }

  // Set up the html styles, UI elements, main canvas element, etc. for an active component
  setupActiveDiv() {
    let renderDiv = this._parent.querySelector('#render-div');

    // The vnc renderer needs to go into a div with a unique global id
    renderDiv.innerHTML =
`<style>

#noVNC_fallback_error {
  z-index: 1000;
  visibility: hidden;
}
#noVNC_fallback_error.noVNC_open {
  visibility: visible;
}

#noVNC_fallback_error > div {
  max-width: 90%;
  padding: 15px;

  transition: 0.5s ease-in-out;

  transform: translateY(-50px);
  opacity: 0;

  text-align: center;
  font-weight: bold;
  color: #fff;

  border-radius: 10px;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
  background: rgba(200,55,55,0.8);
}
#noVNC_fallback_error.noVNC_open > div {
  transform: translateY(0);
  opacity: 1;
}

#noVNC_fallback_errormsg {
  font-weight: normal;
}

#noVNC_fallback_errormsg .noVNC_message {
  display: inline-block;
  text-align: left;
  font-family: monospace;
  white-space: pre-wrap;
}

#noVNC_fallback_error .noVNC_location {
  font-style: italic;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.8);
}

#noVNC_fallback_error .noVNC_stack {
  max-height: 50vh;
  padding: 10px;
  margin: 10px;
  font-size: 0.8em;
  text-align: left;
  font-family: monospace;
  white-space: pre;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.2);
  overflow: auto;
}
#noVNC_transition {
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  color: white;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;

  /*display: flex;*/
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
:root.noVNC_loading #noVNC_transition,
:root.noVNC_connecting #noVNC_transition,
:root.noVNC_disconnecting #noVNC_transition,
:root.noVNC_reconnecting #noVNC_transition {
  display: flex;
}
:root:not(.noVNC_reconnecting) #noVNC_cancel_reconnect_button {
  display: none;
}
#noVNC_transition_text {
  font-size: 1.5em;
}

.en_partlist {
    display: none;
    position: absolute;
    top: 25px;
    left: 4px;
    height: flex;
    max-height: 50%;
    overflow-y: auto;
    color: black;
    background-color: rgba(255, 255, 255, .9);
    font-weight: bold;
    z-index: 10;
    padding: 3px 5px 4px 5px;
    border: thin solid black;
}

.en_partlist > * {
    pointer-events: auto;
}

.en_ui_toggle {
    display: none;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background-color: transparent;
}

.en_ui_toggle > * {
    pointer-events: auto;
}

/*BOTTOM BAR STYLING*/

#video_controls {
    background-color: #F0F0F0;
    bottom: 0;
    left: 0;
    /*hidden by default*/
    display: none;
    position: absolute;
    pointer-events: none;
    flex-direction: row;
    align-items: center;
    padding-top: 2px;
    padding-bottom: 2px;
}

#video_controls > * {
    pointer-events: auto;
    /*flex options are used by the slider and frame label content*/
    display: flex;
    flex-direction: row;
    align-items: center;
}

/*todo: set width dynamically based on number of time steps. initial should be higher.(?)*/
.slider {
    -webkit-appearance: none;
    min-width: 150px;
    max-width: 300px;
    height: 2px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 18px;
    background: #007A98;
    cursor: pointer;
}

/*for firefox*/
.slider::-moz-range-thumb {
    width: 10px;
    height: 18px;
    border-radius: 0;
    background: #007A98;
    cursor: pointer;
}

.frame_label {
    min-width: 50px;
    max-width: 200px;
    margin-left: 5px;
    margin-right: 5px;
    color: #000;
}

/*TOGGLES*/

#toggle_controls {
    bottom: 0;
    right: 0;
    /*hidden by default*/
    display: none;
    position: absolute;
    pointer-events: none;
    background-color: #F0F0F0;
    flex-direction: row;
    align-items: center;
    padding-top: 2px;
    padding-bottom: 2px;
}

#toggle_controls > * {
    pointer-events: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.toggle_control_icon {
    margin-left: 5px;
}

#ens_timestep_monitor {
    display: none;
}
         </style>` +
        '<div class="ansys-nexus-viewer noVNC_loading" id="' + this.divID() + '">' +
        `
            <!--
            <div id="noVNC_fallback_error" class="noVNC_vcenter">
                <div>
                    <div>noVNC encountered an error:</div>
                    <br>
                    <div id="noVNC_fallback_errormsg"></div>
                </div>
            </div>
            -->

            <!-- EnSight UI toggle -->
            <div id="ens_ui_toggle" class="en_ui_toggle">
                <img id='ens_ui_toggle_img' src='/ansys/nexus/novnc/app/images/icons/menu_20_gray.png' />
            </div>
            <!-- EnSight part list -->
            <div id="ens_partlist" class="en_partlist">
                <fieldset id="partlist" name="partlist">
                    <legend>Part List</legend>
                </fieldset>
            </div>
            <!-- EnSight var list -->
            <div id="ens_varlist" class="en_partlist">
                <fieldset id="varlist" name="varlist">
                    <legend>Variable List</legend>
                </fieldset>
            </div>

            <!-- EnSight play/pause controls -->
            <div id="video_controls">
                <input type="image" id="play-pause"
                       alt="Play/Pause"
                       src='/ansys/nexus/novnc/app/images/icons/playf_off.svg'
                       playing='false' />
                <input type="range" id="seek-bar" class="slider" value="0" min="0" max="1000" />
                <label for="seek-bar" id="current-frame" class="frame_label">[1 / 1]</label>
            </div>

            <!-- EnSight toggle controls -->
            <div id="toggle_controls">
                <!-- Toggle jump to end of timestep slider -->
                <div id="ens_timestep_monitor" class="toggle_control_icon">
                    <input type="image" alt="Jump to end of slider"
                           id="noVNC_timestep_monitor"
                           src="/ansys/nexus/novnc/app/images/icons/play_once_mode.svg"
                           data-toggle="true"
                           title="Jump to end of slider" />
                </div>
                <!-- Toggle Overlay hidden lines -->
                <div id="ens_hid_ln_toggle" class="toggle_control_icon">
                    <input type="image" alt="Overlay hidden lines"
                           id="noVNC_hid_ln_button"
                           src="/ansys/nexus/novnc/app/images/icons/ang10_Part_hiddenline_off.svg"
                           data-toggle="false"
                           title="Overlay hidden lines" />
                </div>
                <!-- Toggle Part Highlighting -->
                <div id="ens_part_hl_toggle" class="toggle_control_icon">
                    <input type="image" alt="Part Highlight"
                           src="/ansys/nexus/novnc/app/images/icons/highlight3.svg"
                           data-toggle="false"
                           id="noVNC_hl_button"
                           title="Part Highlight" />
                </div>
                <!-- Fit geometry to viewport -->
                <div id="ens_fit_viewport_btn" class="toggle_control_icon">
                    <input type="image" alt="Fit the geometry to the current viewport"
                           src="/ansys/nexus/novnc/app/images/icons/fit.svg"
                           id="noVNC_fit_viewport_btn"
                           title="Fit geometry to viewport" />
                </div>
                <!-- Reset view of current viewport -->
                <div id="ens_reset_view_btn" class="toggle_control_icon">
                    <input type="image" alt="Reset view"
                           src="/ansys/nexus/novnc/app/images/icons/reset3.svg"
                           id="noVNC_reset_view_btn"
                           title="Reset view of current viewport" />
                </div>
                <!-- Toggle fullscreen -->
                <div id="ens_fullscreen_toggle" class="toggle_control_icon">
                    <input type="image" alt="Fullscreen"
                           src="/ansys/nexus/novnc/app/images/fullscreen.svg"
                           id="noVNC_fullscreen_button"
                           title="Full screen" />
                </div>
            </div>

            <!-- Status Dialog -->
            <div id="noVNC_status" style="display:none;"></div>

            <!-- Transition Screens -->
            <div id="noVNC_transition">
                <div id="noVNC_transition_text"></div>
                <div>
                    <input type="button" id="noVNC_cancel_reconnect_button" value="Cancel" class="noVNC_submit" />
                </div>
                <div class="noVNC_spinner"></div>
            </div>

            <div id="noVNC_container">
                <!-- HTML5 Canvas -->
                <div id="noVNC_screen">
                    <canvas id="noVNC_canvas" width="0" height="0">
                        Canvas not supported.
                    </canvas>
                </div>
            </div>
        </div>
      `;
  }
}

// Dependencies:
//<script src='/ansys/nexus/closure-library/closure/goog/base.js'></script>
//<script src='/ansys/nexus/google-protobuf/google-protobuf.js'></script>
//<script src='/ansys/nexus/dynamic_scene_graph_pb.js'></script>

class DSGNode {
    constructor(id, name, nodetype) {
        this.id = id;
        this.name = name;
        this.nodetype = nodetype;
        this.parent = null;
        this.children = [];
        this.attributes = {};
        this.hash = "";
        this.dirty = true;  // Whenever a node is updated, it is marked as "dirty"
    }
    add_child(node) {
        this.children.push(node);
        node.parent = this;
    }
    remove_child_id(id) {
        for(let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            if (child.id == id) {
                child.parent = null;
                this.children.splice(i, 1);
                return;
            }
        }
    }
    set_attributes(map) {
        this.attributes = {};
        let iter = map.keys();
        let key = iter.next();
        while(!key.done) {
            this.attributes[key.value] = map.get(key.value);
            key = iter.next();
        }
    }
    ens_obj_type() {
        if ("ENS_OBJ_TYPE" in this.attributes) return this.attributes["ENS_OBJ_TYPE"];
        return "";
    }
    details(indent) {
        if (Object.keys(this.attributes).length == 0) return "";
        let s = indent + "Attributes:\n";
        for(const key in this.attributes) {
            s += indent + "    " + key + ":" + this.attributes[key] + "\n";
        }
        return s;
    }
    dump(indent) {
        let s = indent + "Node[" + this.id + "] (" + this.nodetype + "): " + this.name + "\n";
        if (typeof this.details === "function") {
            s += this.details(indent + "  ");
        }
        if (this.children.length) {
            s += indent + "  Children:\n";
            for (let i = 0; i < this.children.length; i++) {
                s += this.children[i].dump(indent + "    ");
            }
        }
        return s;
    }
}

class DSGGroup extends DSGNode {
    constructor(id, name) {
        super(id, name, "group");
        this.matrix = null;
        this.reset_matrix();
    }
    reset_matrix() {
        this.matrix = [
            1., 0., 0., 0.,
            0., 1., 0., 0.,
            0., 0., 1., 0.,
            0., 0., 0., 1.
        ];
    }
}

class DSGView extends DSGNode {
    constructor(id, name) {
        super(id, name, "view");
        this.timeline = [0., 0.];
        this.lookat = [0., 0., 0.];
        this.lookfrom = [0., 0., 1.];
        this.upvector = [0., 1., 0.];
        this.fov = 40.;
        this.aspectratio = 1.;
        this.nearfar = [0.001, 10.]
    }
}

class DSGVariable extends DSGNode {
    constructor(id, name) {
        super(id, name, "variable");
        this.location = 0;
        this.dimension = 0;
        this.levels = [];
        this.sub_levels = 0;
        this.interpolation = 0;
        this.undefined = -1.2345e-10;
        this.undefined_display = 0;
        this.texture = null;
    }
    texture_size() {
        return this.texture.length / 4;
    }
    texture_power_two_size() {
        // We need a (power of 2)x1 texture
        let num_texels = this.texture.length / 4;
        let power = 1;
        while ((2 ** power) < num_texels) {
            power += 1;
        }
        return 2 ** power;
    }
    texture_image() {
        let input_size = this.texture_size();
        let output_size = this.texture_power_two_size();
        let texture = new Uint8Array(output_size*4);
        // pad out the texture until it has texture_size RGBA values
        let last_color = [0, 0, 0, 0];
        for(let i=0; i<output_size*4; i+=4) {
            if (i < input_size) {
                texture[i] = this.texture[i];
                texture[i+1] = this.texture[i+1];
                texture[i+2] = this.texture[i+2];
                texture[i+3] = 255;
                last_color[0] = texture[i];
                last_color[1] = texture[i+1];
                last_color[2] = texture[i+2];
                last_color[3] = texture[i+3];
            } else {
                texture[i] = last_color[0];
                texture[i+1] = last_color[1];
                texture[i+2] = last_color[2];
                texture[i+3] = last_color[2];
            }
        }
        return texture;
    }
}

class DSGPart extends DSGGroup {
    constructor(id, name) {
        super(id, name, "part");
        this.fill_color = [];
        this.line_color = [];
        this.rendermode = 0;
        this.shadingmode = 0;
        this.ambient = 0.;
        this.diffuse = 0.;
        this.specular_shine = 0.;
        this.specular_intensity = 0.;
        this.materialname = "";
        this.nodesizedefault = 0.;
        this.color_variableid = 0;
        this.alpha_variableid = 0;
        this.node_size_variableid = 0;
        this.displacement_variableid = 0;
        this.texture_id = 0;
        this.texture_wrap_mode = 0;
        this.texture_apply_mode = 0;
        this.texture_sample_mode = 0;
    }
}

class DSGGeom extends DSGNode {
    constructor(id, name) {
        super(id, name, "geom");
        this.payload_type = 0;
        this.variable_id = 0;
        this.total_array_size = 0;
        this.data = null;
    }
    details(indent) {
        let s = indent + "Type:" + this.typename() + " length: " + this.data.length + "\n";
        s += indent + "Variable: " + this.variable_id + "\n";
        return s;
    }
    typestring() {
        let ArrayType = proto.ensightservice.UpdateGeom.ArrayType;
        switch(this.payload_type) {
            case ArrayType.COORDINATES:
                return "COORDINATES";
            case ArrayType.TRIANGLES:
                return "TRIANGLES";
            case ArrayType.LINES:
                return "LINES";
            case ArrayType.EDGEFLAGS:
                return "EDGEFLAGS";
            case ArrayType.ELEM_VARIABLE:
                return "ELEM_VARIABLE";
            case ArrayType.NODE_VARIABLE:
                return "NODE_VARIABLE";
            case ArrayType.ELEM_NORMALS:
                return "ELEM_NORMALS";
            case ArrayType.NODE_NORMALS:
                return "NODE_NORMALS";
            case ArrayType.TEX_COORDINATES:
                return "TEX_COORDINATES";
        }
        return "Unknown";
    }
    typename() {
        let ArrayType = proto.ensightservice.UpdateGeom.ArrayType;
        switch(this.payload_type) {
            case ArrayType.COORDINATES:
                return "Coordinates";
            case ArrayType.TRIANGLES:
                return "Triangle connectivity";
            case ArrayType.LINES:
                return "Line connectivity";
            case ArrayType.EDGEFLAGS:
                return "Edge flags";
            case ArrayType.ELEM_VARIABLE:
                return "Elemental variable values";
            case ArrayType.NODE_VARIABLE:
                return "Nodal variable values";
            case ArrayType.ELEM_NORMALS:
                return "Per element normals";
            case ArrayType.NODE_NORMALS:
                return "Per node normals";
            case ArrayType.TEX_COORDINATES:
                return "Texture coordinates";
        }
        return "Unknown";
    }
    static is_integer_array(payload_type) {
        let ArrayType = proto.ensightservice.UpdateGeom.ArrayType;
        return (payload_type === ArrayType.LINES) ||
            (payload_type === ArrayType.TRIANGLES) ||
            (payload_type === ArrayType.EDGEFLAGS);

    }
}

class DSGTexture extends DSGNode {
    constructor(id, name) {
        super(id, name, "texture");
        this.format = 0;
        this.width = 0;
        this.height = 0;
        this.texels = null;
    }
}

/**
 * The DSGSession class maintains the state of a DSG scene.  The nodes of the scene
 * are placed in a "nodemap" indexed by the node IDs and the "root_id" member contains
 * the ID of the top of the scene.  The session maintains a consistent session and
 * sequencing for updates.  New updates are added by calling parse_zip() with the
 * binary representation of a ZIP file containing a complete update.
 */
class DSGSession {
    constructor() {
        this.root_id = null;
        this.debug = 0;
        this.reset();
    }

    /**
     * Reset the current scene to an empty state
     */
    reset() {
        this.nodemap = {};
        this.sessionid = null;
        this.sequencenumber = -1;
    }

    /**
     * Walk all of the nodes in the current scene (via the nodemap) and
     * set the dirty member to the passed value.
     *
     * @param dirty  The value to set the dirty member to.
     */
    set_scene_dirty(dirty) {
        for(const key in this.nodemap) {
            this.nodemap[key].dirty = dirty;
        }
    }

    /**
     * Given a SceneUpdateCommand protobuffer, determine the "type" of the command
     * and update the current scene graph with the changes specified in the protobuffer.
     *
     * @param msg  A proto.ensightservice.SceneUpdateCommand instance
     * @returns {*} The command type that was processed.
     */
    handle_command(msg) {
        let SceneUpdateCommand = proto.ensightservice.SceneUpdateCommand;
        let cmd_type = msg.getCommandType();
        let cmd = null;
        let node = null;
        switch (cmd_type) {
            case SceneUpdateCommand.SceneUpdateCommandType.UPDATE_SCENE_BEGIN:
                cmd = msg.getSceneBegin();
                if (cmd.getReset()) this.reset()
                node = this.find_create_node(cmd.getId(), "root", "scene");
                this.root_id = node.id;
                break;
            case SceneUpdateCommand.SceneUpdateCommandType.UPDATE_SCENE_END:
                cmd = msg.getSceneEnd();
                if (cmd.getId() !== this.root_id) {
                    console.log("Internal consistency check: scene begin and end id mismatch.");
                }
                break;
            case SceneUpdateCommand.SceneUpdateCommandType.DELETE_ID:
                cmd = msg.getDeleteId();
                let idlist = cmd.getIdsList();
                for(let i=0; i < idlist.length; i++) {
                    let id = idlist[i];
                    let node = this.find_node_by_id(id);
                    if (node !== null) {
                        this.free_node(node);
                        if (this.debug > 1) {
                            console.log("Delete id ", id);
                        }
                    }
                }
                break;
            case SceneUpdateCommand.SceneUpdateCommandType.UPDATE_PART:
                cmd = msg.getUpdatePart();
                node = this.find_create_node(cmd.getId(), cmd.getName(), "part");
                node.nodetype = "part";  // the super-class overrides this on us.
                node.matrix = cmd.getMatrix4x4List();
                node.fill_color = cmd.getFillColorList();
                node.line_color = cmd.getLineColorList();
                node.render = cmd.getRender();
                node.shading = cmd.getShading();
                node.ambient = cmd.getAmbient();
                node.diffuse = cmd.getDiffuse();
                node.specular_shine = cmd.getSpecularShine();
                node.specular_intensity = cmd.getSpecularIntensity();
                node.material_name = cmd.getMaterialName();
                node.node_size_default = cmd.getNodeSizeDefault();
                node.color_variableid = cmd.getColorVariableid();
                node.alpha_variableid = cmd.getAlphaVariableid();
                node.node_size_variableid = cmd.getNodeSizeVariableid();
                node.displacement_variableid = cmd.getDisplacementVariableid();
                node.texture_id = cmd.getTextureId();
                node.texture_wrap_mode = cmd.getTextureWrapMode();
                node.texture_apply_mode = cmd.getTextureApplyMode();
                node.texture_sample_mode = cmd.getTextureSampleMode();
                node.hash = cmd.getHash();
                node.dirty = true;
                this.find_node_by_id(cmd.getParentId()).add_child(node);
                break;
            case SceneUpdateCommand.SceneUpdateCommandType.UPDATE_GROUP:
                cmd = msg.getUpdateGroup();
                node = this.find_create_node(cmd.getId(), cmd.getName(), "group");
                node.matrix = cmd.getMatrix4x4List();
                node.set_attributes(cmd.getAttributesMap());
                node.hash = cmd.getHash();
                node.dirty = true;
                this.find_node_by_id(cmd.getParentId()).add_child(node);
                break;
            case SceneUpdateCommand.SceneUpdateCommandType.UPDATE_GEOM:
                cmd = msg.getUpdateGeom();
                node = this.find_create_node(cmd.getId(), "array", "geom");
                node.variable_id = cmd.getVariableId();
                let new_payload_type = cmd.getPayloadType();
                let chunk_offset = cmd.getChunkOffset();
                let new_total_array_size = cmd.getTotalArraySize();
                // Are we creating a new array???
                let indata = null;
                if ((new_total_array_size !== node.total_array_size) ||
                    (new_payload_type !== node.payload_type)) {
                    if (DSGGeom.is_integer_array(new_payload_type)) {
                        node.data = new Uint32Array(new_total_array_size);

                    } else {
                        node.data = new Float32Array(new_total_array_size);

                    }
                    if (this.debug > 1) {
                        console.log("Resized Array ", node.id, " from ", node.total_array_size, " to ", new_total_array_size);
                    }
                    node.total_array_size = new_total_array_size;
                    node.payload_type = new_payload_type;
                }
                if (DSGGeom.is_integer_array(node.payload_type)) {
                    indata = cmd.getIntArrayList();
                } else {
                    indata = cmd.getFltArrayList();
                }
                if (indata) {
                    // Copy the data into the array
                    for (let i = 0; i < indata.length; i++) {
                        node.data[i + chunk_offset] = indata[i];
                    }
                }
                node.hash = cmd.getHash();
                node.dirty = true;
                this.find_node_by_id(cmd.getParentId()).add_child(node);
                break;
            case SceneUpdateCommand.SceneUpdateCommandType.UPDATE_VARIABLE:
                cmd = msg.getUpdateVariable();
                node = this.find_create_node(cmd.getId(), cmd.getName(), "variable");
                node.location = cmd.getLocation();
                node.dimension = cmd.getDimension();
                node.levels = cmd.getLevelsList();
                node.sub_levels = cmd.getSubLevels();
                node.interpolation = cmd.getPalInterp();
                node.undefined = cmd.getUndefinedValue();
                node.undefined_display = cmd.getUndefinedDisplay();
                node.texture = cmd.getTexture();
                node.set_attributes(cmd.getAttributesMap());
                node.hash = cmd.getHash();
                node.dirty = true;
                this.find_node_by_id(cmd.getParentId()).add_child(node);
                break;
            case SceneUpdateCommand.SceneUpdateCommandType.UPDATE_VIEW:
                cmd = msg.getUpdateView();
                node = this.find_create_node(cmd.getId(), "camera", "view");
                node.timeline = cmd.getTimelineList();
                node.lookat = cmd.getLookatList();
                node.lookfrom = cmd.getLookfromList();
                node.upvector = cmd.getUpvectorList();
                node.fov = cmd.getFieldofview();
                node.aspectratio = cmd.getAspectratio();
                node.nearfar = cmd.getNearfarList()
                node.hash = cmd.getHash();
                node.dirty = true;
                this.find_node_by_id(cmd.getParentId()).add_child(node);
                break;
            case SceneUpdateCommand.SceneUpdateCommandType.UPDATE_TEXTURE:
                cmd = msg.getUpdateTexture();
                node = this.find_create_node(cmd.getId(), "texture", "texture");
                node.format = cmd.getFormat();
                node.width = cmd.getWidth();
                node.height = cmd.getHeight();
                node.texels = cmd.getTexels()
                node.hash = cmd.getHash();
                node.dirty = true;
                this.find_node_by_id(cmd.getParentId()).add_child(node);
                break;
            default:
                console.log("Unknown command type:", msg.getCommandType());
                break;
        }
        return cmd_type;
    }
    /**
     * Given a node ID and basic type info, if the node already exists, return the
     * existing node.  If not, create a new node of the correct type, add it to the
     * "nodemap" and return it.
     *
     * @param id  The ID of the node to find/create.
     * @param name  The name of the node to be used if creation is necessary.
     * @param nodetype  Node type ('scene', 'group', 'part', 'view', 'variable', 'geom', 'texture')
     * @returns {*|null}  The node or null if no node could be found or created.
     */
    find_create_node(id, name, nodetype) {
        let node = this.find_node_by_id(id);
        if (node === null) {
            switch (nodetype) {
                case 'scene':
                    node = new DSGNode(id, name, nodetype);
                    break;
                case 'group':
                    node = new DSGGroup(id, name);
                    break;
                case 'part':
                    node = new DSGPart(id, name);
                    break;
                case 'view':
                    node = new DSGView(id, name);
                    break;
                case 'variable':
                    node = new DSGVariable(id, name);
                    break;
                case 'geom':
                    node = new DSGGeom(id, name);
                    break;
                case 'texture':
                    node = new DSGTexture(id, name);
                    break;
            }
            this.nodemap[id] = node;
        }
        return node;
    }

    /**
     * See if a node is present in the "nodemap".  If the node exists, return it,
     * otherwise return null.
     * @param id  The node ID to look up.
     * @returns {null|*}   The node or null.
     */
    find_node_by_id(id) {
        if (id in this.nodemap) return this.nodemap[id];
        return null;
    }

    /**
     * Insert a node into the "nodemap" structure.
     * @param node  The node object to be inserted.
     */
    insert_node(node) {
        this.nodemap[node.id] = node;
    }

    /**
     * Free up a node. If this node is a child of another node, remove it from the
     * children list.   Remove the node from the "nodemap" as well.
     *
     * @param node  The node object to be freed.
     */
    free_node(node) {
        // Remove from parent
        if (node.parent) node.parent.remove_child_id(node.id);
        // We do not walk the children as the DSG API should explicitly
        // tell us what ids to delete.
        // Remove the node id from the nodemap
        delete this.nodemap[node.id];
    }

    /**
     * Walk a binary (in memory) representation of a ZIP file and execute the embedded
     * content via the parse_update() method.
     *
     * @param raw_zip_data
     */
    parse_zip(raw_zip_data) {
        // walk the in-memory zip file and pass the entries on to the "update" handler
        let update_zip = new JSUnzip(raw_zip_data);
        if (update_zip.isZipFile()) {
            update_zip.entries = {};
            let more = true;
            while (more) {
                let e = new JSUnzip.ZipEntry(update_zip.fileContents);
                if (e.data) {
                    if (e.fileName.endsWith(".pb")) {
                        // Convert the .pb file content into a protobuffer object
                        let msg = proto.ensightservice.SceneUpdateCommand.deserializeBinary(e.data);
                        update_zip.entries[e.fileName] = msg;
                    } else {
                        // other files are just binary blobs
                        update_zip.entries[e.fileName] = e.data;
                    }
                    if (this.debug > 1) {
                        console.log("Read: " + e.fileName);
                    }
                } else {
                    more = false;
                }
            }
            this.parse_update(update_zip.entries);
        }
    }

    /**
     * Walk a decompressed representation of a ZIP file and interpret the protobuffer files.
     * The entries array is the unpacked contents of a ZIP file. It is indexed by the
     * name of the "file" and the value is the binary representation of the ZIP file
     * content.  The code starts by validating the 'session.txt' contents (e.g.
     * correct update ordering, etc) and then it follows up by walking the protobuffer
     * ("protobuf_*.pb") files, performing a full update.
     *
     * Note: .pb files in the entities are actual protobuffer objects, not raw binary
     * data.  All other entity values are raw binary streams.
     *
     * @param entries  An array of zip file contents.  The keys are the filenames.
     */
    parse_update(entries) {
        // Walk the header and protobuffers for a single DSG "update" operation
        // There must be a session.txt file.  Verify it.
        if (!("session.txt" in entries)) {
            throw new Error("No session.txt file in the zip archive.");
        }
        let lines = String.fromCharCode.apply(null, new Uint8Array(entries["session.txt"]));
        lines = lines.split("\n");
        if (lines[0] !== "#DSGZv1") {
            throw new Error("Invalid zip file contents.");
        }
        let new_session = null;
        let incremental = "0";
        let temporal = "0";
        let new_sequencenumber = 0;
        for (let i = 1; i < lines.length; i++) {
            let tuple = lines[i].split("=");
            if (tuple.length === 2) {
                switch (tuple[0]) {
                    case "sessionid":
                        new_session = tuple[1];
                        break;
                    case "incremental":
                        incremental = tuple[1];
                        break;
                    case "temporal":
                        temporal = tuple[1];
                        break;
                    case "sequencenumber":
                        new_sequencenumber = parseInt(tuple[1]);
                        break;
                }
            }
        }
        if (incremental === "1") {
            // If a new sequence, then the sequence number must be zero
            // otherwise, the session id must match and the sequence number must be next
            if (this.sessionid !== null) {
                if (new_session !== this.sessionid) {
                    throw new Error("Incremental update not associated with current session.");
                }
                if (new_sequencenumber !== this.sequencenumber + 1) {
                    throw new Error("Incorrect update sequence number.");
                }
            } else if (new_sequencenumber !== 0) {
                throw new Error("Not the first update in the session sequence.");
            } else {
                this.reset();
            }
        } else {
            this.reset();
        }
        this.sessionid = new_session;
        this.sequencenumber = new_sequencenumber;

        // Walk the protobuffers: "protobuf_*.pb"
        let index = 0;
        while (true) {
            let name = "protobuf_" + index + ".pb";
            if (!(name in entries)) break;
            let cmd_type = this.handle_command(entries[name]);
            if (this.debug) {
                console.log("Handled command type:", cmd_type);
            }
            if (cmd_type === proto.ensightservice.SceneUpdateCommand.SceneUpdateCommandType.UPDATE_SCENE_END) break;
            index += 1;
        }
    }

    /**
     * Debugging method that generates a "visual" representation of the current tree
     * @returns {string}  A view of the tree
     */
    dump_scene() {
        let node = this.find_node_by_id(this.root_id);
        let s = "";
        if (node !== null) {
            s += node.dump("");
        }
        return s;
    }
}


/**
 * The NodalMesh class converts a collection of DSGGeom arrays and an optional DSGVariable
 * object into a simplified triangle or line nodal mesh.  If variable values are elemental,
 * they will be converted into nodal values by duplicating primitives.
 */
class NodalMesh {
    /**
     * The actual conversion is done in the constructor itself.  This class provides several
     * accessible class members:
     *    vertices: a float32 array of packed vertex data (8 floats/vertex): x,y,z,nx,ny,nz,s,t
     *    tri_indices: the mesh connectivity with each primitive being a triangle.
     *    line_indices: the mesh connectivity with each primitive being a line.
     *    minx, miny, minz, maxx, maxy, maxz: the min/max values for the coordinates
     *    color_var: the DSGVariable used to generate the s coordinates
     *
     * @param coords  The float32 array from a "COORDINATES" DSGGeom object
     * @param tri_conn  The int32 array from a "TRIANGLES" DSGGeom object
     * @param line_conn  The int32 array from a "LINES" DSGGeom object
     * @param node_normal_values  The float32 array from a "NODE_NORMALS" DSGGeom object
     * @param elem_normal_values  The float32 array from a "ELEM_NORMALS" DSGGeom object
     * @param color_var The node_var_values or elem_var_values are not null, this is the DSGVariable
     *                  associated with those values.
     * @param node_var_values  The float32 array from a "NODE_VARIABLE" DSGGeom object
     * @param elem_var_values  The float32 array from a "ELEM_NORMALS" DSGGeom object
     */
    constructor(coords, tri_conn, line_conn, node_normal_values,  elem_normal_values,
                color_var, node_var_values, elem_var_values) {
        let num_verts = coords.length / 3;

        let num_tris = 0;
        let num_lines = 0;
        if (tri_conn !== null) {
            num_tris = tri_conn.length / 3;
        }
        if (line_conn !== null) {
            num_lines = line_conn.length / 2;
        }

        let out_verts = num_verts;
        let expand = (elem_var_values !== null) || (elem_normal_values !== null);
        if (expand) {
            // All triangles followed by all lines...
            out_verts = num_tris * 3;
            out_verts += num_lines * 2;
        }

        let half_texel = 0.5;
        let tex_width = 0.5;
        let min_value = 0.;
        let max_value = 1.;
        if (color_var !== null) {
            let texture_size = color_var.texture_size()
            half_texel = 1. / (texture_size * 2.0);
            tex_width = half_texel * 2. * (texture_size - 1.)
            min_value = Number.MAX_VALUE;
            max_value = -Number.MAX_VALUE;
            for(let i=0; i<color_var.levels.length; i++) {
                min_value = Math.min(min_value, color_var.levels[i].value);
                max_value = Math.max(max_value, color_var.levels[i].value);
            }
        }
        // if the range is 0, adjust the min by -1.   The result is that the texture
        // coords will get mapped to S=1.0 which is what EnSight does in this situation
        if ((max_value - min_value) === 0.) {
            min_value = max_value - 1.0
        }
        let var_width = max_value - min_value;
        // A couple of handy things to cache in the object
        this.color_var = color_var;
        // x,y,z,nx,ny,nz,s,t
        this.vertices = new Float32Array(out_verts * 8);
        this.tri_indices = new Uint32Array(num_tris * 3);
        this.line_indices = new Uint32Array(num_lines * 2);
        if (expand) {
            let ivert = 0;    // The next vertex to be created
            // Generate the triangles
            for(let i=0; i<num_tris; i++) {
                for(let j=0; j<3; j++) {
                    let idx = tri_conn[i*3 + j];
                    // Use the next open slot in the vertices array
                    this.tri_indices[i*3 + j] = ivert;
                    // Copy the vertex
                    this.vertices[ivert*8] = coords[idx*3];
                    this.vertices[ivert*8 + 1] = coords[idx*3 + 1];
                    this.vertices[ivert*8 + 2] = coords[idx*3 + 2];
                    // Three cases for normals
                    if (node_normal_values !== null) {
                        // nodal normal (index is the same as vertex index)
                        this.vertices[ivert*8 + 3] = node_normal_values[idx*3];
                        this.vertices[ivert*8 + 4] = node_normal_values[idx*3 + 1];
                        this.vertices[ivert*8 + 5] = node_normal_values[idx*3 + 2];
                    } else if (elem_normal_values !== null) {
                        // nodal normal (index is the same as the triangle index)
                        this.vertices[ivert*8 + 3] = elem_normal_values[i*3];
                        this.vertices[ivert*8 + 4] = elem_normal_values[i*3 + 1];
                        this.vertices[ivert*8 + 5] = elem_normal_values[i*3 + 2];
                    } else {
                        // no normals specified
                        this.vertices[ivert*8 + 3] = 0.;
                        this.vertices[ivert*8 + 4] = 0.;
                        this.vertices[ivert*8 + 5] = 1.;
                    }
                    // Vertex values
                    let s = 0.;
                    let t = 0.;
                    if (node_var_values !== null) {
                        // index by the vertex number
                        s = node_var_values[idx];
                    } else if (elem_var_values !== null) {
                        // index by the primitive number
                        s = elem_var_values[i];
                    }
                    // normalized S coord value
                    s = (s - min_value) / var_width;
                    // map to the texture range
                    s = s * tex_width + half_texel
                    this.vertices[i*8 + 6] = s;
                    this.vertices[i*8 + 7] = t;
                    // Next target
                    ivert += 1;
                }
            }
            // Generate lines
            for(let i=0; i<num_lines; i++) {
                for(let j=0; j<2; j++) {
                    let idx = line_conn[i*2 + j];
                    // Use the next open slot in the vertices array
                    this.line_indices[i*2 + j] = ivert;
                    // Copy the vertex
                    this.vertices[ivert*8] = coords[idx*3];
                    this.vertices[ivert*8 + 1] = coords[idx*3 + 1];
                    this.vertices[ivert*8 + 2] = coords[idx*3 + 2];
                    // no normals for lines
                    this.vertices[ivert*8 + 3] = 0.;
                    this.vertices[ivert*8 + 4] = 0.;
                    this.vertices[ivert*8 + 5] = 1.;
                    // Vertex values
                    let s = 0.;
                    let t = 0.;
                    // Special case, if we have both lines and tris pointed to the same
                    // variable values, we cannot map elemental values, but nodal values are ok...
                    if (node_var_values !== null) {
                        // index by the vertex number
                        s = node_var_values[idx];
                    } else if ((elem_var_values !== null) && (num_tris === 0)) {
                        // index by the primitive number
                        s = elem_var_values[i];
                    }
                    // normalized S coord value
                    s = (s - min_value) / var_width;
                    // map to the texture range
                    s = s * tex_width + half_texel
                    this.vertices[i*8 + 6] = s;
                    this.vertices[i*8 + 7] = t;
                    // Next target
                    ivert += 1;
                }
            }
        } else {
            // Vertices are verbatim
            for(let i=0; i<num_verts; i++) {
                this.vertices[i*8] = coords[i*3];
                this.vertices[i*8 + 1] = coords[i*3 + 1];
                this.vertices[i*8 + 2] = coords[i*3 + 2];
                if (node_normal_values === null) {
                    this.vertices[i*8 + 3] = 0.;
                    this.vertices[i*8 + 4] = 0.;
                    this.vertices[i*8 + 5] = 1.;
                } else {
                    this.vertices[i*8 + 3] = node_normal_values[i*3];
                    this.vertices[i*8 + 4] = node_normal_values[i*3 + 1];
                    this.vertices[i*8 + 5] = node_normal_values[i*3 + 2];
                }
                let s = 0.;
                let t = 0.;
                if (node_var_values !== null) {
                    s = node_var_values[i];
                }
                // normalized S coord value
                s = (s - min_value) / var_width;
                // map to the texture range
                s = s * tex_width + half_texel
                this.vertices[i * 8 + 6] = s;
                this.vertices[i * 8 + 7] = t;
            }
            if (tri_conn !== null) {
                this.tri_indices = tri_conn.slice();
            }
            if (line_conn !== null) {
                this.line_indices = line_conn.slice();
            }
        }
        this.minx = Number.MAX_VALUE;
        this.miny = Number.MAX_VALUE;
        this.minz = Number.MAX_VALUE;
        this.maxx = -Number.MAX_VALUE;
        this.maxy = -Number.MAX_VALUE;
        this.maxz = -Number.MAX_VALUE;
        for(let i=0; i<out_verts*8; i += 8) {
            this.minx = Math.min(this.vertices[i], this.minx);
            this.miny = Math.min(this.vertices[i+1], this.miny);
            this.minz = Math.min(this.vertices[i+2], this.minz);
            this.maxx = Math.max(this.vertices[i], this.maxx);
            this.maxy = Math.max(this.vertices[i+1], this.maxy);
            this.maxz = Math.max(this.vertices[i+2], this.maxz);
        }
    }
}
const vp_src = `
uniform vec4 u_color;
uniform vec4 u_viewportsize;
attribute float pointradius;
flat varying mat4 outProjectionMatrix;
flat varying vec4 sphere_pos_r;             //sphere center in eye space, and radius
flat varying vec4 glColor;                  //sphere color
varying vec4 glTexCoord[2];                 //sphere attribute & point sprite tex coord.

const float maxPointSize = 500.0;
vec2 getViewportSize() {return u_viewportsize.xy; }

void vp_program(void) {
    mat4 glModelViewProjectionMatrix = projectionMatrix * modelViewMatrix;
    mat4 glModelViewMatrix = modelViewMatrix;
    const bool perVertexSizeFlag = false;
    const bool perVertexColorFlag = false;
    //const bvec4 vertTexFlags = getVertexTextureFlags();
    const bool perVertexTex1d = false; //vertTexFlags.x;
    const bool perVertexAlphaTex1d = false; //vertTexFlags.y;
    vec4 pointcolor = vec4(1.0, 0.0, 0.0, 1.0);
    float sphradius = pointradius; //abs(getVertexScale().x);
    float pointattrib = 0.0; // getVertexAttribute();
    float pointalphaattrib = 0.0;
    vec2 texcoord = vec2(1.0);
    const bool isAMDShader = false;

    vec4 worldpos = vec4(position.xyz, 1.0);
    vec4 eyepos0 = glModelViewMatrix * worldpos;
    vec4 eyepos = eyepos0;
    vec4 screenpos = glModelViewProjectionMatrix * worldpos;
    float pointsize, splatsize; {
        //compute screen-space point size
        vec4 basepos0 = eyepos;
        vec4 projCorner0 = screenpos;
        vec2 viewport = getViewportSize();

        //inverse compute world space sphere radius, from screen-space point size
        if (false) { //screen space sphere size
            pointsize = sphradius * 2.0;
            vec4 projCorner1 = projCorner0;
            projCorner1.xy += (texcoord / viewport) * (pointsize * projCorner0.w);
            vec4 basepos1 = inverse(glModelViewProjectionMatrix) * projCorner1;
            basepos1 /= basepos1.w;
            sphradius = length(basepos1.xyz - basepos0.xyz) * 0.707;
            if (isAMDShader) {
                screenpos = projCorner1;
                eyepos = glModelViewMatrix * basepos1;
            }
        }
        else {
            mat4 glModelViewMatrixTranspose = transpose(glModelViewMatrix);
            vec3 dirx = normalize(glModelViewMatrixTranspose[0].xyz);
            vec3 diry = normalize(glModelViewMatrixTranspose[1].xyz);
            vec2 texaxis = texcoord * sphradius;
            vec4 basepos1 = worldpos + vec4(dirx * texaxis.x + diry * texaxis.y, 0.0);
            vec4 projCorner1 = glModelViewProjectionMatrix * basepos1;
            vec4 diff = vec4(projCorner1.xy, projCorner0.xy) / vec4(projCorner1.ww, projCorner0.ww) * viewport.xyxy;
            diff.xy -= diff.zw;
            pointsize = max(diff.x, diff.y);
            if (isAMDShader) {
                const float threshold = 0.707;
                float veclen = length(diff.xy);
                if (veclen < threshold) { //fix too tiny quads dropoff issue on AMD card
                    diff.xy /= viewport * (veclen + 1e-10);
                    diff.xy *= threshold * projCorner1.w;
                    projCorner1.xy = projCorner0.xy + diff.xy;
                }
                screenpos = projCorner1;
                eyepos = glModelViewMatrix * basepos1;
            }
            //sphradius *= getModelViewMatrixScaling();
        }

        splatsize = min(max(viewport.x, viewport.y), maxPointSize);
    }

    gl_PointSize = clamp(pointsize, 1.1, splatsize);
    gl_Position = screenpos;
    glColor = pointcolor;
    glTexCoord[0] = vec4(pointattrib, texcoord, 0.0);
    glTexCoord[1] = vec4(0.0, 0.0, pointalphaattrib, 0.0);
    sphere_pos_r = vec4(eyepos0.xyz, sphradius);
    outProjectionMatrix = projectionMatrix;
}

void main(void){ vp_program(); }
`;

const fp_src = `
flat varying mat4 outProjectionMatrix;
flat varying vec4 sphere_pos_r;          //eye space sphere center & radius
flat varying vec4 glColor;
varying vec4 glTexCoord[2];

float square(float x) { return x*x; }

float GGX(float NdotH, float alphaG){//no div by PI
    vec2 t = vec2(NdotH, alphaG); t *= t;
    return t.y / square(t.x *(t.y - 1.0) + 1.0);
}

float getLightingGlobalAmbient() { return 0.05; }
float getLightingDiffuse() { return 0.8; }
float getLightingSpecular() { return 0.2;}
float getLightingRoughness() { return 0.1; }
vec3 getLightingF0() { return vec3(0.05); }

vec3 shadeVertex(vec3 vertex, vec3 normal, vec3 albedo, float ks_scale){
    vec3 ambient = albedo * getLightingGlobalAmbient();
    vec3 diffuse = albedo * getLightingDiffuse();
    float dotNL = abs(normal.z);
    vec3 specular; {
        float ks = getLightingSpecular() * 0.5 * ks_scale * ks_scale;
        vec3 kS = getLightingF0() * ks;
        float rough = getLightingRoughness();
        specular = kS * GGX(dotNL, rough);
    }
    return ambient + (diffuse + specular) * dotNL;
}

void fp_main(inout vec4 io_color, inout float io_z) {
    const bool isAMDShader = false;
    mat4 glProjectionMatrix = outProjectionMatrix;
    vec2 texcoord = isAMDShader ? glTexCoord[0].yz : gl_PointCoord * vec2(2.0, -2.0) - vec2(1.0, -1.0);
    float zz = 1.0 - dot(texcoord, texcoord);
    if (zz < 0.0) discard;

    //compute fragment depth
    float sphere_radius = sphere_pos_r.w;
    vec3 sphere_pos = sphere_pos_r.xyz;
    float z = sqrt(zz);
    vec3 normal = vec3(texcoord, z);
    vec4 spos = vec4(sphere_pos + normal * sphere_radius, 1.0);
    vec4 fpos = glProjectionMatrix * spos;
    io_z = 0.5 * (fpos.z / fpos.w) + 0.5;
    io_z = mix(gl_DepthRange.near, gl_DepthRange.far, io_z);

    vec3 basecolor = io_color.xyz;
    float ks_scale = 1.0;
    io_color.xyz = shadeVertex(sphere_pos, normal, basecolor, ks_scale);
}

void main(void){
    vec4 c = glColor; 
    float z = gl_FragCoord.z;
    fp_main(c, z); 
    gl_FragColor = c; 
    gl_FragDepth = z;
}
`;


function createPointSpriteShaderMaterial() {

    const matobj = {
        uniforms: {
            u_color: {value: new THREE.Color(0xe3e3e3)},
            u_viewportsize: {
                value: {x: 100.0, y: 100.0, z: 0.0, w: 0.0}
            }
        },
        vertexShader: vp_src,
        fragmentShader: fp_src
    };
    return new THREE.ShaderMaterial(matobj);
}

class ThreeJSNode {
    constructor(id) {
        this.id = id;
        this.hash = "";
        this.threejs_node = null;  // The node in the threejs tree associated with this instance
        this._is_loaded = false;  // When all external links have been resolved is_loaded is true
        // Before an update, all nodes will have visited set to false
        // if the node is not visited, then it needs to be removed when the load completes
        this.visited = false;
    }

    is_loaded(scene) {
        // see if this object and all of its dependents are loaded
        return this._is_loaded;
    }

    dispose() {
        // Called when the entity is to be removed from the persistence lists
        // Specific classes should override this method in most cases.  If all
        // they need is to revert an "add()" call, the default performs that operation.
        // GPU dispose operations are the responsibility of the specific subclass.
        if (this.threejs_node) {
            if (this.threejs_node.parent) {
                this.threejs_node.parent.remove(this.threejs_node);
            }
            this.threejs_node = null;
        }
    }

    _load_check(scene, map, id) {
        // if no id, consider it loaded
        if (!id) return true;
        // is the id in the map?
        const node = map.get(id);
        // a null node is likely an error!
        if (node === null) {
            console.log("Warning: " + id + " not found in: " + map);
            return false;
        }
        return node.is_loaded(scene);
    }
}

class ThreeJSArray extends ThreeJSNode {
    constructor(id) {
        super(id);
        this.url = "";
        this.type = "";
        this.dimension = 1;
        this.count = 0;
    }

    // called with the result of a GET on url completes
    complete_load(array) {
        // create the appropriate view to the array
        if (this.type === "Int8Array") {
            this.threejs_node = new THREE.BufferAttribute(new Int8Array(array), this.dimension, false);
        } else if (this.type === "Uint8Array") {
            this.threejs_node = new THREE.BufferAttribute(new Uint8Array(array), this.dimension, false);
        } else if (this.type === "Int16Array") {
            this.threejs_node = new THREE.BufferAttribute(new Int16Array(array), this.dimension, false);
        } else if (this.type === "Uint16Array") {
            this.threejs_node = new THREE.BufferAttribute(new Uint16Array(array), this.dimension, false);
        } else if (this.type === "Float32Array") {
            this.threejs_node = new THREE.BufferAttribute(new Float32Array(array), this.dimension, false);
        } else if (this.type === "Int32Array") {
            this.threejs_node = new THREE.BufferAttribute(new Int32Array(array), this.dimension, false);
        } else if (this.type === "Uint32Array") {
            this.threejs_node = new THREE.BufferAttribute(new Uint32Array(array), this.dimension, false);
        } else if (this.type === "Float64Array") {
            this.threejs_node = new THREE.BufferAttribute(new Float64Array(array), this.dimension, false);
        } else {
            this.threejs_node = new THREE.BufferAttribute(new Float32Array(array), this.dimension, false);
        }
        this.threejs_node.needsUpdate = true;
        this._is_loaded = true;
    }
}

class ThreeJSMaterial extends ThreeJSNode {
    constructor(id) {
        super(id);
        this.type = "MeshPhongMaterial";
        this.color = 16777215;
        this.ambient = 16777215;
        this.emissive = 0;
        this.specular = 1118481;
        this.shininess = 30.;
        this.opacity = 1.;
    }
}

class ThreeJSVarmapping extends ThreeJSNode {
    constructor(id) {
        super(id);
        this.partcolor = 0;     //use hex RGBA rep.
        this.undefcolor = 0;    //
        this.dispUndefType = 0;
        this.dispFringeLimitType = 0;
        this.levels = [0, 1];   //
        this.texcoords = [0, 1];
        this.tmin = 0.001;      //clamp to tmin/tmax
        this.tmax = 0.999;
    }

    compute_texcoord1D(x) {
        let n = this.levels.length;
        let t;
        if (x <= this.levels[0])
            t = this.texcoords[0];
        else if (x >= this.levels[n - 1])
            t = this.texcoords[n - 1];
        else {
            t = 0.0;
            for (let i = 1; i < n; i++) {
                if (x <= this.levels[i]) {
                    let dx = (x - this.levels[i - 1]) / (this.levels[i] - this.levels[i - 1] + 1e-38);
                    t = (1.0 - dx) * this.texcoords[i - 1] + dx * this.texcoords[i];
                    break;
                }
            }
        }
        if (t < this.tmin) t = this.tmin;
        else if (t > this.tmax) t = this.tmax;
        return t;
    }
}

class ThreeJSTexture extends ThreeJSNode {
    constructor(id) {
        super(id);
        this.texblock_id = null;
        this.array = null;  // Base64 encoding of a 2D pixel array
        this.width = 0;     // Support up to 3D volume texture
        this.height = 0;
        this.depth = 1;
        this.format = 4;    // number of pixel components, e.g. RGBA or RGB, default is RGBA
        this.type = 1;      // 1: Byte 
        this.wrapmode = 0;
        this.replacemode = 0;
        this.name = "";
        this.transparent = false;
    }

    /*
        build_texture1(blockmap) {
            if (!texblock_id) return;
            const imagebuffernode = blockmap.get(texblock_id);
            if (!imagebuffernode) return;
            const num_bytes = this.width * this.height * this.depth * this.format;
            const array = imagebuffernode.threejs_node.array;
            let texture = new THREE.DataTexture(array, this.width, this.height);
            texture.format = THREE.RGBAFormat;
            texture.type = THREE.UnsignedByteType;
            texture.needsUpdate = true;
            return texture;
        }
    */
    build_texture() {
        let tex_pow = 1;
        while ((2 ** tex_pow) < this.width) tex_pow += 1;
        const num_bytes = this.width * this.height * this.depth * this.format;
        const pixels = new Uint8Array(num_bytes);
        // window.atob() is an odd bird, it returns a unicode string object with the char
        // values being 8bit ints effectively encoded into 16bit unicode chars.
        const raw = window.atob(this.array);
        if (num_bytes != raw.length) {
            pixels.fill(0xff);  // opaque white by default
        } else {
            for (let i = 0; i < num_bytes; i += 4) {
                pixels[i] = raw.charCodeAt(i);
                pixels[i + 1] = raw.charCodeAt(i + 1);
                pixels[i + 2] = raw.charCodeAt(i + 2);
                pixels[i + 3] = raw.charCodeAt(i + 3);
                if (pixels[i + 3] != 255) {
                    this.transparent = true;
                }
            }
        }
        let texture = new THREE.DataTexture(pixels, this.width, this.height);
        texture.format = THREE.RGBAFormat;
        texture.type = THREE.UnsignedByteType;
        texture.magFilter = THREE.LinearFilter;
        texture.minFilter = THREE.LinearFilter;
        texture.needsUpdate = true;
        return texture;
    }
}


class ThreeJSVariable extends ThreeJSNode {
    constructor(id) {
        super(id);
        this.varblock_id = null;
        this.name = "";
        this.units = "/";
        this.unitlabel = "";
        this.transparent = false;
        this.mapping = new ThreeJSVarmapping(0);  // Texture coordinate mapping
        this.tex1d = new ThreeJSTexture(0);   // Inline 1D textures handled here
    }

    compute_texcoords1D(srcBufAttribute, dstBufAttribute) {
        for (let i = 0; i < srcBufAttribute.count; i++) {
            let u = srcBufAttribute.getX(i);
            let t = this.mapping.compute_texcoord1D(u);
            dstBufAttribute.setX(i, t);
            dstBufAttribute.setY(i, 0.5);
        }
    }
}

class ThreeJSGeom extends ThreeJSNode {
    constructor(id) {
        super(id);
        this.primitive = "";
        this.bounds = null;
        this.conn_arr_id = null;
        this.coord_arr_id = null;
        this.norm_arr_id = null;
        this.varcoord_arr_id = null;
        this.pointradius_arr_id = null;
        this.variable_id = null;
        this.varmapping_id = null;
        this.avarmapping_id = null;
        this.tex1d_id = null;
        this.atex1d_id = null;
        this.tex2d_id = null;
        this.material_id = null;
        this.linewidth = 1.;
        this.offset = false;
    }

    is_loaded(scene) {
        if (!this._load_check(scene, scene.arrays, this.conn_arr_id)) return false;
        if (!this._load_check(scene, scene.arrays, this.coord_arr_id)) return false;
        if (!this._load_check(scene, scene.arrays, this.norm_arr_id)) return false;
        if (!this._load_check(scene, scene.arrays, this.varcoord_arr_id)) return false;
        if (!this._load_check(scene, scene.arrays, this.pointradius_arr_id)) return false;
        if (!this._load_check(scene, scene.variables, this.variable_id)) return false;
        if (!this._load_check(scene, scene.varmappings, this.varmapping_id)) return false;
        if (!this._load_check(scene, scene.varmappings, this.avarmapping_id)) return false;
        if (!this._load_check(scene, scene.textures, this.tex1d_id)) return false;
        if (!this._load_check(scene, scene.textures, this.atex1d_id)) return false;
        if (!this._load_check(scene, scene.textures, this.tex2d_id)) return false;
        if (!this._load_check(scene, scene.materials, this.material_id)) return false;
        return true;
    }

    get_bounds(scene) {
        if (this.bounds === null) return null;
        let bounds = new THREE.Box3(new THREE.Vector3(this.bounds[0], this.bounds[1], this.bounds[2]),
            new THREE.Vector3(this.bounds[3], this.bounds[4], this.bounds[5]));
        return bounds;
    }

    dispose() {
        // GPU dispose: texture, geometry, material
        let mesh = this.threejs_node;
        if (mesh.material.map) {
            mesh.material.map.dispose();
        }
        mesh.geometry.dispose();
        mesh.material.dispose();
        // Handles the add/remove
        super.dispose();
    }

    // For now, we rebuild the mesh chunk entirely, but in the future the update can be more
    // surgical.
    build_threejs_node(scene) {
        if (this._is_loaded) return false;
        let mesh = this.threejs_node;
        if (!this.is_loaded(scene)) {
            mesh.visible = false;
            return false;
        }

        if (scene._verbose) {
            console.log("Completing the node:", this);
        }

        // Set the geometry attributes
        let geometry = mesh.geometry;
        this._bind_geom_array(geometry, scene.arrays, this.conn_arr_id, 'connectivity', null, null);
        this._bind_geom_array(geometry, scene.arrays, this.coord_arr_id, 'position', null, null);
        this._bind_geom_array(geometry, scene.arrays, this.norm_arr_id, 'normal', null, null);
        this._bind_geom_array(geometry, scene.arrays, this.pointradius_arr_id, 'pointradius', null, null);

        // Texture coords via Mx+b variable value transformation
        let variable_node = scene.variables.get(this.variable_id);
        let texture_mapping = false;
        if (variable_node && this.varcoord_arr_id) {
            const vararrnode = scene.arrays.get(this.varcoord_arr_id);
            if (vararrnode) {
                const srcBufAtribute = vararrnode.threejs_node;
                let dstBufAttribute = new THREE.BufferAttribute(new Float32Array(srcBufAtribute.count * 2), 2, false);
                variable_node.compute_texcoords1D(srcBufAtribute, dstBufAttribute);
                dstBufAttribute.needsUpdate = true;
                geometry.setAttribute('uv', dstBufAttribute);
                texture_mapping = true;
            }
        }

        // set material (MeshPhongMaterial instance update)
        let material = mesh.material;
        let material_node = scene.materials.get(this.material_id);
        if (material_node) {
            if (this.offset) {
                // Note: this pushes solid geometry back...
                material.polygonOffset = true;
                material.polygonOffsetFactor = 1.0;
                material.polygonOffsetUnits = 4.0;
            }
            if (this.primitive === "points") {
                material.uniforms.u_color = new THREE.Color(material_node.color);
                let w = window.innerWidth, h = window.innerHeight;
                console.log("Window size is ", w, ",", h);
                material.uniforms.u_viewportsize.value = new THREE.Vector4(w, h, 0, 0);
                //material.color = new THREE.Color(material_node.color);
                //material.opacity = material_node.opacity;
                //material.size = 0.150;
                //material.transparent = (material_node.opacity < 1.0);
            } else if (this.primitive === "lines") {
                material.color = material_node.color;
                material.linewidth = this.linewidth;
                material.opacity = material_node.opacity;
                material.transparent = (material_node.opacity < 1.0);
            } else {
                // if no normals were passed, generate some
                if (!this.norm_arr_id) {
                    mesh.geometry.computeVertexNormals();
                }
                material.color = new THREE.Color(material_node.color);
                material.ambient = new THREE.Color(material_node.ambient);
                material.emissive = new THREE.Color(material_node.emissive);
                material.specular = new THREE.Color(material_node.specular);
                material.shininess = material_node.shininess;
                material.opacity = material_node.opacity;
                material.transparent = (material_node.opacity < 1.0);
                material.side = THREE.DoubleSide;
                material.flatShading = false;
                if (texture_mapping) {
                    // replace the diffuse color (modulated by material.color)
                    material.map = variable_node.tex1d.build_texture();
                    material.color = new THREE.Color(0xffffff);
                }
            }
        }
        mesh.visible = true;
        // Speed up the "done" check
        this._is_loaded = true;
        return true;
    }

    _bind_geom_array(geom, map, id, name, range, num_texels) {
        if (!id) return;
        const arr = map.get(id);
        if (!arr) return;
        if (name === 'connectivity') {
            geom.setIndex(arr.threejs_node);
        } else {
            let buffer_attribute = arr.threejs_node;
            if (range) {
                // Potentially, this could be applied to other arrays (e.g. unit conversion, etc)
                buffer_attribute = buffer_attribute.clone();
                // Special case of the 'uv' where u' = uM + B
                if (name === 'uv') {
                    let half_texel = 1. / num_texels;
                    let min = range[0];
                    let delta = range[1] - range[0];
                    if (range[0] === range[1]) delta = 1.;
                    delta = 1.0 / delta;  // [0,1]
                    // inset by one texel (two half texels)
                    delta = delta * (1.0 - (2.0 * half_texel)); // [0,1-2*hlf]
                    let max_tc = 1.0 - half_texel;
                    for (let i = 0; i < buffer_attribute.count; i++) {
                        let u = buffer_attribute.getX(i);
                        // start by clamping
                        if (u < range[0]) u = range[0];
                        if (u > range[1]) u = range[1];
                        // from center of first texel to last texel
                        u = (u - min) * delta + half_texel;
                        buffer_attribute.setX(i, u);
                    }
                }
                buffer_attribute.needsUpdate = true;
            }
            geom.setAttribute(name, buffer_attribute);
        }
    }

    // Note: dispose() for anything with GPU resources
    //   scene.remove(cubeMesh);
    //   cubeMesh.texture.dispose();
    //   cubeMesh.geometry.dispose();
    //   cubeMesh.material.dispose();
}

class ThreeJSPart extends ThreeJSNode {
    constructor(id) {
        super(id);
        this.name = name;
        this.geoms = [];
    }

    is_loaded(scene) {
        for (const geom_id of this.geoms) {
            if (!this._load_check(scene.geoms, geom_id)) return false;
        }
        return true;
    }

    get_bounds(scene) {
        let bounds = new THREE.Box3();
        for (const geom_id of this.geoms) {
            let geom_bounds = scene.geoms.get(geom_id).get_bounds(scene);
            if (geom_bounds === null) return null;
            bounds.expandByPoint(geom_bounds.min);
            bounds.expandByPoint(geom_bounds.max);
        }
        return bounds;
    }
}


class ThreeJSScene {
    constructor(parent) {
        this._parent = parent;
        this.parts = new Map();
        this.geoms = new Map();
        this.variables = new Map();
        this.varmappings = new Map();
        this.textures = new Map();
        this.materials = new Map();
        this.arrays = new Map();
        this.unitsystem = "SI";
        this.unitlabel_length = "";
        // Three.js root nodes for geometry loaded by a three.js loader or the JSON I/O system
        // Only one should ever be not null;
        // JSON geometry root
        this.json_root = null;
        // Loaded geometry root
        this.loader_root = null;
        // Loading queue
        this._list_to_load = [];
        // verbose mode
        this._verbose = false;
    }

    // Completely reset the current geometry state
    reset() {
        this.reset_json_root();
        this.reset_loader_root();
        // other stuff...???
        this.unit_system = "SI";
        this.unitlabel_length = "";
    }

    // Reset the state of non JSON loaded geometry
    reset_loader_root() {
        // Any data root object should be in the scene
        if (this.loader_root) {
            this._parent._scene.remove(this.loader_root);
        }
        this.loader_root = null;
    }

    // Reset the state of non JSON loaded geometry
    reset_json_root() {
        // Any data root object should be in the scene
        if (this.json_root) {
            // destroy the three.js content
            for (const part of this.parts) {
                part[1].dispose();
            }
            for (const geom of this.geoms) {
                geom[1].dispose();
            }
            for (const variable of this.variables) {
                variable[1].dispose();
            }
            for (const material of this.materials) {
                material[1].dispose();
            }
            for (const varmap of this.varmappings) {
                varmap[1].dispose();
            }
            for (const tex of this.textures) {
                tex[1].dispose();
            }
            for (const array of this.arrays) {
                array[1].dispose();
            }
            // destroy the nodes
            this.parts.clear();
            this.geoms.clear();
            this.variables.clear();
            this.varmappings.clear();
            this.textures.clear();
            this.materials.clear();
            this.arrays.clear();
            this._parent._scene.remove(this.json_root);
        }
        this.json_root = null;
    }

    // Set the entity visited flags to false
    reset_visitors() {
        for (const part of this.parts) {
            part[1].visited = false;
        }
        for (const geom of this.geoms) {
            geom[1].visited = false;
        }
        for (const variable of this.variables) {
            variable[1].visited = false;
        }
        for (const varmap of this.varmappings) {
            varmap[1].visited = false;
        }
        for (const tex of this.textures) {
            tex[1].visited = false;
        }
        for (const material of this.materials) {
            material[1].visited = false;
        }
        for (const array of this.arrays) {
            array[1].visited = false;
        }
    }

    _keep_visited(map) {
        for (const item of map) {
            if (item[1].visited) continue;
            item[1].dispose();
            map.delete(item[0]);
        }
    }

    // If any of the entities were not visited during the JSON merge, we can remove them
    prune_visitors() {
        // Note: order matters here to avoid memory leaks
        this._keep_visited(this.parts);
        this._keep_visited(this.geoms);
        this._keep_visited(this.variables);
        this._keep_visited(this.varmappings);
        this._keep_visited(this.textures);
        this._keep_visited(this.materials);
        this._keep_visited(this.arrays);
        this._postEvent("parts-changed", {});
    }

    // Called when the "source" changes
    loadData(url, extension) {
        let gltf_load = false;
        for (const ext of ["glb", "gltf"]) {
            if ((extension === ext) || url.endsWith(ext)) {
                gltf_load = true;
                break;
            }
        }
        if (gltf_load) {
            // The traditional Three.js loaders
            this._parent._parent.loadingStatus(true);
            const loader = new THREE.GLTFLoader();
            loader.load(url, this._gltfLoadComplete.bind(this));
        } else {
            // Incremental JSON loader
            this._parent._parent.loadingStatus(true);
            // Start the URL fetch
            fetch(url)
                .then((response) => {
                    // Handle the response status
                    if (response.status === 200) {
                        // A good fetch, get the JSON object
                        return response.json();
                    } else {
                        // The URL fetch failed
                        alert("Unable to fetch data from:" + url + " (" + response.status + ")");
                        this._parent._parent.loadingStatus(false);
                    }
                })
                .then(this._loadedJSON.bind(this))  // Parse the JSON object
                .catch((error) => {
                    // Handle other errors (e.g. invalid JSON, etc)
                    alert("Unable to process data from: " + url + " (" + error + ")");
                    this._parent._parent.loadingStatus(false);
                });
        }
    }

    // Callback for when a threejs loader finished creating a scene
    _gltfLoadComplete(gltf) {
        // Reset the geometry state (kills either loaded gltf and resets any JSON state).
        this.reset();
        // normalize the scene
        this._normalizeSceneBounds(gltf.scene, null);
        // Remember the data root and remove it if replacing it.
        this.loader_root = gltf.scene;
        this._parent._scene.add(gltf.scene);
        this._parent._render();
        this._parent._parent.loadingStatus(false);
        this._postEvent("parts-changed", {});
    }

    _normalizeSceneBounds(root, bounds) {
        // Reset initially
        root.scale.set(1., 1., 1.);
        root.position.set(0., 0., 0.);

        let bbox = bounds;
        if (bounds === null) {
            bbox = new THREE.Box3();
            bbox.setFromObject(root);
        }
        const cent = bbox.getCenter(new THREE.Vector3());
        const size = bbox.getSize(new THREE.Vector3());
        // Rescale the object to normalized space
        const maxAxis = Math.max(size.x, size.y, size.z);
        root.scale.multiplyScalar(1.0 / maxAxis);
        bbox.setFromObject(root);
        bbox.getCenter(cent);
        // Reposition to 0,0,0
        root.position.copy(cent).multiplyScalar(-1);
    }

    // Callback when a JSON block has been loaded
    _loadedJSON(json) {
        // If we had previously loaded gltf/obj/etc geometry, free it, but keep any JSON state
        this.reset_loader_root();
        this.reset_visitors();

        // Create a json root if it does not exist
        if (this.json_root === null) {
            this.json_root = new THREE.Group();
            this._parent._scene.add(this.json_root);
        }
        // Integrate the JSON into the current scene
        if (this._verbose) {
            console.log("JSON loaded:", json);
        }

        // Validate the header and top level structure
        this._validate_metadata(json);
        this._parse_arrays(json.arrays);
        this._parse_materials(json.materials);
        this._parse_variables(json.variables);
        //this._parse_varmappings(json.varmappings);
        this._parse_textures(json.textures);
        this._parse_geoms(json.geoms);
        this._parse_parts(json.parts);

        this.prune_visitors();
        this._parent._render();
        // We might be done already...
        if (!this._list_to_load.length) {
            this._parent._parent.loadingStatus(false);
        }
    }

    // This is called back when the url associated with node has been GET successfully.  array
    // is the resulting arrayBuffer object.
    _loadedNode(node, array) {

        // Finish the load in the node code itself
        if (array !== null) {
            node.complete_load(array);
        }
        // remove from the pending array list
        const index = this._list_to_load.indexOf(node);
        if (index > -1) {
            this._list_to_load.splice(index, 1);
        }
        if (this._verbose) {
            console.log("Loaded:", node)
        }
        // give all the geoms a chance to enable themselves
        let refresh = false;
        for (const geom of this.geoms.values()) {
            refresh |= geom.build_threejs_node(this);
        }
        if (refresh) this._parent._render();
        // if this was the last node to load, clear the loading status
        if (this._list_to_load.length == 0) {
            this._parent._parent.loadingStatus(false);
        }
    }

    // TODO: run loading from a pool, but for now we just start them all up front...
    _add_update(node) {
        if (!node.hasOwnProperty("url")) {
            node._is_loaded = true;
            return;
        }
        node._is_loaded = false;
        this._list_to_load.push(node);
        // Start the URL fetch
        fetch(node.url)
            .then((response) => {
                // Handle the response status
                if (response.status === 200) {
                    // A good fetch, get the arrayBuffer representation
                    return response.arrayBuffer();
                } else {
                    // The URL fetch failed
                    alert("Unable to fetch data from:" + node.url + " (" + response.status + ")");
                    this._parent._parent.loadingStatus(false);
                    return null;
                }
            })
            .then(this._loadedNode.bind(this, node))  // Handle the arraybuffer via _loadedNode()
            .catch((error) => {
                // Handle other errors (e.g. invalid JSON, etc)
                alert("Unable to process data from: " + node.url + " (" + error + ")");
                this._parent._parent.loadingStatus(false);
            });
    }

    _parse_arrays(items) {
        // Arrays are unique as the id is the hash
        for (const item of items) {
            let array = this.arrays.get(item.hash);
            let rebuild = false;
            if (!array) {
                array = new ThreeJSArray(item.hash);
                this.arrays.set(item.hash, array);
                rebuild = true;
            } else if (array.hash != item.hash) {
                rebuild = true;
            }
            // The material is complete by definition (no external pull)
            if (rebuild) {
                array.hash = item.hash;
                array.url = item.url;
                array.type = item.type;
                array.dimension = item.dimension;
                array.count = item.count;
                this._add_update(array);   // will flag the object as unloaded
            }
            array.visited = true;
        }
    }

    _parse_materials(items) {
        if (!items) return;
        for (const item of items) {
            let material = this.materials.get(item.id);
            let rebuild = false;
            if (!material) {
                material = new ThreeJSMaterial(item.id);
                this.materials.set(item.id, material);
                rebuild = true;
            } else if (material.hash != item.hash) {
                rebuild = true;
            }
            // The material is complete by definition (no external pull)
            if (rebuild) {
                material.hash = item.hash;
                if (item.type !== "MeshPhongMaterial") {
                    console.log("Unknown material type: ", item.type);
                } else {
                    material.color = item.color;
                    material.ambient = item.ambient;
                    material.emissive = item.emissive;
                    material.specular = item.specular;
                    material.shininess = item.shininess;
                    material.opacity = item.opacity;
                }
                material._is_loaded = true;   // This object is loaded
            }
            material.visited = true;
        }
    }

    _parse_variables(items) {
        if (!items) return;
        for (const item of items) {
            let variable = this.variables.get(item.id);
            let rebuild = false;
            if (!variable) {
                variable = new ThreeJSVariable(item.id);
                this.variables.set(item.id, variable);
                variable.threejs_node = null;
                rebuild = true;
            } else if (variable.hash != item.hash) {
                rebuild = true;
            }
            // dump and re-add the geoms for this part
            if (rebuild) {
                variable.hash = item.hash;
                variable.name = item.name;
                variable.units = item.units;
                variable.unitlabel = item.unitlabel;
                variable._is_loaded = true; // this object is always loaded
                if (variable.tex1d) {
                    variable.tex1d.width = item.width;
                    variable.tex1d.height = item.height;
                    variable.tex1d.array = item.array;  // Base64 encodeded RGBARGBARGBA...
                }
                if (variable.mapping) {
                    variable.mapping.levels = item.levels;
                    variable.mapping.texcoords = item.texcoords_range;
                    // This is the 1D case, so the min/max values come from the range
                    variable.mapping.tmin = variable.mapping.texcoords[0];
                    variable.mapping.tmax = variable.mapping.texcoords[variable.mapping.texcoords.length - 1];
                }
            }
            variable.visited = true;
        }
    }

    _parse_textures(items) {
        if (!items) return;
        for (const item of items) {
            let tex = this.textures.get(item.id);
            let rebuild = false;
            if (!tex) {
                tex = new ThreeJSTexture(item.id);
                this.textures.set(item.id, tex);
                tex.threejs_node = new THREE.Texture();
                rebuild = true;
            } else if (tex.hash != item.hash) {
                rebuild = true;
            }
            if (rebuild) {
                tex.hash = item.hash;
                tex.array = item.array;   // Base64 encodeded RGBARGBARGBA...
                tex.width = item.width;
                tex.height = item.height;
                tex.depth = item.depth;
                tex.format = item.format;
                tex.type = item.type;
                tex.wrapmode = item.wrapmode;
                tex.replacemode = item.replacemode;
                tex._is_loaded = true;
            }
            variable.visited = true;
        }
    }

    _parse_varmappings(items) {
        if (!items) return;
        for (const item of items) {
            let varmap = this.varmappings.get(item.id);
            let rebuild = false;
            if (!varmap) {
                varmap = new ThreeJSVarmapping(item.id);
                this.variables.set(item.id, varmap);
                varmap.threejs_node = null;
                rebuild = true;
            } else if (varmap.hash != item.hash) {
                rebuild = true;
            }
            if (rebuild) {
                varmap.hash = item.hash;
                varmap.partcolor = item.partcolor;
                varmap.undefcolor = item.undefcolor;
                varmap.dispUndefType = item.dispUndefType;
                varmap.dispFringeLimitType = item.dispFringeLimitType;
                varmap.levels = item.levels;
                varmap.texcoords = item.texcoords;
                varmap.tmin = item.tmin;
                varmap.tmax = item.tmax;
                varmap._is_loaded = true;
            }
            varmap.visited = true;
        }
    }

    _parse_geoms(items) {
        if (!items) return;
        for (const item of items) {
            let geom = this.geoms.get(item.id);
            let rebuild = false;
            if (!geom) {
                geom = new ThreeJSGeom(item.id);
                this.geoms.set(item.id, geom);
                rebuild = true;
            } else if (geom.hash != item.hash) {
                rebuild = true;
            }
            // dump and re-add the geoms for this part
            if (rebuild) {
                geom.linewidth = item.linewidth || 1.;
                geom.offset = item.offset || false;
                geom.hash = item.hash;
                // There is still an issue here where a part would need to be updated
                // as well.  Generally, we need to avoid changing the primitive type
                // of a geom for now.
                if (geom.primitive !== item.primitive) {
                    if (item.primitive === "points") {
                        geom.threejs_node = new THREE.Points();
                        //geom.threejs_node.material = new THREE.PointsMaterial();
                        geom.threejs_node.material = createPointSpriteShaderMaterial();
                    } else if (item.primitive === "lines") {
                        geom.threejs_node = new THREE.LineSegments();
                        geom.threejs_node.material = new THREE.LineBasicMaterial();
                    } else {
                        geom.threejs_node = new THREE.Mesh();
                        geom.threejs_node.material = new THREE.MeshPhongMaterial();
                    }
                    geom.primitive = item.primitive;
                }
                // We have a number of IDs that need to be copied and status checked
                const attrnames = ["conn_arr_id", "coord_arr_id", "norm_arr_id",
                    "varcoord_arr_id", "pointradius_arr_id", "variable_id",
                    "material_id", "tex1d_id"];
                let id_changed = false;
                for (const name of attrnames) {
                    // Has the ID changed?
                    if (geom[name] != item[name]) id_changed = true;
                    // Copy the new value
                    geom[name] = item[name];
                }
                geom.bounds = item.bounds;
                // A couple of cases:
                // 1) an id is not loaded
                //    hide the object and mark as not loaded as the id loading will trigger completion
                // 2) id has changed but all ids are loaded
                //    we can just rebuild right now to the new ids, no need to hide
                // 3) all the ids are the same and all the ids are loaded geom is loaded
                //    no changes made, no need to do anything
                if (!geom.is_loaded(this)) {
                    // Case (1)
                    geom._is_loaded = false;
                    if (geom.threejs_node) geom.threejs_node.visible = false;
                    // This will update when one of the dependent ids load
                } else if (id_changed) {
                    // Case (2) all ids are loaded, but the ids for this geom have changed.
                    // we can handle this update right now.
                    geom._is_loaded = false;
                    geom.build_threejs_node(this);
                } else {
                    // Case (3) all ids are loaded and no ids have changed, do nothing
                    geom._is_loaded = true;
                    if (geom.threejs_node) geom.threejs_node.visible = true;
                }
            }
            geom.visited = true;
        }
    }

    _parse_parts(items) {
        if (!items) return;
        let some_changed = false;
        for (const item of items) {
            let part = this.parts.get(item.id);
            let rebuild = false;
            if (!part) {
                part = new ThreeJSPart(item.id);
                this.parts.set(item.id, part);
                part.threejs_node = new THREE.Group();
                this.json_root.add(part.threejs_node);
                rebuild = true;
                some_changed = true;
            } else if (part.hash != item.hash) {
                rebuild = true;
                some_changed = true;
            }
            // dump and re-add the geoms for this part
            if (rebuild) {
                part.hash = item.hash;
                part.name = item.name;
                part.threejs_node.name = item.name;
                part.geoms = item.geoms;
                part.threejs_node.clear();
                for (const geom_id of part.geoms) {
                    part.threejs_node.add(this.geoms.get(geom_id).threejs_node);
                }
                part._is_loaded = true;   // This object is loaded
                this._postEvent("parts-changed", {});
            }
            part.visited = true;
        }
        // if not all the parts changed, then the current unit space transform is valid
        // if all the parts changed, then we will compute a new, top level transform
        // normalize the scene.
        if (some_changed) {
            let bounds = this._JSON_bounds();
            this._normalizeSceneBounds(this.json_root, bounds);
        }
    }

    _validate_metadata(json) {
        // metadata block
        if (!("metadata" in json)) {
            throw "Incorrectly formatted geometry file.";
        }
        if (json.metadata.magic !== "sgeo") {
            throw "Geometry file is not in the correct schema.";
        }
        this.unitsystem = json.metadata.unitsystem || "";
        this.unitlabel_length = json.metadata.unitlabel_length || "";
        // the arrays
        for (const name of ["arrays", "materials", "variables", "geoms", "parts"]) {
            if (!Array.isArray(json[name])) {
                throw "Geometry file is not in the correct schema.";
            }
        }
    }

    _JSON_bounds() {
        // all the geoms in the map should be being used
        let bounds = new THREE.Box3();
        for (const item of this.parts) {
            let part_box = item[1].get_bounds(this);
            if (part_box === null) return null;
            bounds.expandByPoint(part_box.min);
            bounds.expandByPoint(part_box.max);
        }
        return bounds;
    }

    _postEvent(name, details) {
        if (this._parent._renderer === null) return;
        const parts_event = new CustomEvent(name, {bubbles: true, detail: details});
        const canvas = this._parent._renderer.domElement;
        canvas.dispatchEvent(parts_event);
    }
}


// Interface to the Three.js renderer
class ThreeJSViewerGlue {
    constructor(parent) {
        this._parent = parent;
        this._renderer = null;
        this._resizeObserver = null;
        this._scene = null;
        this._camera = null;
        this._light = null;
        this._webgl_support = null;
        this._scene_handler = new ThreeJSScene(this);
    }

    internalRenderer() {
        return this;
    }

    renderImage() {
        if (this._renderer) {
            this._renderer.render(this._scene, this._camera);
            return this._renderer.domElement.toDataURL();
        }
        return null;
    }

    mouseIn(e) {
        // When the mouse enters an active viewer, mark it as more "recent"
        this._parent.refreshInstance();
    }

    divID() {
        return 'three-div-' + this._parent.guid;
    }

    canvasID() {
        return 'three-canvas-' + this._parent.guid;
    }

    resizeRenderer(width, height) {
        if (this._renderer === null) return;
        this._resizeCanvasToDisplaySize();
    }

    setPerspective(on) {
        if (this._renderer === null) return;
        // TODO
    }

    parts() {
        if (this._renderer === null) return [];
        let part_list = [];
        for (const part of this._scene_handler.parts) {
            part_list.push(part[1].name);
        }
        return part_list;
    }

    setSrc(url, extension) {
        if (this._renderer === null) return;
        if (!url) return;
        this._scene_handler.loadData(url, extension);
    }

    setActive(on) {
        let renderDiv = this._parent.querySelector('#render-div');
        if (on) {
            if (this._webgl_support === null) this._webgl_support = webgl_support();
            if (this._webgl_support) {
                // The three.js renderer needs to go into a div with a unique global id
                // <div><canvas>
                let inner = '<div class="ansys-nexus-viewer" id="' + this.divID() + '">\n';
                inner += '<canvas id="' + this.canvasID() + '" tabIndex="0" style="margin:0;padding:0;border:0;"></canvas>\n';
                inner += '</div';
                renderDiv.innerHTML = inner;
                let threeDiv = this._parent.querySelector('#' + this.divID());
                threeDiv.addEventListener('mouseenter', this.mouseIn.bind(this));
                let threeCanvas = this._parent.querySelector('#' + this.canvasID());
                threeCanvas.style.background = 'radial-gradient(#e6e6e6, #c8c8d8)';

                // The scene will be transparent, and will view the background from the canvas
                this._scene = new THREE.Scene();
                this._scene.background = null;

                // The camera
                this._camera = new THREE.PerspectiveCamera(45, 2.0, 0.01, 2000.);
                this._camera.position.z = 2.5;

                // Actual renderer
                this._renderer = new THREE.WebGLRenderer({canvas: threeCanvas, alpha: true});

                // Build the interactor
                this._controls = new THREE.ArcballControls(this._camera, this._renderer.domElement, this._scene);
                this._controls.addEventListener('change', this._render.bind(this));
                this._controls.setGizmosVisible(false);
                this._controls.setCamera(this._camera);

                // The point light moves with the camera via the _lightUpdate method
                this._light = new THREE.PointLight(0xffffff, 1.25, 0.);
                this._lightUpdate();
                this._controls.addEventListener('change', this._lightUpdate.bind(this));
                this._scene.add(this._light);

                // Add a view of the axes (positioned relative to the camera on the fly and
                // rendered last, after clearing the depth buffer).
                const length = 0.12;
                const cone_len = 0.035;
                const cone_base = 0.020;
                this._triad = new THREE.AxesHelper(0.01);
                this._overlay(this._triad);
                const origin = new THREE.Vector3(0, 0, 0);
                const X = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, length, 0xff0000,
                    cone_len, cone_base);
                this._overlay(X.line);
                this._overlay(X.cone);
                this._triad.add(X);
                const Y = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), origin, length, 0x00ff00,
                    cone_len, cone_base);
                this._overlay(Y.line);
                this._overlay(Y.cone);
                this._triad.add(Y);
                const Z = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), origin, length, 0x0000ff,
                    cone_len, cone_base);
                this._overlay(Z.line);
                this._overlay(Z.cone);
                this._triad.add(Z);
                this._scene.add(this._triad);

                // If there is data, load it now...
                this.setSrc(this._parent.src, this._parent.src_ext);
                this.setPerspective(this._parent.perspective);

                // update the size when the parent div change
                this._resizeObserver = new ResizeObserver(this._resizeCanvasToDisplaySize.bind(this));
                this._resizeObserver.observe(threeDiv, {box: 'content-box'});

                // Register a callback for keys
                threeCanvas.addEventListener('keydown', (e) => {
                    this._controls.reset();
                    this._lightUpdate();
                    this._render();
                });

                // An initial redraw
                this._render();

            } else {
                // Display WebGL error message
                renderDiv.innerHTML = '<div class="ansys-nexus-viewer" id="' + this.divID() + '"></div>';
                let threeDiv = this._parent.querySelector('#' + this.divID());
                threeDiv.innerHTML = '<em>Warning: WebGL is not supported by this browser.<br>3D interactive geometry will not be displayed.</em>';
            }
        } else {
            // Handle deactivation
            if (this._resizeObserver) {
                this._resizeObserver.disconnect();
                this._resizeObserver = null;
            }
            this._renderer = null;
            this._scene = null;
            this._camera = null;
            this._light = null;
            this._data_root = null;
            renderDiv.innerHTML = '';
        }
    }

    _overlay(mesh) {
        mesh.renderOrder = 9999;
        mesh.onBeforeRender = function (renderer) {
            renderer.clearDepth();
        };
    }

    _lightUpdate() {
        this._light.position.copy(this._camera.position);
    }

    _render() {
        if (this._triad) {
            const localToCameraAxesPlacement = new THREE.Vector3(0.6 * this._camera.aspect, -0.6, -2);
            this._camera.updateMatrixWorld();
            const axesPlacement = this._camera.localToWorld(localToCameraAxesPlacement.clone());
            this._triad.position.copy(axesPlacement);
        }
        this._renderer.render(this._scene, this._camera);
    }

    _resizeCanvasToDisplaySize() {
        if (!this._renderer) return;
        const canvas = this._renderer.domElement;
        // look up the size the canvas is being displayed
        const width = canvas.parentElement.clientWidth;
        const height = canvas.parentElement.clientHeight;
        // you must pass false here or three.js sadly fights the browser
        this._renderer.setSize(width, height, false);
        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        this._renderer.render(this._scene, this._camera);
    }

}
