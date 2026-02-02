# SurfaceQualityResult

<a id="ansys.meshing.prime.SurfaceQualityResult"></a>

### *class* ansys.meshing.prime.SurfaceQualityResult(model=None, face_quality_measure=None, measure_name=None, quality_limit=None, n_found=None, max_quality=None, min_quality=None, json_data=None, \*\*kwargs)

Result of surface quality.

* **Parameters:**

  **model: Model**
  : Model to create a `SurfaceQualityResult` object with default parameters.

  **face_quality_measure: FaceQualityMeasure, optional**
  : Type of the face quality measure.

  **measure_name: str, optional**
  : Name of the face quality measure.

  **quality_limit: float, optional**
  : Target quality limit used to find failures.

  **n_found: int, optional**
  : Number of failed faces.

  **max_quality: float, optional**
  : Maximum value of quality measure.

  **min_quality: float, optional**
  : Minimum value of quality measure.

  **json_data: dict, optional**
  : JSON dictionary to create a `SurfaceQualityResult` object with provided parameters.

### Examples

```pycon
>>> surface_quality_result = prime.SurfaceQualityResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`SurfaceQualityResult.print_default`](ansys.meshing.prime.SurfaceQualityResult.print_default.md#ansys.meshing.prime.SurfaceQualityResult.print_default)()   | Print the default values of `SurfaceQualityResult` object.   |
| [`SurfaceQualityResult.set_default`](ansys.meshing.prime.SurfaceQualityResult.set_default.md#ansys.meshing.prime.SurfaceQualityResult.set_default)([...])    | Set the default values of the `SurfaceQualityResult` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`SurfaceQualityResult.face_quality_measure`](ansys.meshing.prime.SurfaceQualityResult.face_quality_measure.md#ansys.meshing.prime.SurfaceQualityResult.face_quality_measure)   | Type of the face quality measure.           |
| [`SurfaceQualityResult.max_quality`](ansys.meshing.prime.SurfaceQualityResult.max_quality.md#ansys.meshing.prime.SurfaceQualityResult.max_quality)                              | Maximum value of quality measure.           |
| [`SurfaceQualityResult.measure_name`](ansys.meshing.prime.SurfaceQualityResult.measure_name.md#ansys.meshing.prime.SurfaceQualityResult.measure_name)                           | Name of the face quality measure.           |
| [`SurfaceQualityResult.min_quality`](ansys.meshing.prime.SurfaceQualityResult.min_quality.md#ansys.meshing.prime.SurfaceQualityResult.min_quality)                              | Minimum value of quality measure.           |
| [`SurfaceQualityResult.n_found`](ansys.meshing.prime.SurfaceQualityResult.n_found.md#ansys.meshing.prime.SurfaceQualityResult.n_found)                                          | Number of failed faces.                     |
| [`SurfaceQualityResult.quality_limit`](ansys.meshing.prime.SurfaceQualityResult.quality_limit.md#ansys.meshing.prime.SurfaceQualityResult.quality_limit)                        | Target quality limit used to find failures. |
<!-- vale on -->