# ImportMapdlCdbResults

<a id="ansys.meshing.prime.ImportMapdlCdbResults"></a>

### *class* ansys.meshing.prime.ImportMapdlCdbResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the MAPDL CDB import.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportMapdlCdbResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportMapdlCdbResults` object with provided parameters.

### Examples

```pycon
>>> import_mapdl_cdb_results = prime.ImportMapdlCdbResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ImportMapdlCdbResults.print_default`](ansys.meshing.prime.ImportMapdlCdbResults.print_default.md#ansys.meshing.prime.ImportMapdlCdbResults.print_default)()   | Print the default values of `ImportMapdlCdbResults` object.   |
| [`ImportMapdlCdbResults.set_default`](ansys.meshing.prime.ImportMapdlCdbResults.set_default.md#ansys.meshing.prime.ImportMapdlCdbResults.set_default)([...])    | Set the default values of the `ImportMapdlCdbResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`ImportMapdlCdbResults.error_code`](ansys.meshing.prime.ImportMapdlCdbResults.error_code.md#ansys.meshing.prime.ImportMapdlCdbResults.error_code)          | Error code associated with failure of operation.   |
| [`ImportMapdlCdbResults.warning_codes`](ansys.meshing.prime.ImportMapdlCdbResults.warning_codes.md#ansys.meshing.prime.ImportMapdlCdbResults.warning_codes) | Warning codes associated with the operation.       |
<!-- vale on -->