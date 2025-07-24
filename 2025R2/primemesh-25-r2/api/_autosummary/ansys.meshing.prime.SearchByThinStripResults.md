# SearchByThinStripResults

<a id="ansys.meshing.prime.SearchByThinStripResults"></a>

### *class* ansys.meshing.prime.SearchByThinStripResults(model=None, n_found=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with search by thin strip of face elements.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchByThinStripResults` object with default parameters.

  **n_found: int, optional**
  : Number of face elements identified as thin strips.

  **error_code: ErrorCode, optional**
  : Error code associated with search thin strips operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchByThinStripResults` object with provided parameters.

### Examples

```pycon
>>> search_by_thin_strip_results = prime.SearchByThinStripResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`SearchByThinStripResults.print_default`](ansys.meshing.prime.SearchByThinStripResults.print_default.md#ansys.meshing.prime.SearchByThinStripResults.print_default)()   | Print the default values of `SearchByThinStripResults` object.   |
| [`SearchByThinStripResults.set_default`](ansys.meshing.prime.SearchByThinStripResults.set_default.md#ansys.meshing.prime.SearchByThinStripResults.set_default)([...])    | Set the default values of the `SearchByThinStripResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`SearchByThinStripResults.error_code`](ansys.meshing.prime.SearchByThinStripResults.error_code.md#ansys.meshing.prime.SearchByThinStripResults.error_code)   | Error code associated with search thin strips operation.   |
| [`SearchByThinStripResults.n_found`](ansys.meshing.prime.SearchByThinStripResults.n_found.md#ansys.meshing.prime.SearchByThinStripResults.n_found)            | Number of face elements identified as thin strips.         |
<!-- vale on -->