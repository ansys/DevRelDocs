# DeleteInteriorNodesParams

<a id="ansys.meshing.prime.DeleteInteriorNodesParams"></a>

### *class* ansys.meshing.prime.DeleteInteriorNodesParams(model=None, merge_face_normals_angle=None, merge_edge_allow_self_close=None, edge_sharp_corner_angle=None, json_data=None, \*\*kwargs)

Parameters for delete interior nodes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteInteriorNodesParams` object with default parameters.

  **merge_face_normals_angle: float, optional**
  : Merge faces when the normal angle between the faces is below the provided value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_edge_allow_self_close: bool, optional**
  : Option for merging self-closing edge loops.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **edge_sharp_corner_angle: float, optional**
  : Merge edges when the angle between the edges are below the provided value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteInteriorNodesParams` object with provided parameters.

### Examples

```pycon
>>> delete_interior_nodes_params = prime.DeleteInteriorNodesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`DeleteInteriorNodesParams.print_default`](ansys.meshing.prime.DeleteInteriorNodesParams.print_default.md#ansys.meshing.prime.DeleteInteriorNodesParams.print_default)()   | Print the default values of `DeleteInteriorNodesParams` object.   |
| [`DeleteInteriorNodesParams.set_default`](ansys.meshing.prime.DeleteInteriorNodesParams.set_default.md#ansys.meshing.prime.DeleteInteriorNodesParams.set_default)([...])    | Set the default values of the `DeleteInteriorNodesParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`DeleteInteriorNodesParams.edge_sharp_corner_angle`](ansys.meshing.prime.DeleteInteriorNodesParams.edge_sharp_corner_angle.md#ansys.meshing.prime.DeleteInteriorNodesParams.edge_sharp_corner_angle)             | Merge edges when the angle between the edges are below the provided value.       |
| [`DeleteInteriorNodesParams.merge_edge_allow_self_close`](ansys.meshing.prime.DeleteInteriorNodesParams.merge_edge_allow_self_close.md#ansys.meshing.prime.DeleteInteriorNodesParams.merge_edge_allow_self_close) | Option for merging self-closing edge loops.                                      |
| [`DeleteInteriorNodesParams.merge_face_normals_angle`](ansys.meshing.prime.DeleteInteriorNodesParams.merge_face_normals_angle.md#ansys.meshing.prime.DeleteInteriorNodesParams.merge_face_normals_angle)          | Merge faces when the normal angle between the faces is below the provided value. |
<!-- vale on -->