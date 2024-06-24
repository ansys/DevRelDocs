# ansys.meshing.prime.CollapseParams.set_default

<a id="ansys.meshing.prime.CollapseParams.set_default"></a>

#### *static* CollapseParams.set_default(feature_type=None, collapse_ratio=None, preserve_quality=None, target_skewness=None)

Set the default values of the `CollapseParams` object.

* **Parameters:**
  **feature_type: SurfaceFeatureType, optional**
  : Feature type to be preserved when performing collapse.

  **collapse_ratio: float, optional**
  : Maximum ratio of shortest face edge length to longest face edge length.

  **preserve_quality: bool, optional**
  : Option to preserve quality of neighboring triangles when performing collapse.Collapse may lead to quality deterioration beyond target skewness. Such collapse is prevented, when the option is enabled.

  **target_skewness: float, optional**
  : Skewness limit used as target to preserve quality. Better quality elements are skipped for collapse.

<!-- !! processed by numpydoc !! -->
