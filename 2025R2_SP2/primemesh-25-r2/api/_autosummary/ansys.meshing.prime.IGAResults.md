# IGAResults

<a id="ansys.meshing.prime.IGAResults"></a>

### *class* ansys.meshing.prime.IGAResults(model=None, error_code=None, warning_code=None, spline_ids=None, json_data=None, \*\*kwargs)

Results of IGA operations.

* **Parameters:**

  **model: Model**
  : Model to create a `IGAResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code if IGA operation is unsuccessful.

  **warning_code: WarningCode, optional**
  : Warning code if IGA operation is partially successful.

  **spline_ids: Iterable[int], optional**
  : Ids of the created spline.

  **json_data: dict, optional**
  : JSON dictionary to create a `IGAResults` object with provided parameters.

### Examples

```pycon
>>> iga_results = prime.IGAResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`IGAResults.print_default`](ansys.meshing.prime.IGAResults.print_default.md#ansys.meshing.prime.IGAResults.print_default)()            | Print the default values of `IGAResults` object.   |
| [`IGAResults.set_default`](ansys.meshing.prime.IGAResults.set_default.md#ansys.meshing.prime.IGAResults.set_default)([error_code, ...]) | Set the default values of the `IGAResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`IGAResults.error_code`](ansys.meshing.prime.IGAResults.error_code.md#ansys.meshing.prime.IGAResults.error_code)       | Error code if IGA operation is unsuccessful.           |
| [`IGAResults.spline_ids`](ansys.meshing.prime.IGAResults.spline_ids.md#ansys.meshing.prime.IGAResults.spline_ids)       | Ids of the created spline.                             |
| [`IGAResults.warning_code`](ansys.meshing.prime.IGAResults.warning_code.md#ansys.meshing.prime.IGAResults.warning_code) | Warning code if IGA operation is partially successful. |
<!-- vale on -->