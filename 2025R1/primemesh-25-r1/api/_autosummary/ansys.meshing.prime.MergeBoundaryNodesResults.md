# MergeBoundaryNodesResults

<a id="ansys.meshing.prime.MergeBoundaryNodesResults"></a>

### *class* ansys.meshing.prime.MergeBoundaryNodesResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with the merge nodes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `MergeBoundaryNodesResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error Code associated with failure of merge nodes operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergeBoundaryNodesResults` object with provided parameters.

### Examples

```pycon
>>> merge_boundary_nodes_results = prime.MergeBoundaryNodesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`MergeBoundaryNodesResults.print_default`](ansys.meshing.prime.MergeBoundaryNodesResults.print_default.md#ansys.meshing.prime.MergeBoundaryNodesResults.print_default)()   | Print the default values of `MergeBoundaryNodesResults` object.   |
| [`MergeBoundaryNodesResults.set_default`](ansys.meshing.prime.MergeBoundaryNodesResults.set_default.md#ansys.meshing.prime.MergeBoundaryNodesResults.set_default)([...])    | Set the default values of the `MergeBoundaryNodesResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`MergeBoundaryNodesResults.error_code`](ansys.meshing.prime.MergeBoundaryNodesResults.error_code.md#ansys.meshing.prime.MergeBoundaryNodesResults.error_code)   | Error Code associated with failure of merge nodes operation.   |
<!-- vale on -->