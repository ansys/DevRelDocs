# PlotDataDict

<a id="compolyx.plot_data.PlotDataDict"></a>

### *class* compolyx.plot_data.PlotDataDict(name, label=None, obj=None, list=[], item_type=<class 'object'>, parent=None, key_attr='name')

### Attributes

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`PlotDataDict.enabled`](compolyx.plot_data.PlotDataDict.enabled.md#compolyx.plot_data.PlotDataDict.enabled)                | Whether this object is currently enabled or not.                           |
| [`PlotDataDict.is_dict_item`](compolyx.plot_data.PlotDataDict.is_dict_item.md#compolyx.plot_data.PlotDataDict.is_dict_item) | Specifies wether the object is an item of a dict                           |
| [`PlotDataDict.is_list_item`](compolyx.plot_data.PlotDataDict.is_list_item.md#compolyx.plot_data.PlotDataDict.is_list_item) | Specifies wether the object is an item of a list                           |
| [`PlotDataDict.item_type`](compolyx.plot_data.PlotDataDict.item_type.md#compolyx.plot_data.PlotDataDict.item_type)          | Type of items stored in this UIDict                                        |
| [`PlotDataDict.key_attr`](compolyx.plot_data.PlotDataDict.key_attr.md#compolyx.plot_data.PlotDataDict.key_attr)             | Name of attribute of item objects which is mapped to the key of the UIDict |
| [`PlotDataDict.label`](compolyx.plot_data.PlotDataDict.label.md#compolyx.plot_data.PlotDataDict.label)                      |                                                                            |
| [`PlotDataDict.link_path`](compolyx.plot_data.PlotDataDict.link_path.md#compolyx.plot_data.PlotDataDict.link_path)          | Root path of the current node in the tree for links to this object         |
| [`PlotDataDict.name`](compolyx.plot_data.PlotDataDict.name.md#compolyx.plot_data.PlotDataDict.name)                         | Name of object                                                             |
| [`PlotDataDict.parent`](compolyx.plot_data.PlotDataDict.parent.md#compolyx.plot_data.PlotDataDict.parent)                   | Parent object in tree                                                      |
| [`PlotDataDict.root_path`](compolyx.plot_data.PlotDataDict.root_path.md#compolyx.plot_data.PlotDataDict.root_path)          | Root path of the current node in the tree                                  |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`PlotDataDict.append`](compolyx.plot_data.PlotDataDict.append.md#compolyx.plot_data.PlotDataDict.append)(value)               | Append a new item to the UIDict.                                                            |
| [`PlotDataDict.clear`](compolyx.plot_data.PlotDataDict.clear.md#compolyx.plot_data.PlotDataDict.clear)()                       |                                                                                             |
| [`PlotDataDict.copy_plot`](compolyx.plot_data.PlotDataDict.copy_plot.md#compolyx.plot_data.PlotDataDict.copy_plot)(source)     | Copy a plot object.                                                                         |
| [`PlotDataDict.extend`](compolyx.plot_data.PlotDataDict.extend.md#compolyx.plot_data.PlotDataDict.extend)(values)              | Extend the UIDict with multiple items at once.                                              |
| [`PlotDataDict.find`](compolyx.plot_data.PlotDataDict.find.md#compolyx.plot_data.PlotDataDict.find)(func)                      | Return the value of the first value in dict where func(value) == True.                      |
| [`PlotDataDict.find_key`](compolyx.plot_data.PlotDataDict.find_key.md#compolyx.plot_data.PlotDataDict.find_key)(func)          | Return the key of the first value in dict where func(value) == True.                        |
| [`PlotDataDict.find_parent`](compolyx.plot_data.PlotDataDict.find_parent.md#compolyx.plot_data.PlotDataDict.find_parent)(type) | Function steps up the tree and returns the first parent with given type.                    |
| [`PlotDataDict.get`](compolyx.plot_data.PlotDataDict.get.md#compolyx.plot_data.PlotDataDict.get)(key[, default])               |                                                                                             |
| [`PlotDataDict.index`](compolyx.plot_data.PlotDataDict.index.md#compolyx.plot_data.PlotDataDict.index)(key)                    |                                                                                             |
| [`PlotDataDict.items`](compolyx.plot_data.PlotDataDict.items.md#compolyx.plot_data.PlotDataDict.items)()                       | Return ordered list with (key,value) pairs                                                  |
| [`PlotDataDict.iteritems`](compolyx.plot_data.PlotDataDict.iteritems.md#compolyx.plot_data.PlotDataDict.iteritems)()           |                                                                                             |
| [`PlotDataDict.iterkeys`](compolyx.plot_data.PlotDataDict.iterkeys.md#compolyx.plot_data.PlotDataDict.iterkeys)()              |                                                                                             |
| [`PlotDataDict.itervalues`](compolyx.plot_data.PlotDataDict.itervalues.md#compolyx.plot_data.PlotDataDict.itervalues)()        |                                                                                             |
| [`PlotDataDict.keys`](compolyx.plot_data.PlotDataDict.keys.md#compolyx.plot_data.PlotDataDict.keys)()                          |                                                                                             |
| [`PlotDataDict.new`](compolyx.plot_data.PlotDataDict.new.md#compolyx.plot_data.PlotDataDict.new)(name[, type])                 |                                                                                             |
| [`PlotDataDict.rename`](compolyx.plot_data.PlotDataDict.rename.md#compolyx.plot_data.PlotDataDict.rename)(old_name, new_name)  | Rename function which updates the name of the object by calling obj._update_name(new_name). |
| [`PlotDataDict.sort`](compolyx.plot_data.PlotDataDict.sort.md#compolyx.plot_data.PlotDataDict.sort)([cmp, key, reverse])       |                                                                                             |
| [`PlotDataDict.update_key`](compolyx.plot_data.PlotDataDict.update_key.md#compolyx.plot_data.PlotDataDict.update_key)(old)     | Update old key of object to the current value of the key_attr attribute of this object      |
| [`PlotDataDict.values`](compolyx.plot_data.PlotDataDict.values.md#compolyx.plot_data.PlotDataDict.values)()                    |                                                                                             |
| [`PlotDataDict.visit`](compolyx.plot_data.PlotDataDict.visit.md#compolyx.plot_data.PlotDataDict.visit)(visitor)                | Walk through the tree and let the visitor perform action on every descendant node.          |
