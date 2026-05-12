# DetectAndTreatHolesParams

<a id="ansys.meshing.prime.DetectAndTreatHolesParams"></a>

### *class* ansys.meshing.prime.DetectAndTreatHolesParams(model=None, detect_and_defeature_edges_near_holes=None, detect_circular_holes=None, detect_non_circular_holes=None, offset_holes=None, mesh_offset_faces=None, detect_holes_params=None, detect_circular_holes_params=None, detect_non_circular_holes_params=None, hole_proximity_tolerance=None, merge_face_normals_angle=None, edge_sharp_corner_angle=None, fragmented_edge_tolerance=None, offset_distance=None, edge_mesh_constant_size=None, surface_mesh_constant_size=None, json_data=None, \*\*kwargs)

Parameters for detect and treat holes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DetectAndTreatHolesParams` object with default parameters.

  **detect_and_defeature_edges_near_holes: bool, optional**
  : Option to detect and defeature edges near all holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **detect_circular_holes: bool, optional**
  : Option to detect circular holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **detect_non_circular_holes: bool, optional**
  : Option to detect non-circular holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **offset_holes: bool, optional**
  : Option to offset holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **mesh_offset_faces: bool, optional**
  : Option to mesh the offset holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **detect_holes_params: DetectHolesParams, optional**
  : Parameters for detect holes operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **detect_circular_holes_params: DetectCircularHolesParams, optional**
  : Parameters for detect circular holes operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **detect_non_circular_holes_params: DetectNonCircularHolesParams, optional**
  : Parameters for detect non circular holes operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **hole_proximity_tolerance: float, optional**
  : Edge proximity tolerance for holes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_face_normals_angle: float, optional**
  : Merge faces when the normal angle between the faces is below the provided value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **edge_sharp_corner_angle: float, optional**
  : Merge edges when the angle between the edges are below the provided value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **fragmented_edge_tolerance: float, optional**
  : Fragmented edge length tolerance for merging edges.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **offset_distance: float, optional**
  : Offset distance for creating offset edge.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **edge_mesh_constant_size: float, optional**
  : Constant size used for edge meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **surface_mesh_constant_size: float, optional**
  : Constant size used for surface meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DetectAndTreatHolesParams` object with provided parameters.

### Examples

```pycon
>>> detect_and_treat_holes_params = prime.DetectAndTreatHolesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`DetectAndTreatHolesParams.print_default`](ansys.meshing.prime.DetectAndTreatHolesParams.print_default.md#ansys.meshing.prime.DetectAndTreatHolesParams.print_default)()   | Print the default values of `DetectAndTreatHolesParams` object.   |
| [`DetectAndTreatHolesParams.set_default`](ansys.meshing.prime.DetectAndTreatHolesParams.set_default.md#ansys.meshing.prime.DetectAndTreatHolesParams.set_default)([...])    | Set the default values of the `DetectAndTreatHolesParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`DetectAndTreatHolesParams.detect_and_defeature_edges_near_holes`](ansys.meshing.prime.DetectAndTreatHolesParams.detect_and_defeature_edges_near_holes.md#ansys.meshing.prime.DetectAndTreatHolesParams.detect_and_defeature_edges_near_holes)   | Option to detect and defeature edges near all holes.                             |
| [`DetectAndTreatHolesParams.detect_circular_holes`](ansys.meshing.prime.DetectAndTreatHolesParams.detect_circular_holes.md#ansys.meshing.prime.DetectAndTreatHolesParams.detect_circular_holes)                                                   | Option to detect circular holes.                                                 |
| [`DetectAndTreatHolesParams.detect_circular_holes_params`](ansys.meshing.prime.DetectAndTreatHolesParams.detect_circular_holes_params.md#ansys.meshing.prime.DetectAndTreatHolesParams.detect_circular_holes_params)                              | Parameters for detect circular holes operation.                                  |
| [`DetectAndTreatHolesParams.detect_holes_params`](ansys.meshing.prime.DetectAndTreatHolesParams.detect_holes_params.md#ansys.meshing.prime.DetectAndTreatHolesParams.detect_holes_params)                                                         | Parameters for detect holes operation.                                           |
| [`DetectAndTreatHolesParams.detect_non_circular_holes`](ansys.meshing.prime.DetectAndTreatHolesParams.detect_non_circular_holes.md#ansys.meshing.prime.DetectAndTreatHolesParams.detect_non_circular_holes)                                       | Option to detect non-circular holes.                                             |
| [`DetectAndTreatHolesParams.detect_non_circular_holes_params`](ansys.meshing.prime.DetectAndTreatHolesParams.detect_non_circular_holes_params.md#ansys.meshing.prime.DetectAndTreatHolesParams.detect_non_circular_holes_params)                  | Parameters for detect non circular holes operation.                              |
| [`DetectAndTreatHolesParams.edge_mesh_constant_size`](ansys.meshing.prime.DetectAndTreatHolesParams.edge_mesh_constant_size.md#ansys.meshing.prime.DetectAndTreatHolesParams.edge_mesh_constant_size)                                             | Constant size used for edge meshing.                                             |
| [`DetectAndTreatHolesParams.edge_sharp_corner_angle`](ansys.meshing.prime.DetectAndTreatHolesParams.edge_sharp_corner_angle.md#ansys.meshing.prime.DetectAndTreatHolesParams.edge_sharp_corner_angle)                                             | Merge edges when the angle between the edges are below the provided value.       |
| [`DetectAndTreatHolesParams.fragmented_edge_tolerance`](ansys.meshing.prime.DetectAndTreatHolesParams.fragmented_edge_tolerance.md#ansys.meshing.prime.DetectAndTreatHolesParams.fragmented_edge_tolerance)                                       | Fragmented edge length tolerance for merging edges.                              |
| [`DetectAndTreatHolesParams.hole_proximity_tolerance`](ansys.meshing.prime.DetectAndTreatHolesParams.hole_proximity_tolerance.md#ansys.meshing.prime.DetectAndTreatHolesParams.hole_proximity_tolerance)                                          | Edge proximity tolerance for holes.                                              |
| [`DetectAndTreatHolesParams.merge_face_normals_angle`](ansys.meshing.prime.DetectAndTreatHolesParams.merge_face_normals_angle.md#ansys.meshing.prime.DetectAndTreatHolesParams.merge_face_normals_angle)                                          | Merge faces when the normal angle between the faces is below the provided value. |
| [`DetectAndTreatHolesParams.mesh_offset_faces`](ansys.meshing.prime.DetectAndTreatHolesParams.mesh_offset_faces.md#ansys.meshing.prime.DetectAndTreatHolesParams.mesh_offset_faces)                                                               | Option to mesh the offset holes.                                                 |
| [`DetectAndTreatHolesParams.offset_distance`](ansys.meshing.prime.DetectAndTreatHolesParams.offset_distance.md#ansys.meshing.prime.DetectAndTreatHolesParams.offset_distance)                                                                     | Offset distance for creating offset edge.                                        |
| [`DetectAndTreatHolesParams.offset_holes`](ansys.meshing.prime.DetectAndTreatHolesParams.offset_holes.md#ansys.meshing.prime.DetectAndTreatHolesParams.offset_holes)                                                                              | Option to offset holes.                                                          |
| [`DetectAndTreatHolesParams.surface_mesh_constant_size`](ansys.meshing.prime.DetectAndTreatHolesParams.surface_mesh_constant_size.md#ansys.meshing.prime.DetectAndTreatHolesParams.surface_mesh_constant_size)                                    | Constant size used for surface meshing.                                          |
<!-- vale on -->