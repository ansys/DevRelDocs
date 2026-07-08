# ScaffolderParams

<a id="ansys.meshing.prime.ScaffolderParams"></a>

### *class* ansys.meshing.prime.ScaffolderParams(model=None, absolute_dist_tol=None, repair_mode=None, size_field_type=None, intersection_control_mask=None, edge_merge_control=None, constant_mesh_size=None, remove_holes_critical_radius=None, remove_slivers_abs_dist_tol_ratio=None, triangles_coplanar_angle_cos=None, json_data=None, \*\*kwargs)

Parameters to control scaffold operation.

* **Parameters:**

  **model: Model**
  : Model to create a `ScaffolderParams` object with default parameters.

  **absolute_dist_tol: float, optional**
  : Defines the maximum gap to connect.

  **repair_mode: ScaffolderRepairMode, optional**
  : Defines the mode to be used during repair or connect.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **size_field_type: int, optional**
  : Specifies the type of size field used for scaffolding.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **intersection_control_mask: IntersectionMask, optional**
  : Specifies the nature of intersection to be computed.

  **edge_merge_control: int, optional**
  : Specifies type of edge pairs to be merged during scaffold operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **constant_mesh_size: float, optional**
  : Defines the constant edge mesh size to check connection.

  **remove_holes_critical_radius: float, optional**
  : Defines the maximum radius of holes to be removed.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **remove_slivers_abs_dist_tol_ratio: float, optional**
  : Defines the maximum aspect ratio to remove sliver faces.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **triangles_coplanar_angle_cos: float, optional**
  : Lower bound for cos angle to consider coplanar faces for scaffolding.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ScaffolderParams` object with provided parameters.

### Examples

```pycon
>>> scaffolder_params = prime.ScaffolderParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`ScaffolderParams.print_default`](ansys.meshing.prime.ScaffolderParams.print_default.md#ansys.meshing.prime.ScaffolderParams.print_default)()   | Print the default values of `ScaffolderParams` object.   |
| [`ScaffolderParams.set_default`](ansys.meshing.prime.ScaffolderParams.set_default.md#ansys.meshing.prime.ScaffolderParams.set_default)([...])    | Set the default values of the `ScaffolderParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`ScaffolderParams.absolute_dist_tol`](ansys.meshing.prime.ScaffolderParams.absolute_dist_tol.md#ansys.meshing.prime.ScaffolderParams.absolute_dist_tol)                                                 | Defines the maximum gap to connect.                                   |
| [`ScaffolderParams.constant_mesh_size`](ansys.meshing.prime.ScaffolderParams.constant_mesh_size.md#ansys.meshing.prime.ScaffolderParams.constant_mesh_size)                                              | Defines the constant edge mesh size to check connection.              |
| [`ScaffolderParams.edge_merge_control`](ansys.meshing.prime.ScaffolderParams.edge_merge_control.md#ansys.meshing.prime.ScaffolderParams.edge_merge_control)                                              | Specifies type of edge pairs to be merged during scaffold operation.  |
| [`ScaffolderParams.intersection_control_mask`](ansys.meshing.prime.ScaffolderParams.intersection_control_mask.md#ansys.meshing.prime.ScaffolderParams.intersection_control_mask)                         | Specifies the nature of intersection to be computed.                  |
| [`ScaffolderParams.remove_holes_critical_radius`](ansys.meshing.prime.ScaffolderParams.remove_holes_critical_radius.md#ansys.meshing.prime.ScaffolderParams.remove_holes_critical_radius)                | Defines the maximum radius of holes to be removed.                    |
| [`ScaffolderParams.remove_slivers_abs_dist_tol_ratio`](ansys.meshing.prime.ScaffolderParams.remove_slivers_abs_dist_tol_ratio.md#ansys.meshing.prime.ScaffolderParams.remove_slivers_abs_dist_tol_ratio) | Defines the maximum aspect ratio to remove sliver faces.              |
| [`ScaffolderParams.repair_mode`](ansys.meshing.prime.ScaffolderParams.repair_mode.md#ansys.meshing.prime.ScaffolderParams.repair_mode)                                                                   | Defines the mode to be used during repair or connect.                 |
| [`ScaffolderParams.size_field_type`](ansys.meshing.prime.ScaffolderParams.size_field_type.md#ansys.meshing.prime.ScaffolderParams.size_field_type)                                                       | Specifies the type of size field used for scaffolding.                |
| [`ScaffolderParams.triangles_coplanar_angle_cos`](ansys.meshing.prime.ScaffolderParams.triangles_coplanar_angle_cos.md#ansys.meshing.prime.ScaffolderParams.triangles_coplanar_angle_cos)                | Lower bound for cos angle to consider coplanar faces for scaffolding. |
<!-- vale on -->