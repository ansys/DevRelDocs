# PublishedParameter

<a id="compolyx.PublishedParameter"></a>

### *class* compolyx.PublishedParameter(name, parent, source_object=None, source_property='', user_script='', category='input', acp_type=None, description='', lower_limit=None, upper_limit=None, cyclic=False, float_list=[], string_list=[], unbound_value=None)

Represents parameters which are linked to the Ansys Workbench application.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`PublishedParameter.acp_type`](compolyx.PublishedParameter.acp_type.md#compolyx.PublishedParameter.acp_type)                      | ACP parameter type.                                                 |
| [`PublishedParameter.ansys_type`](compolyx.PublishedParameter.ansys_type.md#compolyx.PublishedParameter.ansys_type)                | ANSYS parameter type where ACP parameter is mapped to.              |
| [`PublishedParameter.category`](compolyx.PublishedParameter.category.md#compolyx.PublishedParameter.category)                      | Should be one of: input, unbound_input, output or expression_output. |
| [`PublishedParameter.cyclic`](compolyx.PublishedParameter.cyclic.md#compolyx.PublishedParameter.cyclic)                            | Whether a float value is cyclic or not.                              |
| [`PublishedParameter.description`](compolyx.PublishedParameter.description.md#compolyx.PublishedParameter.description)             | A human-readable description of the linked parameter.                |
| [`PublishedParameter.enabled`](compolyx.PublishedParameter.enabled.md#compolyx.PublishedParameter.enabled)                         | Indicates whether the object is enabled.                    |
| [`PublishedParameter.float_list`](compolyx.PublishedParameter.float_list.md#compolyx.PublishedParameter.float_list)                | A list of possible values for a float.                               |
| [`PublishedParameter.is_dict_item`](compolyx.PublishedParameter.is_dict_item.md#compolyx.PublishedParameter.is_dict_item)          | Indicates whether the object is an item in a dictionary.                    |
| [`PublishedParameter.is_list_item`](compolyx.PublishedParameter.is_list_item.md#compolyx.PublishedParameter.is_list_item)          | Indicates whether the object is an item of a list.                    |
| [`PublishedParameter.link_path`](compolyx.PublishedParameter.link_path.md#compolyx.PublishedParameter.link_path)                   | Root path of the current node in the tree for links to this object.  |
| [`PublishedParameter.lower_limit`](compolyx.PublishedParameter.lower_limit.md#compolyx.PublishedParameter.lower_limit)             | The lower limit for numeric values.                                  |
| [`PublishedParameter.name`](compolyx.PublishedParameter.name.md#compolyx.PublishedParameter.name)                                  | Name of the object.                                                      |
| [`PublishedParameter.parent`](compolyx.PublishedParameter.parent.md#compolyx.PublishedParameter.parent)                            | Parent object in the tree.                                               |
| [`PublishedParameter.root_path`](compolyx.PublishedParameter.root_path.md#compolyx.PublishedParameter.root_path)                   | Root path of the current node in the tree.                           |
| [`PublishedParameter.source_object`](compolyx.PublishedParameter.source_object.md#compolyx.PublishedParameter.source_object)       |                                                                     |
| [`PublishedParameter.source_property`](compolyx.PublishedParameter.source_property.md#compolyx.PublishedParameter.source_property) |                                                                     |
| [`PublishedParameter.string_list`](compolyx.PublishedParameter.string_list.md#compolyx.PublishedParameter.string_list)             | A list of possible values.                                          |
| [`PublishedParameter.unit`](compolyx.PublishedParameter.unit.md#compolyx.PublishedParameter.unit)                                  | The unit associated with the actual parameter value.                 |
| [`PublishedParameter.upper_limit`](compolyx.PublishedParameter.upper_limit.md#compolyx.PublishedParameter.upper_limit)             | The upper limit for numeric values.                                  |
| [`PublishedParameter.user_script`](compolyx.PublishedParameter.user_script.md#compolyx.PublishedParameter.user_script)             |                                                                     |
| [`PublishedParameter.value`](compolyx.PublishedParameter.value.md#compolyx.PublishedParameter.value)                               | The current parameter value.                                        |
| [`PublishedParameter.wb_value`](compolyx.PublishedParameter.wb_value.md#compolyx.PublishedParameter.wb_value)                      | The parameter value as it is represented in the ANSYS workbench.     |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`PublishedParameter.find_parent`](compolyx.PublishedParameter.find_parent.md#compolyx.PublishedParameter.find_parent)(type)                     | Steps up the tree and returns the first parent with given type.           |
| [`PublishedParameter.get_source_str`](compolyx.PublishedParameter.get_source_str.md#compolyx.PublishedParameter.get_source_str)()                | Returns the active source string.                                                  |
| [`PublishedParameter.serialize`](compolyx.PublishedParameter.serialize.md#compolyx.PublishedParameter.serialize)()                               | Serialize to Python string.                                                         |
| [`PublishedParameter.update`](compolyx.PublishedParameter.update.md#compolyx.PublishedParameter.update)()                                        |                                                                                    |
| [`PublishedParameter.user_script_default`](compolyx.PublishedParameter.user_script_default.md#compolyx.PublishedParameter.user_script_default)() |                                                                                    |
| [`PublishedParameter.visit`](compolyx.PublishedParameter.visit.md#compolyx.PublishedParameter.visit)(visitor)                                    | Walk through the tree and let the visitor perform action on every descendant node. |
