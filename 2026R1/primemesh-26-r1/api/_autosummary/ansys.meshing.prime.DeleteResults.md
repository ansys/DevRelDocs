# DeleteResults

<a id="ansys.meshing.prime.DeleteResults"></a>

### *class* ansys.meshing.prime.DeleteResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with the deletion of items.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteResults` object with provided parameters.

### Examples

```pycon
>>> delete_results = prime.DeleteResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`DeleteResults.print_default`](ansys.meshing.prime.DeleteResults.print_default.md#ansys.meshing.prime.DeleteResults.print_default)()       | Print the default values of `DeleteResults` object.   |
| [`DeleteResults.set_default`](ansys.meshing.prime.DeleteResults.set_default.md#ansys.meshing.prime.DeleteResults.set_default)([error_code]) | Set the default values of the `DeleteResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`DeleteResults.error_code`](ansys.meshing.prime.DeleteResults.error_code.md#ansys.meshing.prime.DeleteResults.error_code)   | Error code associated with the failure of operation.   |
<!-- vale on -->