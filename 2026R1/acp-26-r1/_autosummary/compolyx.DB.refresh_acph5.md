# refresh_acph5

<a id="compolyx.DB.refresh_acph5"></a>

#### DB.refresh_acph5(path, external_sources, input_parameters=None, initialize=False, unit_system_type=None)

Refresh an .acph5 database (Workbench application mode only).

* **Parameters:**
  - path: File path to the .acph5 file.
  - external_sources: Nested dict provided by the ACP Workbench application add-in containing all the
    : external source’s information (the file path, whether the source was modified, its ID, etc.).
      - The dict keys are: [‘model’, ‘materials’, ‘cad_geometries’, ‘imported_solid_models’, ‘pre_db’, ‘solutions’].
      > - Values for ‘model’ and ‘materials’ are dicts with the following fields [‘path’, ‘external_id’, ‘modified’].
      > - Values for ‘cad_geometries’, ‘imported_solid_models’ and ‘pre_db’ are list
      <br/>
      > of dicts with fields [‘name’, ‘path’, ‘external_id’, ‘modified’].
      > - Values for ‘solutions’ are dicts with fields  [‘name’, ‘path’, ‘external_id’, ‘modified’, ‘renumbering_mapping_paths’] where
      > renumbering_mapping_paths is a list of file paths.
  - input_parameters: A dict of pairs (name, value) of the Workbench application input parameters.
  - initialize: Indicates whether the .acph5 database needs to be initialized (for example if the file does not
    : yet exist).
  - unit_system_type: Defines the unit system of the main/downstream ACP file.
