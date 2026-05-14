# CheckFaceDeviationResults

<a id="ansys.meshing.prime.CheckFaceDeviationResults"></a>

### *class* ansys.meshing.prime.CheckFaceDeviationResults(model=None, n_deviated=None, maximum_deviation=None, json_data=None, \*\*kwargs)

Result structure associated with the check face deviation operations.

* **Parameters:**

  **model: Model**
  : Model to create a `CheckFaceDeviationResults` object with default parameters.

  **n_deviated: int, optional**
  : Number of faces with deviation.

  **maximum_deviation: float, optional**
  : Maximum deviation found.

  **json_data: dict, optional**
  : JSON dictionary to create a `CheckFaceDeviationResults` object with provided parameters.

### Examples

```pycon
>>> check_face_deviation_results = prime.CheckFaceDeviationResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`CheckFaceDeviationResults.print_default`](ansys.meshing.prime.CheckFaceDeviationResults.print_default.md#ansys.meshing.prime.CheckFaceDeviationResults.print_default)()   | Print the default values of `CheckFaceDeviationResults` object.   |
| [`CheckFaceDeviationResults.set_default`](ansys.meshing.prime.CheckFaceDeviationResults.set_default.md#ansys.meshing.prime.CheckFaceDeviationResults.set_default)([...])    | Set the default values of the `CheckFaceDeviationResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| [`CheckFaceDeviationResults.maximum_deviation`](ansys.meshing.prime.CheckFaceDeviationResults.maximum_deviation.md#ansys.meshing.prime.CheckFaceDeviationResults.maximum_deviation)   | Maximum deviation found.        |
| [`CheckFaceDeviationResults.n_deviated`](ansys.meshing.prime.CheckFaceDeviationResults.n_deviated.md#ansys.meshing.prime.CheckFaceDeviationResults.n_deviated)                        | Number of faces with deviation. |
<!-- vale on -->