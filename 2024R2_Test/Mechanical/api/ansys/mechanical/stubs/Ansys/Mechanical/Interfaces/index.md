<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.Interfaces"></a>

<a id="the-interfaces-package"></a>

# The `Interfaces` package

<a id="summary"></a>

## Summary

### Interfaces

| [`IDataSeries`](IDataSeries.md#IDataSeries)                         | IDataSeries interface.                                                                   |
|---------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`IDataTable`](IDataTable.md#IDataTable)                            | IDataTable interface.                                                                    |
| [`IReadOnlyDataSeries`](IReadOnlyDataSeries.md#IReadOnlyDataSeries) | IReadOnlyDataSeries interface.                                                           |
| [`IReadOnlyDataTable`](IReadOnlyDataTable.md#IReadOnlyDataTable)    | IReadOnlyDataTable interface.                                                            |
| [`ITable`](ITable.md#ITable)                                        | Exposes a table, which is a two-dimensional tabular data structure with labeled columns. |
| [`IVariable`](IVariable.md#IVariable)                               | Exposes a variable, which is a one dimensional array of real numbers with a unit.        |

<a id="description"></a>

## Description

Interfaces subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Interfaces.IDataSeries"></a>

### *class* Interfaces.IDataSeries

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IDataSeries interface.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`DataType`](#id7)      |                                                                                                |
|-------------------------|------------------------------------------------------------------------------------------------|
| [`Name`](#id18)         | Gets or sets the name of the data series.                                                      |
| [`QuantityName`](#id27) | Gets or sets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”. |
| [`Unit`](#id26)         | Gets or sets a string representation of the data series units, e.g., “m”,                      |
| [`Values`](#id11)       | Explicitly gets or sets the values of the data series.                                         |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import IDataSeries
```

<a id="property-detail"></a>

## Property detail

<a id="Interfaces.DataType"></a>

### *property* Interfaces.DataType *: System.Type | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="Interfaces.Name"></a>

### *property* Interfaces.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the data series.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.QuantityName"></a>

### *property* Interfaces.QuantityName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Unit"></a>

### *property* Interfaces.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets a string representation of the data series units, e.g., “m”,
“kg m^-1 s^-2”, or “kg m^2 s^-3”.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Values"></a>

### *property* Interfaces.Values *: System.Collections.ICollection | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly gets or sets the values of the data series.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.IDataTable"></a>

### *class* Interfaces.IDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IDataTable interface.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Add`](#Interfaces.Add)                   | Add a new column to the data table.                                       |
|--------------------------------------------|---------------------------------------------------------------------------|
| [`Clear`](#Interfaces.Clear)               | Drops all columns from the data table.                                    |
| [`Contains`](#Interfaces.Contains)         | Returns whether the data table contains a column with the specified name. |
| [`GetRow`](#id21)                          |                                                                           |
| [`Insert`](#Interfaces.Insert)             | Insert a column at the specified index.                                   |
| [`Remove`](#Interfaces.Remove)             | Removes the specified column. If                                          |
| [`TryInsertRow`](#Interfaces.TryInsertRow) | Try to insert the values at the specified row index.                      |
| [`TryRemoveRow`](#Interfaces.TryRemoveRow) | Try to remove the specified row.                                          |

### Properties

| [`ColumnNames`](#id14)                                 |                                                                                          |
|--------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Columns`](#id15)                                     | Explicitly get or set the columns of the data table.                                     |
| [`Count`](#id6)                                        | Gets the number of columns in the table.                                                 |
| [`IsFixedColumnCount`](#Interfaces.IsFixedColumnCount) | Get whether additional columns can be added or removed from the contained                |
| [`IsFixedRowCount`](#Interfaces.IsFixedRowCount)       | Get whether additional rows can be added or removed from the contained                   |
| [`IsReadOnly`](#Interfaces.IsReadOnly)                 | Gets whether the data table is read-only.                                                |
| [`Item`](#id16)                                        | Item property.                                                                           |
| [`Metadata`](#id17)                                    | Gets or set a dictionary with additional information that may be useful to understanding |
| [`Name`](#id18)                                        | Get or set the name of the table.                                                        |
| [`RowCount`](#id19)                                    |                                                                                          |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import IDataTable
```

<a id="id2"></a>

## Property detail

<a id="Interfaces.ColumnNames"></a>

### *property* Interfaces.ColumnNames *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="Interfaces.Columns"></a>

### *property* Interfaces.Columns *: System.Collections.Generic.IList[[Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#IDataSeries)] | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get or set the columns of the data table.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Count"></a>

### *property* Interfaces.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of columns in the table.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.IsFixedColumnCount"></a>

### *property* Interfaces.IsFixedColumnCount *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional columns can be added or removed from the contained

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.IsFixedRowCount"></a>

### *property* Interfaces.IsFixedRowCount *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether additional rows can be added or removed from the contained

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.IsReadOnly"></a>

### *property* Interfaces.IsReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets whether the data table is read-only.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Item"></a>

### *property* Interfaces.Item *: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#IDataSeries) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Metadata"></a>

### *property* Interfaces.Metadata *: System.Collections.Generic.IDictionary[System.String, System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set a dictionary with additional information that may be useful to understanding
the context of data in the table.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Interfaces.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get or set the name of the table.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.RowCount"></a>

### *property* Interfaces.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="method-detail"></a>

## Method detail

<a id="Interfaces.Add"></a>

### Interfaces.Add(dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#IDataSeries))

Add a new column to the data table.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Clear"></a>

### Interfaces.Clear()

Drops all columns from the data table.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Contains"></a>

### Interfaces.Contains(name: System.String)

Returns whether the data table contains a column with the specified name.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.GetRow"></a>

### Interfaces.GetRow(rowIndex: System.Int32)

<a id="Interfaces.Insert"></a>

### Interfaces.Insert(columnIndex: System.Int32, dataSeries: [Ansys.Mechanical.Interfaces.IDataSeries](IDataSeries.md#IDataSeries))

Insert a column at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Remove"></a>

### Interfaces.Remove(key: System.Object)

Removes the specified column. If

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.TryInsertRow"></a>

### Interfaces.TryInsertRow(rowIndex: System.Int32, values: System.Collections.IEnumerable)

Try to insert the values at the specified row index.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.TryRemoveRow"></a>

### Interfaces.TryRemoveRow(rowIndex: System.Int32)

Try to remove the specified row.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.IReadOnlyDataSeries"></a>

### *class* Interfaces.IReadOnlyDataSeries

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IReadOnlyDataSeries interface.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Item`](#id16)         | Item property.                                                                         |
|-------------------------|----------------------------------------------------------------------------------------|
| [`Count`](#id6)         | Gets the number of data points.                                                        |
| [`DataType`](#id7)      | Gets the type stored by the data series.                                               |
| [`Name`](#id18)         | Gets the name of the data series.                                                      |
| [`QuantityName`](#id27) | Gets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”. |
| [`Unit`](#id26)         | Gets the string representation of the data series units, e.g., “m”, “kg m^-1 s^-2”,    |
| [`Values`](#id11)       | Explicitly get the values of the data series.                                          |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import IReadOnlyDataSeries
```

<a id="id4"></a>

## Property detail

<a id="id5"></a>

### *property* Interfaces.Item *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* Interfaces.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of data points.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* Interfaces.DataType *: System.Type | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type stored by the data series.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* Interfaces.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the data series.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* Interfaces.QuantityName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* Interfaces.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the string representation of the data series units, e.g., “m”, “kg m^-1 s^-2”,
or “kg m^2 s^-3”.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* Interfaces.Values *: System.Collections.ICollection | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get the values of the data series.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.IReadOnlyDataTable"></a>

### *class* Interfaces.IReadOnlyDataTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IReadOnlyDataTable interface.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetRow`](#id21)   | Returns an enumerable to iterate over the values in a row.   |
|---------------------|--------------------------------------------------------------|

### Properties

| [`ColumnNames`](#id14)   | Gets a list of the column names.                                                      |
|--------------------------|---------------------------------------------------------------------------------------|
| [`Columns`](#id15)       | Explicitly get the columns of the table.                                              |
| [`Item`](#id16)          | Item property.                                                                        |
| [`Metadata`](#id17)      | Gets a dictionary with additional information that may be useful to understanding the |
| [`Name`](#id18)          | Get the name of the table.                                                            |
| [`RowCount`](#id19)      | Gets the maximum number of data points (rows) among all columns in the table          |

<a id="id12"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import IReadOnlyDataTable
```

<a id="id13"></a>

## Property detail

<a id="id14"></a>

### *property* Interfaces.ColumnNames *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of the column names.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* Interfaces.Columns *: System.Collections.Generic.IReadOnlyList[[Ansys.Mechanical.Interfaces.IReadOnlyDataSeries](IReadOnlyDataSeries.md#IReadOnlyDataSeries)] | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly get the columns of the table.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* Interfaces.Item *: [Ansys.Mechanical.Interfaces.IReadOnlyDataSeries](IReadOnlyDataSeries.md#IReadOnlyDataSeries) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* Interfaces.Metadata *: System.Collections.Generic.IReadOnlyDictionary[System.String, System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a dictionary with additional information that may be useful to understanding the
context of data in the table.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* Interfaces.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the name of the table.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* Interfaces.RowCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the maximum number of data points (rows) among all columns in the table

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

## Method detail

<a id="id21"></a>

### Interfaces.GetRow(rowIndex: System.Int32)

Returns an enumerable to iterate over the values in a row.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.ITable"></a>

### *class* Interfaces.ITable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Exposes a table, which is a two-dimensional tabular data structure with labeled columns.
> The columns are usually instances of IVariable but can be any sort of array

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Independents`](#Interfaces.Independents)   | The portion of the table corresponding to independent variables.   |
|----------------------------------------------|--------------------------------------------------------------------|
| [`Dependents`](#Interfaces.Dependents)       | The portion of the table corresponding to dependent variables.     |

<a id="id22"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import ITable
```

<a id="id23"></a>

## Property detail

<a id="Interfaces.Independents"></a>

### *property* Interfaces.Independents *: System.Collections.Generic.IReadOnlyDictionary[System.String, System.Collections.IEnumerable] | [None](https://docs.python.org/3/library/constants.html#None)*

The portion of the table corresponding to independent variables.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.Dependents"></a>

### *property* Interfaces.Dependents *: System.Collections.Generic.IReadOnlyDictionary[System.String, System.Collections.IEnumerable] | [None](https://docs.python.org/3/library/constants.html#None)*

The portion of the table corresponding to dependent variables.

<!-- !! processed by numpydoc !! -->

<a id="Interfaces.IVariable"></a>

### *class* Interfaces.IVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Exposes a variable, which is a one dimensional array of real numbers with a unit.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Unit`](#id26)         | The unit of the variable.  For example, this could be “mm”.              |
|-------------------------|--------------------------------------------------------------------------|
| [`QuantityName`](#id27) | The quantity name of the variable.  For example, this could be “Length”. |

<a id="id24"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import IVariable
```

<a id="id25"></a>

## Property detail

<a id="id26"></a>

### *property* Interfaces.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The unit of the variable.  For example, this could be “mm”.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* Interfaces.QuantityName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The quantity name of the variable.  For example, this could be “Length”.

<!-- !! processed by numpydoc !! -->
