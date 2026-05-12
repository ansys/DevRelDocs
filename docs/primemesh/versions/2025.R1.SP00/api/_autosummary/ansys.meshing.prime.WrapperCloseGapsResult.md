# WrapperCloseGapsResult

<a id="ansys.meshing.prime.WrapperCloseGapsResult"></a>

### *class* ansys.meshing.prime.WrapperCloseGapsResult(model=None, error_code=None, part_id=None, json_data=None, \*\*kwargs)

Result structure associated with close gaps operation.

* **Parameters:**

  **model: Model**
  : Model to create a `WrapperCloseGapsResult` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with a close gaps operation.

  **part_id: int, optional**
  : Id of part created with gap cover patches.

  **json_data: dict, optional**
  : JSON dictionary to create a `WrapperCloseGapsResult` object with provided parameters.

### Examples

```pycon
>>> wrapper_close_gaps_result = prime.WrapperCloseGapsResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`WrapperCloseGapsResult.print_default`](ansys.meshing.prime.WrapperCloseGapsResult.print_default.md#ansys.meshing.prime.WrapperCloseGapsResult.print_default)()   | Print the default values of `WrapperCloseGapsResult` object.   |
| [`WrapperCloseGapsResult.set_default`](ansys.meshing.prime.WrapperCloseGapsResult.set_default.md#ansys.meshing.prime.WrapperCloseGapsResult.set_default)([...])    | Set the default values of the `WrapperCloseGapsResult` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`WrapperCloseGapsResult.error_code`](ansys.meshing.prime.WrapperCloseGapsResult.error_code.md#ansys.meshing.prime.WrapperCloseGapsResult.error_code)   | Error code associated with a close gaps operation.   |
| [`WrapperCloseGapsResult.part_id`](ansys.meshing.prime.WrapperCloseGapsResult.part_id.md#ansys.meshing.prime.WrapperCloseGapsResult.part_id)            | Id of part created with gap cover patches.           |
<!-- vale on -->