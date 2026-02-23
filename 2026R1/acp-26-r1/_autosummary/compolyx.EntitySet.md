# EntitySet

<a id="compolyx.EntitySet"></a>

### *class* compolyx.EntitySet(graph, obj, parent=None)

Base class for entity sets.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`EntitySet.active`](compolyx.EntitySet.active.md#compolyx.EntitySet.active)                         | Active status of the object.                                                            |
| [`EntitySet.enabled`](compolyx.EntitySet.enabled.md#compolyx.EntitySet.enabled)                      | Indicates whether the object is enabled.                                   |
| [`EntitySet.id`](compolyx.EntitySet.id.md#compolyx.EntitySet.id)                                     | ID of the object.                                                                       |
| [`EntitySet.is_dict_item`](compolyx.EntitySet.is_dict_item.md#compolyx.EntitySet.is_dict_item)       | Indicates whether the object is an item in a dictionary.                                   |
| [`EntitySet.is_list_item`](compolyx.EntitySet.is_list_item.md#compolyx.EntitySet.is_list_item)       | Indicates whether the object is an item of a list.                                   |
| [`EntitySet.link_path`](compolyx.EntitySet.link_path.md#compolyx.EntitySet.link_path)                | Root path of the current node in the tree for links to this object.                 |
| [`EntitySet.name`](compolyx.EntitySet.name.md#compolyx.EntitySet.name)                               | Name of the object.                                                                     |
| [`EntitySet.parent`](compolyx.EntitySet.parent.md#compolyx.EntitySet.parent)                         | Parent object in the tree.                                                              |
| [`EntitySet.root_path`](compolyx.EntitySet.root_path.md#compolyx.EntitySet.root_path)                | Root path of the current node in the tree.                                          |
| [`EntitySet.size`](compolyx.EntitySet.size.md#compolyx.EntitySet.size)                               | Number of entities.                                                                 |
| [`EntitySet.status`](compolyx.EntitySet.status.md#compolyx.EntitySet.status)                         | Status of the object.                                                               |
| [`EntitySet.status_changed`](compolyx.EntitySet.status_changed.md#compolyx.EntitySet.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`EntitySet.uid`](compolyx.EntitySet.uid.md#compolyx.EntitySet.uid)                                  | UID of the object.                                                                      |
| [`EntitySet.vertex`](compolyx.EntitySet.vertex.md#compolyx.EntitySet.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`EntitySet.add`](compolyx.EntitySet.add.md#compolyx.EntitySet.add)(entity)                                                 | Add entity to the set.                                                                                                       |
| [`EntitySet.clear`](compolyx.EntitySet.clear.md#compolyx.EntitySet.clear)()                                                 |                                                                                                                              |
| [`EntitySet.find_parent`](compolyx.EntitySet.find_parent.md#compolyx.EntitySet.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`EntitySet.obj_exists`](compolyx.EntitySet.obj_exists.md#compolyx.EntitySet.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`EntitySet.remove`](compolyx.EntitySet.remove.md#compolyx.EntitySet.remove)(entity)                                        | Remove entity from the set.                                                                                                  |
| [`EntitySet.serialize_name_and_id`](compolyx.EntitySet.serialize_name_and_id.md#compolyx.EntitySet.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`EntitySet.update`](compolyx.EntitySet.update.md#compolyx.EntitySet.update)()                                              |                                                                                                                              |
| [`EntitySet.visit`](compolyx.EntitySet.visit.md#compolyx.EntitySet.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
