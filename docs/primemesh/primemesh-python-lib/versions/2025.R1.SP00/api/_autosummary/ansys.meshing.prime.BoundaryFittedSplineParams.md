# BoundaryFittedSplineParams

<a id="ansys.meshing.prime.BoundaryFittedSplineParams"></a>

### *class* ansys.meshing.prime.BoundaryFittedSplineParams(model=None, degree_u=None, degree_v=None, degree_w=None, refinement_fraction_u=None, refinement_fraction_v=None, refinement_fraction_w=None, control_points_count_u=None, control_points_count_v=None, control_points_count_w=None, n_refine=None, control_point_selection_type=None, json_data=None, \*\*kwargs)

Boundary fitted spline fitting parameters.

* **Parameters:**

  **model: Model**
  : Model to create a `BoundaryFittedSplineParams` object with default parameters.

  **degree_u: int, optional**
  : Degree of spline in u direction.

  **degree_v: int, optional**
  : Degree of spline in v direction.

  **degree_w: int, optional**
  : Degree of spline in w direction.

  **refinement_fraction_u: float, optional**
  : Fraction of input mesh size that sets the control points size in u direction. This is used in program controlled control points selection mode.

  **refinement_fraction_v: float, optional**
  : Fraction of input mesh size that sets the control points size in v direction. This is used in program controlled control points selection mode.

  **refinement_fraction_w: float, optional**
  : Fraction of input mesh size that sets the control points size in w direction. This is used in program controlled control points selection mode.

  **control_points_count_u: int, optional**
  : Spline control points count in U direction. Used in manual control points selection mode.

  **control_points_count_v: int, optional**
  : Spline control points count in V direction. Used in manual control points selection mode.

  **control_points_count_w: int, optional**
  : Spline control points count in W direction. Used in manual control points selection mode.

  **n_refine: int, optional**
  : Spline refinement level for rendering.

  **control_point_selection_type: ControlPointSelection, optional**
  : Spline control points selection type.

  **json_data: dict, optional**
  : JSON dictionary to create a `BoundaryFittedSplineParams` object with provided parameters.

### Examples

```pycon
>>> boundary_fitted_spline_params = prime.BoundaryFittedSplineParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`BoundaryFittedSplineParams.print_default`](ansys.meshing.prime.BoundaryFittedSplineParams.print_default.md#ansys.meshing.prime.BoundaryFittedSplineParams.print_default)()   | Print the default values of `BoundaryFittedSplineParams` object.   |
| [`BoundaryFittedSplineParams.set_default`](ansys.meshing.prime.BoundaryFittedSplineParams.set_default.md#ansys.meshing.prime.BoundaryFittedSplineParams.set_default)([...])    | Set the default values of the `BoundaryFittedSplineParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`BoundaryFittedSplineParams.control_point_selection_type`](ansys.meshing.prime.BoundaryFittedSplineParams.control_point_selection_type.md#ansys.meshing.prime.BoundaryFittedSplineParams.control_point_selection_type)   | Spline control points selection type.                                         |
| [`BoundaryFittedSplineParams.control_points_count_u`](ansys.meshing.prime.BoundaryFittedSplineParams.control_points_count_u.md#ansys.meshing.prime.BoundaryFittedSplineParams.control_points_count_u)                     | Spline control points count in U direction.                                   |
| [`BoundaryFittedSplineParams.control_points_count_v`](ansys.meshing.prime.BoundaryFittedSplineParams.control_points_count_v.md#ansys.meshing.prime.BoundaryFittedSplineParams.control_points_count_v)                     | Spline control points count in V direction.                                   |
| [`BoundaryFittedSplineParams.control_points_count_w`](ansys.meshing.prime.BoundaryFittedSplineParams.control_points_count_w.md#ansys.meshing.prime.BoundaryFittedSplineParams.control_points_count_w)                     | Spline control points count in W direction.                                   |
| [`BoundaryFittedSplineParams.degree_u`](ansys.meshing.prime.BoundaryFittedSplineParams.degree_u.md#ansys.meshing.prime.BoundaryFittedSplineParams.degree_u)                                                               | Degree of spline in u direction.                                              |
| [`BoundaryFittedSplineParams.degree_v`](ansys.meshing.prime.BoundaryFittedSplineParams.degree_v.md#ansys.meshing.prime.BoundaryFittedSplineParams.degree_v)                                                               | Degree of spline in v direction.                                              |
| [`BoundaryFittedSplineParams.degree_w`](ansys.meshing.prime.BoundaryFittedSplineParams.degree_w.md#ansys.meshing.prime.BoundaryFittedSplineParams.degree_w)                                                               | Degree of spline in w direction.                                              |
| [`BoundaryFittedSplineParams.n_refine`](ansys.meshing.prime.BoundaryFittedSplineParams.n_refine.md#ansys.meshing.prime.BoundaryFittedSplineParams.n_refine)                                                               | Spline refinement level for rendering.                                        |
| [`BoundaryFittedSplineParams.refinement_fraction_u`](ansys.meshing.prime.BoundaryFittedSplineParams.refinement_fraction_u.md#ansys.meshing.prime.BoundaryFittedSplineParams.refinement_fraction_u)                        | Fraction of input mesh size that sets the control points size in u direction. |
| [`BoundaryFittedSplineParams.refinement_fraction_v`](ansys.meshing.prime.BoundaryFittedSplineParams.refinement_fraction_v.md#ansys.meshing.prime.BoundaryFittedSplineParams.refinement_fraction_v)                        | Fraction of input mesh size that sets the control points size in v direction. |
| [`BoundaryFittedSplineParams.refinement_fraction_w`](ansys.meshing.prime.BoundaryFittedSplineParams.refinement_fraction_w.md#ansys.meshing.prime.BoundaryFittedSplineParams.refinement_fraction_w)                        | Fraction of input mesh size that sets the control points size in w direction. |
<!-- vale on -->