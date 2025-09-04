# DetectNonCircularHolesParams

<a id="ansys.meshing.prime.DetectNonCircularHolesParams"></a>

### *class* ansys.meshing.prime.DetectNonCircularHolesParams(model=None, allow_curved_topo_faces=None, max_hole_length=None, min_hole_length=None, merge_edge_allow_self_close=None, json_data=None, \*\*kwargs)

Parameters for detect non circular holes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DetectNonCircularHolesParams` object with default parameters.

  **allow_curved_topo_faces: bool, optional**
  : Option to allow holes in curved topoface.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **max_hole_length: float, optional**
  : Maximum length of holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **min_hole_length: float, optional**
  : Minimum length of holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_edge_allow_self_close: bool, optional**
  : Option for merging self-closing edge loops.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DetectNonCircularHolesParams` object with provided parameters.

### Examples

```pycon
>>> detect_non_circular_holes_params = prime.DetectNonCircularHolesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`DetectNonCircularHolesParams.print_default`](ansys.meshing.prime.DetectNonCircularHolesParams.print_default.md#ansys.meshing.prime.DetectNonCircularHolesParams.print_default)()   | Print the default values of `DetectNonCircularHolesParams` object.   |
| [`DetectNonCircularHolesParams.set_default`](ansys.meshing.prime.DetectNonCircularHolesParams.set_default.md#ansys.meshing.prime.DetectNonCircularHolesParams.set_default)([...])    | Set the default values of the `DetectNonCircularHolesParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`DetectNonCircularHolesParams.allow_curved_topo_faces`](ansys.meshing.prime.DetectNonCircularHolesParams.allow_curved_topo_faces.md#ansys.meshing.prime.DetectNonCircularHolesParams.allow_curved_topo_faces)             | Option to allow holes in curved topoface.   |
| [`DetectNonCircularHolesParams.max_hole_length`](ansys.meshing.prime.DetectNonCircularHolesParams.max_hole_length.md#ansys.meshing.prime.DetectNonCircularHolesParams.max_hole_length)                                     | Maximum length of holes.                    |
| [`DetectNonCircularHolesParams.merge_edge_allow_self_close`](ansys.meshing.prime.DetectNonCircularHolesParams.merge_edge_allow_self_close.md#ansys.meshing.prime.DetectNonCircularHolesParams.merge_edge_allow_self_close) | Option for merging self-closing edge loops. |
| [`DetectNonCircularHolesParams.min_hole_length`](ansys.meshing.prime.DetectNonCircularHolesParams.min_hole_length.md#ansys.meshing.prime.DetectNonCircularHolesParams.min_hole_length)                                     | Minimum length of holes.                    |
<!-- vale on -->