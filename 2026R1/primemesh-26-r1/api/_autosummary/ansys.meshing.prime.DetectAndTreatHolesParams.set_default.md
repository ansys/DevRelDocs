# set_default

<a id="ansys.meshing.prime.DetectAndTreatHolesParams.set_default"></a>

#### *static* DetectAndTreatHolesParams.set_default(detect_and_defeature_edges_near_holes=None, detect_circular_holes=None, detect_non_circular_holes=None, offset_holes=None, mesh_offset_faces=None, detect_holes_params=None, detect_circular_holes_params=None, detect_non_circular_holes_params=None, hole_proximity_tolerance=None, merge_face_normals_angle=None, edge_sharp_corner_angle=None, fragmented_edge_tolerance=None, offset_distance=None, edge_mesh_constant_size=None, surface_mesh_constant_size=None)

Set the default values of the `DetectAndTreatHolesParams` object.

* **Parameters:**

  **detect_and_defeature_edges_near_holes: bool, optional**
  : Option to detect and defeature edges near all holes.

  **detect_circular_holes: bool, optional**
  : Option to detect circular holes.

  **detect_non_circular_holes: bool, optional**
  : Option to detect non-circular holes.

  **offset_holes: bool, optional**
  : Option to offset holes.

  **mesh_offset_faces: bool, optional**
  : Option to mesh the offset holes.

  **detect_holes_params: DetectHolesParams, optional**
  : Parameters for detect holes operation.

  **detect_circular_holes_params: DetectCircularHolesParams, optional**
  : Parameters for detect circular holes operation.

  **detect_non_circular_holes_params: DetectNonCircularHolesParams, optional**
  : Parameters for detect non circular holes operation.

  **hole_proximity_tolerance: float, optional**
  : Edge proximity tolerance for holes.

  **merge_face_normals_angle: float, optional**
  : Merge faces when the normal angle between the faces is below the provided value.

  **edge_sharp_corner_angle: float, optional**
  : Merge edges when the angle between the edges are below the provided value.

  **fragmented_edge_tolerance: float, optional**
  : Fragmented edge length tolerance for merging edges.

  **offset_distance: float, optional**
  : Offset distance for creating offset edge.

  **edge_mesh_constant_size: float, optional**
  : Constant size used for edge meshing.

  **surface_mesh_constant_size: float, optional**
  : Constant size used for surface meshing.

<!-- !! processed by numpydoc !! -->
