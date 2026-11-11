# `Point`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point"></a>

#### *class* Ansys.Mechanical.Graphics.Point(location: List[Any], lengthUnit: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|---------------------------------------|---------------------------------------|
| [`ConvertUnit`](#Point.ConvertUnit)   | Returns a new Point given new unit.   |
| [`__eq__`](#Point.__eq__)             | Equal operator                        |
| [`__ne__`](#Point.__ne__)             | Not-Equal operator                    |

### Methods

| Name | Description |
|-------------------------------------|-------------------------------|
| [`Equals`](#Point.Equals)           | Equals method.                |
| [`GetHashCode`](#Point.GetHashCode) | Object.GetHashCode() override |
| [`ToString`](#Point.ToString)       | ToString method.              |

### Properties

| Name | Description |
|---------------------------------|-------------------------------|
| [`Location`](#Point.Location)   | The location of the Point.    |
| [`Unit`](#Point.Unit)           | The length unit of the Point. |

<a id="property-detail"></a>

## Property detail

<a id="Point.Location"></a>

### *property* Point.Location *: List[[float](https://docs.python.org/3/builtins/functions.html#float)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

The location of the Point.

<!-- !! processed by numpydoc !! -->

<a id="Point.Unit"></a>

### *property* Point.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The length unit of the Point.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Point.ConvertUnit"></a>

### *classmethod* Point.ConvertUnit(inPoint: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point), outputUnit: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point)

Returns a new Point given new unit.

<!-- !! processed by numpydoc !! -->

<a id="Point.Equals"></a>

### Point.Equals(point: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Point.Equals(o: Any) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Point.GetHashCode"></a>

### Point.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

Object.GetHashCode() override

<!-- !! processed by numpydoc !! -->

<a id="Point.ToString"></a>

### Point.ToString() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

ToString method.

<!-- !! processed by numpydoc !! -->

<a id="Point.__eq__"></a>

### *classmethod* Point.\_\_eq_\_(a: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point), b: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equal operator

<!-- !! processed by numpydoc !! -->

<a id="Point.__ne__"></a>

### *classmethod* Point.\_\_ne_\_(a: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point), b: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Not-Equal operator

<!-- !! processed by numpydoc !! -->

