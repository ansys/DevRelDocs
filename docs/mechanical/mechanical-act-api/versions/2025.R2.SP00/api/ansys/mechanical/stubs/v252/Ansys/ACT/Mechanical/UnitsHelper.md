# `UnitsHelper`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.UnitsHelper"></a>

#### *class* Ansys.ACT.Mechanical.UnitsHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines set of methods that can be used to find mechanical unit information

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`ConvertMechanicalUnitToCoreUnit`](#UnitsHelper.ConvertMechanicalUnitToCoreUnit)   | Takes input mechanical unit string and category string   |
| [`GetValidQuantityNamesAndUnits`](#UnitsHelper.GetValidQuantityNamesAndUnits)       | Retrieve a dictionary of quantity names to unit strings. |

<a id="method-detail"></a>

## Method detail

<a id="UnitsHelper.ConvertMechanicalUnitToCoreUnit"></a>

### *classmethod* UnitsHelper.ConvertMechanicalUnitToCoreUnit(mechanicalUnit: [str](https://docs.python.org/3/library/stdtypes.html#str), unitCategory: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

```text
Takes input mechanical unit string and category string
And returns framework unit string which can be used for conversion
```

<!-- !! processed by numpydoc !! -->

<a id="UnitsHelper.GetValidQuantityNamesAndUnits"></a>

### *classmethod* UnitsHelper.GetValidQuantityNamesAndUnits() → [dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), [str](https://docs.python.org/3/library/stdtypes.html#str)]

```text
Retrieve a dictionary of quantity names to unit strings.
These quantity names represent valid quantity names that can be used when defining quantities in
Mechanical ACT extensions.
```

<!-- !! processed by numpydoc !! -->

