<!-- vale off -->

# CurvatureSizingParams

### *class* ansys.meshing.prime.CurvatureSizingParams(model=None, min=None, max=None, growth_rate=None, normal_angle=None, use_cad_curvature=None, json_data=None, \*\*kwargs)

Size field using curvature size control computes edge and face sizes using their size and normal angle parameters.

The curvature size control uses the normal angle parameter as the maximum allowable angle that one element edge may span.
For example, a value of 5 implies that a division will be made when the angle change along the curve is 5 degrees.
Hence, a 90 degree arc will be divided into approximately 18 segments.

<!-- !! processed by numpydoc !! -->

### Methods

| [`CurvatureSizingParams.print_default`](ansys.meshing.prime.CurvatureSizingParams.print_default.md#ansys.meshing.prime.CurvatureSizingParams.print_default)()     | Print the default values of CurvatureSizingParams.   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`CurvatureSizingParams.set_default`](ansys.meshing.prime.CurvatureSizingParams.set_default.md#ansys.meshing.prime.CurvatureSizingParams.set_default)([min, ...]) | Set the default values of CurvatureSizingParams.     |

### Attributes

| [`CurvatureSizingParams.growth_rate`](ansys.meshing.prime.CurvatureSizingParams.growth_rate.md#ansys.meshing.prime.CurvatureSizingParams.growth_rate)                   | Growth rate used for transitioning from one element size to neighbor element size.   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`CurvatureSizingParams.max`](ansys.meshing.prime.CurvatureSizingParams.max.md#ansys.meshing.prime.CurvatureSizingParams.max)                                           | Maximum size used for computing edge and face size using curavture size control.     |
| [`CurvatureSizingParams.min`](ansys.meshing.prime.CurvatureSizingParams.min.md#ansys.meshing.prime.CurvatureSizingParams.min)                                           | Minimum size used for computing edge and face size using curavture size control.     |
| [`CurvatureSizingParams.normal_angle`](ansys.meshing.prime.CurvatureSizingParams.normal_angle.md#ansys.meshing.prime.CurvatureSizingParams.normal_angle)                | Maximum allowable angle at which one element edge may span.                          |
| [`CurvatureSizingParams.use_cad_curvature`](ansys.meshing.prime.CurvatureSizingParams.use_cad_curvature.md#ansys.meshing.prime.CurvatureSizingParams.use_cad_curvature) | Option to enable use of CAD curvature for computing edge and face size.              |
<!-- vale on -->
