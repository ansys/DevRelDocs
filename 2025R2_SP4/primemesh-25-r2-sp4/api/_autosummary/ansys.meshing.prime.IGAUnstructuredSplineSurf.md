# IGAUnstructuredSplineSurf

<a id="ansys.meshing.prime.IGAUnstructuredSplineSurf"></a>

### *class* ansys.meshing.prime.IGAUnstructuredSplineSurf(model=None, id=None, degree=None, spline_refinement_level=None, control_points=None, spline_points=None, bad_spline_points_indices=None, deviation_array=None, invalid_jacobian_elements_count=None, average_mesh_size=None, elements_count=None, shell_thickness=None, json_data=None, \*\*kwargs)

Information of unstructured spline surface.

* **Parameters:**

  **model: Model**
  : Model to create a `IGAUnstructuredSplineSurf` object with default parameters.

  **id: int, optional**
  : Id of the unstructured spline surface.

  **degree: int, optional**
  : Degree of the spline surface.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **spline_refinement_level: int, optional**
  : Refinement level for rendering of spline points.

  **control_points: Iterable[float], optional**
  : Coordinates of the control points of the spline.

  **spline_points: Iterable[float], optional**
  : Coordinates of the spline points.

  **bad_spline_points_indices: Iterable[int], optional**
  : Node indices in the spline points list which has negative jacobian value.

  **deviation_array: Iterable[float], optional**
  : Deviation value from the spline point to the model geometry.

  **invalid_jacobian_elements_count: int, optional**
  : Count of elements with negative jacobian.

  **average_mesh_size: float, optional**
  : Reference length to compute deviation.

  **elements_count: int, optional**
  : Count of shell elements.

  **shell_thickness: float, optional**
  : Thickness of shell.

  **json_data: dict, optional**
  : JSON dictionary to create a `IGAUnstructuredSplineSurf` object with provided parameters.

### Examples

```pycon
>>> iga_unstructured_spline_surf = prime.IGAUnstructuredSplineSurf(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`IGAUnstructuredSplineSurf.print_default`](ansys.meshing.prime.IGAUnstructuredSplineSurf.print_default.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.print_default)()    | Print the default values of `IGAUnstructuredSplineSurf` object.   |
| [`IGAUnstructuredSplineSurf.set_default`](ansys.meshing.prime.IGAUnstructuredSplineSurf.set_default.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.set_default)([id, ...]) | Set the default values of the `IGAUnstructuredSplineSurf` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`IGAUnstructuredSplineSurf.average_mesh_size`](ansys.meshing.prime.IGAUnstructuredSplineSurf.average_mesh_size.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.average_mesh_size)                                           | Reference length to compute deviation.                                    |
| [`IGAUnstructuredSplineSurf.bad_spline_points_indices`](ansys.meshing.prime.IGAUnstructuredSplineSurf.bad_spline_points_indices.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.bad_spline_points_indices)                   | Node indices in the spline points list which has negative jacobian value. |
| [`IGAUnstructuredSplineSurf.control_points`](ansys.meshing.prime.IGAUnstructuredSplineSurf.control_points.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.control_points)                                                    | Coordinates of the control points of the spline.                          |
| [`IGAUnstructuredSplineSurf.degree`](ansys.meshing.prime.IGAUnstructuredSplineSurf.degree.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.degree)                                                                            | Degree of the spline surface.                                             |
| [`IGAUnstructuredSplineSurf.deviation_array`](ansys.meshing.prime.IGAUnstructuredSplineSurf.deviation_array.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.deviation_array)                                                 | Deviation value from the spline point to the model geometry.              |
| [`IGAUnstructuredSplineSurf.elements_count`](ansys.meshing.prime.IGAUnstructuredSplineSurf.elements_count.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.elements_count)                                                    | Count of shell elements.                                                  |
| [`IGAUnstructuredSplineSurf.id`](ansys.meshing.prime.IGAUnstructuredSplineSurf.id.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.id)                                                                                        | Id of the unstructured spline surface.                                    |
| [`IGAUnstructuredSplineSurf.invalid_jacobian_elements_count`](ansys.meshing.prime.IGAUnstructuredSplineSurf.invalid_jacobian_elements_count.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.invalid_jacobian_elements_count) | Count of elements with negative jacobian.                                 |
| [`IGAUnstructuredSplineSurf.shell_thickness`](ansys.meshing.prime.IGAUnstructuredSplineSurf.shell_thickness.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.shell_thickness)                                                 | Thickness of shell.                                                       |
| [`IGAUnstructuredSplineSurf.spline_points`](ansys.meshing.prime.IGAUnstructuredSplineSurf.spline_points.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.spline_points)                                                       | Coordinates of the spline points.                                         |
| [`IGAUnstructuredSplineSurf.spline_refinement_level`](ansys.meshing.prime.IGAUnstructuredSplineSurf.spline_refinement_level.md#ansys.meshing.prime.IGAUnstructuredSplineSurf.spline_refinement_level)                         | Refinement level for rendering of spline points.                          |
<!-- vale on -->