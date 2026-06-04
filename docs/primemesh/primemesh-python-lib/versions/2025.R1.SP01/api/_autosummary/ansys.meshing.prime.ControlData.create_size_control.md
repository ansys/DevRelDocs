# create_size_control

<a id="ansys.meshing.prime.ControlData.create_size_control"></a>

#### ControlData.create_size_control(sizing_type)

Create a size control for a sizing type.

* **Parameters:**

  **type**
  : Sizing type for creating the size control.

* **Returns:**

  [`SizeControl`](ansys.meshing.prime.SizeControl.md#ansys.meshing.prime.SizeControl)
  : Size control.

* **Return type:**

  [`SizeControl`](ansys.meshing.prime.SizeControl.md#ansys.meshing.prime.SizeControl)

### Notes

An empty size control is created on calling this method.

### Examples

```pycon
>>> size_control = model.control_data.create_size_control(SizingType.Curvature)
```

<!-- !! processed by numpydoc !! -->
