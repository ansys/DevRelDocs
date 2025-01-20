# DetectHolesParams

<a id="ansys.meshing.prime.DetectHolesParams"></a>

### *class* ansys.meshing.prime.DetectHolesParams(model=None, max_radius_circular_holes=None, min_radius_circular_holes=None, max_hole_length=None, min_hole_length=None, allow_curved_topo_faces=None, json_data=None, \*\*kwargs)

Parameters for detect holes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DetectHolesParams` object with default parameters.

  **max_radius_circular_holes: float, optional**
  : Maximum radius of circular holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **min_radius_circular_holes: float, optional**
  : Minimum radius of circular holes.
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

  **allow_curved_topo_faces: bool, optional**
  : Option to allow holes in curved topoface.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DetectHolesParams` object with provided parameters.

### Examples

```pycon
>>> detect_holes_params = prime.DetectHolesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`DetectHolesParams.print_default`](ansys.meshing.prime.DetectHolesParams.print_default.md#ansys.meshing.prime.DetectHolesParams.print_default)()   | Print the default values of `DetectHolesParams` object.   |
| [`DetectHolesParams.set_default`](ansys.meshing.prime.DetectHolesParams.set_default.md#ansys.meshing.prime.DetectHolesParams.set_default)([...])    | Set the default values of the `DetectHolesParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`DetectHolesParams.allow_curved_topo_faces`](ansys.meshing.prime.DetectHolesParams.allow_curved_topo_faces.md#ansys.meshing.prime.DetectHolesParams.allow_curved_topo_faces)       | Option to allow holes in curved topoface.   |
| [`DetectHolesParams.max_hole_length`](ansys.meshing.prime.DetectHolesParams.max_hole_length.md#ansys.meshing.prime.DetectHolesParams.max_hole_length)                               | Maximum length of holes.                    |
| [`DetectHolesParams.max_radius_circular_holes`](ansys.meshing.prime.DetectHolesParams.max_radius_circular_holes.md#ansys.meshing.prime.DetectHolesParams.max_radius_circular_holes) | Maximum radius of circular holes.           |
| [`DetectHolesParams.min_hole_length`](ansys.meshing.prime.DetectHolesParams.min_hole_length.md#ansys.meshing.prime.DetectHolesParams.min_hole_length)                               | Minimum length of holes.                    |
| [`DetectHolesParams.min_radius_circular_holes`](ansys.meshing.prime.DetectHolesParams.min_radius_circular_holes.md#ansys.meshing.prime.DetectHolesParams.min_radius_circular_holes) | Minimum radius of circular holes.           |
<!-- vale on -->