# PartialDefeatureParams

<a id="ansys.meshing.prime.PartialDefeatureParams"></a>

### *class* ansys.meshing.prime.PartialDefeatureParams(model=None, edge_sharp_corner_angle=None, merge_face_normals_angle=None, merge_edge_allow_self_close=None, json_data=None, \*\*kwargs)

Parameters for partial defeature operation.

* **Parameters:**

  **model: Model**
  : Model to create a `PartialDefeatureParams` object with default parameters.

  **edge_sharp_corner_angle: float, optional**
  : Merge edges when the angle between the edges are below the provided value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_face_normals_angle: float, optional**
  : Merge faces when the normal angle between the faces is below the provided value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_edge_allow_self_close: bool, optional**
  : Option for merging self-closing edge loops.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `PartialDefeatureParams` object with provided parameters.

### Examples

```pycon
>>> partial_defeature_params = prime.PartialDefeatureParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`PartialDefeatureParams.print_default`](ansys.meshing.prime.PartialDefeatureParams.print_default.md#ansys.meshing.prime.PartialDefeatureParams.print_default)()   | Print the default values of `PartialDefeatureParams` object.   |
| [`PartialDefeatureParams.set_default`](ansys.meshing.prime.PartialDefeatureParams.set_default.md#ansys.meshing.prime.PartialDefeatureParams.set_default)([...])    | Set the default values of the `PartialDefeatureParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`PartialDefeatureParams.edge_sharp_corner_angle`](ansys.meshing.prime.PartialDefeatureParams.edge_sharp_corner_angle.md#ansys.meshing.prime.PartialDefeatureParams.edge_sharp_corner_angle)             | Merge edges when the angle between the edges are below the provided value.       |
| [`PartialDefeatureParams.merge_edge_allow_self_close`](ansys.meshing.prime.PartialDefeatureParams.merge_edge_allow_self_close.md#ansys.meshing.prime.PartialDefeatureParams.merge_edge_allow_self_close) | Option for merging self-closing edge loops.                                      |
| [`PartialDefeatureParams.merge_face_normals_angle`](ansys.meshing.prime.PartialDefeatureParams.merge_face_normals_angle.md#ansys.meshing.prime.PartialDefeatureParams.merge_face_normals_angle)          | Merge faces when the normal angle between the faces is below the provided value. |
<!-- vale on -->