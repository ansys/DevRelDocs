# get_surface_quality_summary

<a id="ansys.meshing.prime.SurfaceSearch.get_surface_quality_summary"></a>

#### SurfaceSearch.get_surface_quality_summary(params)

Gets the surface quality summary.

Diagnose surface quality for the given scope and face quality measures provided by the surface quality summary parameters.
Uses default quality limit if not specified with params.

* **Parameters:**

  **params**
  : Surface quality summary parameters.

* **Returns:**
  
  [`SurfaceQualitySummaryResults`](ansys.meshing.prime.SurfaceQualitySummaryResults.md#ansys.meshing.prime.SurfaceQualitySummaryResults)
  : Returns the SurfaceQualitySummaryResults.

* **Return type:**
S
  [`SurfaceQualitySummaryResults`](ansys.meshing.prime.SurfaceQualitySummaryResults.md#ansys.meshing.prime.SurfaceQualitySummaryResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> results = surf_search.get_surface_quality_summary(SurfaceQualitySummaryParams(model=model))
```

<!-- !! processed by numpydoc !! -->
