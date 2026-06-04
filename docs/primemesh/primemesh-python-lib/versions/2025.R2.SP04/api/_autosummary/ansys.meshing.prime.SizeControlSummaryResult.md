# SizeControlSummaryResult

<a id="ansys.meshing.prime.SizeControlSummaryResult"></a>

### *class* ansys.meshing.prime.SizeControlSummaryResult(model=None, message=None, json_data=None, \*\*kwargs)

Results of size control summary.

* **Parameters:**

  **model: Model**
  : Model to create a `SizeControlSummaryResult` object with default parameters.

  **message: str, optional**
  : Size control summary text.

  **json_data: dict, optional**
  : JSON dictionary to create a `SizeControlSummaryResult` object with provided parameters.

### Examples

```pycon
>>> size_control_summary_result = prime.SizeControlSummaryResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`SizeControlSummaryResult.print_default`](ansys.meshing.prime.SizeControlSummaryResult.print_default.md#ansys.meshing.prime.SizeControlSummaryResult.print_default)()    | Print the default values of `SizeControlSummaryResult` object.   |
| [`SizeControlSummaryResult.set_default`](ansys.meshing.prime.SizeControlSummaryResult.set_default.md#ansys.meshing.prime.SizeControlSummaryResult.set_default)([message]) | Set the default values of the `SizeControlSummaryResult` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| [`SizeControlSummaryResult.message`](ansys.meshing.prime.SizeControlSummaryResult.message.md#ansys.meshing.prime.SizeControlSummaryResult.message)   | Size control summary text.   |
<!-- vale on -->