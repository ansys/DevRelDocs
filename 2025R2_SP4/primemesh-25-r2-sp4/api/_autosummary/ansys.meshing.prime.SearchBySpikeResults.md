# SearchBySpikeResults

<a id="ansys.meshing.prime.SearchBySpikeResults"></a>

### *class* ansys.meshing.prime.SearchBySpikeResults(model=None, n_found=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated with search spikes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchBySpikeResults` object with default parameters.

  **n_found: int, optional**
  : Number of spikes detected.

  **error_code: ErrorCode, optional**
  : Error code associated with search spikes operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchBySpikeResults` object with provided parameters.

### Examples

```pycon
>>> search_by_spike_results = prime.SearchBySpikeResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`SearchBySpikeResults.print_default`](ansys.meshing.prime.SearchBySpikeResults.print_default.md#ansys.meshing.prime.SearchBySpikeResults.print_default)()         | Print the default values of `SearchBySpikeResults` object.   |
| [`SearchBySpikeResults.set_default`](ansys.meshing.prime.SearchBySpikeResults.set_default.md#ansys.meshing.prime.SearchBySpikeResults.set_default)([n_found, ...]) | Set the default values of the `SearchBySpikeResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`SearchBySpikeResults.error_code`](ansys.meshing.prime.SearchBySpikeResults.error_code.md#ansys.meshing.prime.SearchBySpikeResults.error_code)   | Error code associated with search spikes operation.   |
| [`SearchBySpikeResults.n_found`](ansys.meshing.prime.SearchBySpikeResults.n_found.md#ansys.meshing.prime.SearchBySpikeResults.n_found)            | Number of spikes detected.                            |
<!-- vale on -->