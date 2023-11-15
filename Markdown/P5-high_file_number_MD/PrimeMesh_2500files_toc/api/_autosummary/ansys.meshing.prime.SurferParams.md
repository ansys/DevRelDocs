<!-- vale off -->

# SurferParams

### *class* ansys.meshing.prime.SurferParams(model=None, max_angle=None, size_field_type=None, min_size=None, max_size=None, growth_rate=None, constant_size=None, generate_quads=None, check_non_manifolds=None, avoid_corner_triangles=None, smooth_size_transition=None, advanced_surfer_setup=None, project_on_geometry=None, enable_multi_threading=None, json_data=None, \*\*kwargs)

Parameters used to generate surface mesh.

<!-- !! processed by numpydoc !! -->

### Methods

| [`SurferParams.print_default`](ansys.meshing.prime.SurferParams.print_default.md#ansys.meshing.prime.SurferParams.print_default)()           | Print the default values of SurferParams.   |
|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`SurferParams.set_default`](ansys.meshing.prime.SurferParams.set_default.md#ansys.meshing.prime.SurferParams.set_default)([max_angle, ...]) | Set the default values of SurferParams.     |

### Attributes

| [`SurferParams.advanced_surfer_setup`](ansys.meshing.prime.SurferParams.advanced_surfer_setup.md#ansys.meshing.prime.SurferParams.advanced_surfer_setup)    | Option to define advanced settings for remeshing operation.                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`SurferParams.avoid_corner_triangles`](ansys.meshing.prime.SurferParams.avoid_corner_triangles.md#ansys.meshing.prime.SurferParams.avoid_corner_triangles) | Option to avoid corner triangles(with all three boundary nodes) generated.               |
| [`SurferParams.check_non_manifolds`](ansys.meshing.prime.SurferParams.check_non_manifolds.md#ansys.meshing.prime.SurferParams.check_non_manifolds)          | Option to avoid new non-manifolds(multi-connection) if generated in surface mesh.        |
| [`SurferParams.constant_size`](ansys.meshing.prime.SurferParams.constant_size.md#ansys.meshing.prime.SurferParams.constant_size)                            | Size used in constant size surface meshing.                                              |
| [`SurferParams.enable_multi_threading`](ansys.meshing.prime.SurferParams.enable_multi_threading.md#ansys.meshing.prime.SurferParams.enable_multi_threading) | Option to perform surface meshing in parallel using multithreads.                        |
| [`SurferParams.generate_quads`](ansys.meshing.prime.SurferParams.generate_quads.md#ansys.meshing.prime.SurferParams.generate_quads)                         | Option to generate quadrilateral surface mesh.                                           |
| [`SurferParams.growth_rate`](ansys.meshing.prime.SurferParams.growth_rate.md#ansys.meshing.prime.SurferParams.growth_rate)                                  | Growth rate to be used to propagate sizes.                                               |
| [`SurferParams.max_angle`](ansys.meshing.prime.SurferParams.max_angle.md#ansys.meshing.prime.SurferParams.max_angle)                                        | Maximum feature angle limit to be used to identify and preserve features.                |
| [`SurferParams.max_size`](ansys.meshing.prime.SurferParams.max_size.md#ansys.meshing.prime.SurferParams.max_size)                                           | Maximum size to be used in sizing for the surfer.                                        |
| [`SurferParams.min_size`](ansys.meshing.prime.SurferParams.min_size.md#ansys.meshing.prime.SurferParams.min_size)                                           | Minimum size to be used in sizing for the surfer.                                        |
| [`SurferParams.project_on_geometry`](ansys.meshing.prime.SurferParams.project_on_geometry.md#ansys.meshing.prime.SurferParams.project_on_geometry)          | Option to project on CAD geometry when meshing.                                          |
| [`SurferParams.size_field_type`](ansys.meshing.prime.SurferParams.size_field_type.md#ansys.meshing.prime.SurferParams.size_field_type)                      | Size field type used to generate surface mesh.                                           |
| [`SurferParams.smooth_size_transition`](ansys.meshing.prime.SurferParams.smooth_size_transition.md#ansys.meshing.prime.SurferParams.smooth_size_transition) | Option to generate mesh with smooth size transition from neighbors of selected surfaces. |
<!-- vale on -->
