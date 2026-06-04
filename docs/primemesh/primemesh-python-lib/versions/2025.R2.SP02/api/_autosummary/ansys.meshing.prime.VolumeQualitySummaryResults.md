# VolumeQualitySummaryResults

<a id="ansys.meshing.prime.VolumeQualitySummaryResults"></a>

### *class* ansys.meshing.prime.VolumeQualitySummaryResults(model=None, error_code=None, quality_results_part=None, message=None, json_data=None, \*\*kwargs)

Results of volume quality summary.

* **Parameters:**

  **model: Model**
  : Model to create a `VolumeQualitySummaryResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the volume quality summary.

  **quality_results_part: List[VolumeQualityResultsPart], optional**
  : Contains volume quality result per cell quality measure by parts specified in parameters.

  **message: str, optional**
  : Volume quality summary text.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumeQualitySummaryResults` object with provided parameters.

### Examples

```pycon
>>> volume_quality_summary_results = prime.VolumeQualitySummaryResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`VolumeQualitySummaryResults.print_default`](ansys.meshing.prime.VolumeQualitySummaryResults.print_default.md#ansys.meshing.prime.VolumeQualitySummaryResults.print_default)()   | Print the default values of `VolumeQualitySummaryResults` object.   |
| [`VolumeQualitySummaryResults.set_default`](ansys.meshing.prime.VolumeQualitySummaryResults.set_default.md#ansys.meshing.prime.VolumeQualitySummaryResults.set_default)([...])    | Set the default values of the `VolumeQualitySummaryResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`VolumeQualitySummaryResults.error_code`](ansys.meshing.prime.VolumeQualitySummaryResults.error_code.md#ansys.meshing.prime.VolumeQualitySummaryResults.error_code)                               | Error code associated with the volume quality summary.                                    |
| [`VolumeQualitySummaryResults.message`](ansys.meshing.prime.VolumeQualitySummaryResults.message.md#ansys.meshing.prime.VolumeQualitySummaryResults.message)                                        | Volume quality summary text.                                                              |
| [`VolumeQualitySummaryResults.quality_results_part`](ansys.meshing.prime.VolumeQualitySummaryResults.quality_results_part.md#ansys.meshing.prime.VolumeQualitySummaryResults.quality_results_part) | Contains volume quality result per cell quality measure by parts specified in parameters. |
<!-- vale on -->