<!-- vale off -->

<a id="dmgraphicswrapper"></a>

# `DMGraphicsWrapper`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Common.Graphics.DMGraphicsWrapper"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Common.Graphics.DMGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Wrapper for Graphics in Design Modeler.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Redraw`](#DMGraphicsWrapper.Redraw)                           | Forces the scene to redraw its content.                                                  |
| [`Suspend`](#DMGraphicsWrapper.Suspend)                         | Prevents the scene to redraw until the Resume controller method was called.              |
| [`ForceResume`](#DMGraphicsWrapper.ForceResume)                 | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| [`CreatePixelPoint`](#DMGraphicsWrapper.CreatePixelPoint)       | Creates a point from pixel coordinates (ie. window coordinates).                         |
| [`CreateWorldPoint`](#DMGraphicsWrapper.CreateWorldPoint)       | Create a point from world coordinates.                                                   |
| [`CreateVector3D`](#DMGraphicsWrapper.CreateVector3D)           | Create a 3D vector from world coordinates.                                               |
| [`ExportScreenToImage`](#DMGraphicsWrapper.ExportScreenToImage) | Exports the current Graphics screen to a file.                                           |

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

<a id="DMGraphicsWrapper.Redraw"></a>

### DMGraphicsWrapper.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Suspend"></a>

### DMGraphicsWrapper.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.ForceResume"></a>

### DMGraphicsWrapper.ForceResume()

Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.CreatePixelPoint"></a>

### DMGraphicsWrapper.CreatePixelPoint(x: System.Int32, y: System.Int32)

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.CreateWorldPoint"></a>

### DMGraphicsWrapper.CreateWorldPoint(x: System.Double, y: System.Double, z: System.Double)

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.CreateVector3D"></a>

### DMGraphicsWrapper.CreateVector3D(x: System.Double, y: System.Double, z: System.Double)

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.ExportScreenToImage"></a>

### DMGraphicsWrapper.ExportScreenToImage(filePath: System.String)

Exports the current Graphics screen to a file.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
