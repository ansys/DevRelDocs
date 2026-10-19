# `MechanicalCameraWrapper`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.MechanicalCameraWrapper"></a>

#### *class* Ansys.ACT.Common.Graphics.MechanicalCameraWrapper(graphics: [Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper](MechanicalGraphicsWrapper.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper), camera: Ansys.Common.Interop.GraphicsDataModel.IDSCameraItf)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Wrapper for Camera in Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [`GetAsString`](#MechanicalCameraWrapper.GetAsString)                               | Retrieves the view commands as related to the application type as a string.                       |
| [`GetLocation`](#MechanicalCameraWrapper.GetLocation)                               | GetLocation method.                                                                               |
| [`GetTarget`](#MechanicalCameraWrapper.GetTarget)                                   | GetTarget method.                                                                                 |
| [`Pan`](#MechanicalCameraWrapper.Pan)                                               | Shifts the camera position horizontally or vertically based on x and y quantities.                |
| [`Rotate`](#MechanicalCameraWrapper.Rotate)                                         | Rotates the camera about an axis.                                                                 |
| [`RotateView`](#MechanicalCameraWrapper.RotateView)                                 | RotateView method.                                                                                |
| [`SaveUndoRedoView`](#MechanicalCameraWrapper.SaveUndoRedoView)                     | SaveUndoRedoView method.                                                                          |
| [`SetFit`](#MechanicalCameraWrapper.SetFit)                                         | Fits the view to the specified selection. If null is supplied, fits the view to the entire model. |
| [`SetSpecificViewOrientation`](#MechanicalCameraWrapper.SetSpecificViewOrientation) | Sets a specific view orientation.                                                                 |
| [`Zoom`](#MechanicalCameraWrapper.Zoom)                                             | Zooms in or out on the model.                                                                     |
| [`ZoomRectPixels`](#MechanicalCameraWrapper.ZoomRectPixels)                         | ZoomRectPixels method.                                                                            |
| [`ZoomRectSubpixels`](#MechanicalCameraWrapper.ZoomRectSubpixels)                   | ZoomRectSubpixels method.                                                                         |

### Properties

| Name | Description |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [`FocalPoint`](#MechanicalCameraWrapper.FocalPoint)         | The focal point of the camera (coordinates are in the global coordinate system).             |
| [`InternalObject`](#MechanicalCameraWrapper.InternalObject) | InternalObject property.                                                                     |
| [`SceneHeight`](#MechanicalCameraWrapper.SceneHeight)       | Specifies the scene height (in length units) that will be projected and fit to the viewport. |
| [`SceneWidth`](#MechanicalCameraWrapper.SceneWidth)         | Specifies the scene width (in length units) that will be projected and fit to the viewport.  |
| [`UpVector`](#MechanicalCameraWrapper.UpVector)             | The vector pointing up from the focal point.                                                 |
| [`ViewVector`](#MechanicalCameraWrapper.ViewVector)         | The vector pointing from the focal point to the camera.                                      |
| [`ViewportHeight`](#MechanicalCameraWrapper.ViewportHeight) | ViewportHeight property.                                                                     |
| [`ViewportWidth`](#MechanicalCameraWrapper.ViewportWidth)   | ViewportWidth property.                                                                      |
| [`ZoomFactor`](#MechanicalCameraWrapper.ZoomFactor)         | ZoomFactor property.                                                                         |

<a id="property-detail"></a>

## Property detail

<a id="MechanicalCameraWrapper.FocalPoint"></a>

### *property* MechanicalCameraWrapper.FocalPoint *: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The focal point of the camera (coordinates are in the global coordinate system).

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.InternalObject"></a>

### *property* MechanicalCameraWrapper.InternalObject *: Ansys.Common.Interop.GraphicsDataModel.IDSCameraItf | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SceneHeight"></a>

### *property* MechanicalCameraWrapper.SceneHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the scene height (in length units) that will be projected and fit to the viewport.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SceneWidth"></a>

### *property* MechanicalCameraWrapper.SceneWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Specifies the scene width (in length units) that will be projected and fit to the viewport.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.UpVector"></a>

### *property* MechanicalCameraWrapper.UpVector *: [Ansys.ACT.Math.Vector3D](../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The vector pointing up from the focal point.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.ViewVector"></a>

### *property* MechanicalCameraWrapper.ViewVector *: [Ansys.ACT.Math.Vector3D](../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The vector pointing from the focal point to the camera.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.ViewportHeight"></a>

### *property* MechanicalCameraWrapper.ViewportHeight *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ViewportHeight property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.ViewportWidth"></a>

### *property* MechanicalCameraWrapper.ViewportWidth *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ViewportWidth property.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.ZoomFactor"></a>

### *property* MechanicalCameraWrapper.ZoomFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ZoomFactor property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MechanicalCameraWrapper.GetAsString"></a>

### MechanicalCameraWrapper.GetAsString(appType: [Ansys.Mechanical.DataModel.Enums.ApplicationType](../../../Mechanical/DataModel/Enums/ApplicationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ApplicationType)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Retrieves the view commands as related to the application type as a string.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.GetLocation"></a>

### MechanicalCameraWrapper.GetLocation() → Ansys.ACT.Interfaces.Graphics.IWorldPoint

### MechanicalCameraWrapper.GetLocation() → Ansys.ACT.Interfaces.Graphics.IWorldPoint

GetLocation method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.GetTarget"></a>

### MechanicalCameraWrapper.GetTarget() → Ansys.ACT.Interfaces.Graphics.IWorldPoint

### MechanicalCameraWrapper.GetTarget() → Ansys.ACT.Interfaces.Graphics.IWorldPoint

GetTarget method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.Pan"></a>

### MechanicalCameraWrapper.Pan(x: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), y: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Shifts the camera position horizontally or vertically based on x and y quantities.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.Rotate"></a>

### MechanicalCameraWrapper.Rotate(angle: [float](https://docs.python.org/3/builtins/functions.html#float), axis: [Ansys.Mechanical.DataModel.Enums.CameraAxisType](../../../Mechanical/DataModel/Enums/CameraAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CameraAxisType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Rotates the camera about an axis.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.RotateView"></a>

### MechanicalCameraWrapper.RotateView(angle: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

RotateView method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SaveUndoRedoView"></a>

### MechanicalCameraWrapper.SaveUndoRedoView(forcesave: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SaveUndoRedoView method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SetFit"></a>

### MechanicalCameraWrapper.SetFit(sel: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Fits the view to the specified selection. If null is supplied, fits the view to the entire model.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SetSpecificViewOrientation"></a>

### MechanicalCameraWrapper.SetSpecificViewOrientation(type: [Ansys.Mechanical.DataModel.Enums.ViewOrientationType](../../../Mechanical/DataModel/Enums/ViewOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ViewOrientationType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets a specific view orientation.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.Zoom"></a>

### MechanicalCameraWrapper.Zoom(zoomVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Zooms in or out on the model.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.ZoomRectPixels"></a>

### MechanicalCameraWrapper.ZoomRectPixels(min_x: [int](https://docs.python.org/3/builtins/functions.html#int), min_y: [int](https://docs.python.org/3/builtins/functions.html#int), max_x: [int](https://docs.python.org/3/builtins/functions.html#int), max_y: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ZoomRectPixels method.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.ZoomRectSubpixels"></a>

### MechanicalCameraWrapper.ZoomRectSubpixels(min_x: [float](https://docs.python.org/3/builtins/functions.html#float), min_y: [float](https://docs.python.org/3/builtins/functions.html#float), max_x: [float](https://docs.python.org/3/builtins/functions.html#float), max_y: [float](https://docs.python.org/3/builtins/functions.html#float)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ZoomRectSubpixels method.

<!-- !! processed by numpydoc !! -->

