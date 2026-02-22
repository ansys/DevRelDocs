# SearchByThinStripParams

<a id="ansys.meshing.prime.SearchByThinStripParams"></a>

### *class* ansys.meshing.prime.SearchByThinStripParams(model=None, strip_height_limit=None, quality_limit=None, face_quality_measure=None, feature_type=None, feature_angle=None, json_data=None, \*\*kwargs)

Parameters to search by thin strip of face elements.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchByThinStripParams` object with default parameters.

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

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchByThinStripParams` object with provided parameters.

### Examples

```pycon
>>> search_by_thin_strip_params = prime.SearchByThinStripParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`SearchByThinStripParams.print_default`](ansys.meshing.prime.SearchByThinStripParams.print_default.md#ansys.meshing.prime.SearchByThinStripParams.print_default)()   | Print the default values of `SearchByThinStripParams` object.   |
| [`SearchByThinStripParams.set_default`](ansys.meshing.prime.SearchByThinStripParams.set_default.md#ansys.meshing.prime.SearchByThinStripParams.set_default)([...])    | Set the default values of the `SearchByThinStripParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`SearchByThinStripParams.face_quality_measure`](ansys.meshing.prime.SearchByThinStripParams.face_quality_measure.md#ansys.meshing.prime.SearchByThinStripParams.face_quality_measure)   | Quality measure used for search strip of face elements.                          |
| [`SearchByThinStripParams.feature_angle`](ansys.meshing.prime.SearchByThinStripParams.feature_angle.md#ansys.meshing.prime.SearchByThinStripParams.feature_angle)                        | Angle used to identify angle based features.                                     |
| [`SearchByThinStripParams.feature_type`](ansys.meshing.prime.SearchByThinStripParams.feature_type.md#ansys.meshing.prime.SearchByThinStripParams.feature_type)                           | Used to identify thin strip of face elements based on the provided feature type. |
| [`SearchByThinStripParams.quality_limit`](ansys.meshing.prime.SearchByThinStripParams.quality_limit.md#ansys.meshing.prime.SearchByThinStripParams.quality_limit)                        | Quality limit used for search strip of face elements.                            |
| [`SearchByThinStripParams.strip_height_limit`](ansys.meshing.prime.SearchByThinStripParams.strip_height_limit.md#ansys.meshing.prime.SearchByThinStripParams.strip_height_limit)         | Absolute height limit to ignore strips with height more than provided limit.     |
<!-- vale on -->