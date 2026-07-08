<!-- vale off -->

# PrismControlGrowthParams

### *class* ansys.meshing.prime.PrismControlGrowthParams(model=None, offset_type=None, n_layers=None, growth_rate=None, first_height=None, first_aspect_ratio=None, last_aspect_ratio=None, min_aspect_ratio=None, json_data=None, \*\*kwargs)

Growth parameters for prism control.

<!-- !! processed by numpydoc !! -->

### Methods

| [`PrismControlGrowthParams.print_default`](ansys.meshing.prime.PrismControlGrowthParams.print_default.md#ansys.meshing.prime.PrismControlGrowthParams.print_default)()   | Print the default values of PrismControlGrowthParams.   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`PrismControlGrowthParams.set_default`](ansys.meshing.prime.PrismControlGrowthParams.set_default.md#ansys.meshing.prime.PrismControlGrowthParams.set_default)([...])    | Set the default values of PrismControlGrowthParams.     |

### Attributes

| [`PrismControlGrowthParams.first_aspect_ratio`](ansys.meshing.prime.PrismControlGrowthParams.first_aspect_ratio.md#ansys.meshing.prime.PrismControlGrowthParams.first_aspect_ratio)   | Aspect ratio to be used to compute first layer height.                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [`PrismControlGrowthParams.first_height`](ansys.meshing.prime.PrismControlGrowthParams.first_height.md#ansys.meshing.prime.PrismControlGrowthParams.first_height)                     | Height to be used for first layer and adjust following layer height based on other settings. |
| [`PrismControlGrowthParams.growth_rate`](ansys.meshing.prime.PrismControlGrowthParams.growth_rate.md#ansys.meshing.prime.PrismControlGrowthParams.growth_rate)                        | Growth rate to be used to compute prism layer heights.                                       |
| [`PrismControlGrowthParams.last_aspect_ratio`](ansys.meshing.prime.PrismControlGrowthParams.last_aspect_ratio.md#ansys.meshing.prime.PrismControlGrowthParams.last_aspect_ratio)      | Apsect ratio of the last layer.                                                              |
| [`PrismControlGrowthParams.min_aspect_ratio`](ansys.meshing.prime.PrismControlGrowthParams.min_aspect_ratio.md#ansys.meshing.prime.PrismControlGrowthParams.min_aspect_ratio)         | Minimum apsect ratio limit to be used for all the layers.                                    |
| [`PrismControlGrowthParams.n_layers`](ansys.meshing.prime.PrismControlGrowthParams.n_layers.md#ansys.meshing.prime.PrismControlGrowthParams.n_layers)                                 | Number of prism layers to be generated.                                                      |
| [`PrismControlGrowthParams.offset_type`](ansys.meshing.prime.PrismControlGrowthParams.offset_type.md#ansys.meshing.prime.PrismControlGrowthParams.offset_type)                        | Offset type controls the method that is used to compute prism layer heights.                 |
<!-- vale on -->
