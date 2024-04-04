# DMGraphicsWrapper

### *class* DMGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Wrapper for Graphics in Design Modeler.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Redraw`](#DMGraphicsWrapper.Redraw)                           | Forces the scene to redraw its content.                                                  |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Suspend`](#DMGraphicsWrapper.Suspend)                         | Prevents the scene to redraw until the Resume controller method was called.              |
| [`ForceResume`](#DMGraphicsWrapper.ForceResume)                 | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| [`CreatePixelPoint`](#DMGraphicsWrapper.CreatePixelPoint)       | Creates a point from pixel coordinates (ie. window coordinates).                         |
| [`CreateWorldPoint`](#DMGraphicsWrapper.CreateWorldPoint)       | Create a point from world coordinates.                                                   |
| [`CreateVector3D`](#DMGraphicsWrapper.CreateVector3D)           | Create a 3D vector from world coordinates.                                               |
| [`ExportScreenToImage`](#DMGraphicsWrapper.ExportScreenToImage) | Exports the current Graphics screen to a file.                                           |

### Properties

| [`Scene`](#DMGraphicsWrapper.Scene)   | Gets the scene.   |
|---------------------------------------|-------------------|

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import DMGraphicsWrapper
```

## Property detail

### *property* DMGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

## Method detail

### DMGraphicsWrapper.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

### DMGraphicsWrapper.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

### DMGraphicsWrapper.ForceResume()

Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.

<!-- !! processed by numpydoc !! -->

### DMGraphicsWrapper.CreatePixelPoint(x: System.Int32, y: System.Int32)

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

### DMGraphicsWrapper.CreateWorldPoint(x: System.Double, y: System.Double, z: System.Double)

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

### DMGraphicsWrapper.CreateVector3D(x: System.Double, y: System.Double, z: System.Double)

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

### DMGraphicsWrapper.ExportScreenToImage(filePath: System.String)

Exports the current Graphics screen to a file.

<!-- !! processed by numpydoc !! -->
