# set_default

<a id="ansys.meshing.prime.IGAUnstructuredSplineSurf.set_default"></a>

#### *static* IGAUnstructuredSplineSurf.set_default(id=None, spline_refinement_level=None, control_points=None, spline_points=None, bad_spline_points_indices=None, deviation_array=None, invalid_jacobian_elements_count=None, average_mesh_size=None, elements_count=None, shell_thickness=None)

Set the default values of the `IGAUnstructuredSplineSurf` object.

* **Parameters:**

  **id: int, optional**
  : Id of the unstructured spline surface.

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

<!-- !! processed by numpydoc !! -->
