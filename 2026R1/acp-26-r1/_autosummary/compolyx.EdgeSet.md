# EdgeSet

<a id="compolyx.EdgeSet"></a>

### *class* compolyx.EdgeSet(graph, obj=None, parent=None)

Edge Set class.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`EdgeSet.active`](compolyx.EdgeSet.active.md#compolyx.EdgeSet.active)                         | Active status of object                                                            |
| [`EdgeSet.changed`](compolyx.EdgeSet.changed.md#compolyx.EdgeSet.changed)                      | Status boolean                                                                   |
| [`EdgeSet.display_data`](compolyx.EdgeSet.display_data.md#compolyx.EdgeSet.display_data)       | The edge set mesh plot                                                             |
| [`EdgeSet.edge_set_type`](compolyx.EdgeSet.edge_set_type.md#compolyx.EdgeSet.edge_set_type)    | Edge Set Types. Available options: "By Reference", "By Nodes"                                  |
| [`EdgeSet.element_set`](compolyx.EdgeSet.element_set.md#compolyx.EdgeSet.element_set)          |                                                                                    |
| [`EdgeSet.enabled`](compolyx.EdgeSet.enabled.md#compolyx.EdgeSet.enabled)                      | Whether this object is currently enabled or not                                 |
| [`EdgeSet.id`](compolyx.EdgeSet.id.md#compolyx.EdgeSet.id)                                     | ID of object                                                                       |
| [`EdgeSet.is_closed`](compolyx.EdgeSet.is_closed.md#compolyx.EdgeSet.is_closed)                | Edge Set is closed                                                               |
| [`EdgeSet.is_dict_item`](compolyx.EdgeSet.is_dict_item.md#compolyx.EdgeSet.is_dict_item)       | Specifies whether the object is an item of a dict                                   |
| [`EdgeSet.is_list_item`](compolyx.EdgeSet.is_list_item.md#compolyx.EdgeSet.is_list_item)       | Specifies whether the object is an item of a list                                   |
| [`EdgeSet.limit_angle`](compolyx.EdgeSet.limit_angle.md#compolyx.EdgeSet.limit_angle)          | Edge Set limit angle for creation of edge set by reference                         |
| [`EdgeSet.link_path`](compolyx.EdgeSet.link_path.md#compolyx.EdgeSet.link_path)                | Root path of the current node in the tree for links to this object                 |
| [`EdgeSet.locked`](compolyx.EdgeSet.locked.md#compolyx.EdgeSet.locked)                         | Edge Set is imported and cannot be changed                                        |
| [`EdgeSet.mesh`](compolyx.EdgeSet.mesh.md#compolyx.EdgeSet.mesh)                               | The edge set mesh                                                                  |
| [`EdgeSet.name`](compolyx.EdgeSet.name.md#compolyx.EdgeSet.name)                               | Name of object                                                                     |
| [`EdgeSet.node_labels`](compolyx.EdgeSet.node_labels.md#compolyx.EdgeSet.node_labels)          | Node labels defining the NodeSet (only if type='By Nodes')                         |
| [`EdgeSet.nodes`](compolyx.EdgeSet.nodes.md#compolyx.EdgeSet.nodes)                            | Node indexes/labels of the Edge Set                                                |
| [`EdgeSet.origin`](compolyx.EdgeSet.origin.md#compolyx.EdgeSet.origin)                         | Edge Set origin for createion of edge set by reference                             |
| [`EdgeSet.parent`](compolyx.EdgeSet.parent.md#compolyx.EdgeSet.parent)                         | Parent object in tree                                                              |
| [`EdgeSet.root_path`](compolyx.EdgeSet.root_path.md#compolyx.EdgeSet.root_path)                | Root path of the current node in the tree                                          |
| [`EdgeSet.status`](compolyx.EdgeSet.status.md#compolyx.EdgeSet.status)                         | Status of the object                                                               |
| [`EdgeSet.status_changed`](compolyx.EdgeSet.status_changed.md#compolyx.EdgeSet.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes |
| [`EdgeSet.uid`](compolyx.EdgeSet.uid.md#compolyx.EdgeSet.uid)                                  | UID of object                                                                      |
| [`EdgeSet.vertex`](compolyx.EdgeSet.vertex.md#compolyx.EdgeSet.vertex)                         | Throws an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`EdgeSet.average_normal_direction`](compolyx.EdgeSet.average_normal_direction.md#compolyx.EdgeSet.average_normal_direction)()   |                                                                                                                              |
| [`EdgeSet.center`](compolyx.EdgeSet.center.md#compolyx.EdgeSet.center)()                                                         |                                                                                                                              |
| [`EdgeSet.find_parent`](compolyx.EdgeSet.find_parent.md#compolyx.EdgeSet.find_parent)(type)                                      | Steps up the tree and returns the first parent with given type                                                     |
| [`EdgeSet.get_nodes`](compolyx.EdgeSet.get_nodes.md#compolyx.EdgeSet.get_nodes)()                                                | Return Python list with nodes as objects                                                                                    |
| [`EdgeSet.get_short_description`](compolyx.EdgeSet.get_short_description.md#compolyx.EdgeSet.get_short_description)()            |                                                                                                                              |
| [`EdgeSet.obj_exists`](compolyx.EdgeSet.obj_exists.md#compolyx.EdgeSet.obj_exists)()                                             | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`EdgeSet.serialize`](compolyx.EdgeSet.serialize.md#compolyx.EdgeSet.serialize)()                                                | Serialize to Python string                                                                                                  |
| [`EdgeSet.serialize_name_and_id`](compolyx.EdgeSet.serialize_name_and_id.md#compolyx.EdgeSet.serialize_name_and_id)()            | Helper function to serialize name and ID                                                                                    |
| [`EdgeSet.update`](compolyx.EdgeSet.update.md#compolyx.EdgeSet.update)()                                                         |                                                                                                                              |
| [`EdgeSet.visit`](compolyx.EdgeSet.visit.md#compolyx.EdgeSet.visit)(visitor)                                                     | Walk through the tree and let the visitor perform an action on every descendant node                                           |
