# set_default

<a id="ansys.meshing.prime.CurvatureSizingParams.set_default"></a>

#### *static* CurvatureSizingParams.set_default(min=None, max=None, growth_rate=None, normal_angle=None, use_cad_curvature=None)

Set the default values of the `CurvatureSizingParams` object.

* **Parameters:**

  **min: float, optional**
  : Minimum size used for computing edge and face size using curavture size control.

  **max: float, optional**
  : Maximum size used for computing edge and face size using curavture size control.

  **growth_rate: float, optional**
  : Growth rate used for transitioning from one element size to neighbor element size.

  **normal_angle: float, optional**
  : Maximum allowable angle at which one element edge may span.

  **use_cad_curvature: bool, optional**
  : Option to enable use of CAD curvature for computing edge and face size.

<!-- !! processed by numpydoc !! -->
