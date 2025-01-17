# SurfaceDiagnosticSummaryResults

<a id="ansys.meshing.prime.SurfaceDiagnosticSummaryResults"></a>

### *class* ansys.meshing.prime.SurfaceDiagnosticSummaryResults(model=None, error_code=None, n_self_intersections=None, n_free_edges=None, n_multi_edges=None, n_duplicate_faces=None, json_data=None, \*\*kwargs)

Results of surface diagnostic summary.

* **Parameters:**
  **model: Model**
  : Model to create a `SurfaceDiagnosticSummaryResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the surface diagnostic summary.

  **n_self_intersections: int, optional**
  : Number of self intersecting faces identified.

  **n_free_edges: int, optional**
  : Number of free face edges identified.

  **n_multi_edges: int, optional**
  : Number of multi face edges identified.

  **n_duplicate_faces: int, optional**
  : Number of duplicate faces identified.

  **json_data: dict, optional**
  : JSON dictionary to create a `SurfaceDiagnosticSummaryResults` object with provided parameters.

### Examples

```pycon
>>> surface_diagnostic_summary_results = prime.SurfaceDiagnosticSummaryResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Name | Description |
| [`SurfaceDiagnosticSummaryResults.print_default`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.print_default.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults.print_default)()   | Print the default values of `SurfaceDiagnosticSummaryResults` object.   |
| [`SurfaceDiagnosticSummaryResults.set_default`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.set_default.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults.set_default)([...])    | Set the default values of the `SurfaceDiagnosticSummaryResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| Name | Description |
| [`SurfaceDiagnosticSummaryResults.error_code`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.error_code.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults.error_code)                               | Error code associated with the surface diagnostic summary.   |
| [`SurfaceDiagnosticSummaryResults.n_duplicate_faces`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.n_duplicate_faces.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults.n_duplicate_faces)          | Number of duplicate faces identified.                        |
| [`SurfaceDiagnosticSummaryResults.n_free_edges`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.n_free_edges.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults.n_free_edges)                         | Number of free face edges identified.                        |
| [`SurfaceDiagnosticSummaryResults.n_multi_edges`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.n_multi_edges.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults.n_multi_edges)                      | Number of multi face edges identified.                       |
| [`SurfaceDiagnosticSummaryResults.n_self_intersections`](ansys.meshing.prime.SurfaceDiagnosticSummaryResults.n_self_intersections.md#ansys.meshing.prime.SurfaceDiagnosticSummaryResults.n_self_intersections) | Number of self intersecting faces identified.                |

<a id="examples-using-surfacediagnosticsummaryresults"></a>

## Examples using SurfaceDiagnosticSummaryResults

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
