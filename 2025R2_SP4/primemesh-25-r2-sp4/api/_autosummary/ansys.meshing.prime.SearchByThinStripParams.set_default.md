# set_default

<a id="ansys.meshing.prime.SearchByThinStripParams.set_default"></a>

#### *static* SearchByThinStripParams.set_default(strip_height_limit=None, quality_limit=None, face_quality_measure=None, feature_type=None, feature_angle=None)

Set the default values of the `SearchByThinStripParams` object.

* **Parameters:**

  **strip_height_limit: float, optional**
  : Absolute height limit to ignore strips with height more than provided limit.

  **quality_limit: float, optional**
  : Quality limit used for search strip of face elements.

  **face_quality_measure: FaceQualityMeasure, optional**
  : Quality measure used for search strip of face elements.

  **feature_type: SurfaceFeatureType, optional**
  : Used to identify thin strip of face elements based on the provided feature type.

  **feature_angle: float, optional**
  : Angle used to identify angle based features.

<!-- !! processed by numpydoc !! -->
