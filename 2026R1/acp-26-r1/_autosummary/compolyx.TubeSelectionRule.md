# TubeSelectionRule

<a id="compolyx.TubeSelectionRule"></a>

### *class* compolyx.TubeSelectionRule(graph, obj, parent=None)

Tube selection rule.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`TubeSelectionRule.active`](compolyx.TubeSelectionRule.active.md#compolyx.TubeSelectionRule.active)                                              | active status of object                                                            |
| [`TubeSelectionRule.changed`](compolyx.TubeSelectionRule.changed.md#compolyx.TubeSelectionRule.changed)                                           | Triggers Observable to dispatch changed message                                    |
| [`TubeSelectionRule.display_data`](compolyx.TubeSelectionRule.display_data.md#compolyx.TubeSelectionRule.display_data)                            | The tube rule mesh plot                                                            |
| [`TubeSelectionRule.edge_set`](compolyx.TubeSelectionRule.edge_set.md#compolyx.TubeSelectionRule.edge_set)                                        | Edge Set for the Tube Selection Rule                                               |
| [`TubeSelectionRule.enabled`](compolyx.TubeSelectionRule.enabled.md#compolyx.TubeSelectionRule.enabled)                                           | Whether this object is currently enabled or not.                                   |
| [`TubeSelectionRule.extend_endings`](compolyx.TubeSelectionRule.extend_endings.md#compolyx.TubeSelectionRule.extend_endings)                      | Whether to extend the ending of the edge.                                          |
| [`TubeSelectionRule.extent`](compolyx.TubeSelectionRule.extent.md#compolyx.TubeSelectionRule.extent)                                              | extent of the rule                                                                 |
| [`TubeSelectionRule.head`](compolyx.TubeSelectionRule.head.md#compolyx.TubeSelectionRule.head)                                                    | Defines the head of the tube.                                                      |
| [`TubeSelectionRule.head_extension`](compolyx.TubeSelectionRule.head_extension.md#compolyx.TubeSelectionRule.head_extension)                      | Specifies the length of the extension at the head of the tube.                     |
| [`TubeSelectionRule.id`](compolyx.TubeSelectionRule.id.md#compolyx.TubeSelectionRule.id)                                                          | ID of object                                                                       |
| [`TubeSelectionRule.include_rule_type`](compolyx.TubeSelectionRule.include_rule_type.md#compolyx.TubeSelectionRule.include_rule_type)             | include type                                                                       |
| [`TubeSelectionRule.inner_radius`](compolyx.TubeSelectionRule.inner_radius.md#compolyx.TubeSelectionRule.inner_radius)                            | Inner tube-radius                                                                  |
| [`TubeSelectionRule.is_closed`](compolyx.TubeSelectionRule.is_closed.md#compolyx.TubeSelectionRule.is_closed)                                     | Returns true if the edge set of this rule is closed.                               |
| [`TubeSelectionRule.is_dict_item`](compolyx.TubeSelectionRule.is_dict_item.md#compolyx.TubeSelectionRule.is_dict_item)                            | Specifies wether the object is an item of a dict                                   |
| [`TubeSelectionRule.is_list_item`](compolyx.TubeSelectionRule.is_list_item.md#compolyx.TubeSelectionRule.is_list_item)                            | Specifies wether the object is an item of a list                                   |
| [`TubeSelectionRule.link_path`](compolyx.TubeSelectionRule.link_path.md#compolyx.TubeSelectionRule.link_path)                                     | Root path of the current node in the tree for links to this object                 |
| [`TubeSelectionRule.mesh`](compolyx.TubeSelectionRule.mesh.md#compolyx.TubeSelectionRule.mesh)                                                    | The mesh of the tube rule                                                          |
| [`TubeSelectionRule.name`](compolyx.TubeSelectionRule.name.md#compolyx.TubeSelectionRule.name)                                                    | Name of object                                                                     |
| [`TubeSelectionRule.nodes`](compolyx.TubeSelectionRule.nodes.md#compolyx.TubeSelectionRule.nodes)                                                 | Returns the nodes of this tube as nx3 array including the extensions.              |
| [`TubeSelectionRule.outer_radius`](compolyx.TubeSelectionRule.outer_radius.md#compolyx.TubeSelectionRule.outer_radius)                            | Outer tube-radius                                                                  |
| [`TubeSelectionRule.parent`](compolyx.TubeSelectionRule.parent.md#compolyx.TubeSelectionRule.parent)                                              | Parent object in tree                                                              |
| [`TubeSelectionRule.relative_rule_type`](compolyx.TubeSelectionRule.relative_rule_type.md#compolyx.TubeSelectionRule.relative_rule_type)          | relative type                                                                      |
| [`TubeSelectionRule.root_path`](compolyx.TubeSelectionRule.root_path.md#compolyx.TubeSelectionRule.root_path)                                     | Root path of the current node in the tree                                          |
| [`TubeSelectionRule.status`](compolyx.TubeSelectionRule.status.md#compolyx.TubeSelectionRule.status)                                              | Status of the object                                                               |
| [`TubeSelectionRule.status_changed`](compolyx.TubeSelectionRule.status_changed.md#compolyx.TubeSelectionRule.status_changed)                      | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`TubeSelectionRule.symmetrical_extension`](compolyx.TubeSelectionRule.symmetrical_extension.md#compolyx.TubeSelectionRule.symmetrical_extension) | Whether the extensions are equal on both ends or not.                              |
| [`TubeSelectionRule.tail_extension`](compolyx.TubeSelectionRule.tail_extension.md#compolyx.TubeSelectionRule.tail_extension)                      | Specifies the length of the extension at the tail of the the tube.                 |
| [`TubeSelectionRule.uid`](compolyx.TubeSelectionRule.uid.md#compolyx.TubeSelectionRule.uid)                                                       | UID of object                                                                      |
| [`TubeSelectionRule.vertex`](compolyx.TubeSelectionRule.vertex.md#compolyx.TubeSelectionRule.vertex)                                              | This will throw an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`TubeSelectionRule.find_parent`](compolyx.TubeSelectionRule.find_parent.md#compolyx.TubeSelectionRule.find_parent)(type)                           | Function steps up the tree and returns the first parent with given type.                                                     |
| [`TubeSelectionRule.get_nodes`](compolyx.TubeSelectionRule.get_nodes.md#compolyx.TubeSelectionRule.get_nodes)()                                     | * **Return:**<br/>  List of nodes that define the central line of the tube.                                                  |
| [`TubeSelectionRule.get_short_description`](compolyx.TubeSelectionRule.get_short_description.md#compolyx.TubeSelectionRule.get_short_description)() |                                                                                                                              |
| [`TubeSelectionRule.obj_exists`](compolyx.TubeSelectionRule.obj_exists.md#compolyx.TubeSelectionRule.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`TubeSelectionRule.serialize`](compolyx.TubeSelectionRule.serialize.md#compolyx.TubeSelectionRule.serialize)()                                     | Serialize to Python string.                                                                                                  |
| [`TubeSelectionRule.serialize_name_and_id`](compolyx.TubeSelectionRule.serialize_name_and_id.md#compolyx.TubeSelectionRule.serialize_name_and_id)() | Helper function to serialize name and ID.                                                                                    |
| [`TubeSelectionRule.serialize_rule_types`](compolyx.TubeSelectionRule.serialize_rule_types.md#compolyx.TubeSelectionRule.serialize_rule_types)()    |                                                                                                                              |
| [`TubeSelectionRule.update`](compolyx.TubeSelectionRule.update.md#compolyx.TubeSelectionRule.update)()                                              |                                                                                                                              |
| [`TubeSelectionRule.visit`](compolyx.TubeSelectionRule.visit.md#compolyx.TubeSelectionRule.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
