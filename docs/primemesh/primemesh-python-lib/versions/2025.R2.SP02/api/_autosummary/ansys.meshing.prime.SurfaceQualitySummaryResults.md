# SurfaceQualitySummaryResults

<a id="ansys.meshing.prime.SurfaceQualitySummaryResults"></a>

### *class* ansys.meshing.prime.SurfaceQualitySummaryResults(model=None, error_code=None, quality_results=None, summary=None, json_data=None, \*\*kwargs)

Results of surface quality summary.

* **Parameters:**

  **model: Model**
  : Model to create a `SurfaceQualitySummaryResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the surface quality summary.

  **quality_results: List[SurfaceQualityResult], optional**
  : Contains surface quality result per face quality measure specified in parameters.

  **summary: str, optional**
  : Surface quality summary text.

  **json_data: dict, optional**
  : JSON dictionary to create a `SurfaceQualitySummaryResults` object with provided parameters.

### Examples

```pycon
>>> surface_quality_summary_results = prime.SurfaceQualitySummaryResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`SurfaceQualitySummaryResults.print_default`](ansys.meshing.prime.SurfaceQualitySummaryResults.print_default.md#ansys.meshing.prime.SurfaceQualitySummaryResults.print_default)()   | Print the default values of `SurfaceQualitySummaryResults` object.   |
| [`SurfaceQualitySummaryResults.set_default`](ansys.meshing.prime.SurfaceQualitySummaryResults.set_default.md#ansys.meshing.prime.SurfaceQualitySummaryResults.set_default)([...])    | Set the default values of the `SurfaceQualitySummaryResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SurfaceQualitySummaryResults.error_code`](ansys.meshing.prime.SurfaceQualitySummaryResults.error_code.md#ansys.meshing.prime.SurfaceQualitySummaryResults.error_code)                | Error code associated with the surface quality summary.                           |
| [`SurfaceQualitySummaryResults.quality_results`](ansys.meshing.prime.SurfaceQualitySummaryResults.quality_results.md#ansys.meshing.prime.SurfaceQualitySummaryResults.quality_results) | Contains surface quality result per face quality measure specified in parameters. |
| [`SurfaceQualitySummaryResults.summary`](ansys.meshing.prime.SurfaceQualitySummaryResults.summary.md#ansys.meshing.prime.SurfaceQualitySummaryResults.summary)                         | Surface quality summary text.                                                     |
<!-- vale on -->