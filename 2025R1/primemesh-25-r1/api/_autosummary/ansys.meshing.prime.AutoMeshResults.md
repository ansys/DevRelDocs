# AutoMeshResults

<a id="ansys.meshing.prime.AutoMeshResults"></a>

### *class* ansys.meshing.prime.AutoMeshResults(model=None, error_code=None, warning_codes=None, error_locations=None, json_data=None, \*\*kwargs)

Results of volume meshing.

* **Parameters:**
  **model: Model**
  : Model to create a `AutoMeshResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Provides error message when automesh fails.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the operation.

  **error_locations: Iterable[float], optional**
  : Error location coordinates returned when automesh fails.

  **json_data: dict, optional**
  : JSON dictionary to create a `AutoMeshResults` object with provided parameters.

### Examples

```pycon
>>> auto_mesh_results = prime.AutoMeshResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Name | Description |
| [`AutoMeshResults.print_default`](ansys.meshing.prime.AutoMeshResults.print_default.md#ansys.meshing.prime.AutoMeshResults.print_default)()            | Print the default values of `AutoMeshResults` object.   |
| [`AutoMeshResults.set_default`](ansys.meshing.prime.AutoMeshResults.set_default.md#ansys.meshing.prime.AutoMeshResults.set_default)([error_code, ...]) | Set the default values of the `AutoMeshResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Name | Description |
| [`AutoMeshResults.error_code`](ansys.meshing.prime.AutoMeshResults.error_code.md#ansys.meshing.prime.AutoMeshResults.error_code)                | Provides error message when automesh fails.              |
| [`AutoMeshResults.error_locations`](ansys.meshing.prime.AutoMeshResults.error_locations.md#ansys.meshing.prime.AutoMeshResults.error_locations) | Error location coordinates returned when automesh fails. |
| [`AutoMeshResults.warning_codes`](ansys.meshing.prime.AutoMeshResults.warning_codes.md#ansys.meshing.prime.AutoMeshResults.warning_codes)       | Warning codes associated with the operation.             |

<a id="examples-using-automeshresults"></a>

## Examples using AutoMeshResults

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
