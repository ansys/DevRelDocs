# OverlapSearchResults

<a id="ansys.meshing.prime.OverlapSearchResults"></a>

### *class* ansys.meshing.prime.OverlapSearchResults(model=None, n_pairs=None, overlap_pairs=None, error_code=None, json_data=None, \*\*kwargs)

Provides ids of a pair of overlapping face zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `OverlapSearchResults` object with default parameters.

  **n_pairs: int, optional**
  : Number of pairs.

  **overlap_pairs: List[OverlapPairs], optional**
  : Ids corresponding to pairs of overlapping face zonelets.

  **error_code: ErrorCode, optional**
  : Error Code associated with failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `OverlapSearchResults` object with provided parameters.

### Examples

```pycon
>>> overlap_search_results = prime.OverlapSearchResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`OverlapSearchResults.print_default`](ansys.meshing.prime.OverlapSearchResults.print_default.md#ansys.meshing.prime.OverlapSearchResults.print_default)()         | Print the default values of `OverlapSearchResults` object.   |
| [`OverlapSearchResults.set_default`](ansys.meshing.prime.OverlapSearchResults.set_default.md#ansys.meshing.prime.OverlapSearchResults.set_default)([n_pairs, ...]) | Set the default values of the `OverlapSearchResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`OverlapSearchResults.error_code`](ansys.meshing.prime.OverlapSearchResults.error_code.md#ansys.meshing.prime.OverlapSearchResults.error_code)          | Error Code associated with failure of operation.         |
| [`OverlapSearchResults.n_pairs`](ansys.meshing.prime.OverlapSearchResults.n_pairs.md#ansys.meshing.prime.OverlapSearchResults.n_pairs)                   | Number of pairs.                                         |
| [`OverlapSearchResults.overlap_pairs`](ansys.meshing.prime.OverlapSearchResults.overlap_pairs.md#ansys.meshing.prime.OverlapSearchResults.overlap_pairs) | Ids corresponding to pairs of overlapping face zonelets. |
<!-- vale on -->