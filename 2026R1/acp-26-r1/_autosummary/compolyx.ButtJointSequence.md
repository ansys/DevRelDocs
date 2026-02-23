# ButtJointSequence

<a id="compolyx.ButtJointSequence"></a>

### *class* compolyx.ButtJointSequence(graph, obj, parent=None)

Represents the butt-joint sequence.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`ButtJointSequence.active`](compolyx.ButtJointSequence.active.md#compolyx.ButtJointSequence.active)                            | Indicates whether the sequence entity is active.                                                          |
| [`ButtJointSequence.enabled`](compolyx.ButtJointSequence.enabled.md#compolyx.ButtJointSequence.enabled)                         | Indicates whether the object is enabled.                                   |
| [`ButtJointSequence.global_ply_nr`](compolyx.ButtJointSequence.global_ply_nr.md#compolyx.ButtJointSequence.global_ply_nr)       |                                                                                    |
| [`ButtJointSequence.id`](compolyx.ButtJointSequence.id.md#compolyx.ButtJointSequence.id)                                        | ID of the object.                                                                       |
| [`ButtJointSequence.is_dict_item`](compolyx.ButtJointSequence.is_dict_item.md#compolyx.ButtJointSequence.is_dict_item)          | Indicates whether the object is an item in a dictionary.                                   |
| [`ButtJointSequence.is_list_item`](compolyx.ButtJointSequence.is_list_item.md#compolyx.ButtJointSequence.is_list_item)          | Indicates whether the object is an item of a list.                                   |
| [`ButtJointSequence.link_path`](compolyx.ButtJointSequence.link_path.md#compolyx.ButtJointSequence.link_path)                   | Root path of the current node in the tree for links to this object.                 |
| [`ButtJointSequence.name`](compolyx.ButtJointSequence.name.md#compolyx.ButtJointSequence.name)                                  | Name of the object.                                                                     |
| [`ButtJointSequence.parent`](compolyx.ButtJointSequence.parent.md#compolyx.ButtJointSequence.parent)                            | Parent object in the tree.                                                              |
| [`ButtJointSequence.primary_plies`](compolyx.ButtJointSequence.primary_plies.md#compolyx.ButtJointSequence.primary_plies)       | Primary plies of the butt joint squence.                                            |
| [`ButtJointSequence.root_path`](compolyx.ButtJointSequence.root_path.md#compolyx.ButtJointSequence.root_path)                   | Root path of the current node in the tree.                                          |
| [`ButtJointSequence.secondary_plies`](compolyx.ButtJointSequence.secondary_plies.md#compolyx.ButtJointSequence.secondary_plies) | Secondary plies of the butt joint squence.                                          |
| [`ButtJointSequence.status`](compolyx.ButtJointSequence.status.md#compolyx.ButtJointSequence.status)                            | Status of the object.                                                               |
| [`ButtJointSequence.status_changed`](compolyx.ButtJointSequence.status_changed.md#compolyx.ButtJointSequence.status_changed)    | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`ButtJointSequence.uid`](compolyx.ButtJointSequence.uid.md#compolyx.ButtJointSequence.uid)                                     | UID of the object.                                                                      |
| [`ButtJointSequence.vertex`](compolyx.ButtJointSequence.vertex.md#compolyx.ButtJointSequence.vertex)                            | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ButtJointSequence.find_parent`](compolyx.ButtJointSequence.find_parent.md#compolyx.ButtJointSequence.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`ButtJointSequence.obj_exists`](compolyx.ButtJointSequence.obj_exists.md#compolyx.ButtJointSequence.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`ButtJointSequence.serialize`](compolyx.ButtJointSequence.serialize.md#compolyx.ButtJointSequence.serialize)()                                     | Serialize to Python string.                                                                                                  |
| [`ButtJointSequence.serialize_name_and_id`](compolyx.ButtJointSequence.serialize_name_and_id.md#compolyx.ButtJointSequence.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`ButtJointSequence.update`](compolyx.ButtJointSequence.update.md#compolyx.ButtJointSequence.update)()                                              |                                                                                                                              |
| [`ButtJointSequence.visit`](compolyx.ButtJointSequence.visit.md#compolyx.ButtJointSequence.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
