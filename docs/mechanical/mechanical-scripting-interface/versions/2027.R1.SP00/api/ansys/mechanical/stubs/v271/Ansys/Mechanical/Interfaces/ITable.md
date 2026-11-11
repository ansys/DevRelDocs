# `ITable`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable"></a>

#### *class* Ansys.Mechanical.Interfaces.ITable

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Exposes a table, which is a two-dimensional tabular data structure with labeled columns.
The columns are usually instances of IVariable but can be any sort of array

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------|-----------------------|
| [`ContainsKey`](#ITable.ContainsKey)     | ContainsKey method.   |
| [`GetEnumerator`](#ITable.GetEnumerator) | GetEnumerator method. |
| [`TryGetValue`](#ITable.TryGetValue)     | TryGetValue method.   |

### Properties

| Name | Description |
|----------------------------------------|------------------------------------------------------------------|
| [`Count`](#ITable.Count)               | Count property.                                                  |
| [`Dependents`](#ITable.Dependents)     | The portion of the table corresponding to dependent variables.   |
| [`Independents`](#ITable.Independents) | The portion of the table corresponding to independent variables. |
| [`Item`](#ITable.Item)                 | Item property.                                                   |
| [`Keys`](#ITable.Keys)                 | Keys property.                                                   |
| [`Values`](#ITable.Values)             | Values property.                                                 |

<a id="property-detail"></a>

## Property detail

<a id="ITable.Count"></a>

### *property* ITable.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Count property.

<!-- !! processed by numpydoc !! -->

<a id="ITable.Dependents"></a>

### *property* ITable.Dependents *: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Iterable] | [None](https://docs.python.org/3/builtins/constants.html#None)*

The portion of the table corresponding to dependent variables.

<!-- !! processed by numpydoc !! -->

<a id="ITable.Independents"></a>

### *property* ITable.Independents *: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Iterable] | [None](https://docs.python.org/3/builtins/constants.html#None)*

The portion of the table corresponding to independent variables.

<!-- !! processed by numpydoc !! -->

<a id="ITable.Item"></a>

### *property* ITable.Item *: Iterable | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ITable.Keys"></a>

### *property* ITable.Keys *: Iterable[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Keys property.

<!-- !! processed by numpydoc !! -->

<a id="ITable.Values"></a>

### *property* ITable.Values *: Iterable[Iterable] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Values property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ITable.ContainsKey"></a>

### ITable.ContainsKey(key: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

ContainsKey method.

<!-- !! processed by numpydoc !! -->

<a id="ITable.GetEnumerator"></a>

### ITable.GetEnumerator() → Iterator[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Iterable]]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="ITable.TryGetValue"></a>

### ITable.TryGetValue(key: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Iterable) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

TryGetValue method.

<!-- !! processed by numpydoc !! -->

