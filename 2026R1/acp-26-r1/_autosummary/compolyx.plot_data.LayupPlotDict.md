# LayupPlotDict

<a id="compolyx.plot_data.LayupPlotDict"></a>

### *class* compolyx.plot_data.LayupPlotDict(name, label=None, obj=None, list=[], item_type=<class 'object'>, parent=None, key_attr='name')

Container for Layup Plots

### Attributes

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`LayupPlotDict.enabled`](compolyx.plot_data.LayupPlotDict.enabled.md#compolyx.plot_data.LayupPlotDict.enabled)                | Whether this object is currently enabled or not.                           |
| [`LayupPlotDict.is_dict_item`](compolyx.plot_data.LayupPlotDict.is_dict_item.md#compolyx.plot_data.LayupPlotDict.is_dict_item) | Specifies wether the object is an item of a dict                           |
| [`LayupPlotDict.is_list_item`](compolyx.plot_data.LayupPlotDict.is_list_item.md#compolyx.plot_data.LayupPlotDict.is_list_item) | Specifies wether the object is an item of a list                           |
| [`LayupPlotDict.item_type`](compolyx.plot_data.LayupPlotDict.item_type.md#compolyx.plot_data.LayupPlotDict.item_type)          | Type of items stored in this UIDict                                        |
| [`LayupPlotDict.key_attr`](compolyx.plot_data.LayupPlotDict.key_attr.md#compolyx.plot_data.LayupPlotDict.key_attr)             | Name of attribute of item objects which is mapped to the key of the UIDict |
| [`LayupPlotDict.label`](compolyx.plot_data.LayupPlotDict.label.md#compolyx.plot_data.LayupPlotDict.label)                      |                                                                            |
| [`LayupPlotDict.link_path`](compolyx.plot_data.LayupPlotDict.link_path.md#compolyx.plot_data.LayupPlotDict.link_path)          | Root path of the current node in the tree for links to this object         |
| [`LayupPlotDict.name`](compolyx.plot_data.LayupPlotDict.name.md#compolyx.plot_data.LayupPlotDict.name)                         | Name of object                                                             |
| [`LayupPlotDict.parent`](compolyx.plot_data.LayupPlotDict.parent.md#compolyx.plot_data.LayupPlotDict.parent)                   | Parent object in tree                                                      |
| [`LayupPlotDict.root_path`](compolyx.plot_data.LayupPlotDict.root_path.md#compolyx.plot_data.LayupPlotDict.root_path)          | Root path of the current node in the tree                                  |

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`LayupPlotDict.append`](compolyx.plot_data.LayupPlotDict.append.md#compolyx.plot_data.LayupPlotDict.append)(value)                                                                   | Append a new item to the UIDict.                                                            |
| [`LayupPlotDict.clear`](compolyx.plot_data.LayupPlotDict.clear.md#compolyx.plot_data.LayupPlotDict.clear)()                                                                           |                                                                                             |
| [`LayupPlotDict.copy_plot`](compolyx.plot_data.LayupPlotDict.copy_plot.md#compolyx.plot_data.LayupPlotDict.copy_plot)(source)                                                         | Copy a plot object.                                                                         |
| [`LayupPlotDict.create_angle_plot`](compolyx.plot_data.LayupPlotDict.create_angle_plot.md#compolyx.plot_data.LayupPlotDict.create_angle_plot)([name, id, ...])                        | Create a Angle Plot object.                                                                 |
| [`LayupPlotDict.create_draping_plot`](compolyx.plot_data.LayupPlotDict.create_draping_plot.md#compolyx.plot_data.LayupPlotDict.create_draping_plot)([name, ...])                      | Create a Draping Plot object.                                                               |
| [`LayupPlotDict.create_field_definition_plot`](compolyx.plot_data.LayupPlotDict.create_field_definition_plot.md#compolyx.plot_data.LayupPlotDict.create_field_definition_plot)([...]) | Create a FieldDefinition Plot object.                                                       |
| [`LayupPlotDict.create_layup_mapping_plot`](compolyx.plot_data.LayupPlotDict.create_layup_mapping_plot.md#compolyx.plot_data.LayupPlotDict.create_layup_mapping_plot)([...])          | Create a Layup Mapping Plot object.                                                         |
| [`LayupPlotDict.create_material_plot`](compolyx.plot_data.LayupPlotDict.create_material_plot.md#compolyx.plot_data.LayupPlotDict.create_material_plot)([name, ...])                   | Create a Material Plot object.                                                              |
| [`LayupPlotDict.create_scalar_field_plot`](compolyx.plot_data.LayupPlotDict.create_scalar_field_plot.md#compolyx.plot_data.LayupPlotDict.create_scalar_field_plot)([...])             | Create a Field Plot object.                                                                 |
| [`LayupPlotDict.create_thickness_plot`](compolyx.plot_data.LayupPlotDict.create_thickness_plot.md#compolyx.plot_data.LayupPlotDict.create_thickness_plot)([name, ...])                | Create a Thickness Plot object.                                                             |
| [`LayupPlotDict.create_user_defined_plot`](compolyx.plot_data.LayupPlotDict.create_user_defined_plot.md#compolyx.plot_data.LayupPlotDict.create_user_defined_plot)([...])             | Create a User-defined Plot object.                                                          |
| [`LayupPlotDict.extend`](compolyx.plot_data.LayupPlotDict.extend.md#compolyx.plot_data.LayupPlotDict.extend)(values)                                                                  | Extend the UIDict with multiple items at once.                                              |
| [`LayupPlotDict.find`](compolyx.plot_data.LayupPlotDict.find.md#compolyx.plot_data.LayupPlotDict.find)(func)                                                                          | Return the value of the first value in dict where func(value) == True.                      |
| [`LayupPlotDict.find_key`](compolyx.plot_data.LayupPlotDict.find_key.md#compolyx.plot_data.LayupPlotDict.find_key)(func)                                                              | Return the key of the first value in dict where func(value) == True.                        |
| [`LayupPlotDict.find_parent`](compolyx.plot_data.LayupPlotDict.find_parent.md#compolyx.plot_data.LayupPlotDict.find_parent)(type)                                                     | Function steps up the tree and returns the first parent with given type.                    |
| [`LayupPlotDict.get`](compolyx.plot_data.LayupPlotDict.get.md#compolyx.plot_data.LayupPlotDict.get)(key[, default])                                                                   |                                                                                             |
| [`LayupPlotDict.index`](compolyx.plot_data.LayupPlotDict.index.md#compolyx.plot_data.LayupPlotDict.index)(key)                                                                        |                                                                                             |
| [`LayupPlotDict.items`](compolyx.plot_data.LayupPlotDict.items.md#compolyx.plot_data.LayupPlotDict.items)()                                                                           | Return ordered list with (key,value) pairs                                                  |
| [`LayupPlotDict.iteritems`](compolyx.plot_data.LayupPlotDict.iteritems.md#compolyx.plot_data.LayupPlotDict.iteritems)()                                                               |                                                                                             |
| [`LayupPlotDict.iterkeys`](compolyx.plot_data.LayupPlotDict.iterkeys.md#compolyx.plot_data.LayupPlotDict.iterkeys)()                                                                  |                                                                                             |
| [`LayupPlotDict.itervalues`](compolyx.plot_data.LayupPlotDict.itervalues.md#compolyx.plot_data.LayupPlotDict.itervalues)()                                                            |                                                                                             |
| [`LayupPlotDict.keys`](compolyx.plot_data.LayupPlotDict.keys.md#compolyx.plot_data.LayupPlotDict.keys)()                                                                              |                                                                                             |
| [`LayupPlotDict.new`](compolyx.plot_data.LayupPlotDict.new.md#compolyx.plot_data.LayupPlotDict.new)(name[, type])                                                                     |                                                                                             |
| [`LayupPlotDict.rename`](compolyx.plot_data.LayupPlotDict.rename.md#compolyx.plot_data.LayupPlotDict.rename)(old_name, new_name)                                                      | Rename function which updates the name of the object by calling obj._update_name(new_name). |
| [`LayupPlotDict.sort`](compolyx.plot_data.LayupPlotDict.sort.md#compolyx.plot_data.LayupPlotDict.sort)([cmp, key, reverse])                                                           |                                                                                             |
| [`LayupPlotDict.update_key`](compolyx.plot_data.LayupPlotDict.update_key.md#compolyx.plot_data.LayupPlotDict.update_key)(old)                                                         | Update old key of object to the current value of the key_attr attribute of this object      |
| [`LayupPlotDict.values`](compolyx.plot_data.LayupPlotDict.values.md#compolyx.plot_data.LayupPlotDict.values)()                                                                        |                                                                                             |
| [`LayupPlotDict.visit`](compolyx.plot_data.LayupPlotDict.visit.md#compolyx.plot_data.LayupPlotDict.visit)(visitor)                                                                    | Walk through the tree and let the visitor perform action on every descendant node.          |
