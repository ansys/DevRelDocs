# `Vector3D`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D"></a>

#### *class* Ansys.ACT.Math.Vector3D(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float))

<a id="Vector3D"></a>

### *class* Vector3D(coordinates: [float](https://docs.python.org/3/builtins/functions.html#float))

### *class* Vector3D(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Vector in 3D-space

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|------------------------------------------------------|---------------------------------------------|
| [`Cross`](#Vector3D.Cross)                           | Cross product - same as multiply operator   |
| [`Dot`](#Vector3D.Dot)                               | Dot product.                                |
| [`GetDistance`](#Vector3D.GetDistance)               | Squared distance between vectors/points     |
| [`GetDistanceSquared`](#Vector3D.GetDistanceSquared) | Squared distance between vectors/points     |
| [`__add__`](#Vector3D.__add__)                       | Plus operator                               |
| [`__eq__`](#Vector3D.__eq__)                         | Equal operator                              |
| [`__mul__`](#Vector3D.__mul__)                       | Multiply a factor by a vector operator.     |
| [`__ne__`](#Vector3D.__ne__)                         | Not-Equal operator                          |
| [`__neg__`](#Vector3D.__neg__)                       | Unary minus operator                        |
| [`__sub__`](#Vector3D.__sub__)                       | Minus operator                              |
| [`__truediv__`](#Vector3D.__truediv__)               | Divide a vector by a factor operator.       |
| [`op_Explicit`](#Vector3D.op_Explicit)               | op_Explicit method.                         |

### Methods

| Name | Description |
|------------------------------------------------|--------------------------------------|
| [`Add`](#Vector3D.Add)                         | Add vector to itself.                |
| [`CloneNormalized`](#Vector3D.CloneNormalized) | Create a normalized copy of a vector |
| [`CrossProduct`](#Vector3D.CrossProduct)       | Cross product.                       |
| [`DotProduct`](#Vector3D.DotProduct)           | Dot product.                         |
| [`Equals`](#Vector3D.Equals)                   | Object.Equals(object o) override     |
| [`GetHashCode`](#Vector3D.GetHashCode)         | Object.GetHashCode() override        |
| [`Normalize`](#Vector3D.Normalize)             | Convert to an unit vector            |
| [`Subtract`](#Vector3D.Subtract)               | Subtract vector from itself.         |
| [`ToString`](#Vector3D.ToString)               | String representation.               |

### Properties

| Name | Description |
|--------------------------------------------------|-----------------------------------|
| [`Item`](#Vector3D.Item)                         | Item property.                    |
| [`Magnitude`](#Vector3D.Magnitude)               | Vector magnitude accessor         |
| [`MagnitudeSquared`](#Vector3D.MagnitudeSquared) | Vector magnitude squared accessor |

<a id="property-detail"></a>

## Property detail

<a id="Vector3D.Item"></a>

### *property* Vector3D.Item *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Magnitude"></a>

### *property* Vector3D.Magnitude *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Vector magnitude accessor

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.MagnitudeSquared"></a>

### *property* Vector3D.MagnitudeSquared *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Vector magnitude squared accessor

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Vector3D.Add"></a>

### Vector3D.Add(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add vector to itself.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.CloneNormalized"></a>

### Vector3D.CloneNormalized() → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

Create a normalized copy of a vector

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Cross"></a>

### *classmethod* Vector3D.Cross(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

Cross product - same as multiply operator

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.CrossProduct"></a>

### Vector3D.CrossProduct(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

Cross product.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Dot"></a>

### *classmethod* Vector3D.Dot(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Dot product.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.DotProduct"></a>

### Vector3D.DotProduct(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Dot product.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Equals"></a>

### Vector3D.Equals(o: Any) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Object.Equals(object o) override

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.GetDistance"></a>

### *classmethod* Vector3D.GetDistance(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Squared distance between vectors/points

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.GetDistanceSquared"></a>

### *classmethod* Vector3D.GetDistanceSquared(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Squared distance between vectors/points

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.GetHashCode"></a>

### Vector3D.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

Object.GetHashCode() override

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Normalize"></a>

### Vector3D.Normalize() → [None](https://docs.python.org/3/builtins/constants.html#None)

Convert to an unit vector

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.Subtract"></a>

### Vector3D.Subtract(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Subtract vector from itself.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.ToString"></a>

### Vector3D.ToString() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

String representation.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__add__"></a>

### *classmethod* Vector3D.\_\_add_\_(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

Plus operator

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__eq__"></a>

### *classmethod* Vector3D.\_\_eq_\_(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equal operator

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__mul__"></a>

### *classmethod* Vector3D.\_\_mul_\_(factor: [float](https://docs.python.org/3/builtins/functions.html#float), vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

### *classmethod* Vector3D.\_\_mul_\_(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), factor: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

### *classmethod* Vector3D.\_\_mul_\_(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

Multiply a factor by a vector operator.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__ne__"></a>

### *classmethod* Vector3D.\_\_ne_\_(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Not-Equal operator

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__neg__"></a>

### *classmethod* Vector3D.\_\_neg_\_(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

Unary minus operator

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__sub__"></a>

### *classmethod* Vector3D.\_\_sub_\_(a: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), b: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

Minus operator

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.__truediv__"></a>

### *classmethod* Vector3D.\_\_truediv_\_(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), divFactor: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

Divide a vector by a factor operator.

<!-- !! processed by numpydoc !! -->

<a id="Vector3D.op_Explicit"></a>

### *classmethod* Vector3D.op_Explicit(vec3: [Ansys.ACT.Math.Vector3D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [float](https://docs.python.org/3/builtins/functions.html#float)

op_Explicit method.

<!-- !! processed by numpydoc !! -->

