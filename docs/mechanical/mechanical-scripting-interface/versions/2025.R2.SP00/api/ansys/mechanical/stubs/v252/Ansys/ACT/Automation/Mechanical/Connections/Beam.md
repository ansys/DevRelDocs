# `Beam`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.Beam

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Beam.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Beam.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#Beam.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#Beam.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Beam.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Beam.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Beam.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Beam.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Beam.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Beam.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Beam.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Beam.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Beam.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Beam.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Beam.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](#Beam.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
| [`PropertyByAPIName`](#Beam.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Beam.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Beam.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#Beam.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamElementAPDLName`](#Beam.BeamElementAPDLName)                                 | Gets or sets the BeamElementAPDLName.                                                                                                                                                                                                        |
| [`Children`](#Beam.Children)                                                       | Gets the list of children.                                                                                                                                                                                                                   |
| [`Comments`](#Beam.Comments)                                                       | Gets the list of associated comments.                                                                                                                                                                                                        |
| [`CrossSection`](#Beam.CrossSection)                                               | Gets the CrossSection.                                                                                                                                                                                                                       |
| [`DataModelObjectCategory`](#Beam.DataModelObjectCategory)                         | Gets the current DataModelObject’s category.                                                                                                                                                                                                 |
| [`Figures`](#Beam.Figures)                                                         | Gets the list of associated figures.                                                                                                                                                                                                         |
| [`Images`](#Beam.Images)                                                           | Gets the list of associated images.                                                                                                                                                                                                          |
| [`InternalObject`](#Beam.InternalObject)                                           | Gets the internal object. For advanced usage only.                                                                                                                                                                                           |
| [`Material`](#Beam.Material)                                                       | Gets or sets the Material.                                                                                                                                                                                                                   |
| [`MobileAppliedBy`](#Beam.MobileAppliedBy)                                         | Gets or sets the MobileAppliedBy.                                                                                                                                                                                                            |
| [`MobileBeamCoincidentLengthFactor`](#Beam.MobileBeamCoincidentLengthFactor)       | Gets or sets the Coincident Length Factor on mobile side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.    |
| [`MobileBeamMaterial`](#Beam.MobileBeamMaterial)                                   | Gets or sets the MobileBeamMaterial.                                                                                                                                                                                                         |
| [`MobileBeamRadius`](#Beam.MobileBeamRadius)                                       | Gets or sets the MobileBeamRadius.                                                                                                                                                                                                           |
| [`MobileBehavior`](#Beam.MobileBehavior)                                           | Gets or sets the MobileBehavior.                                                                                                                                                                                                             |
| [`MobileBody`](#Beam.MobileBody)                                                   | Gets the MobileBody.                                                                                                                                                                                                                         |
| [`MobileCoordinateSystem`](#Beam.MobileCoordinateSystem)                           | Gets or sets the MobileCoordinateSystem.                                                                                                                                                                                                     |
| [`MobileLocation`](#Beam.MobileLocation)                                           | Gets or sets the MobileLocation.                                                                                                                                                                                                             |
| [`MobileNodeId`](#Beam.MobileNodeId)                                               | Returns Mobile Node Id.                                                                                                                                                                                                                      |
| [`MobilePinballRegion`](#Beam.MobilePinballRegion)                                 | Gets or sets the MobilePinballRegion.                                                                                                                                                                                                        |
| [`MobileXCoordinate`](#Beam.MobileXCoordinate)                                     | Gets or sets the MobileXCoordinate.                                                                                                                                                                                                          |
| [`MobileYCoordinate`](#Beam.MobileYCoordinate)                                     | Gets or sets the MobileYCoordinate.                                                                                                                                                                                                          |
| [`MobileZCoordinate`](#Beam.MobileZCoordinate)                                     | Gets or sets the MobileZCoordinate.                                                                                                                                                                                                          |
| [`Properties`](#Beam.Properties)                                                   | Gets the list of properties for this object.                                                                                                                                                                                                 |
| [`Radius`](#Beam.Radius)                                                           | Gets or sets the Radius.                                                                                                                                                                                                                     |
| [`ReadOnly`](#Beam.ReadOnly)                                                       | Gets or sets the ReadOnly.                                                                                                                                                                                                                   |
| [`ReferenceAppliedBy`](#Beam.ReferenceAppliedBy)                                   | Gets or sets the ReferenceAppliedBy.                                                                                                                                                                                                         |
| [`ReferenceBeamCoincidentLengthFactor`](#Beam.ReferenceBeamCoincidentLengthFactor) | Gets or sets the Coincident Length Factor on reference side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1. |
| [`ReferenceBeamMaterial`](#Beam.ReferenceBeamMaterial)                             | Gets or sets the ReferenceBeamMaterial.                                                                                                                                                                                                      |
| [`ReferenceBeamRadius`](#Beam.ReferenceBeamRadius)                                 | Gets or sets the ReferenceBeamRadius.                                                                                                                                                                                                        |
| [`ReferenceBehavior`](#Beam.ReferenceBehavior)                                     | Gets or sets the ReferenceBehavior.                                                                                                                                                                                                          |
| [`ReferenceBody`](#Beam.ReferenceBody)                                             | Gets the ReferenceBody.                                                                                                                                                                                                                      |
| [`ReferenceCoordinateSystem`](#Beam.ReferenceCoordinateSystem)                     | Gets or sets the ReferenceCoordinateSystem.                                                                                                                                                                                                  |
| [`ReferenceLocation`](#Beam.ReferenceLocation)                                     | Gets or sets the ReferenceLocation.                                                                                                                                                                                                          |
| [`ReferenceLocationPoint`](#Beam.ReferenceLocationPoint)                           | Gets or sets the ReferenceLocationPoint.                                                                                                                                                                                                     |
| [`ReferenceNodeId`](#Beam.ReferenceNodeId)                                         | Returns Reference Node Id.                                                                                                                                                                                                                   |
| [`ReferencePinballRegion`](#Beam.ReferencePinballRegion)                           | Gets or sets the ReferencePinballRegion.                                                                                                                                                                                                     |
| [`ReferenceXCoordinate`](#Beam.ReferenceXCoordinate)                               | Gets or sets the ReferenceXCoordinate.                                                                                                                                                                                                       |
| [`ReferenceYCoordinate`](#Beam.ReferenceYCoordinate)                               | Gets or sets the ReferenceYCoordinate.                                                                                                                                                                                                       |
| [`ReferenceZCoordinate`](#Beam.ReferenceZCoordinate)                               | Gets or sets the ReferenceZCoordinate.                                                                                                                                                                                                       |
| [`Scope`](#Beam.Scope)                                                             | Gets or sets the Scope.                                                                                                                                                                                                                      |
| [`Suppressed`](#Beam.Suppressed)                                                   | Gets or sets the Suppressed.                                                                                                                                                                                                                 |
| [`Visible`](#Beam.Visible)                                                         | Gets or sets the Visible.                                                                                                                                                                                                                    |
| [`VisibleProperties`](#Beam.VisibleProperties)                                     | Gets the list of properties that are visible for this object.                                                                                                                                                                                |

<a id="property-detail"></a>

## Property detail

<a id="Beam.BeamElementAPDLName"></a>

### *property* Beam.BeamElementAPDLName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Children"></a>

### *property* Beam.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Comments"></a>

### *property* Beam.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Beam.CrossSection"></a>

### *property* Beam.CrossSection *: [Ansys.Mechanical.DataModel.Enums.CrossSectionType](../../../../Mechanical/DataModel/Enums/CrossSectionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CrossSectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSection.

<!-- !! processed by numpydoc !! -->

<a id="Beam.DataModelObjectCategory"></a>

### *property* Beam.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Figures"></a>

### *property* Beam.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Images"></a>

### *property* Beam.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Beam.InternalObject"></a>

### *property* Beam.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Material"></a>

### *property* Beam.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileAppliedBy"></a>

### *property* Beam.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBeamCoincidentLengthFactor"></a>

### *property* Beam.MobileBeamCoincidentLengthFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coincident Length Factor on mobile side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBeamMaterial"></a>

### *property* Beam.MobileBeamMaterial *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBeamRadius"></a>

### *property* Beam.MobileBeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBehavior"></a>

### *property* Beam.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBody"></a>

### *property* Beam.MobileBody *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileCoordinateSystem"></a>

### *property* Beam.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileLocation"></a>

### *property* Beam.MobileLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileNodeId"></a>

### *property* Beam.MobileNodeId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns Mobile Node Id.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobilePinballRegion"></a>

### *property* Beam.MobilePinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileXCoordinate"></a>

### *property* Beam.MobileXCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileYCoordinate"></a>

### *property* Beam.MobileYCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileZCoordinate"></a>

### *property* Beam.MobileZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Properties"></a>

### *property* Beam.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Radius"></a>

### *property* Beam.Radius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReadOnly"></a>

### *property* Beam.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceAppliedBy"></a>

### *property* Beam.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBeamCoincidentLengthFactor"></a>

### *property* Beam.ReferenceBeamCoincidentLengthFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coincident Length Factor on reference side that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when the Behavior property is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBeamMaterial"></a>

### *property* Beam.ReferenceBeamMaterial *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBeamRadius"></a>

### *property* Beam.ReferenceBeamRadius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBehavior"></a>

### *property* Beam.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBody"></a>

### *property* Beam.ReferenceBody *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceCoordinateSystem"></a>

### *property* Beam.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceLocation"></a>

### *property* Beam.ReferenceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceLocationPoint"></a>

### *property* Beam.ReferenceLocationPoint *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocationPoint.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceNodeId"></a>

### *property* Beam.ReferenceNodeId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns Reference Node Id.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferencePinballRegion"></a>

### *property* Beam.ReferencePinballRegion *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceXCoordinate"></a>

### *property* Beam.ReferenceXCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceYCoordinate"></a>

### *property* Beam.ReferenceYCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceZCoordinate"></a>

### *property* Beam.ReferenceZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Scope"></a>

### *property* Beam.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Suppressed"></a>

### *property* Beam.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Visible"></a>

### *property* Beam.Visible *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="Beam.VisibleProperties"></a>

### *property* Beam.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Beam.Activate"></a>

### Beam.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Beam.AddCommandSnippet"></a>

### Beam.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Beam.AddComment"></a>

### Beam.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Beam.AddFigure"></a>

### Beam.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Beam.AddImage"></a>

### Beam.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Beam.CopyTo"></a>

### Beam.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Beam.CreateParameter"></a>

### Beam.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Delete"></a>

### Beam.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Duplicate"></a>

### Beam.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Beam.GetChildren"></a>

### Beam.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Beam.GetParameter"></a>

### Beam.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Beam.GroupAllSimilarChildren"></a>

### Beam.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.GroupSimilarObjects"></a>

### Beam.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.PromoteToNamedSelection"></a>

### Beam.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.PromoteToRemotePoint"></a>

### Beam.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.PropertyByAPIName"></a>

### Beam.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Beam.PropertyByName"></a>

### Beam.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Beam.RemoveParameter"></a>

### Beam.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Beam.RenameBasedOnDefinition"></a>

### Beam.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

