# ImportAbaqusResults

<a id="ansys.meshing.prime.ImportAbaqusResults"></a>

### *class* ansys.meshing.prime.ImportAbaqusResults(model=None, summary_log=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results of Abaqus import operation.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportAbaqusResults` object with default parameters.

  **summary_log: str, optional**
  : Summary log for the import operation in json format.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with Abaqus import operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportAbaqusResults` object with provided parameters.

### Examples

```pycon
>>> import_abaqus_results = prime.ImportAbaqusResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`ImportAbaqusResults.print_default`](ansys.meshing.prime.ImportAbaqusResults.print_default.md#ansys.meshing.prime.ImportAbaqusResults.print_default)()   | Print the default values of `ImportAbaqusResults` object.   |
| [`ImportAbaqusResults.set_default`](ansys.meshing.prime.ImportAbaqusResults.set_default.md#ansys.meshing.prime.ImportAbaqusResults.set_default)([...])    | Set the default values of the `ImportAbaqusResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`ImportAbaqusResults.error_code`](ansys.meshing.prime.ImportAbaqusResults.error_code.md#ansys.meshing.prime.ImportAbaqusResults.error_code)          | Error code associated with failure of operation.       |
| [`ImportAbaqusResults.summary_log`](ansys.meshing.prime.ImportAbaqusResults.summary_log.md#ansys.meshing.prime.ImportAbaqusResults.summary_log)       | Summary log for the import operation in json format.   |
| [`ImportAbaqusResults.warning_codes`](ansys.meshing.prime.ImportAbaqusResults.warning_codes.md#ansys.meshing.prime.ImportAbaqusResults.warning_codes) | Warning codes associated with Abaqus import operation. |
<!-- vale on -->