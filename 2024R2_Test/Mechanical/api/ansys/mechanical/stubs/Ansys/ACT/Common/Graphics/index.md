<a id="module-ansys.mechanical.stubs.Ansys.ACT.Common.Graphics"></a>

<a id="the-graphics-package"></a>

# The `Graphics` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------------|-----------------------------------------|
| [`DMCameraWrapper`](DMCameraWrapper.md#DMCameraWrapper)                               | Wrapper for Camera in Design Modeler.   |
| [`MechanicalCameraWrapper`](MechanicalCameraWrapper.md#MechanicalCameraWrapper)       | Wrapper for Camera in Mechanical.       |
| [`MechanicalGraphicsWrapper`](MechanicalGraphicsWrapper.md#MechanicalGraphicsWrapper) | Wrapper for Graphics in Mechanical.     |
| [`DMGraphicsWrapper`](DMGraphicsWrapper.md#DMGraphicsWrapper)                         | Wrapper for Graphics in Design Modeler. |
| [`ModelViewManager`](ModelViewManager.md#ModelViewManager)                            | ModelViewManager class.                 |

<a id="description"></a>

## Description

Graphics subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Graphics.DMCameraWrapper"></a>

### *class* Graphics.DMCameraWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Wrapper for Camera in Design Modeler.

> <!-- !! processed by numpydoc !! -->

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import DMCameraWrapper
```

<a id="Graphics.MechanicalCameraWrapper"></a>

### *class* Graphics.MechanicalCameraWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Wrapper for Camera in Mechanical.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [`Rotate`](#Graphics.Rotate)                                         | Rotates the camera about an axis.                                                                 |
| [`SetSpecificViewOrientation`](#Graphics.SetSpecificViewOrientation) | Sets a specific view orientation.                                                                 |
| [`SetFit`](#Graphics.SetFit)                                         | Fits the view to the specified selection. If null is supplied, fits the view to the entire model. |
| [`GetAsString`](#Graphics.GetAsString)                               | Retrieves the view commands as related to the application type as a string.                       |
| [`Zoom`](#Graphics.Zoom)                                             | Zooms in or out on the model.                                                                     |
| [`Pan`](#Graphics.Pan)                                               | Shifts the camera position horizontally or vertically based on x and y quantities.                |

### Properties

| Name | Summary |
|----------------------------------------|----------------------------------------------------------------------------------------------|
| [`FocalPoint`](#Graphics.FocalPoint)   | The focal point of the camera (coordinates are in the global coordinate system).             |
| [`UpVector`](#Graphics.UpVector)       | The vector pointing up from the focal point.                                                 |
| [`ViewVector`](#Graphics.ViewVector)   | The vector pointing from the focal point to the camera.                                      |
| [`SceneHeight`](#Graphics.SceneHeight) | Specifies the scene height (in length units) that will be projected and fit to the viewport. |
| [`SceneWidth`](#Graphics.SceneWidth)   | Specifies the scene width (in length units) that will be projected and fit to the viewport.  |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import MechanicalCameraWrapper
```

<a id="property-detail"></a>

## Property detail

<a id="Graphics.FocalPoint"></a>

### *property* Graphics.FocalPoint *: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#Point) | [None](https://docs.python.org/3/library/constants.html#None)*

The focal point of the camera (coordinates are in the global coordinate system).

<!-- !! processed by numpydoc !! -->

<a id="Graphics.UpVector"></a>

### *property* Graphics.UpVector *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The vector pointing up from the focal point.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ViewVector"></a>

### *property* Graphics.ViewVector *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The vector pointing from the focal point to the camera.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SceneHeight"></a>

### *property* Graphics.SceneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the scene height (in length units) that will be projected and fit to the viewport.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SceneWidth"></a>

### *property* Graphics.SceneWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the scene width (in length units) that will be projected and fit to the viewport.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Graphics.Rotate"></a>

### Graphics.Rotate(angle: System.Double, axis: [Ansys.Mechanical.DataModel.Enums.CameraAxisType](../../../Mechanical/DataModel/Enums/CameraAxisType.md#CameraAxisType))

Rotates the camera about an axis.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SetSpecificViewOrientation"></a>

### Graphics.SetSpecificViewOrientation(type: [Ansys.Mechanical.DataModel.Enums.ViewOrientationType](../../../Mechanical/DataModel/Enums/ViewOrientationType.md#ViewOrientationType))

Sets a specific view orientation.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SetFit"></a>

### Graphics.SetFit(sel: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Fits the view to the specified selection. If null is supplied, fits the view to the entire model.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.GetAsString"></a>

### Graphics.GetAsString(appType: [Ansys.Mechanical.DataModel.Enums.ApplicationType](../../../Mechanical/DataModel/Enums/ApplicationType.md#ApplicationType))

Retrieves the view commands as related to the application type as a string.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Zoom"></a>

### Graphics.Zoom(zoomVal: System.Double)

Zooms in or out on the model.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Pan"></a>

### Graphics.Pan(x: Ansys.Core.Units.Quantity, y: Ansys.Core.Units.Quantity)

Shifts the camera position horizontally or vertically based on x and y quantities.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.MechanicalGraphicsWrapper"></a>

### *class* Graphics.MechanicalGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Wrapper for Graphics in Mechanical.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|------------------------------------------------|------------------------------------------------------------------------------------------|
| [`ExportScreenToImage`](#id14)                 | ExportScreenToImage method.                                                              |
| [`ExportImage`](#Graphics.ExportImage)         | Exports the current graphics display to a 2D image file.                                 |
| [`ExportViewports`](#Graphics.ExportViewports) | Creates a composite of images exported from each open viewport.                          |
| [`Export3D`](#Graphics.Export3D)               | Exports the current Graphics display in a 3d format to a file.                           |
| [`Redraw`](#id8)                               | Forces the scene to redraw its content.                                                  |
| [`Suspend`](#id9)                              | Prevents the scene to redraw until the Resume controller method was called.              |
| [`ForceResume`](#id10)                         | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| [`CreatePixelPoint`](#id11)                    | Creates a point from pixel coordinates (ie. window coordinates).                         |
| [`CreateWorldPoint`](#id12)                    | Create a point from world coordinates.                                                   |
| [`CreateVector3D`](#id13)                      | Create a 3D vector from world coordinates.                                               |

### Properties

| Name | Summary |
|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`Unit`](../../../Mechanical/Graphics/index.md#Graphics.Unit)                                             | Gets the current graphics unit.                           |
| [`ModelViewManager`](ModelViewManager.md#ModelViewManager)                                                | An instance of the ModelViewManager.                      |
| [`KeyframeAnimationUtility`](#Graphics.KeyframeAnimationUtility)                                          | A utility for creating animations based on keyframes.     |
| [`ResultAnimationOptions`](../../../Mechanical/Graphics/ResultAnimationOptions.md#ResultAnimationOptions) | Gets the Global Result Animation options.                 |
| [`SectionPlanes`](../../../Mechanical/Graphics/SectionPlanes.md#SectionPlanes)                            | Returns the collection of section planes used by graphics |
| [`ViewOptions`](../../../Mechanical/Graphics/ViewOptions.md#ViewOptions)                                  | Gets the Graphics View Options.                           |
| [`GlobalLegendSettings`](../../../Mechanical/Graphics/GlobalLegendSettings.md#GlobalLegendSettings)       | Gets the Global Graphics Legend Settings.                 |
| [`Camera`](#Graphics.Camera)                                                                              | Gets the camera.                                          |
| [`Scene`](#id0)                                                                                           | Gets the scene.                                           |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import MechanicalGraphicsWrapper
```

<a id="id3"></a>

## Property detail

<a id="Graphics.Unit"></a>

### *property* Graphics.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current graphics unit.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ModelViewManager"></a>

### *property* Graphics.ModelViewManager *: [Ansys.ACT.Interfaces.Graphics.IModelViewManager](../../Interfaces/Graphics/IModelViewManager.md#IModelViewManager) | [None](https://docs.python.org/3/library/constants.html#None)*

An instance of the ModelViewManager.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.KeyframeAnimationUtility"></a>

### *property* Graphics.KeyframeAnimationUtility *: Ansys.ACT.Common.Graphics.KeyframeAnimationUtility | [None](https://docs.python.org/3/library/constants.html#None)*

A utility for creating animations based on keyframes.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ResultAnimationOptions"></a>

### *property* Graphics.ResultAnimationOptions *: [Ansys.Mechanical.Graphics.ResultAnimationOptions](../../../Mechanical/Graphics/ResultAnimationOptions.md#ResultAnimationOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Result Animation options.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SectionPlanes"></a>

### *property* Graphics.SectionPlanes *: [Ansys.Mechanical.Graphics.SectionPlanes](../../../Mechanical/Graphics/SectionPlanes.md#SectionPlanes) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ViewOptions"></a>

### *property* Graphics.ViewOptions *: [Ansys.Mechanical.Graphics.ViewOptions](../../../Mechanical/Graphics/ViewOptions.md#ViewOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Graphics View Options.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.GlobalLegendSettings"></a>

### *property* Graphics.GlobalLegendSettings *: [Ansys.Mechanical.Graphics.GlobalLegendSettings](../../../Mechanical/Graphics/GlobalLegendSettings.md#GlobalLegendSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Global Graphics Legend Settings.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Camera"></a>

### *property* Graphics.Camera *: [Ansys.ACT.Common.Graphics.MechanicalCameraWrapper](MechanicalCameraWrapper.md#MechanicalCameraWrapper) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the camera.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Scene"></a>

### *property* Graphics.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

## Method detail

<a id="Graphics.ExportScreenToImage"></a>

### Graphics.ExportScreenToImage(filePath: System.String)

ExportScreenToImage method.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ExportImage"></a>

### Graphics.ExportImage(filePath: System.String, formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../Mechanical/Graphics/GraphicsImageExportSettings.md#GraphicsImageExportSettings))

Exports the current graphics display to a 2D image file.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ExportViewports"></a>

### Graphics.ExportViewports(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings](../../../Mechanical/Graphics/GraphicsViewportsExportSettings.md#GraphicsViewportsExportSettings))

Creates a composite of images exported from each open viewport.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Export3D"></a>

### Graphics.Export3D(filePath: System.String, format3d: [Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat](../../../Mechanical/DataModel/Enums/Graphics3DExportFormat.md#Graphics3DExportFormat), settings: [Ansys.Mechanical.Graphics.Graphics3DExportSettings](../../../Mechanical/Graphics/Graphics3DExportSettings.md#Graphics3DExportSettings))

Exports the current Graphics display in a 3d format to a file.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Redraw"></a>

### Graphics.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.Suspend"></a>

### Graphics.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ForceResume"></a>

### Graphics.ForceResume()

Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.CreatePixelPoint"></a>

### Graphics.CreatePixelPoint(x: System.Int32, y: System.Int32)

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="Graphics.CreateWorldPoint"></a>

### Graphics.CreateWorldPoint(x: System.Double, y: System.Double, z: System.Double)

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.CreateVector3D"></a>

### Graphics.CreateVector3D(x: System.Double, y: System.Double, z: System.Double)

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DMGraphicsWrapper"></a>

### *class* Graphics.DMGraphicsWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Wrapper for Graphics in Design Modeler.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------------|------------------------------------------------------------------------------------------|
| [`Redraw`](#id8)               | Forces the scene to redraw its content.                                                  |
| [`Suspend`](#id9)              | Prevents the scene to redraw until the Resume controller method was called.              |
| [`ForceResume`](#id10)         | Forces the scene to resume. Useful in interactive context (console) if a reference on an |
| [`CreatePixelPoint`](#id11)    | Creates a point from pixel coordinates (ie. window coordinates).                         |
| [`CreateWorldPoint`](#id12)    | Create a point from world coordinates.                                                   |
| [`CreateVector3D`](#id13)      | Create a 3D vector from world coordinates.                                               |
| [`ExportScreenToImage`](#id14) | Exports the current Graphics screen to a file.                                           |

### Properties

| Name | Summary |
|-------------------|-------------------|
| [`Scene`](#id0)   | Gets the scene.   |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import DMGraphicsWrapper
```

<a id="id6"></a>

## Property detail

<a id="id0"></a>

### *property* Graphics.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

## Method detail

<a id="id8"></a>

### Graphics.Redraw()

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### Graphics.Suspend()

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### Graphics.ForceResume()

Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### Graphics.CreatePixelPoint(x: System.Int32, y: System.Int32)

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### Graphics.CreateWorldPoint(x: System.Double, y: System.Double, z: System.Double)

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### Graphics.CreateVector3D(x: System.Double, y: System.Double, z: System.Double)

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### Graphics.ExportScreenToImage(filePath: System.String)

Exports the current Graphics screen to a file.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *class* Graphics.ModelViewManager

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ModelViewManager class.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`CreateView`](../../Interfaces/Graphics/index.md#id2)                             | Create a view from current graphics with default naming.     |
| [`CreateView`](../../Interfaces/Graphics/index.md#id2)                             | Create a view from current graphics with the specified name. |
| [`RenameView`](../../Interfaces/Graphics/index.md#id4)                             | Rename the model view specified by viewIndex to newLabel.    |
| [`RenameView`](../../Interfaces/Graphics/index.md#id4)                             | Rename the model view specified  to newLabel.                |
| [`DeleteView`](../../Interfaces/Graphics/index.md#id3)                             | Delete the specified view by name.                           |
| [`DeleteView`](../../Interfaces/Graphics/index.md#id3)                             | Delete the specified view by index.                          |
| [`ApplyModelView`](../../Interfaces/Graphics/index.md#id0)                         | Apply the view specified by index.                           |
| [`ApplyModelView`](../../Interfaces/Graphics/index.md#id0)                         | Apply the view specified by name.                            |
| [`ImportModelViews`](../../Interfaces/Graphics/index.md#Graphics.ImportModelViews) | Import model views from the specified file.                  |
| [`ExportModelViews`](../../Interfaces/Graphics/index.md#Graphics.ExportModelViews) | Export model views to the specified file.                    |
| [`SetViewPorts`](#Graphics.SetViewPorts)                                           | Set the number of viewports displayed.                       |
| [`SetActiveViewPort`](#id23)                                                       | Set the active of viewport.                                  |
| [`SetActiveViewPort`](#id23)                                                       | Active a viewport.                                           |

### Properties

| Name | Summary |
|--------------------------------------------------------------------------------|------------------------------------------|
| [`NumberOfViews`](../../Interfaces/Graphics/index.md#Graphics.NumberOfViews)   | The number of views currently defined.   |
| [`ActiveViewPort`](#Graphics.ActiveViewPort)                                   | ActiveViewPort property.                 |

<a id="id16"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import ModelViewManager
```

<a id="id17"></a>

## Property detail

<a id="Graphics.NumberOfViews"></a>

### *property* Graphics.NumberOfViews *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of views currently defined.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ActiveViewPort"></a>

### *property* Graphics.ActiveViewPort *: Ansys.ACT.Common.Graphics.MechanicalViewPort | [None](https://docs.python.org/3/library/constants.html#None)*

ActiveViewPort property.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

## Method detail

<a id="Graphics.CreateView"></a>

### Graphics.CreateView()

Create a view from current graphics with default naming.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### Graphics.CreateView(viewName: System.String)

Create a view from current graphics with the specified name.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.RenameView"></a>

### Graphics.RenameView(viewIndex: System.Int32, newLabel: System.String)

Rename the model view specified by viewIndex to newLabel.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### Graphics.RenameView(viewLabel: System.String, newLabel: System.String)

Rename the model view specified  to newLabel.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.DeleteView"></a>

### Graphics.DeleteView(viewLabel: System.String)

Delete the specified view by name.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### Graphics.DeleteView(viewIndex: System.Int32)

Delete the specified view by index.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ApplyModelView"></a>

### Graphics.ApplyModelView(viewIndex: System.Int32)

Apply the view specified by index.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### Graphics.ApplyModelView(viewLabel: System.String)

Apply the view specified by name.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ImportModelViews"></a>

### Graphics.ImportModelViews(viewfilepath: System.String)

Import model views from the specified file.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.ExportModelViews"></a>

### Graphics.ExportModelViews(viewfilepath: System.String)

Export model views to the specified file.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SetViewPorts"></a>

### Graphics.SetViewPorts(numViewPorts: System.Int32, horizontal: System.Boolean)

Set the number of viewports displayed.

<!-- !! processed by numpydoc !! -->

<a id="Graphics.SetActiveViewPort"></a>

### Graphics.SetActiveViewPort(winRowIndex: System.Int32, winColIndex: System.Int32)

Set the active of viewport.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### Graphics.SetActiveViewPort(windowsId: System.Int32)

Active a viewport.

<!-- !! processed by numpydoc !! -->
