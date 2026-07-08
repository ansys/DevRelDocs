# import_composite_definitions_from_acp_file

<a id="compolyx.Model.import_composite_definitions_from_acp_file"></a>

#### Model.import_composite_definitions_from_acp_file(path=None, import_mode='keep_both')

This functions loads the ACP composite definitions from an external ACP system.
Within the Workbench application, this function loads all objects except the mesh, materials, and plots.
In the stand-alone mode, all objects except mesh and plots are imported.

* **Parameters:**
  - path: \*.acp file path.
  - import_mode: Defines how to solve conflicts of objects of equal name.
* **Global Resolution Actions:**
  - keep_both: Keep target and source (default).
  - keep_existing: Imported entities are ignored.
  - overwrite: Overwrite target with source.
