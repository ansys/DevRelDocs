# `MechanicalGraphicsWrapper`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Wrapper for Graphics in Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------|------------------------------------------------------------------------------------------|
| `ExportScreenToImage`   | ExportScreenToImage method.                                                              |
| `ExportImage`           | Exports the current graphics display to a 2D image file.                                 |
| `ExportViewports`       | Creates a composite of images exported from each open viewport.                          |
| `Export3D`              | Exports the current Graphics display in a 3d format to a file.                           |
| `Redraw`                | Forces the scene to redraw its content.                                                  |
| `Suspend`               | Prevents the scene to redraw until the Resume controller method was called.              |
| `ForceResume`           | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| `CreatePixelPoint`      | Creates a point from pixel coordinates (ie. window coordinates).                         |
| `CreateWorldPoint`      | Create a point from world coordinates.                                                   |
| `CreateVector3D`        | Create a 3D vector from world coordinates.                                               |

### Properties

| Name | Description |
|----------------------------|-----------------------------------------------------------|
| `Unit`                     | Gets the current graphics unit.                           |
| `ModelViewManager`         | An instance of the ModelViewManager.                      |
| `KeyframeAnimationUtility` | A utility for creating animations based on keyframes.     |
| `ResultAnimationOptions`   | Gets the Global Result Animation options.                 |
| `SectionPlanes`            | Returns the collection of section planes used by graphics |
| `ViewOptions`              | Gets the Graphics View Options.                           |
| `GlobalLegendSettings`     | Gets the Global Graphics Legend Settings.                 |
| `Camera`                   | Gets the camera.                                          |
| `Scene`                    | Gets the scene.                                           |

<a id="property-detail"></a>

## Property detail

### *property* MechanicalGraphicsWrapper.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current graphics unit.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.ModelViewManager *: [Ansys.ACT.Interfaces.Graphics.IModelViewManager](../../../../../v241/Ansys/ACT/Interfaces/Graphics/IModelViewManager.md#ansys.mechanical.stubs.v241.Ansys.ACT.Interfaces.Graphics.IModelViewManager) | [None](https://docs.python.org/3/library/constants.html#None)*

An instance of the ModelViewManager.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.KeyframeAnimationUtility *: Ansys.ACT.Common.Graphics.KeyframeAnimationUtility | [None](https://docs.python.org/3/library/constants.html#None)*

A utility for creating animations based on keyframes.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.ResultAnimationOptions *: [Ansys.Mechanical.Graphics.ResultAnimationOptions](../../../../../v241/Ansys/Mechanical/Graphics/ResultAnimationOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.ResultAnimationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Result Animation options.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.SectionPlanes *: [Ansys.Mechanical.Graphics.SectionPlanes](../../../../../v241/Ansys/Mechanical/Graphics/SectionPlanes.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.SectionPlanes) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.ViewOptions *: [Ansys.Mechanical.Graphics.ViewOptions](../../../../../v241/Ansys/Mechanical/Graphics/ViewOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.ViewOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Graphics View Options.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.GlobalLegendSettings *: [Ansys.Mechanical.Graphics.GlobalLegendSettings](../../../../../v241/Ansys/Mechanical/Graphics/GlobalLegendSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.GlobalLegendSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Graphics Legend Settings.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.Camera *: [Ansys.ACT.Common.Graphics.MechanicalCameraWrapper](../../../../../v241/Ansys/ACT/Common/Graphics/MechanicalCameraWrapper.md#ansys.mechanical.stubs.v241.Ansys.ACT.Common.Graphics.MechanicalCameraWrapper) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the camera.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### MechanicalGraphicsWrapper.ExportScreenToImage(filePath: System.String)

ExportScreenToImage method.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.ExportImage(filePath: System.String, formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../../../v241/Ansys/Mechanical/Graphics/GraphicsImageExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.GraphicsImageExportSettings))

Exports the current graphics display to a 2D image file.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.ExportViewports(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings](../../../../../v241/Ansys/Mechanical/Graphics/GraphicsViewportsExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings))

Creates a composite of images exported from each open viewport.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.Export3D(filePath: System.String, format3d: [Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat](../../../../../v241/Ansys/Mechanical/DataModel/Enums/Graphics3DExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat), settings: [Ansys.Mechanical.Graphics.Graphics3DExportSettings](../../../../../v241/Ansys/Mechanical/Graphics/Graphics3DExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.Graphics3DExportSettings))

Exports the current Graphics display in a 3d format to a file.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

### MechanicalGraphicsWrapper.ForceResume()

```text
Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.
```

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

