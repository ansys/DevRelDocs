# CADSolid

<a id="compolyx.CADSolid"></a>

### *class* compolyx.CADSolid(graph, obj, parent=None)

Represents a CADSolid.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`CADSolid.active`](compolyx.CADSolid.active.md#compolyx.CADSolid.active)                         | Active status of the object                                                            |
| [`CADSolid.enabled`](compolyx.CADSolid.enabled.md#compolyx.CADSolid.enabled)                      | Indicates whether the object is enabled.                                   |
| [`CADSolid.id`](compolyx.CADSolid.id.md#compolyx.CADSolid.id)                                     | ID of the object                                                                       |
| [`CADSolid.is_dict_item`](compolyx.CADSolid.is_dict_item.md#compolyx.CADSolid.is_dict_item)       | Indicates whether the object is an item in a dictionary                                   |
| [`CADSolid.is_free`](compolyx.CADSolid.is_free.md#compolyx.CADSolid.is_free)                      | Boolean that indicates whether the shape is free..                                          |
| [`CADSolid.is_list_item`](compolyx.CADSolid.is_list_item.md#compolyx.CADSolid.is_list_item)       | Indicates whether the object is an item of a list                                   |
| [`CADSolid.link_path`](compolyx.CADSolid.link_path.md#compolyx.CADSolid.link_path)                | Root path of the current node in the tree for links to this object                 |
| [`CADSolid.locked`](compolyx.CADSolid.locked.md#compolyx.CADSolid.locked)                         | Locked status of the CAD Component                                                 |
| [`CADSolid.map_index`](compolyx.CADSolid.map_index.md#compolyx.CADSolid.map_index)                | Map index of the shape                                                             |
| [`CADSolid.name`](compolyx.CADSolid.name.md#compolyx.CADSolid.name)                               | Name of the object                                                                     |
| [`CADSolid.parent`](compolyx.CADSolid.parent.md#compolyx.CADSolid.parent)                         | Parent object in the tree                                                              |
| [`CADSolid.path`](compolyx.CADSolid.path.md#compolyx.CADSolid.path)                               | Returns the topology path of the CAD component.                                         |
| [`CADSolid.root_path`](compolyx.CADSolid.root_path.md#compolyx.CADSolid.root_path)                | Root path of the current node in the tree                                          |
| [`CADSolid.status`](compolyx.CADSolid.status.md#compolyx.CADSolid.status)                         | Status of the object                                                               |
| [`CADSolid.status_changed`](compolyx.CADSolid.status_changed.md#compolyx.CADSolid.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`CADSolid.sub_shapes`](compolyx.CADSolid.sub_shapes.md#compolyx.CADSolid.sub_shapes)             | Sub faces of the CAD Solid.                                                        |
| [`CADSolid.uid`](compolyx.CADSolid.uid.md#compolyx.CADSolid.uid)                                  | UID of the object                                                                      |
| [`CADSolid.vertex`](compolyx.CADSolid.vertex.md#compolyx.CADSolid.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CADSolid.find_parent`](compolyx.CADSolid.find_parent.md#compolyx.CADSolid.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`CADSolid.get_short_description`](compolyx.CADSolid.get_short_description.md#compolyx.CADSolid.get_short_description)() |                                                                                                                              |
| [`CADSolid.obj_exists`](compolyx.CADSolid.obj_exists.md#compolyx.CADSolid.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`CADSolid.serialize_name_and_id`](compolyx.CADSolid.serialize_name_and_id.md#compolyx.CADSolid.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`CADSolid.update`](compolyx.CADSolid.update.md#compolyx.CADSolid.update)()                                              | Update the CAD component.                                                                                                     |
| [`CADSolid.visit`](compolyx.CADSolid.visit.md#compolyx.CADSolid.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
