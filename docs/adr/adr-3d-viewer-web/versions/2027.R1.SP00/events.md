# Events

The `<ansys-adr-viewer>` element reports state and interaction changes through bubbling
JavaScript `CustomEvent` objects. Attach listeners to the viewer element or one of its ancestors.
Payload fields are available through `event.detail`.

The field names in this document match the runtime payloads. In particular,
`proxy-img-changed` emits `proxy_img`, not `proxy_image`, and
`part-attributes-changed` emits `attributes`, not `changed`. These older names are not aliases
and are not present in `event.detail`.

```html
<script>
  const viewer = document.getElementById("Viewer");
  viewer.addEventListener("parts-changed", () => {
    const partNames = viewer.parts;
    // Handle the updated part list.
  });
</script>
```

## Event details

### `active-changed`

Emitted when the viewer becomes active or inactive. Available for all renderers.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the viewer is active. | `true` when activated; `false` when deactivated. |

### `src-changed`

Emitted after the viewer source changes without requiring a renderer replacement. Available for
all renderers.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `src` | `string` | Yes | Current source URL or data URI. | An empty string means that the source was cleared. |
| `ext` | `string` or `null` | Yes | Filename extension identifying the current source format. | No leading period; inferred values are `"AVZ"`, `"SCDOC"`, `"GLB"`, or `"OBJ"`; `null` means unknown. |

### `parts-changed`

Emitted when the loaded part list changes or an active viewer is deactivated. Available for the
`webgl` and `three` renderers.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| None | N/A | N/A | `event.detail` is an empty object. Read the updated list from `viewer.parts`. | N/A |

### `proxy-img-changed`

Emitted when the proxy image changes. Available for all renderers.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `proxy_img` | `string` or `null` | Yes | Current proxy image URL. | `null` means no custom image. The payload does not contain `proxy_image`. |

### `aspect-ratio-changed`

Emitted when the `aspect_ratio` property changes. Available for all renderers.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `aspect_ratio` | `number`, `"proxy"`, or `null` | Yes | Current aspect-ratio setting. | Positive number; `"proxy"` uses the proxy ratio; `null` delegates to CSS. |

### `perspective-changed`

Emitted when the camera projection mode changes. Available for all renderers.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `perspective` | `boolean` | Yes | Whether perspective projection is enabled. | `false` selects orthographic projection. |

### `part-attributes-changed`

Emitted when `setAttributes()` changes one or more SCDOC part attributes. Available for SCDOC
content rendered by the `webgl` renderer.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `parts` | `string[]` | Yes | Names of parts matched by the update. | Contains names from `viewer.parts`. |
| `attributes` | `string[]` | Yes | Names of attributes whose values changed. | Values are `"visible"`, `"color"`, or `"edge_color"`; duplicates are possible. The payload does not contain `changed`. |

The event is not emitted when no supported attribute value changes.

### `gltfviewer-spaceclaim-showhover`

Emitted when the SCDOC hover tooltip changes. Available for SCDOC content rendered by the
`webgl` renderer.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `tip` | `string` | Yes | Tooltip text for the hovered entity. | An empty string clears the tooltip. |

### `gltfviewer-spaceclaim-showfacepoint`

Emitted when a point is picked from SCDOC geometry. Available for SCDOC content rendered by the
`webgl` renderer while picking is enabled.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `x` | `number` | Yes | X coordinate of the picked point. | Source-model coordinate system and source-model length units. |
| `y` | `number` | Yes | Y coordinate of the picked point. | Source-model coordinate system and source-model length units. |
| `z` | `number` | Yes | Z coordinate of the picked point. | Source-model coordinate system and source-model length units. |

### `gltfviewer-spaceclaim-pick`

Emitted when the SCDOC selection changes. Available for SCDOC content rendered by the `webgl`
renderer while picking is enabled.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `name` | `string` | Yes | Leaf name of the selected entity. | Empty when `type` is `"SELECTION_NONE"`. |
| `path` | `string` | Yes | Complete colon-delimited path to the selected entity. | Empty when `type` is `"SELECTION_NONE"`. |
| `type` | `string` | Yes | Kind of selection. | One of `"SELECTION_NONE"`, `"SELECTION_EDGE"`, `"SELECTION_FACE"`, or `"SELECTION_BODY"`. |
| `bounds` | `PickBounds` | Conditional | Bounding box of the selection. | Required for edge, face, and body; absent for `SELECTION_NONE`. |
| `bounds.min` | `number[3]` | Conditional | Minimum X, Y, and Z coordinates. | Required with `bounds`; source-model coordinates and length units. |
| `bounds.max` | `number[3]` | Conditional | Maximum X, Y, and Z coordinates. | Required with `bounds`; source-model coordinates and length units. |
| `vertices` | `Float32Array[3][]` | Conditional | Points belonging to the selected entity. | Required for edge and face; empty for body; absent for `SELECTION_NONE`. |

`min` and `max` are fields of `bounds`; they are not top-level payload fields. Each `vertices`
element contains exactly three values in X, Y, Z order. All `min`, `max`, and `vertices` values
use the source-model coordinate system and source-model length units.

### `gltfviewer-data-probe`

Emitted while the pointer moves over probeable data. Available for the `webgl` renderer when
linked-view synchronization is enabled.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `emitEle` | `GLTFViewer.Utils.Scene` | Yes | Internal scene object that emitted the event. | Renderer-owned; treat as opaque and do not mutate it. |
| `guid` | `string` | Yes | Identifier of the source viewer. | Matches the source viewer's `guid` property. |
| `xy` | `ProbePosition` | Yes | Pointer location within the source canvas. | Contains required `t`, `x`, and `y` fields. |
| `syncCursorRay` | `GLTFViewer.Utils.CursorRay` | Yes | Cursor ray used to synchronize probing. | Pass unchanged; its structure is renderer-internal. |
| `width` | `number` | Yes | Width of the source canvas. | CSS pixels; greater than zero while rendered. |
| `height` | `number` | Yes | Height of the source canvas. | CSS pixels; greater than zero while rendered. |

The `xy` object has the following schema:

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `t` | `DOMHighResTimeStamp` | Yes | Timestamp copied from the pointer event. | Uses the browser event timestamp time base. |
| `x` | `number` | Yes | Horizontal pointer offset from the canvas's left edge. | Measured in CSS pixels. |
| `y` | `number` | Yes | Vertical pointer offset from the canvas's top edge. | Measured in CSS pixels. |

### `gltfviewer-view-change`

Emitted when the camera projection changes. Available for the `webgl` renderer when linked-view
synchronization is enabled.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `proj` | `GLTFViewer.Utils.Transformation` | Yes | Camera projection transform. | Pass unchanged to a compatible viewer; its structure is renderer-internal. |
| `animateSwitch` | `boolean` | Yes | Whether the projection change is animated. | Synchronized consumers normally process only `false`. |
| `guid` | `string` | Yes | Identifier of the source viewer. | Matches the source viewer's `guid` property. |

### `gltfviewer-activated-sync`

Emitted when pointer interaction starts or stops for a linked viewer. Available for the `webgl`
renderer when linked-view synchronization is enabled.

| Field | Type | Required | Description | Constraints |
| --- | --- | --- | --- | --- |
| `activated` | `boolean` | Yes | Whether pointer interaction is active. | `true` on entry; `false` after interaction ends outside the viewer. |
| `guid` | `string` | Yes | Identifier of the source viewer. | Matches the source viewer's `guid` property. |