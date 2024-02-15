# IReadOnlyDataTable

### *class* IReadOnlyDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IReadOnlyDataTable interface.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetRow`](#IReadOnlyDataTable.GetRow)   | Returns an enumerable to iterate over the values in a row.   |
|------------------------------------------|--------------------------------------------------------------|

### Properties

| [`ColumnNames`](#IReadOnlyDataTable.ColumnNames)   | Gets a list of the column names.                                                      |
|----------------------------------------------------|---------------------------------------------------------------------------------------|
| [`Columns`](#IReadOnlyDataTable.Columns)           | Explicitly get the columns of the table.                                              |
| [`Item`](#IReadOnlyDataTable.Item)                 | Item property.                                                                        |
| [`Metadata`](#IReadOnlyDataTable.Metadata)         | Gets a dictionary with additional information that may be useful to understanding the |
| [`Name`](#IReadOnlyDataTable.Name)                 | Get the name of the table.                                                            |
| [`RowCount`](#IReadOnlyDataTable.RowCount)         | Gets the maximum number of data points (rows) among all columns in the table          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import IReadOnlyDataTable
```

## Property detail

### *property* IReadOnlyDataTable.ColumnNames *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of the column names.

<!-- !! processed by numpydoc !! -->

### *property* IReadOnlyDataTable.Columns *: System.Collections.Generic.IReadOnlyList[[Ansys.Mechanical.Interfaces.IReadOnlyDataSeries](IReadOnlyDataSeries.md#IReadOnlyDataSeries)] | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get the columns of the table.

<!-- !! processed by numpydoc !! -->

### *property* IReadOnlyDataTable.Item *: [Ansys.Mechanical.Interfaces.IReadOnlyDataSeries](IReadOnlyDataSeries.md#IReadOnlyDataSeries) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* IReadOnlyDataTable.Metadata *: System.Collections.Generic.IReadOnlyDictionary[System.String, System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a dictionary with additional information that may be useful to understanding the
context of data in the table.

<!-- !! processed by numpydoc !! -->

### *property* IReadOnlyDataTable.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the name of the table.

<!-- !! processed by numpydoc !! -->

### *property* IReadOnlyDataTable.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the maximum number of data points (rows) among all columns in the table

<!-- !! processed by numpydoc !! -->

## Method detail

### IReadOnlyDataTable.GetRow(rowIndex: System.Int32)

Returns an enumerable to iterate over the values in a row.

<!-- !! processed by numpydoc !! -->
