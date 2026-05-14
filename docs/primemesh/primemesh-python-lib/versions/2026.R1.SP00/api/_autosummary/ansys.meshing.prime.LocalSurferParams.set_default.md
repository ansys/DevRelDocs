# set_default

<a id="ansys.meshing.prime.LocalSurferParams.set_default"></a>

#### *static* LocalSurferParams.set_default(min_angle=None, max_angle=None, size_field_type=None, min_size=None, max_size=None, growth_rate=None, constant_size=None, smooth_boundary=None, n_rings=None)

Set the default values of the `LocalSurferParams` object.

* **Parameters:**

  **min_angle: float, optional**
  : Minimum feature angle limit used to identify and preserve features.

  **max_angle: float, optional**
  : Maximum feature angle limit used to identify and preserve features.

  **size_field_type: SizeFieldType, optional**
  : Size field type used to generate surface mesh.

  **min_size: float, optional**
  : Minimum size to be used in sizing for the surfer.

  **max_size: float, optional**
  : Maximum size to be used in sizing for the surfer.

  **growth_rate: float, optional**
  : Growth rate to be used to propagate sizes.

  **constant_size: float, optional**
  : Constant size to be used in case of constant size field.

  **smooth_boundary: bool, optional**
  : Option to extend local selection to get smooth boundary of selected elements.

  **n_rings: int, optional**
  : Number of rings to extend the registered face selection for remeshing.

<!-- !! processed by numpydoc !! -->
