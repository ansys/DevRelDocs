# set_params

<a id="ansys.meshing.prime.VolumeControl.set_params"></a>

#### VolumeControl.set_params(volume_control_params)

Sets the volume control parameters.

* **Parameters:**

  **volume_control_params**
  : Parameters to control volume.

### Examples

```pycon
>>> volume_control.set_params(
>>>                  prime.VolumeControlParams(model=model,
>>>                  cell_zonelet_type = prime.CellZoneletType.FLUID))
```

<!-- !! processed by numpydoc !! -->
