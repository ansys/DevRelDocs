# FixInvalidNormalNodeResults

<a id="ansys.meshing.prime.FixInvalidNormalNodeResults"></a>

### *class* ansys.meshing.prime.FixInvalidNormalNodeResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with fix invalid average face normal at nodes.

* **Parameters:**

  **model: Model**
  : Model to create a `FixInvalidNormalNodeResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `FixInvalidNormalNodeResults` object with provided parameters.

### Examples

```pycon
>>> fix_invalid_normal_node_results = prime.FixInvalidNormalNodeResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`FixInvalidNormalNodeResults.print_default`](ansys.meshing.prime.FixInvalidNormalNodeResults.print_default.md#ansys.meshing.prime.FixInvalidNormalNodeResults.print_default)()   | Print the default values of `FixInvalidNormalNodeResults` object.   |
| [`FixInvalidNormalNodeResults.set_default`](ansys.meshing.prime.FixInvalidNormalNodeResults.set_default.md#ansys.meshing.prime.FixInvalidNormalNodeResults.set_default)([...])    | Set the default values of the `FixInvalidNormalNodeResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`FixInvalidNormalNodeResults.error_code`](ansys.meshing.prime.FixInvalidNormalNodeResults.error_code.md#ansys.meshing.prime.FixInvalidNormalNodeResults.error_code)   | Error code associated with failure of operation.   |
<!-- vale on -->