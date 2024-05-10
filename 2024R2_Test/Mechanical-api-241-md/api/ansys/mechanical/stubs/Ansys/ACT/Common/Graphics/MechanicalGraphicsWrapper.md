<a id="mechanicalgraphicswrapper"></a>

# MechanicalGraphicsWrapper

<a id="MechanicalGraphicsWrapper"></a>

### *class* MechanicalGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Wrapper for Graphics in Mechanical.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportScreenToImage`](#MechanicalGraphicsWrapper.ExportScreenToImage)   | ExportScreenToImage method.                                                              |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`ExportImage`](#MechanicalGraphicsWrapper.ExportImage)                   | Exports the current graphics display to a 2D image file.                                 |
| [`ExportViewports`](#MechanicalGraphicsWrapper.ExportViewports)           | Creates a composite of images exported from each open viewport.                          |
| [`Export3D`](#MechanicalGraphicsWrapper.Export3D)                         | Exports the current Graphics display in a 3d format to a file.                           |
| [`Redraw`](#MechanicalGraphicsWrapper.Redraw)                             | Forces the scene to redraw its content.                                                  |
| [`Suspend`](#MechanicalGraphicsWrapper.Suspend)                           | Prevents the scene to redraw until the Resume controller method was called.              |
| [`ForceResume`](#MechanicalGraphicsWrapper.ForceResume)                   | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| [`CreatePixelPoint`](#MechanicalGraphicsWrapper.CreatePixelPoint)         | Creates a point from pixel coordinates (ie. window coordinates).                         |
| [`CreateWorldPoint`](#MechanicalGraphicsWrapper.CreateWorldPoint)         | Create a point from world coordinates.                                                   |
| [`CreateVector3D`](#MechanicalGraphicsWrapper.CreateVector3D)             | Create a 3D vector from world coordinates.                                               |

### Properties

| [`Unit`](#MechanicalGraphicsWrapper.Unit)                                                                 | Gets the current graphics unit.                           |
|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`ModelViewManager`](ModelViewManager.md#ModelViewManager)                                                | An instance of the ModelViewManager.                      |
| [`KeyframeAnimationUtility`](#MechanicalGraphicsWrapper.KeyframeAnimationUtility)                         | A utility for creating animations based on keyframes.     |
| [`ResultAnimationOptions`](../../../Mechanical/Graphics/ResultAnimationOptions.md#ResultAnimationOptions) | Gets the Global Result Animation options.                 |
| [`SectionPlanes`](../../../Mechanical/Graphics/SectionPlanes.md#SectionPlanes)                            | Returns the collection of section planes used by graphics |
| [`ViewOptions`](../../../Mechanical/Graphics/ViewOptions.md#ViewOptions)                                  | Gets the Graphics View Options.                           |
| [`GlobalLegendSettings`](../../../Mechanical/Graphics/GlobalLegendSettings.md#GlobalLegendSettings)       | Gets the Global Graphics Legend Settings.                 |
| [`Camera`](#MechanicalGraphicsWrapper.Camera)                                                             | Gets the camera.                                          |
| [`Scene`](#MechanicalGraphicsWrapper.Scene)                                                               | Gets the scene.                                           |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import MechanicalGraphicsWrapper
```

<a id="property-detail"></a>

## Property detail

<a id="MechanicalGraphicsWrapper.Unit"></a>

### *property* MechanicalGraphicsWrapper.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current graphics unit.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ModelViewManager"></a>

### *property* MechanicalGraphicsWrapper.ModelViewManager *: [Ansys.ACT.Interfaces.Graphics.IModelViewManager](../../Interfaces/Graphics/IModelViewManager.md#IModelViewManager) | [None](https://docs.python.org/3/library/constants.html#None)*

An instance of the ModelViewManager.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.KeyframeAnimationUtility"></a>

### *property* MechanicalGraphicsWrapper.KeyframeAnimationUtility *: Ansys.ACT.Common.Graphics.KeyframeAnimationUtility | [None](https://docs.python.org/3/library/constants.html#None)*

A utility for creating animations based on keyframes.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ResultAnimationOptions"></a>

### *property* MechanicalGraphicsWrapper.ResultAnimationOptions *: [Ansys.Mechanical.Graphics.ResultAnimationOptions](../../../Mechanical/Graphics/ResultAnimationOptions.md#ResultAnimationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Result Animation options.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.SectionPlanes"></a>

### *property* MechanicalGraphicsWrapper.SectionPlanes *: [Ansys.Mechanical.Graphics.SectionPlanes](../../../Mechanical/Graphics/SectionPlanes.md#SectionPlanes) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ViewOptions"></a>

### *property* MechanicalGraphicsWrapper.ViewOptions *: [Ansys.Mechanical.Graphics.ViewOptions](../../../Mechanical/Graphics/ViewOptions.md#ViewOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Graphics View Options.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.GlobalLegendSettings"></a>

### *property* MechanicalGraphicsWrapper.GlobalLegendSettings *: [Ansys.Mechanical.Graphics.GlobalLegendSettings](../../../Mechanical/Graphics/GlobalLegendSettings.md#GlobalLegendSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Graphics Legend Settings.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Camera"></a>

### *property* MechanicalGraphicsWrapper.Camera *: [Ansys.ACT.Common.Graphics.MechanicalCameraWrapper](MechanicalCameraWrapper.md#MechanicalCameraWrapper) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the camera.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Scene"></a>

### *property* MechanicalGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MechanicalGraphicsWrapper.ExportScreenToImage"></a>

### MechanicalGraphicsWrapper.ExportScreenToImage(filePath: System.String)

ExportScreenToImage method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportImage"></a>

### MechanicalGraphicsWrapper.ExportImage(filePath: System.String, formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../Mechanical/Graphics/GraphicsImageExportSettings.md#GraphicsImageExportSettings))

Exports the current graphics display to a 2D image file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportViewports"></a>

### MechanicalGraphicsWrapper.ExportViewports(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings](../../../Mechanical/Graphics/GraphicsViewportsExportSettings.md#GraphicsViewportsExportSettings))

Creates a composite of images exported from each open viewport.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Export3D"></a>

### MechanicalGraphicsWrapper.Export3D(filePath: System.String, format3d: [Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat](../../../Mechanical/DataModel/Enums/Graphics3DExportFormat.md#Graphics3DExportFormat), settings: [Ansys.Mechanical.Graphics.Graphics3DExportSettings](../../../Mechanical/Graphics/Graphics3DExportSettings.md#Graphics3DExportSettings))

Exports the current Graphics display in a 3d format to a file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Redraw"></a>

### MechanicalGraphicsWrapper.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Suspend"></a>

### MechanicalGraphicsWrapper.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ForceResume"></a>

### MechanicalGraphicsWrapper.ForceResume()

Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreatePixelPoint"></a>

### MechanicalGraphicsWrapper.CreatePixelPoint(x: System.Int32, y: System.Int32)

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateWorldPoint"></a>

### MechanicalGraphicsWrapper.CreateWorldPoint(x: System.Double, y: System.Double, z: System.Double)

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateVector3D"></a>

### MechanicalGraphicsWrapper.CreateVector3D(x: System.Double, y: System.Double, z: System.Double)

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->
