# BoiSizingParams

<a id="ansys.meshing.prime.BoiSizingParams"></a>

### *class* ansys.meshing.prime.BoiSizingParams(model=None, max=None, growth_rate=None, json_data=None, \*\*kwargs)

Size field computed using body of influence size control enables you to specify a body of influence(that is, a region for sizing control).

The maximum mesh size will be equal to the specified size within the body of influence.
The minimum size will be determined based on the influence of other size controls.

* **Parameters:**

  **model: Model**
  
   Model to create a `BoiSizingParams` object with default parameters.

  **max: float, optional**
  
   Maximum size used for computing edge and face size using boi size control.

  **growth_rate: float, optional**
  
   Growth rate used for transitioning from one element size to neighbor element size.

  **json_data: dict, optional**
  
   JSON dictionary to create a `BoiSizingParams` object with provided parameters.

### Examples

```pycon
>>> boi_sizing_params = prime.BoiSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`BoiSizingParams.print_default`](ansys.meshing.prime.BoiSizingParams.print_default.md#ansys.meshing.prime.BoiSizingParams.print_default)()             | Print the default values of `BoiSizingParams` object.   |
| [`BoiSizingParams.set_default`](ansys.meshing.prime.BoiSizingParams.set_default.md#ansys.meshing.prime.BoiSizingParams.set_default)([max, growth_rate]) | Set the default values of the `BoiSizingParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`BoiSizingParams.growth_rate`](ansys.meshing.prime.BoiSizingParams.growth_rate.md#ansys.meshing.prime.BoiSizingParams.growth_rate)   | Growth rate used for transitioning from one element size to neighbor element size.   |
| [`BoiSizingParams.max`](ansys.meshing.prime.BoiSizingParams.max.md#ansys.meshing.prime.BoiSizingParams.max)                           | Maximum size used for computing edge and face size using boi size control.           |
<!-- vale on -->