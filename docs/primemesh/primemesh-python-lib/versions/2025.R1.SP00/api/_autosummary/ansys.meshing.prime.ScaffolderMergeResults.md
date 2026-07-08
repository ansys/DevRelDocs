# ScaffolderMergeResults

<a id="ansys.meshing.prime.ScaffolderMergeResults"></a>

### *class* ansys.meshing.prime.ScaffolderMergeResults(model=None, n_merged=None, error_code=None, json_data=None, \*\*kwargs)

Result structure associated with merge overlapping topofaces and delete shadowed topofaces operations.

* **Parameters:**

  **model: Model**
  : Model to create a `ScaffolderMergeResults` object with default parameters.

  **n_merged: int, optional**
  : Number of merged topofaces.

  **error_code: ErrorCode, optional**
  : Error code associated with merge overlapping topofaces operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ScaffolderMergeResults` object with provided parameters.

### Examples

```pycon
>>> scaffolder_merge_results = prime.ScaffolderMergeResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`ScaffolderMergeResults.print_default`](ansys.meshing.prime.ScaffolderMergeResults.print_default.md#ansys.meshing.prime.ScaffolderMergeResults.print_default)()   | Print the default values of `ScaffolderMergeResults` object.   |
| [`ScaffolderMergeResults.set_default`](ansys.meshing.prime.ScaffolderMergeResults.set_default.md#ansys.meshing.prime.ScaffolderMergeResults.set_default)([...])    | Set the default values of the `ScaffolderMergeResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`ScaffolderMergeResults.error_code`](ansys.meshing.prime.ScaffolderMergeResults.error_code.md#ansys.meshing.prime.ScaffolderMergeResults.error_code)   | Error code associated with merge overlapping topofaces operation.   |
| [`ScaffolderMergeResults.n_merged`](ansys.meshing.prime.ScaffolderMergeResults.n_merged.md#ansys.meshing.prime.ScaffolderMergeResults.n_merged)         | Number of merged topofaces.                                         |
<!-- vale on -->