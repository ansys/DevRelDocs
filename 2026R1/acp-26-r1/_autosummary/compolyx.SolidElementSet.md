# SolidElementSet

<a id="compolyx.SolidElementSet"></a>

### *class* compolyx.SolidElementSet(graph, obj=None, parent=None)

Solid element set class
Element Set of a solid model

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`SolidElementSet.active`](compolyx.SolidElementSet.active.md#compolyx.SolidElementSet.active)                         | Active status of the object.                                                            |
| [`SolidElementSet.element_labels`](compolyx.SolidElementSet.element_labels.md#compolyx.SolidElementSet.element_labels) | List of solid elements which are linked to this element set.                       |
| [`SolidElementSet.enabled`](compolyx.SolidElementSet.enabled.md#compolyx.SolidElementSet.enabled)                      | Indicates whether the object is enabled.                                   |
| [`SolidElementSet.id`](compolyx.SolidElementSet.id.md#compolyx.SolidElementSet.id)                                     | ID of the object.                                                                       |
| [`SolidElementSet.is_dict_item`](compolyx.SolidElementSet.is_dict_item.md#compolyx.SolidElementSet.is_dict_item)       | Indicates whether the object is an item in a dictionary.                                   |
| [`SolidElementSet.is_list_item`](compolyx.SolidElementSet.is_list_item.md#compolyx.SolidElementSet.is_list_item)       | Indicates whether the object is an item of a list.                                   |
| [`SolidElementSet.link_path`](compolyx.SolidElementSet.link_path.md#compolyx.SolidElementSet.link_path)                | Root path of the current node in the tree for links to this object.                 |
| [`SolidElementSet.locked`](compolyx.SolidElementSet.locked.md#compolyx.SolidElementSet.locked)                         | Returns true if the object is locked (nor editable, neither deletable).             |
| [`SolidElementSet.name`](compolyx.SolidElementSet.name.md#compolyx.SolidElementSet.name)                               | Name of the object.                                                                     |
| [`SolidElementSet.parent`](compolyx.SolidElementSet.parent.md#compolyx.SolidElementSet.parent)                         | Parent object in the tree.                                                              |
| [`SolidElementSet.root_path`](compolyx.SolidElementSet.root_path.md#compolyx.SolidElementSet.root_path)                | Root path of the current node in the tree.                                          |
| [`SolidElementSet.size`](compolyx.SolidElementSet.size.md#compolyx.SolidElementSet.size)                               | Number of entities.                                                                 |
| [`SolidElementSet.status`](compolyx.SolidElementSet.status.md#compolyx.SolidElementSet.status)                         | Status of the object.                                                               |
| [`SolidElementSet.status_changed`](compolyx.SolidElementSet.status_changed.md#compolyx.SolidElementSet.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`SolidElementSet.uid`](compolyx.SolidElementSet.uid.md#compolyx.SolidElementSet.uid)                                  | UID of the object.                                                                      |
| [`SolidElementSet.vertex`](compolyx.SolidElementSet.vertex.md#compolyx.SolidElementSet.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`SolidElementSet.find_parent`](compolyx.SolidElementSet.find_parent.md#compolyx.SolidElementSet.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`SolidElementSet.get_short_description`](compolyx.SolidElementSet.get_short_description.md#compolyx.SolidElementSet.get_short_description)() |                                                                                                                              |
| [`SolidElementSet.obj_exists`](compolyx.SolidElementSet.obj_exists.md#compolyx.SolidElementSet.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`SolidElementSet.serialize`](compolyx.SolidElementSet.serialize.md#compolyx.SolidElementSet.serialize)()                                     | Serialize to Python string.                                                                                                   |
| [`SolidElementSet.serialize_name_and_id`](compolyx.SolidElementSet.serialize_name_and_id.md#compolyx.SolidElementSet.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`SolidElementSet.update`](compolyx.SolidElementSet.update.md#compolyx.SolidElementSet.update)()                                              |                                                                                                                              |
| [`SolidElementSet.visit`](compolyx.SolidElementSet.visit.md#compolyx.SolidElementSet.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
