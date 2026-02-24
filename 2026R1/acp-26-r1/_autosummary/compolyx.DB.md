# DB

<a id="compolyx.DB"></a>

### *class* compolyx.DB(\*args, \*\*kwargs)

Represents the compolyx database

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
```

### Attributes

| Name | Description |
|------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`DB.active_model`](compolyx.DB.active_model.md#compolyx.DB.active_model)    | Active model.                                                       |
| [`DB.is_dict_item`](compolyx.DB.is_dict_item.md#compolyx.DB.is_dict_item)    | Indicates whether the object is an item in a dictionary.                   |
| [`DB.is_list_item`](compolyx.DB.is_list_item.md#compolyx.DB.is_list_item)    | Indicates whether the object is an item of a list.                   |
| [`DB.link_path`](compolyx.DB.link_path.md#compolyx.DB.link_path)             | Root path of the current node in the tree for links to this object. |
| [`DB.material_data`](compolyx.DB.material_data.md#compolyx.DB.material_data) | Material database.                                                 |
| [`DB.models`](compolyx.DB.models.md#compolyx.DB.models)                      | Models.                                                             |
| [`DB.name`](compolyx.DB.name.md#compolyx.DB.name)                            | Name of the object.                                                     |
| [`DB.parent`](compolyx.DB.parent.md#compolyx.DB.parent)                      | Parent object in the tree.                                              |
| [`DB.root_path`](compolyx.DB.root_path.md#compolyx.DB.root_path)             | Root path of the current node in the tree.                          |

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [`DB.clear`](compolyx.DB.clear.md#compolyx.DB.clear)()                                                      | Clears the database.                                                                                                                                |
| [`DB.clear_generated_data`](compolyx.DB.clear_generated_data.md#compolyx.DB.clear_generated_data)([model])  | Function clears the eventually stored update results and deletes the generated data such as Production and Analysis Plies, Solid Models, etc. |
| [`DB.close`](compolyx.DB.close.md#compolyx.DB.close)([model])                                               | Closes the model.                                                                                                                                   |
| [`DB.find_parent`](compolyx.DB.find_parent.md#compolyx.DB.find_parent)(type)                                | Steps up the tree and returns the first parent with given type.                                                                      |
| [`DB.import_model`](compolyx.DB.import_model.md#compolyx.DB.import_model)(name, path, format[, ...])        | Create a model from file.                                                                                                                      |
| [`DB.open`](compolyx.DB.open.md#compolyx.DB.open)(path, \*[, pre_db, unit_system_type, ...])                | Open an ACPH5 file.                                                                                                                           |
| [`DB.open_h5`](compolyx.DB.open_h5.md#compolyx.DB.open_h5)(path[, cache_data, ...])                         | Load a model from an .acph5 database.                                                                                                          |
| [`DB.refresh_acph5`](compolyx.DB.refresh_acph5.md#compolyx.DB.refresh_acph5)(path, external_sources[, ...]) | Refresh an .acph5 database (Workbench application mode only).                                                                                  |
| [`DB.reload`](compolyx.DB.reload.md#compolyx.DB.reload)(model)                                              | Reloads the reference surface (mesh) of the model.                                                                                            |
| [`DB.run_script`](compolyx.DB.run_script.md#compolyx.DB.run_script)(path[, locals])                         |                                                                                                                                               |
| [`DB.save`](compolyx.DB.save.md#compolyx.DB.save)([path, model, cache_data])                                | Save active model.                                                                                                                             |
| [`DB.set_unit_system`](compolyx.DB.set_unit_system.md#compolyx.DB.set_unit_system)(unit_system_type)        | Set the unit system of all models opened in the database.                                                                                     |
| [`DB.visit`](compolyx.DB.visit.md#compolyx.DB.visit)(visitor)                                               | Walk through the tree and let the visitor perform action on every descendant node.                                                            |
