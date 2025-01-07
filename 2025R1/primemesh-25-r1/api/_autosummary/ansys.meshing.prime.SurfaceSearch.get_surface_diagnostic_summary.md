# get_surface_diagnostic_summary

<a id="ansys.meshing.prime.SurfaceSearch.get_surface_diagnostic_summary"></a>

#### SurfaceSearch.get_surface_diagnostic_summary(params)

Gets the surface diagnostic summary.

Diagnose surface connectivity for the given scope and controls provided by the surface diagnostic summary parameters.

* **Parameters:**
  **params**
  : Surface diagnostic summary parameters.
* **Returns:**
  :

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

<a id="examples-using-surfacesearch-get-surface-diagnostic-summary"></a>

## Examples using SurfaceSearch.get_surface_diagnostic_summary

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
