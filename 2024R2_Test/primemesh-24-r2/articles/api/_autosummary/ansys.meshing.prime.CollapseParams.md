# CollapseParams



### *class* ansys.meshing.prime.CollapseParams(model=None, feature_type=None, collapse_ratio=None, preserve_quality=None, target_skewness=None, json_data=None, \*\*kwargs)

Parameters to collapse face elements.

* **Parameters:**
  **model: Model**
  : Model to create a `CollapseParams` object with default parameters.

  **feature_type: SurfaceFeatureType, optional**
  : Feature type to be preserved when performing collapse.

  **collapse_ratio: float, optional**
  : Maximum ratio of shortest face edge length to longest face edge length.

  **preserve_quality: bool, optional**
  : Option to preserve quality of neighboring triangles when performing collapse.Collapse may lead to quality deterioration beyond target skewness. Such collapse is prevented, when the option is enabled.

  **target_skewness: float, optional**
  : Skewness limit used as target to preserve quality. Better quality elements are skipped for collapse.

  **json_data: dict, optional**
  : JSON dictionary to create a `CollapseParams` object with provided parameters.

### Examples

```pycon
>>> collapse_params = prime.CollapseParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`CollapseParams.print_default`](ansys.meshing.prime.CollapseParams.print_default.md#ansys.meshing.prime.CollapseParams.print_default)()              | Print the default values of `CollapseParams` object.   |
| [`CollapseParams.set_default`](ansys.meshing.prime.CollapseParams.set_default.md#ansys.meshing.prime.CollapseParams.set_default)([feature_type, ...]) | Set the default values of the `CollapseParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| [`CollapseParams.collapse_ratio`](ansys.meshing.prime.CollapseParams.collapse_ratio.md#ansys.meshing.prime.CollapseParams.collapse_ratio)       | Maximum ratio of shortest face edge length to longest face edge length.                                                                         |
| [`CollapseParams.feature_type`](ansys.meshing.prime.CollapseParams.feature_type.md#ansys.meshing.prime.CollapseParams.feature_type)             | Feature type to be preserved when performing collapse.                                                                                          |
| [`CollapseParams.preserve_quality`](ansys.meshing.prime.CollapseParams.preserve_quality.md#ansys.meshing.prime.CollapseParams.preserve_quality) | Option to preserve quality of neighboring triangles when performing collapse.Collapse may lead to quality deterioration beyond target skewness. |
| [`CollapseParams.target_skewness`](ansys.meshing.prime.CollapseParams.target_skewness.md#ansys.meshing.prime.CollapseParams.target_skewness)    | Skewness limit used as target to preserve quality.                                                                                              |

