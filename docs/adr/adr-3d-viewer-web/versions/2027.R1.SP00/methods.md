# Methods

The `<ansys-adr-viewer>` element provides the following public methods. Obtain the element
from the DOM before calling them:

```html
<script>
  const viewer = document.getElementById("Viewer");
  const image = viewer.renderImage();
  if (image) document.getElementById("img_target").src = image;
</script>
```

## Method details

### `renderImage()`

Returns a snapshot of the current rendered view.

**Parameters:** None.

**Returns:** `string | null`. When the viewer is active and its renderer is ready, the
string is a PNG data URL. Returns `null` when the viewer is inactive or the renderer is not
ready. Calling this method does not activate the viewer.

**Constraints:** The browser must support canvas image export. The rendered scene must not
contain cross-origin resources that make the canvas origin-unclean.

**Errors:** This method performs no explicit validation. Browser or renderer errors, including
a `SecurityError` from an origin-unclean canvas, propagate to the caller.

### `setAttributes(target, name, values)`

Changes one or more attributes of matching parts.

**Parameters:**

| Parameter | Type | Required | Constraints |
| --- | --- | --- | --- |
| `target` | `string` | Yes | Must be `"part"`; no other target type is supported. |
| `name` | `string` or `RegExp` | Yes | An exact `parts` name or an expression matching one or more names. |
| `values` | `object` | Yes | May contain `visible`, `color`, and `edge_color`. Unknown keys are ignored. |

The `values` members have these contracts:

| Member | Type | Constraints |
| --- | --- | --- |
| `visible` | `boolean` | `true` shows the part; `false` hides it. |
| `color` | `number` | A 32-bit `0xAARRGGBB` integer specifying alpha, red, green, and blue. |
| `edge_color` | `number` | A 32-bit `0xAARRGGBB` integer specifying the edge color. |

**Returns:** `undefined`.

**Constraints:** This method is supported only for SCDOC content rendered by the `webgl`
renderer.

**Errors:** An inactive viewer, an unsupported renderer or content type, or a name that matches
no parts results in no change. The method does not report these conditions. JavaScript errors
caused by an invalid regular expression or a non-object `values` argument propagate to the caller.

### `getAttributes(target, name)`

Returns the current attributes of one part.

**Parameters:**

| Parameter | Type | Required | Constraints |
| --- | --- | --- | --- |
| `target` | `string` | Yes | Must be `"part"`; no other target type is supported. |
| `name` | `string` | Yes | An exact `parts` name; regular expressions are not supported. |

**Returns:** `{ visible: boolean, color: number, edge_color: number } | null`. Color values
are 32-bit `0xAARRGGBB` integers. Returns `null` when the viewer is inactive, the renderer is
not ready, the content type is unsupported, or the named part does not exist.

**Constraints:** This method is supported only for SCDOC content rendered by the `webgl`
renderer.

**Errors:** This method performs no explicit validation. Unexpected renderer errors propagate
to the caller.

```html
<script>
  const viewer = document.getElementById("Viewer");
  const parts = viewer.parts;
  console.log(viewer.getAttributes("part", parts[0]));
  // Change to transparent blue with solid black edges
  viewer.setAttributes("part", parts[0], {
    color: 0x80000066,
    edge_color: 0xff000000,
    visible: true,
  });
</script>
```


