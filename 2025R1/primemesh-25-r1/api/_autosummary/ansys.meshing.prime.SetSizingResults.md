# SetSizingResults

<a id="ansys.meshing.prime.SetSizingResults"></a>

### *class* ansys.meshing.prime.SetSizingResults(model=None, warning_codes=None, error_code=None, json_data=None, \*\*kwargs)

Result associated with the different set sizing parameters.

* **Parameters:**

  **model: Model**
  : Model to create a `SetSizingResults` object with default parameters.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the set sizing parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the set sizing parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `SetSizingResults` object with provided parameters.

### Examples

```pycon
>>> set_sizing_results = prime.SetSizingResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`SetSizingResults.print_default`](ansys.meshing.prime.SetSizingResults.print_default.md#ansys.meshing.prime.SetSizingResults.print_default)()   | Print the default values of `SetSizingResults` object.   |
| [`SetSizingResults.set_default`](ansys.meshing.prime.SetSizingResults.set_default.md#ansys.meshing.prime.SetSizingResults.set_default)([...])    | Set the default values of the `SetSizingResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`SetSizingResults.error_code`](ansys.meshing.prime.SetSizingResults.error_code.md#ansys.meshing.prime.SetSizingResults.error_code)          | Error code associated with the set sizing parameters.    |
| [`SetSizingResults.warning_codes`](ansys.meshing.prime.SetSizingResults.warning_codes.md#ansys.meshing.prime.SetSizingResults.warning_codes) | Warning codes associated with the set sizing parameters. |
<!-- vale on -->