# write_h5_and_cdb_file

<a id="compolyx.ImportedSolidModel.write_h5_and_cdb_file"></a>

#### ImportedSolidModel.write_h5_and_cdb_file(path, wb_mesh_transfer)

Writes the .h5 and .cdb file for ANSYS Workbench application. The file extensions are added automatically.

* **Parameters:**
  - path: The file path without extension.
  - wb_mesh_transfer: Boolean for whether the files are consumed by the Mechanical application.
* **Usage:**
  solid_model.write_h5_and_cdb_file(r’C:        mphull_solid_model’, True)
