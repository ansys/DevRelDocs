<a id="module-ansys.mechanical.stubs.Ansys.ACT.Mechanical"></a>

<a id="the-mechanical-package"></a>

# The `Mechanical` package

<a id="summary"></a>

## Summary

### Subpackages

| [`AdditionalProperties`](AdditionalProperties/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.AdditionalProperties)   | AdditionalProperties subpackage.   |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| [`Application`](Application/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.Application)                              | Application submodule.             |
| [`Fields`](Fields/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields)                                             | Fields subpackage.                 |
| [`Utilities`](Utilities/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.Utilities)                                    | Utilities subpackage.              |

### Classes

| [`Transaction`](Transaction.md#Transaction)   | Speeds up bulk user interactions.                                           |
|-----------------------------------------------|-----------------------------------------------------------------------------|
| [`UnitsHelper`](UnitsHelper.md#UnitsHelper)   | Defines set of methods that can be used to find mechanical unit information |

<a id="description"></a>

## Description

Mechanical subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Mechanical.Transaction"></a>

### *class* Mechanical.Transaction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Speeds up bulk user interactions.

> <!-- !! processed by numpydoc !! -->

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical import Transaction
```

<a id="Mechanical.UnitsHelper"></a>

### *class* Mechanical.UnitsHelper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines set of methods that can be used to find mechanical unit information

> <!-- !! processed by numpydoc !! -->

### Constructors

| [`ConvertMechanicalUnitToCoreUnit`](#Mechanical.ConvertMechanicalUnitToCoreUnit)   | Takes input mechanical unit string and category string   |
|------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`GetValidQuantityNamesAndUnits`](#Mechanical.GetValidQuantityNamesAndUnits)       | Retrieve a dictionary of quantity names to unit strings. |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical import UnitsHelper
```

<a id="method-detail"></a>

## Method detail

<a id="Mechanical.ConvertMechanicalUnitToCoreUnit"></a>

### *classmethod* Mechanical.ConvertMechanicalUnitToCoreUnit(mechanicalUnit: System.String, unitCategory: System.String)

Takes input mechanical unit string and category string
And returns framework unit string which can be used for conversion

<!-- !! processed by numpydoc !! -->

<a id="Mechanical.GetValidQuantityNamesAndUnits"></a>

### *classmethod* Mechanical.GetValidQuantityNamesAndUnits()

Retrieve a dictionary of quantity names to unit strings.
These quantity names represent valid quantity names that can be used when defining quantities in
Mechanical ACT extensions.

<!-- !! processed by numpydoc !! -->
