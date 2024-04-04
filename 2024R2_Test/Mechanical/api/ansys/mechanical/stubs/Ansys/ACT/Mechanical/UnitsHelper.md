# UnitsHelper

### *class* UnitsHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines set of methods that can be used to find mechanical unit information

> <!-- !! processed by numpydoc !! -->

## Overview

### Constructors

| [`ConvertMechanicalUnitToCoreUnit`](#UnitsHelper.ConvertMechanicalUnitToCoreUnit)   | Takes input mechanical unit string and category string   |
|-------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`GetValidQuantityNamesAndUnits`](#UnitsHelper.GetValidQuantityNamesAndUnits)       | Retrieve a dictionary of quantity names to unit strings. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical import UnitsHelper
```

## Method detail

### *classmethod* UnitsHelper.ConvertMechanicalUnitToCoreUnit(mechanicalUnit: System.String, unitCategory: System.String)

Takes input mechanical unit string and category string
And returns framework unit string which can be used for conversion

<!-- !! processed by numpydoc !! -->

### *classmethod* UnitsHelper.GetValidQuantityNamesAndUnits()

Retrieve a dictionary of quantity names to unit strings.
These quantity names represent valid quantity names that can be used when defining quantities in
Mechanical ACT extensions.

<!-- !! processed by numpydoc !! -->
