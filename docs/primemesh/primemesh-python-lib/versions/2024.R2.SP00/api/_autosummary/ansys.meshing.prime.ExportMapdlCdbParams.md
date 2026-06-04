# ExportMapdlCdbParams



### *class* ansys.meshing.prime.ExportMapdlCdbParams(model=None, config_settings=None, pre_solution_settings=None, material_properties=None, boundary_conditions=None, analysis_settings=None, write_cells=None, enable_face_based_labels=None, write_by_zones=None, consider_general_connectors_as_spot_weld=None, simulation_type=None, analysis_settings_file_name=None, json_data=None, \*\*kwargs)

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
  : Option to write element components for labels.
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

  **simulation_type: CdbSimulationType, optional**
  : Simulation type for the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **analysis_settings_file_name: str, optional**
  : File path to export mapdl analysis settings.
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
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`ExportMapdlCdbParams.analysis_settings`](ansys.meshing.prime.ExportMapdlCdbParams.analysis_settings.md#ansys.meshing.prime.ExportMapdlCdbParams.analysis_settings)                                                                      | MAPDL analysis settings in CDB format to be added after the solution block in the file.   |
| [`ExportMapdlCdbParams.analysis_settings_file_name`](ansys.meshing.prime.ExportMapdlCdbParams.analysis_settings_file_name.md#ansys.meshing.prime.ExportMapdlCdbParams.analysis_settings_file_name)                                        | File path to export mapdl analysis settings.                                              |
| [`ExportMapdlCdbParams.boundary_conditions`](ansys.meshing.prime.ExportMapdlCdbParams.boundary_conditions.md#ansys.meshing.prime.ExportMapdlCdbParams.boundary_conditions)                                                                | Boundary conditions in CDB format to be added to the file.                                |
| [`ExportMapdlCdbParams.config_settings`](ansys.meshing.prime.ExportMapdlCdbParams.config_settings.md#ansys.meshing.prime.ExportMapdlCdbParams.config_settings)                                                                            | MAPDL configuration settings in CDB format to be added at the beginning of the file.      |
| [`ExportMapdlCdbParams.consider_general_connectors_as_spot_weld`](ansys.meshing.prime.ExportMapdlCdbParams.consider_general_connectors_as_spot_weld.md#ansys.meshing.prime.ExportMapdlCdbParams.consider_general_connectors_as_spot_weld) | Option to translate all general connector joints (other than axial) to spot weld type.    |
| [`ExportMapdlCdbParams.enable_face_based_labels`](ansys.meshing.prime.ExportMapdlCdbParams.enable_face_based_labels.md#ansys.meshing.prime.ExportMapdlCdbParams.enable_face_based_labels)                                                 | Option to write element components for labels.                                            |
| [`ExportMapdlCdbParams.material_properties`](ansys.meshing.prime.ExportMapdlCdbParams.material_properties.md#ansys.meshing.prime.ExportMapdlCdbParams.material_properties)                                                                | Materials in CDB format to be added to the file.                                          |
| [`ExportMapdlCdbParams.pre_solution_settings`](ansys.meshing.prime.ExportMapdlCdbParams.pre_solution_settings.md#ansys.meshing.prime.ExportMapdlCdbParams.pre_solution_settings)                                                          | MAPDL Settings in CDB format to be added before the solution block in the file.           |
| [`ExportMapdlCdbParams.simulation_type`](ansys.meshing.prime.ExportMapdlCdbParams.simulation_type.md#ansys.meshing.prime.ExportMapdlCdbParams.simulation_type)                                                                            | Simulation type for the file.                                                             |
| [`ExportMapdlCdbParams.write_by_zones`](ansys.meshing.prime.ExportMapdlCdbParams.write_by_zones.md#ansys.meshing.prime.ExportMapdlCdbParams.write_by_zones)                                                                               | Option to write zones in the file.                                                        |
| [`ExportMapdlCdbParams.write_cells`](ansys.meshing.prime.ExportMapdlCdbParams.write_cells.md#ansys.meshing.prime.ExportMapdlCdbParams.write_cells)                                                                                        | Option to write out cells as part of the file.                                            |

