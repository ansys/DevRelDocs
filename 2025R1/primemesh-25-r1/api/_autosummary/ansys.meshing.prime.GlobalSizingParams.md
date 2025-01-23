# GlobalSizingParams

<a id="ansys.meshing.prime.GlobalSizingParams"></a>

### *class* ansys.meshing.prime.GlobalSizingParams(model=None, min=None, max=None, growth_rate=None, json_data=None, \*\*kwargs)

Global sizing parameters.

* **Parameters:**

  **model: Model**
  : Model to create a `GlobalSizingParams` object with default parameters.

  **min: float, optional**
  : Minimum value of global sizing parameters.

  **max: float, optional**
  : Maximum value of global sizing parameters.

  **growth_rate: float, optional**
  : Growth rate of global sizing parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `GlobalSizingParams` object with provided parameters.

### Examples

```pycon
>>> global_sizing_params = prime.GlobalSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`GlobalSizingParams.print_default`](ansys.meshing.prime.GlobalSizingParams.print_default.md#ansys.meshing.prime.GlobalSizingParams.print_default)()          | Print the default values of `GlobalSizingParams` object.   |
| [`GlobalSizingParams.set_default`](ansys.meshing.prime.GlobalSizingParams.set_default.md#ansys.meshing.prime.GlobalSizingParams.set_default)([min, max, ...]) | Set the default values of the `GlobalSizingParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| [`GlobalSizingParams.growth_rate`](ansys.meshing.prime.GlobalSizingParams.growth_rate.md#ansys.meshing.prime.GlobalSizingParams.growth_rate)   | Growth rate of global sizing parameters.   |
| [`GlobalSizingParams.max`](ansys.meshing.prime.GlobalSizingParams.max.md#ansys.meshing.prime.GlobalSizingParams.max)                           | Maximum value of global sizing parameters. |
| [`GlobalSizingParams.min`](ansys.meshing.prime.GlobalSizingParams.min.md#ansys.meshing.prime.GlobalSizingParams.min)                           | Minimum value of global sizing parameters. |


<!-- vale on -->
