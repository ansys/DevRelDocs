# VolumeQualitySummaryParams

<a id="ansys.meshing.prime.VolumeQualitySummaryParams"></a>

### *class* ansys.meshing.prime.VolumeQualitySummaryParams(model=None, cell_quality_measures=None, scope=None, quality_limit=None, json_data=None, \*\*kwargs)

Parameters to control volume quality summary results.

* **Parameters:**

  **model: Model**
  : Model to create a `VolumeQualitySummaryParams` object with default parameters.

  **cell_quality_measures: List[CellQualityMeasure], optional**
  : List of cell quality measures for volume quality diagnostics.

  **scope: ScopeDefinition, optional**
  : Scope of the cell zonelets for volume quality diagnostics.

  **quality_limit: Iterable[float], optional**
  : Quality limit per cell quality measure. If the quality limit is not specified, the default quality limit is used.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumeQualitySummaryParams` object with provided parameters.

### Examples

```pycon
>>> volume_quality_summary_params = prime.VolumeQualitySummaryParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`VolumeQualitySummaryParams.print_default`](ansys.meshing.prime.VolumeQualitySummaryParams.print_default.md#ansys.meshing.prime.VolumeQualitySummaryParams.print_default)()   | Print the default values of `VolumeQualitySummaryParams` object.   |
| [`VolumeQualitySummaryParams.set_default`](ansys.meshing.prime.VolumeQualitySummaryParams.set_default.md#ansys.meshing.prime.VolumeQualitySummaryParams.set_default)([...])    | Set the default values of the `VolumeQualitySummaryParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`VolumeQualitySummaryParams.cell_quality_measures`](ansys.meshing.prime.VolumeQualitySummaryParams.cell_quality_measures.md#ansys.meshing.prime.VolumeQualitySummaryParams.cell_quality_measures)   | List of cell quality measures for volume quality diagnostics.   |
| [`VolumeQualitySummaryParams.quality_limit`](ansys.meshing.prime.VolumeQualitySummaryParams.quality_limit.md#ansys.meshing.prime.VolumeQualitySummaryParams.quality_limit)                           | Quality limit per cell quality measure.                         |
| [`VolumeQualitySummaryParams.scope`](ansys.meshing.prime.VolumeQualitySummaryParams.scope.md#ansys.meshing.prime.VolumeQualitySummaryParams.scope)                                                   | Scope of the cell zonelets for volume quality diagnostics.      |



<!-- vale on -->
