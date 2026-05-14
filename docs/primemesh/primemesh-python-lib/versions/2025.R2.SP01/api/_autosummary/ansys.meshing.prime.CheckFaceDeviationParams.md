# CheckFaceDeviationParams

<a id="ansys.meshing.prime.CheckFaceDeviationParams"></a>

### *class* ansys.meshing.prime.CheckFaceDeviationParams(model=None, distance=None, json_data=None, \*\*kwargs)

Parameters used for check face deviation operations.

* **Parameters:**

  **model: Model**
  : Model to create a `CheckFaceDeviationParams` object with default parameters.

  **distance: float, optional**
  : Distance above which deviated entities are collected.

  **json_data: dict, optional**
  : JSON dictionary to create a `CheckFaceDeviationParams` object with provided parameters.

### Examples

```pycon
>>> check_face_deviation_params = prime.CheckFaceDeviationParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`CheckFaceDeviationParams.print_default`](ansys.meshing.prime.CheckFaceDeviationParams.print_default.md#ansys.meshing.prime.CheckFaceDeviationParams.print_default)()     | Print the default values of `CheckFaceDeviationParams` object.   |
| [`CheckFaceDeviationParams.set_default`](ansys.meshing.prime.CheckFaceDeviationParams.set_default.md#ansys.meshing.prime.CheckFaceDeviationParams.set_default)([distance]) | Set the default values of the `CheckFaceDeviationParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`CheckFaceDeviationParams.distance`](ansys.meshing.prime.CheckFaceDeviationParams.distance.md#ansys.meshing.prime.CheckFaceDeviationParams.distance)   | Distance above which deviated entities are collected.   |
<!-- vale on -->