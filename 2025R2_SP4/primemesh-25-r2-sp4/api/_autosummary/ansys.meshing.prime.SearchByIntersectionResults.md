# SearchByIntersectionResults

<a id="ansys.meshing.prime.SearchByIntersectionResults"></a>

### *class* ansys.meshing.prime.SearchByIntersectionResults(model=None, n_found=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with search by face element intersection (face elements interfering with each other).

* **Parameters:**

  **model: Model**
  : Model to create a `SearchByIntersectionResults` object with default parameters.

  **n_found: int, optional**
  : Number of face elements identified by intersection(face elements interfering with each other).

  **error_code: ErrorCode, optional**
  : Error code associated with search intersection operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchByIntersectionResults` object with provided parameters.

### Examples

```pycon
>>> search_by_intersection_results = prime.SearchByIntersectionResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`SearchByIntersectionResults.print_default`](ansys.meshing.prime.SearchByIntersectionResults.print_default.md#ansys.meshing.prime.SearchByIntersectionResults.print_default)()   | Print the default values of `SearchByIntersectionResults` object.   |
| [`SearchByIntersectionResults.set_default`](ansys.meshing.prime.SearchByIntersectionResults.set_default.md#ansys.meshing.prime.SearchByIntersectionResults.set_default)([...])    | Set the default values of the `SearchByIntersectionResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`SearchByIntersectionResults.error_code`](ansys.meshing.prime.SearchByIntersectionResults.error_code.md#ansys.meshing.prime.SearchByIntersectionResults.error_code)   | Error code associated with search intersection operation.                                      |
| [`SearchByIntersectionResults.n_found`](ansys.meshing.prime.SearchByIntersectionResults.n_found.md#ansys.meshing.prime.SearchByIntersectionResults.n_found)            | Number of face elements identified by intersection(face elements interfering with each other). |
<!-- vale on -->