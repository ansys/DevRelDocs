# SearchByFoldsParams

<a id="ansys.meshing.prime.SearchByFoldsParams"></a>

### *class* ansys.meshing.prime.SearchByFoldsParams(model=None, critical_angle=None, json_data=None, \*\*kwargs)

Parameters to control fold detection.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchByFoldsParams` object with default parameters.

  **critical_angle: float, optional**
  : Threshold angle for fold detection.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchByFoldsParams` object with provided parameters.

### Examples

```pycon
>>> search_by_folds_params = prime.SearchByFoldsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`SearchByFoldsParams.print_default`](ansys.meshing.prime.SearchByFoldsParams.print_default.md#ansys.meshing.prime.SearchByFoldsParams.print_default)()           | Print the default values of `SearchByFoldsParams` object.   |
| [`SearchByFoldsParams.set_default`](ansys.meshing.prime.SearchByFoldsParams.set_default.md#ansys.meshing.prime.SearchByFoldsParams.set_default)([critical_angle]) | Set the default values of the `SearchByFoldsParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| [`SearchByFoldsParams.critical_angle`](ansys.meshing.prime.SearchByFoldsParams.critical_angle.md#ansys.meshing.prime.SearchByFoldsParams.critical_angle)   | Threshold angle for fold detection.   |
<!-- vale on -->