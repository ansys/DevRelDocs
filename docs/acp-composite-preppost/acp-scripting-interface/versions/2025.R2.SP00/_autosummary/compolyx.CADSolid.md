# CADSolid

<a id="compolyx.CADSolid"></a>

### *class* compolyx.CADSolid(graph, obj, parent=None)

ComPoLyX Class to represent CADSolid.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`CADSolid.active`](compolyx.CADSolid.active.md#compolyx.CADSolid.active)                         | Active status of object                                                            |
| [`CADSolid.enabled`](compolyx.CADSolid.enabled.md#compolyx.CADSolid.enabled)                      | Whether this object is currently enabled or not                                   |
| [`CADSolid.id`](compolyx.CADSolid.id.md#compolyx.CADSolid.id)                                     | ID of object                                                                       |
| [`CADSolid.is_dict_item`](compolyx.CADSolid.is_dict_item.md#compolyx.CADSolid.is_dict_item)       | Specifies whether the object is an item of a dict                                   |
| [`CADSolid.is_free`](compolyx.CADSolid.is_free.md#compolyx.CADSolid.is_free)                      | Boolean whether the shape is free or not                                          |
| [`CADSolid.is_list_item`](compolyx.CADSolid.is_list_item.md#compolyx.CADSolid.is_list_item)       | Specifies whether the object is an item of a list                                   |
| [`CADSolid.link_path`](compolyx.CADSolid.link_path.md#compolyx.CADSolid.link_path)                | Root path of the current node in the tree for links to this object                 |
| [`CADSolid.locked`](compolyx.CADSolid.locked.md#compolyx.CADSolid.locked)                         | Locked status of the CAD Component                                                 |
| [`CADSolid.map_index`](compolyx.CADSolid.map_index.md#compolyx.CADSolid.map_index)                | Map index of the shape                                                             |
| [`CADSolid.name`](compolyx.CADSolid.name.md#compolyx.CADSolid.name)                               | Name of object                                                                     |
| [`CADSolid.parent`](compolyx.CADSolid.parent.md#compolyx.CADSolid.parent)                         | Parent object in tree                                                              |
| [`CADSolid.path`](compolyx.CADSolid.path.md#compolyx.CADSolid.path)                               | Returns topology path of the CADComponent                                         |
| [`CADSolid.root_path`](compolyx.CADSolid.root_path.md#compolyx.CADSolid.root_path)                | Root path of the current node in the tree                                          |
| [`CADSolid.status`](compolyx.CADSolid.status.md#compolyx.CADSolid.status)                         | Status of the object                                                               |
| [`CADSolid.status_changed`](compolyx.CADSolid.status_changed.md#compolyx.CADSolid.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes |
| [`CADSolid.sub_shapes`](compolyx.CADSolid.sub_shapes.md#compolyx.CADSolid.sub_shapes)             | Sub faces of the CAD Solid                                                       |
| [`CADSolid.uid`](compolyx.CADSolid.uid.md#compolyx.CADSolid.uid)                                  | UID of object                                                                      |
| [`CADSolid.vertex`](compolyx.CADSolid.vertex.md#compolyx.CADSolid.vertex)                         | This will throw an error if the object has been removed from the graph            |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CADSolid.find_parent`](compolyx.CADSolid.find_parent.md#compolyx.CADSolid.find_parent)(type)                           | Steps up the tree and returns the first parent with given type                                                     |
| [`CADSolid.get_short_description`](compolyx.CADSolid.get_short_description.md#compolyx.CADSolid.get_short_description)() |                                                                                                                              |
| [`CADSolid.obj_exists`](compolyx.CADSolid.obj_exists.md#compolyx.CADSolid.obj_exists)()                                  | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`CADSolid.serialize_name_and_id`](compolyx.CADSolid.serialize_name_and_id.md#compolyx.CADSolid.serialize_name_and_id)() | Helper function to serialize name and ID                                                                                    |
| [`CADSolid.update`](compolyx.CADSolid.update.md#compolyx.CADSolid.update)()                                              | Update the CadComponent                                                                                                     |
| [`CADSolid.visit`](compolyx.CADSolid.visit.md#compolyx.CADSolid.visit)(visitor)                                          | Walk through the tree and let the visitor perform an action on every descendant node                                           |
