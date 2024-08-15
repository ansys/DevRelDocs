# `DMGraphicsWrapper`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Common.Graphics.DMGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Wrapper for Graphics in Design Modeler.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------|------------------------------------------------------------------------------------------|
| `Redraw`              | Forces the scene to redraw its content.                                                  |
| `Suspend`             | Prevents the scene to redraw until the Resume controller method was called.              |
| `ForceResume`         | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| `CreatePixelPoint`    | Creates a point from pixel coordinates (ie. window coordinates).                         |
| `CreateWorldPoint`    | Create a point from world coordinates.                                                   |
| `CreateVector3D`      | Create a 3D vector from world coordinates.                                               |
| `ExportScreenToImage` | Exports the current Graphics screen to a file.                                           |

### Properties

| Name | Description |
|-----------|-------------------|
| `Scene`   | Gets the scene.   |

<a id="property-detail"></a>

## Property detail

### *property* DMGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### DMGraphicsWrapper.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

### DMGraphicsWrapper.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

### DMGraphicsWrapper.ForceResume()

```text
Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.
```

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

