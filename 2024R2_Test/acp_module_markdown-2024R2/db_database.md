# Database

<a id="compolyx.DB"></a>

### *class* compolyx.DB(\*args, \*\*kwargs)

Class to represent ComPoLyX database

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
```

<a id="compolyx.DB.active_model"></a>

#### *property* active_model

Active model

<a id="compolyx.DB.clear"></a>

#### clear()

Clear database

<a id="compolyx.DB.clear_generated_data"></a>

#### clear_generated_data(model=None)

Function clears the eventually stored update results and deletes the generated data such as
Production and Analysis Plies, Solid Models etc.

* **Parameters:**
  -model: the ACP model to be cleared

<a id="compolyx.DB.close"></a>

#### close(model=None)

Close model

* **Parameters:**
  - model: model to close (optional) if no model is given all models were closed

<a id="compolyx.DB.import_model"></a>

#### import_model(name, path, format, ignored_entities=None, convert_section_data=None, unit_system_type=None, reference_surface_input_unit_system_type=None)

Create a model from file

* **Parameters:**
  - name: Custom name of the model
  - path: Path to the data file
  - format: File format string. Choose one of ‘abaqus:inp’,’ansys:cdb’, ‘ansys:dat’, ‘nastran:bdf’, ‘ansys:h5’
  - ignored_entities: Entities to ignore. Can be a subset of the following list: [‘mesh’, ‘element_sets’, ‘materials’, ‘coordinate_systems’, ‘shell_sections’]
  - convert_section_data: Whether to import and convert the shell section data into ACP composite definitions. Default is false.
  - unit_system_type: Set the unit system of the model to this type. Ignored if a unit system was already defined in the data file.
  - reference_surface_input_unit_system_type: Set the unit system of the reference surface if the unit system cannot be read from the input

<a id="compolyx.DB.material_data"></a>

#### *property* material_data

Material Data Base

<a id="compolyx.DB.models"></a>

#### *property* models

Models

<a id="compolyx.DB.open"></a>

#### open(path, replace_workbench_inputs=None, pre_db=None, unit_system_type=None, load_cached_data=False, apply_shared_commands=False)

Open ACP file and append the model to models container
:Parameters:
- path: Path to ACP file
- replace_mesh_kwargs Optional keyword arguments to replace the mesh to load in db.import_model(…) upfront
- replace_workbench_inputs Optional dictionary with Workbench inputs to replace before executing the .acp file

<a id="compolyx.DB.open_h5"></a>

#### open_h5(path, cache_data=False, apply_shared_commands=False)

Load a model from an ACPH5 database.

* **Parameters:**
  - path: acph5 file path
  - cache_data: boolean whether to load the update results or not
  - apply_shared_commands: boolean to specify whether to load the Python commands from the ACP Shared section of the h5 file.

<a id="compolyx.DB.refresh_acph5"></a>

#### refresh_acph5(path, external_sources, input_parameters=None, initialize=False, unit_system_type=None, upgrade_from=None)

Refresh an acph5 db (Workbench mode only)

* **Parameters:**
  - path: file path to acph5 file
  - external_sources: nested dict provided by ACP WB Add-in containing all the
   
    &nbsp;&nbsp; external sources info (the file path, whether the source was modified, its ID etc.).
      The keys of the dict are: [‘model’, ‘materials’, ‘cad_geometries’, ‘imported_solid_models’, ‘pre_db’, ‘solutions’].
      Values for ‘model’ and ‘materials’ are dicts with the following fields [‘path’, ‘external_id’, ‘modified’].
      Values for ‘cad_geometries’, ‘imported_solid_models’ and ‘pre_db’ are list
      of dicts with fields [‘name’, ‘path’, ‘external_id’, ‘modified’].
      Values for ‘solutions’ are dicts with fields  [‘name’, ‘path’, ‘external_id’, ‘modified’, ‘renumbering_mapping_paths’] where
      renumbering_mapping_paths is a list of file paths.
  - input_parameters: a dict of (name, value) pairs of WB input parameters.
  - initialize: specifies whether the acph5 database needs to be initialized (i.e. the file does not
   
    &nbsp;&nbsp; yet exist).
  - unit_system_type: Defines the unit system of the main / downstream ACP file. (TODO: Do we need this?)
  - upgrade_from: Defines the path of a legacy (.acp) ACP DB that has to be upgrade to the new format (load composite definitions and save as ACPH5).

<a id="compolyx.DB.reload"></a>

#### reload(model)

Reloads the reference surface (mesh) of the model. See reload_mesh in the model for more details

* **Parameters:**
  -model: the model to be reloaded

<a id="compolyx.DB.save"></a>

#### save(path=None, model=None, cache_data=None)

Save active model

* **Parameters:**
  - path: file path
  - model: active model
  - cache_data: whether to store the update results or not.

<a id="compolyx.DB.set_unit_system"></a>

#### set_unit_system(unit_system_type)

Set the unit system of all models opened in the database
