# `RotatingForce`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotatingForce"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotatingForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RotatingForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RotatingForce.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RotatingForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RotatingForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RotatingForce.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#RotatingForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RotatingForce.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RotatingForce.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RotatingForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#RotatingForce.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RotatingForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RotatingForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RotatingForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#RotatingForce.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#RotatingForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RotatingForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RotatingForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#RotatingForce.Axis)                                                 | Gets or sets the Axis.                                        |
| [`AxisComponentX`](#RotatingForce.AxisComponentX)                             | Gets the AxisComponentX.                                      |
| [`AxisComponentY`](#RotatingForce.AxisComponentY)                             | Gets the AxisComponentY.                                      |
| [`AxisComponentZ`](#RotatingForce.AxisComponentZ)                             | Gets the AxisComponentZ.                                      |
| [`AxisLocationX`](#RotatingForce.AxisLocationX)                               | Gets the AxisLocationX.                                       |
| [`AxisLocationY`](#RotatingForce.AxisLocationY)                               | Gets the AxisLocationY.                                       |
| [`AxisLocationZ`](#RotatingForce.AxisLocationZ)                               | Gets the AxisLocationZ.                                       |
| [`CalculatedFromUnbalancedMass`](#RotatingForce.CalculatedFromUnbalancedMass) | Gets or sets the CalculatedFromUnbalancedMass.                |
| [`Children`](#RotatingForce.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#RotatingForce.Comments)                                         | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#RotatingForce.CoordinateSystem)                         | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#RotatingForce.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#RotatingForce.DefineBy)                                         | Gets or sets the DefineBy.                                    |
| [`Figures`](#RotatingForce.Figures)                                           | Gets the list of associated figures.                          |
| [`HitPointLocationX`](#RotatingForce.HitPointLocationX)                       | Gets the HitPointLocationX.                                   |
| [`HitPointLocationY`](#RotatingForce.HitPointLocationY)                       | Gets the HitPointLocationY.                                   |
| [`HitPointLocationZ`](#RotatingForce.HitPointLocationZ)                       | Gets the HitPointLocationZ.                                   |
| [`HitPointNodeId`](#RotatingForce.HitPointNodeId)                             | Gets the HitPointNodeId.                                      |
| [`HitPointRemotePointSelection`](#RotatingForce.HitPointRemotePointSelection) | Gets or sets the HitPointRemotePointSelection.                |
| [`HitPointSelection`](#RotatingForce.HitPointSelection)                       | Gets or sets the HitPointSelection.                           |
| [`Images`](#RotatingForce.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#RotatingForce.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`Location`](#RotatingForce.Location)                                         | Gets or sets the Location.                                    |
| [`Mass`](#RotatingForce.Mass)                                                 | Gets or sets the Mass.                                        |
| [`PhaseAngle`](#RotatingForce.PhaseAngle)                                     | Gets or sets the PhaseAngle.                                  |
| [`Properties`](#RotatingForce.Properties)                                     | Gets the list of properties for this object.                  |
| [`ReadOnly`](#RotatingForce.ReadOnly)                                         | Gets or sets the ReadOnly.                                    |
| [`RemotePointSelection`](#RotatingForce.RemotePointSelection)                 | Gets or sets the RemotePointSelection.                        |
| [`RotatingRadius`](#RotatingForce.RotatingRadius)                             | Gets or sets the RotatingRadius.                              |
| [`SharedRefBody`](#RotatingForce.SharedRefBody)                               | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#RotatingForce.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`SynchronousRatio`](#RotatingForce.SynchronousRatio)                         | Gets or sets the SynchronousRatio.                            |
| [`UnbalancedForceMagnitude`](#RotatingForce.UnbalancedForceMagnitude)         | Gets or sets the UnbalancedForceMagnitude.                    |
| [`VisibleProperties`](#RotatingForce.VisibleProperties)                       | Gets the list of properties that are visible for this object. |
| [`XCoordinate`](#RotatingForce.XCoordinate)                                   | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#RotatingForce.YCoordinate)                                   | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#RotatingForce.ZCoordinate)                                   | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="RotatingForce.Axis"></a>

### *property* RotatingForce.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Math.BoundVector) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisComponentX"></a>

### *property* RotatingForce.AxisComponentX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisComponentX.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisComponentY"></a>

### *property* RotatingForce.AxisComponentY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisComponentY.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisComponentZ"></a>

### *property* RotatingForce.AxisComponentZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisComponentZ.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisLocationX"></a>

### *property* RotatingForce.AxisLocationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisLocationX.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisLocationY"></a>

### *property* RotatingForce.AxisLocationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisLocationY.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AxisLocationZ"></a>

### *property* RotatingForce.AxisLocationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CalculatedFromUnbalancedMass"></a>

### *property* RotatingForce.CalculatedFromUnbalancedMass *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculatedFromUnbalancedMass.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Children"></a>

### *property* RotatingForce.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Comments"></a>

### *property* RotatingForce.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CoordinateSystem"></a>

### *property* RotatingForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.DataModelObjectCategory"></a>

### *property* RotatingForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.DefineBy"></a>

### *property* RotatingForce.DefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Figures"></a>

### *property* RotatingForce.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointLocationX"></a>

### *property* RotatingForce.HitPointLocationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HitPointLocationX.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointLocationY"></a>

### *property* RotatingForce.HitPointLocationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HitPointLocationY.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointLocationZ"></a>

### *property* RotatingForce.HitPointLocationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HitPointLocationZ.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointNodeId"></a>

### *property* RotatingForce.HitPointNodeId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HitPointNodeId.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointRemotePointSelection"></a>

### *property* RotatingForce.HitPointRemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HitPointRemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.HitPointSelection"></a>

### *property* RotatingForce.HitPointSelection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HitPointSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Images"></a>

### *property* RotatingForce.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.InternalObject"></a>

### *property* RotatingForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Location"></a>

### *property* RotatingForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Mass"></a>

### *property* RotatingForce.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PhaseAngle"></a>

### *property* RotatingForce.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Properties"></a>

### *property* RotatingForce.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ReadOnly"></a>

### *property* RotatingForce.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.RemotePointSelection"></a>

### *property* RotatingForce.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.RotatingRadius"></a>

### *property* RotatingForce.RotatingRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotatingRadius.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.SharedRefBody"></a>

### *property* RotatingForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Suppressed"></a>

### *property* RotatingForce.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.SynchronousRatio"></a>

### *property* RotatingForce.SynchronousRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SynchronousRatio.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.UnbalancedForceMagnitude"></a>

### *property* RotatingForce.UnbalancedForceMagnitude *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UnbalancedForceMagnitude.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.VisibleProperties"></a>

### *property* RotatingForce.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.XCoordinate"></a>

### *property* RotatingForce.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.YCoordinate"></a>

### *property* RotatingForce.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.ZCoordinate"></a>

### *property* RotatingForce.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotatingForce.Activate"></a>

### RotatingForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AddComment"></a>

### RotatingForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AddFigure"></a>

### RotatingForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.AddImage"></a>

### RotatingForce.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CopyTo"></a>

### RotatingForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.CreateParameter"></a>

### RotatingForce.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Delete"></a>

### RotatingForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.Duplicate"></a>

### RotatingForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetChildren"></a>

### RotatingForce.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GetParameter"></a>

### RotatingForce.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GroupAllSimilarChildren"></a>

### RotatingForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.GroupSimilarObjects"></a>

### RotatingForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PromoteToNamedSelection"></a>

### RotatingForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PropertyByAPIName"></a>

### RotatingForce.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.PropertyByName"></a>

### RotatingForce.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotatingForce.RemoveParameter"></a>

### RotatingForce.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

