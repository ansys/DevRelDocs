# `IReadOnlyDataTable`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.Interfaces.IReadOnlyDataTable"></a>

#### *class* Ansys.Mechanical.Interfaces.IReadOnlyDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

IReadOnlyDataTable interface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------|--------------------------------------------------------------|
| [`GetRow`](#IReadOnlyDataTable.GetRow)   | Returns an enumerable to iterate over the values in a row.   |

### Properties

| Name | Description |
|----------------------------------------------------|---------------------------------------------------------------------------------------|
| [`ColumnNames`](#IReadOnlyDataTable.ColumnNames)   | Gets a list of the column names.                                                      |
| [`Columns`](#IReadOnlyDataTable.Columns)           | Explicitly get the columns of the table.                                              |
| [`Item`](#IReadOnlyDataTable.Item)                 | Item property.                                                                        |
| [`Metadata`](#IReadOnlyDataTable.Metadata)         | Gets a dictionary with additional information that may be useful to understanding the |
| [`Name`](#IReadOnlyDataTable.Name)                 | Get the name of the table.                                                            |
| [`RowCount`](#IReadOnlyDataTable.RowCount)         | Gets the maximum number of data points (rows) among all columns in the table          |

<a id="property-detail"></a>

## Property detail

<a id="IReadOnlyDataTable.ColumnNames"></a>

### *property* IReadOnlyDataTable.ColumnNames *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of the column names.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataTable.Columns"></a>

### *property* IReadOnlyDataTable.Columns *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[Ansys.Mechanical.Interfaces.IReadOnlyDataSeries](IReadOnlyDataSeries.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Interfaces.IReadOnlyDataSeries)] | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get the columns of the table.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataTable.Item"></a>

### *property* IReadOnlyDataTable.Item *: [Ansys.Mechanical.Interfaces.IReadOnlyDataSeries](IReadOnlyDataSeries.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Interfaces.IReadOnlyDataSeries) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataTable.Metadata"></a>

### *property* IReadOnlyDataTable.Metadata *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a dictionary with additional information that may be useful to understanding the
context of data in the table.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataTable.Name"></a>

### *property* IReadOnlyDataTable.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the name of the table.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataTable.RowCount"></a>

### *property* IReadOnlyDataTable.RowCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the maximum number of data points (rows) among all columns in the table

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IReadOnlyDataTable.GetRow"></a>

### IReadOnlyDataTable.GetRow(rowIndex: [int](https://docs.python.org/3/library/functions.html#int))

Returns an enumerable to iterate over the values in a row.

<!-- !! processed by numpydoc !! -->

