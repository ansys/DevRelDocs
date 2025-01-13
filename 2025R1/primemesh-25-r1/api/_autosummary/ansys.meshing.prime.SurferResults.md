# SurferResults

<a id="ansys.meshing.prime.SurferResults"></a>

### *class* ansys.meshing.prime.SurferResults(model=None, error_code=None, topofaces_not_projected_on_geometry=None, json_data=None, \*\*kwargs)

Results associated with the surface mesh.

* **Parameters:**
  **model: Model**
  : Model to create a `SurferResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **topofaces_not_projected_on_geometry: Iterable[int], optional**
  : Ids of topofaces projected to facets instead of CAD geometry, when projectOnGeometry is enabled.

  **json_data: dict, optional**
  : JSON dictionary to create a `SurferResults` object with provided parameters.

### Examples

```pycon
>>> surfer_results = prime.SurferResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`SurferResults.print_default`](ansys.meshing.prime.SurferResults.print_default.md#ansys.meshing.prime.SurferResults.print_default)()            | Print the default values of `SurferResults` object.   |
| [`SurferResults.set_default`](ansys.meshing.prime.SurferResults.set_default.md#ansys.meshing.prime.SurferResults.set_default)([error_code, ...]) | Set the default values of the `SurferResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`SurferResults.error_code`](ansys.meshing.prime.SurferResults.error_code.md#ansys.meshing.prime.SurferResults.error_code)                                                                            | Error code associated with the failure of operation.                                             |
| [`SurferResults.topofaces_not_projected_on_geometry`](ansys.meshing.prime.SurferResults.topofaces_not_projected_on_geometry.md#ansys.meshing.prime.SurferResults.topofaces_not_projected_on_geometry) | Ids of topofaces projected to facets instead of CAD geometry, when projectOnGeometry is enabled. |

<a id="examples-using-surferresults"></a>

## Examples using SurferResults

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
