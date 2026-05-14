# ExtractFeatureResults

<a id="ansys.meshing.prime.ExtractFeatureResults"></a>

### *class* ansys.meshing.prime.ExtractFeatureResults(model=None, processing_time=None, error_code=None, new_edge_zonelets=None, json_data=None, \*\*kwargs)

Result of edge zonelet extraction by angle.

* **Parameters:**

  **model: Model**
  : Model to create a `ExtractFeatureResults` object with default parameters.

  **processing_time: float, optional**
  : Time taken for edge extraction.

  **error_code: ErrorCode, optional**
  : Error code returned by edge extraction function.

  **new_edge_zonelets: Iterable[int], optional**
  : Ids of new edge zonelets extracted.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExtractFeatureResults` object with provided parameters.

### Examples

```pycon
>>> extract_feature_results = prime.ExtractFeatureResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ExtractFeatureResults.print_default`](ansys.meshing.prime.ExtractFeatureResults.print_default.md#ansys.meshing.prime.ExtractFeatureResults.print_default)()   | Print the default values of `ExtractFeatureResults` object.   |
| [`ExtractFeatureResults.set_default`](ansys.meshing.prime.ExtractFeatureResults.set_default.md#ansys.meshing.prime.ExtractFeatureResults.set_default)([...])    | Set the default values of the `ExtractFeatureResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`ExtractFeatureResults.error_code`](ansys.meshing.prime.ExtractFeatureResults.error_code.md#ansys.meshing.prime.ExtractFeatureResults.error_code)                      | Error code returned by edge extraction function.   |
| [`ExtractFeatureResults.new_edge_zonelets`](ansys.meshing.prime.ExtractFeatureResults.new_edge_zonelets.md#ansys.meshing.prime.ExtractFeatureResults.new_edge_zonelets) | Ids of new edge zonelets extracted.                |
| [`ExtractFeatureResults.processing_time`](ansys.meshing.prime.ExtractFeatureResults.processing_time.md#ansys.meshing.prime.ExtractFeatureResults.processing_time)       | Time taken for edge extraction.                    |
<!-- vale on -->