# SearchByQualityParams

<a id="ansys.meshing.prime.SearchByQualityParams"></a>

### *class* ansys.meshing.prime.SearchByQualityParams(model=None, quality_limit=None, face_quality_measure=None, json_data=None, \*\*kwargs)

Parameters to control search by quality results.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchByQualityParams` object with default parameters.

  **quality_limit: float, optional**
  : Quality limit used for search face elements.

  **face_quality_measure: FaceQualityMeasure, optional**
  : Quality measure used for search face elements.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchByQualityParams` object with provided parameters.

### Examples

```pycon
>>> search_by_quality_params = prime.SearchByQualityParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SearchByQualityParams.print_default`](ansys.meshing.prime.SearchByQualityParams.print_default.md#ansys.meshing.prime.SearchByQualityParams.print_default)()   | Print the default values of `SearchByQualityParams` object.   |
| [`SearchByQualityParams.set_default`](ansys.meshing.prime.SearchByQualityParams.set_default.md#ansys.meshing.prime.SearchByQualityParams.set_default)([...])    | Set the default values of the `SearchByQualityParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`SearchByQualityParams.face_quality_measure`](ansys.meshing.prime.SearchByQualityParams.face_quality_measure.md#ansys.meshing.prime.SearchByQualityParams.face_quality_measure)   | Quality measure used for search face elements.   |
| [`SearchByQualityParams.quality_limit`](ansys.meshing.prime.SearchByQualityParams.quality_limit.md#ansys.meshing.prime.SearchByQualityParams.quality_limit)                        | Quality limit used for search face elements.     |
<!-- vale on -->