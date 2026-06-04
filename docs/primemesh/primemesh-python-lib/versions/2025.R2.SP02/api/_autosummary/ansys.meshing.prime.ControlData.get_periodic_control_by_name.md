# get_periodic_control_by_name

<a id="ansys.meshing.prime.ControlData.get_periodic_control_by_name"></a>

#### ControlData.get_periodic_control_by_name(name)

Get a periodic control by name.

* **Parameters:**

  **name**
  : Name of the periodic control.

* **Returns:**

  [`PeriodicControl`](ansys.meshing.prime.PeriodicControl.md#ansys.meshing.prime.PeriodicControl)
  : Periodic control.

* **Return type:**

  `PeriodicControl`

### Examples

```pycon
>>> periodic_control = model.control_data.get_periodic_control_by_name("PeriodicControl-1")
```

<!-- !! processed by numpydoc !! -->
