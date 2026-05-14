# set_default

<a id="ansys.meshing.prime.SurferParams.set_default"></a>

#### *static* SurferParams.set_default(max_angle=None, size_field_type=None, min_size=None, max_size=None, growth_rate=None, constant_size=None, generate_quads=None, check_non_manifolds=None, avoid_corner_triangles=None, smooth_size_transition=None, advanced_surfer_setup=None, project_on_geometry=None, enable_multi_threading=None)

Set the default values of the `SurferParams` object.

* **Parameters:**

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

<!-- !! processed by numpydoc !! -->
