# Properties

The `<ansys-adr-viewer>` element supports the following public properties. HTML attribute
names are shown when they differ from the JavaScript property name.

### `active`

- **Type:** `boolean`
- **Default:** When the `active` HTML attribute is omitted, the viewer starts active only if
  `src` is set and `proxy_img` is not set. Otherwise, it starts inactive.
- **Access:** Read/write. Set the JavaScript property or the `active` HTML attribute.
- **Constraints:** At most four viewer instances can be active on one page. Activating another
  instance deactivates the least recently used active instance.
- **Behavior:** An inactive viewer displays its proxy image. If no proxy image was specified,
  it displays the built-in launch image.
- **Errors:** No explicit validation errors are reported. Values assigned through the HTML
  attribute are true only when the value is the string `"true"`.

### `aspect_ratio`

- **Type:** `number | "proxy" | null`
- **Default:** `null`, which leaves sizing to external styles.
- **Access:** Read/write. The corresponding HTML attribute is `aspect_ratio`.
- **Constraints:** Use a positive aspect ratio, or `"proxy"` to use the loaded proxy image's
  aspect ratio. The viewer height is its current width divided by this value.
- **Errors:** No explicit validation errors are reported. Zero, negative, or nonnumeric values
  can produce invalid layout dimensions.

### `guid`

- **Type:** `string`
- **Default:** A generated decimal identifier that is unique among viewer instances on the
  current page; it is not a globally unique identifier.
- **Access:** Read-only after initialization. A custom value can be supplied with the `guid`
  HTML attribute when the element is created.
- **Constraints:** Values must be unique on the page because the viewer uses the value to build
  DOM element identifiers.
- **Errors:** Duplicate or invalid values are not explicitly rejected and can cause DOM ID
  collisions.

### `src`

- **Type:** `string | null`
- **Default:** `null` when no source is supplied.
- **Access:** Read/write. Set the JavaScript property or the `src` HTML attribute.
- **Constraints:** The `webgl` renderer supports `.avz`, `.dsco`, `.scdoc`, and `.scdocx`; the
  `three` renderer supports `.glb` and `.obj`; the `envnc` renderer supports `.evsn`. Setting a
  source with a recognized filename extension selects the corresponding renderer dynamically.
  Use `src_ext` when a data URI or extensionless URL does not expose the format.
- **Errors:** Falsy values and the strings `"null"` and `"undefined"` clear the source. Invalid
  URLs and resource-loading or parsing failures are reported by the browser or selected renderer.

### `src_ext`

- **Type:** `string | null`
- **Default:** `null`; the viewer infers the format from `src` when possible.
- **Access:** Read/write. Set the JavaScript property or the `src_ext` HTML attribute.
- **Constraints:** Specify the source's filename extension without a leading period, for example
  `"avz"`. The value must identify a format supported by the selected renderer and should be set
  before `src` when the source is a data URI.
- **Errors:** Unsupported values are not explicitly rejected; the renderer can fail to load the
  source.

### `proxy_img`

- **Type:** `string | null`
- **Default:** `null`, which uses the built-in launch image while the viewer is inactive.
- **Access:** Read/write. The corresponding HTML attribute is `proxy_img`.
- **Constraints:** The value must be a browser-loadable image URL. PNG is the supported proxy
  image format.
- **Errors:** Image-loading failures are handled by the browser; the property setter does not
  throw an explicit error.

### `renderer`

- **Type:** `"webgl" | "three" | "envnc"`
- **Default:** `"webgl"`
- **Access:** Read-only after initialization. Set the `renderer` HTML attribute when creating the
  element.
- **Constraints:** Use `"webgl"` for AVZ, SCDOC, SCDOCX, or DSCO content; `"three"` for GLB or
  OBJ content; or `"envnc"` for EVSN local-session content.
- **Errors:** Unsupported values are not explicitly rejected and can leave the viewer without a
  rendering backend.

### `renderer_options`

- **Type:** `string | null`
- **Default:** `null`, which uses the renderer defaults described in
  [Renderer options](#renderer-options).
- **Access:** Read-only after initialization. Set the `renderer_options` HTML attribute when
  creating the element.
- **Constraints:** The value must be a valid JSON object encoded as a string. Options are
  renderer-specific, and unrecognized options are ignored.
- **Errors:** Invalid JSON raises a `SyntaxError` when the `webgl` renderer is activated.

### `parts`

- **Type:** `string[] | null`
- **Default:** `[]` while the viewer is inactive or its renderer is not ready.
- **Access:** Read-only.
- **Constraints:** Part names depend on the loaded source and can change when `src` changes. A
  `webgl` renderer can temporarily return `null` before its scene is available.
- **Errors:** Scene-loading failures can leave this property empty; no explicit error is thrown by
  the property getter.

### `_sceneNodeVisibilityMap`

- **Type:** `Record<string, SceneNodeVisibility>`
- **Default:** `{}`
- **Access:** Read-only by contract. Do not replace or mutate this object.
- **Constraints:** Available only with the `webgl` renderer. Keys are scene-node IDs. The map is
  populated as scene nodes load. Each `SceneNodeVisibility` value contains `partName` (`string`),
  `initVisibility` (`boolean | 0 | 1`), `currentVisibility` (`0 | 1`), and `sceneNodeItem`
  (`object`). The `currentVisibility` value changes in response to the viewer panel.
- **Errors:** No explicit errors are reported. The map remains empty when no compatible scene is
  loaded.

### `_lastClickedSceneNode`

- **Type:** `{ displayedValue: 0 | 1, lastClickedID: string | undefined, lastClickedName: string } | {}`
- **Default:** `{}`
- **Access:** Read-only by contract. Do not replace or mutate this object.
- **Constraints:** Available only with the `webgl` renderer. It is populated after a user changes
  a named scene node in the viewer panel. `lastClickedID` can be `undefined` if no matching node ID
  is found.
- **Errors:** No explicit errors are reported. The object remains empty until a compatible node is
  selected.


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
