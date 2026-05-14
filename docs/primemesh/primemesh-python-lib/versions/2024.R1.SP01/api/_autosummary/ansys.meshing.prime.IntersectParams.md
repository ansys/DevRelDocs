<!-- vale off -->

# IntersectParams

### *class* ansys.meshing.prime.IntersectParams(model=None, tolerance=None, use_absolute_tolerance=None, remesh=None, collapse_feature_angle=None, collapse_target_skewness=None, json_data=None, \*\*kwargs)

Parameters used for intersection.

<!-- !! processed by numpydoc !! -->

### Methods

| [`IntersectParams.print_default`](ansys.meshing.prime.IntersectParams.print_default.md#ansys.meshing.prime.IntersectParams.print_default)()           | Print the default values of IntersectParams.   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| [`IntersectParams.set_default`](ansys.meshing.prime.IntersectParams.set_default.md#ansys.meshing.prime.IntersectParams.set_default)([tolerance, ...]) | Set the default values of IntersectParams.     |

### Attributes

| [`IntersectParams.collapse_feature_angle`](ansys.meshing.prime.IntersectParams.collapse_feature_angle.md#ansys.meshing.prime.IntersectParams.collapse_feature_angle)       | Angle to preserve features while performing collapse in improve operation.   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [`IntersectParams.collapse_target_skewness`](ansys.meshing.prime.IntersectParams.collapse_target_skewness.md#ansys.meshing.prime.IntersectParams.collapse_target_skewness) | Perform collapse on faces with skewness above the provided target skewness.  |
| [`IntersectParams.remesh`](ansys.meshing.prime.IntersectParams.remesh.md#ansys.meshing.prime.IntersectParams.remesh)                                                       | Local remesh at the intersection.                                            |
| [`IntersectParams.tolerance`](ansys.meshing.prime.IntersectParams.tolerance.md#ansys.meshing.prime.IntersectParams.tolerance)                                              | Intersection tolerance.                                                      |
| [`IntersectParams.use_absolute_tolerance`](ansys.meshing.prime.IntersectParams.use_absolute_tolerance.md#ansys.meshing.prime.IntersectParams.use_absolute_tolerance)       | True if tolerance provided is absolute value.                                |
<!-- vale on -->
