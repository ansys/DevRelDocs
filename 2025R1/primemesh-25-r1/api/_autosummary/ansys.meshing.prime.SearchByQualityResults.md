# SearchByQualityResults

<a id="ansys.meshing.prime.SearchByQualityResults"></a>

### *class* ansys.meshing.prime.SearchByQualityResults(model=None, n_found=None, error_code=None, max_quality=None, min_quality=None, json_data=None, \*\*kwargs)

Results of search by quality.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchByQualityResults` object with default parameters.

  **n_found: int, optional**
  : Number of face elements found by search for given quality limit.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **max_quality: float, optional**
  : Maximum quality found by search.

  **min_quality: float, optional**
  : Minimum quality found by search.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchByQualityResults` object with provided parameters.

### Examples

```pycon
>>> search_by_quality_results = prime.SearchByQualityResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`SearchByQualityResults.print_default`](ansys.meshing.prime.SearchByQualityResults.print_default.md#ansys.meshing.prime.SearchByQualityResults.print_default)()   | Print the default values of `SearchByQualityResults` object.   |
| [`SearchByQualityResults.set_default`](ansys.meshing.prime.SearchByQualityResults.set_default.md#ansys.meshing.prime.SearchByQualityResults.set_default)([...])    | Set the default values of the `SearchByQualityResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`SearchByQualityResults.error_code`](ansys.meshing.prime.SearchByQualityResults.error_code.md#ansys.meshing.prime.SearchByQualityResults.error_code)    | Error code associated with failure of operation.                 |
| [`SearchByQualityResults.max_quality`](ansys.meshing.prime.SearchByQualityResults.max_quality.md#ansys.meshing.prime.SearchByQualityResults.max_quality) | Maximum quality found by search.                                 |
| [`SearchByQualityResults.min_quality`](ansys.meshing.prime.SearchByQualityResults.min_quality.md#ansys.meshing.prime.SearchByQualityResults.min_quality) | Minimum quality found by search.                                 |
| [`SearchByQualityResults.n_found`](ansys.meshing.prime.SearchByQualityResults.n_found.md#ansys.meshing.prime.SearchByQualityResults.n_found)             | Number of face elements found by search for given quality limit. |
<!-- vale on -->