# HexCoreParams

<a id="ansys.meshing.prime.HexCoreParams"></a>

### *class* ansys.meshing.prime.HexCoreParams(model=None, transition_size_field_type=None, buffer_layers=None, rel_peel_layer_offset=None, transition_layer_type=None, cell_element_type=None, surface_mesh_size_scaling=None, enable_region_based_hexcore=None, json_data=None, \*\*kwargs)

Parameters to control hexahedral mesh generation.

* **Parameters:**

  **model: Model**
  : Model to create a `HexCoreParams` object with default parameters.

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

  **json_data: dict, optional**
  : JSON dictionary to create a `HexCoreParams` object with provided parameters.

### Examples

```pycon
>>> hex_core_params = prime.HexCoreParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`HexCoreParams.print_default`](ansys.meshing.prime.HexCoreParams.print_default.md#ansys.meshing.prime.HexCoreParams.print_default)()   | Print the default values of `HexCoreParams` object.   |
| [`HexCoreParams.set_default`](ansys.meshing.prime.HexCoreParams.set_default.md#ansys.meshing.prime.HexCoreParams.set_default)([...])    | Set the default values of the `HexCoreParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`HexCoreParams.buffer_layers`](ansys.meshing.prime.HexCoreParams.buffer_layers.md#ansys.meshing.prime.HexCoreParams.buffer_layers)                                           | Minimum number of cell layers of the same size before the cell size halves or doubles.   |
| [`HexCoreParams.cell_element_type`](ansys.meshing.prime.HexCoreParams.cell_element_type.md#ansys.meshing.prime.HexCoreParams.cell_element_type)                               | Cell element type of hex-shaped cells.                                                   |
| [`HexCoreParams.enable_region_based_hexcore`](ansys.meshing.prime.HexCoreParams.enable_region_based_hexcore.md#ansys.meshing.prime.HexCoreParams.enable_region_based_hexcore) | Checks whether to enable region based hexcore or not.                                    |
| [`HexCoreParams.rel_peel_layer_offset`](ansys.meshing.prime.HexCoreParams.rel_peel_layer_offset.md#ansys.meshing.prime.HexCoreParams.rel_peel_layer_offset)                   | Gap between hexahedral core and geometry surface relative to the surface mesh size.      |
| [`HexCoreParams.surface_mesh_size_scaling`](ansys.meshing.prime.HexCoreParams.surface_mesh_size_scaling.md#ansys.meshing.prime.HexCoreParams.surface_mesh_size_scaling)       | Setting for scaling surface mesh size for hexcore refinement.                            |
| [`HexCoreParams.transition_layer_type`](ansys.meshing.prime.HexCoreParams.transition_layer_type.md#ansys.meshing.prime.HexCoreParams.transition_layer_type)                   | Handle size transition of hex cells.                                                     |
| [`HexCoreParams.transition_size_field_type`](ansys.meshing.prime.HexCoreParams.transition_size_field_type.md#ansys.meshing.prime.HexCoreParams.transition_size_field_type)    | Size field type to be used for transition volume (volume between hexcore and boundary).  |
<!-- vale on -->