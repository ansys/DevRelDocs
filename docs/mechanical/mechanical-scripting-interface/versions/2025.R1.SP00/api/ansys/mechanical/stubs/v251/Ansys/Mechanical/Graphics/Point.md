# `Point`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Point"></a>

#### *class* Ansys.Mechanical.Graphics.Point

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Point class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-----------------------------------------|---------------------------------------|
| [`ConvertUnit`](#Point.ConvertUnit)     | Returns a new Point given new unit.   |
| [`op_Equality`](#Point.op_Equality)     | Equal operator                        |
| [`op_Inequality`](#Point.op_Inequality) | Not-Equal operator                    |

### Methods

| Name | Description |
|-------------------------------------|------------------------------------|
| [`Equals`](#Point.Equals)           | Object.Equals(object o) override   |
| [`GetHashCode`](#Point.GetHashCode) | Object.GetHashCode() override      |

### Properties

| Name | Description |
|------------------------------------------------------------------------|-------------------------------|
| [`Location`](#Point.Location)   | The location of the Point.    |
| [`Unit`](#Point.Unit)                                                  | The length unit of the Point. |

<a id="property-detail"></a>

## Property detail

<a id="Point.Location"></a>

### *property* Point.Location *: List[[float](https://docs.python.org/3/library/functions.html#float)] | [None](https://docs.python.org/3/library/constants.html#None)*

The location of the Point.

<!-- !! processed by numpydoc !! -->

<a id="Point.Unit"></a>

### *property* Point.Unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The length unit of the Point.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Point.ConvertUnit"></a>

### *classmethod* Point.ConvertUnit(inPoint: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Point), outputUnit: [str](https://docs.python.org/3/library/stdtypes.html#str))

Returns a new Point given new unit.

<!-- !! processed by numpydoc !! -->

<a id="Point.Equals"></a>

### Point.Equals(o: Any)

Object.Equals(object o) override

<!-- !! processed by numpydoc !! -->

<a id="Point.GetHashCode"></a>

### Point.GetHashCode()

Object.GetHashCode() override

<!-- !! processed by numpydoc !! -->

<a id="Point.op_Equality"></a>

### *classmethod* Point.op_Equality(a: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Point), b: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Point))

Equal operator

<!-- !! processed by numpydoc !! -->

<a id="Point.op_Inequality"></a>

### *classmethod* Point.op_Inequality(a: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Point), b: [Ansys.Mechanical.Graphics.Point](#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Point))

Not-Equal operator

<!-- !! processed by numpydoc !! -->

