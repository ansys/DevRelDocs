# SearchByFoldsResults

<a id="ansys.meshing.prime.SearchByFoldsResults"></a>

### *class* ansys.meshing.prime.SearchByFoldsResults(model=None, n_found=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated with search folds operation.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchByFoldsResults` object with default parameters.

  **n_found: int, optional**
  : Number of folds identified.

  **error_code: ErrorCode, optional**
  : Error code associated with search folds operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchByFoldsResults` object with provided parameters.

### Examples

```pycon
>>> search_by_folds_results = prime.SearchByFoldsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`SearchByFoldsResults.print_default`](ansys.meshing.prime.SearchByFoldsResults.print_default.md#ansys.meshing.prime.SearchByFoldsResults.print_default)()         | Print the default values of `SearchByFoldsResults` object.   |
| [`SearchByFoldsResults.set_default`](ansys.meshing.prime.SearchByFoldsResults.set_default.md#ansys.meshing.prime.SearchByFoldsResults.set_default)([n_found, ...]) | Set the default values of the `SearchByFoldsResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`SearchByFoldsResults.error_code`](ansys.meshing.prime.SearchByFoldsResults.error_code.md#ansys.meshing.prime.SearchByFoldsResults.error_code)   | Error code associated with search folds operation.   |
| [`SearchByFoldsResults.n_found`](ansys.meshing.prime.SearchByFoldsResults.n_found.md#ansys.meshing.prime.SearchByFoldsResults.n_found)            | Number of folds identified.                          |
<!-- vale on -->