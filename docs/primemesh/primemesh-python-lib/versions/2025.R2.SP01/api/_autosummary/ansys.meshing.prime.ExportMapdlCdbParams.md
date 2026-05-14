# ExportMapdlCdbParams

<a id="ansys.meshing.prime.ExportMapdlCdbParams"></a>

### *class* ansys.meshing.prime.ExportMapdlCdbParams(model=None, config_settings=None, pre_solution_settings=None, material_properties=None, boundary_conditions=None, analysis_settings=None, write_cells=None, enable_face_based_labels=None, label_export_params=None, write_by_zones=None, consider_general_connectors_as_spot_weld=None, analysis_type=None, simulation_type=None, analysis_settings_file_name=None, write_separate_blocks=None, write_components_with_element_blocks=None, separate_blocks_format_type=None, export_fasteners_as_swgen=None, export_rigid_bodies_as_rbgen=None, write_component_based_ties=None, mortar_contact_for_ties=None, write_thickness_file=None, contact_element_types=None, json_data=None, \*\*kwargs)

Parameters to control MAPDL CDB export settings.

* **Parameters:**

  **model: Model**
  : Model to create a `ExportMapdlCdbParams` object with default parameters.

  **config_settings: str, optional**
  : MAPDL configuration settings in CDB format to be added at the beginning of the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **pre_solution_settings: str, optional**
  : MAPDL Settings in CDB format to be added before the solution block in the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **material_properties: str, optional**
  : Materials in CDB format to be added to the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **boundary_conditions: str, optional**
  : Boundary conditions in CDB format to be added to the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **analysis_settings: str, optional**
  : MAPDL analysis settings in CDB format to be added after the solution block in the file. Note: Boundary conditions can be included into analysis settings.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **write_cells: bool, optional**
  : Option to write out cells as part of the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **enable_face_based_labels: bool, optional**
  : Use LabelExportParams instead. Parameter enableFaceBasedLabels will be removed in 2025R2.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **label_export_params: LabelExportParams, optional**
  : Parameters to control the export of labels as Nodal or Element Components in CDB.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **write_by_zones: bool, optional**
  : Option to write zones in the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **consider_general_connectors_as_spot_weld: bool, optional**
  : Option to translate all general connector joints (other than axial) to spot weld type. This is important when nodes are non coincident.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **analysis_type: CdbAnalysisType, optional**
  : Option to specify CDB analysis type.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **simulation_type: CdbSimulationType, optional**
  : Simulation type for the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **analysis_settings_file_name: str, optional**
  : File path to export mapdl analysis settings.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **write_separate_blocks: bool, optional**
  : Controls whether element blocks should be written separately. When true, writes elements in separate blocks based on the format specified in separate_blocks_format_type. When false, writes all elements into a single block.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **write_components_with_element_blocks: bool, optional**
  : Controls whether component definitions should be written within individual element blocks. write_components_with_element_blocks only has effect when write_separate_blocks is true. When write_components_with_element_blocks is true, writes component commands for each element block. When write_components_with_element_blocks is false, writes components separately.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **separate_blocks_format_type: SeparateBlocksFormatType, optional**
  : Controls the format type when writing separate element blocks. Only used when write_separate_blocks is true.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **export_fasteners_as_swgen: bool, optional**
  : Option to export fasteners as swgen. When true, translates fasteners into compact swgen blocks in the exported file. The default value is false.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **export_rigid_bodies_as_rbgen: bool, optional**
  : Option to export rigid bodies as rbgen. When true, translates rigid bodies into compact rbgen blocks in the exported file. The default value is false.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **write_component_based_ties: bool, optional**
  : Option to write ties using component-based format. When true, writes ties using component selection and surface generation commands instead of explicit element definitions. The default value is false.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **mortar_contact_for_ties: bool, optional**
  : Option to enable mortar contact for ties. When true, changes the key options for tie surfaces. The default value is false.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **write_thickness_file: bool, optional**
  : Option to write a thickness file for spotweld fatigue analysis. If true, writes a file named [exportedFilename].cdb.thick.txt containing thickness information.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **contact_element_types: ContactElementTypeParams, optional**
  : Parameters for choosing element types for contact surfaces in TIEs and CONTACT PAIRs.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportMapdlCdbParams` object with provided parameters.

### Examples

```pycon
>>> export_mapdl_cdb_params = prime.ExportMapdlCdbParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`ExportMapdlCdbParams.print_default`](ansys.meshing.prime.ExportMapdlCdbParams.print_default.md#ansys.meshing.prime.ExportMapdlCdbParams.print_default)()   | Print the default values of `ExportMapdlCdbParams` object.   |
| [`ExportMapdlCdbParams.set_default`](ansys.meshing.prime.ExportMapdlCdbParams.set_default.md#ansys.meshing.prime.ExportMapdlCdbParams.set_default)([...])    | Set the default values of the `ExportMapdlCdbParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`ExportMapdlCdbParams.analysis_settings`](ansys.meshing.prime.ExportMapdlCdbParams.analysis_settings.md#ansys.meshing.prime.ExportMapdlCdbParams.analysis_settings)                                                                      | Boundary conditions can be included into analysis settings.                                |
| [`ExportMapdlCdbParams.analysis_settings_file_name`](ansys.meshing.prime.ExportMapdlCdbParams.analysis_settings_file_name.md#ansys.meshing.prime.ExportMapdlCdbParams.analysis_settings_file_name)                                        | File path to export mapdl analysis settings.                                               |
| [`ExportMapdlCdbParams.analysis_type`](ansys.meshing.prime.ExportMapdlCdbParams.analysis_type.md#ansys.meshing.prime.ExportMapdlCdbParams.analysis_type)                                                                                  | Option to specify CDB analysis type.                                                       |
| [`ExportMapdlCdbParams.boundary_conditions`](ansys.meshing.prime.ExportMapdlCdbParams.boundary_conditions.md#ansys.meshing.prime.ExportMapdlCdbParams.boundary_conditions)                                                                | Boundary conditions in CDB format to be added to the file.                                 |
| [`ExportMapdlCdbParams.config_settings`](ansys.meshing.prime.ExportMapdlCdbParams.config_settings.md#ansys.meshing.prime.ExportMapdlCdbParams.config_settings)                                                                            | MAPDL configuration settings in CDB format to be added at the beginning of the file.       |
| [`ExportMapdlCdbParams.consider_general_connectors_as_spot_weld`](ansys.meshing.prime.ExportMapdlCdbParams.consider_general_connectors_as_spot_weld.md#ansys.meshing.prime.ExportMapdlCdbParams.consider_general_connectors_as_spot_weld) | Option to translate all general connector joints (other than axial) to spot weld type.     |
| [`ExportMapdlCdbParams.contact_element_types`](ansys.meshing.prime.ExportMapdlCdbParams.contact_element_types.md#ansys.meshing.prime.ExportMapdlCdbParams.contact_element_types)                                                          | Parameters for choosing element types for contact surfaces in TIEs and CONTACT PAIRs.      |
| [`ExportMapdlCdbParams.enable_face_based_labels`](ansys.meshing.prime.ExportMapdlCdbParams.enable_face_based_labels.md#ansys.meshing.prime.ExportMapdlCdbParams.enable_face_based_labels)                                                 | Use LabelExportParams instead.                                                             |
| [`ExportMapdlCdbParams.export_fasteners_as_swgen`](ansys.meshing.prime.ExportMapdlCdbParams.export_fasteners_as_swgen.md#ansys.meshing.prime.ExportMapdlCdbParams.export_fasteners_as_swgen)                                              | Option to export fasteners as swgen.                                                       |
| [`ExportMapdlCdbParams.export_rigid_bodies_as_rbgen`](ansys.meshing.prime.ExportMapdlCdbParams.export_rigid_bodies_as_rbgen.md#ansys.meshing.prime.ExportMapdlCdbParams.export_rigid_bodies_as_rbgen)                                     | Option to export rigid bodies as rbgen.                                                    |
| [`ExportMapdlCdbParams.label_export_params`](ansys.meshing.prime.ExportMapdlCdbParams.label_export_params.md#ansys.meshing.prime.ExportMapdlCdbParams.label_export_params)                                                                | Parameters to control the export of labels as Nodal or Element Components in CDB.          |
| [`ExportMapdlCdbParams.material_properties`](ansys.meshing.prime.ExportMapdlCdbParams.material_properties.md#ansys.meshing.prime.ExportMapdlCdbParams.material_properties)                                                                | Materials in CDB format to be added to the file.                                           |
| [`ExportMapdlCdbParams.mortar_contact_for_ties`](ansys.meshing.prime.ExportMapdlCdbParams.mortar_contact_for_ties.md#ansys.meshing.prime.ExportMapdlCdbParams.mortar_contact_for_ties)                                                    | Option to enable mortar contact for ties.                                                  |
| [`ExportMapdlCdbParams.pre_solution_settings`](ansys.meshing.prime.ExportMapdlCdbParams.pre_solution_settings.md#ansys.meshing.prime.ExportMapdlCdbParams.pre_solution_settings)                                                          | MAPDL Settings in CDB format to be added before the solution block in the file.            |
| [`ExportMapdlCdbParams.separate_blocks_format_type`](ansys.meshing.prime.ExportMapdlCdbParams.separate_blocks_format_type.md#ansys.meshing.prime.ExportMapdlCdbParams.separate_blocks_format_type)                                        | Controls the format type when writing separate element blocks.                             |
| [`ExportMapdlCdbParams.simulation_type`](ansys.meshing.prime.ExportMapdlCdbParams.simulation_type.md#ansys.meshing.prime.ExportMapdlCdbParams.simulation_type)                                                                            | Simulation type for the file.                                                              |
| [`ExportMapdlCdbParams.write_by_zones`](ansys.meshing.prime.ExportMapdlCdbParams.write_by_zones.md#ansys.meshing.prime.ExportMapdlCdbParams.write_by_zones)                                                                               | Option to write zones in the file.                                                         |
| [`ExportMapdlCdbParams.write_cells`](ansys.meshing.prime.ExportMapdlCdbParams.write_cells.md#ansys.meshing.prime.ExportMapdlCdbParams.write_cells)                                                                                        | Option to write out cells as part of the file.                                             |
| [`ExportMapdlCdbParams.write_component_based_ties`](ansys.meshing.prime.ExportMapdlCdbParams.write_component_based_ties.md#ansys.meshing.prime.ExportMapdlCdbParams.write_component_based_ties)                                           | Option to write ties using component-based format.                                         |
| [`ExportMapdlCdbParams.write_components_with_element_blocks`](ansys.meshing.prime.ExportMapdlCdbParams.write_components_with_element_blocks.md#ansys.meshing.prime.ExportMapdlCdbParams.write_components_with_element_blocks)             | Controls whether component definitions should be written within individual element blocks. |
| [`ExportMapdlCdbParams.write_separate_blocks`](ansys.meshing.prime.ExportMapdlCdbParams.write_separate_blocks.md#ansys.meshing.prime.ExportMapdlCdbParams.write_separate_blocks)                                                          | Controls whether element blocks should be written separately.                              |
| [`ExportMapdlCdbParams.write_thickness_file`](ansys.meshing.prime.ExportMapdlCdbParams.write_thickness_file.md#ansys.meshing.prime.ExportMapdlCdbParams.write_thickness_file)                                                             | Option to write a thickness file for spotweld fatigue analysis.                            |
<!-- vale on -->