# `RemoteDisplacement`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteDisplacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RemoteDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RemoteDisplacement.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#RemoteDisplacement.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#RemoteDisplacement.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#RemoteDisplacement.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#RemoteDisplacement.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RemoteDisplacement.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#RemoteDisplacement.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#RemoteDisplacement.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#RemoteDisplacement.GetActivateAtLoadStep)                   | Gets whether the remote displacement is active at the specified load step.        |
| [`GetChildren`](#RemoteDisplacement.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#RemoteDisplacement.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#RemoteDisplacement.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RemoteDisplacement.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RemoteDisplacement.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#RemoteDisplacement.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](#RemoteDisplacement.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                              |
| [`PropertyByAPIName`](#RemoteDisplacement.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#RemoteDisplacement.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RemoteDisplacement.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#RemoteDisplacement.SetActivateAtLoadStep)                   | Sets whether the remote displacement is active at the specified load step.        |
| [`SetComponentActivateAtLoadStep`](#RemoteDisplacement.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BeamMaterial`](#RemoteDisplacement.BeamMaterial)                                       | Gets or sets the BeamMaterial.                                |
| [`BeamRadius`](#RemoteDisplacement.BeamRadius)                                           | Gets or sets the BeamRadius.                                  |
| [`Behavior`](#RemoteDisplacement.Behavior)                                               | Gets or sets the Behavior.                                    |
| [`Children`](#RemoteDisplacement.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#RemoteDisplacement.Comments)                                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#RemoteDisplacement.CoordinateSystem)                               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#RemoteDisplacement.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`DynamicRelaxationBehavior`](#RemoteDisplacement.DynamicRelaxationBehavior)             | Gets or sets the DynamicRelaxationBehavior.                   |
| [`Figures`](#RemoteDisplacement.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](#RemoteDisplacement.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#RemoteDisplacement.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#RemoteDisplacement.Location)                                               | Gets or sets the Geometry.                                    |
| [`NumberOfSegments`](#RemoteDisplacement.NumberOfSegments)                               | Gets or sets the NumberOfSegments.                            |
| [`PinballRegion`](#RemoteDisplacement.PinballRegion)                                     | Gets or sets the PinballRegion.                               |
| [`Properties`](#RemoteDisplacement.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#RemoteDisplacement.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`RemotePoint`](#RemoteDisplacement.RemotePoint)                                         | Gets the remote point associated to the point mass.           |
| [`ReverseDirectionForInverseSteps`](#RemoteDisplacement.ReverseDirectionForInverseSteps) | Gets or sets the ReverseDirectionForInverseSteps.             |
| [`RotationX`](#RemoteDisplacement.RotationX)                                             | Gets the RotationX.                                           |
| [`RotationY`](#RemoteDisplacement.RotationY)                                             | Gets the RotationY.                                           |
| [`RotationZ`](#RemoteDisplacement.RotationZ)                                             | Gets the RotationZ.                                           |
| [`SharedRefBody`](#RemoteDisplacement.SharedRefBody)                                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#RemoteDisplacement.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RemoteDisplacement.VisibleProperties)                             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#RemoteDisplacement.XComponent)                                           | Gets the XComponent.                                          |
| [`XCoordinate`](#RemoteDisplacement.XCoordinate)                                         | Gets or sets the XCoordinate.                                 |
| [`YComponent`](#RemoteDisplacement.YComponent)                                           | Gets the YComponent.                                          |
| [`YCoordinate`](#RemoteDisplacement.YCoordinate)                                         | Gets or sets the YCoordinate.                                 |
| [`ZComponent`](#RemoteDisplacement.ZComponent)                                           | Gets the ZComponent.                                          |
| [`ZCoordinate`](#RemoteDisplacement.ZCoordinate)                                         | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="RemoteDisplacement.BeamMaterial"></a>

### *property* RemoteDisplacement.BeamMaterial *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.BeamRadius"></a>

### *property* RemoteDisplacement.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Behavior"></a>

### *property* RemoteDisplacement.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Children"></a>

### *property* RemoteDisplacement.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Comments"></a>

### *property* RemoteDisplacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CoordinateSystem"></a>

### *property* RemoteDisplacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.DataModelObjectCategory"></a>

### *property* RemoteDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.DynamicRelaxationBehavior"></a>

### *property* RemoteDisplacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Figures"></a>

### *property* RemoteDisplacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Images"></a>

### *property* RemoteDisplacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.InternalObject"></a>

### *property* RemoteDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Location"></a>

### *property* RemoteDisplacement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.NumberOfSegments"></a>

### *property* RemoteDisplacement.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PinballRegion"></a>

### *property* RemoteDisplacement.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Properties"></a>

### *property* RemoteDisplacement.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ReadOnly"></a>

### *property* RemoteDisplacement.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RemotePoint"></a>

### *property* RemoteDisplacement.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ReverseDirectionForInverseSteps"></a>

### *property* RemoteDisplacement.ReverseDirectionForInverseSteps *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationX"></a>

### *property* RemoteDisplacement.RotationX *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationY"></a>

### *property* RemoteDisplacement.RotationY *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RotationZ"></a>

### *property* RemoteDisplacement.RotationZ *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SharedRefBody"></a>

### *property* RemoteDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Suppressed"></a>

### *property* RemoteDisplacement.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.VisibleProperties"></a>

### *property* RemoteDisplacement.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.XComponent"></a>

### *property* RemoteDisplacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.XCoordinate"></a>

### *property* RemoteDisplacement.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.YComponent"></a>

### *property* RemoteDisplacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.YCoordinate"></a>

### *property* RemoteDisplacement.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ZComponent"></a>

### *property* RemoteDisplacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.ZCoordinate"></a>

### *property* RemoteDisplacement.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemoteDisplacement.Activate"></a>

### RemoteDisplacement.Activate()

Activate the current object.

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

### RemoteDisplacement.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CopyTo"></a>

### RemoteDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.CreateParameter"></a>

### RemoteDisplacement.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Delete"></a>

### RemoteDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.Duplicate"></a>

### RemoteDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetActivateAtLoadStep"></a>

### RemoteDisplacement.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the remote displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetChildren"></a>

### RemoteDisplacement.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetComponentActivateAtLoadStep"></a>

### RemoteDisplacement.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GetParameter"></a>

### RemoteDisplacement.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GroupAllSimilarChildren"></a>

### RemoteDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.GroupSimilarObjects"></a>

### RemoteDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PromoteToNamedSelection"></a>

### RemoteDisplacement.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PromoteToRemotePoint"></a>

### RemoteDisplacement.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PropertyByAPIName"></a>

### RemoteDisplacement.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.PropertyByName"></a>

### RemoteDisplacement.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.RemoveParameter"></a>

### RemoteDisplacement.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SetActivateAtLoadStep"></a>

### RemoteDisplacement.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the remote displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RemoteDisplacement.SetComponentActivateAtLoadStep"></a>

### RemoteDisplacement.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

