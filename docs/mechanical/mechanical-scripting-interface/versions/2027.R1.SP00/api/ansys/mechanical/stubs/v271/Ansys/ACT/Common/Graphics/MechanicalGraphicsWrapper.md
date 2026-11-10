# `MechanicalGraphicsWrapper`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper"></a>

#### *class* Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper(mechanicalApi: Ansys.ACT.Mechanical.MechanicalAPI, graphics: Ansys.Common.Interop.Gfx.IDSGraphics)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Wrapper for Graphics in Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ComputeHotspot`](#MechanicalGraphicsWrapper.ComputeHotspot)                                           | Computes hotspots using the specified criteria and returns the hotspot result with the information about local maximum/minimum and nodes within the computation domain.   |
| [`CreateAndOpenDraw3DContext`](#MechanicalGraphicsWrapper.CreateAndOpenDraw3DContext)                   | CreateAndOpenDraw3DContext method.                                                                                                                                        |
| [`CreatePixelPoint`](#MechanicalGraphicsWrapper.CreatePixelPoint)                                       | Creates a point from pixel coordinates (ie. window coordinates).                                                                                                          |
| [`CreateVector3D`](#MechanicalGraphicsWrapper.CreateVector3D)                                           | Create a 3D vector from world coordinates.                                                                                                                                |
| [`CreateWorldPoint`](#MechanicalGraphicsWrapper.CreateWorldPoint)                                       | Create a point from world coordinates.                                                                                                                                    |
| [`DisplayResultsSubscopedToSelection`](#MechanicalGraphicsWrapper.DisplayResultsSubscopedToSelection)   | Displays the result mesh restricted to the current selection, using the specified subscoping type. (Default is NoExtension)                                               |
| [`DrawText2D`](#MechanicalGraphicsWrapper.DrawText2D)                                                   | DrawText2D method.                                                                                                                                                        |
| [`Export3D`](#MechanicalGraphicsWrapper.Export3D)                                                       | Exports the current Graphics display in a 3d format to a file.                                                                                                            |
| [`ExportImage`](#MechanicalGraphicsWrapper.ExportImage)                                                 | Exports the current graphics display to a 2D image file.                                                                                                                  |
| [`ExportImageToClipboard`](#MechanicalGraphicsWrapper.ExportImageToClipboard)                           | ExportImageToClipboard method.                                                                                                                                            |
| [`ExportScreenToImage`](#MechanicalGraphicsWrapper.ExportScreenToImage)                                 | ExportScreenToImage method.                                                                                                                                               |
| [`ExportViewportChart`](#MechanicalGraphicsWrapper.ExportViewportChart)                                 | Exports the specified viewport's chart to file.                                                                                                                           |
| [`ExportViewportImage`](#MechanicalGraphicsWrapper.ExportViewportImage)                                 | Exports the current graphics display to a 2D image file.                                                                                                                  |
| [`ExportViewports`](#MechanicalGraphicsWrapper.ExportViewports)                                         | Creates a composite of images exported from each open viewport.                                                                                                           |
| [`ForceResume`](#MechanicalGraphicsWrapper.ForceResume)                                                 | Forces the scene to resume. Useful in interactive context (console) if a reference on an                                                                                  |
| [`FullRedraw`](#MechanicalGraphicsWrapper.FullRedraw)                                                   | FullRedraw method.                                                                                                                                                        |
| [`GetScenegraphForActiveObject`](#MechanicalGraphicsWrapper.GetScenegraphForActiveObject)               | GetScenegraphForActiveObject method.                                                                                                                                      |
| [`ImportLegend`](#MechanicalGraphicsWrapper.ImportLegend)                                               | ImportLegend method.                                                                                                                                                      |
| [`IsCurrentObjectAResult`](#MechanicalGraphicsWrapper.IsCurrentObjectAResult)                           | IsCurrentObjectAResult method.                                                                                                                                            |
| [`IsFESelectionOn`](#MechanicalGraphicsWrapper.IsFESelectionOn)                                         | IsFESelectionOn method.                                                                                                                                                   |
| [`IsSubscopingOn`](#MechanicalGraphicsWrapper.IsSubscopingOn)                                           | IsSubscopingOn method.                                                                                                                                                    |
| [`LineTo2D`](#MechanicalGraphicsWrapper.LineTo2D)                                                       | LineTo2D method.                                                                                                                                                          |
| [`MoveTo2D`](#MechanicalGraphicsWrapper.MoveTo2D)                                                       | MoveTo2D method.                                                                                                                                                          |
| [`PixelToWorld`](#MechanicalGraphicsWrapper.PixelToWorld)                                               | PixelToWorld method.                                                                                                                                                      |
| [`Redraw`](#MechanicalGraphicsWrapper.Redraw)                                                           | Forces the scene to redraw its content.                                                                                                                                   |
| [`RemoveContext`](#MechanicalGraphicsWrapper.RemoveContext)                                             | RemoveContext method.                                                                                                                                                     |
| [`ResetSubscopedResults`](#MechanicalGraphicsWrapper.ResetSubscopedResults)                             | Clears the active subscoping selection and restores the full result display.                                                                                              |
| [`Suspend`](#MechanicalGraphicsWrapper.Suspend)                                                         | Prevents the scene to redraw until the Resume controller method was called.                                                                                               |
| [`VerifyLocaleStringsAreAllRenderable`](#MechanicalGraphicsWrapper.VerifyLocaleStringsAreAllRenderable) | Performs a test to see if all characters present in all locale dsstringtable.xml files can be found via DSGStream's TextEngine                                            |
| [`WorldToPixel`](#MechanicalGraphicsWrapper.WorldToPixel)                                               | WorldToPixel method.                                                                                                                                                      |
| [`add_ExtendObjectsToDisplay`](#MechanicalGraphicsWrapper.add_ExtendObjectsToDisplay)                   | add_ExtendObjectsToDisplay method.                                                                                                                                        |
| [`remove_ExtendObjectsToDisplay`](#MechanicalGraphicsWrapper.remove_ExtendObjectsToDisplay)             | remove_ExtendObjectsToDisplay method.                                                                                                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`AcceleratedGraphics`](#MechanicalGraphicsWrapper.AcceleratedGraphics)                                           | Gets or sets the Accelerated Graphics Preference                                     |
| [`AdvancedRenderingIsSupported`](#MechanicalGraphicsWrapper.AdvancedRenderingIsSupported)                         | AdvancedRenderingIsSupported property.                                               |
| [`Camera`](#MechanicalGraphicsWrapper.Camera)                                                                     | Gets the camera.                                                                     |
| [`CanPlotDisplacementTraces`](#MechanicalGraphicsWrapper.CanPlotDisplacementTraces)                               | CanPlotDisplacementTraces property.                                                  |
| [`Color`](Color.md#Color)                                                                                         | Color property.                                                                      |
| [`DepthTest`](#MechanicalGraphicsWrapper.DepthTest)                                                               | DepthTest property.                                                                  |
| [`DrawContexts`](#MechanicalGraphicsWrapper.DrawContexts)                                                         | DrawContexts property.                                                               |
| [`GlobalLegendSettings`](#MechanicalGraphicsWrapper.GlobalLegendSettings)                                         | Gets the Global Graphics Legend Settings.                                            |
| [`ImageCompare`](#MechanicalGraphicsWrapper.ImageCompare)                                                         | ImageCompare property.                                                               |
| [`ImageExportRescaleGraphOverlayPreference`](#MechanicalGraphicsWrapper.ImageExportRescaleGraphOverlayPreference) | Gets or sets the Image Export Rescale Graph Overlay Preference                       |
| [`InternalObject`](#MechanicalGraphicsWrapper.InternalObject)                                                     | InternalObject property.                                                             |
| [`KeyframeAnimationUtility`](#MechanicalGraphicsWrapper.KeyframeAnimationUtility)                                 | A utility for creating animations based on keyframes.                                |
| [`LabelManager`](#MechanicalGraphicsWrapper.LabelManager)                                                         | Manages labels and the creation and deletion of them.                                |
| [`LineWeight`](#MechanicalGraphicsWrapper.LineWeight)                                                             | LineWeight property.                                                                 |
| [`ModelViewManager`](#MechanicalGraphicsWrapper.ModelViewManager)                                                 | An instance of the ModelViewManager.                                                 |
| [`OverlayManager`](#MechanicalGraphicsWrapper.OverlayManager)                                                     | Manages overlays and the creation and deletion of them.                              |
| [`PerformanceManager`](#MechanicalGraphicsWrapper.PerformanceManager)                                             | Exposes Mechanical Graphics' performance and memory management strategy and controls |
| [`ResultAnimationOptions`](#MechanicalGraphicsWrapper.ResultAnimationOptions)                                     | Gets the Global Result Animation options.                                            |
| [`RotateAngle`](#MechanicalGraphicsWrapper.RotateAngle)                                                           | RotateAngle property.                                                                |
| [`Scene`](#MechanicalGraphicsWrapper.Scene)                                                                       | Gets the scene.                                                                      |
| [`SectionPlanes`](#MechanicalGraphicsWrapper.SectionPlanes)                                                       | Returns the collection of section planes used by graphics                            |
| [`Translucency`](#MechanicalGraphicsWrapper.Translucency)                                                         | Translucency property.                                                               |
| [`Unit`](#MechanicalGraphicsWrapper.Unit)                                                                         | Gets the current graphics unit.                                                      |
| [`ViewOptions`](#MechanicalGraphicsWrapper.ViewOptions)                                                           | Gets the Graphics View Options.                                                      |
| [`WebData`](#MechanicalGraphicsWrapper.WebData)                                                                   | WebData property.                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="MechanicalGraphicsWrapper.AcceleratedGraphics"></a>

### *property* MechanicalGraphicsWrapper.AcceleratedGraphics *: Ansys.Mechanical.DataModel.Enums.AccGraphicsPreference | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Accelerated Graphics Preference

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.AdvancedRenderingIsSupported"></a>

### *property* MechanicalGraphicsWrapper.AdvancedRenderingIsSupported *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AdvancedRenderingIsSupported property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Camera"></a>

### *property* MechanicalGraphicsWrapper.Camera *: [Ansys.ACT.Common.Graphics.MechanicalCameraWrapper](MechanicalCameraWrapper.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.MechanicalCameraWrapper) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the camera.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CanPlotDisplacementTraces"></a>

### *property* MechanicalGraphicsWrapper.CanPlotDisplacementTraces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CanPlotDisplacementTraces property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Color"></a>

### *property* MechanicalGraphicsWrapper.Color *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Color property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.DepthTest"></a>

### *property* MechanicalGraphicsWrapper.DepthTest *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DepthTest property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.DrawContexts"></a>

### *property* MechanicalGraphicsWrapper.DrawContexts *: List[Ansys.ACT.Interfaces.Graphics.IDrawContext] | [None](https://docs.python.org/3/builtins/constants.html#None)*

DrawContexts property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.GlobalLegendSettings"></a>

### *property* MechanicalGraphicsWrapper.GlobalLegendSettings *: [Ansys.Mechanical.Graphics.GlobalLegendSettings](../../../Mechanical/Graphics/GlobalLegendSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.GlobalLegendSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Global Graphics Legend Settings.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ImageCompare"></a>

### *property* MechanicalGraphicsWrapper.ImageCompare *: Ansys.ACT.Common.Graphics.ImageCompare | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImageCompare property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ImageExportRescaleGraphOverlayPreference"></a>

### *property* MechanicalGraphicsWrapper.ImageExportRescaleGraphOverlayPreference *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Image Export Rescale Graph Overlay Preference

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.InternalObject"></a>

### *property* MechanicalGraphicsWrapper.InternalObject *: Ansys.Common.Interop.Gfx.IDSGraphics | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.KeyframeAnimationUtility"></a>

### *property* MechanicalGraphicsWrapper.KeyframeAnimationUtility *: Ansys.ACT.Common.Graphics.KeyframeAnimationUtility | [None](https://docs.python.org/3/builtins/constants.html#None)*

A utility for creating animations based on keyframes.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.LabelManager"></a>

### *property* MechanicalGraphicsWrapper.LabelManager *: [Ansys.Mechanical.Graphics.Labels.LabelManager](../../../Mechanical/Graphics/Labels/LabelManager.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Labels.LabelManager) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Manages labels and the creation and deletion of them.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.LineWeight"></a>

### *property* MechanicalGraphicsWrapper.LineWeight *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LineWeight property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ModelViewManager"></a>

### *property* MechanicalGraphicsWrapper.ModelViewManager *: [Ansys.ACT.Interfaces.Graphics.IModelViewManager](../../Interfaces/Graphics/IModelViewManager.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Graphics.IModelViewManager) | [None](https://docs.python.org/3/builtins/constants.html#None)*

An instance of the ModelViewManager.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.OverlayManager"></a>

### *property* MechanicalGraphicsWrapper.OverlayManager *: Ansys.Mechanical.Graphics.OverlayManager | [None](https://docs.python.org/3/builtins/constants.html#None)*

Manages overlays and the creation and deletion of them.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.PerformanceManager"></a>

### *property* MechanicalGraphicsWrapper.PerformanceManager *: Ansys.Mechanical.Graphics.PerformanceManager | [None](https://docs.python.org/3/builtins/constants.html#None)*

Exposes Mechanical Graphics' performance and memory management strategy and controls

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ResultAnimationOptions"></a>

### *property* MechanicalGraphicsWrapper.ResultAnimationOptions *: [Ansys.Mechanical.Graphics.ResultAnimationOptions](../../../Mechanical/Graphics/ResultAnimationOptions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.ResultAnimationOptions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Global Result Animation options.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.RotateAngle"></a>

### *property* MechanicalGraphicsWrapper.RotateAngle *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RotateAngle property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Scene"></a>

### *property* MechanicalGraphicsWrapper.Scene *: Ansys.ACT.Interfaces.Graphics.IGraphicsCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scene.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.SectionPlanes"></a>

### *property* MechanicalGraphicsWrapper.SectionPlanes *: [Ansys.Mechanical.Graphics.SectionPlanes](../../../Mechanical/Graphics/SectionPlanes.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlanes) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Translucency"></a>

### *property* MechanicalGraphicsWrapper.Translucency *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Translucency property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Unit"></a>

### *property* MechanicalGraphicsWrapper.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current graphics unit.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ViewOptions"></a>

### *property* MechanicalGraphicsWrapper.ViewOptions *: [Ansys.Mechanical.Graphics.ViewOptions](../../../Mechanical/Graphics/ViewOptions.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.ViewOptions) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Graphics View Options.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.WebData"></a>

### *property* MechanicalGraphicsWrapper.WebData *: Ansys.ACT.Common.Graphics.GraphicsWebData | [None](https://docs.python.org/3/builtins/constants.html#None)*

WebData property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MechanicalGraphicsWrapper.ComputeHotspot"></a>

### MechanicalGraphicsWrapper.ComputeHotspot(resultObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), criterion: Ansys.ACT.Mechanical.Hotspots.HotspotCriterion) → Ansys.ACT.Mechanical.Hotspots.HotspotResult

Computes hotspots using the specified criteria and returns the hotspot result with the information about local maximum/minimum and nodes within the computation domain.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateAndOpenDraw3DContext"></a>

### MechanicalGraphicsWrapper.CreateAndOpenDraw3DContext() → Ansys.ACT.Interfaces.Graphics.IDraw3DContext

CreateAndOpenDraw3DContext method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreatePixelPoint"></a>

### MechanicalGraphicsWrapper.CreatePixelPoint(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.Graphics.IPixelPoint

Creates a point from pixel coordinates (ie. window coordinates).

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateVector3D"></a>

### MechanicalGraphicsWrapper.CreateVector3D(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → Ansys.ACT.Interfaces.Graphics.IVector3D

Create a 3D vector from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.CreateWorldPoint"></a>

### MechanicalGraphicsWrapper.CreateWorldPoint(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → Ansys.ACT.Interfaces.Graphics.IWorldPoint

Create a point from world coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.DisplayResultsSubscopedToSelection"></a>

### MechanicalGraphicsWrapper.DisplayResultsSubscopedToSelection(selection: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo), subs_sel_type: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.SubscopingSelectionType](../../../Mechanical/DataModel/MechanicalEnums/Common/SubscopingSelectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Common.SubscopingSelectionType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Displays the result mesh restricted to the current selection, using the specified subscoping type. (Default is NoExtension)

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.DrawText2D"></a>

### MechanicalGraphicsWrapper.DrawText2D(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int), text: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

DrawText2D method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Export3D"></a>

### MechanicalGraphicsWrapper.Export3D(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format3d: [Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat](../../../Mechanical/DataModel/Enums/Graphics3DExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.Graphics3DExportFormat), settings: [Ansys.Mechanical.Graphics.Graphics3DExportSettings](../../../Mechanical/Graphics/Graphics3DExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Graphics3DExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports the current Graphics display in a 3d format to a file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportImage"></a>

### MechanicalGraphicsWrapper.ExportImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../Mechanical/Graphics/GraphicsImageExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.GraphicsImageExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports the current graphics display to a 2D image file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportImageToClipboard"></a>

### MechanicalGraphicsWrapper.ExportImageToClipboard(settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../Mechanical/Graphics/GraphicsImageExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.GraphicsImageExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportImageToClipboard method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportScreenToImage"></a>

### MechanicalGraphicsWrapper.ExportScreenToImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportScreenToImage method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportViewportChart"></a>

### MechanicalGraphicsWrapper.ExportViewportChart(viewportIndex: [int](https://docs.python.org/3/builtins/functions.html#int), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), width: [int](https://docs.python.org/3/builtins/functions.html#int), height: [int](https://docs.python.org/3/builtins/functions.html#int), formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports the specified viewport's chart to file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportViewportImage"></a>

### MechanicalGraphicsWrapper.ExportViewportImage(viewportIndex: [int](https://docs.python.org/3/builtins/functions.html#int), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), formatImage: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsImageExportSettings](../../../Mechanical/Graphics/GraphicsImageExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.GraphicsImageExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Exports the current graphics display to a 2D image file.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ExportViewports"></a>

### MechanicalGraphicsWrapper.ExportViewports(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat](../../../Mechanical/DataModel/Enums/GraphicsImageExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsImageExportFormat), settings: [Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings](../../../Mechanical/Graphics/GraphicsViewportsExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.GraphicsViewportsExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Creates a composite of images exported from each open viewport.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ForceResume"></a>

### MechanicalGraphicsWrapper.ForceResume() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Forces the scene to resume. Useful in interactive context (console) if a reference on an
operation has been lost.
```

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.FullRedraw"></a>

### MechanicalGraphicsWrapper.FullRedraw() → [None](https://docs.python.org/3/builtins/constants.html#None)

FullRedraw method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.GetScenegraphForActiveObject"></a>

### MechanicalGraphicsWrapper.GetScenegraphForActiveObject() → Ansys.Mechanical.Scenegraph.Node

GetScenegraphForActiveObject method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ImportLegend"></a>

### MechanicalGraphicsWrapper.ImportLegend(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Mechanical.Graphics.Tools.LegendSettings](../../../Mechanical/Graphics/Tools/LegendSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Tools.LegendSettings)

ImportLegend method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.IsCurrentObjectAResult"></a>

### MechanicalGraphicsWrapper.IsCurrentObjectAResult() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsCurrentObjectAResult method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.IsFESelectionOn"></a>

### MechanicalGraphicsWrapper.IsFESelectionOn() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsFESelectionOn method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.IsSubscopingOn"></a>

### MechanicalGraphicsWrapper.IsSubscopingOn() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsSubscopingOn method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.LineTo2D"></a>

### MechanicalGraphicsWrapper.LineTo2D(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

LineTo2D method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.MoveTo2D"></a>

### MechanicalGraphicsWrapper.MoveTo2D(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

MoveTo2D method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.PixelToWorld"></a>

### MechanicalGraphicsWrapper.PixelToWorld(xy: Iterable[[int](https://docs.python.org/3/builtins/functions.html#int)]) → [float](https://docs.python.org/3/builtins/functions.html#float)

### MechanicalGraphicsWrapper.PixelToWorld(x: [int](https://docs.python.org/3/builtins/functions.html#int), y: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

PixelToWorld method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Redraw"></a>

### MechanicalGraphicsWrapper.Redraw() → [None](https://docs.python.org/3/builtins/constants.html#None)

Forces the scene to redraw its content.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.RemoveContext"></a>

### MechanicalGraphicsWrapper.RemoveContext(context: Ansys.ACT.Interfaces.Graphics.IDrawContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

RemoveContext method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.ResetSubscopedResults"></a>

### MechanicalGraphicsWrapper.ResetSubscopedResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the active subscoping selection and restores the full result display.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.Suspend"></a>

### MechanicalGraphicsWrapper.Suspend() → Ansys.ACT.Interfaces.Graphics.ISuspendController

Prevents the scene to redraw until the Resume controller method was called.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.VerifyLocaleStringsAreAllRenderable"></a>

### MechanicalGraphicsWrapper.VerifyLocaleStringsAreAllRenderable() → [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [bool](https://docs.python.org/3/builtins/functions.html#bool)]

Performs a test to see if all characters present in all locale dsstringtable.xml files can be found via DSGStream's TextEngine

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.WorldToPixel"></a>

### MechanicalGraphicsWrapper.WorldToPixel(pt: Iterable[[float](https://docs.python.org/3/builtins/functions.html#float)]) → [int](https://docs.python.org/3/builtins/functions.html#int)

### MechanicalGraphicsWrapper.WorldToPixel(x: [float](https://docs.python.org/3/builtins/functions.html#float), y: [float](https://docs.python.org/3/builtins/functions.html#float), z: [float](https://docs.python.org/3/builtins/functions.html#float)) → [int](https://docs.python.org/3/builtins/functions.html#int)

WorldToPixel method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.add_ExtendObjectsToDisplay"></a>

### MechanicalGraphicsWrapper.add_ExtendObjectsToDisplay(value: System.EventHandler[Ansys.ACT.Common.Graphics.ExtendObjectsToDisplayArgs]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_ExtendObjectsToDisplay method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalGraphicsWrapper.remove_ExtendObjectsToDisplay"></a>

### MechanicalGraphicsWrapper.remove_ExtendObjectsToDisplay(value: System.EventHandler[Ansys.ACT.Common.Graphics.ExtendObjectsToDisplayArgs]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_ExtendObjectsToDisplay method.

<!-- !! processed by numpydoc !! -->

