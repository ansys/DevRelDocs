<!-- vale off -->

# WrapperCloseGapsParams

### *class* ansys.meshing.prime.WrapperCloseGapsParams(model=None, target=None, gap_size=None, material_point_name=None, suggested_part_name=None, number_of_threads=None, create_new_part=None, resolution_factor=None, json_data=None, \*\*kwargs)

WrapperCloseGapsParams to define parameters for close gaps operation.

<!-- !! processed by numpydoc !! -->

### Methods

| [`WrapperCloseGapsParams.print_default`](ansys.meshing.prime.WrapperCloseGapsParams.print_default.md#ansys.meshing.prime.WrapperCloseGapsParams.print_default)()        | Print the default values of WrapperCloseGapsParams.   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`WrapperCloseGapsParams.set_default`](ansys.meshing.prime.WrapperCloseGapsParams.set_default.md#ansys.meshing.prime.WrapperCloseGapsParams.set_default)([target, ...]) | Set the default values of WrapperCloseGapsParams.     |

### Attributes

| [`WrapperCloseGapsParams.create_new_part`](ansys.meshing.prime.WrapperCloseGapsParams.create_new_part.md#ansys.meshing.prime.WrapperCloseGapsParams.create_new_part)             | Creates a new gap closure part.                                       |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`WrapperCloseGapsParams.gap_size`](ansys.meshing.prime.WrapperCloseGapsParams.gap_size.md#ansys.meshing.prime.WrapperCloseGapsParams.gap_size)                                  | Maximum gap size to be closed.                                        |
| [`WrapperCloseGapsParams.material_point_name`](ansys.meshing.prime.WrapperCloseGapsParams.material_point_name.md#ansys.meshing.prime.WrapperCloseGapsParams.material_point_name) | Material point name near the gaps to be closed.                       |
| [`WrapperCloseGapsParams.number_of_threads`](ansys.meshing.prime.WrapperCloseGapsParams.number_of_threads.md#ansys.meshing.prime.WrapperCloseGapsParams.number_of_threads)       | Number of threads for multithreading.                                 |
| [`WrapperCloseGapsParams.resolution_factor`](ansys.meshing.prime.WrapperCloseGapsParams.resolution_factor.md#ansys.meshing.prime.WrapperCloseGapsParams.resolution_factor)       | Factor to resolve the smallest gap for the given gap size.            |
| [`WrapperCloseGapsParams.suggested_part_name`](ansys.meshing.prime.WrapperCloseGapsParams.suggested_part_name.md#ansys.meshing.prime.WrapperCloseGapsParams.suggested_part_name) | Suggested part name for created patching surfaces.                    |
| [`WrapperCloseGapsParams.target`](ansys.meshing.prime.WrapperCloseGapsParams.target.md#ansys.meshing.prime.WrapperCloseGapsParams.target)                                        | Scope of target face zonelets to patch gaps between scope and target. |
<!-- vale on -->
