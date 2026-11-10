# [`Vector3D`](../../Math/Vector3D.md#Vector3D)

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D"></a>

#### *class* Ansys.ACT.Core.Math.Vector3D(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float))

<a id="Vector3D"></a>

### *class* Vector3D(vector: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D))

### *class* Vector3D(xyz: [float](https://docs.python.org/3/builtins/functions.html#float))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|--------------------------------------------------------|------------------------|
| [`__add__`](#Vector3D.__add__)   | op_Addition method.    |
| [`__eq__`](#Vector3D.__eq__)     | op_Equality method.    |
| [`__ne__`](#Vector3D.__ne__)     | op_Inequality method.  |
| [`__sub__`](#Vector3D.__sub__)   | op_Subtraction method. |

### Methods

| Name | Description |
|------------------------------------------------------------------|--------------------------------|
| [`CrossProduct`](#Vector3D.CrossProduct)   | CrossProduct method.           |
| [`CylindricalToCartesian`](#Vector3D.CylindricalToCartesian)     | CylindricalToCartesian method. |
| [`Equals`](#Vector3D.Equals)               | Equals method.                 |
| [`GetHashCode`](#Vector3D.GetHashCode)     | GetHashCode method.            |
| [`GetNormal`](#Vector3D.GetNormal)                               | GetNormal method.              |
| [`IsColinearTo`](#Vector3D.IsColinearTo)                         | IsColinearTo method.           |
| [`Length`](#Vector3D.Length)                                     | Length method.                 |
| [`Normalize`](#Vector3D.Normalize)         | Normalize method.              |
| [`SphericalToCartesian`](#Vector3D.SphericalToCartesian)         | SphericalToCartesian method.   |
| [`SquareLength`](#Vector3D.SquareLength)                         | SquareLength method.           |
| [`Substract`](#Vector3D.Substract)                               | Substract method.              |
| [`ToArray`](#Vector3D.ToArray)                                   | ToArray method.                |
| [`ToString`](#Vector3D.ToString)           | ToString method.               |

### Properties

| Name | Description |
|--------------------------------------------------|------------------|
| [`Item`](#Vector3D.Item)   | Item property.   |

<a id="property-detail"></a>

## Property detail

<a id="Vector3D.Item"></a>

### *property* Vector3D.Item *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Vector3D.CrossProduct"></a>

### Vector3D.CrossProduct(other: Ansys.ACT.Interfaces.Graphics.IVector3D) → [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)

CrossProduct method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.CylindricalToCartesian"></a>

### Vector3D.CylindricalToCartesian() → [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)

CylindricalToCartesian method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Equals"></a>

### Vector3D.Equals(other: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Vector3D.Equals(other: Any) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.GetHashCode"></a>

### Vector3D.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.GetNormal"></a>

### Vector3D.GetNormal() → Ansys.ACT.Interfaces.Graphics.IVector3D

GetNormal method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.IsColinearTo"></a>

### Vector3D.IsColinearTo(other: Ansys.ACT.Interfaces.Graphics.IVector3D) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Vector3D.IsColinearTo(other: Ansys.ACT.Interfaces.Graphics.IVector3D, precision: [float](https://docs.python.org/3/builtins/functions.html#float)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsColinearTo method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Length"></a>

### Vector3D.Length() → [float](https://docs.python.org/3/builtins/functions.html#float)

Length method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Normalize"></a>

### Vector3D.Normalize() → [None](https://docs.python.org/3/builtins/constants.html#None)

Normalize method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.SphericalToCartesian"></a>

### Vector3D.SphericalToCartesian() → [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)

SphericalToCartesian method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.SquareLength"></a>

### Vector3D.SquareLength() → [float](https://docs.python.org/3/builtins/functions.html#float)

SquareLength method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Substract"></a>

### Vector3D.Substract(other: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Substract method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.ToArray"></a>

### Vector3D.ToArray() → [float](https://docs.python.org/3/builtins/functions.html#float)

ToArray method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.ToString"></a>

### Vector3D.ToString() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

ToString method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__add__"></a>

### *classmethod* Vector3D.\_\_add_\_(a: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D), b: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)) → [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)

op_Addition method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__eq__"></a>

### *classmethod* Vector3D.\_\_eq_\_(v1: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D), v2: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_Equality method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__ne__"></a>

### *classmethod* Vector3D.\_\_ne_\_(v1: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D), v2: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

op_Inequality method.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__sub__"></a>

### *classmethod* Vector3D.\_\_sub_\_(a: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D), b: [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)) → [Ansys.ACT.Core.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Core.Math.Vector3D)

op_Subtraction method.

<!-- !! processed by numpydoc !! -->

