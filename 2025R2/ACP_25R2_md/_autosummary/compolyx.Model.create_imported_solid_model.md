# create_imported_solid_model

<a id="compolyx.Model.create_imported_solid_model"></a>

#### Model.create_imported_solid_model(name, id='', active=True, external_file_path=None, unit_system='undefined', format='ansys:cdb', ext_id='', use_default_element_index=True, element_index=0, use_default_node_index=True, node_index=0, use_default_section_index=True, section_index=0, use_default_material_index=True, material_index=0, use_default_coordinate_system_index=True, coordinate_system_index=0, use_solsh_elements=False, drop_hanging_nodes=True, use_solid_model_prefix=True, write_degenerated_elements=True, delete_bad_elements=True, warping_limit=0.4, minimum_volume=0.0, global_cut_off_material=None, transfer_all_sets=True, transferred_element_sets=[], transferred_edge_sets=[], locked=False, from_pre=False)

Create a new solid model.

* **Parameters:**
  - name: The name of the solid model.
  - id: The ID of the solid model.
  - active: Active status of the solid model.
  - external_file_path: File path to the external source.
  - unit_system: Unit system of the imported mesh.
  - format: File format of the external source.
  - use_default_element_index: Consecutive element numbering if set to true.
  - element_index: Start index for first element (only relevant if use_default_element_index).
  - use_default_node_index: Consecutive node numbering if set to true.
  - node_index: Start index for first node (only relevant if use_default_node_index).
  - use_default_section_index: Consecutive section numbering if set to true.
  - section_index: Start index for first element (only relevant if use_default_section_index).
  - use_default_material_index: Consecutive material numbering if set to true.
  - material_index: Start index for first element (only relevant if use_default_material_index).
  - use_default_coordinate_system_index: Consecutive coordinate system numbering if set to true.
  - coordinate_system_index: Start index for first coordinate system (only relevant if use_default_coordinate_system_index).
  - use_solsh_elements: The solid model is created out of solsh elements.
  - drop_hanging_nodes: Whether to skip mid-side nodes that are not shared by adjacent elements. Only relevant when the object has applies cut-off geometries and a quadratic mesh.
  - use_solid_model_prefix: The name of the solid model is used as a prefix for all components written to the \*cdb file.
  - write_degenerated_elements: If false, degenerated (homogeneous) elements are not exported.
  - delete_bad_elements: Boolean for whether to delete the erroneous elements.
  - warping_limit: Warping limit factor used to detect erroneous elements.
  - minimum_volume: Minimum volume of solid elements. Default is ‘0’. Elements equal or smaller than this limit are removed from the solid model.
  - global_cut_off_material: Defines the global cut-off material.
  - transfer_all_sets: Defines whether all edge and element sets should be transferred to the solid model.
  - transferred_element_sets: Element sets to transfer to the solid model if transfer_all_sets is set to false.
  - transferred_edge_sets: Edge sets to transfer to the solid model if transfer_all_sets is set to false.
* **Returns:**
  The created imported solid model.
