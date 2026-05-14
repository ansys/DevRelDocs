# `DMGraphicsWrapper`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Common.Graphics.DMGraphicsWrapper"></a>

#### *class* Ansys.ACT.Common.Graphics.DMGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Wrapper for Graphics in Design Modeler.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`CreatePixelPoint`](#DMGraphicsWrapper.CreatePixelPoint)       | Creates a point from pixel coordinates (ie. window coordinates).                         |
| [`CreateVector3D`](#DMGraphicsWrapper.CreateVector3D)           | Create a 3D vector from world coordinates.                                               |
| [`CreateWorldPoint`](#DMGraphicsWrapper.CreateWorldPoint)       | Create a point from world coordinates.                                                   |
| [`ExportScreenToImage`](#DMGraphicsWrapper.ExportScreenToImage) | Exports the current Graphics screen to a file.                                           |
| [`ForceResume`](#DMGraphicsWrapper.ForceResume)                 | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| [`Redraw`](#DMGraphicsWrapper.Redraw)                           | Forces the scene to redraw its content.                                                  |
| [`Suspend`](#DMGraphicsWrapper.Suspend)                         | Prevents the scene to redraw until the Resume controller method was called.              |

### Properties

| Name | Description |
|---------------------------------------|-------------------|
| [`Scene`](#DMGraphicsWrapper.Scene)   | Gets the scene.   |

<a id="property-detail"></a>

## Property detail

<a id="DMGraphicsWrapper.Scene"></a>

### *property* DMGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DMGraphicsWrapper.CreatePixelPoint"></a>

### DMGraphicsWrapper.CreatePixelPoint(x: [int](https://docs.python.org/3/library/functions.html#int), y: [int](https://docs.python.org/3/library/functions.html#int)) → Ansys.ACT.Interfaces.Graphics.IPixelPoint

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.CreateVector3D"></a>

### DMGraphicsWrapper.CreateVector3D(x: [float](https://docs.python.org/3/library/functions.html#float), y: [float](https://docs.python.org/3/library/functions.html#float), z: [float](https://docs.python.org/3/library/functions.html#float)) → Ansys.ACT.Interfaces.Graphics.IVector3D

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.CreateWorldPoint"></a>

### DMGraphicsWrapper.CreateWorldPoint(x: [float](https://docs.python.org/3/library/functions.html#float), y: [float](https://docs.python.org/3/library/functions.html#float), z: [float](https://docs.python.org/3/library/functions.html#float)) → Ansys.ACT.Interfaces.Graphics.IWorldPoint

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.ExportScreenToImage"></a>

### DMGraphicsWrapper.ExportScreenToImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Exports the current Graphics screen to a file.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.ForceResume"></a>

### DMGraphicsWrapper.ForceResume() → [None](https://docs.python.org/3/library/constants.html#None)

```text
Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.
```

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Redraw"></a>

### DMGraphicsWrapper.Redraw() → [None](https://docs.python.org/3/library/constants.html#None)

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Suspend"></a>

### DMGraphicsWrapper.Suspend() → Ansys.ACT.Interfaces.Graphics.ISuspendController

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

