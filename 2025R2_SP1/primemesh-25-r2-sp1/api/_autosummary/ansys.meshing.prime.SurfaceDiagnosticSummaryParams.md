# SurfaceDiagnosticSummaryParams

<a id="ansys.meshing.prime.SurfaceDiagnosticSummaryParams"></a>

### *class* ansys.meshing.prime.SurfaceDiagnosticSummaryParams(model=None, scope=None, compute_self_intersections=None, compute_free_edges=None, compute_multi_edges=None, compute_duplicate_faces=None, json_data=None, \*\*kwargs)

Parameters to control surface diagnostics summary results.

* **Parameters:**

  **model: Model**
  : Model to create a `SurfaceDiagnosticSummaryParams` object with default parameters.

  **scope: ScopeDefinition, optional**
  : Scope the face zonelets for surface diagnostics.

  **compute_self_intersections: bool, optional**
  : Control to identify face intersections are present or not.

  **compute_free_edges: bool, optional**
  : Control to identify free face edges are present or not.

  **compute_multi_edges: bool, optional**
  : Control to identify multi face edges are present or not.

  **compute_duplicate_faces: bool, optional**
  : Control to identify duplicate faces are present or not.

  **json_data: dict, optional**
  : JSON dictionary to create a `SurfaceDiagnosticSummaryParams` object with provided parameters.

### Examples

```pycon
>>> surface_diagnostic_summary_params = prime.SurfaceDiagnosticSummaryParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`SurfaceDiagnosticSummaryParams.print_default`](ansys.meshing.prime.SurfaceDiagnosticSummaryParams.print_default.md#ansys.meshing.prime.SurfaceDiagnosticSummaryParams.print_default)()   | Print the default values of `SurfaceDiagnosticSummaryParams` object.   |
| [`SurfaceDiagnosticSummaryParams.set_default`](ansys.meshing.prime.SurfaceDiagnosticSummaryParams.set_default.md#ansys.meshing.prime.SurfaceDiagnosticSummaryParams.set_default)([...])    | Set the default values of the `SurfaceDiagnosticSummaryParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`SurfaceDiagnosticSummaryParams.compute_duplicate_faces`](ansys.meshing.prime.SurfaceDiagnosticSummaryParams.compute_duplicate_faces.md#ansys.meshing.prime.SurfaceDiagnosticSummaryParams.compute_duplicate_faces)          | Control to identify duplicate faces are present or not.    |
| [`SurfaceDiagnosticSummaryParams.compute_free_edges`](ansys.meshing.prime.SurfaceDiagnosticSummaryParams.compute_free_edges.md#ansys.meshing.prime.SurfaceDiagnosticSummaryParams.compute_free_edges)                         | Control to identify free face edges are present or not.    |
| [`SurfaceDiagnosticSummaryParams.compute_multi_edges`](ansys.meshing.prime.SurfaceDiagnosticSummaryParams.compute_multi_edges.md#ansys.meshing.prime.SurfaceDiagnosticSummaryParams.compute_multi_edges)                      | Control to identify multi face edges are present or not.   |
| [`SurfaceDiagnosticSummaryParams.compute_self_intersections`](ansys.meshing.prime.SurfaceDiagnosticSummaryParams.compute_self_intersections.md#ansys.meshing.prime.SurfaceDiagnosticSummaryParams.compute_self_intersections) | Control to identify face intersections are present or not. |
| [`SurfaceDiagnosticSummaryParams.scope`](ansys.meshing.prime.SurfaceDiagnosticSummaryParams.scope.md#ansys.meshing.prime.SurfaceDiagnosticSummaryParams.scope)                                                                | Scope the face zonelets for surface diagnostics.           |
<!-- vale on -->