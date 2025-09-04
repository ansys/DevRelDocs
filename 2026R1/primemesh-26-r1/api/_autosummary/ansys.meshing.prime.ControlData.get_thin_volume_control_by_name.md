# get_thin_volume_control_by_name

<a id="ansys.meshing.prime.ControlData.get_thin_volume_control_by_name"></a>

#### ControlData.get_thin_volume_control_by_name(name)

Get a thin volume control by name.

* **Parameters:**

  **name**
  : Name of the thin volume control.

* **Returns:**

  [`ThinVolumeControl`](ansys.meshing.prime.ThinVolumeControl.md#ansys.meshing.prime.ThinVolumeControl)
  : Thin volume control.

* **Return type:**

  [`ThinVolumeControl`](ansys.meshing.prime.ThinVolumeControl.md#ansys.meshing.prime.ThinVolumeControl)

### Examples

```pycon
>>> contorl_data = model.control_data
>>> thin_volume_control = control_data.get_thin_volume_control_by_name(
                                             "ThinVolumeControl-1")
```

<!-- !! processed by numpydoc !! -->
