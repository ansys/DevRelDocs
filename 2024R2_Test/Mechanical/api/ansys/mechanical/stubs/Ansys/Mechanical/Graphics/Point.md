# Point

### *class* Point

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Point class.

> <!-- !! processed by numpydoc !! -->

## Overview

### Constructors

| [`ConvertUnit`](#Point.ConvertUnit)     | Returns a new Point given new unit.   |
|-----------------------------------------|---------------------------------------|
| [`op_Equality`](#Point.op_Equality)     | Equal operator                        |
| [`op_Inequality`](#Point.op_Inequality) | Not-Equal operator                    |

### Methods

| [`Equals`](#Point.Equals)           | Object.Equals(object o) override   |
|-------------------------------------|------------------------------------|
| [`GetHashCode`](#Point.GetHashCode) | Object.GetHashCode() override      |

### Properties

| [`Location`](#Point.Location)   | The location of the Point.    |
|---------------------------------|-------------------------------|
| [`Unit`](#Point.Unit)           | The length unit of the Point. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import Point
```

## Property detail

### *property* Point.Location *: System.Collections.Generic.IList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

The location of the Point.

<!-- !! processed by numpydoc !! -->

### *property* Point.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The length unit of the Point.

<!-- !! processed by numpydoc !! -->

## Method detail

### *classmethod* Point.ConvertUnit(inPoint: [Ansys.Mechanical.Graphics.Point](#Point), outputUnit: System.String)

Returns a new Point given new unit.

<!-- !! processed by numpydoc !! -->

### *classmethod* Point.op_Equality(a: [Ansys.Mechanical.Graphics.Point](#Point), b: [Ansys.Mechanical.Graphics.Point](#Point))

Equal operator

<!-- !! processed by numpydoc !! -->

### *classmethod* Point.op_Inequality(a: [Ansys.Mechanical.Graphics.Point](#Point), b: [Ansys.Mechanical.Graphics.Point](#Point))

Not-Equal operator

<!-- !! processed by numpydoc !! -->

### Point.Equals(o: System.Object)

Object.Equals(object o) override

<!-- !! processed by numpydoc !! -->

### Point.GetHashCode()

Object.GetHashCode() override

<!-- !! processed by numpydoc !! -->
