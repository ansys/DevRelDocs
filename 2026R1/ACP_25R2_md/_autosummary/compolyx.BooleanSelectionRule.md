# BooleanSelectionRule

<a id="compolyx.BooleanSelectionRule"></a>

### *class* compolyx.BooleanSelectionRule(graph, obj, parent=None)

Boolean selection rule.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`BooleanSelectionRule.active`](compolyx.BooleanSelectionRule.active.md#compolyx.BooleanSelectionRule.active)                                     | Active status of object                                                            |
| [`BooleanSelectionRule.changed`](compolyx.BooleanSelectionRule.changed.md#compolyx.BooleanSelectionRule.changed)                                  | Triggers Observable to dispatch changed message                                    |
| [`BooleanSelectionRule.enabled`](compolyx.BooleanSelectionRule.enabled.md#compolyx.BooleanSelectionRule.enabled)                                  | Whether this object is currently enabled or not                                   |
| [`BooleanSelectionRule.extent`](compolyx.BooleanSelectionRule.extent.md#compolyx.BooleanSelectionRule.extent)                                     | Extent of the rule                                                                 |
| [`BooleanSelectionRule.id`](compolyx.BooleanSelectionRule.id.md#compolyx.BooleanSelectionRule.id)                                                 | ID of object                                                                       |
| [`BooleanSelectionRule.include_rule_type`](compolyx.BooleanSelectionRule.include_rule_type.md#compolyx.BooleanSelectionRule.include_rule_type)    | Include type                                                                       |
| [`BooleanSelectionRule.is_dict_item`](compolyx.BooleanSelectionRule.is_dict_item.md#compolyx.BooleanSelectionRule.is_dict_item)                   | Specifies whether the object is an item of a dict                                   |
| [`BooleanSelectionRule.is_list_item`](compolyx.BooleanSelectionRule.is_list_item.md#compolyx.BooleanSelectionRule.is_list_item)                   | Specifies whether the object is an item of a list                                   |
| [`BooleanSelectionRule.link_path`](compolyx.BooleanSelectionRule.link_path.md#compolyx.BooleanSelectionRule.link_path)                            | Root path of the current node in the tree for links to this object                 |
| [`BooleanSelectionRule.name`](compolyx.BooleanSelectionRule.name.md#compolyx.BooleanSelectionRule.name)                                           | Name of object                                                                     |
| [`BooleanSelectionRule.parent`](compolyx.BooleanSelectionRule.parent.md#compolyx.BooleanSelectionRule.parent)                                     | Parent object in tree                                                              |
| [`BooleanSelectionRule.relative_rule_type`](compolyx.BooleanSelectionRule.relative_rule_type.md#compolyx.BooleanSelectionRule.relative_rule_type) | Relative type                                                                      |
| [`BooleanSelectionRule.root_path`](compolyx.BooleanSelectionRule.root_path.md#compolyx.BooleanSelectionRule.root_path)                            | Root path of the current node in the tree                                          |
| [`BooleanSelectionRule.selection_rules`](compolyx.BooleanSelectionRule.selection_rules.md#compolyx.BooleanSelectionRule.selection_rules)          | Element Selection Rule of the Boolean Selection Rule.                              |
| [`BooleanSelectionRule.status`](compolyx.BooleanSelectionRule.status.md#compolyx.BooleanSelectionRule.status)                                     | Status of the object                                                               |
| [`BooleanSelectionRule.status_changed`](compolyx.BooleanSelectionRule.status_changed.md#compolyx.BooleanSelectionRule.status_changed)             | Boolean flag which is set to true in C++ when up-to-date status of object changes |
| [`BooleanSelectionRule.uid`](compolyx.BooleanSelectionRule.uid.md#compolyx.BooleanSelectionRule.uid)                                              | UID of object                                                                      |
| [`BooleanSelectionRule.vertex`](compolyx.BooleanSelectionRule.vertex.md#compolyx.BooleanSelectionRule.vertex)                                     | Throws an error if the object has been removed from the graph            |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`BooleanSelectionRule.add_rule`](compolyx.BooleanSelectionRule.add_rule.md#compolyx.BooleanSelectionRule.add_rule)(rule[, ...])                             | Add selection rule to boolean selection rule                                                                                |
| [`BooleanSelectionRule.find_parent`](compolyx.BooleanSelectionRule.find_parent.md#compolyx.BooleanSelectionRule.find_parent)(type)                           | Steps up the tree and returns the first parent with given type                                                     |
| [`BooleanSelectionRule.get_short_description`](compolyx.BooleanSelectionRule.get_short_description.md#compolyx.BooleanSelectionRule.get_short_description)() |                                                                                                                              |
| [`BooleanSelectionRule.obj_exists`](compolyx.BooleanSelectionRule.obj_exists.md#compolyx.BooleanSelectionRule.obj_exists)()                                  | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`BooleanSelectionRule.serialize`](compolyx.BooleanSelectionRule.serialize.md#compolyx.BooleanSelectionRule.serialize)()                                     | Serialize to Python string                                                                                                  |
| [`BooleanSelectionRule.serialize_name_and_id`](compolyx.BooleanSelectionRule.serialize_name_and_id.md#compolyx.BooleanSelectionRule.serialize_name_and_id)() | Helper function to serialize name and ID                                                                                   |
| [`BooleanSelectionRule.serialize_rule_types`](compolyx.BooleanSelectionRule.serialize_rule_types.md#compolyx.BooleanSelectionRule.serialize_rule_types)()    |                                                                                                                              |
| [`BooleanSelectionRule.update`](compolyx.BooleanSelectionRule.update.md#compolyx.BooleanSelectionRule.update)()                                              |                                                                                                                              |
| [`BooleanSelectionRule.visit`](compolyx.BooleanSelectionRule.visit.md#compolyx.BooleanSelectionRule.visit)(visitor)                                          | Walk through the tree and let the visitor perform an action on every descendant node                                           |
