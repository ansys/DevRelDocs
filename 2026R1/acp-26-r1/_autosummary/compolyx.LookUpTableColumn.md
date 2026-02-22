# LookUpTableColumn

<a id="compolyx.LookUpTableColumn"></a>

### *class* compolyx.LookUpTableColumn(name, parent)

An object to hold a column in a table.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`LookUpTableColumn.dimension`](compolyx.LookUpTableColumn.dimension.md#compolyx.LookUpTableColumn.dimension)          |                                                                    |
| [`LookUpTableColumn.enabled`](compolyx.LookUpTableColumn.enabled.md#compolyx.LookUpTableColumn.enabled)                | Whether this object is currently enabled.                          |
| [`LookUpTableColumn.is_dict_item`](compolyx.LookUpTableColumn.is_dict_item.md#compolyx.LookUpTableColumn.is_dict_item) | Indicates whether the object is an item in a dictionary                   |
| [`LookUpTableColumn.is_list_item`](compolyx.LookUpTableColumn.is_list_item.md#compolyx.LookUpTableColumn.is_list_item) | Indicates whether the object is an item of a list                   |
| [`LookUpTableColumn.link_path`](compolyx.LookUpTableColumn.link_path.md#compolyx.LookUpTableColumn.link_path)          | Root path of the current node in the tree for links to this object |
| [`LookUpTableColumn.name`](compolyx.LookUpTableColumn.name.md#compolyx.LookUpTableColumn.name)                         |                                                                    |
| [`LookUpTableColumn.parent`](compolyx.LookUpTableColumn.parent.md#compolyx.LookUpTableColumn.parent)                   | Parent object in the tree                                              |
| [`LookUpTableColumn.root_path`](compolyx.LookUpTableColumn.root_path.md#compolyx.LookUpTableColumn.root_path)          | Root path of the current node in the tree                          |
| [`LookUpTableColumn.status`](compolyx.LookUpTableColumn.status.md#compolyx.LookUpTableColumn.status)                   | column status ('UPTODATE','NOTUPTODATE', or 'LOCKED')              |
| [`LookUpTableColumn.type`](compolyx.LookUpTableColumn.type.md#compolyx.LookUpTableColumn.type)                         | column type (scalar or direction)                                  |
| [`LookUpTableColumn.values`](compolyx.LookUpTableColumn.values.md#compolyx.LookUpTableColumn.values)                   | numpy array containing the column values                           |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`LookUpTableColumn.find_parent`](compolyx.LookUpTableColumn.find_parent.md#compolyx.LookUpTableColumn.find_parent)(type)   | Steps up the tree and returns the first parent with given type.           |
| [`LookUpTableColumn.obj_exists`](compolyx.LookUpTableColumn.obj_exists.md#compolyx.LookUpTableColumn.obj_exists)()          |                                                                                    |
| [`LookUpTableColumn.visit`](compolyx.LookUpTableColumn.visit.md#compolyx.LookUpTableColumn.visit)(visitor)                  | Walk through the tree and let the visitor perform action on every descendant node. |
