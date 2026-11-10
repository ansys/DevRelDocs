# `DMGraphicsWrapper`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.DMGraphicsWrapper"></a>

#### *class* Ansys.ACT.Common.Graphics.DMGraphicsWrapper(dmGraphics: Ansys.Common.Interop.AGGfx.IAGGfxService)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Wrapper for Graphics in Design Modeler.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`CreateAndOpenDraw3DContext`](#DMGraphicsWrapper.CreateAndOpenDraw3DContext)   | CreateAndOpenDraw3DContext method.                                                       |
| [`CreatePixelPoint`](#DMGraphicsWrapper.CreatePixelPoint)                       | Creates a point from pixel coordinates (ie. window coordinates).                         |
| [`CreateVector3D`](#DMGraphicsWrapper.CreateVector3D)                           | Create a 3D vector from world coordinates.                                               |
| [`CreateWorldPoint`](#DMGraphicsWrapper.CreateWorldPoint)                       | Create a point from world coordinates.                                                   |
| [`DrawText2D`](#DMGraphicsWrapper.DrawText2D)                                   | DrawText2D method.                                                                       |
| [`ExportScreenToImage`](#DMGraphicsWrapper.ExportScreenToImage)                 | Exports the current Graphics screen to a file.                                           |
| [`ForceResume`](#DMGraphicsWrapper.ForceResume)                                 | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| [`LineTo2D`](#DMGraphicsWrapper.LineTo2D)                                       | LineTo2D method.                                                                         |
| [`MoveTo2D`](#DMGraphicsWrapper.MoveTo2D)                                       | MoveTo2D method.                                                                         |
| [`PixelToWorld`](#DMGraphicsWrapper.PixelToWorld)                               | PixelToWorld method.                                                                     |
| [`Redraw`](#DMGraphicsWrapper.Redraw)                                           | Forces the scene to redraw its content.                                                  |
| [`RemoveContext`](#DMGraphicsWrapper.RemoveContext)                             | RemoveContext method.                                                                    |
| [`Suspend`](#DMGraphicsWrapper.Suspend)                                         | Prevents the scene to redraw until the Resume controller method was called.              |
| [`WorldToPixel`](#DMGraphicsWrapper.WorldToPixel)                               | WorldToPixel method.                                                                     |

### Properties

| Name | Description |
|---------------------------------------------------|------------------------|
| [`Camera`](#DMGraphicsWrapper.Camera)             | Camera property.       |
| [`Color`](Color.md#Color)                         | Color property.        |
| [`DepthTest`](#DMGraphicsWrapper.DepthTest)       | DepthTest property.    |
| [`DrawContexts`](#DMGraphicsWrapper.DrawContexts) | DrawContexts property. |
| [`LineWeight`](#DMGraphicsWrapper.LineWeight)     | LineWeight property.   |
| [`Scene`](#DMGraphicsWrapper.Scene)               | Gets the scene.        |
| [`Translucency`](#DMGraphicsWrapper.Translucency) | Translucency property. |
| [`Unit`](#DMGraphicsWrapper.Unit)                 | Unit property.         |

<a id="property-detail"></a>

## Property detail

<a id="DMGraphicsWrapper.Camera"></a>

### *property* DMGraphicsWrapper.Camera *: Ansys.ACT.Interfaces.Graphics.ICamera | [None](https://docs.python.org/3/builtins/constants.html#None)*

Camera property.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Color"></a>

### *property* DMGraphicsWrapper.Color *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Color property.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.DepthTest"></a>

### *property* DMGraphicsWrapper.DepthTest *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DepthTest property.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.DrawContexts"></a>

### *property* DMGraphicsWrapper.DrawContexts *: List[Ansys.ACT.Interfaces.Graphics.IDrawContext] | [None](https://docs.python.org/3/builtins/constants.html#None)*

DrawContexts property.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.LineWeight"></a>

### *property* DMGraphicsWrapper.LineWeight *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LineWeight property.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Scene"></a>

### *property* DMGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Translucency"></a>

### *property* DMGraphicsWrapper.Translucency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Translucency property.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Unit"></a>

### *property* DMGraphicsWrapper.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Unit property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DMGraphicsWrapper.CreateAndOpenDraw3DContext"></a>

### DMGraphicsWrapper.CreateAndOpenDraw3DContext() → Ansys.ACT.Interfaces.Graphics.IDraw3DContext

CreateAndOpenDraw3DContext method.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.CreatePixelPoint"></a>

### DMGraphicsWrapper.CreatePixelPoint(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.Graphics.IPixelPoint

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.CreateVector3D"></a>

### DMGraphicsWrapper.CreateVector3D(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → Ansys.ACT.Interfaces.Graphics.IVector3D

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.CreateWorldPoint"></a>

### DMGraphicsWrapper.CreateWorldPoint(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → Ansys.ACT.Interfaces.Graphics.IWorldPoint

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.DrawText2D"></a>

### DMGraphicsWrapper.DrawText2D(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int), text: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

DrawText2D method.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.ExportScreenToImage"></a>

### DMGraphicsWrapper.ExportScreenToImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports the current Graphics screen to a file.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.ForceResume"></a>

### DMGraphicsWrapper.ForceResume() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.
```

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.LineTo2D"></a>

### DMGraphicsWrapper.LineTo2D(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

LineTo2D method.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.MoveTo2D"></a>

### DMGraphicsWrapper.MoveTo2D(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

MoveTo2D method.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.PixelToWorld"></a>

### DMGraphicsWrapper.PixelToWorld(xy: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)]) → [float](https://docs.python.org/3/builtins/functions.html#float)

### DMGraphicsWrapper.PixelToWorld(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

PixelToWorld method.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Redraw"></a>

### DMGraphicsWrapper.Redraw() → [None](https://docs.python.org/3/builtins/constants.html#None)

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.RemoveContext"></a>

### DMGraphicsWrapper.RemoveContext(context: Ansys.ACT.Interfaces.Graphics.IDrawContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveContext method.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.Suspend"></a>

### DMGraphicsWrapper.Suspend() → Ansys.ACT.Interfaces.Graphics.ISuspendController

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

<a id="DMGraphicsWrapper.WorldToPixel"></a>

### DMGraphicsWrapper.WorldToPixel(pt: Iterable[[float](https://docs.python.org/3/builtins/functions.html#float)]) → [int](https://docs.python.org/3/builtins/functions.html#int)

### DMGraphicsWrapper.WorldToPixel(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → [int](https://docs.python.org/3/builtins/functions.html#int)

WorldToPixel method.

<!-- !! processed by numpydoc !! -->

