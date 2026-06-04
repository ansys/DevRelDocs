# ShellBLControlGrowthParams

<a id="ansys.meshing.prime.ShellBLControlGrowthParams"></a>

### *class* ansys.meshing.prime.ShellBLControlGrowthParams(model=None, n_layers=None, offset_type=None, growth_rate=None, first_height=None, json_data=None, \*\*kwargs)

Growth parameters for ShellBL control.

* **Parameters:**

  **model: Model**
  : Model to create a `ShellBLControlGrowthParams` object with default parameters.

  **n_layers: int, optional**
  : Number of layers to be generated.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **offset_type: ShellBLOffsetType, optional**
  : Offset type for ShellBL.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **growth_rate: float, optional**
  : Ratio of heights of current layer to previous layer.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **first_height: float, optional**
  : Height of first layer of ShellBL.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ShellBLControlGrowthParams` object with provided parameters.

### Examples

```pycon
>>> shell_bl_control_growth_params = prime.ShellBLControlGrowthParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`ShellBLControlGrowthParams.print_default`](ansys.meshing.prime.ShellBLControlGrowthParams.print_default.md#ansys.meshing.prime.ShellBLControlGrowthParams.print_default)()   | Print the default values of `ShellBLControlGrowthParams` object.   |
| [`ShellBLControlGrowthParams.set_default`](ansys.meshing.prime.ShellBLControlGrowthParams.set_default.md#ansys.meshing.prime.ShellBLControlGrowthParams.set_default)([...])    | Set the default values of the `ShellBLControlGrowthParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`ShellBLControlGrowthParams.first_height`](ansys.meshing.prime.ShellBLControlGrowthParams.first_height.md#ansys.meshing.prime.ShellBLControlGrowthParams.first_height)   | Height of first layer of ShellBL.                    |
| [`ShellBLControlGrowthParams.growth_rate`](ansys.meshing.prime.ShellBLControlGrowthParams.growth_rate.md#ansys.meshing.prime.ShellBLControlGrowthParams.growth_rate)      | Ratio of heights of current layer to previous layer. |
| [`ShellBLControlGrowthParams.n_layers`](ansys.meshing.prime.ShellBLControlGrowthParams.n_layers.md#ansys.meshing.prime.ShellBLControlGrowthParams.n_layers)               | Number of layers to be generated.                    |
| [`ShellBLControlGrowthParams.offset_type`](ansys.meshing.prime.ShellBLControlGrowthParams.offset_type.md#ansys.meshing.prime.ShellBLControlGrowthParams.offset_type)      | Offset type for ShellBL.                             |
<!-- vale on -->