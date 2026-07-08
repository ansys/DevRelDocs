# DeleteUnwettedResult

<a id="ansys.meshing.prime.DeleteUnwettedResult"></a>

### *class* ansys.meshing.prime.DeleteUnwettedResult(model=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated with delete unwetted surfaces operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteUnwettedResult` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with delete unwetted surfaces operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteUnwettedResult` object with provided parameters.

### Examples

```pycon
>>> delete_unwetted_result = prime.DeleteUnwettedResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`DeleteUnwettedResult.print_default`](ansys.meshing.prime.DeleteUnwettedResult.print_default.md#ansys.meshing.prime.DeleteUnwettedResult.print_default)()       | Print the default values of `DeleteUnwettedResult` object.   |
| [`DeleteUnwettedResult.set_default`](ansys.meshing.prime.DeleteUnwettedResult.set_default.md#ansys.meshing.prime.DeleteUnwettedResult.set_default)([error_code]) | Set the default values of the `DeleteUnwettedResult` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`DeleteUnwettedResult.error_code`](ansys.meshing.prime.DeleteUnwettedResult.error_code.md#ansys.meshing.prime.DeleteUnwettedResult.error_code)   | Error code associated with delete unwetted surfaces operation.   |
<!-- vale on -->