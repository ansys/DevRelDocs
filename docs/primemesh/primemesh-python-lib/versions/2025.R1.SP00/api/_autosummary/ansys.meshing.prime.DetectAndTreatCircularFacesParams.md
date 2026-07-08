# DetectAndTreatCircularFacesParams

<a id="ansys.meshing.prime.DetectAndTreatCircularFacesParams"></a>

### *class* ansys.meshing.prime.DetectAndTreatCircularFacesParams(model=None, edge_mesh_constant_size=None, surface_mesh_constant_size=None, merge_edge_allow_self_close=None, merge_face_normals_angle=None, json_data=None, \*\*kwargs)

Parameters for detect and treat circular faces operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DetectAndTreatCircularFacesParams` object with default parameters.

  **edge_mesh_constant_size: float, optional**
  : Constant size used for edge meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **surface_mesh_constant_size: float, optional**
  : Constant size used for surface meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_edge_allow_self_close: bool, optional**
  : Option for merging self-closing edge loops.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_face_normals_angle: float, optional**
  : Merge faces when the normal angle between the faces is below the provided value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DetectAndTreatCircularFacesParams` object with provided parameters.

### Examples

```pycon
>>> detect_and_treat_circular_faces_params = prime.DetectAndTreatCircularFacesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`DetectAndTreatCircularFacesParams.print_default`](ansys.meshing.prime.DetectAndTreatCircularFacesParams.print_default.md#ansys.meshing.prime.DetectAndTreatCircularFacesParams.print_default)()   | Print the default values of `DetectAndTreatCircularFacesParams` object.   |
| [`DetectAndTreatCircularFacesParams.set_default`](ansys.meshing.prime.DetectAndTreatCircularFacesParams.set_default.md#ansys.meshing.prime.DetectAndTreatCircularFacesParams.set_default)([...])    | Set the default values of the `DetectAndTreatCircularFacesParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`DetectAndTreatCircularFacesParams.edge_mesh_constant_size`](ansys.meshing.prime.DetectAndTreatCircularFacesParams.edge_mesh_constant_size.md#ansys.meshing.prime.DetectAndTreatCircularFacesParams.edge_mesh_constant_size)             | Constant size used for edge meshing.                                             |
| [`DetectAndTreatCircularFacesParams.merge_edge_allow_self_close`](ansys.meshing.prime.DetectAndTreatCircularFacesParams.merge_edge_allow_self_close.md#ansys.meshing.prime.DetectAndTreatCircularFacesParams.merge_edge_allow_self_close) | Option for merging self-closing edge loops.                                      |
| [`DetectAndTreatCircularFacesParams.merge_face_normals_angle`](ansys.meshing.prime.DetectAndTreatCircularFacesParams.merge_face_normals_angle.md#ansys.meshing.prime.DetectAndTreatCircularFacesParams.merge_face_normals_angle)          | Merge faces when the normal angle between the faces is below the provided value. |
| [`DetectAndTreatCircularFacesParams.surface_mesh_constant_size`](ansys.meshing.prime.DetectAndTreatCircularFacesParams.surface_mesh_constant_size.md#ansys.meshing.prime.DetectAndTreatCircularFacesParams.surface_mesh_constant_size)    | Constant size used for surface meshing.                                          |
<!-- vale on -->