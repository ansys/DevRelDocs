# SoftSizingParams

<a id="ansys.meshing.prime.SoftSizingParams"></a>

### *class* ansys.meshing.prime.SoftSizingParams(model=None, max=None, growth_rate=None, json_data=None, \*\*kwargs)

Size field computed using soft size control enables you to set the maximum size on the scoped zonelets .

When the soft sizing is computed for edges or faces, the size will be affected by size computed using other controls.
The minimum size on the zonelet will be determined based on the influence of other size controls,
else a uniform size will be maintained.

* **Parameters:**

  **model: Model**
  : Model to create a `SoftSizingParams` object with default parameters.

  **max: float, optional**
  : Maximum size used for computing edge and face size using soft size control.

  **growth_rate: float, optional**
  : Growth rate used for transitioning from one element size to neighbor element size.

  **json_data: dict, optional**
  : JSON dictionary to create a `SoftSizingParams` object with provided parameters.

### Examples

```pycon
>>> soft_sizing_params = prime.SoftSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`SoftSizingParams.print_default`](ansys.meshing.prime.SoftSizingParams.print_default.md#ansys.meshing.prime.SoftSizingParams.print_default)()             | Print the default values of `SoftSizingParams` object.   |
| [`SoftSizingParams.set_default`](ansys.meshing.prime.SoftSizingParams.set_default.md#ansys.meshing.prime.SoftSizingParams.set_default)([max, growth_rate]) | Set the default values of the `SoftSizingParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`SoftSizingParams.growth_rate`](ansys.meshing.prime.SoftSizingParams.growth_rate.md#ansys.meshing.prime.SoftSizingParams.growth_rate)   | Growth rate used for transitioning from one element size to neighbor element size.   |
| [`SoftSizingParams.max`](ansys.meshing.prime.SoftSizingParams.max.md#ansys.meshing.prime.SoftSizingParams.max)                           | Maximum size used for computing edge and face size using soft size control.          |


<!-- vale on -->
