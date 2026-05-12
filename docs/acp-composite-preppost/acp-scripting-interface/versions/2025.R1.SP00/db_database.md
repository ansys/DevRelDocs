# Database classes

## `DB` class

<a id="compolyx.DB"></a>

#### *class* compolyx.DB(\*args, \*\*kwargs)

Class to represent the ComPoLyX database.

* **Access:**
```pycon
>>> import compolyx
>>> db = compolyx.DB()
```

<a id="compolyx.DB.active_model"></a>

#### *property* active_model

Active model.

<a id="compolyx.DB.clear"></a>

#### clear()

Clear database.

<a id="compolyx.DB.clear_generated_data"></a>

#### clear_generated_data(model=None)

Function clears the eventually stored update results and deletes the generated data such as Production and Analysis Plies, Solid Models, etc.

* **Parameters:**
  - **model**: The ACP model to be cleared.

<a id="compolyx.DB.close"></a>

#### close(model=None)

Close model.

* **Parameters:**
  - **model**: Model to close (optional). If no model is given, then all models are closed.

<a id="compolyx.DB.import_model"></a>

#### import_model(name, path, format, ignored_entities=None, convert_section_data=None, unit_system_type=None, reference_surface_input_unit_system_type=None)

Create a model from file.

* **Parameters:**
  - **name**: Custom name of the model.
  - **path**: Path to the data file.
  - **format**: File format string. Options: 
    - `abaqus:inp`
    - `ansys:cdb`
    - `ansys:dat`
    - `nastran:bdf`
    - `ansys:h5`
  - **ignored_entities**: Entities to ignore. Can be a subset of the following list: 
    - [`mesh`, `element_sets`, `materials`, `coordinate_systems`, `shell_sections`]
  - **convert_section_data**: Whether to import and convert the shell section data into ACP composite definitions. Default is `False`.
  - **unit_system_type**: Set the unit system of the model to this type. Ignored if a unit system was already defined in the data file.
  - **reference_surface_input_unit_system_type**: Set the unit system of the reference surface if the unit system cannot be read from the input.

<a id="compolyx.DB.material_data"></a>

#### *property* material_data

Material databse.

<a id="compolyx.DB.models"></a>

#### *property* models

Models.

<a id="compolyx.DB.open"></a>

#### open(path, replace_workbench_inputs=None, pre_db=None, unit_system_type=None, load_cached_data=False, apply_shared_commands=False)

Open ACP file and append the model to models container.
* **Parameters:**
  - **path**: Path to ACP file.
  - **replace_mesh_kwargs**: Optional keyword arguments to replace the mesh to load in db.import_model(…) upfront.
  - **replace_workbench_inputs**: Optional dictionary with Workbench application inputs to replace before executing the .acp file.

<a id="compolyx.DB.open_h5"></a>

#### open_h5(path, cache_data=False, apply_shared_commands=False)

Load a model from an .acph5 database.

* **Parameters:**
  - **path**: The .acph5 file path.
  - **cache_data**: Boolean on whether to load the update results.
  - **apply_shared_commands**: Boolean to specify whether to load the Python commands from the ACP shared section of the .acph5 file.

<a id="compolyx.DB.refresh_acph5"></a>

#### refresh_acph5(path, external_sources, input_parameters=None, initialize=False, unit_system_type=None, upgrade_from=None)

Refresh an .acph5 database (Workbench application mode only).

* **Parameters:**
  - **path**: File path to the .acph5 file.
  - **external_sources**: Nested dict provided by the ACP Workbench application add-in containing all the external source’s information (the file path, whether the source was modified, its ID, etc.). The dict keys are: 
    - [`model`, `materials`, `cad_geometries`, `imported_solid_models`, `pre_db`, `solutions`]
        - Values for `model` and `materials` are dicts with the following fields:
          - [`path`, `external_id`, `modified`]
        - Values for `cad_geometries`, `imported_solid_models` and `pre_db` are list of dicts with fields: 
          - [`name`, `path`, `external_id`, `modified`]
        - Values for `solutions` are dicts with fields:
          - [`name`, `path`, `external_id`, `modified`, `renumbering_mapping_paths`] where
      renumbering_mapping_paths is a list of file paths.
  - **input_parameters**: A dict of pairs (`name`, `value`) of the Workbench application input parameters.
  - **initialize**: Specifies whether the .acph5 database needs to be initialized (for example if the file does not yet exist).
  - **unit_system_type**: Defines the unit system of the main/downstream ACP file.
  - **upgrade_from**: Defines the path of a legacy (.acp) ACP database that has to be upgrade to the new format (load composite definitions and save as .acph5).

<a id="compolyx.DB.reload"></a>

#### reload(model)

Reloads the reference surface (mesh) of the model. For more details, see reload_mesh in the model.

* **Parameters:**
  - **model**: The model to be reloaded.

<a id="compolyx.DB.save"></a>

#### save(path=None, model=None, cache_data=None)

Save active model.

* **Parameters:**
  - **path**: File path.
  - **model**: Active model.
  - **cache_data**: Whether to store the update results.

<a id="compolyx.DB.set_unit_system"></a>

#### set_unit_system(unit_system_type)

Set the unit system of all models opened in the database.
