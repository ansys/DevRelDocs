# ansys.meshing.prime.ExportMapdlCdbParams.set_default

#### *static* ExportMapdlCdbParams.set_default(material_properties=None, boundary_conditions=None, write_cells=None, enable_face_based_labels=None, write_by_zones=None, simulation_type=None)

Set the default values of ExportMapdlCdbParams.

* **Parameters:**
  **material_properties: str, optional**
  : Materials in CDB format that will be added to the file.

  **boundary_conditions: str, optional**
  : Boundary conditions in CDB format that will be appended to the file.

  **write_cells: bool, optional**
  : Option to write out cells as part of the file.

  **enable_face_based_labels: bool, optional**
  : Option to write element components for labels.

  **write_by_zones: bool, optional**
  : Option to write zones in the file.

  **simulation_type: CdbSimulationType, optional**
  : Simulation type for the file.

<!-- !! processed by numpydoc !! -->
