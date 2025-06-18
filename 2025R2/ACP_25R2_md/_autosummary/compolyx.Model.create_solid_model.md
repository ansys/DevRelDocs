# create_solid_model

<a id="compolyx.Model.create_solid_model"></a>

#### Model.create_solid_model(name, id='', active=True, element_sets=None, ex_type=None, drop_off_type=None, offset_type=None, max_thickness=None, ply_group_pointers=None, element_set=None, skip_elements_without_plies=False, use_default_element_index=True, element_index=0, use_default_node_index=True, node_index=0, use_default_section_index=True, section_index=0, use_default_material_index=True, material_index=0, use_default_coordinate_system_index=True, coordinate_system_index=0, connect_butt_joined_plies=True, write_degenerated_elements=True, use_solsh_elements=False, use_solid_model_prefix=True, global_drop_off_material=None, global_cut_off_material=None, transfer_all_sets=True, transferred_element_sets=[], transferred_edge_sets=[], delete_bad_elements=True, disable_dropoffs_on_top=False, disable_dropoffs_on_bottom=False, disable_dropoff_sets_on_top='all', disable_dropoff_sets_on_bottom='all', warping_limit=0.4, minimum_volume=0.0, drop_hanging_nodes=True, locked=False)

Create a new solid model.

* **Parameters:**
  - name: The name of the solid model.
  - id: The ID of the solid model.
  - active: Active status of the solid model.
  - element_sets: A list of element sets.
  - ex_type:
    Extrusion method. Possible values are:
    \* monolithic (1 element through the thickness)
    \* analysis_ply_wise (1 element per layer)
    \* modeling_ply_wise (1 element for each modeling ply)
    \* production_ply_wise (1 element for each production ply)
    \* specify_thickness (1 element per layer, layers thicker than max_thickness are split to several solids of at most max_thickness)
    \* user_defined (groups plies by global ply numbers to groups)
    \* material_wise (groups subsequent plies with equal material)
  - drop_off_type: Valid options: inside ply (one element inside the ply boundary) and outside ply (one element outside the ply boundary).
  - offset_type: Valid options: shell normal (offset to the shell normal), surface normal (update normal direction by normal of layered solids), and distortion controlled (surface normal with local corrections).
  - max_thickness: Maximum thickness for one solid, splits the layer into more solids, if a single layer is thicker than this value (only for ex_type=\`specify thickness\`).
  - ply_group_pointers: Step used to make user-defined ply groups.
  - element_set: (deprecated, use element_sets instead) A single element set.
  - skip_elements_without_plies: Whether to remove elements without plies from the region of extrusion.
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
  - connect_butt_joined_plies: Connect adjacent plies without intermediate drop-offs.
  - write_degenerated_elements: Degenerated drop-off and cut-off elements are written to the \*cdb file.
  - use_solsh_elements: The solid model is created out of solsh elements.
  - use_solid_model_prefix: The name of the solid model is used as a prefix for all components written to the \*cdb file.
  - global_drop_off_material: Defines the global drop-off material.
  - global_cut_off_material: Defines the global cut-off material.
  - transfer_all_sets: Defines whether all edge and element sets should be transferred to the solid model.
  - transferred_element_sets: Element sets to transfer to the solid model if transfer_all_sets is set to false.
  - transferred_edge_sets: Edge sets to transfer to the solid model if transfer_all_sets is set to false.
  - delete_bad_elements: Boolean for whether to delete the erroneous elements.
  - disable_dropoffs_on_top: Boolean for whether to disalbe the drop-off elements on the top surface of the laminate.
  - disable_dropoffs_on_bottom: Boolean for whether to disalbe the drop-off elements on the bottom surface of the laminate.
  - disable_dropoff_sets_on_top: List of element or oriented selection sets defining the region where the drop-offs are disabled on the top skin of the laminate. Default is ‘all’.
  - disable_dropoff_sets_on_bottom: List of element or oriented selection sets defining the region where the drop-offs are disabled on the bottom skin of the laminate. Default is ‘all’.
  - warping_limit: Warping limit factor used to detect erroneous elements.
  - minimum_volume: Minimum volume of solid elements. Default is ‘0’. Elements equal or smaller than this limit are removed from the solid model.
  - drop_hanging_nodes: Hanging nodes are dropped (not exported) if set to true. Hanging nodes are mid-side nodes that are not shared by adjacent elements.
* **Returns:**
  The created solid model.
