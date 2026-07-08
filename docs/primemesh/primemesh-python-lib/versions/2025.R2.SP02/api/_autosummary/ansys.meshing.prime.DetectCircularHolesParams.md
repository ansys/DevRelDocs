# DetectCircularHolesParams

<a id="ansys.meshing.prime.DetectCircularHolesParams"></a>

### *class* ansys.meshing.prime.DetectCircularHolesParams(model=None, allow_curved_topo_faces=None, max_radius_circular_holes=None, min_radius_circular_holes=None, merge_edge_allow_self_close=None, json_data=None, \*\*kwargs)

Parameters for detect circular holes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DetectCircularHolesParams` object with default parameters.

  **allow_curved_topo_faces: bool, optional**
  : Option to allow holes in curved topoface.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **max_radius_circular_holes: float, optional**
  : Maximum radius of circular holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **min_radius_circular_holes: float, optional**
  : Minimum radius of circular holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_edge_allow_self_close: bool, optional**
  : Option for merging self-closing edge loops.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DetectCircularHolesParams` object with provided parameters.

### Examples

```pycon
>>> detect_circular_holes_params = prime.DetectCircularHolesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`DetectCircularHolesParams.print_default`](ansys.meshing.prime.DetectCircularHolesParams.print_default.md#ansys.meshing.prime.DetectCircularHolesParams.print_default)()   | Print the default values of `DetectCircularHolesParams` object.   |
| [`DetectCircularHolesParams.set_default`](ansys.meshing.prime.DetectCircularHolesParams.set_default.md#ansys.meshing.prime.DetectCircularHolesParams.set_default)([...])    | Set the default values of the `DetectCircularHolesParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`DetectCircularHolesParams.allow_curved_topo_faces`](ansys.meshing.prime.DetectCircularHolesParams.allow_curved_topo_faces.md#ansys.meshing.prime.DetectCircularHolesParams.allow_curved_topo_faces)             | Option to allow holes in curved topoface.   |
| [`DetectCircularHolesParams.max_radius_circular_holes`](ansys.meshing.prime.DetectCircularHolesParams.max_radius_circular_holes.md#ansys.meshing.prime.DetectCircularHolesParams.max_radius_circular_holes)       | Maximum radius of circular holes.           |
| [`DetectCircularHolesParams.merge_edge_allow_self_close`](ansys.meshing.prime.DetectCircularHolesParams.merge_edge_allow_self_close.md#ansys.meshing.prime.DetectCircularHolesParams.merge_edge_allow_self_close) | Option for merging self-closing edge loops. |
| [`DetectCircularHolesParams.min_radius_circular_holes`](ansys.meshing.prime.DetectCircularHolesParams.min_radius_circular_holes.md#ansys.meshing.prime.DetectCircularHolesParams.min_radius_circular_holes)       | Minimum radius of circular holes.           |
<!-- vale on -->