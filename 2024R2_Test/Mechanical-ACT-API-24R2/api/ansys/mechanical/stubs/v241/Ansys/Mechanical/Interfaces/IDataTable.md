# `IDataTable`



#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

IDataTable interface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`Add`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Add)                   | Add a new column to the data table.                                       |
| [`Clear`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Clear)               | Drops all columns from the data table.                                    |
| [`Contains`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Contains)         | Returns whether the data table contains a column with the specified name. |
| [`GetRow`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.GetRow)             |                                                                           |
| [`Insert`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Insert)             | Insert a column at the specified index.                                   |
| [`Remove`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Remove)             | Removes the specified column. If                                          |
| [`TryInsertRow`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.TryInsertRow) | Try to insert the values at the specified row index.                      |
| [`TryRemoveRow`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.TryRemoveRow) | Try to remove the specified row.                                          |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`ColumnNames`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.ColumnNames)               |                                                                                          |
| [`Columns`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Columns)                       | Explicitly get the columns of the data table.                                            |
| [`Count`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Count)                           | Gets the number of columns in the table.                                                 |
| [`IsFixedColumnCount`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.IsFixedColumnCount) | Get whether additional columns can be added or removed from the contained                |
| [`IsFixedRowCount`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.IsFixedRowCount)       | Get whether additional rows can be added or removed from the contained                   |
| [`IsReadOnly`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.IsReadOnly)                 | Gets whether the data table is read-only.                                                |
| [`Item`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Item)                             | Item property.                                                                           |
| [`Metadata`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Metadata)                     | Gets or set a dictionary with additional information that may be useful to understanding |
| [`Name`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.Name)                             | Get or set the name of the table.                                                        |
| [`RowCount`](../../../../v242/Ansys/Mechanical/Interfaces/IDataTable.md#IDataTable.RowCount)                     |                                                                                          |

<a id="property-detail"></a>

## Property detail

<a id="IDataTable.ColumnNames"></a>

### *property* IDataTable.ColumnNames *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="IDataTable.Columns"></a>

### *property* IDataTable.Columns *: System.Collections.Generic.IList[[Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataSeries)] | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get the columns of the data table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Count"></a>

### *property* IDataTable.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of columns in the table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.IsFixedColumnCount"></a>

### *property* IDataTable.IsFixedColumnCount *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional columns can be added or removed from the contained

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.IsFixedRowCount"></a>

### *property* IDataTable.IsFixedRowCount *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional rows can be added or removed from the contained

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.IsReadOnly"></a>

### *property* IDataTable.IsReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the data table is read-only.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Item"></a>

### *property* IDataTable.Item *: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataSeries) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Metadata"></a>

### *property* IDataTable.Metadata *: System.Collections.Generic.IDictionary[System.String, System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set a dictionary with additional information that may be useful to understanding
the context of data in the table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Name"></a>

### *property* IDataTable.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get or set the name of the table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.RowCount"></a>

### *property* IDataTable.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="method-detail"></a>

## Method detail

<a id="IDataTable.Add"></a>

### IDataTable.Add(dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataSeries))

Add a new column to the data table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Clear"></a>

### IDataTable.Clear()

Drops all columns from the data table.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Contains"></a>

### IDataTable.Contains(name: System.String)

Returns whether the data table contains a column with the specified name.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.GetRow"></a>

### IDataTable.GetRow(rowIndex: System.Int32)

<a id="IDataTable.Insert"></a>

### IDataTable.Insert(columnIndex: System.Int32, dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Interfaces.IDataSeries))

Insert a column at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.Remove"></a>

### IDataTable.Remove(key: System.Object)

Removes the specified column. If

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.TryInsertRow"></a>

### IDataTable.TryInsertRow(rowIndex: System.Int32, values: System.Collections.IEnumerable)

Try to insert the values at the specified row index.

<!-- !! processed by numpydoc !! -->

<a id="IDataTable.TryRemoveRow"></a>

### IDataTable.TryRemoveRow(rowIndex: System.Int32)

Try to remove the specified row.

<!-- !! processed by numpydoc !! -->

