# set_default

<a id="ansys.meshing.prime.IntersectParams.set_default"></a>

#### *static* IntersectParams.set_default(tolerance=None, use_absolute_tolerance=None, remesh=None, collapse_feature_angle=None, collapse_target_skewness=None)

Set the default values of the `IntersectParams` object.

* **Parameters:**

  **tolerance: float, optional**
  : Intersection tolerance.

  **use_absolute_tolerance: bool, optional**
  : True if tolerance provided is absolute value.

  **remesh: bool, optional**
  : Local remesh at the intersection.

  **collapse_feature_angle: float, optional**
  : Angle to preserve features while performing collapse in improve operation.

  **collapse_target_skewness: float, optional**
  : Perform collapse on faces with skewness above the provided target skewness.

<!-- !! processed by numpydoc !! -->
