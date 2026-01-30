# SubtractZoneletsResults

<a id="ansys.meshing.prime.SubtractZoneletsResults"></a>

### *class* ansys.meshing.prime.SubtractZoneletsResults(model=None, processing_time=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated with subtracting zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `SubtractZoneletsResults` object with default parameters.

  **processing_time: float, optional**
  : Processing time for subtract operation.

  **error_code: ErrorCode, optional**
  : Error Code associated with subtract operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SubtractZoneletsResults` object with provided parameters.

### Examples

```pycon
>>> subtract_zonelets_results = prime.SubtractZoneletsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`SubtractZoneletsResults.print_default`](ansys.meshing.prime.SubtractZoneletsResults.print_default.md#ansys.meshing.prime.SubtractZoneletsResults.print_default)()   | Print the default values of `SubtractZoneletsResults` object.   |
| [`SubtractZoneletsResults.set_default`](ansys.meshing.prime.SubtractZoneletsResults.set_default.md#ansys.meshing.prime.SubtractZoneletsResults.set_default)([...])    | Set the default values of the `SubtractZoneletsResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`SubtractZoneletsResults.error_code`](ansys.meshing.prime.SubtractZoneletsResults.error_code.md#ansys.meshing.prime.SubtractZoneletsResults.error_code)                | Error Code associated with subtract operation.   |
| [`SubtractZoneletsResults.processing_time`](ansys.meshing.prime.SubtractZoneletsResults.processing_time.md#ansys.meshing.prime.SubtractZoneletsResults.processing_time) | Processing time for subtract operation.          |
<!-- vale on -->