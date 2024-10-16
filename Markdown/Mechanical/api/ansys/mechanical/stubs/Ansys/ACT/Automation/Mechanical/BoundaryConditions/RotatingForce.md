# RotatingForce

### *class* RotatingForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RotatingForce.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#RotatingForce.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#RotatingForce.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RotatingForce.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#RotatingForce.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#RotatingForce.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#RotatingForce.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#RotatingForce.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RotatingForce.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RotatingForce.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RotatingForce.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RotatingForce.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RotatingForce.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#RotatingForce.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RotatingForce.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RotatingForce.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Axis`](#RotatingForce.Axis)                                                                                          | Gets or sets the Axis.                                        |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`SynchronousRatio`](#RotatingForce.SynchronousRatio)                                                                  | Gets or sets the SynchronousRatio.                            |
| [`AxisComponentX`](#RotatingForce.AxisComponentX)                                                                      | Gets the AxisComponentX.                                      |
| [`AxisComponentY`](#RotatingForce.AxisComponentY)                                                                      | Gets the AxisComponentY.                                      |
| [`AxisComponentZ`](#RotatingForce.AxisComponentZ)                                                                      | Gets the AxisComponentZ.                                      |
| [`HitPointNodeId`](#RotatingForce.HitPointNodeId)                                                                      | Gets the HitPointNodeId.                                      |
| [`UnbalancedForceMagnitude`](#RotatingForce.UnbalancedForceMagnitude)                                                  | Gets or sets the UnbalancedForceMagnitude.                    |
| [`XCoordinate`](#RotatingForce.XCoordinate)                                                                            | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#RotatingForce.YCoordinate)                                                                            | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#RotatingForce.ZCoordinate)                                                                            | Gets or sets the ZCoordinate.                                 |
| [`PhaseAngle`](#RotatingForce.PhaseAngle)                                                                              | Gets or sets the PhaseAngle.                                  |
| [`AxisLocationX`](#RotatingForce.AxisLocationX)                                                                        | Gets the AxisLocationX.                                       |
| [`AxisLocationY`](#RotatingForce.AxisLocationY)                                                                        | Gets the AxisLocationY.                                       |
| [`AxisLocationZ`](#RotatingForce.AxisLocationZ)                                                                        | Gets the AxisLocationZ.                                       |
| [`HitPointLocationX`](#RotatingForce.HitPointLocationX)                                                                | Gets the HitPointLocationX.                                   |
| [`HitPointLocationY`](#RotatingForce.HitPointLocationY)                                                                | Gets the HitPointLocationY.                                   |
| [`HitPointLocationZ`](#RotatingForce.HitPointLocationZ)                                                                | Gets the HitPointLocationZ.                                   |
| [`RotatingRadius`](#RotatingForce.RotatingRadius)                                                                      | Gets or sets the RotatingRadius.                              |
| [`Mass`](#RotatingForce.Mass)                                                                                          | Gets or sets the Mass.                                        |
| [`DefineBy`](#RotatingForce.DefineBy)                                                                                  | Gets or sets the DefineBy.                                    |
| [`CalculatedFromUnbalancedMass`](#RotatingForce.CalculatedFromUnbalancedMass)                                          | Gets or sets the CalculatedFromUnbalancedMass.                |
| [`HitPointSelection`](#RotatingForce.HitPointSelection)                                                                | Gets or sets the HitPointSelection.                           |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`RemotePointSelection`](#RotatingForce.RemotePointSelection)                                                          | Gets or sets the RemotePointSelection.                        |
| [`HitPointRemotePointSelection`](#RotatingForce.HitPointRemotePointSelection)                                          | Gets or sets the HitPointRemotePointSelection.                |
| [`Location`](#RotatingForce.Location)                                                                                  | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#RotatingForce.Suppressed)                                                                              | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#RotatingForce.SharedRefBody)                                                                        | Gets or sets the SharedRefBody.                               |
| [`Children`](#RotatingForce.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#RotatingForce.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#RotatingForce.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#RotatingForce.Images)                                                                                      | Gets the list of associated images.                           |
| [`ReadOnly`](#RotatingForce.ReadOnly)                                                                                  | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RotatingForce.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RotatingForce.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RotatingForce
```

## Property detail

### *property* RotatingForce.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#BoundVector) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.SynchronousRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SynchronousRatio.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.AxisComponentX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisComponentX.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.AxisComponentY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisComponentY.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.AxisComponentZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisComponentZ.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.HitPointNodeId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HitPointNodeId.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.UnbalancedForceMagnitude *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UnbalancedForceMagnitude.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.AxisLocationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisLocationX.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.AxisLocationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisLocationY.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.AxisLocationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxisLocationZ.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.HitPointLocationX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HitPointLocationX.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.HitPointLocationY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HitPointLocationY.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.HitPointLocationZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HitPointLocationZ.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.RotatingRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotatingRadius.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mass.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.DefineBy *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.CalculatedFromUnbalancedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculatedFromUnbalancedMass.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.HitPointSelection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HitPointSelection.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.HitPointRemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HitPointRemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RotatingForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RotatingForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### RotatingForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RotatingForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RotatingForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RotatingForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RotatingForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RotatingForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RotatingForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RotatingForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RotatingForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RotatingForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RotatingForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RotatingForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RotatingForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RotatingForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RotatingForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RotatingForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
