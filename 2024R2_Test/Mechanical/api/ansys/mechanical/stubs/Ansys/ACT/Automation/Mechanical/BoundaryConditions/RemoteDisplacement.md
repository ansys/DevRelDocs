# RemoteDisplacement

### *class* RemoteDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RemoteDisplacement.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToRemotePoint`](#RemoteDisplacement.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                              |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#RemoteDisplacement.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#RemoteDisplacement.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#RemoteDisplacement.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#RemoteDisplacement.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#RemoteDisplacement.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#RemoteDisplacement.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RemoteDisplacement.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#RemoteDisplacement.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#RemoteDisplacement.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#RemoteDisplacement.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#RemoteDisplacement.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RemoteDisplacement.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RemoteDisplacement.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RemoteDisplacement.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RemoteDisplacement.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RemoteDisplacement.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#RemoteDisplacement.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RemoteDisplacement.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RemoteDisplacement.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`RemotePoint`](../RemotePoint.md#RemotePoint)                                                                         | Gets the remote point associated to the point mass.           |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#RemoteDisplacement.Location)                                                                             | Gets or sets the Geometry.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`BeamMaterial`](#RemoteDisplacement.BeamMaterial)                                                                     | Gets or sets the BeamMaterial.                                |
| [`NumberOfSegments`](#RemoteDisplacement.NumberOfSegments)                                                             | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](#RemoteDisplacement.XComponent)                                                                         | Gets the XComponent.                                          |
| [`YComponent`](#RemoteDisplacement.YComponent)                                                                         | Gets the YComponent.                                          |
| [`ZComponent`](#RemoteDisplacement.ZComponent)                                                                         | Gets the ZComponent.                                          |
| [`RotationX`](#RemoteDisplacement.RotationX)                                                                           | Gets the RotationX.                                           |
| [`RotationY`](#RemoteDisplacement.RotationY)                                                                           | Gets the RotationY.                                           |
| [`RotationZ`](#RemoteDisplacement.RotationZ)                                                                           | Gets the RotationZ.                                           |
| [`BeamRadius`](#RemoteDisplacement.BeamRadius)                                                                         | Gets or sets the BeamRadius.                                  |
| [`XCoordinate`](#RemoteDisplacement.XCoordinate)                                                                       | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#RemoteDisplacement.YCoordinate)                                                                       | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#RemoteDisplacement.ZCoordinate)                                                                       | Gets or sets the ZCoordinate.                                 |
| [`PinballRegion`](#RemoteDisplacement.PinballRegion)                                                                   | Gets or sets the PinballRegion.                               |
| [`Behavior`](#RemoteDisplacement.Behavior)                                                                             | Gets or sets the Behavior.                                    |
| [`DynamicRelaxationBehavior`](#RemoteDisplacement.DynamicRelaxationBehavior)                                           | Gets or sets the DynamicRelaxationBehavior.                   |
| [`ReverseDirectionForInverseSteps`](#RemoteDisplacement.ReverseDirectionForInverseSteps)                               | Gets or sets the ReverseDirectionForInverseSteps.             |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#RemoteDisplacement.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#RemoteDisplacement.SharedRefBody)                                                                   | Gets or sets the SharedRefBody.                               |
| [`Children`](#RemoteDisplacement.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#RemoteDisplacement.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#RemoteDisplacement.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#RemoteDisplacement.Images)                                                                                 | Gets the list of associated images.                           |
| [`ReadOnly`](#RemoteDisplacement.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RemoteDisplacement.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RemoteDisplacement.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RemoteDisplacement
```

## Property detail

### *property* RemoteDisplacement.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.BeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.RotationX *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationX.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.RotationY *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationY.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.RotationZ *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationZ.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.ReverseDirectionForInverseSteps *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RemoteDisplacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RemoteDisplacement.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RemoteDisplacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
