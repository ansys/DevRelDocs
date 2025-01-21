# set_default

<a id="ansys.meshing.prime.VolumeQualitySummaryParams.set_default"></a>

#### *static* VolumeQualitySummaryParams.set_default(cell_quality_measures=None, scope=None, quality_limit=None)

Set the default values of the `VolumeQualitySummaryParams` object.

* **Parameters:**

  **cell_quality_measures: List[CellQualityMeasure], optional**
  : List of cell quality measures for volume quality diagnostics.

  **scope: ScopeDefinition, optional**
  : Scope of the cell zonelets for volume quality diagnostics.

  **quality_limit: Iterable[float], optional**
  : Quality limit per cell quality measure. If the quality limit is not specified, the default quality limit is used.

<!-- !! processed by numpydoc !! -->
