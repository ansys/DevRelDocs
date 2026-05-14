# CreateShellBLResults

<a id="ansys.meshing.prime.CreateShellBLResults"></a>

### *class* ansys.meshing.prime.CreateShellBLResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the ShellBL mesh.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateShellBLResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateShellBLResults` object with provided parameters.

### Examples

```pycon
>>> create_shell_blresults = prime.CreateShellBLResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`CreateShellBLResults.print_default`](ansys.meshing.prime.CreateShellBLResults.print_default.md#ansys.meshing.prime.CreateShellBLResults.print_default)()   | Print the default values of `CreateShellBLResults` object.   |
| [`CreateShellBLResults.set_default`](ansys.meshing.prime.CreateShellBLResults.set_default.md#ansys.meshing.prime.CreateShellBLResults.set_default)([...])    | Set the default values of the `CreateShellBLResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`CreateShellBLResults.error_code`](ansys.meshing.prime.CreateShellBLResults.error_code.md#ansys.meshing.prime.CreateShellBLResults.error_code)          | Error code associated with the failure of operation.   |
| [`CreateShellBLResults.warning_codes`](ansys.meshing.prime.CreateShellBLResults.warning_codes.md#ansys.meshing.prime.CreateShellBLResults.warning_codes) | Warning codes associated with the operation.           |
<!-- vale on -->