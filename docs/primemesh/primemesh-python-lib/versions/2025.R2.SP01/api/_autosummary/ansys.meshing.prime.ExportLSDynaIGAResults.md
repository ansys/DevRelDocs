# ExportLSDynaIGAResults

<a id="ansys.meshing.prime.ExportLSDynaIGAResults"></a>

### *class* ansys.meshing.prime.ExportLSDynaIGAResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the LS-DYNA export.

* **Parameters:**

  **model: Model**
  : Model to create a `ExportLSDynaIGAResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportLSDynaIGAResults` object with provided parameters.

### Examples

```pycon
>>> export_lsdyna_igaesults = prime.ExportLSDynaIGAResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`ExportLSDynaIGAResults.print_default`](ansys.meshing.prime.ExportLSDynaIGAResults.print_default.md#ansys.meshing.prime.ExportLSDynaIGAResults.print_default)()   | Print the default values of `ExportLSDynaIGAResults` object.   |
| [`ExportLSDynaIGAResults.set_default`](ansys.meshing.prime.ExportLSDynaIGAResults.set_default.md#ansys.meshing.prime.ExportLSDynaIGAResults.set_default)([...])    | Set the default values of the `ExportLSDynaIGAResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`ExportLSDynaIGAResults.error_code`](ansys.meshing.prime.ExportLSDynaIGAResults.error_code.md#ansys.meshing.prime.ExportLSDynaIGAResults.error_code)          | Error code associated with failure of operation.   |
| [`ExportLSDynaIGAResults.warning_codes`](ansys.meshing.prime.ExportLSDynaIGAResults.warning_codes.md#ansys.meshing.prime.ExportLSDynaIGAResults.warning_codes) | Warning codes associated with the operation.       |
<!-- vale on -->