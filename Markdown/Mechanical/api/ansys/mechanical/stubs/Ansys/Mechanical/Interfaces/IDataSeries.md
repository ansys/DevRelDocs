# IDataSeries

### *class* IDataSeries

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IDataSeries interface.

> <!-- !! processed by numpydoc !! -->

## Overview

### Properties

| [`DataType`](#IDataSeries.DataType)         |                                                                                                |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Name`](#IDataSeries.Name)                 | Gets or sets the name of the data series.                                                      |
| [`QuantityName`](#IDataSeries.QuantityName) | Gets or sets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”. |
| [`Unit`](#IDataSeries.Unit)                 | Gets or sets a string representation of the data series units, e.g., “m”,                      |
| [`Values`](#IDataSeries.Values)             | Explicitly gets or sets the values of the data series.                                         |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Interfaces import IDataSeries
```

## Property detail

### *property* IDataSeries.DataType *: System.Type | [None](https://docs.python.org/3/library/constants.html#None)*

### *property* IDataSeries.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the data series.

<!-- !! processed by numpydoc !! -->

### *property* IDataSeries.QuantityName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the quantity name of the data series, e.g., “Length”, “Pressure”, or “Heat Flux”.

<!-- !! processed by numpydoc !! -->

### *property* IDataSeries.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets a string representation of the data series units, e.g., “m”,
“kg m^-1 s^-2”, or “kg m^2 s^-3”.

<!-- !! processed by numpydoc !! -->

### *property* IDataSeries.Values *: System.Collections.ICollection | [None](https://docs.python.org/3/library/constants.html#None)*

Explicitly gets or sets the values of the data series.

<!-- !! processed by numpydoc !! -->
