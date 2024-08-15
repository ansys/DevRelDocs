# `IDataTable`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Interfaces.IDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

IDataTable interface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------|------------------------------------------------------------------------------------------------------|
| `Add`          | Add a new column to the data table.                                                                  |
| `Clear`        | Drops all columns from the data table.                                                               |
| `Contains`     | Returns whether the data table contains a column with the specified name.                            |
| `GetRow`       |                                                                                                      |
| `Insert`       | Insert a column at the specified index.                                                              |
| `Remove`       | Removes the specified column. If the specifier of the column to remove is an T:System.Int32, it will |
| `TryInsertRow` | Try to insert the values at the specified row index.                                                 |
| `TryRemoveRow` | Try to remove the specified row.                                                                     |

### Properties

| Name | Description |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| `ColumnNames`        |                                                                                                                      |
| `Columns`            | Explicitly get the columns of the data table.                                                                        |
| `Count`              | Gets the number of columns in the table.                                                                             |
| `IsFixedColumnCount` | Get whether additional columns can be added or removed from the contained T:Ansys.Mechanical.Interfaces.IDataSeries. |
| `IsFixedRowCount`    | Get whether additional rows can be added or removed from the contained                                               |
| `IsReadOnly`         | Gets whether the data table is read-only.                                                                            |
| `Item`               | Item property.                                                                                                       |
| `Metadata`           | Gets or set a dictionary with additional information that may be useful to understanding                             |
| `Name`               | Get or set the name of the table.                                                                                    |
| `RowCount`           |                                                                                                                      |

<a id="property-detail"></a>

## Property detail

### *property* IDataTable.ColumnNames *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

### *property* IDataTable.Columns *: System.Collections.Generic.IList[[Ansys.Mechanical.Interfaces.IDataSeries](../../../../v241/Ansys/Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataSeries)] | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get the columns of the data table.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of columns in the table.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.IsFixedColumnCount *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional columns can be added or removed from the contained T:Ansys.Mechanical.Interfaces.IDataSeries.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.IsFixedRowCount *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional rows can be added or removed from the contained
T:Ansys.Mechanical.Interfaces.IDataSeries.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.IsReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the data table is read-only.

<!-- !! processed by numpydoc !! -->

### *property* IDataTable.Item *: [Ansys.Mechanical.Interfaces.IDataSeries](../../../../v241/Ansys/Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataSeries) | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### IDataTable.Add(dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](../../../../v241/Ansys/Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataSeries))

Add a new column to the data table.

<!-- !! processed by numpydoc !! -->

### IDataTable.Clear()

Drops all columns from the data table.

<!-- !! processed by numpydoc !! -->

### IDataTable.Contains(name: System.String)

Returns whether the data table contains a column with the specified name.

<!-- !! processed by numpydoc !! -->

### IDataTable.GetRow(rowIndex: System.Int32)

### IDataTable.Insert(columnIndex: System.Int32, dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](../../../../v241/Ansys/Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataSeries))

Insert a column at the specified index.

<!-- !! processed by numpydoc !! -->

### IDataTable.Remove(key: System.Object)

```text
Removes the specified column. If the specifier of the column to remove is an T:System.Int32, it will
be interpreted as an index. If the specifier of the column to remove is a T:System.String, it will
be interpreted as a column name.
```

<!-- !! processed by numpydoc !! -->

### IDataTable.TryInsertRow(rowIndex: System.Int32, values: System.Collections.IEnumerable)

Try to insert the values at the specified row index.

<!-- !! processed by numpydoc !! -->

### IDataTable.TryRemoveRow(rowIndex: System.Int32)

Try to remove the specified row.

<!-- !! processed by numpydoc !! -->

