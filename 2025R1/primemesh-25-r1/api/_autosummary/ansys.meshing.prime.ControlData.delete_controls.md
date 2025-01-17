# delete_controls

<a id="ansys.meshing.prime.ControlData.delete_controls"></a>

#### ControlData.delete_controls(control_ids)

Delete the control for one or more IDs.

* **Parameters:**

  **control_ids**
  : List of control ids.

* **Returns:**

  [`DeleteResults`](ansys.meshing.prime.DeleteResults.md#ansys.meshing.prime.DeleteResults)
  : Delete results.

* **Return type:**

  [`DeleteResults`](ansys.meshing.prime.DeleteResults.md#ansys.meshing.prime.DeleteResults)

### Examples

```pycon
>>> results = model.control_data.delete_controls([size_control.id, volume_control.id])
```

<!-- !! processed by numpydoc !! -->
