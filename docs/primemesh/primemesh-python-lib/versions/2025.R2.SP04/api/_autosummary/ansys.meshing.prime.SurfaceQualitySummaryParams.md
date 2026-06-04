# SurfaceQualitySummaryParams

<a id="ansys.meshing.prime.SurfaceQualitySummaryParams"></a>

### *class* ansys.meshing.prime.SurfaceQualitySummaryParams(model=None, face_quality_measures=None, scope=None, quality_limit=None, json_data=None, \*\*kwargs)

Parameters to control surface quality summary results.

* **Parameters:**

  **model: Model**
  : Model to create a `SurfaceQualitySummaryParams` object with default parameters.

  **face_quality_measures: List[FaceQualityMeasure], optional**
  : List of face quality measures for surface quality diagnostics.

  **scope: ScopeDefinition, optional**
  : Scope the face zonelets for surface quality diagnostics.

  **quality_limit: Iterable[float], optional**
  : Quality limit per face quality measure. If the quality limit is not specified, the default quality limit is used.

  **json_data: dict, optional**
  : JSON dictionary to create a `SurfaceQualitySummaryParams` object with provided parameters.

### Examples

```pycon
>>> surface_quality_summary_params = prime.SurfaceQualitySummaryParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`SurfaceQualitySummaryParams.print_default`](ansys.meshing.prime.SurfaceQualitySummaryParams.print_default.md#ansys.meshing.prime.SurfaceQualitySummaryParams.print_default)()   | Print the default values of `SurfaceQualitySummaryParams` object.   |
| [`SurfaceQualitySummaryParams.set_default`](ansys.meshing.prime.SurfaceQualitySummaryParams.set_default.md#ansys.meshing.prime.SurfaceQualitySummaryParams.set_default)([...])    | Set the default values of the `SurfaceQualitySummaryParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`SurfaceQualitySummaryParams.face_quality_measures`](ansys.meshing.prime.SurfaceQualitySummaryParams.face_quality_measures.md#ansys.meshing.prime.SurfaceQualitySummaryParams.face_quality_measures)   | List of face quality measures for surface quality diagnostics.   |
| [`SurfaceQualitySummaryParams.quality_limit`](ansys.meshing.prime.SurfaceQualitySummaryParams.quality_limit.md#ansys.meshing.prime.SurfaceQualitySummaryParams.quality_limit)                           | Quality limit per face quality measure.                          |
| [`SurfaceQualitySummaryParams.scope`](ansys.meshing.prime.SurfaceQualitySummaryParams.scope.md#ansys.meshing.prime.SurfaceQualitySummaryParams.scope)                                                   | Scope the face zonelets for surface quality diagnostics.         |
<!-- vale on -->