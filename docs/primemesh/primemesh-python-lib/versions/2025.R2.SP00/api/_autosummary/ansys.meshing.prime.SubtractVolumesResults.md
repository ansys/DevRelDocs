# SubtractVolumesResults

<a id="ansys.meshing.prime.SubtractVolumesResults"></a>

### *class* ansys.meshing.prime.SubtractVolumesResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results of the volume subtract operation.

* **Parameters:**

  **model: Model**
  : Model to create a `SubtractVolumesResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the volume subtract operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the volume subtract operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `SubtractVolumesResults` object with provided parameters.

### Examples

```pycon
>>> subtract_volumes_results = prime.SubtractVolumesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`SubtractVolumesResults.print_default`](ansys.meshing.prime.SubtractVolumesResults.print_default.md#ansys.meshing.prime.SubtractVolumesResults.print_default)()   | Print the default values of `SubtractVolumesResults` object.   |
| [`SubtractVolumesResults.set_default`](ansys.meshing.prime.SubtractVolumesResults.set_default.md#ansys.meshing.prime.SubtractVolumesResults.set_default)([...])    | Set the default values of the `SubtractVolumesResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`SubtractVolumesResults.error_code`](ansys.meshing.prime.SubtractVolumesResults.error_code.md#ansys.meshing.prime.SubtractVolumesResults.error_code)          | Error code associated with the volume subtract operation.    |
| [`SubtractVolumesResults.warning_codes`](ansys.meshing.prime.SubtractVolumesResults.warning_codes.md#ansys.meshing.prime.SubtractVolumesResults.warning_codes) | Warning codes associated with the volume subtract operation. |
<!-- vale on -->