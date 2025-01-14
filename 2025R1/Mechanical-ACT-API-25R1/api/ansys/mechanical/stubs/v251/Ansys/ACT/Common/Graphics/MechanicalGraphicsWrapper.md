# `MechanicalGraphicsWrapper`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper"></a>

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

### *property* MechanicalGraphicsWrapper.Camera *: [Ansys.ACT.Common.Graphics.MechanicalCameraWrapper](MechanicalCameraWrapper.md#ansys.mechanical.stubs.v251.Ansys.ACT.Common.Graphics.MechanicalCameraWrapper) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the camera.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.GlobalLegendSettings"></a>

### *property* MechanicalGraphicsWrapper.GlobalLegendSettings *: [Ansys.Mechanical.Graphics.GlobalLegendSettings](../../../Mechanical/Graphics/GlobalLegendSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.GlobalLegendSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Graphics Legend Settings.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.KeyframeAnimationUtility"></a>

### *property* MechanicalGraphicsWrapper.KeyframeAnimationUtility *: Ansys.ACT.Common.Graphics.KeyframeAnimationUtility | [None](https://docs.python.org/3/library/constants.html#None)*

A utility for creating animations based on keyframes.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ModelViewManager"></a>

### *property* MechanicalGraphicsWrapper.ModelViewManager *: [Ansys.ACT.Interfaces.Graphics.IModelViewManager](../../Interfaces/Graphics/IModelViewManager.md#ansys.mechanical.stubs.v251.Ansys.ACT.Interfaces.Graphics.IModelViewManager) | [None](https://docs.python.org/3/library/constants.html#None)*

An instance of the ModelViewManager.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ResultAnimationOptions"></a>

### *property* MechanicalGraphicsWrapper.ResultAnimationOptions *: [Ansys.Mechanical.Graphics.ResultAnimationOptions](../../../Mechanical/Graphics/ResultAnimationOptions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.ResultAnimationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Result Animation options.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Scene"></a>

### *property* MechanicalGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.SectionPlanes"></a>

### *property* MechanicalGraphicsWrapper.SectionPlanes *: [Ansys.Mechanical.Graphics.SectionPlanes](../../../Mechanical/Graphics/SectionPlanes.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.SectionPlanes) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Unit"></a>

### *property* MechanicalGraphicsWrapper.Unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current graphics unit.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ViewOptions"></a>

### *property* MechanicalGraphicsWrapper.ViewOptions *: [Ansys.Mechanical.Graphics.ViewOptions](../../../Mechanical/Graphics/ViewOptions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.ViewOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Graphics View Options.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MechanicalGraphicsWrapper.CreatePixelPoint"></a>

### MechanicalGraphicsWrapper.CreatePixelPoint(x: [int](https://docs.python.org/3/library/functions.html#int), y: [int](https://docs.python.org/3/library/functions.html#int))

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateVector3D"></a>

### MechanicalGraphicsWrapper.CreateVector3D(x: [float](https://docs.python.org/3/library/functions.html#float), y: [float](https://docs.python.org/3/library/functions.html#float), z: [float](https://docs.python.org/3/library/functions.html#float))

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateWorldPoint"></a>

### MechanicalGraphicsWrapper.CreateWorldPoint(x: [float](https://docs.python.org/3/library/functions.html#float), y: [float](https://docs.python.org/3/library/functions.html#float), z: [float](https://docs.python.org/3/library/functions.html#float))

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Export3D"></a>

### MechanicalGraphicsWrapper.Export3D(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format3d: [Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat](../../../Mechanical/DataModel/Enums/Graphics3DExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat), settings: [Ansys.Mechanical.Graphics.Graphics3DExportSettings](../../../Mechanical/Graphics/Graphics3DExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Graphics3DExportSettings))

Exports the current Graphics display in a 3d format to a file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportImage"></a>

### MechanicalGraphicsWrapper.ExportImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../Mechanical/Graphics/GraphicsImageExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.GraphicsImageExportSettings))

Exports the current graphics display to a 2D image file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportScreenToImage"></a>

### MechanicalGraphicsWrapper.ExportScreenToImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

ExportScreenToImage method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportViewports"></a>

### MechanicalGraphicsWrapper.ExportViewports(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings](../../../Mechanical/Graphics/GraphicsViewportsExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings))

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

