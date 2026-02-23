# ImportedModelingGroup

<a id="compolyx.ImportedModelingGroup"></a>

### *class* compolyx.ImportedModelingGroup(graph, obj, parent=None)

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`ImportedModelingGroup.active`](compolyx.ImportedModelingGroup.active.md#compolyx.ImportedModelingGroup.active)                         | Active status of the object.                                                            |
| [`ImportedModelingGroup.enabled`](compolyx.ImportedModelingGroup.enabled.md#compolyx.ImportedModelingGroup.enabled)                      | Indicates whether the object is enabled.                                   |
| [`ImportedModelingGroup.id`](compolyx.ImportedModelingGroup.id.md#compolyx.ImportedModelingGroup.id)                                     | ID of the object.                                                                       |
| [`ImportedModelingGroup.is_dict_item`](compolyx.ImportedModelingGroup.is_dict_item.md#compolyx.ImportedModelingGroup.is_dict_item)       | Indicates whether the object is an item in a dictionary.                                   |
| [`ImportedModelingGroup.is_list_item`](compolyx.ImportedModelingGroup.is_list_item.md#compolyx.ImportedModelingGroup.is_list_item)       | Indicates whether the object is an item of a list.                                   |
| [`ImportedModelingGroup.link_path`](compolyx.ImportedModelingGroup.link_path.md#compolyx.ImportedModelingGroup.link_path)                | Root path of the current node in the tree for links to this object.                 |
| [`ImportedModelingGroup.name`](compolyx.ImportedModelingGroup.name.md#compolyx.ImportedModelingGroup.name)                               | Name of the object.                                                                     |
| [`ImportedModelingGroup.parent`](compolyx.ImportedModelingGroup.parent.md#compolyx.ImportedModelingGroup.parent)                         | Parent object in the tree.                                                              |
| [`ImportedModelingGroup.plies`](compolyx.ImportedModelingGroup.plies.md#compolyx.ImportedModelingGroup.plies)                            | Modeling Plies of the Modeling Group.                                               |
| [`ImportedModelingGroup.root_path`](compolyx.ImportedModelingGroup.root_path.md#compolyx.ImportedModelingGroup.root_path)                | Root path of the current node in the tree.                                          |
| [`ImportedModelingGroup.size`](compolyx.ImportedModelingGroup.size.md#compolyx.ImportedModelingGroup.size)                               | Number of entities.                                                                 |
| [`ImportedModelingGroup.status`](compolyx.ImportedModelingGroup.status.md#compolyx.ImportedModelingGroup.status)                         | Status of the object.                                                               |
| [`ImportedModelingGroup.status_changed`](compolyx.ImportedModelingGroup.status_changed.md#compolyx.ImportedModelingGroup.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`ImportedModelingGroup.uid`](compolyx.ImportedModelingGroup.uid.md#compolyx.ImportedModelingGroup.uid)                                  | UID of the object.                                                                      |
| [`ImportedModelingGroup.vertex`](compolyx.ImportedModelingGroup.vertex.md#compolyx.ImportedModelingGroup.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ImportedModelingGroup.add`](compolyx.ImportedModelingGroup.add.md#compolyx.ImportedModelingGroup.add)(entity)                                                                           | Add entity to the set.                                                                                                       |
| [`ImportedModelingGroup.clear`](compolyx.ImportedModelingGroup.clear.md#compolyx.ImportedModelingGroup.clear)()                                                                           |                                                                                                                              |
| [`ImportedModelingGroup.copy_imported_modeling_ply`](compolyx.ImportedModelingGroup.copy_imported_modeling_ply.md#compolyx.ImportedModelingGroup.copy_imported_modeling_ply)(source)      | Copy an imported modeling ply.                                                                                               |
| [`ImportedModelingGroup.create_imported_modeling_ply`](compolyx.ImportedModelingGroup.create_imported_modeling_ply.md#compolyx.ImportedModelingGroup.create_imported_modeling_ply)([...]) | Create modeling ply.                                                                                                         |
| [`ImportedModelingGroup.find_parent`](compolyx.ImportedModelingGroup.find_parent.md#compolyx.ImportedModelingGroup.find_parent)(type)                                                     | Steps up the tree and returns the first parent with given type.                                                     |
| [`ImportedModelingGroup.is_imported`](compolyx.ImportedModelingGroup.is_imported.md#compolyx.ImportedModelingGroup.is_imported)()                                                         |                                                                                                                              |
| [`ImportedModelingGroup.obj_exists`](compolyx.ImportedModelingGroup.obj_exists.md#compolyx.ImportedModelingGroup.obj_exists)()                                                            | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`ImportedModelingGroup.remove`](compolyx.ImportedModelingGroup.remove.md#compolyx.ImportedModelingGroup.remove)(entity)                                                                  | Remove entity from the set.                                                                                                  |
| [`ImportedModelingGroup.serialize_name_and_id`](compolyx.ImportedModelingGroup.serialize_name_and_id.md#compolyx.ImportedModelingGroup.serialize_name_and_id)()                           | Serializes the name and ID.                                                                                    |
| [`ImportedModelingGroup.sync_plies`](compolyx.ImportedModelingGroup.sync_plies.md#compolyx.ImportedModelingGroup.sync_plies)()                                                            |                                                                                                                              |
| [`ImportedModelingGroup.update`](compolyx.ImportedModelingGroup.update.md#compolyx.ImportedModelingGroup.update)()                                                                        |                                                                                                                              |
| [`ImportedModelingGroup.visit`](compolyx.ImportedModelingGroup.visit.md#compolyx.ImportedModelingGroup.visit)(visitor)                                                                    | Walk through the tree and let the visitor perform action on every descendant node.                                           |
