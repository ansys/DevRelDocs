# VolumeControlSummaryResults

<a id="ansys.meshing.prime.VolumeControlSummaryResults"></a>

### *class* ansys.meshing.prime.VolumeControlSummaryResults(model=None, summary=None, json_data=None, \*\*kwargs)

Volume control summary parameters.

**Parameters:**

  **model: Model**

  Model to create a `VolumeControlSummaryResults` object with default parameters.

  **summary: str, optional**

  Summary of control, including parameters and scope.

  **json_data: dict, optional**

  JSON dictionary to create a `VolumeControlSummaryResults` object with provided parameters.

### Examples

```pycon
>>> volume_control_summary_results = prime.VolumeControlSummaryResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`VolumeControlSummaryResults.print_default`](ansys.meshing.prime.VolumeControlSummaryResults.print_default.md#ansys.meshing.prime.VolumeControlSummaryResults.print_default)()   | Print the default values of `VolumeControlSummaryResults` object.   |
| [`VolumeControlSummaryResults.set_default`](ansys.meshing.prime.VolumeControlSummaryResults.set_default.md#ansys.meshing.prime.VolumeControlSummaryResults.set_default)([...])    | Set the default values of the `VolumeControlSummaryResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`VolumeControlSummaryResults.summary`](ansys.meshing.prime.VolumeControlSummaryResults.summary.md#ansys.meshing.prime.VolumeControlSummaryResults.summary)   | Summary of control, including parameters and scope.   |
<!-- vale on -->