# `IDataTable`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.Interfaces.IDataTable"></a>

#### *class* Ansys.Mechanical.Interfaces.IDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

IDataTable interface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`Add`](#IDataTable.Add)                   | Add a new column to the data table.                                                                  |
| [`Clear`](#IDataTable.Clear)               | Drops all columns from the data table.                                                               |
| [`Contains`](#IDataTable.Contains)         | Returns whether the data table contains a column with the specified name.                            |
| [`GetRow`](#IDataTable.GetRow)             |                                                                                                      |
| [`Insert`](#IDataTable.Insert)             | Insert a column at the specified index.                                                              |
| [`Remove`](#IDataTable.Remove)             | Removes the specified column. If the specifier of the column to remove is an T:System.Int32, it will |
| [`TryInsertRow`](#IDataTable.TryInsertRow) | Try to insert the values at the specified row index.                                                 |
| [`TryRemoveRow`](#IDataTable.TryRemoveRow) | Try to remove the specified row.                                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [`ColumnNames`](#IDataTable.ColumnNames)               |                                                                                                                      |
| [`Columns`](#IDataTable.Columns)                       | Explicitly get the columns of the data table.                                                                        |
| [`Count`](#IDataTable.Count)                           | Gets the number of columns in the table.                                                                             |
| [`IsFixedColumnCount`](#IDataTable.IsFixedColumnCount) | Get whether additional columns can be added or removed from the contained T:Ansys.Mechanical.Interfaces.IDataSeries. |
| [`IsFixedRowCount`](#IDataTable.IsFixedRowCount)       | Get whether additional rows can be added or removed from the contained                                               |
| [`IsReadOnly`](#IDataTable.IsReadOnly)                 | Gets whether the data table is read-only.                                                                            |
| [`Item`](#IDataTable.Item)                             | Item property.                                                                                                       |
| [`Metadata`](#IDataTable.Metadata)                     | Gets or set a dictionary with additional information that may be useful to understanding                             |
| [`Name`](#IDataTable.Name)                             | Get or set the name of the table.                                                                                    |
| [`RowCount`](#IDataTable.RowCount)                     |                                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="IDataTable.ColumnNames"></a>

### *property* IDataTable.ColumnNames *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="IDataTable.Columns"></a>

### *property* IDataTable.Columns *: List[[Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Interfaces.IDataSeries)] | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get the columns of the data table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Count"></a>

### *property* IDataTable.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of columns in the table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.IsFixedColumnCount"></a>

### *property* IDataTable.IsFixedColumnCount *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional columns can be added or removed from the contained T:Ansys.Mechanical.Interfaces.IDataSeries.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.IsFixedRowCount"></a>

### *property* IDataTable.IsFixedRowCount *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional rows can be added or removed from the contained
T:Ansys.Mechanical.Interfaces.IDataSeries.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.IsReadOnly"></a>

### *property* IDataTable.IsReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the data table is read-only.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Item"></a>

### *property* IDataTable.Item *: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Interfaces.IDataSeries) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Metadata"></a>

### *property* IDataTable.Metadata *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set a dictionary with additional information that may be useful to understanding
the context of data in the table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Name"></a>

### *property* IDataTable.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Get or set the name of the table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.RowCount"></a>

### *property* IDataTable.RowCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="method-detail"></a>

## Method detail

<a id="IDataTable.Add"></a>

### IDataTable.Add(dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Interfaces.IDataSeries))

Add a new column to the data table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Clear"></a>

### IDataTable.Clear()

Drops all columns from the data table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Contains"></a>

### IDataTable.Contains(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Returns whether the data table contains a column with the specified name.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.GetRow"></a>

### IDataTable.GetRow(rowIndex: [int](https://docs.python.org/3/library/functions.html#int))

<a id="IDataTable.Insert"></a>

### IDataTable.Insert(columnIndex: [int](https://docs.python.org/3/library/functions.html#int), dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Interfaces.IDataSeries))

Insert a column at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Remove"></a>

### IDataTable.Remove(key: Any)

```text
Removes the specified column. If the specifier of the column to remove is an T:System.Int32, it will
be interpreted as an index. If the specifier of the column to remove is a T:System.String, it will
be interpreted as a column name.
```

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.TryInsertRow"></a>

### IDataTable.TryInsertRow(rowIndex: [int](https://docs.python.org/3/library/functions.html#int), values: Iterable)

Try to insert the values at the specified row index.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.TryRemoveRow"></a>

### IDataTable.TryRemoveRow(rowIndex: [int](https://docs.python.org/3/library/functions.html#int))

Try to remove the specified row.

<!-- !! processed by numpydoc !! -->

