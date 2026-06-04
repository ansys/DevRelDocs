# RemoveLabelResults

<a id="ansys.meshing.prime.RemoveLabelResults"></a>

### *class* ansys.meshing.prime.RemoveLabelResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with the remove label operation.

* **Parameters:**

  **model: Model**
  : Model to create a `RemoveLabelResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the remove label operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `RemoveLabelResults` object with provided parameters.

### Examples

```pycon
>>> remove_label_results = prime.RemoveLabelResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`RemoveLabelResults.print_default`](ansys.meshing.prime.RemoveLabelResults.print_default.md#ansys.meshing.prime.RemoveLabelResults.print_default)()       | Print the default values of `RemoveLabelResults` object.   |
| [`RemoveLabelResults.set_default`](ansys.meshing.prime.RemoveLabelResults.set_default.md#ansys.meshing.prime.RemoveLabelResults.set_default)([error_code]) | Set the default values of the `RemoveLabelResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`RemoveLabelResults.error_code`](ansys.meshing.prime.RemoveLabelResults.error_code.md#ansys.meshing.prime.RemoveLabelResults.error_code)   | Error code associated with the remove label operation.   |
<!-- vale on -->