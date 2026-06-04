# LookUpTable1D

<a id="compolyx.LookUpTable1D"></a>

### *class* compolyx.LookUpTable1D(obj, parent=None)

A LookUpTable to associate arbitrary data to a one-dimensional field of Locations.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`LookUpTable1D.active`](compolyx.LookUpTable1D.active.md#compolyx.LookUpTable1D.active)                                           | LookUpTable active.                                                                   |
| [`LookUpTable1D.column_types`](compolyx.LookUpTable1D.column_types.md#compolyx.LookUpTable1D.column_types)                         | a list of column types ('scalar', or 'direction').                                    |
| [`LookUpTable1D.columns`](compolyx.LookUpTable1D.columns.md#compolyx.LookUpTable1D.columns)                                        | Dictionary with all columns.                                                          |
| [`LookUpTable1D.dimensions`](compolyx.LookUpTable1D.dimensions.md#compolyx.LookUpTable1D.dimensions)                               |                                                                                      |
| [`LookUpTable1D.direction`](compolyx.LookUpTable1D.direction.md#compolyx.LookUpTable1D.direction)                                  | The Direction of the Look Up Table.                                                   |
| [`LookUpTable1D.empty`](compolyx.LookUpTable1D.empty.md#compolyx.LookUpTable1D.empty)                                              | True if table is empty.                                                               |
| [`LookUpTable1D.enabled`](compolyx.LookUpTable1D.enabled.md#compolyx.LookUpTable1D.enabled)                                        | Indicates whether the object is enabled.                                     |
| [`LookUpTable1D.id`](compolyx.LookUpTable1D.id.md#compolyx.LookUpTable1D.id)                                                       | ID of the object.                                                                         |
| [`LookUpTable1D.is_dict_item`](compolyx.LookUpTable1D.is_dict_item.md#compolyx.LookUpTable1D.is_dict_item)                         | Indicates whether the object is an item in a dictionary.                                     |
| [`LookUpTable1D.is_list_item`](compolyx.LookUpTable1D.is_list_item.md#compolyx.LookUpTable1D.is_list_item)                         | Indicates whether the object is an item of a list.                                     |
| [`LookUpTable1D.link_path`](compolyx.LookUpTable1D.link_path.md#compolyx.LookUpTable1D.link_path)                                  | Root path of the current node in the tree for links to this object.                   |
| [`LookUpTable1D.location_column_name`](compolyx.LookUpTable1D.location_column_name.md#compolyx.LookUpTable1D.location_column_name) |                                                                                      |
| [`LookUpTable1D.name`](compolyx.LookUpTable1D.name.md#compolyx.LookUpTable1D.name)                                                 | Name of the object.                                                                       |
| [`LookUpTable1D.num_cols`](compolyx.LookUpTable1D.num_cols.md#compolyx.LookUpTable1D.num_cols)                                     | Number of rows.                                                                       |
| [`LookUpTable1D.num_rows`](compolyx.LookUpTable1D.num_rows.md#compolyx.LookUpTable1D.num_rows)                                     | Number of columns.                                                                    |
| [`LookUpTable1D.origin`](compolyx.LookUpTable1D.origin.md#compolyx.LookUpTable1D.origin)                                           | The Origin of the Look Up Table.                                                      |
| [`LookUpTable1D.parent`](compolyx.LookUpTable1D.parent.md#compolyx.LookUpTable1D.parent)                                           | Parent object in the tree.                                                                |
| [`LookUpTable1D.root_path`](compolyx.LookUpTable1D.root_path.md#compolyx.LookUpTable1D.root_path)                                  | Root path of the current node in the tree.                                            |
| [`LookUpTable1D.status`](compolyx.LookUpTable1D.status.md#compolyx.LookUpTable1D.status)                                           | Status of the object.                                                                 |
| [`LookUpTable1D.status_changed`](compolyx.LookUpTable1D.status_changed.md#compolyx.LookUpTable1D.status_changed)                   | Boolean flag which is set to true in C++ when up-to-date status of object changes.   |
| [`LookUpTable1D.tabular_data`](compolyx.LookUpTable1D.tabular_data.md#compolyx.LookUpTable1D.tabular_data)                         | a tuple containing a list of column labels and a 2d array with floats for all cells. |
| [`LookUpTable1D.uid`](compolyx.LookUpTable1D.uid.md#compolyx.LookUpTable1D.uid)                                                    | UID of the object.                                                                        |
| [`LookUpTable1D.vector_column_suffix`](compolyx.LookUpTable1D.vector_column_suffix.md#compolyx.LookUpTable1D.vector_column_suffix) |                                                                                      |
| [`LookUpTable1D.vertex`](compolyx.LookUpTable1D.vertex.md#compolyx.LookUpTable1D.vertex)                                           | Raises an error if the object has been removed from the graph.              |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`LookUpTable1D.clear`](compolyx.LookUpTable1D.clear.md#compolyx.LookUpTable1D.clear)()                                                 | Clear table data (rows and columns).                                                                                         |
| [`LookUpTable1D.clear_rows`](compolyx.LookUpTable1D.clear_rows.md#compolyx.LookUpTable1D.clear_rows)()                                  | Clear table rows (keep columns).                                                                                             |
| [`LookUpTable1D.create_column`](compolyx.LookUpTable1D.create_column.md#compolyx.LookUpTable1D.create_column)(name[, type, ...])        | Create a new column.                                                                                                         |
| [`LookUpTable1D.find_parent`](compolyx.LookUpTable1D.find_parent.md#compolyx.LookUpTable1D.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`LookUpTable1D.load_from_csv_file`](compolyx.LookUpTable1D.load_from_csv_file.md#compolyx.LookUpTable1D.load_from_csv_file)(path)      | Load the table from .csv file in path.                                                                                       |
| [`LookUpTable1D.obj_exists`](compolyx.LookUpTable1D.obj_exists.md#compolyx.LookUpTable1D.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`LookUpTable1D.save_to_csv_file`](compolyx.LookUpTable1D.save_to_csv_file.md#compolyx.LookUpTable1D.save_to_csv_file)(path)            | Save LookUpTable to CSV file.                                                                                                |
| [`LookUpTable1D.serialize`](compolyx.LookUpTable1D.serialize.md#compolyx.LookUpTable1D.serialize)()                                     |                                                                                                                              |
| [`LookUpTable1D.serialize_name_and_id`](compolyx.LookUpTable1D.serialize_name_and_id.md#compolyx.LookUpTable1D.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`LookUpTable1D.update`](compolyx.LookUpTable1D.update.md#compolyx.LookUpTable1D.update)()                                              |                                                                                                                              |
| [`LookUpTable1D.visit`](compolyx.LookUpTable1D.visit.md#compolyx.LookUpTable1D.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
