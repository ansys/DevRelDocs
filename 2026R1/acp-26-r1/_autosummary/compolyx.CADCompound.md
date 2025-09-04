# CADCompound

<a id="compolyx.CADCompound"></a>

### *class* compolyx.CADCompound(graph, obj, parent=None)

ComPoLyX Class to represent CADCompound.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`CADCompound.active`](compolyx.CADCompound.active.md#compolyx.CADCompound.active)                         | Active status of object                                                            |
| [`CADCompound.enabled`](compolyx.CADCompound.enabled.md#compolyx.CADCompound.enabled)                      | Whether this object is currently enabled or not                                   |
| [`CADCompound.id`](compolyx.CADCompound.id.md#compolyx.CADCompound.id)                                     | ID of object                                                                       |
| [`CADCompound.is_dict_item`](compolyx.CADCompound.is_dict_item.md#compolyx.CADCompound.is_dict_item)       | Specifies whether the object is an item of a dict                                   |
| [`CADCompound.is_free`](compolyx.CADCompound.is_free.md#compolyx.CADCompound.is_free)                      | Boolean whether the shape is free or not                                          |
| [`CADCompound.is_list_item`](compolyx.CADCompound.is_list_item.md#compolyx.CADCompound.is_list_item)       | Specifies whether the object is an item of a list                                   |
| [`CADCompound.link_path`](compolyx.CADCompound.link_path.md#compolyx.CADCompound.link_path)                | Root path of the current node in the tree for links to this object                 |
| [`CADCompound.locked`](compolyx.CADCompound.locked.md#compolyx.CADCompound.locked)                         | Locked status of the CAD component                                                 |
| [`CADCompound.map_index`](compolyx.CADCompound.map_index.md#compolyx.CADCompound.map_index)                | Map index of the shape                                                             |
| [`CADCompound.name`](compolyx.CADCompound.name.md#compolyx.CADCompound.name)                               | Name of object                                                                     |
| [`CADCompound.parent`](compolyx.CADCompound.parent.md#compolyx.CADCompound.parent)                         | Parent object in tree                                                              |
| [`CADCompound.path`](compolyx.CADCompound.path.md#compolyx.CADCompound.path)                               | Returns topology path of the CADComponent                                         |
| [`CADCompound.root_path`](compolyx.CADCompound.root_path.md#compolyx.CADCompound.root_path)                | Root path of the current node in the tree                                          |
| [`CADCompound.status`](compolyx.CADCompound.status.md#compolyx.CADCompound.status)                         | Status of the object                                                               |
| [`CADCompound.status_changed`](compolyx.CADCompound.status_changed.md#compolyx.CADCompound.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes |
| [`CADCompound.sub_shapes`](compolyx.CADCompound.sub_shapes.md#compolyx.CADCompound.sub_shapes)             | Sub faces of the CAD compound                                                     |
| [`CADCompound.uid`](compolyx.CADCompound.uid.md#compolyx.CADCompound.uid)                                  | UID of object                                                                      |
| [`CADCompound.vertex`](compolyx.CADCompound.vertex.md#compolyx.CADCompound.vertex)                         | Throws an error if the object has been removed from the graph            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CADCompound.find_parent`](compolyx.CADCompound.find_parent.md#compolyx.CADCompound.find_parent)(type)                           | Steps up the tree and returns the first parent with given type                                                     |
| [`CADCompound.get_short_description`](compolyx.CADCompound.get_short_description.md#compolyx.CADCompound.get_short_description)() |                                                                                                                              |
| [`CADCompound.obj_exists`](compolyx.CADCompound.obj_exists.md#compolyx.CADCompound.obj_exists)()                                  | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`CADCompound.serialize_name_and_id`](compolyx.CADCompound.serialize_name_and_id.md#compolyx.CADCompound.serialize_name_and_id)() | Helper function to serialize name and ID                                                                                    |
| [`CADCompound.update`](compolyx.CADCompound.update.md#compolyx.CADCompound.update)()                                              | Update the CadComponent                                                                                                     |
| [`CADCompound.visit`](compolyx.CADCompound.visit.md#compolyx.CADCompound.visit)(visitor)                                          | Walk through the tree and let the visitor perform an action on every descendant node                                           |
