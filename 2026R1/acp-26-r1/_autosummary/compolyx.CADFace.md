# CADFace

<a id="compolyx.CADFace"></a>

### *class* compolyx.CADFace(graph, obj, parent=None)

Represents a CADFace.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`CADFace.active`](compolyx.CADFace.active.md#compolyx.CADFace.active)                         | Active status of the object.                                                            |
| [`CADFace.enabled`](compolyx.CADFace.enabled.md#compolyx.CADFace.enabled)                      | Indicates whether the object is enabled.                                   |
| [`CADFace.id`](compolyx.CADFace.id.md#compolyx.CADFace.id)                                     | ID of the object.                                                                       |
| [`CADFace.is_dict_item`](compolyx.CADFace.is_dict_item.md#compolyx.CADFace.is_dict_item)       | Indicates whether the object is an item in a dictionary.                                   |
| [`CADFace.is_free`](compolyx.CADFace.is_free.md#compolyx.CADFace.is_free)                      | Boolean that indicates whether the shape is free..                                          |
| [`CADFace.is_list_item`](compolyx.CADFace.is_list_item.md#compolyx.CADFace.is_list_item)       | Indicates whether the object is an item of a list.                                   |
| [`CADFace.link_path`](compolyx.CADFace.link_path.md#compolyx.CADFace.link_path)                | Root path of the current node in the tree for links to this object.                 |
| [`CADFace.locked`](compolyx.CADFace.locked.md#compolyx.CADFace.locked)                         | Locked status of the CAD Component.                                                 |
| [`CADFace.map_index`](compolyx.CADFace.map_index.md#compolyx.CADFace.map_index)                | Map index of the shape.                                                             |
| [`CADFace.name`](compolyx.CADFace.name.md#compolyx.CADFace.name)                               | Name of the object.                                                                     |
| [`CADFace.parent`](compolyx.CADFace.parent.md#compolyx.CADFace.parent)                         | Parent object in the tree.                                                              |
| [`CADFace.path`](compolyx.CADFace.path.md#compolyx.CADFace.path)                               | Returns the topology path of the CAD component.                                         |
| [`CADFace.root_path`](compolyx.CADFace.root_path.md#compolyx.CADFace.root_path)                | Root path of the current node in the tree.                                          |
| [`CADFace.status`](compolyx.CADFace.status.md#compolyx.CADFace.status)                         | Status of the object.                                                               |
| [`CADFace.status_changed`](compolyx.CADFace.status_changed.md#compolyx.CADFace.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`CADFace.uid`](compolyx.CADFace.uid.md#compolyx.CADFace.uid)                                  | UID of the object.                                                                      |
| [`CADFace.vertex`](compolyx.CADFace.vertex.md#compolyx.CADFace.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CADFace.find_parent`](compolyx.CADFace.find_parent.md#compolyx.CADFace.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`CADFace.get_short_description`](compolyx.CADFace.get_short_description.md#compolyx.CADFace.get_short_description)() |                                                                                                                              |
| [`CADFace.obj_exists`](compolyx.CADFace.obj_exists.md#compolyx.CADFace.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`CADFace.serialize_name_and_id`](compolyx.CADFace.serialize_name_and_id.md#compolyx.CADFace.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`CADFace.update`](compolyx.CADFace.update.md#compolyx.CADFace.update)()                                              | Update the CAD component.                                                                                                     |
| [`CADFace.visit`](compolyx.CADFace.visit.md#compolyx.CADFace.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
