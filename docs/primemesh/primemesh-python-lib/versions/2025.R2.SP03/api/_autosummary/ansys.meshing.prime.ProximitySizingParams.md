# ProximitySizingParams

<a id="ansys.meshing.prime.ProximitySizingParams"></a>

### *class* ansys.meshing.prime.ProximitySizingParams(model=None, min=None, max=None, growth_rate=None, elements_per_gap=None, ignore_self_proximity=None, ignore_orientation=None, json_data=None, \*\*kwargs)

Size field using proximity size control computes edge and face sizes in gaps using the specified minimum number of element layers.

* **Parameters:**

  **model: Model**
  : Model to create a `ProximitySizingParams` object with default parameters.

  **min: float, optional**
  : Minimum size used for computing edge and face size using proximity size control.

  **max: float, optional**
  : Maximum size used for computing edge and face size using proximity size control.

  **growth_rate: float, optional**
  : Growth rate used for transitioning from one element size to neighbor element size.

  **elements_per_gap: float, optional**
  : The number of elements per gap can be a real value.  This has the effect of stretching face elements with larger sizes along side faces,  or gaps, thereby reducing the overall face count, and ultimately the cell count.

  **ignore_self_proximity: bool, optional**
  : Ignore proximity within zonelets.

  **ignore_orientation: bool, optional**
  : The ignore orientation option can be used to ignore the face normal orientation during the proximity calculation. The default is false.

  **json_data: dict, optional**
  : JSON dictionary to create a `ProximitySizingParams` object with provided parameters.

### Examples

```pycon
>>> proximity_sizing_params = prime.ProximitySizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ProximitySizingParams.print_default`](ansys.meshing.prime.ProximitySizingParams.print_default.md#ansys.meshing.prime.ProximitySizingParams.print_default)()     | Print the default values of `ProximitySizingParams` object.   |
| [`ProximitySizingParams.set_default`](ansys.meshing.prime.ProximitySizingParams.set_default.md#ansys.meshing.prime.ProximitySizingParams.set_default)([min, ...]) | Set the default values of the `ProximitySizingParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| [`ProximitySizingParams.elements_per_gap`](ansys.meshing.prime.ProximitySizingParams.elements_per_gap.md#ansys.meshing.prime.ProximitySizingParams.elements_per_gap)                | The number of elements per gap can be a real value.                                                               |
| [`ProximitySizingParams.growth_rate`](ansys.meshing.prime.ProximitySizingParams.growth_rate.md#ansys.meshing.prime.ProximitySizingParams.growth_rate)                               | Growth rate used for transitioning from one element size to neighbor element size.                                |
| [`ProximitySizingParams.ignore_orientation`](ansys.meshing.prime.ProximitySizingParams.ignore_orientation.md#ansys.meshing.prime.ProximitySizingParams.ignore_orientation)          | The ignore orientation option can be used to ignore the face normal orientation during the proximity calculation. |
| [`ProximitySizingParams.ignore_self_proximity`](ansys.meshing.prime.ProximitySizingParams.ignore_self_proximity.md#ansys.meshing.prime.ProximitySizingParams.ignore_self_proximity) | Ignore proximity within zonelets.                                                                                 |
| [`ProximitySizingParams.max`](ansys.meshing.prime.ProximitySizingParams.max.md#ansys.meshing.prime.ProximitySizingParams.max)                                                       | Maximum size used for computing edge and face size using proximity size control.                                  |
| [`ProximitySizingParams.min`](ansys.meshing.prime.ProximitySizingParams.min.md#ansys.meshing.prime.ProximitySizingParams.min)                                                       | Minimum size used for computing edge and face size using proximity size control.                                  |
<!-- vale on -->