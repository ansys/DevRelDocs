# MechanicalGraphicsWrapper

### *class* MechanicalGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Wrapper for Graphics in Mechanical.

> <!-- !! processed by numpydoc !! -->

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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import MechanicalGraphicsWrapper
```

## Property detail

### *property* MechanicalGraphicsWrapper.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current graphics unit.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.ModelViewManager *: [Ansys.ACT.Interfaces.Graphics.IModelViewManager](../../Interfaces/Graphics/IModelViewManager.md#IModelViewManager) | [None](https://docs.python.org/3/library/constants.html#None)*

An instance of the ModelViewManager.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.KeyframeAnimationUtility *: Ansys.ACT.Common.Graphics.KeyframeAnimationUtility | [None](https://docs.python.org/3/library/constants.html#None)*

A utility for creating animations based on keyframes.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.ResultAnimationOptions *: [Ansys.Mechanical.Graphics.ResultAnimationOptions](../../../Mechanical/Graphics/ResultAnimationOptions.md#ResultAnimationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Result Animation options.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.SectionPlanes *: [Ansys.Mechanical.Graphics.SectionPlanes](../../../Mechanical/Graphics/SectionPlanes.md#SectionPlanes) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.ViewOptions *: [Ansys.Mechanical.Graphics.ViewOptions](../../../Mechanical/Graphics/ViewOptions.md#ViewOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Graphics View Options.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.GlobalLegendSettings *: [Ansys.Mechanical.Graphics.GlobalLegendSettings](../../../Mechanical/Graphics/GlobalLegendSettings.md#GlobalLegendSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Graphics Legend Settings.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.Camera *: [Ansys.ACT.Common.Graphics.MechanicalCameraWrapper](MechanicalCameraWrapper.md#MechanicalCameraWrapper) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the camera.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

## Method detail

### MechanicalGraphicsWrapper.ExportScreenToImage(filePath: System.String)

ExportScreenToImage method.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.ExportImage(filePath: System.String, formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../Mechanical/Graphics/GraphicsImageExportSettings.md#GraphicsImageExportSettings))

Exports the current graphics display to a 2D image file.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.ExportViewports(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings](../../../Mechanical/Graphics/GraphicsViewportsExportSettings.md#GraphicsViewportsExportSettings))

Creates a composite of images exported from each open viewport.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.Export3D(filePath: System.String, format3d: [Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat](../../../Mechanical/DataModel/Enums/Graphics3DExportFormat.md#Graphics3DExportFormat), settings: [Ansys.Mechanical.Graphics.Graphics3DExportSettings](../../../Mechanical/Graphics/Graphics3DExportSettings.md#Graphics3DExportSettings))

Exports the current Graphics display in a 3d format to a file.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.ForceResume()

Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.CreatePixelPoint(x: System.Int32, y: System.Int32)

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.CreateWorldPoint(x: System.Double, y: System.Double, z: System.Double)

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.CreateVector3D(x: System.Double, y: System.Double, z: System.Double)

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->
