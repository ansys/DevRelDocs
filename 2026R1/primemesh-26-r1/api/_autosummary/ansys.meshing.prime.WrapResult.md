# WrapResult

<a id="ansys.meshing.prime.WrapResult"></a>

### *class* ansys.meshing.prime.WrapResult(model=None, warning_codes=None, error_code=None, id=None, name=None, json_data=None, \*\*kwargs)

Result structure associated to Wrap operation.

* **Parameters:**

  **model: Model**
  : Model to create a `WrapResult` object with default parameters.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the wrap operation.

  **error_code: ErrorCode, optional**
  : Error code associated with a wrap operation.

  **id: int, optional**
  : Id of the wrapper part created.

  **name: str, optional**
  : Name of wrapper part created.

  **json_data: dict, optional**
  : JSON dictionary to create a `WrapResult` object with provided parameters.

### Examples

```pycon
>>> wrap_result = prime.WrapResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`WrapResult.print_default`](ansys.meshing.prime.WrapResult.print_default.md#ansys.meshing.prime.WrapResult.print_default)()               | Print the default values of `WrapResult` object.   |
| [`WrapResult.set_default`](ansys.meshing.prime.WrapResult.set_default.md#ansys.meshing.prime.WrapResult.set_default)([warning_codes, ...]) | Set the default values of the `WrapResult` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`WrapResult.error_code`](ansys.meshing.prime.WrapResult.error_code.md#ansys.meshing.prime.WrapResult.error_code)          | Error code associated with a wrap operation.      |
| [`WrapResult.id`](ansys.meshing.prime.WrapResult.id.md#ansys.meshing.prime.WrapResult.id)                                  | Id of the wrapper part created.                   |
| [`WrapResult.name`](ansys.meshing.prime.WrapResult.name.md#ansys.meshing.prime.WrapResult.name)                            | Name of wrapper part created.                     |
| [`WrapResult.warning_codes`](ansys.meshing.prime.WrapResult.warning_codes.md#ansys.meshing.prime.WrapResult.warning_codes) | Warning codes associated with the wrap operation. |
<!-- vale on -->