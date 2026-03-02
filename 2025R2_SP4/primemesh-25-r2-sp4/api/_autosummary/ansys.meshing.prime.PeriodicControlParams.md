# PeriodicControlParams

<a id="ansys.meshing.prime.PeriodicControlParams"></a>

### *class* ansys.meshing.prime.PeriodicControlParams(model=None, center=None, axis=None, angle=None, json_data=None, \*\*kwargs)

PeriodicControlParams contains the parameters for periodic surface recovery.  Parameters like center, axis and angle determine the transformation from  one surface to its matching periodic surface.

* **Parameters:**

  **model: Model**
  : Model to create a `PeriodicControlParams` object with default parameters.

  **center: Iterable[float], optional**
  : Center coordinates.

  **axis: Iterable[float], optional**
  : Axis vector coordinates.

  **angle: float, optional**
  : Angle in degrees.

  **json_data: dict, optional**
  : JSON dictionary to create a `PeriodicControlParams` object with provided parameters.

### Examples

```pycon
>>> periodic_control_params = prime.PeriodicControlParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`PeriodicControlParams.print_default`](ansys.meshing.prime.PeriodicControlParams.print_default.md#ansys.meshing.prime.PeriodicControlParams.print_default)()        | Print the default values of `PeriodicControlParams` object.   |
| [`PeriodicControlParams.set_default`](ansys.meshing.prime.PeriodicControlParams.set_default.md#ansys.meshing.prime.PeriodicControlParams.set_default)([center, ...]) | Set the default values of the `PeriodicControlParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| [`PeriodicControlParams.angle`](ansys.meshing.prime.PeriodicControlParams.angle.md#ansys.meshing.prime.PeriodicControlParams.angle)    | Angle in degrees.        |
| [`PeriodicControlParams.axis`](ansys.meshing.prime.PeriodicControlParams.axis.md#ansys.meshing.prime.PeriodicControlParams.axis)       | Axis vector coordinates. |
| [`PeriodicControlParams.center`](ansys.meshing.prime.PeriodicControlParams.center.md#ansys.meshing.prime.PeriodicControlParams.center) | Center coordinates.      |
<!-- vale on -->