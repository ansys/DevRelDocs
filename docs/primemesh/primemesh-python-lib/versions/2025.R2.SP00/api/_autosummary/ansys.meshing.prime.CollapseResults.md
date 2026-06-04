# CollapseResults

<a id="ansys.meshing.prime.CollapseResults"></a>

### *class* ansys.meshing.prime.CollapseResults(model=None, error_code=None, n_collapsed=None, n_splits=None, json_data=None, \*\*kwargs)

Results associated with collapse face elements.

* **Parameters:**

  **model: Model**
  : Model to create a `CollapseResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **n_collapsed: int, optional**
  : Number of face elements collapsed.

  **n_splits: int, optional**
  : Number of face elements split.

  **json_data: dict, optional**
  : JSON dictionary to create a `CollapseResults` object with provided parameters.

### Examples

```pycon
>>> collapse_results = prime.CollapseResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`CollapseResults.print_default`](ansys.meshing.prime.CollapseResults.print_default.md#ansys.meshing.prime.CollapseResults.print_default)()            | Print the default values of `CollapseResults` object.   |
| [`CollapseResults.set_default`](ansys.meshing.prime.CollapseResults.set_default.md#ansys.meshing.prime.CollapseResults.set_default)([error_code, ...]) | Set the default values of the `CollapseResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`CollapseResults.error_code`](ansys.meshing.prime.CollapseResults.error_code.md#ansys.meshing.prime.CollapseResults.error_code)    | Error code associated with the failure of operation.   |
| [`CollapseResults.n_collapsed`](ansys.meshing.prime.CollapseResults.n_collapsed.md#ansys.meshing.prime.CollapseResults.n_collapsed) | Number of face elements collapsed.                     |
| [`CollapseResults.n_splits`](ansys.meshing.prime.CollapseResults.n_splits.md#ansys.meshing.prime.CollapseResults.n_splits)          | Number of face elements split.                         |
<!-- vale on -->