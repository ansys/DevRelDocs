<!-- vale off -->

# LocalSurferParams

### *class* ansys.meshing.prime.LocalSurferParams(model=None, min_angle=None, max_angle=None, size_field_type=None, min_size=None, max_size=None, growth_rate=None, constant_size=None, smooth_boundary=None, n_rings=None, json_data=None, \*\*kwargs)

Parameters to perform local surface remeshing.

<!-- !! processed by numpydoc !! -->

### Methods

| [`LocalSurferParams.print_default`](ansys.meshing.prime.LocalSurferParams.print_default.md#ansys.meshing.prime.LocalSurferParams.print_default)()           | Print the default values of LocalSurferParams.   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`LocalSurferParams.set_default`](ansys.meshing.prime.LocalSurferParams.set_default.md#ansys.meshing.prime.LocalSurferParams.set_default)([min_angle, ...]) | Set the default values of LocalSurferParams.     |

### Attributes

| [`LocalSurferParams.constant_size`](ansys.meshing.prime.LocalSurferParams.constant_size.md#ansys.meshing.prime.LocalSurferParams.constant_size)       | Constant size to be used in case of constant size field.                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`LocalSurferParams.growth_rate`](ansys.meshing.prime.LocalSurferParams.growth_rate.md#ansys.meshing.prime.LocalSurferParams.growth_rate)             | Growth rate to be used to propagate sizes.                                    |
| [`LocalSurferParams.max_angle`](ansys.meshing.prime.LocalSurferParams.max_angle.md#ansys.meshing.prime.LocalSurferParams.max_angle)                   | Maximum feature angle limit used to identify and preserve features.           |
| [`LocalSurferParams.max_size`](ansys.meshing.prime.LocalSurferParams.max_size.md#ansys.meshing.prime.LocalSurferParams.max_size)                      | Maximum size to be used in sizing for the surfer.                             |
| [`LocalSurferParams.min_angle`](ansys.meshing.prime.LocalSurferParams.min_angle.md#ansys.meshing.prime.LocalSurferParams.min_angle)                   | Minimum feature angle limit used to identify and preserve features.           |
| [`LocalSurferParams.min_size`](ansys.meshing.prime.LocalSurferParams.min_size.md#ansys.meshing.prime.LocalSurferParams.min_size)                      | Minimum size to be used in sizing for the surfer.                             |
| [`LocalSurferParams.n_rings`](ansys.meshing.prime.LocalSurferParams.n_rings.md#ansys.meshing.prime.LocalSurferParams.n_rings)                         | Number of rings to extend the registered face selection for remeshing.        |
| [`LocalSurferParams.size_field_type`](ansys.meshing.prime.LocalSurferParams.size_field_type.md#ansys.meshing.prime.LocalSurferParams.size_field_type) | Size field type used to generate surface mesh.                                |
| [`LocalSurferParams.smooth_boundary`](ansys.meshing.prime.LocalSurferParams.smooth_boundary.md#ansys.meshing.prime.LocalSurferParams.smooth_boundary) | Option to extend local selection to get smooth boundary of selected elements. |
<!-- vale on -->
