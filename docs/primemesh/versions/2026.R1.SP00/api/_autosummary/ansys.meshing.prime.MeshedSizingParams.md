# MeshedSizingParams

<a id="ansys.meshing.prime.MeshedSizingParams"></a>

### *class* ansys.meshing.prime.MeshedSizingParams(model=None, growth_rate=None, json_data=None, \*\*kwargs)

Size field computed using meshed size control enables you to set the size based on existing sizes.

* **Parameters:**

  **model: Model**
  : Model to create a `MeshedSizingParams` object with default parameters.

  **growth_rate: float, optional**
  : Growth rate used for transitioning from one element size to neighbor element size.

  **json_data: dict, optional**
  : JSON dictionary to create a `MeshedSizingParams` object with provided parameters.

### Examples

```pycon
>>> meshed_sizing_params = prime.MeshedSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`MeshedSizingParams.print_default`](ansys.meshing.prime.MeshedSizingParams.print_default.md#ansys.meshing.prime.MeshedSizingParams.print_default)()        | Print the default values of `MeshedSizingParams` object.   |
| [`MeshedSizingParams.set_default`](ansys.meshing.prime.MeshedSizingParams.set_default.md#ansys.meshing.prime.MeshedSizingParams.set_default)([growth_rate]) | Set the default values of the `MeshedSizingParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`MeshedSizingParams.growth_rate`](ansys.meshing.prime.MeshedSizingParams.growth_rate.md#ansys.meshing.prime.MeshedSizingParams.growth_rate)   | Growth rate used for transitioning from one element size to neighbor element size.   |
<!-- vale on -->