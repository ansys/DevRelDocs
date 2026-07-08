# SetParamsResults

<a id="ansys.meshing.prime.SetParamsResults"></a>

### *class* ansys.meshing.prime.SetParamsResults(model=None, error_code=None, warning_code=None, json_data=None, \*\*kwargs)

Results associated with the set parameters operation.

* **Parameters:**

  **model: Model**
  : Model to create a `SetParamsResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the set parameters operation.

  **warning_code: WarningCode, optional**
  : Warning code associated with the set parameters operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SetParamsResults` object with provided parameters.

### Examples

```pycon
>>> set_params_results = prime.SetParamsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`SetParamsResults.print_default`](ansys.meshing.prime.SetParamsResults.print_default.md#ansys.meshing.prime.SetParamsResults.print_default)()            | Print the default values of `SetParamsResults` object.   |
| [`SetParamsResults.set_default`](ansys.meshing.prime.SetParamsResults.set_default.md#ansys.meshing.prime.SetParamsResults.set_default)([error_code, ...]) | Set the default values of the `SetParamsResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`SetParamsResults.error_code`](ansys.meshing.prime.SetParamsResults.error_code.md#ansys.meshing.prime.SetParamsResults.error_code)       | Error code associated with the set parameters operation.   |
| [`SetParamsResults.warning_code`](ansys.meshing.prime.SetParamsResults.warning_code.md#ansys.meshing.prime.SetParamsResults.warning_code) | Warning code associated with the set parameters operation. |
<!-- vale on -->