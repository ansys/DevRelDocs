# MechanicalCameraWrapper

### *class* MechanicalCameraWrapper

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Wrapper for Camera in Mechanical.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Rotate`](#MechanicalCameraWrapper.Rotate)                                         | Rotates the camera about an axis.                                                                 |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [`SetSpecificViewOrientation`](#MechanicalCameraWrapper.SetSpecificViewOrientation) | Sets a specific view orientation.                                                                 |
| [`SetFit`](#MechanicalCameraWrapper.SetFit)                                         | Fits the view to the specified selection. If null is supplied, fits the view to the entire model. |
| [`GetAsString`](#MechanicalCameraWrapper.GetAsString)                               | Retrieves the view commands as related to the application type as a string.                       |
| [`Zoom`](#MechanicalCameraWrapper.Zoom)                                             | Zooms in or out on the model.                                                                     |
| [`Pan`](#MechanicalCameraWrapper.Pan)                                               | Shifts the camera position horizontally or vertically based on x and y quantities.                |

### Properties

| [`FocalPoint`](#MechanicalCameraWrapper.FocalPoint)   | The focal point of the camera (coordinates are in the global coordinate system).             |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [`UpVector`](#MechanicalCameraWrapper.UpVector)       | The vector pointing up from the focal point.                                                 |
| [`ViewVector`](#MechanicalCameraWrapper.ViewVector)   | The vector pointing from the focal point to the camera.                                      |
| [`SceneHeight`](#MechanicalCameraWrapper.SceneHeight) | Specifies the scene height (in length units) that will be projected and fit to the viewport. |
| [`SceneWidth`](#MechanicalCameraWrapper.SceneWidth)   | Specifies the scene width (in length units) that will be projected and fit to the viewport.  |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Common.Graphics import MechanicalCameraWrapper
```

## Property detail

### *property* MechanicalCameraWrapper.FocalPoint *: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#Point) | [None](https://docs.python.org/3/library/constants.html#None)*

The focal point of the camera (coordinates are in the global coordinate system).

<!-- !! processed by numpydoc !! -->

### *property* MechanicalCameraWrapper.UpVector *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The vector pointing up from the focal point.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalCameraWrapper.ViewVector *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

The vector pointing from the focal point to the camera.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalCameraWrapper.SceneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the scene height (in length units) that will be projected and fit to the viewport.

<!-- !! processed by numpydoc !! -->

### *property* MechanicalCameraWrapper.SceneWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Specifies the scene width (in length units) that will be projected and fit to the viewport.

<!-- !! processed by numpydoc !! -->

## Method detail

### MechanicalCameraWrapper.Rotate(angle: System.Double, axis: [Ansys.Mechanical.DataModel.Enums.CameraAxisType](../../../Mechanical/DataModel/Enums/CameraAxisType.md#CameraAxisType))

Rotates the camera about an axis.

<!-- !! processed by numpydoc !! -->

### MechanicalCameraWrapper.SetSpecificViewOrientation(type: [Ansys.Mechanical.DataModel.Enums.ViewOrientationType](../../../Mechanical/DataModel/Enums/ViewOrientationType.md#ViewOrientationType))

Sets a specific view orientation.

<!-- !! processed by numpydoc !! -->

### MechanicalCameraWrapper.SetFit(sel: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Fits the view to the specified selection. If null is supplied, fits the view to the entire model.

<!-- !! processed by numpydoc !! -->

### MechanicalCameraWrapper.GetAsString(appType: [Ansys.Mechanical.DataModel.Enums.ApplicationType](../../../Mechanical/DataModel/Enums/ApplicationType.md#ApplicationType))

Retrieves the view commands as related to the application type as a string.

<!-- !! processed by numpydoc !! -->

### MechanicalCameraWrapper.Zoom(zoomVal: System.Double)

Zooms in or out on the model.

<!-- !! processed by numpydoc !! -->

### MechanicalCameraWrapper.Pan(x: Ansys.Core.Units.Quantity, y: Ansys.Core.Units.Quantity)

Shifts the camera position horizontally or vertically based on x and y quantities.

<!-- !! processed by numpydoc !! -->
