# `Matrix4D`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D"></a>

#### *class* Ansys.ACT.Math.Matrix4D

<a id="Matrix4D"></a>

### *class* Matrix4D(entries: [float](https://docs.python.org/3/builtins/functions.html#float))

### *class* Matrix4D(m44: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Transformation matrix
: *single linear*      *standard zero-based row-column index*

0  4  8  12  |   |  Rot00\*Sx  Rot01     Rot02     TransX  |
<br/>
1  5  9  13  |   |  Rot10     Rot11\*Sy  Rot12     TransY  |
<br/>
2  6  10 14  | = |  Rot20     Rot21     Rot22\*Sz  TransZ  |
<br/>
3  7  11 15  |   |  0 (30)    0 (31)    0 (32)    1 (33)  |
<br/>
<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|------------------------------------------------|---------------------------------------------------------------------------------|
| [`CreateMirror`](#Matrix4D.CreateMirror)       | Create transformation matrix mirroring about a plane                            |
| [`CreateRotate`](#Matrix4D.CreateRotate)       | Create transformation matrix that rotates about a given vector by a given angle |
| [`CreateScale`](#Matrix4D.CreateScale)         | Create scaling transformation matrix                                            |
| [`CreateSystem`](#Matrix4D.CreateSystem)       | Create transformation matrix converting to new coordinate system.               |
| [`CreateTranslate`](#Matrix4D.CreateTranslate) | Create translating transformation matrix                                        |
| [`__add__`](#Matrix4D.__add__)                 | Matrix addition operator.                                                       |
| [`__mul__`](#Matrix4D.__mul__)                 | Matrix multiplication operator - assumes (0,0,0,1) in last row.                 |
| [`__sub__`](#Matrix4D.__sub__)                 | Matrix subtraction operator.                                                    |
| [`op_Explicit`](#Matrix4D.op_Explicit)         | op_Explicit method.                                                             |

### Methods

| Name | Description |
|------------------------------------|--------------------------------------------------------------------------------|
| [`Add`](#Matrix4D.Add)             | Add matrix to itself.                                                          |
| [`Invert`](#Matrix4D.Invert)       | Invert itself if determinant is non-zero. Return 0 if inverted; 1 - otherwise. |
| [`Multiply`](#Matrix4D.Multiply)   | Multiply this matrix by the given matrix                                       |
| [`Scale`](#Matrix4D.Scale)         | Convenient method to combine x, y, z scale into itself.                        |
| [`Subtract`](#Matrix4D.Subtract)   | Subtract matrix from itself.                                                   |
| [`ToString`](#Matrix4D.ToString)   | String representation.                                                         |
| [`Transform`](#Matrix4D.Transform) | Apply this transformation matrix to a given point/vector.                      |
| [`Translate`](#Matrix4D.Translate) | Convenient method to combine (x, y, z) translatation into itself.              |
| [`Transpose`](#Matrix4D.Transpose) | Transpose itself.                                                              |

### Properties

| Name | Description |
|------------------------------------------|--------------------------------|
| [`Determinant`](#Matrix4D.Determinant)   | Matrix determinant accessor.   |
| [`Item`](#Matrix4D.Item)                 | Item property.                 |

<a id="property-detail"></a>

## Property detail

<a id="Matrix4D.Determinant"></a>

### *property* Matrix4D.Determinant *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Matrix determinant accessor.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.Item"></a>

### *property* Matrix4D.Item *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Matrix4D.Add"></a>

### Matrix4D.Add(m44: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add matrix to itself.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.CreateMirror"></a>

### *classmethod* Matrix4D.CreateMirror(normal: [Ansys.ACT.Math.Vector3D](Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), d: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)

Create transformation matrix mirroring about a plane

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.CreateRotate"></a>

### *classmethod* Matrix4D.CreateRotate(rotationAxis: [Ansys.ACT.Math.Vector3D](Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), rotationRadians: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)

Create transformation matrix that rotates about a given vector by a given angle

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.CreateScale"></a>

### *classmethod* Matrix4D.CreateScale(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)

Create scaling transformation matrix

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.CreateSystem"></a>

### *classmethod* Matrix4D.CreateSystem(xAxis: [Ansys.ACT.Math.Vector3D](Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), yAxis: [Ansys.ACT.Math.Vector3D](Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D), zAxis: [Ansys.ACT.Math.Vector3D](Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)

Create transformation matrix converting to new coordinate system.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.CreateTranslate"></a>

### *classmethod* Matrix4D.CreateTranslate(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)

Create translating transformation matrix

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.Invert"></a>

### Matrix4D.Invert() → [int](https://docs.python.org/3/builtins/functions.html#int)

Invert itself if determinant is non-zero. Return 0 if inverted; 1 - otherwise.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.Multiply"></a>

### Matrix4D.Multiply(m44: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Multiply this matrix by the given matrix

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.Scale"></a>

### Matrix4D.Scale(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Convenient method to combine x, y, z scale into itself.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.Subtract"></a>

### Matrix4D.Subtract(m44: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Subtract matrix from itself.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.ToString"></a>

### Matrix4D.ToString() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

String representation.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.Transform"></a>

### Matrix4D.Transform(vector3D: [Ansys.ACT.Math.Vector3D](Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)) → [Ansys.ACT.Math.Vector3D](Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D)

```text
Apply this transformation matrix to a given point/vector.
Note: assumes (0,0,0,1) in last row.
```

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.Translate"></a>

### Matrix4D.Translate(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Convenient method to combine (x, y, z) translatation into itself.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.Transpose"></a>

### Matrix4D.Transpose() → [None](https://docs.python.org/3/builtins/constants.html#None)

Transpose itself.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.__add__"></a>

### *classmethod* Matrix4D.\_\_add_\_(a: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D), b: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)) → [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)

Matrix addition operator.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.__mul__"></a>

### *classmethod* Matrix4D.\_\_mul_\_(a: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D), b: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)) → [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)

Matrix multiplication operator - assumes (0,0,0,1) in last row.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.__sub__"></a>

### *classmethod* Matrix4D.\_\_sub_\_(a: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D), b: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)) → [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)

Matrix subtraction operator.

<!-- !! processed by numpydoc !! -->

<a id="Matrix4D.op_Explicit"></a>

### *classmethod* Matrix4D.op_Explicit(m44: [Ansys.ACT.Math.Matrix4D](#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Matrix4D)) → [float](https://docs.python.org/3/builtins/functions.html#float)

op_Explicit method.

<!-- !! processed by numpydoc !! -->

