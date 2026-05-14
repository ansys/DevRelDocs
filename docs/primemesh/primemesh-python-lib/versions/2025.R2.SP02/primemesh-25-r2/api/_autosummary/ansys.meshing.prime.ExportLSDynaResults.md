# ExportLSDynaResults

<a id="ansys.meshing.prime.ExportLSDynaResults"></a>

### *class* ansys.meshing.prime.ExportLSDynaResults(model=None, summary_log=None, zone_mesh_results=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the LS-DYNA export.

* **Parameters:**

  **model: Model**
  : Model to create a `ExportLSDynaResults` object with default parameters.

  **summary_log: str, optional**
  : Summary log for the import operation in json format.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **zone_mesh_results: List[ZoneMeshResult], optional**
  : Zone-wise mesh information for elements in the exported model.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportLSDynaResults` object with provided parameters.

### Examples

```pycon
>>> export_lsdyna_results = prime.ExportLSDynaResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`ExportLSDynaResults.print_default`](ansys.meshing.prime.ExportLSDynaResults.print_default.md#ansys.meshing.prime.ExportLSDynaResults.print_default)()   | Print the default values of `ExportLSDynaResults` object.   |
| [`ExportLSDynaResults.set_default`](ansys.meshing.prime.ExportLSDynaResults.set_default.md#ansys.meshing.prime.ExportLSDynaResults.set_default)([...])    | Set the default values of the `ExportLSDynaResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`ExportLSDynaResults.error_code`](ansys.meshing.prime.ExportLSDynaResults.error_code.md#ansys.meshing.prime.ExportLSDynaResults.error_code)                      | Error code associated with failure of operation.               |
| [`ExportLSDynaResults.summary_log`](ansys.meshing.prime.ExportLSDynaResults.summary_log.md#ansys.meshing.prime.ExportLSDynaResults.summary_log)                   | Summary log for the import operation in json format.           |
| [`ExportLSDynaResults.warning_codes`](ansys.meshing.prime.ExportLSDynaResults.warning_codes.md#ansys.meshing.prime.ExportLSDynaResults.warning_codes)             | Warning codes associated with the operation.                   |
| [`ExportLSDynaResults.zone_mesh_results`](ansys.meshing.prime.ExportLSDynaResults.zone_mesh_results.md#ansys.meshing.prime.ExportLSDynaResults.zone_mesh_results) | Zone-wise mesh information for elements in the exported model. |
<!-- vale on -->