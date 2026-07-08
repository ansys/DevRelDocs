# ExportMapdlCdbResults

<a id="ansys.meshing.prime.ExportMapdlCdbResults"></a>

### *class* ansys.meshing.prime.ExportMapdlCdbResults(model=None, summary_log=None, zone_mesh_results=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the MAPDL CDB export.

* **Parameters:**

  **model: Model**
  : Model to create a `ExportMapdlCdbResults` object with default parameters.

  **summary_log: str, optional**
  : Summary log for the export operation in json format.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **zone_mesh_results: List[ZoneMeshResult], optional**
  : Zone-wise mesh information for elements in the exported model.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportMapdlCdbResults` object with provided parameters.

### Examples

```pycon
>>> export_mapdl_cdb_results = prime.ExportMapdlCdbResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ExportMapdlCdbResults.print_default`](ansys.meshing.prime.ExportMapdlCdbResults.print_default.md#ansys.meshing.prime.ExportMapdlCdbResults.print_default)()   | Print the default values of `ExportMapdlCdbResults` object.   |
| [`ExportMapdlCdbResults.set_default`](ansys.meshing.prime.ExportMapdlCdbResults.set_default.md#ansys.meshing.prime.ExportMapdlCdbResults.set_default)([...])    | Set the default values of the `ExportMapdlCdbResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`ExportMapdlCdbResults.error_code`](ansys.meshing.prime.ExportMapdlCdbResults.error_code.md#ansys.meshing.prime.ExportMapdlCdbResults.error_code)                      | Error code associated with failure of operation.               |
| [`ExportMapdlCdbResults.summary_log`](ansys.meshing.prime.ExportMapdlCdbResults.summary_log.md#ansys.meshing.prime.ExportMapdlCdbResults.summary_log)                   | Summary log for the export operation in json format.           |
| [`ExportMapdlCdbResults.warning_codes`](ansys.meshing.prime.ExportMapdlCdbResults.warning_codes.md#ansys.meshing.prime.ExportMapdlCdbResults.warning_codes)             | Warning codes associated with the operation.                   |
| [`ExportMapdlCdbResults.zone_mesh_results`](ansys.meshing.prime.ExportMapdlCdbResults.zone_mesh_results.md#ansys.meshing.prime.ExportMapdlCdbResults.zone_mesh_results) | Zone-wise mesh information for elements in the exported model. |
<!-- vale on -->