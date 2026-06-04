# set_default

<a id="ansys.meshing.prime.BoundaryFittedSplineParams.set_default"></a>

#### *static* BoundaryFittedSplineParams.set_default(degree_u=None, degree_v=None, degree_w=None, refinement_fraction_u=None, refinement_fraction_v=None, refinement_fraction_w=None, control_points_count_u=None, control_points_count_v=None, control_points_count_w=None, n_refine=None, control_point_selection_type=None)

Set the default values of the `BoundaryFittedSplineParams` object.

* **Parameters:**

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

<!-- !! processed by numpydoc !! -->
