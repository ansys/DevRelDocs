# MultiZoneSizingParams

<a id="ansys.meshing.prime.MultiZoneSizingParams"></a>

### *class* ansys.meshing.prime.MultiZoneSizingParams(model=None, max_size=None, min_size=None, growth_rate=None, use_volumetric_size_field=None, json_data=None, \*\*kwargs)

Parameters for MultiZone meshing.

* **Parameters:**

  **model: Model**
  : Model to create a `MultiZoneSizingParams` object with default parameters.

  **max_size: float, optional**
  : Defines global maximum mesh size.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **min_size: float, optional**
  : Defines global minimum mesh size.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **growth_rate: float, optional**
  : Defines growth rate.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **use_volumetric_size_field: bool, optional**
  : Defines whether to use size field for MultiZone meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `MultiZoneSizingParams` object with provided parameters.

### Examples

```pycon
>>> multi_zone_sizing_params = prime.MultiZoneSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MultiZoneSizingParams.print_default`](ansys.meshing.prime.MultiZoneSizingParams.print_default.md#ansys.meshing.prime.MultiZoneSizingParams.print_default)()   | Print the default values of `MultiZoneSizingParams` object.   |
| [`MultiZoneSizingParams.set_default`](ansys.meshing.prime.MultiZoneSizingParams.set_default.md#ansys.meshing.prime.MultiZoneSizingParams.set_default)([...])    | Set the default values of the `MultiZoneSizingParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`MultiZoneSizingParams.growth_rate`](ansys.meshing.prime.MultiZoneSizingParams.growth_rate.md#ansys.meshing.prime.MultiZoneSizingParams.growth_rate)                                           | Defines growth rate.                                     |
| [`MultiZoneSizingParams.max_size`](ansys.meshing.prime.MultiZoneSizingParams.max_size.md#ansys.meshing.prime.MultiZoneSizingParams.max_size)                                                    | Defines global maximum mesh size.                        |
| [`MultiZoneSizingParams.min_size`](ansys.meshing.prime.MultiZoneSizingParams.min_size.md#ansys.meshing.prime.MultiZoneSizingParams.min_size)                                                    | Defines global minimum mesh size.                        |
| [`MultiZoneSizingParams.use_volumetric_size_field`](ansys.meshing.prime.MultiZoneSizingParams.use_volumetric_size_field.md#ansys.meshing.prime.MultiZoneSizingParams.use_volumetric_size_field) | Defines whether to use size field for MultiZone meshing. |
<!-- vale on -->