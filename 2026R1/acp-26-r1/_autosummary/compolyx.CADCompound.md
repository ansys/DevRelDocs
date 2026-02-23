# CADCompound

<a id="compolyx.CADCompound"></a>

### *class* compolyx.CADCompound(graph, obj, parent=None)

Represents a CADCompound.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`CADCompound.active`](compolyx.CADCompound.active.md#compolyx.CADCompound.active)                         | Active status of the object.                                                            |
| [`CADCompound.enabled`](compolyx.CADCompound.enabled.md#compolyx.CADCompound.enabled)                      | Indicates whether the object is enabled.                                   |
| [`CADCompound.id`](compolyx.CADCompound.id.md#compolyx.CADCompound.id)                                     | ID of the object.                                                                       |
| [`CADCompound.is_dict_item`](compolyx.CADCompound.is_dict_item.md#compolyx.CADCompound.is_dict_item)       | Indicates whether the object is an item in a dictionary.                                   |
| [`CADCompound.is_free`](compolyx.CADCompound.is_free.md#compolyx.CADCompound.is_free)                      | Boolean that indicates whether the shape is free..                                          |
| [`CADCompound.is_list_item`](compolyx.CADCompound.is_list_item.md#compolyx.CADCompound.is_list_item)       | Indicates whether the object is an item of a list.                                   |
| [`CADCompound.link_path`](compolyx.CADCompound.link_path.md#compolyx.CADCompound.link_path)                | Root path of the current node in the tree for links to this object.                 |
| [`CADCompound.locked`](compolyx.CADCompound.locked.md#compolyx.CADCompound.locked)                         | Locked status of the CAD Component.                                                 |
| [`CADCompound.map_index`](compolyx.CADCompound.map_index.md#compolyx.CADCompound.map_index)                | Map index of the shape.                                                             |
| [`CADCompound.name`](compolyx.CADCompound.name.md#compolyx.CADCompound.name)                               | Name of the object.                                                                     |
| [`CADCompound.parent`](compolyx.CADCompound.parent.md#compolyx.CADCompound.parent)                         | Parent object in the tree.                                                              |
| [`CADCompound.path`](compolyx.CADCompound.path.md#compolyx.CADCompound.path)                               | Returns the topology path of the CAD component.                                         |
| [`CADCompound.root_path`](compolyx.CADCompound.root_path.md#compolyx.CADCompound.root_path)                | Root path of the current node in the tree.                                          |
| [`CADCompound.status`](compolyx.CADCompound.status.md#compolyx.CADCompound.status)                         | Status of the object.                                                               |
| [`CADCompound.status_changed`](compolyx.CADCompound.status_changed.md#compolyx.CADCompound.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`CADCompound.sub_shapes`](compolyx.CADCompound.sub_shapes.md#compolyx.CADCompound.sub_shapes)             | Sub faces of the CAD Compound.                                                     |
| [`CADCompound.uid`](compolyx.CADCompound.uid.md#compolyx.CADCompound.uid)                                  | UID of the object.                                                                      |
| [`CADCompound.vertex`](compolyx.CADCompound.vertex.md#compolyx.CADCompound.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CADCompound.find_parent`](compolyx.CADCompound.find_parent.md#compolyx.CADCompound.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`CADCompound.get_short_description`](compolyx.CADCompound.get_short_description.md#compolyx.CADCompound.get_short_description)() |                                                                                                                              |
| [`CADCompound.obj_exists`](compolyx.CADCompound.obj_exists.md#compolyx.CADCompound.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`CADCompound.serialize_name_and_id`](compolyx.CADCompound.serialize_name_and_id.md#compolyx.CADCompound.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`CADCompound.update`](compolyx.CADCompound.update.md#compolyx.CADCompound.update)()                                              | Update the CAD component.                                                                                                     |
| [`CADCompound.visit`](compolyx.CADCompound.visit.md#compolyx.CADCompound.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
