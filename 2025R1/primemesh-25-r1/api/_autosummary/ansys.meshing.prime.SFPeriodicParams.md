# SFPeriodicParams

<a id="ansys.meshing.prime.SFPeriodicParams"></a>

### *class* ansys.meshing.prime.SFPeriodicParams(model=None, axis=None, angle=None, center=None, json_data=None, \*\*kwargs)

Parameters for setting periodic size fields.

* **Parameters:**

  **model: Model**
  : Model to create a `SFPeriodicParams` object with default parameters.

  **axis: Iterable[float], optional**
  : Axis vector coordinates.

  **angle: float, optional**
  : Angle in degrees.

  **center: Iterable[float], optional**
  : Center coordinates.

  **json_data: dict, optional**
  : JSON dictionary to create a `SFPeriodicParams` object with provided parameters.

### Examples

```pycon
>>> s_fperiodic_params = prime.SFPeriodicParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`SFPeriodicParams.print_default`](ansys.meshing.prime.SFPeriodicParams.print_default.md#ansys.meshing.prime.SFPeriodicParams.print_default)()             | Print the default values of `SFPeriodicParams` object.   |
| [`SFPeriodicParams.set_default`](ansys.meshing.prime.SFPeriodicParams.set_default.md#ansys.meshing.prime.SFPeriodicParams.set_default)([axis, angle, ...]) | Set the default values of the `SFPeriodicParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------|--------------------------|
| [`SFPeriodicParams.angle`](ansys.meshing.prime.SFPeriodicParams.angle.md#ansys.meshing.prime.SFPeriodicParams.angle)    | Angle in degrees.        |
| [`SFPeriodicParams.axis`](ansys.meshing.prime.SFPeriodicParams.axis.md#ansys.meshing.prime.SFPeriodicParams.axis)       | Axis vector coordinates. |
| [`SFPeriodicParams.center`](ansys.meshing.prime.SFPeriodicParams.center.md#ansys.meshing.prime.SFPeriodicParams.center) | Center coordinates.      |
<!-- vale on -->