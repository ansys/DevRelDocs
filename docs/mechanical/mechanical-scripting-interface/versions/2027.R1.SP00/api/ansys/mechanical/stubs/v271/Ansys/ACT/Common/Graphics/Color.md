# `Color`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.Color"></a>

#### *class* Ansys.ACT.Common.Graphics.Color(red: [int](https://docs.python.org/3/builtins/functions.html#int), green: [int](https://docs.python.org/3/builtins/functions.html#int), blue: [int](https://docs.python.org/3/builtins/functions.html#int))

<a id="Color"></a>

### *class* Color(red: [int](https://docs.python.org/3/builtins/functions.html#int), green: [int](https://docs.python.org/3/builtins/functions.html#int), blue: [int](https://docs.python.org/3/builtins/functions.html#int), alpha: [int](https://docs.python.org/3/builtins/functions.html#int))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A utility class used for managing colors using various bit layouts.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|---------------------------------|--------------------------------------------------------------|
| [`FromABGR`](#Color.FromABGR)   | Constructs a Color instance from an ABGR-encoded bitfield.   |
| [`FromARGB`](#Color.FromARGB)   | Constructs a Color instance from an ARGB-encoded bitfield.   |
| [`FromBGR`](#Color.FromBGR)     | Constructs a Color instance from a BGR-encoded bitfield.     |
| [`FromRGB`](#Color.FromRGB)     | Constructs a Color instance from an RGB-encoded bitfield.    |

### Methods

| Name | Description |
|-------------------------------|------------------------------------------------------------------------------------------|
| [`ToABGR`](#Color.ToABGR)     | Returns the Color's channels encoded as a bitfield in the following byte-format: ABGR.   |
| [`ToARGB`](#Color.ToARGB)     | Returns the Color's channels encoded as a bitfield in the following byte-format: ARGB.   |
| [`ToBGR`](#Color.ToBGR)       | Returns the Color's channels encoded as a bitfield in the following byte-format: BGR.    |
| [`ToRGB`](#Color.ToRGB)       | Returns the Color's channels encoded as a bitfield in the following byte-format: RGB.    |
| [`ToString`](#Color.ToString) | ToString method.                                                                         |

### Properties

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------------|
| [`Alpha`](#Color.Alpha)   | Gets the alpha channel of the color, represented as an integer ranging from 0 to 255.   |
| [`Blue`](#Color.Blue)     | Gets the blue channel of the color, represented as an integer ranging from 0 to 255.    |
| [`Green`](#Color.Green)   | Gets the green channel of the color, represented as an integer ranging from 0 to 255.   |
| [`Red`](#Color.Red)       | Gets the red channel of the color, represented as an integer ranging from 0 to 255.     |

<a id="property-detail"></a>

## Property detail

<a id="Color.Alpha"></a>

### *property* Color.Alpha *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the alpha channel of the color, represented as an integer ranging from 0 to 255.

<!-- !! processed by numpydoc !! -->

<a id="Color.Blue"></a>

### *property* Color.Blue *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the blue channel of the color, represented as an integer ranging from 0 to 255.

<!-- !! processed by numpydoc !! -->

<a id="Color.Green"></a>

### *property* Color.Green *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the green channel of the color, represented as an integer ranging from 0 to 255.

<!-- !! processed by numpydoc !! -->

<a id="Color.Red"></a>

### *property* Color.Red *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the red channel of the color, represented as an integer ranging from 0 to 255.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Color.FromABGR"></a>

### *classmethod* Color.FromABGR(abgr: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Common.Graphics.Color](#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.Color)

Constructs a Color instance from an ABGR-encoded bitfield.

<!-- !! processed by numpydoc !! -->

<a id="Color.FromARGB"></a>

### *classmethod* Color.FromARGB(argb: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Common.Graphics.Color](#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.Color)

Constructs a Color instance from an ARGB-encoded bitfield.

<!-- !! processed by numpydoc !! -->

<a id="Color.FromBGR"></a>

### *classmethod* Color.FromBGR(bgr: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Common.Graphics.Color](#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.Color)

Constructs a Color instance from a BGR-encoded bitfield.

<!-- !! processed by numpydoc !! -->

<a id="Color.FromRGB"></a>

### *classmethod* Color.FromRGB(rgb: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Common.Graphics.Color](#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.Color)

Constructs a Color instance from an RGB-encoded bitfield.

<!-- !! processed by numpydoc !! -->

<a id="Color.ToABGR"></a>

### Color.ToABGR() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the Color's channels encoded as a bitfield in the following byte-format: ABGR.

<!-- !! processed by numpydoc !! -->

<a id="Color.ToARGB"></a>

### Color.ToARGB() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the Color's channels encoded as a bitfield in the following byte-format: ARGB.

<!-- !! processed by numpydoc !! -->

<a id="Color.ToBGR"></a>

### Color.ToBGR() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the Color's channels encoded as a bitfield in the following byte-format: BGR.

<!-- !! processed by numpydoc !! -->

<a id="Color.ToRGB"></a>

### Color.ToRGB() → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the Color's channels encoded as a bitfield in the following byte-format: RGB.

<!-- !! processed by numpydoc !! -->

<a id="Color.ToString"></a>

### Color.ToString() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

ToString method.

<!-- !! processed by numpydoc !! -->

