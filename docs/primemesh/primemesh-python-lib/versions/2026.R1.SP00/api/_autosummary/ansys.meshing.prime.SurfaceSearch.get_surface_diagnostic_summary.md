# get_surface_diagnostic_summary

<a id="ansys.meshing.prime.SurfaceSearch.get_surface_diagnostic_summary"></a>

#### SurfaceSearch.get_surface_diagnostic_summary(params)

Gets the surface diagnostic summary.

Diagnose surface connectivity for the given scope and controls provided by the surface diagnostic summary parameters.

* **Parameters:**

  **params**
  : Surface diagnostic summary parameters.

* **Returns:**

  [`SurfaceDiagnosticSummaryResults`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults)
  : Returns the SurfaceDiagnosticSummaryResults.

* **Return type:**

  [`SurfaceDiagnosticSummaryResults`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> results = surf_search.get_surface_diagnostics_summary(SurfaceDiagnosticSummaryParams(model=model))
```

<!-- !! processed by numpydoc !! -->
