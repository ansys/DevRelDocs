<!-- vale off -->

<a id="connectresults"></a>

# ConnectResults

<a id="ansys.meshing.prime.ConnectResults"></a>

### *class* ansys.meshing.prime.ConnectResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the connection operations.

* **Parameters:**

  **model: Model**
  : Model to create a `ConnectResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error Code associated with failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ConnectResults` object with provided parameters.

### Examples

```pycon
>>> connect_results = prime.ConnectResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`ConnectResults.print_default`](ansys.meshing.prime.ConnectResults.print_default.md#ansys.meshing.prime.ConnectResults.print_default)()            | Print the default values of `ConnectResults` object.   |
| [`ConnectResults.set_default`](ansys.meshing.prime.ConnectResults.set_default.md#ansys.meshing.prime.ConnectResults.set_default)([error_code, ...]) | Set the default values of the `ConnectResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`ConnectResults.error_code`](ansys.meshing.prime.ConnectResults.error_code.md#ansys.meshing.prime.ConnectResults.error_code)          | Error Code associated with failure of operation.   |
| [`ConnectResults.warning_codes`](ansys.meshing.prime.ConnectResults.warning_codes.md#ansys.meshing.prime.ConnectResults.warning_codes) | Warning codes associated with the operation.       |
<!-- vale on -->