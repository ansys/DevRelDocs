# Database

### *class* compolyx.DB(\*args, \*\*kwargs)

Class to represent ComPoLyX database.

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
```

#### *property* active_model

Active model.

#### clear()

Clear database.

#### clear_generated_data(model=None)

Function clears the eventually stored update results and deletes the generated data such as
Production and Analysis Plies, Solid Models etc.

* **Parameters:**
  - model: The ACP model to be cleared.

#### close(model=None)

Close model.

* **Parameters:**
  - model: Model to close (optional). If no model is given, then all models were closed.

#### import_model(name, path, format, ignored_entities=None, convert_section_data=None, unit_system_type=None, reference_surface_input_unit_system_type=None)

Create a model from file.

* **Parameters:**
  - name: Custom name of the model.
  - path: Path to the data file.
  - format: File format string. Choose one of ‘abaqus:inp’, ’ansys:cdb’, ‘ansys:dat’, ‘nastran:bdf’, or ‘ansys:h5’.
  - ignored_entities: Entities to ignore. Can be a subset of the following list: [‘mesh’, ‘element_sets’, ‘materials’, ‘coordinate_systems’, ‘shell_sections’].
  - convert_section_data: Whether to import and convert the shell section data into ACP composite definitions. Default is false.
  - unit_system_type: Set the unit system of the model to this type. Ignored if a unit system was already defined in the data file.
  - reference_surface_input_unit_system_type: Set the unit system of the reference surface if the unit system cannot be read from the input.

#### *property* material_data

Material Data Base.

#### *property* models

Models.

#### open(path, replace_workbench_inputs=None, pre_db=None, unit_system_type=None, load_cached_data=False, apply_shared_commands=False)

Open ACP file and append the model to models container.
* **Parameters**
  - path: Path to ACP file.
  - replace_mesh_kwargs: Optional keyword arguments to replace the mesh to load in db.import_model(…) upfront.
  - replace_workbench_inputs: Optional dictionary with Workbench inputs to replace before executing the .acp file.

#### open_h5(path, cache_data=False, apply_shared_commands=False)

Load a model from an ACPH5 database.

* **Parameters:**
  - path: acph5 file path.
  - cache_data: Boolean whether to load the update results or not.
  - apply_shared_commands: Boolean to specify whether to load the Python commands from the ACP Shared section of the h5 file.

#### refresh_acph5(path, external_sources, input_parameters=None, initialize=False, unit_system_type=None, upgrade_from=None)

Refresh an acph5 db (Workbench mode only).

* **Parameters:**
  - path: File path to acph5 file.
  - external_sources: Nested dict provided by ACP WB Add-in containing all the external sources info (the file path, whether the source was modified, its ID etc.).
      
      The keys of the dict are: [‘model’, ‘materials’, ‘cad_geometries’, ‘imported_solid_models’, ‘pre_db’, ‘solutions’].
      - Values for ‘model’ and ‘materials’ are dicts with the following fields [‘path’, ‘external_id’, ‘modified’].
      - Values for ‘cad_geometries’, ‘imported_solid_models’ and ‘pre_db’ are list
      of dicts with fields [‘name’, ‘path’, ‘external_id’, ‘modified’].
      - alues for ‘solutions’ are dicts with fields  [‘name’, ‘path’, ‘external_id’, ‘modified’, ‘renumbering_mapping_paths’] where
      renumbering_mapping_paths is a list of file paths.
  - input_parameters: A dict of (name, value) pairs of WB input parameters.
  - initialize: specifies whether the acph5 database needs to be initialized (i.e. the file does not yet exist).
  - unit_system_type: Defines the unit system of the main/downstream ACP file.
  - upgrade_from: Defines the path of a legacy (.acp) ACP DB that has to be upgrade to the new format (load composite definitions and save as ACPH5).

#### reload(model)

Reloads the reference surface (mesh) of the model. See reload_mesh in the model for more details.

* **Parameters:**
  -model: The model to be reloaded.

#### save(path=None, model=None, cache_data=None)

Save active model.

* **Parameters:**
  - path: File path.
  - model: Active model.
  - cache_data: Whether to store the update results or not.

#### set_unit_system(unit_system_type)

Set the unit system of all models opened in the database.
