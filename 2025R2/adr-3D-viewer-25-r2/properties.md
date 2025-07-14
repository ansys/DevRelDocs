# Properties

The web component element supports several properties:

* __active__: If this is true, the 3D view will be active.  If false, the proxy image is displayed (if no proxy image is specified, a "blank" launch image will be presented). <br> Note: The `active` property can be altered via the built-in getter/setter or via the native web API `.setAttribute('active', [true/false])`.
* __aspect-ratio__: the viewer does not support explicit width/height specification and will be sized to fill the parent element with one exception.  If 'aspect-ratio' is set, the height will be the (dynamic) width divided by the aspect-ratio value.  If 'aspect-ratio' is set to the string 'proxy', the aspect ratio of the proxy image will be used. <br> Note: The `aspect_ratio` property can be altered via the built-in getter/setter or via the native web API `.setAttribute('aspect_ratio', [aspect ratio number])`.
* __guid__: a string property that is a unique identifier for the component instance. This defaults to a pseudo-guid that is unique only vs other ansys-nexus-viewer components in the same web page. This property may be set when the element is instantiated but cannot be changed afterward.
* __src__: A read/write property. URL to the source 3D geometry. Validity varies by renderer type.
  * a. The 'webgl' renderer supports: '.avz', '.dsco', '.scdoc', and '.scdocx' files.
  * b. The 'three' renderer supports '.glb' ,  '.obj' files.
  * c. The 'envnc' renderer supports '.evsn'.
<br> Note: The 'src' property can be altered via the built in getter/setter or via the native web API`.setAttribute('src', [src_path])`. The renderer would get changed dynamically based on the new file type.
* __src_ext__: In some situations, __src__ may be a data URI. In this situation, the component cannot determine the actual file format.  Setting this property to the 
  natural filename extension allows a data URI to be used with __src__.  For example: setting __src_ext='avz'__ will allow an AVZ data URI to be passed to __src__.
* __proxy-img__: URL to a PNG image that should be used as the proxy image when the 3D component is not active.
* __renderer__: the back-end renderer to use.  'webgl' is the default and can support AVZ, SCDOC and DSCO format geometry.  'three' selects a render that supports geometry in the GLB file format.  'envnc' is supported in conjunction with \ref websocketserver_cli local session configurations.  This property may only be   specified when the element is created.
* __renderer_options__: a read-only property specified as a json string containing renderer specific options. Options are generally specific to a given renderer. Details may be found here [Renderer Options](#renderer-options).
* __parts__: a read-only property that returns a list of the part names present in the instance.  This property will change when the __src__ changes and, depending on
the nature of the geometry source may change organically.
* __sceneNodeVisibilityMap__: A read property for "webgl" renderer, showing a map of all the available nodes in the current scene, their initial visibility and the latest visibility (1: show / 0: hide). The visibility would get changed via the view panel where users can check and uncheck the individual node's visibility.
* __lastClickedSceneNode__: A read property for "webgl" renderer, showing the latest node interacted by the users in the current scene. It provides a map of relevant information such as displayedValue (1:show / 0:hide), lastClickedID (The node's id), lastClickedName (The node name).


<a name="renderer-options"></a>

## Renderer options

Each renderer may support a collection of renderer specific options.  These generally
allow for the customization of the renderer behavior and display.   The supported
options are listed here.  Note that the element __renderer_options__ property is
a JSON format string.  In this documentation, the properties in the resulting object
are lists.  For example, a property named __foo__ would be specified to have the
value 'hello' as:  

```html
    <ansys-adr-viewer renderer_options='{"foo": "hello"}'> </ansys-adr-viewer>
```

Generally, renderers will ignore renderer_options they do not recognize and the
options cannot be changed once the element has been realized.

### "webgl" Specific options

There are a number of "webgl" features that can be disabled using __renderer_options__.  By
default (no __renderer_options__ specified) the following are enabled: __showFit__,
__showClip__, __showFull__.  If an empty __renderer_options__ is specified (renderer_options='{}'),
all the 'show' options will be enabled by default and one must specify which need to be
disabled by setting them to false.

Option | Description
---|---
__showFit__| Enable the "fit" geometry option
__showHighlight__| Enable the body, face, edge selection modes
__showClip__| Enable the clipping mode
__showExplode__| Enable the "explode" geometry optiont
__showViewport__| Allow multiple viewports to be used
__showFull__| Enable the "fullscreen" option
__showLogo__| Include the Ansys logo in the render window
__showAbout__| Enable the "about" dialog
__showOptions__| Allow GUI control remapping
__showMarkup__| Enable annotation editting
__showFileOpen__| Allow the user to select and read local files

Common collections of options might include.

The default interface:

```html
renderer_options='{"showLogo": false, "showFileOpen": false, 
                   "showHighlight": false, "showAbout": false, 
                   "showMarkup": false, "showOptions": false,
                   "showViewport": false, "showClip": true, 
                   "showExplode": false, "showFull": true, 
                   "showFit": true}'
```

Common interface options:

```html
renderer_options='{"showFileOpen": false, "showOptions": false,
                   "showLogo": false, "showAbout": false, 
                   "showMarkup": false, "showViewport": false, 
                   "showHighlight": false, "showClip": false, 
                   "showExplode": false, 
                   "showFull": true, "showFit": true}'
```
