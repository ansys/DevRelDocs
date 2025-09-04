# set_default

<a id="ansys.meshing.prime.PrismControlGrowthParams.set_default"></a>

#### *static* PrismControlGrowthParams.set_default(offset_type=None, n_layers=None, growth_rate=None, first_height=None, first_aspect_ratio=None, last_aspect_ratio=None, min_aspect_ratio=None)

Set the default values of the `PrismControlGrowthParams` object.

* **Parameters:**

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

<!-- !! processed by numpydoc !! -->
