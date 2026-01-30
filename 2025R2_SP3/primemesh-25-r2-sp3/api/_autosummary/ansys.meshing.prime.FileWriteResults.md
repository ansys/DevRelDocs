# FileWriteResults

<a id="ansys.meshing.prime.FileWriteResults"></a>

### *class* ansys.meshing.prime.FileWriteResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results of file write operation.

* **Parameters:**

  **model: Model**
  : Model to create a `FileWriteResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code if file write operation is unsuccessful.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the file write operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `FileWriteResults` object with provided parameters.

### Examples

```pycon
>>> file_write_results = prime.FileWriteResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`FileWriteResults.print_default`](ansys.meshing.prime.FileWriteResults.print_default.md#ansys.meshing.prime.FileWriteResults.print_default)()            | Print the default values of `FileWriteResults` object.   |
| [`FileWriteResults.set_default`](ansys.meshing.prime.FileWriteResults.set_default.md#ansys.meshing.prime.FileWriteResults.set_default)([error_code, ...]) | Set the default values of the `FileWriteResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`FileWriteResults.error_code`](ansys.meshing.prime.FileWriteResults.error_code.md#ansys.meshing.prime.FileWriteResults.error_code)          | Error code if file write operation is unsuccessful.     |
| [`FileWriteResults.warning_codes`](ansys.meshing.prime.FileWriteResults.warning_codes.md#ansys.meshing.prime.FileWriteResults.warning_codes) | Warning codes associated with the file write operation. |
<!-- vale on -->