# `ITable`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Interfaces.ITable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Exposes a table, which is a two-dimensional tabular data structure with labeled columns.
The columns are usually instances of IVariable but can be any sort of array

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|------------------|--------------------------------------------------------------------|
| `Independents`   | The portion of the table corresponding to independent variables.   |
| `Dependents`     | The portion of the table corresponding to dependent variables.     |

<a id="property-detail"></a>

## Property detail

### *property* ITable.Independents *: System.Collections.Generic.IReadOnlyDictionary[System.String, System.Collections.IEnumerable] | [None](https://docs.python.org/3/library/constants.html#None)*

The portion of the table corresponding to independent variables.

<!-- !! processed by numpydoc !! -->

### *property* ITable.Dependents *: System.Collections.Generic.IReadOnlyDictionary[System.String, System.Collections.IEnumerable] | [None](https://docs.python.org/3/library/constants.html#None)*

The portion of the table corresponding to dependent variables.

<!-- !! processed by numpydoc !! -->

