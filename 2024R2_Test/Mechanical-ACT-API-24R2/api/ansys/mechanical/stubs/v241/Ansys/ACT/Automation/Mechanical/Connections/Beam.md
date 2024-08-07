# `Beam`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Beam.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.PromoteToRemotePoint)         | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.AddCommandSnippet)               | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`BeamElementAPDLName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.BeamElementAPDLName)             | Gets or sets the BeamElementAPDLName.                         |
| [`Material`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Material)                                   | Gets or sets the Material.                                    |
| [`MobileBeamMaterial`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileBeamMaterial)               | Gets or sets the MobileBeamMaterial.                          |
| [`MobileBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileBody)                               | Gets the MobileBody.                                          |
| [`ReferenceBeamMaterial`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceBeamMaterial)         | Gets or sets the ReferenceBeamMaterial.                       |
| [`ReferenceBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceBody)                         | Gets the ReferenceBody.                                       |
| [`MobileBeamRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileBeamRadius)                   | Gets or sets the MobileBeamRadius.                            |
| [`MobileXCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileXCoordinate)                 | Gets or sets the MobileXCoordinate.                           |
| [`MobileYCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileYCoordinate)                 | Gets or sets the MobileYCoordinate.                           |
| [`MobileZCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileZCoordinate)                 | Gets or sets the MobileZCoordinate.                           |
| [`MobilePinballRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobilePinballRegion)             | Gets or sets the MobilePinballRegion.                         |
| [`Radius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Radius)                                       | Gets or sets the Radius.                                      |
| [`ReferenceBeamRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceBeamRadius)             | Gets or sets the ReferenceBeamRadius.                         |
| [`ReferenceXCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceXCoordinate)           | Gets or sets the ReferenceXCoordinate.                        |
| [`ReferenceYCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceYCoordinate)           | Gets or sets the ReferenceYCoordinate.                        |
| [`ReferenceZCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceZCoordinate)           | Gets or sets the ReferenceZCoordinate.                        |
| [`ReferencePinballRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferencePinballRegion)       | Gets or sets the ReferencePinballRegion.                      |
| [`CrossSection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.CrossSection)                           | Gets the CrossSection.                                        |
| [`MobileAppliedBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileAppliedBy)                     | Gets or sets the MobileAppliedBy.                             |
| [`MobileBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileBehavior)                       | Gets or sets the MobileBehavior.                              |
| [`ReferenceAppliedBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceAppliedBy)               | Gets or sets the ReferenceAppliedBy.                          |
| [`ReferenceBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceBehavior)                 | Gets or sets the ReferenceBehavior.                           |
| [`Scope`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Scope)                                         | Gets or sets the Scope.                                       |
| [`Visible`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Visible)                                     | Gets or sets the Visible.                                     |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`MobileCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileCoordinateSystem)       | Gets or sets the MobileCoordinateSystem.                      |
| [`ReferenceCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceCoordinateSystem) | Gets or sets the ReferenceCoordinateSystem.                   |
| [`MobileLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.MobileLocation)                       | Gets or sets the MobileLocation.                              |
| [`ReferenceLocationPoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceLocationPoint)       | Gets or sets the ReferenceLocationPoint.                      |
| [`ReferenceLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReferenceLocation)                 | Gets or sets the ReferenceLocation.                           |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.DataModelObjectCategory)     | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Children)                                   | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Comments)                                   | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Images)                                       | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.Properties)                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#Beam.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Beam.InternalObject"></a>

### *property* Beam.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Beam.BeamElementAPDLName"></a>

### *property* Beam.BeamElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Material"></a>

### *property* Beam.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBeamMaterial"></a>

### *property* Beam.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBody"></a>

### *property* Beam.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBeamMaterial"></a>

### *property* Beam.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBody"></a>

### *property* Beam.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBeamRadius"></a>

### *property* Beam.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileXCoordinate"></a>

### *property* Beam.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileYCoordinate"></a>

### *property* Beam.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileZCoordinate"></a>

### *property* Beam.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobilePinballRegion"></a>

### *property* Beam.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Radius"></a>

### *property* Beam.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBeamRadius"></a>

### *property* Beam.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceXCoordinate"></a>

### *property* Beam.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceYCoordinate"></a>

### *property* Beam.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceZCoordinate"></a>

### *property* Beam.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferencePinballRegion"></a>

### *property* Beam.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Beam.CrossSection"></a>

### *property* Beam.CrossSection *: [Ansys.Mechanical.DataModel.Enums.CrossSectionType](../../../../Mechanical/DataModel/Enums/CrossSectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrossSectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSection.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileAppliedBy"></a>

### *property* Beam.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileBehavior"></a>

### *property* Beam.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceAppliedBy"></a>

### *property* Beam.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceBehavior"></a>

### *property* Beam.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Scope"></a>

### *property* Beam.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Visible"></a>

### *property* Beam.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Suppressed"></a>

### *property* Beam.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileCoordinateSystem"></a>

### *property* Beam.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceCoordinateSystem"></a>

### *property* Beam.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Beam.MobileLocation"></a>

### *property* Beam.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceLocationPoint"></a>

### *property* Beam.ReferenceLocationPoint *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocationPoint.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReferenceLocation"></a>

### *property* Beam.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Beam.DataModelObjectCategory"></a>

### *property* Beam.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Children"></a>

### *property* Beam.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Comments"></a>

### *property* Beam.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Figures"></a>

### *property* Beam.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Images"></a>

### *property* Beam.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Beam.ReadOnly"></a>

### *property* Beam.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Beam.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Properties"></a>

### *property* Beam.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Beam.VisibleProperties"></a>

### *property* Beam.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Beam.PromoteToNamedSelection"></a>

### Beam.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.PromoteToRemotePoint"></a>

### Beam.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.AddCommandSnippet"></a>

### Beam.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Beam.RenameBasedOnDefinition"></a>

### Beam.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Delete"></a>

### Beam.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.GetChildren"></a>

### Beam.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Beam.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Beam.AddComment"></a>

### Beam.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Beam.AddFigure"></a>

### Beam.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Beam.AddImage"></a>

### Beam.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Activate"></a>

### Beam.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Beam.CopyTo"></a>

### Beam.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Beam.Duplicate"></a>

### Beam.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Beam.GroupAllSimilarChildren"></a>

### Beam.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.GroupSimilarObjects"></a>

### Beam.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Beam.PropertyByName"></a>

### Beam.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Beam.PropertyByAPIName"></a>

### Beam.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Beam.CreateParameter"></a>

### Beam.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Beam.GetParameter"></a>

### Beam.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Beam.RemoveParameter"></a>

### Beam.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

