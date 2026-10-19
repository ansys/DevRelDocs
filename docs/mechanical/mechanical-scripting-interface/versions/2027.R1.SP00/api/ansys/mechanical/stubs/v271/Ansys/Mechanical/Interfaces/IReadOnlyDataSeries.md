# `IReadOnlyDataSeries`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.IReadOnlyDataSeries"></a>

#### *class* Ansys.Mechanical.Interfaces.IReadOnlyDataSeries

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------|-------------------------|
| [`GetEnumerator`](#IReadOnlyDataSeries.GetEnumerator)   | GetEnumerator method.   |

### Properties

| Name | Description |
|-----------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Count`](#IReadOnlyDataSeries.Count)               | Gets the number of data points.                                                        |
| [`DataType`](#IReadOnlyDataSeries.DataType)         | Gets the type stored by the data series.                                               |
| [`Item`](#IReadOnlyDataSeries.Item)                 | Item property.                                                                         |
| [`Name`](#IReadOnlyDataSeries.Name)                 | Gets the name of the data series.                                                      |
| [`QuantityName`](#IReadOnlyDataSeries.QuantityName) | Gets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”. |
| [`Unit`](#IReadOnlyDataSeries.Unit)                 | Gets the string representation of the data series units, e.g., “m”, “kg m^-1 s^-2”,    |
| [`Values`](#IReadOnlyDataSeries.Values)             | Explicitly get the values of the data series.                                          |

<a id="property-detail"></a>

## Property detail

<a id="IReadOnlyDataSeries.Count"></a>

### *property* IReadOnlyDataSeries.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of data points.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataSeries.DataType"></a>

### *property* IReadOnlyDataSeries.DataType *: [type](https://docs.python.org/3/builtins/functions.html#type) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the type stored by the data series.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataSeries.Item"></a>

### *property* IReadOnlyDataSeries.Item *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataSeries.Name"></a>

### *property* IReadOnlyDataSeries.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the name of the data series.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataSeries.QuantityName"></a>

### *property* IReadOnlyDataSeries.QuantityName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataSeries.Unit"></a>

### *property* IReadOnlyDataSeries.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the string representation of the data series units, e.g., “m”, “kg m^-1 s^-2”,
or “kg m^2 s^-3”.

<!-- !! processed by numpydoc !! -->

<a id="IReadOnlyDataSeries.Values"></a>

### *property* IReadOnlyDataSeries.Values *: Collection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Explicitly get the values of the data series.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IReadOnlyDataSeries.GetEnumerator"></a>

### IReadOnlyDataSeries.GetEnumerator() → Iterator

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

