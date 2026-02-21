# LookUpTableBase

<a id="compolyx.LookUpTableBase"></a>

### *class* compolyx.LookUpTableBase(obj, parent=None)

Look-Up table class.

Associates scalar or vector values to points.

Example:

```pycon
>>> table = db.models['class40.1'].create_lookup_table1d(name='LookUpTable1D.1')
>>> table.columns['Location'].values = [0,1,2,3]
>>> db.models['class40.1'].lookup_tables['LookUpTable1D.2'].create_column( name='Radius', type='scalar' )
>>> r = db.models['class40.1'].lookup_tables['LookUpTable1D.2'].columns['Radius']
>>> r.values = [0,0.3,0.6,1]
```

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`LookUpTableBase.active`](compolyx.LookUpTableBase.active.md#compolyx.LookUpTableBase.active)                                           | LookUpTable active                                                                   |
| [`LookUpTableBase.column_factory`](compolyx.LookUpTableBase.column_factory.md#compolyx.LookUpTableBase.column_factory)                   |                                                                                      |
| [`LookUpTableBase.column_types`](compolyx.LookUpTableBase.column_types.md#compolyx.LookUpTableBase.column_types)                         | a list of column types ('scalar', or 'direction')                                    |
| [`LookUpTableBase.columns`](compolyx.LookUpTableBase.columns.md#compolyx.LookUpTableBase.columns)                                        | Dictionary with all columns                                                          |
| [`LookUpTableBase.dimensions`](compolyx.LookUpTableBase.dimensions.md#compolyx.LookUpTableBase.dimensions)                               |                                                                                      |
| [`LookUpTableBase.empty`](compolyx.LookUpTableBase.empty.md#compolyx.LookUpTableBase.empty)                                              | True if table is empty                                                               |
| [`LookUpTableBase.enabled`](compolyx.LookUpTableBase.enabled.md#compolyx.LookUpTableBase.enabled)                                        | Whether this object is currently enabled or not.                                     |
| [`LookUpTableBase.id`](compolyx.LookUpTableBase.id.md#compolyx.LookUpTableBase.id)                                                       | ID of object                                                                         |
| [`LookUpTableBase.is_dict_item`](compolyx.LookUpTableBase.is_dict_item.md#compolyx.LookUpTableBase.is_dict_item)                         | Specifies wether the object is an item of a dict                                     |
| [`LookUpTableBase.is_list_item`](compolyx.LookUpTableBase.is_list_item.md#compolyx.LookUpTableBase.is_list_item)                         | Specifies wether the object is an item of a list                                     |
| [`LookUpTableBase.link_path`](compolyx.LookUpTableBase.link_path.md#compolyx.LookUpTableBase.link_path)                                  | Root path of the current node in the tree for links to this object                   |
| [`LookUpTableBase.location_column_name`](compolyx.LookUpTableBase.location_column_name.md#compolyx.LookUpTableBase.location_column_name) |                                                                                      |
| [`LookUpTableBase.name`](compolyx.LookUpTableBase.name.md#compolyx.LookUpTableBase.name)                                                 | Name of object                                                                       |
| [`LookUpTableBase.num_cols`](compolyx.LookUpTableBase.num_cols.md#compolyx.LookUpTableBase.num_cols)                                     | Number of rows                                                                       |
| [`LookUpTableBase.num_rows`](compolyx.LookUpTableBase.num_rows.md#compolyx.LookUpTableBase.num_rows)                                     | Number of columns                                                                    |
| [`LookUpTableBase.parent`](compolyx.LookUpTableBase.parent.md#compolyx.LookUpTableBase.parent)                                           | Parent object in tree                                                                |
| [`LookUpTableBase.root_path`](compolyx.LookUpTableBase.root_path.md#compolyx.LookUpTableBase.root_path)                                  | Root path of the current node in the tree                                            |
| [`LookUpTableBase.status`](compolyx.LookUpTableBase.status.md#compolyx.LookUpTableBase.status)                                           | Status of the object                                                                 |
| [`LookUpTableBase.status_changed`](compolyx.LookUpTableBase.status_changed.md#compolyx.LookUpTableBase.status_changed)                   | Boolean flag which is set to true in C++ when up-to-date status of object changes.   |
| [`LookUpTableBase.tabular_data`](compolyx.LookUpTableBase.tabular_data.md#compolyx.LookUpTableBase.tabular_data)                         | a tuple containing a list of column labels and a 2d array with floats for all cells. |
| [`LookUpTableBase.uid`](compolyx.LookUpTableBase.uid.md#compolyx.LookUpTableBase.uid)                                                    | UID of object                                                                        |
| [`LookUpTableBase.vector_column_suffix`](compolyx.LookUpTableBase.vector_column_suffix.md#compolyx.LookUpTableBase.vector_column_suffix) |                                                                                      |
| [`LookUpTableBase.vertex`](compolyx.LookUpTableBase.vertex.md#compolyx.LookUpTableBase.vertex)                                           | This will throw an error if the object has been removed from the graph.              |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`LookUpTableBase.clear`](compolyx.LookUpTableBase.clear.md#compolyx.LookUpTableBase.clear)()                                                 | Clear table data (rows and columns).                                                                                         |
| [`LookUpTableBase.clear_rows`](compolyx.LookUpTableBase.clear_rows.md#compolyx.LookUpTableBase.clear_rows)()                                  | Clear table rows (keep columns).                                                                                             |
| [`LookUpTableBase.create_column`](compolyx.LookUpTableBase.create_column.md#compolyx.LookUpTableBase.create_column)(name[, type, ...])        | Create a new column.                                                                                                         |
| [`LookUpTableBase.find_parent`](compolyx.LookUpTableBase.find_parent.md#compolyx.LookUpTableBase.find_parent)(type)                           | Function steps up the tree and returns the first parent with given type.                                                     |
| [`LookUpTableBase.load_from_csv_file`](compolyx.LookUpTableBase.load_from_csv_file.md#compolyx.LookUpTableBase.load_from_csv_file)(path)      | Load the table from .csv file in path.                                                                                       |
| [`LookUpTableBase.obj_exists`](compolyx.LookUpTableBase.obj_exists.md#compolyx.LookUpTableBase.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`LookUpTableBase.save_to_csv_file`](compolyx.LookUpTableBase.save_to_csv_file.md#compolyx.LookUpTableBase.save_to_csv_file)(path)            | Save LookUpTable to CSV file.                                                                                                |
| [`LookUpTableBase.serialize_name_and_id`](compolyx.LookUpTableBase.serialize_name_and_id.md#compolyx.LookUpTableBase.serialize_name_and_id)() | Helper function to serialize name and ID.                                                                                    |
| [`LookUpTableBase.update`](compolyx.LookUpTableBase.update.md#compolyx.LookUpTableBase.update)()                                              |                                                                                                                              |
| [`LookUpTableBase.visit`](compolyx.LookUpTableBase.visit.md#compolyx.LookUpTableBase.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
