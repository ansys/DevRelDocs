<!-- vale off -->

# MeshStackerParams

### *class* ansys.meshing.prime.MeshStackerParams(model=None, origin=None, direction=None, lateral_defeature_tolerance=None, stacking_defeature_tolerance=None, max_offset_size=None, size_control_ids=None, delete_base=None, json_data=None, \*\*kwargs)

Input parameters associated with the mesh stacker operations.

<!-- !! processed by numpydoc !! -->

### Methods

| [`MeshStackerParams.print_default`](ansys.meshing.prime.MeshStackerParams.print_default.md#ansys.meshing.prime.MeshStackerParams.print_default)()        | Print the default values of MeshStackerParams.   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`MeshStackerParams.set_default`](ansys.meshing.prime.MeshStackerParams.set_default.md#ansys.meshing.prime.MeshStackerParams.set_default)([origin, ...]) | Set the default values of MeshStackerParams.     |

### Attributes

| [`MeshStackerParams.delete_base`](ansys.meshing.prime.MeshStackerParams.delete_base.md#ansys.meshing.prime.MeshStackerParams.delete_base)                                                    | Option to delete base face at the end of stacking.   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`MeshStackerParams.direction`](ansys.meshing.prime.MeshStackerParams.direction.md#ansys.meshing.prime.MeshStackerParams.direction)                                                          | Direction vector of stacker.                         |
| [`MeshStackerParams.lateral_defeature_tolerance`](ansys.meshing.prime.MeshStackerParams.lateral_defeature_tolerance.md#ansys.meshing.prime.MeshStackerParams.lateral_defeature_tolerance)    | Absolute lateral distance tolerance for stacker.     |
| [`MeshStackerParams.max_offset_size`](ansys.meshing.prime.MeshStackerParams.max_offset_size.md#ansys.meshing.prime.MeshStackerParams.max_offset_size)                                        | Maximum stack size allowed during stacking.          |
| [`MeshStackerParams.origin`](ansys.meshing.prime.MeshStackerParams.origin.md#ansys.meshing.prime.MeshStackerParams.origin)                                                                   | Origin coordinate list of stacker.                   |
| [`MeshStackerParams.size_control_ids`](ansys.meshing.prime.MeshStackerParams.size_control_ids.md#ansys.meshing.prime.MeshStackerParams.size_control_ids)                                     | List of size control ids to be respected by stacker. |
| [`MeshStackerParams.stacking_defeature_tolerance`](ansys.meshing.prime.MeshStackerParams.stacking_defeature_tolerance.md#ansys.meshing.prime.MeshStackerParams.stacking_defeature_tolerance) | Absolute stacking distance tolerance for stacker.    |
<!-- vale on -->
