# `IDataSeries`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IDataSeries"></a>

#### *class* Ansys.Mechanical.Interfaces.IDataSeries

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|--------------------------------|
| [`Add`](#IDataSeries.Add)                                       | Add method.                    |
| [`Clear`](#IDataSeries.Clear)                                   | Clear method.                  |
| [`Contains`](#IDataSeries.Contains)                             | Contains method.               |
| [`CopyTo`](#IDataSeries.CopyTo)                                 | CopyTo method.                 |
| [`GetEnumerator`](#IDataSeries.GetEnumerator)                   | GetEnumerator method.          |
| [`IndexOf`](#IDataSeries.IndexOf)                               | IndexOf method.                |
| [`Insert`](#IDataSeries.Insert)                                 | Insert method.                 |
| [`Remove`](#IDataSeries.Remove)                                 | Remove method.                 |
| [`RemoveAt`](#IDataSeries.RemoveAt)                             | RemoveAt method.               |
| [`add_PropertyChanged`](#IDataSeries.add_PropertyChanged)       | add_PropertyChanged method.    |
| [`remove_PropertyChanged`](#IDataSeries.remove_PropertyChanged) | remove_PropertyChanged method. |

### Properties

| Name | Description |
|-------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Count`](#IDataSeries.Count)                   | Count property.                                                                                |
| [`DataType`](#IDataSeries.DataType)             |                                                                                                |
| [`IsFixedSize`](#IDataSeries.IsFixedSize)       | IsFixedSize property.                                                                          |
| [`IsReadOnly`](#IDataSeries.IsReadOnly)         | IsReadOnly property.                                                                           |
| [`IsSynchronized`](#IDataSeries.IsSynchronized) | IsSynchronized property.                                                                       |
| [`Item`](#IDataSeries.Item)                     | Item property.                                                                                 |
| [`Name`](#IDataSeries.Name)                     | Gets or sets the name of the data series.                                                      |
| [`QuantityName`](#IDataSeries.QuantityName)     | Gets or sets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”. |
| [`SyncRoot`](#IDataSeries.SyncRoot)             | SyncRoot property.                                                                             |
| [`Unit`](#IDataSeries.Unit)                     | Gets or sets a string representation of the data series units, e.g., “m”,                      |
| [`Values`](#IDataSeries.Values)                 | Explicitly gets or sets the values of the data series.                                         |

<a id="property-detail"></a>

## Property detail

<a id="IDataSeries.Count"></a>

### *property* IDataSeries.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Count property.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.DataType"></a>

### *property* IDataSeries.DataType *: [type](https://docs.python.org/3/builtins/functions.html#type) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="IDataSeries.IsFixedSize"></a>

### *property* IDataSeries.IsFixedSize *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsFixedSize property.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.IsReadOnly"></a>

### *property* IDataSeries.IsReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsReadOnly property.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.IsSynchronized"></a>

### *property* IDataSeries.IsSynchronized *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsSynchronized property.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Item"></a>

### *property* IDataSeries.Item *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Name"></a>

### *property* IDataSeries.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the name of the data series.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.QuantityName"></a>

### *property* IDataSeries.QuantityName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.SyncRoot"></a>

### *property* IDataSeries.SyncRoot *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

SyncRoot property.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Unit"></a>

### *property* IDataSeries.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets a string representation of the data series units, e.g., “m”,
“kg m^-1 s^-2”, or “kg m^2 s^-3”.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Values"></a>

### *property* IDataSeries.Values *: Collection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Explicitly gets or sets the values of the data series.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IDataSeries.Add"></a>

### IDataSeries.Add(value: Any) → [int](https://docs.python.org/3/builtins/functions.html#int)

Add method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Clear"></a>

### IDataSeries.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Contains"></a>

### IDataSeries.Contains(value: Any) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Contains method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.CopyTo"></a>

### IDataSeries.CopyTo(array: List, index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.GetEnumerator"></a>

### IDataSeries.GetEnumerator() → Iterator

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.IndexOf"></a>

### IDataSeries.IndexOf(value: Any) → [int](https://docs.python.org/3/builtins/functions.html#int)

IndexOf method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Insert"></a>

### IDataSeries.Insert(index: [int](https://docs.python.org/3/builtins/functions.html#int), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Insert method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Remove"></a>

### IDataSeries.Remove(value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

Remove method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.RemoveAt"></a>

### IDataSeries.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveAt method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.add_PropertyChanged"></a>

### IDataSeries.add_PropertyChanged(value: System.ComponentModel.PropertyChangedEventHandler) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_PropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.remove_PropertyChanged"></a>

### IDataSeries.remove_PropertyChanged(value: System.ComponentModel.PropertyChangedEventHandler) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_PropertyChanged method.

<!-- !! processed by numpydoc !! -->

