# get_volume_control_by_name

<a id="ansys.meshing.prime.ControlData.get_volume_control_by_name"></a>

#### ControlData.get_volume_control_by_name(name)

Get a volume control by name.

* **Parameters:**

  **name**
  : Name of the volume control.

* **Returns:**

  [`VolumeControl`](ansys.meshing.prime.VolumeControl.md#ansys.meshing.prime.VolumeControl)
  : Volume control.

* **Return type:**

  [`VolumeControl`](ansys.meshing.prime.VolumeControl.md#ansys.meshing.prime.VolumeControl)

### Examples

```pycon
>>> volume_control = model.control_data.get_volume_control_by_name("VolumeControl-1")
```

<!-- !! processed by numpydoc !! -->
