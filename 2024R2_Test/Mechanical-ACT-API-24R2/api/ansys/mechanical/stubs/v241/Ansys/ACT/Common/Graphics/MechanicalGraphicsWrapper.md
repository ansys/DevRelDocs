# `MechanicalGraphicsWrapper`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper"></a>

#### *class* Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Wrapper for Graphics in Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`CreatePixelPoint`](#MechanicalGraphicsWrapper.CreatePixelPoint)       | Creates a point from pixel coordinates (ie. window coordinates).                         |
| [`CreateVector3D`](#MechanicalGraphicsWrapper.CreateVector3D)           | Create a 3D vector from world coordinates.                                               |
| [`CreateWorldPoint`](#MechanicalGraphicsWrapper.CreateWorldPoint)       | Create a point from world coordinates.                                                   |
| [`Export3D`](#MechanicalGraphicsWrapper.Export3D)                       | Exports the current Graphics display in a 3d format to a file.                           |
| [`ExportImage`](#MechanicalGraphicsWrapper.ExportImage)                 | Exports the current graphics display to a 2D image file.                                 |
| [`ExportScreenToImage`](#MechanicalGraphicsWrapper.ExportScreenToImage) | ExportScreenToImage method.                                                              |
| [`ExportViewports`](#MechanicalGraphicsWrapper.ExportViewports)         | Creates a composite of images exported from each open viewport.                          |
| [`ForceResume`](#MechanicalGraphicsWrapper.ForceResume)                 | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| [`Redraw`](#MechanicalGraphicsWrapper.Redraw)                           | Forces the scene to redraw its content.                                                  |
| [`Suspend`](#MechanicalGraphicsWrapper.Suspend)                         | Prevents the scene to redraw until the Resume controller method was called.              |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`Camera`](#MechanicalGraphicsWrapper.Camera)                                     | Gets the camera.                                          |
| [`GlobalLegendSettings`](#MechanicalGraphicsWrapper.GlobalLegendSettings)         | Gets the Global Graphics Legend Settings.                 |
| [`KeyframeAnimationUtility`](#MechanicalGraphicsWrapper.KeyframeAnimationUtility) | A utility for creating animations based on keyframes.     |
| [`ModelViewManager`](#MechanicalGraphicsWrapper.ModelViewManager)                 | An instance of the ModelViewManager.                      |
| [`ResultAnimationOptions`](#MechanicalGraphicsWrapper.ResultAnimationOptions)     | Gets the Global Result Animation options.                 |
| [`Scene`](#MechanicalGraphicsWrapper.Scene)                                       | Gets the scene.                                           |
| [`SectionPlanes`](#MechanicalGraphicsWrapper.SectionPlanes)                       | Returns the collection of section planes used by graphics |
| [`Unit`](#MechanicalGraphicsWrapper.Unit)                                         | Gets the current graphics unit.                           |
| [`ViewOptions`](#MechanicalGraphicsWrapper.ViewOptions)                           | Gets the Graphics View Options.                           |

<a id="property-detail"></a>

## Property detail

<a id="MechanicalGraphicsWrapper.Camera"></a>

### *property* MechanicalGraphicsWrapper.Camera *: [Ansys.ACT.Common.Graphics.MechanicalCameraWrapper](../../../../../v242/Ansys/ACT/Common/Graphics/MechanicalCameraWrapper.md#ansys.mechanical.stubs.v242.Ansys.ACT.Common.Graphics.MechanicalCameraWrapper) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the camera.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.GlobalLegendSettings"></a>

### *property* MechanicalGraphicsWrapper.GlobalLegendSettings *: [Ansys.Mechanical.Graphics.GlobalLegendSettings](../../../../../v242/Ansys/Mechanical/Graphics/GlobalLegendSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.GlobalLegendSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Graphics Legend Settings.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.KeyframeAnimationUtility"></a>

### *property* MechanicalGraphicsWrapper.KeyframeAnimationUtility *: Ansys.ACT.Common.Graphics.KeyframeAnimationUtility | [None](https://docs.python.org/3/library/constants.html#None)*

A utility for creating animations based on keyframes.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ModelViewManager"></a>

### *property* MechanicalGraphicsWrapper.ModelViewManager *: [Ansys.ACT.Interfaces.Graphics.IModelViewManager](../../../../../v242/Ansys/ACT/Interfaces/Graphics/IModelViewManager.md#ansys.mechanical.stubs.v242.Ansys.ACT.Interfaces.Graphics.IModelViewManager) | [None](https://docs.python.org/3/library/constants.html#None)*

An instance of the ModelViewManager.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ResultAnimationOptions"></a>

### *property* MechanicalGraphicsWrapper.ResultAnimationOptions *: [Ansys.Mechanical.Graphics.ResultAnimationOptions](../../../../../v242/Ansys/Mechanical/Graphics/ResultAnimationOptions.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.ResultAnimationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Result Animation options.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Scene"></a>

### *property* MechanicalGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.SectionPlanes"></a>

### *property* MechanicalGraphicsWrapper.SectionPlanes *: [Ansys.Mechanical.Graphics.SectionPlanes](../../../../../v242/Ansys/Mechanical/Graphics/SectionPlanes.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.SectionPlanes) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Unit"></a>

### *property* MechanicalGraphicsWrapper.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current graphics unit.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ViewOptions"></a>

### *property* MechanicalGraphicsWrapper.ViewOptions *: [Ansys.Mechanical.Graphics.ViewOptions](../../../../../v242/Ansys/Mechanical/Graphics/ViewOptions.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.ViewOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Graphics View Options.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MechanicalGraphicsWrapper.CreatePixelPoint"></a>

### MechanicalGraphicsWrapper.CreatePixelPoint(x: System.Int32, y: System.Int32)

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateVector3D"></a>

### MechanicalGraphicsWrapper.CreateVector3D(x: System.Double, y: System.Double, z: System.Double)

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateWorldPoint"></a>

### MechanicalGraphicsWrapper.CreateWorldPoint(x: System.Double, y: System.Double, z: System.Double)

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Export3D"></a>

### MechanicalGraphicsWrapper.Export3D(filePath: System.String, format3d: [Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat](../../../../../v242/Ansys/Mechanical/DataModel/Enums/Graphics3DExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat), settings: [Ansys.Mechanical.Graphics.Graphics3DExportSettings](../../../../../v242/Ansys/Mechanical/Graphics/Graphics3DExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.Graphics3DExportSettings))

Exports the current Graphics display in a 3d format to a file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportImage"></a>

### MechanicalGraphicsWrapper.ExportImage(filePath: System.String, formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../../../v242/Ansys/Mechanical/Graphics/GraphicsImageExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.GraphicsImageExportSettings))

Exports the current graphics display to a 2D image file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportScreenToImage"></a>

### MechanicalGraphicsWrapper.ExportScreenToImage(filePath: System.String)

ExportScreenToImage method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportViewports"></a>

### MechanicalGraphicsWrapper.ExportViewports(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings](../../../../../v242/Ansys/Mechanical/Graphics/GraphicsViewportsExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings))

Creates a composite of images exported from each open viewport.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ForceResume"></a>

### MechanicalGraphicsWrapper.ForceResume()

```text
Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.
```

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Redraw"></a>

### MechanicalGraphicsWrapper.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Suspend"></a>

### MechanicalGraphicsWrapper.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

