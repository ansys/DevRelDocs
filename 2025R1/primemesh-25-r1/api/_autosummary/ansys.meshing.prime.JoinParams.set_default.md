# set_default

<a id="ansys.meshing.prime.JoinParams.set_default"></a>

#### *static* JoinParams.set_default(tolerance=None, use_absolute_tolerance=None, remesh=None, match_angle=None, overlap_zone_name=None)

Set the default values of the `JoinParams` object.

* **Parameters:**

  **tolerance: float, optional**
  : Overlap tolerance between overlapping zonelets.

  **use_absolute_tolerance: bool, optional**
  : Tolerance provided is absolute value.

  **remesh: bool, optional**
  : Remesh at overlap surface boundary.

  **match_angle: float, optional**
  : Match angle determines face pair inclination for overlap consideration.

  **overlap_zone_name: str, optional**
  : Zone id to be assigned to overlap zonelets belonging to different zones.

<!-- !! processed by numpydoc !! -->
