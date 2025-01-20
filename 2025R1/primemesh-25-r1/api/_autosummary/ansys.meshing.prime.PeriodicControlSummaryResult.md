# PeriodicControlSummaryResult

<a id="ansys.meshing.prime.PeriodicControlSummaryResult"></a>

### *class* ansys.meshing.prime.PeriodicControlSummaryResult(model=None, message=None, json_data=None, \*\*kwargs)

Results of Periodic control summary.

* **Parameters:**

  **model: Model**
  : Model to create a `PeriodicControlSummaryResult` object with default parameters.

  **message: str, optional**
  : String with the periodic control summary.

  **json_data: dict, optional**
  : JSON dictionary to create a `PeriodicControlSummaryResult` object with provided parameters.

### Examples

```pycon
>>> periodic_control_summary_result = prime.PeriodicControlSummaryResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`PeriodicControlSummaryResult.print_default`](ansys.meshing.prime.PeriodicControlSummaryResult.print_default.md#ansys.meshing.prime.PeriodicControlSummaryResult.print_default)()   | Print the default values of `PeriodicControlSummaryResult` object.   |
| [`PeriodicControlSummaryResult.set_default`](ansys.meshing.prime.PeriodicControlSummaryResult.set_default.md#ansys.meshing.prime.PeriodicControlSummaryResult.set_default)([...])    | Set the default values of the `PeriodicControlSummaryResult` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`PeriodicControlSummaryResult.message`](ansys.meshing.prime.PeriodicControlSummaryResult.message.md#ansys.meshing.prime.PeriodicControlSummaryResult.message)   | String with the periodic control summary.   |
<!-- vale on -->