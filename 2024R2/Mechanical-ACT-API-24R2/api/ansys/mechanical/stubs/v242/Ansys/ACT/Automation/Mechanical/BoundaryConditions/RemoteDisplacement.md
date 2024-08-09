# `RemoteDisplacement`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RemoteDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#RemoteDisplacement.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                              |
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

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RemotePoint`](#RemoteDisplacement.RemotePoint)                                         | Gets the remote point associated to the point mass.           |
| [`Location`](#RemoteDisplacement.Location)                                               | Gets or sets the Geometry.                                    |
| [`InternalObject`](#id0)                                                                 | Gets the internal object. For advanced usage only.            |
| [`BeamMaterial`](#RemoteDisplacement.BeamMaterial)                                       | Gets or sets the BeamMaterial.                                |
| [`NumberOfSegments`](#RemoteDisplacement.NumberOfSegments)                               | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](#RemoteDisplacement.XComponent)                                           | Gets the XComponent.                                          |
| [`YComponent`](#RemoteDisplacement.YComponent)                                           | Gets the YComponent.                                          |
| [`ZComponent`](#RemoteDisplacement.ZComponent)                                           | Gets the ZComponent.                                          |
| [`RotationX`](#RemoteDisplacement.RotationX)                                             | Gets the RotationX.                                           |
| [`RotationY`](#RemoteDisplacement.RotationY)                                             | Gets the RotationY.                                           |
| [`RotationZ`](#RemoteDisplacement.RotationZ)                                             | Gets the RotationZ.                                           |
| [`BeamRadius`](#RemoteDisplacement.BeamRadius)                                           | Gets or sets the BeamRadius.                                  |
| [`XCoordinate`](#RemoteDisplacement.XCoordinate)                                         | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#RemoteDisplacement.YCoordinate)                                         | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#RemoteDisplacement.ZCoordinate)                                         | Gets or sets the ZCoordinate.                                 |
| [`PinballRegion`](#RemoteDisplacement.PinballRegion)                                     | Gets or sets the PinballRegion.                               |
| [`Behavior`](#RemoteDisplacement.Behavior)                                               | Gets or sets the Behavior.                                    |
| [`DynamicRelaxationBehavior`](#RemoteDisplacement.DynamicRelaxationBehavior)             | Gets or sets the DynamicRelaxationBehavior.                   |
| [`ReverseDirectionForInverseSteps`](#RemoteDisplacement.ReverseDirectionForInverseSteps) | Gets or sets the ReverseDirectionForInverseSteps.             |
| [`CoordinateSystem`](#RemoteDisplacement.CoordinateSystem)                               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#RemoteDisplacement.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`Suppressed`](#RemoteDisplacement.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#RemoteDisplacement.SharedRefBody)                                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#RemoteDisplacement.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#RemoteDisplacement.Comments)                                               | Gets the list of associated comments.                         |
| [`Figures`](#RemoteDisplacement.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](#RemoteDisplacement.Images)                                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#RemoteDisplacement.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RemoteDisplacement.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RemoteDisplacement.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RemoteDisplacement.RemotePoint"></a>

### *property* RemoteDisplacement.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../../../../../v241/Ansys/ACT/Automation/Mechanical/RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Location"></a>

### *property* RemoteDisplacement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.InternalObject"></a>

### *property* RemoteDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.BeamMaterial"></a>

### *property* RemoteDisplacement.BeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.NumberOfSegments"></a>

### *property* RemoteDisplacement.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.XComponent"></a>

### *property* RemoteDisplacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.YComponent"></a>

### *property* RemoteDisplacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ZComponent"></a>

### *property* RemoteDisplacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationX"></a>

### *property* RemoteDisplacement.RotationX *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationY"></a>

### *property* RemoteDisplacement.RotationY *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationZ"></a>

### *property* RemoteDisplacement.RotationZ *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.BeamRadius"></a>

### *property* RemoteDisplacement.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.XCoordinate"></a>

### *property* RemoteDisplacement.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.YCoordinate"></a>

### *property* RemoteDisplacement.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ZCoordinate"></a>

### *property* RemoteDisplacement.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PinballRegion"></a>

### *property* RemoteDisplacement.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Behavior"></a>

### *property* RemoteDisplacement.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.DynamicRelaxationBehavior"></a>

### *property* RemoteDisplacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ReverseDirectionForInverseSteps"></a>

### *property* RemoteDisplacement.ReverseDirectionForInverseSteps *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CoordinateSystem"></a>

### *property* RemoteDisplacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.DataModelObjectCategory"></a>

### *property* RemoteDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Suppressed"></a>

### *property* RemoteDisplacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SharedRefBody"></a>

### *property* RemoteDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Children"></a>

### *property* RemoteDisplacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Comments"></a>

### *property* RemoteDisplacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Figures"></a>

### *property* RemoteDisplacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Images"></a>

### *property* RemoteDisplacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ReadOnly"></a>

### *property* RemoteDisplacement.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RemoteDisplacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Properties"></a>

### *property* RemoteDisplacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.VisibleProperties"></a>

### *property* RemoteDisplacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemoteDisplacement.PromoteToRemotePoint"></a>

### RemoteDisplacement.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetActivateAtLoadStep"></a>

### RemoteDisplacement.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SetActivateAtLoadStep"></a>

### RemoteDisplacement.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetComponentActivateAtLoadStep"></a>

### RemoteDisplacement.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SetComponentActivateAtLoadStep"></a>

### RemoteDisplacement.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PromoteToNamedSelection"></a>

### RemoteDisplacement.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Delete"></a>

### RemoteDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetChildren"></a>

### RemoteDisplacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RemoteDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.AddComment"></a>

### RemoteDisplacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.AddFigure"></a>

### RemoteDisplacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.AddImage"></a>

### RemoteDisplacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Activate"></a>

### RemoteDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CopyTo"></a>

### RemoteDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Duplicate"></a>

### RemoteDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GroupAllSimilarChildren"></a>

### RemoteDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GroupSimilarObjects"></a>

### RemoteDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PropertyByName"></a>

### RemoteDisplacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PropertyByAPIName"></a>

### RemoteDisplacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CreateParameter"></a>

### RemoteDisplacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetParameter"></a>

### RemoteDisplacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RemoveParameter"></a>

### RemoteDisplacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

