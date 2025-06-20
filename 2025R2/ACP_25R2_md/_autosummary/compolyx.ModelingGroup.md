# ModelingGroup

<a id="compolyx.ModelingGroup"></a>

### *class* compolyx.ModelingGroup(graph, obj, parent=None)

Class to manage modeling groups.

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> model = db.models['class40.1']
>>> mpg = model.modeling_groups['PlyGroup.1']
```

Creation:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> model = db.models['class40.1']
>>> mpg_1 = model.create_modeling_group('PlyGroup.1')
```

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`ModelingGroup.active`](compolyx.ModelingGroup.active.md#compolyx.ModelingGroup.active)                         | active status of object                                                            |
| [`ModelingGroup.enabled`](compolyx.ModelingGroup.enabled.md#compolyx.ModelingGroup.enabled)                      | Whether this object is currently enabled or not.                                   |
| [`ModelingGroup.id`](compolyx.ModelingGroup.id.md#compolyx.ModelingGroup.id)                                     | ID of object                                                                       |
| [`ModelingGroup.is_dict_item`](compolyx.ModelingGroup.is_dict_item.md#compolyx.ModelingGroup.is_dict_item)       | Specifies wether the object is an item of a dict                                   |
| [`ModelingGroup.is_list_item`](compolyx.ModelingGroup.is_list_item.md#compolyx.ModelingGroup.is_list_item)       | Specifies wether the object is an item of a list                                   |
| [`ModelingGroup.link_path`](compolyx.ModelingGroup.link_path.md#compolyx.ModelingGroup.link_path)                | Root path of the current node in the tree for links to this object                 |
| [`ModelingGroup.name`](compolyx.ModelingGroup.name.md#compolyx.ModelingGroup.name)                               | Name of object                                                                     |
| [`ModelingGroup.parent`](compolyx.ModelingGroup.parent.md#compolyx.ModelingGroup.parent)                         | Parent object in tree                                                              |
| [`ModelingGroup.plies`](compolyx.ModelingGroup.plies.md#compolyx.ModelingGroup.plies)                            | Modeling Plies of the Modeling Group                                               |
| [`ModelingGroup.root_path`](compolyx.ModelingGroup.root_path.md#compolyx.ModelingGroup.root_path)                | Root path of the current node in the tree                                          |
| [`ModelingGroup.size`](compolyx.ModelingGroup.size.md#compolyx.ModelingGroup.size)                               | Number of entities                                                                 |
| [`ModelingGroup.status`](compolyx.ModelingGroup.status.md#compolyx.ModelingGroup.status)                         | Status of the object                                                               |
| [`ModelingGroup.status_changed`](compolyx.ModelingGroup.status_changed.md#compolyx.ModelingGroup.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`ModelingGroup.uid`](compolyx.ModelingGroup.uid.md#compolyx.ModelingGroup.uid)                                  | UID of object                                                                      |
| [`ModelingGroup.vertex`](compolyx.ModelingGroup.vertex.md#compolyx.ModelingGroup.vertex)                         | This will throw an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ModelingGroup.add`](compolyx.ModelingGroup.add.md#compolyx.ModelingGroup.add)(entity)                                                                     | Add entity to the set.                                                                                                       |
| [`ModelingGroup.clear`](compolyx.ModelingGroup.clear.md#compolyx.ModelingGroup.clear)()                                                                     |                                                                                                                              |
| [`ModelingGroup.copy_butt_joint_sequence`](compolyx.ModelingGroup.copy_butt_joint_sequence.md#compolyx.ModelingGroup.copy_butt_joint_sequence)(source)      | Makes a copy of a butt-joint sequence.                                                                                       |
| [`ModelingGroup.copy_interface_layer`](compolyx.ModelingGroup.copy_interface_layer.md#compolyx.ModelingGroup.copy_interface_layer)(source[, ...])           | Copy an interface layer.                                                                                                     |
| [`ModelingGroup.copy_modeling_ply`](compolyx.ModelingGroup.copy_modeling_ply.md#compolyx.ModelingGroup.copy_modeling_ply)(source[, ...])                    | Copy a modeling ply.                                                                                                         |
| [`ModelingGroup.copy_sequence_entity`](compolyx.ModelingGroup.copy_sequence_entity.md#compolyx.ModelingGroup.copy_sequence_entity)(source[, ...])           |                                                                                                                              |
| [`ModelingGroup.create_butt_joint_sequence`](compolyx.ModelingGroup.create_butt_joint_sequence.md#compolyx.ModelingGroup.create_butt_joint_sequence)([...]) | Creates a new butt-joint sequences and adds it to this modeling group.                                                       |
| [`ModelingGroup.create_interface_layer`](compolyx.ModelingGroup.create_interface_layer.md#compolyx.ModelingGroup.create_interface_layer)([name, ...])       | Create an iterface layer.                                                                                                    |
| [`ModelingGroup.create_modeling_ply`](compolyx.ModelingGroup.create_modeling_ply.md#compolyx.ModelingGroup.create_modeling_ply)([name, ...])                | Create modeling ply.                                                                                                         |
| [`ModelingGroup.export_ply_geometries`](compolyx.ModelingGroup.export_ply_geometries.md#compolyx.ModelingGroup.export_ply_geometries)(filename)             | Exports the surface, boundary, and/or fiber directions of modeling, production, and analysis ply to .igs or .step file.      |
| [`ModelingGroup.find_parent`](compolyx.ModelingGroup.find_parent.md#compolyx.ModelingGroup.find_parent)(type)                                               | Function steps up the tree and returns the first parent with given type.                                                     |
| [`ModelingGroup.get_short_description`](compolyx.ModelingGroup.get_short_description.md#compolyx.ModelingGroup.get_short_description)()                     |                                                                                                                              |
| [`ModelingGroup.is_imported`](compolyx.ModelingGroup.is_imported.md#compolyx.ModelingGroup.is_imported)()                                                   |                                                                                                                              |
| [`ModelingGroup.obj_exists`](compolyx.ModelingGroup.obj_exists.md#compolyx.ModelingGroup.obj_exists)()                                                      | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`ModelingGroup.remove`](compolyx.ModelingGroup.remove.md#compolyx.ModelingGroup.remove)(entity)                                                            | Remove entity from the set.                                                                                                  |
| [`ModelingGroup.reorder_plies`](compolyx.ModelingGroup.reorder_plies.md#compolyx.ModelingGroup.reorder_plies)(source, target)                               | Reorder the ply group.                                                                                                       |
| [`ModelingGroup.serialize`](compolyx.ModelingGroup.serialize.md#compolyx.ModelingGroup.serialize)([butt_joints])                                            | Serialize to Python string.                                                                                                  |
| [`ModelingGroup.serialize_name_and_id`](compolyx.ModelingGroup.serialize_name_and_id.md#compolyx.ModelingGroup.serialize_name_and_id)()                     | Helper function to serialize name and ID.                                                                                    |
| [`ModelingGroup.sync_plies`](compolyx.ModelingGroup.sync_plies.md#compolyx.ModelingGroup.sync_plies)()                                                      |                                                                                                                              |
| [`ModelingGroup.update`](compolyx.ModelingGroup.update.md#compolyx.ModelingGroup.update)()                                                                  |                                                                                                                              |
| [`ModelingGroup.visit`](compolyx.ModelingGroup.visit.md#compolyx.ModelingGroup.visit)(visitor)                                                              | Walk through the tree and let the visitor perform action on every descendant node.                                           |
