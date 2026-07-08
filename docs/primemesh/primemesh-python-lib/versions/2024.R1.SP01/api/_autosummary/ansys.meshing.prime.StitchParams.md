<!-- vale off -->

# StitchParams

### *class* ansys.meshing.prime.StitchParams(model=None, tolerance=None, use_absolute_tolerance=None, remesh=None, enable_multi_threading=None, type=None, json_data=None, \*\*kwargs)

Parameters used for stitch operation.

<!-- !! processed by numpydoc !! -->

### Methods

| [`StitchParams.print_default`](ansys.meshing.prime.StitchParams.print_default.md#ansys.meshing.prime.StitchParams.print_default)()           | Print the default values of StitchParams.   |
|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`StitchParams.set_default`](ansys.meshing.prime.StitchParams.set_default.md#ansys.meshing.prime.StitchParams.set_default)([tolerance, ...]) | Set the default values of StitchParams.     |

### Attributes

| [`StitchParams.enable_multi_threading`](ansys.meshing.prime.StitchParams.enable_multi_threading.md#ansys.meshing.prime.StitchParams.enable_multi_threading)   | Option to run stitch in parallel using multithread.                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`StitchParams.remesh`](ansys.meshing.prime.StitchParams.remesh.md#ansys.meshing.prime.StitchParams.remesh)                                                   | Remesh at stitch connection.                                              |
| [`StitchParams.tolerance`](ansys.meshing.prime.StitchParams.tolerance.md#ansys.meshing.prime.StitchParams.tolerance)                                          | Distance tolerance for stitching boundaries.                              |
| [`StitchParams.type`](ansys.meshing.prime.StitchParams.type.md#ansys.meshing.prime.StitchParams.type)                                                         | Stitch type depending on nature of surface boundary edges to be stitched. |
| [`StitchParams.use_absolute_tolerance`](ansys.meshing.prime.StitchParams.use_absolute_tolerance.md#ansys.meshing.prime.StitchParams.use_absolute_tolerance)   | True if tolerance provided is absolute value.                             |
<!-- vale on -->
