# CADShell

<a id="compolyx.CADShell"></a>

### *class* compolyx.CADShell(graph, obj, parent=None)

ComPoLyX Class to represent CADShell.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`CADShell.active`](compolyx.CADShell.active.md#compolyx.CADShell.active)                         | active status of object                                                            |
| [`CADShell.enabled`](compolyx.CADShell.enabled.md#compolyx.CADShell.enabled)                      | Whether this object is currently enabled or not.                                   |
| [`CADShell.id`](compolyx.CADShell.id.md#compolyx.CADShell.id)                                     | ID of object                                                                       |
| [`CADShell.is_dict_item`](compolyx.CADShell.is_dict_item.md#compolyx.CADShell.is_dict_item)       | Specifies wether the object is an item of a dict                                   |
| [`CADShell.is_free`](compolyx.CADShell.is_free.md#compolyx.CADShell.is_free)                      | Boolean whether the shape is free or not.                                          |
| [`CADShell.is_list_item`](compolyx.CADShell.is_list_item.md#compolyx.CADShell.is_list_item)       | Specifies wether the object is an item of a list                                   |
| [`CADShell.link_path`](compolyx.CADShell.link_path.md#compolyx.CADShell.link_path)                | Root path of the current node in the tree for links to this object                 |
| [`CADShell.locked`](compolyx.CADShell.locked.md#compolyx.CADShell.locked)                         | Locked status of the CAD Component                                                 |
| [`CADShell.map_index`](compolyx.CADShell.map_index.md#compolyx.CADShell.map_index)                | Map index of the shape                                                             |
| [`CADShell.name`](compolyx.CADShell.name.md#compolyx.CADShell.name)                               | Name of object                                                                     |
| [`CADShell.parent`](compolyx.CADShell.parent.md#compolyx.CADShell.parent)                         | Parent object in tree                                                              |
| [`CADShell.path`](compolyx.CADShell.path.md#compolyx.CADShell.path)                               | Returns topology path of the CADComponent.                                         |
| [`CADShell.root_path`](compolyx.CADShell.root_path.md#compolyx.CADShell.root_path)                | Root path of the current node in the tree                                          |
| [`CADShell.status`](compolyx.CADShell.status.md#compolyx.CADShell.status)                         | Status of the object                                                               |
| [`CADShell.status_changed`](compolyx.CADShell.status_changed.md#compolyx.CADShell.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`CADShell.sub_shapes`](compolyx.CADShell.sub_shapes.md#compolyx.CADShell.sub_shapes)             | Sub faces of the CAD Shell.                                                        |
| [`CADShell.uid`](compolyx.CADShell.uid.md#compolyx.CADShell.uid)                                  | UID of object                                                                      |
| [`CADShell.vertex`](compolyx.CADShell.vertex.md#compolyx.CADShell.vertex)                         | This will throw an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CADShell.find_parent`](compolyx.CADShell.find_parent.md#compolyx.CADShell.find_parent)(type)                           | Function steps up the tree and returns the first parent with given type.                                                     |
| [`CADShell.get_short_description`](compolyx.CADShell.get_short_description.md#compolyx.CADShell.get_short_description)() |                                                                                                                              |
| [`CADShell.obj_exists`](compolyx.CADShell.obj_exists.md#compolyx.CADShell.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`CADShell.serialize_name_and_id`](compolyx.CADShell.serialize_name_and_id.md#compolyx.CADShell.serialize_name_and_id)() | Helper function to serialize name and ID.                                                                                    |
| [`CADShell.update`](compolyx.CADShell.update.md#compolyx.CADShell.update)()                                              | Update the CadComponent.                                                                                                     |
| [`CADShell.visit`](compolyx.CADShell.visit.md#compolyx.CADShell.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
