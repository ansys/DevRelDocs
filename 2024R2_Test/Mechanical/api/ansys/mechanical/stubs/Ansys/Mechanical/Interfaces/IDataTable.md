# IDataTable

### *class* IDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IDataTable interface.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Add`](#IDataTable.Add)                   | Add a new column to the data table.                                       |
|--------------------------------------------|---------------------------------------------------------------------------|
| [`Clear`](#IDataTable.Clear)               | Drops all columns from the data table.                                    |
| [`Contains`](#IDataTable.Contains)         | Returns whether the data table contains a column with the specified name. |
| [`GetRow`](#IDataTable.GetRow)             |                                                                           |
| [`Insert`](#IDataTable.Insert)             | Insert a column at the specified index.                                   |
| [`Remove`](#IDataTable.Remove)             | Removes the specified column. If                                          |
| [`TryInsertRow`](#IDataTable.TryInsertRow) | Try to insert the values at the specified row index.                      |
| [`TryRemoveRow`](#IDataTable.TryRemoveRow) | Try to remove the specified row.                                          |

### Properties

| [`ColumnNames`](#IDataTable.ColumnNames)               |                                                                                          |
|--------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Columns`](#IDataTable.Columns)                       | Explicitly get the columns of the data table.                                            |
| [`Count`](#IDataTable.Count)                           | Gets the number of columns in the table.                                                 |
| [`IsFixedColumnCount`](#IDataTable.IsFixedColumnCount) | Get whether additional columns can be added or removed from the contained                |
| [`IsFixedRowCount`](#IDataTable.IsFixedRowCount)       | Get whether additional rows can be added or removed from the contained                   |
| [`IsReadOnly`](#IDataTable.IsReadOnly)                 | Gets whether the data table is read-only.                                                |
| [`Item`](#IDataTable.Item)                             | Item property.                                                                           |
| [`Metadata`](#IDataTable.Metadata)                     | Gets or set a dictionary with additional information that may be useful to understanding |
| [`Name`](#IDataTable.Name)                             | Get or set the name of the table.                                                        |
| [`RowCount`](#IDataTable.RowCount)                     |                                                                                          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import IDataTable
```

## Property detail

### *property* IDataTable.ColumnNames *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

### *property* IDataTable.Columns *: System.Collections.Generic.IList[[Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#IDataSeries)] | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get the columns of the data table.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of columns in the table.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.IsFixedColumnCount *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional columns can be added or removed from the contained

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.IsFixedRowCount *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional rows can be added or removed from the contained

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.IsReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the data table is read-only.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.Item *: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#IDataSeries) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.Metadata *: System.Collections.Generic.IDictionary[System.String, System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set a dictionary with additional information that may be useful to understanding
the context of data in the table.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get or set the name of the table.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

## Method detail

### IDataTable.Add(dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#IDataSeries))

Add a new column to the data table.

<!-- !! processed by numpydoc !! -->

### IDataTable.Clear()

Drops all columns from the data table.

<!-- !! processed by numpydoc !! -->

### IDataTable.Contains(name: System.String)

Returns whether the data table contains a column with the specified name.

<!-- !! processed by numpydoc !! -->

### IDataTable.GetRow(rowIndex: System.Int32)

### IDataTable.Insert(columnIndex: System.Int32, dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#IDataSeries))

Insert a column at the specified index.

<!-- !! processed by numpydoc !! -->

### IDataTable.Remove(key: System.Object)

Removes the specified column. If

<!-- !! processed by numpydoc !! -->

### IDataTable.TryInsertRow(rowIndex: System.Int32, values: System.Collections.IEnumerable)

Try to insert the values at the specified row index.

<!-- !! processed by numpydoc !! -->

### IDataTable.TryRemoveRow(rowIndex: System.Int32)

Try to remove the specified row.

<!-- !! processed by numpydoc !! -->
