# ansys.meshing.prime.ExportMapdlCdbParams.set_default

<a id="ansys.meshing.prime.ExportMapdlCdbParams.set_default"></a>

#### *static* ExportMapdlCdbParams.set_default(config_settings=None, pre_solution_settings=None, material_properties=None, boundary_conditions=None, analysis_settings=None, write_cells=None, enable_face_based_labels=None, write_by_zones=None, consider_general_connectors_as_spot_weld=None, simulation_type=None, analysis_settings_file_name=None)

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
  : Option to write element components for labels.

  **write_by_zones: bool, optional**
  : Option to write zones in the file.

  **consider_general_connectors_as_spot_weld: bool, optional**
  : Option to translate all general connector joints (other than axial) to spot weld type. This is important when nodes are non coincident.

  **simulation_type: CdbSimulationType, optional**
  : Simulation type for the file.

  **analysis_settings_file_name: str, optional**
  : File path to export mapdl analysis settings.

<!-- !! processed by numpydoc !! -->
