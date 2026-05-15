# ElementSelectionRule

<a id="compolyx.ElementSelectionRule"></a>

### *class* compolyx.ElementSelectionRule(graph, obj, parent=None)

Base class for rules.
This acts as an interface to the cpp object of the rules.
The base class implements \_py_update which is called after the cpp update. It sets the changed flag.
Since NameGraph derives from Observable, observers can listen on ‘changed’.

In order to support csv_serialization, the classes have to implement a ‘_dict’ method
and a list named ‘_csv_parameters’.
The \_dict method specifies which properties are written and \_csv_parameters specifies which parameters are read and
how they are parsed. The keys in \_dict and the elements in \_parameters_csv have to be consistent.
If the conversion from the string to an object is more than simple type conversion,
it can be implemented in \_update_rule_from_csv.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`ElementSelectionRule.active`](compolyx.ElementSelectionRule.active.md#compolyx.ElementSelectionRule.active)                                     | Active status of the object.                                                            |
| [`ElementSelectionRule.changed`](compolyx.ElementSelectionRule.changed.md#compolyx.ElementSelectionRule.changed)                                  | Triggers an observable to dispatch a change notification.                                    |
| [`ElementSelectionRule.enabled`](compolyx.ElementSelectionRule.enabled.md#compolyx.ElementSelectionRule.enabled)                                  | Indicates whether the object is enabled.                                   |
| [`ElementSelectionRule.extent`](compolyx.ElementSelectionRule.extent.md#compolyx.ElementSelectionRule.extent)                                     | Extent of the rule.                                                                 |
| [`ElementSelectionRule.id`](compolyx.ElementSelectionRule.id.md#compolyx.ElementSelectionRule.id)                                                 | ID of the object.                                                                       |
| [`ElementSelectionRule.include_rule_type`](compolyx.ElementSelectionRule.include_rule_type.md#compolyx.ElementSelectionRule.include_rule_type)    | include type.                                                                       |
| [`ElementSelectionRule.is_dict_item`](compolyx.ElementSelectionRule.is_dict_item.md#compolyx.ElementSelectionRule.is_dict_item)                   | Indicates whether the object is an item in a dictionary.                                   |
| [`ElementSelectionRule.is_list_item`](compolyx.ElementSelectionRule.is_list_item.md#compolyx.ElementSelectionRule.is_list_item)                   | Indicates whether the object is an item of a list.                                   |
| [`ElementSelectionRule.link_path`](compolyx.ElementSelectionRule.link_path.md#compolyx.ElementSelectionRule.link_path)                            | Root path of the current node in the tree for links to this object.                 |
| [`ElementSelectionRule.name`](compolyx.ElementSelectionRule.name.md#compolyx.ElementSelectionRule.name)                                           | Name of the object.                                                                     |
| [`ElementSelectionRule.parent`](compolyx.ElementSelectionRule.parent.md#compolyx.ElementSelectionRule.parent)                                     | Parent object in the tree.                                                              |
| [`ElementSelectionRule.relative_rule_type`](compolyx.ElementSelectionRule.relative_rule_type.md#compolyx.ElementSelectionRule.relative_rule_type) | relative type.                                                                      |
| [`ElementSelectionRule.root_path`](compolyx.ElementSelectionRule.root_path.md#compolyx.ElementSelectionRule.root_path)                            | Root path of the current node in the tree.                                          |
| [`ElementSelectionRule.status`](compolyx.ElementSelectionRule.status.md#compolyx.ElementSelectionRule.status)                                     | Status of the object.                                                               |
| [`ElementSelectionRule.status_changed`](compolyx.ElementSelectionRule.status_changed.md#compolyx.ElementSelectionRule.status_changed)             | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`ElementSelectionRule.uid`](compolyx.ElementSelectionRule.uid.md#compolyx.ElementSelectionRule.uid)                                              | UID of the object.                                                                      |
| [`ElementSelectionRule.vertex`](compolyx.ElementSelectionRule.vertex.md#compolyx.ElementSelectionRule.vertex)                                     | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ElementSelectionRule.find_parent`](compolyx.ElementSelectionRule.find_parent.md#compolyx.ElementSelectionRule.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`ElementSelectionRule.obj_exists`](compolyx.ElementSelectionRule.obj_exists.md#compolyx.ElementSelectionRule.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`ElementSelectionRule.serialize_name_and_id`](compolyx.ElementSelectionRule.serialize_name_and_id.md#compolyx.ElementSelectionRule.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`ElementSelectionRule.serialize_rule_types`](compolyx.ElementSelectionRule.serialize_rule_types.md#compolyx.ElementSelectionRule.serialize_rule_types)()    |                                                                                                                              |
| [`ElementSelectionRule.update`](compolyx.ElementSelectionRule.update.md#compolyx.ElementSelectionRule.update)()                                              |                                                                                                                              |
| [`ElementSelectionRule.visit`](compolyx.ElementSelectionRule.visit.md#compolyx.ElementSelectionRule.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
