# SearchByInvalidNormalsResults

<a id="ansys.meshing.prime.SearchByInvalidNormalsResults"></a>

### *class* ansys.meshing.prime.SearchByInvalidNormalsResults(model=None, n_found=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated with search invalid normals operation.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchByInvalidNormalsResults` object with default parameters.

  **n_found: int, optional**
  : Number of invalid normals identified.

  **error_code: ErrorCode, optional**
  : Error code associated with search invalid normals operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchByInvalidNormalsResults` object with provided parameters.

### Examples

```pycon
>>> search_by_invalid_normals_results = prime.SearchByInvalidNormalsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`SearchByInvalidNormalsResults.print_default`](ansys.meshing.prime.SearchByInvalidNormalsResults.print_default.md#ansys.meshing.prime.SearchByInvalidNormalsResults.print_default)()   | Print the default values of `SearchByInvalidNormalsResults` object.   |
| [`SearchByInvalidNormalsResults.set_default`](ansys.meshing.prime.SearchByInvalidNormalsResults.set_default.md#ansys.meshing.prime.SearchByInvalidNormalsResults.set_default)([...])    | Set the default values of the `SearchByInvalidNormalsResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`SearchByInvalidNormalsResults.error_code`](ansys.meshing.prime.SearchByInvalidNormalsResults.error_code.md#ansys.meshing.prime.SearchByInvalidNormalsResults.error_code)   | Error code associated with search invalid normals operation.   |
| [`SearchByInvalidNormalsResults.n_found`](ansys.meshing.prime.SearchByInvalidNormalsResults.n_found.md#ansys.meshing.prime.SearchByInvalidNormalsResults.n_found)            | Number of invalid normals identified.                          |
<!-- vale on -->