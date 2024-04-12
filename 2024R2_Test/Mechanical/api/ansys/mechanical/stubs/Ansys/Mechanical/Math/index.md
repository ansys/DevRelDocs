<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.Math"></a>

<a id="the-math-package"></a>

# The `Math` package

<a id="summary"></a>

## Summary

### Classes

| [`BoundVector`](BoundVector.md#BoundVector)   | A vector with fixed intial point and terminal point.   |
|-----------------------------------------------|--------------------------------------------------------|

<a id="description"></a>

## Description

Math subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Math.BoundVector"></a>

### *class* Math.BoundVector

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A vector with fixed intial point and terminal point.
> Or a vector with fixed initial point(origin) and a direction(vector).

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Origin`](#Math.Origin)   | The location at the start of the BoundVector.   |
|----------------------------|-------------------------------------------------|
| [`Vector`](#Math.Vector)   | The direction of the BoundVector.               |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Math import BoundVector
```

<a id="property-detail"></a>

## Property detail

<a id="Math.Origin"></a>

### *property* Math.Origin *: [Ansys.Mechanical.Graphics.Point](../Graphics/Point.md#Point) | [None](https://docs.python.org/3/library/constants.html#None)*

The location at the start of the BoundVector.

<!-- !! processed by numpydoc !! -->

<a id="Math.Vector"></a>

### *property* Math.Vector *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The direction of the BoundVector.

<!-- !! processed by numpydoc !! -->
