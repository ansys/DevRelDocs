# `UnitsHelper`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.UnitsHelper"></a>

#### *class* Ansys.ACT.Mechanical.UnitsHelper

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines set of methods that can be used to find mechanical unit information

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`ConvertMechanicalUnitToCoreUnit`](#UnitsHelper.ConvertMechanicalUnitToCoreUnit)               | Takes input mechanical unit string and category string   |
| [`GetCurrentCompactUnitString`](#UnitsHelper.GetCurrentCompactUnitString)                       | Return a compact unit string for the supplied field.     |
| [`GetQuantityNameBasedOnUnitCategoryType`](#UnitsHelper.GetQuantityNameBasedOnUnitCategoryType) | GetQuantityNameBasedOnUnitCategoryType method.           |
| [`GetValidQuantityNamesAndUnits`](#UnitsHelper.GetValidQuantityNamesAndUnits)                   | Retrieve a dictionary of quantity names to unit strings. |
| [`RegisterConvertionFunction`](#UnitsHelper.RegisterConvertionFunction)                         | RegisterConvertionFunction method.                       |

<a id="method-detail"></a>

## Method detail

<a id="UnitsHelper.ConvertMechanicalUnitToCoreUnit"></a>

### *classmethod* UnitsHelper.ConvertMechanicalUnitToCoreUnit(mechanicalUnit: [str](https://docs.python.org/3/builtins/stdtypes.html#str), unitCategory: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Takes input mechanical unit string and category string
And returns framework unit string which can be used for conversion
```

<!-- !! processed by numpydoc !! -->

<a id="UnitsHelper.GetCurrentCompactUnitString"></a>

### *classmethod* UnitsHelper.GetCurrentCompactUnitString(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
Return a compact unit string for the supplied field.
for example, on an acceleration object acc (in MKS and NMM, respectively):
-  acc.Magnitude.Output.Unit ==> 'm sec^-1 sec^-1' , 'm sec^-1 sec^-1'
-  GetCurrentCompactUnitString(ExtAPI, acc.Magnitude.Output.QuantityName) ==> 'm/s²' , 'mm/s²'
```

<!-- !! processed by numpydoc !! -->

<a id="UnitsHelper.GetQuantityNameBasedOnUnitCategoryType"></a>

### *classmethod* UnitsHelper.GetQuantityNameBasedOnUnitCategoryType(unitCategory: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../Mechanical/DataModel/Enums/UnitCategoryType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.UnitCategoryType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityNameBasedOnUnitCategoryType method.

<!-- !! processed by numpydoc !! -->

<a id="UnitsHelper.GetValidQuantityNamesAndUnits"></a>

### *classmethod* UnitsHelper.GetValidQuantityNamesAndUnits() → [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str)]

```text
Retrieve a dictionary of quantity names to unit strings.
These quantity names represent valid quantity names that can be used when defining quantities in
Mechanical ACT extensions.
```

<!-- !! processed by numpydoc !! -->

<a id="UnitsHelper.RegisterConvertionFunction"></a>

### *classmethod* UnitsHelper.RegisterConvertionFunction(fct: Callable[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

RegisterConvertionFunction method.

<!-- !! processed by numpydoc !! -->

