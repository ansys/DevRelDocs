# PrismStairStep

<a id="ansys.meshing.prime.PrismStairStep"></a>

### *class* ansys.meshing.prime.PrismStairStep(model=None, check_proximity=None, gap_factor_scale=None, json_data=None, \*\*kwargs)

Parameters to control prism stairsteping.

* **Parameters:**

  **model: Model**
  : Model to create a `PrismStairStep` object with default parameters.

  **check_proximity: bool, optional**
  : Check whether to enable or disable stairstepping at prisms within proximity of boundary or prism cap.

  **gap_factor_scale: float, optional**
  : Scale factor for prism proximity detection gap factor.

  **json_data: dict, optional**
  : JSON dictionary to create a `PrismStairStep` object with provided parameters.

### Examples

```pycon
>>> prism_stair_step = prime.PrismStairStep(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`PrismStairStep.print_default`](ansys.meshing.prime.PrismStairStep.print_default.md#ansys.meshing.prime.PrismStairStep.print_default)()   | Print the default values of `PrismStairStep` object.   |
| [`PrismStairStep.set_default`](ansys.meshing.prime.PrismStairStep.set_default.md#ansys.meshing.prime.PrismStairStep.set_default)([...])    | Set the default values of the `PrismStairStep` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`PrismStairStep.check_proximity`](ansys.meshing.prime.PrismStairStep.check_proximity.md#ansys.meshing.prime.PrismStairStep.check_proximity)    | Check whether to enable or disable stairstepping at prisms within proximity of boundary or prism cap.   |
| [`PrismStairStep.gap_factor_scale`](ansys.meshing.prime.PrismStairStep.gap_factor_scale.md#ansys.meshing.prime.PrismStairStep.gap_factor_scale) | Scale factor for prism proximity detection gap factor.                                                  |
<!-- vale on -->