# `Quantity`

<a id="ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity"></a>

#### *class* Ansys.Core.Units.Quantity(value: [float](https://docs.python.org/3/builtins/functions.html#float), unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

<a id="Quantity"></a>

### *class* Quantity(value: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Quantity class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|------------------------------------------|-------------------------------|
| [`Parse`](#Quantity.Parse)               | Parse method.                 |
| [`TryParse`](#Quantity.TryParse)         | TryParse method.              |
| [`__add__`](#Quantity.__add__)           | op_Addition method.           |
| [`__eq__`](#Quantity.__eq__)             | op_Equality method.           |
| [`__ge__`](#Quantity.__ge__)             | op_GreaterThanOrEqual method. |
| [`__gt__`](#Quantity.__gt__)             | op_GreaterThan method.        |
| [`__le__`](#Quantity.__le__)             | op_LessThanOrEqual method.    |
| [`__lt__`](#Quantity.__lt__)             | op_LessThan method.           |
| [`__mod__`](#Quantity.__mod__)           | op_Modulus method.            |
| [`__mul__`](#Quantity.__mul__)           | op_Multiply method.           |
| [`__ne__`](#Quantity.__ne__)             | op_Inequality method.         |
| [`__neg__`](#Quantity.__neg__)           | op_UnaryNegation method.      |
| [`__pos__`](#Quantity.__pos__)           | op_UnaryPlus method.          |
| [`__rtruediv__`](#Quantity.__rtruediv__) | \_\_rtruediv_\_ method.       |
| [`__sub__`](#Quantity.__sub__)           | op_Subtraction method.        |
| [`__truediv__`](#Quantity.__truediv__)   | op_Division method.           |

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|-------------------------------------------------|
| [`Abs`](#Quantity.Abs)                                                                         | Abs method.                                     |
| [`CompareTo`](#Quantity.CompareTo)                                                             | CompareTo method.                               |
| [`ConvertToComputationalUnit`](#Quantity.ConvertToComputationalUnit)                           | ConvertToComputationalUnit method.              |
| [`ConvertToComputationalUnitForUnitSystem`](#Quantity.ConvertToComputationalUnitForUnitSystem) | ConvertToComputationalUnitForUnitSystem method. |
| [`ConvertToUnitSystem`](#Quantity.ConvertToUnitSystem)                                         | ConvertToUnitSystem method.                     |
| [`ConvertToUserUnit`](#Quantity.ConvertToUserUnit)                                             | ConvertToUserUnit method.                       |
| [`ConvertUnit`](#Quantity.ConvertUnit)                                                         | ConvertUnit method.                             |
| [`Equals`](#Quantity.Equals)                                                                   | Equals method.                                  |
| [`GetConvertedValue`](#Quantity.GetConvertedValue)                                             | GetConvertedValue method.                       |
| [`GetHashCode`](#Quantity.GetHashCode)                                                         | GetHashCode method.                             |
| [`Pow`](#Quantity.Pow)                                                                         | Pow method.                                     |
| [`Round`](#Quantity.Round)                                                                     | Round method.                                   |
| [`Sqrt`](#Quantity.Sqrt)                                                                       | Sqrt method.                                    |
| [`ToString`](#Quantity.ToString)                                                               | ToString method.                                |

### Properties

| Name | Description |
|----------------------------------|---------------------|
| [`HasUnit`](#Quantity.HasUnit)   | HasUnit property.   |
| [`Unit`](#Quantity.Unit)         | Unit property.      |
| [`Value`](#Quantity.Value)       | Value property.     |

### Special methods

| Name | Description |
|----------------------------------|----------------------|
| [`__pow__`](#Quantity.__pow__)   | \_\_pow_\_ method.   |
| [`__repr__`](#Quantity.__repr__) | \_\_repr_\_ method.  |

<a id="property-detail"></a>

## Property detail

<a id="Quantity.HasUnit"></a>

### *property* Quantity.HasUnit *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

HasUnit property.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.Unit"></a>

### *property* Quantity.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Unit property.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.Value"></a>

### *property* Quantity.Value *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Value property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Quantity.Abs"></a>

### Quantity.Abs() → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Abs method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.CompareTo"></a>

### Quantity.CompareTo(quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [int](https://docs.python.org/3/builtins/functions.html#int)

### Quantity.CompareTo(obj: Any) → [int](https://docs.python.org/3/builtins/functions.html#int)

CompareTo method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.ConvertToComputationalUnit"></a>

### Quantity.ConvertToComputationalUnit(useBasicUnits: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### Quantity.ConvertToComputationalUnit(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), useBasicUnits: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

ConvertToComputationalUnit method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.ConvertToComputationalUnitForUnitSystem"></a>

### Quantity.ConvertToComputationalUnitForUnitSystem(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), unitSystem: [str](https://docs.python.org/3/builtins/stdtypes.html#str), useBasicUnits: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

ConvertToComputationalUnitForUnitSystem method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.ConvertToUnitSystem"></a>

### Quantity.ConvertToUnitSystem(unitSystem: [str](https://docs.python.org/3/builtins/stdtypes.html#str), quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

ConvertToUnitSystem method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.ConvertToUserUnit"></a>

### Quantity.ConvertToUserUnit(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

ConvertToUserUnit method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.ConvertUnit"></a>

### Quantity.ConvertUnit(newUnit: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### Quantity.ConvertUnit(newUnit: [str](https://docs.python.org/3/builtins/stdtypes.html#str), quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

ConvertUnit method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.Equals"></a>

### Quantity.Equals(value: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Quantity.Equals(obj: Any) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.GetConvertedValue"></a>

### Quantity.GetConvertedValue(unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [float](https://docs.python.org/3/builtins/functions.html#float)

GetConvertedValue method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.GetHashCode"></a>

### Quantity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.Parse"></a>

### *classmethod* Quantity.Parse(valueUnitString: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Parse method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.Pow"></a>

### Quantity.Pow(exponent: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Pow method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.Round"></a>

### Quantity.Round(fractionalDigits: [int](https://docs.python.org/3/builtins/functions.html#int), rounding: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Round method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.Sqrt"></a>

### Quantity.Sqrt() → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Sqrt method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.ToString"></a>

### Quantity.ToString() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

### Quantity.ToString(formatString: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

### Quantity.ToString(provider: Any) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

### Quantity.ToString(format: [str](https://docs.python.org/3/builtins/stdtypes.html#str), provider: Any) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

ToString method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.TryParse"></a>

### *classmethod* Quantity.TryParse(valueStringQuantity: [str](https://docs.python.org/3/builtins/stdtypes.html#str), result: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

TryParse method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__add__"></a>

### *classmethod* Quantity.\_\_add_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_add_\_(left: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), right: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_add_\_(left: [float](https://docs.python.org/3/builtins/functions.html#float), right: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

op_Addition method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__eq__"></a>

### *classmethod* Quantity.\_\_eq_\_(other: [float](https://docs.python.org/3/builtins/functions.html#float), quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_eq_\_(quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), other: [float](https://docs.python.org/3/builtins/functions.html#float)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_eq_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_Equality method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__ge__"></a>

### *classmethod* Quantity.\_\_ge_\_(quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), other: [float](https://docs.python.org/3/builtins/functions.html#float)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_ge_\_(other: [float](https://docs.python.org/3/builtins/functions.html#float), quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_ge_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_GreaterThanOrEqual method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__gt__"></a>

### *classmethod* Quantity.\_\_gt_\_(quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), other: [float](https://docs.python.org/3/builtins/functions.html#float)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_gt_\_(other: [float](https://docs.python.org/3/builtins/functions.html#float), quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_gt_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_GreaterThan method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__le__"></a>

### *classmethod* Quantity.\_\_le_\_(other: [float](https://docs.python.org/3/builtins/functions.html#float), quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_le_\_(quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), other: [float](https://docs.python.org/3/builtins/functions.html#float)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_le_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_LessThanOrEqual method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__lt__"></a>

### *classmethod* Quantity.\_\_lt_\_(other: [float](https://docs.python.org/3/builtins/functions.html#float), quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_lt_\_(quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), other: [float](https://docs.python.org/3/builtins/functions.html#float)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_lt_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_LessThan method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__mod__"></a>

### *classmethod* Quantity.\_\_mod_\_(quantityLeft: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityRight: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_mod_\_(quantityLeft: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), numberRight: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_mod_\_(doubleLeft: [float](https://docs.python.org/3/builtins/functions.html#float), quantityRight: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [float](https://docs.python.org/3/builtins/functions.html#float)

op_Modulus method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__mul__"></a>

### *classmethod* Quantity.\_\_mul_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_mul_\_(quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), factor: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_mul_\_(factor: [float](https://docs.python.org/3/builtins/functions.html#float), quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

op_Multiply method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__ne__"></a>

### *classmethod* Quantity.\_\_ne_\_(other: [float](https://docs.python.org/3/builtins/functions.html#float), quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_ne_\_(quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), other: [float](https://docs.python.org/3/builtins/functions.html#float)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### *classmethod* Quantity.\_\_ne_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_Inequality method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__neg__"></a>

### *classmethod* Quantity.\_\_neg_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

op_UnaryNegation method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__pos__"></a>

### *classmethod* Quantity.\_\_pos_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

op_UnaryPlus method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__pow__"></a>

### Quantity.\_\_pow_\_(exponent: Any) → Any

\_\_pow_\_ method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__repr__"></a>

### Quantity.\_\_repr_\_() → Any

\_\_repr_\_ method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__rtruediv__"></a>

### *classmethod* Quantity.\_\_rtruediv_\_(a: Any, b: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

\_\_rtruediv_\_ method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__sub__"></a>

### *classmethod* Quantity.\_\_sub_\_(left: [float](https://docs.python.org/3/builtins/functions.html#float), right: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_sub_\_(left: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), right: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_sub_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

op_Subtraction method.

<!-- !! processed by numpydoc !! -->

<a id="Quantity.__truediv__"></a>

### *classmethod* Quantity.\_\_truediv_\_(quantityA: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), quantityB: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_truediv_\_(quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), factor: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_truediv_\_(factor: [float](https://docs.python.org/3/builtins/functions.html#float), quantity: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

### *classmethod* Quantity.\_\_truediv_\_(a: [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), b: Any) → [Ansys.Core.Units.Quantity](#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

op_Division method.

<!-- !! processed by numpydoc !! -->

