# open

<a id="compolyx.DB.open"></a>

#### DB.open(path, replace_workbench_inputs=None, pre_db=None, unit_system_type=None, load_cached_data=False, apply_shared_commands=False)

Open ACP file and append the model to models container.
:Parameters:
- path: Path to ACP file.
- replace_mesh_kwargs: Optional keyword arguments to replace the mesh to load in db.import_model(…) upfront.
- replace_workbench_inputs: Optional dictionary with Workbench application inputs to replace before executing the .acp file.
