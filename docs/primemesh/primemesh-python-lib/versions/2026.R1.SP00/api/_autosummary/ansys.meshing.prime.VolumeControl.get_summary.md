# get_summary

<a id="ansys.meshing.prime.VolumeControl.get_summary"></a>

#### VolumeControl.get_summary(params)

Gets the volume control summary along with the evaluated scope for the provided parameters.

**Parameters:**

  **params**

  Volume control summary parameters.

**Returns:**

  **[`VolumeControlSummaryResults`](ansys.meshing.prime.VolumeControlSummaryResults.md#ansys.meshing.prime.VolumeControlSummaryResults)**

  Return the VolumeControlSummaryResults.

**Return type:**

  [`VolumeControlSummaryResults`](ansys.meshing.prime.VolumeControlSummaryResults.md#ansys.meshing.prime.VolumeControlSummaryResults)

### Examples

```pycon
>>> results = volume_control.get_summary(prime.VolumeControlSummaryParams(model=model))
```

<!-- !! processed by numpydoc !! -->
