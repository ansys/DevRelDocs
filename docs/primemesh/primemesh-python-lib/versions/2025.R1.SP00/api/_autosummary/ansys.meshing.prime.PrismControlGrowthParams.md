# PrismControlGrowthParams

<a id="ansys.meshing.prime.PrismControlGrowthParams"></a>

### *class* ansys.meshing.prime.PrismControlGrowthParams(model=None, offset_type=None, n_layers=None, growth_rate=None, first_height=None, first_aspect_ratio=None, last_aspect_ratio=None, min_aspect_ratio=None, json_data=None, \*\*kwargs)

Growth parameters for prism control.

* **Parameters:**

  **model: Model**
  : Model to create a `PrismControlGrowthParams` object with default parameters.

  **offset_type: PrismControlOffsetType, optional**
  : Offset type controls the method that is used to compute prism layer heights. The following options are supported.The aspect ratio option takes first aspect ratio, number of layers and growth rate. It ignores first height as input.The uniform option takes first height, number of layers and growth rate. It ignores first aspect ratio as input.Aspect ratio is ratio of prism base to height.

  **n_layers: int, optional**
  : Number of prism layers to be generated. It is used for all prism control offset types.

  **growth_rate: float, optional**
  : Growth rate to be used to compute prism layer heights. It is used when prism control offset type is ASPECTRATIO or UNIFORM.

  **first_height: float, optional**
  : Height to be used for first layer and adjust following layer height based on other settings. It is used when prism control offset type is UNIFORM.

  **first_aspect_ratio: float, optional**
  : Aspect ratio to be used to compute first layer height. It is used only when prism control offset type is ASPECTRATIO.

  **last_aspect_ratio: float, optional**
  : Apsect ratio of the last layer. The heights of the other layers is computed based on number of layers and first height. This is used only when prism control offset type is LASTRATIO.

  **min_aspect_ratio: float, optional**
  : Minimum apsect ratio limit to be used for all the layers. This condition is respected in all offset types.

  **json_data: dict, optional**
  : JSON dictionary to create a `PrismControlGrowthParams` object with provided parameters.

### Examples

```pycon
>>> prism_control_growth_params = prime.PrismControlGrowthParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`PrismControlGrowthParams.print_default`](ansys.meshing.prime.PrismControlGrowthParams.print_default.md#ansys.meshing.prime.PrismControlGrowthParams.print_default)()   | Print the default values of `PrismControlGrowthParams` object.   |
| [`PrismControlGrowthParams.set_default`](ansys.meshing.prime.PrismControlGrowthParams.set_default.md#ansys.meshing.prime.PrismControlGrowthParams.set_default)([...])    | Set the default values of the `PrismControlGrowthParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [`PrismControlGrowthParams.first_aspect_ratio`](ansys.meshing.prime.PrismControlGrowthParams.first_aspect_ratio.md#ansys.meshing.prime.PrismControlGrowthParams.first_aspect_ratio)   | Aspect ratio to be used to compute first layer height.                                       |
| [`PrismControlGrowthParams.first_height`](ansys.meshing.prime.PrismControlGrowthParams.first_height.md#ansys.meshing.prime.PrismControlGrowthParams.first_height)                     | Height to be used for first layer and adjust following layer height based on other settings. |
| [`PrismControlGrowthParams.growth_rate`](ansys.meshing.prime.PrismControlGrowthParams.growth_rate.md#ansys.meshing.prime.PrismControlGrowthParams.growth_rate)                        | Growth rate to be used to compute prism layer heights.                                       |
| [`PrismControlGrowthParams.last_aspect_ratio`](ansys.meshing.prime.PrismControlGrowthParams.last_aspect_ratio.md#ansys.meshing.prime.PrismControlGrowthParams.last_aspect_ratio)      | Apsect ratio of the last layer.                                                              |
| [`PrismControlGrowthParams.min_aspect_ratio`](ansys.meshing.prime.PrismControlGrowthParams.min_aspect_ratio.md#ansys.meshing.prime.PrismControlGrowthParams.min_aspect_ratio)         | Minimum apsect ratio limit to be used for all the layers.                                    |
| [`PrismControlGrowthParams.n_layers`](ansys.meshing.prime.PrismControlGrowthParams.n_layers.md#ansys.meshing.prime.PrismControlGrowthParams.n_layers)                                 | Number of prism layers to be generated.                                                      |
| [`PrismControlGrowthParams.offset_type`](ansys.meshing.prime.PrismControlGrowthParams.offset_type.md#ansys.meshing.prime.PrismControlGrowthParams.offset_type)                        | Offset type controls the method that is used to compute prism layer heights.                 |

<!-- vale on -->
