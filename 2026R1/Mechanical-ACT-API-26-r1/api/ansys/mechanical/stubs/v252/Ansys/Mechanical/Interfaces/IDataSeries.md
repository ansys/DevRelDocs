# `IDataSeries`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.Interfaces.IDataSeries"></a>

#### *class* Ansys.Mechanical.Interfaces.IDataSeries

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| [`DataType`](#IDataSeries.DataType)         |                                                                                                |
| [`Name`](#IDataSeries.Name)                 | Gets or sets the name of the data series.                                                      |
| [`QuantityName`](#IDataSeries.QuantityName) | Gets or sets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”. |
| [`Unit`](#IDataSeries.Unit)                 | Gets or sets a string representation of the data series units, e.g., “m”,                      |
| [`Values`](#IDataSeries.Values)             | Explicitly gets or sets the values of the data series.                                         |

<a id="property-detail"></a>

## Property detail

<a id="IDataSeries.DataType"></a>

### *property* IDataSeries.DataType *: [type](https://docs.python.org/3/library/functions.html#type) | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="IDataSeries.Name"></a>

### *property* IDataSeries.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the data series.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.QuantityName"></a>

### *property* IDataSeries.QuantityName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Unit"></a>

### *property* IDataSeries.Unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets a string representation of the data series units, e.g., “m”,
“kg m^-1 s^-2”, or “kg m^2 s^-3”.

<!-- !! processed by numpydoc !! -->

<a id="IDataSeries.Values"></a>

### *property* IDataSeries.Values *: Collection | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly gets or sets the values of the data series.

<!-- !! processed by numpydoc !! -->

