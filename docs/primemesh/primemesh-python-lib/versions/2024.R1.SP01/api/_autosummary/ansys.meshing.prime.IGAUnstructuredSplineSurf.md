<!-- vale off -->

# IGAUnstructuredSplineSurf

### *class* ansys.meshing.prime.IGAUnstructuredSplineSurf(model=None, id=None, spline_refinement_level=None, control_points=None, spline_points=None, bad_spline_points_indices=None, deviation_array=None, invalid_jacobian_elements_count=None, average_mesh_size=None, elements_count=None, shell_thickness=None, json_data=None, \*\*kwargs)

Information of unstructured spline surface.

<!-- !! processed by numpydoc !! -->

### Methods

| [`IGAUnstructuredSplineSurf.print_default`](ansys.meshing.prime.IGAUnstructuredSplineSurf.print_default.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.print_default)()    | Print the default values of IGAUnstructuredSplineSurf.   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`IGAUnstructuredSplineSurf.set_default`](ansys.meshing.prime.IGAUnstructuredSplineSurf.set_default.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.set_default)([id, ...]) | Set the default values of IGAUnstructuredSplineSurf.     |

### Attributes

| [`IGAUnstructuredSplineSurf.average_mesh_size`](ansys.meshing.prime.IGAUnstructuredSplineSurf.average_mesh_size.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.average_mesh_size)                                           | Reference length to compute deviation.                                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`IGAUnstructuredSplineSurf.bad_spline_points_indices`](ansys.meshing.prime.IGAUnstructuredSplineSurf.bad_spline_points_indices.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.bad_spline_points_indices)                   | Node indices in the spline points list which has negative jacobian value. |
| [`IGAUnstructuredSplineSurf.control_points`](ansys.meshing.prime.IGAUnstructuredSplineSurf.control_points.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.control_points)                                                    | Coordinates of the control points of the spline.                          |
| [`IGAUnstructuredSplineSurf.deviation_array`](ansys.meshing.prime.IGAUnstructuredSplineSurf.deviation_array.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.deviation_array)                                                 | Deviation value from the spline point to the model geometry.              |
| [`IGAUnstructuredSplineSurf.elements_count`](ansys.meshing.prime.IGAUnstructuredSplineSurf.elements_count.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.elements_count)                                                    | Count of shell elements.                                                  |
| [`IGAUnstructuredSplineSurf.id`](ansys.meshing.prime.IGAUnstructuredSplineSurf.id.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.id)                                                                                        | Id of the unstructured spline surface.                                    |
| [`IGAUnstructuredSplineSurf.invalid_jacobian_elements_count`](ansys.meshing.prime.IGAUnstructuredSplineSurf.invalid_jacobian_elements_count.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.invalid_jacobian_elements_count) | Count of elements with negative jacobian.                                 |
| [`IGAUnstructuredSplineSurf.shell_thickness`](ansys.meshing.prime.IGAUnstructuredSplineSurf.shell_thickness.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.shell_thickness)                                                 | Thickness of shell.                                                       |
| [`IGAUnstructuredSplineSurf.spline_points`](ansys.meshing.prime.IGAUnstructuredSplineSurf.spline_points.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.spline_points)                                                       | Coordinates of the spline points.                                         |
| [`IGAUnstructuredSplineSurf.spline_refinement_level`](ansys.meshing.prime.IGAUnstructuredSplineSurf.spline_refinement_level.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.spline_refinement_level)                         | Refinement level for rendering of spline points.                          |
<!-- vale on -->
