# set_default

<a id="ansys.meshing.prime.ScaffolderParams.set_default"></a>

#### *static* ScaffolderParams.set_default(absolute_dist_tol=None, size_field_type=None, intersection_control_mask=None, edge_merge_control=None, constant_mesh_size=None, remove_holes_critical_radius=None, remove_slivers_abs_dist_tol_ratio=None, triangles_coplanar_angle_cos=None)

Set the default values of the `ScaffolderParams` object.

* **Parameters:**

  **absolute_dist_tol: float, optional**
  : Defines the maximum gap to connect.

  **size_field_type: int, optional**
  : Specifies the type of size field used for scaffolding.

  **intersection_control_mask: IntersectionMask, optional**
  : Specifies the nature of intersection to be computed.

  **edge_merge_control: int, optional**
  : Specifies type of edge pairs to be merged during scaffold operation.

  **constant_mesh_size: float, optional**
  : Defines the constant edge mesh size to check connection.

  **remove_holes_critical_radius: float, optional**
  : Defines the maximum radius of holes to be removed.

  **remove_slivers_abs_dist_tol_ratio: float, optional**
  : Defines the maximum aspect ratio to remove sliver faces.

  **triangles_coplanar_angle_cos: float, optional**
  : Lower bound for cos angle to consider coplanar faces for scaffolding.

<!-- !! processed by numpydoc !! -->
