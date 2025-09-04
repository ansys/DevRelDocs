# set_default

<a id="ansys.meshing.prime.ExportMapdlCdbParams.set_default"></a>

#### *static* ExportMapdlCdbParams.set_default(config_settings=None, pre_solution_settings=None, material_properties=None, boundary_conditions=None, analysis_settings=None, write_cells=None, enable_face_based_labels=None, label_export_params=None, write_by_zones=None, consider_general_connectors_as_spot_weld=None, analysis_type=None, simulation_type=None, analysis_settings_file_name=None, write_separate_blocks=None, write_components_with_element_blocks=None, separate_blocks_format_type=None, export_fasteners_as_swgen=None, export_rigid_bodies_as_rbgen=None, write_component_based_ties=None, mortar_contact_for_ties=None, write_thickness_file=None, contact_element_types=None)

Set the default values of the `ExportMapdlCdbParams` object.

* **Parameters:**

  **config_settings: str, optional**
  : MAPDL configuration settings in CDB format to be added at the beginning of the file.

  **pre_solution_settings: str, optional**
  : MAPDL Settings in CDB format to be added before the solution block in the file.

  **material_properties: str, optional**
  : Materials in CDB format to be added to the file.

  **boundary_conditions: str, optional**
  : Boundary conditions in CDB format to be added to the file.

  **analysis_settings: str, optional**
  : MAPDL analysis settings in CDB format to be added after the solution block in the file. Note: Boundary conditions can be included into analysis settings.

  **write_cells: bool, optional**
  : Option to write out cells as part of the file.

  **enable_face_based_labels: bool, optional**
  : Use LabelExportParams instead. Parameter enableFaceBasedLabels will be removed in 2025R2.

  **label_export_params: LabelExportParams, optional**
  : Parameters to control the export of labels as Nodal or Element Components in CDB.

  **write_by_zones: bool, optional**
  : Option to write zones in the file.

  **consider_general_connectors_as_spot_weld: bool, optional**
  : Option to translate all general connector joints (other than axial) to spot weld type. This is important when nodes are non coincident.

  **analysis_type: CdbAnalysisType, optional**
  : Option to specify CDB analysis type.

  **simulation_type: CdbSimulationType, optional**
  : Simulation type for the file.

  **analysis_settings_file_name: str, optional**
  : File path to export mapdl analysis settings.

  **write_separate_blocks: bool, optional**
  : Controls whether element blocks should be written separately. When true, writes elements in separate blocks based on the format specified in separate_blocks_format_type. When false, writes all elements into a single block.

  **write_components_with_element_blocks: bool, optional**
  : Controls whether component definitions should be written within individual element blocks. write_components_with_element_blocks only has effect when write_separate_blocks is true. When write_components_with_element_blocks is true, writes component commands for each element block. When write_components_with_element_blocks is false, writes components separately.

  **separate_blocks_format_type: SeparateBlocksFormatType, optional**
  : Controls the format type when writing separate element blocks. Only used when write_separate_blocks is true.

  **export_fasteners_as_swgen: bool, optional**
  : Option to export fasteners as swgen. When true, translates fasteners into compact swgen blocks in the exported file. The default value is false.

  **export_rigid_bodies_as_rbgen: bool, optional**
  : Option to export rigid bodies as rbgen. When true, translates rigid bodies into compact rbgen blocks in the exported file. The default value is false.

  **write_component_based_ties: bool, optional**
  : Option to write ties using component-based format. When true, writes ties using component selection and surface generation commands instead of explicit element definitions. The default value is false.

  **mortar_contact_for_ties: bool, optional**
  : Option to enable mortar contact for ties. When true, changes the key options for tie surfaces. The default value is false.

  **write_thickness_file: bool, optional**
  : Option to write a thickness file for spotweld fatigue analysis. If true, writes a file named [exportedFilename].cdb.thick.txt containing thickness information.

  **contact_element_types: ContactElementTypeParams, optional**
  : Parameters for choosing element types for contact surfaces in TIEs and CONTACT PAIRs.

<!-- !! processed by numpydoc !! -->
