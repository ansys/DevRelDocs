# SurferParams

<a id="ansys.meshing.prime.SurferParams"></a>

### *class* ansys.meshing.prime.SurferParams(model=None, max_angle=None, size_field_type=None, min_size=None, max_size=None, growth_rate=None, constant_size=None, generate_quads=None, check_non_manifolds=None, avoid_corner_triangles=None, smooth_size_transition=None, advanced_surfer_setup=None, project_on_geometry=None, enable_multi_threading=None, json_data=None, \*\*kwargs)

Parameters used to generate surface mesh.

* **Parameters:**

  **model: Model**
  : Model to create a `SurferParams` object with default parameters.

  **max_angle: float, optional**
  : Maximum feature angle limit to be used to identify and preserve features.

  **size_field_type: SizeFieldType, optional**
  : Size field type used to generate surface mesh.

  **min_size: float, optional**
  : Minimum size to be used in sizing for the surfer.

  **max_size: float, optional**
  : Maximum size to be used in sizing for the surfer.

  **growth_rate: float, optional**
  : Growth rate to be used to propagate sizes.

  **constant_size: float, optional**
  : Size used in constant size surface meshing.

  **generate_quads: bool, optional**
  : Option to generate quadrilateral surface mesh.

  **check_non_manifolds: bool, optional**
  : Option to avoid new non-manifolds(multi-connection) if generated in surface mesh.

  **avoid_corner_triangles: bool, optional**
  : Option to avoid corner triangles(with all three boundary nodes) generated.

  **smooth_size_transition: bool, optional**
  : Option to generate mesh with smooth size transition from neighbors of selected surfaces. This includes neighboring face edge sizes in sizing provided for surface meshing to achieve smooth size transition.

  **advanced_surfer_setup: AdvancedSurferSetup, optional**
  : Option to define advanced settings for remeshing operation.

  **project_on_geometry: bool, optional**
  : Option to project on CAD geometry when meshing.

  **enable_multi_threading: bool, optional**
  : Option to perform surface meshing in parallel using multithreads.

  **json_data: dict, optional**
  : JSON dictionary to create a `SurferParams` object with provided parameters.

### Examples

```pycon
>>> surfer_params = prime.SurferParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`SurferParams.print_default`](ansys.meshing.prime.SurferParams.print_default.md#ansys.meshing.prime.SurferParams.print_default)()           | Print the default values of `SurferParams` object.   |
| [`SurferParams.set_default`](ansys.meshing.prime.SurferParams.set_default.md#ansys.meshing.prime.SurferParams.set_default)([max_angle, ...]) | Set the default values of the `SurferParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`SurferParams.advanced_surfer_setup`](ansys.meshing.prime.SurferParams.advanced_surfer_setup.md#ansys.meshing.prime.SurferParams.advanced_surfer_setup)    | Option to define advanced settings for remeshing operation.                              |
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
