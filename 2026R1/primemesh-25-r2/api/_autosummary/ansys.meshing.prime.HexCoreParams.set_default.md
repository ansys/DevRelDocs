# set_default

<a id="ansys.meshing.prime.HexCoreParams.set_default"></a>

#### *static* HexCoreParams.set_default(transition_size_field_type=None, buffer_layers=None, rel_peel_layer_offset=None, transition_layer_type=None, cell_element_type=None, surface_mesh_size_scaling=None, enable_region_based_hexcore=None)

Set the default values of the `HexCoreParams` object.

* **Parameters:**

  **transition_size_field_type: SizeFieldType, optional**
  : Size field type to be used for transition volume (volume between hexcore and boundary).

  **buffer_layers: int, optional**
  : Minimum number of cell layers of the same size before the cell size halves or doubles.

  **rel_peel_layer_offset: float, optional**
  : Gap between hexahedral core and geometry surface relative to the surface mesh size.

  **transition_layer_type: HexCoreTransitionLayerType, optional**
  : Handle size transition of hex cells.

  **cell_element_type: HexCoreCellElementType, optional**
  : Cell element type of hex-shaped cells.

  **surface_mesh_size_scaling: SurfaceMeshSizeScaling, optional**
  : Setting for scaling surface mesh size for hexcore refinement.

  **enable_region_based_hexcore: bool, optional**
  : Checks whether to enable region based hexcore or not.

<!-- !! processed by numpydoc !! -->
