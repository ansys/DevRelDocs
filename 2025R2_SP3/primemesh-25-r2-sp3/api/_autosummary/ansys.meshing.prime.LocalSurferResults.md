# LocalSurferResults

<a id="ansys.meshing.prime.LocalSurferResults"></a>

### *class* ansys.meshing.prime.LocalSurferResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the local surface mesh.

* **Parameters:**

  **model: Model**
  : Model to create a `LocalSurferResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `LocalSurferResults` object with provided parameters.

### Examples

```pycon
>>> local_surfer_results = prime.LocalSurferResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`LocalSurferResults.print_default`](ansys.meshing.prime.LocalSurferResults.print_default.md#ansys.meshing.prime.LocalSurferResults.print_default)()            | Print the default values of `LocalSurferResults` object.   |
| [`LocalSurferResults.set_default`](ansys.meshing.prime.LocalSurferResults.set_default.md#ansys.meshing.prime.LocalSurferResults.set_default)([error_code, ...]) | Set the default values of the `LocalSurferResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`LocalSurferResults.error_code`](ansys.meshing.prime.LocalSurferResults.error_code.md#ansys.meshing.prime.LocalSurferResults.error_code)          | Error code associated with the failure of operation.   |
| [`LocalSurferResults.warning_codes`](ansys.meshing.prime.LocalSurferResults.warning_codes.md#ansys.meshing.prime.LocalSurferResults.warning_codes) | Warning codes associated with the operation.           |
<!-- vale on -->