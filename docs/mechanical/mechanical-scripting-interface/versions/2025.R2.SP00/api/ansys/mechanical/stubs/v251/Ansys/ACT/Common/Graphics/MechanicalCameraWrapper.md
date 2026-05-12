# `MechanicalCameraWrapper`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Common.Graphics.MechanicalCameraWrapper"></a>

#### *class* Ansys.ACT.Common.Graphics.MechanicalCameraWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Wrapper for Camera in Mechanical.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [`GetAsString`](#MechanicalCameraWrapper.GetAsString)                               | Retrieves the view commands as related to the application type as a string.                       |
| [`Pan`](#MechanicalCameraWrapper.Pan)                                               | Shifts the camera position horizontally or vertically based on x and y quantities.                |
| [`Rotate`](#MechanicalCameraWrapper.Rotate)                                         | Rotates the camera about an axis.                                                                 |
| [`SetFit`](#MechanicalCameraWrapper.SetFit)                                         | Fits the view to the specified selection. If null is supplied, fits the view to the entire model. |
| [`SetSpecificViewOrientation`](#MechanicalCameraWrapper.SetSpecificViewOrientation) | Sets a specific view orientation.                                                                 |
| [`Zoom`](#MechanicalCameraWrapper.Zoom)                                             | Zooms in or out on the model.                                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [`FocalPoint`](#MechanicalCameraWrapper.FocalPoint)   | The focal point of the camera (coordinates are in the global coordinate system).             |
| [`SceneHeight`](#MechanicalCameraWrapper.SceneHeight) | Specifies the scene height (in length units) that will be projected and fit to the viewport. |
| [`SceneWidth`](#MechanicalCameraWrapper.SceneWidth)   | Specifies the scene width (in length units) that will be projected and fit to the viewport.  |
| [`UpVector`](#MechanicalCameraWrapper.UpVector)       | The vector pointing up from the focal point.                                                 |
| [`ViewVector`](#MechanicalCameraWrapper.ViewVector)   | The vector pointing from the focal point to the camera.                                      |

<a id="property-detail"></a>

## Property detail

<a id="MechanicalCameraWrapper.FocalPoint"></a>

### *property* MechanicalCameraWrapper.FocalPoint *: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.Point) | [None](https://docs.python.org/3/library/constants.html#None)*

The focal point of the camera (coordinates are in the global coordinate system).

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SceneHeight"></a>

### *property* MechanicalCameraWrapper.SceneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the scene height (in length units) that will be projected and fit to the viewport.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SceneWidth"></a>

### *property* MechanicalCameraWrapper.SceneWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the scene width (in length units) that will be projected and fit to the viewport.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.UpVector"></a>

### *property* MechanicalCameraWrapper.UpVector *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The vector pointing up from the focal point.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.ViewVector"></a>

### *property* MechanicalCameraWrapper.ViewVector *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The vector pointing from the focal point to the camera.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MechanicalCameraWrapper.GetAsString"></a>

### MechanicalCameraWrapper.GetAsString(appType: [Ansys.Mechanical.DataModel.Enums.ApplicationType](../../../Mechanical/DataModel/Enums/ApplicationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ApplicationType))

Retrieves the view commands as related to the application type as a string.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.Pan"></a>

### MechanicalCameraWrapper.Pan(x: Ansys.Core.Units.Quantity, y: Ansys.Core.Units.Quantity)

Shifts the camera position horizontally or vertically based on x and y quantities.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.Rotate"></a>

### MechanicalCameraWrapper.Rotate(angle: [float](https://docs.python.org/3/library/functions.html#float), axis: [Ansys.Mechanical.DataModel.Enums.CameraAxisType](../../../Mechanical/DataModel/Enums/CameraAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CameraAxisType))

Rotates the camera about an axis.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SetFit"></a>

### MechanicalCameraWrapper.SetFit(sel: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Fits the view to the specified selection. If null is supplied, fits the view to the entire model.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.SetSpecificViewOrientation"></a>

### MechanicalCameraWrapper.SetSpecificViewOrientation(type: [Ansys.Mechanical.DataModel.Enums.ViewOrientationType](../../../Mechanical/DataModel/Enums/ViewOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ViewOrientationType))

Sets a specific view orientation.

<!-- !! processed by numpydoc !! -->

<a id="MechanicalCameraWrapper.Zoom"></a>

### MechanicalCameraWrapper.Zoom(zoomVal: [float](https://docs.python.org/3/library/functions.html#float))

Zooms in or out on the model.

<!-- !! processed by numpydoc !! -->

