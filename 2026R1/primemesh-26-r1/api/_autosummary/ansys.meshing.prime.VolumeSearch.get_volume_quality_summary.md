# get_volume_quality_summary

<a id="ansys.meshing.prime.VolumeSearch.get_volume_quality_summary"></a>

#### VolumeSearch.get_volume_quality_summary(params)

Gets the volume quality summary.

Diagnose volume quality for the given scope and cell quality measures provided in the VolumeQualitySummaryParams structure.
Use default quality limit if the parameters are not specified.

* **Parameters:**

  **params**
  : Volume quality summary parameters.

* **Returns:**

  [`VolumeQualitySummaryResults`](ansys.meshing.prime.VolumeQualitySummaryResults.md#ansys.meshing.prime.VolumeQualitySummaryResults)
  : Returns the VolumeQualitySummaryResults.

* **Return type:**

  [`VolumeQualitySummaryResults`](ansys.meshing.prime.VolumeQualitySummaryResults.md#ansys.meshing.prime.VolumeQualitySummaryResults)

### Examples

```pycon
>>> vol_search = VolumeSearch(model=model)
>>> results = vol_search.get_volume_quality_summary(VolumeQualitySummaryParams(model=model))
```

<!-- !! processed by numpydoc !! -->
