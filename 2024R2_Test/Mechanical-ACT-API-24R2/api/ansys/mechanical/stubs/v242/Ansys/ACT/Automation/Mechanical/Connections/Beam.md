# `Beam`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Connections.Beam

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Beam.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------|-----------------------------------------------------------------------------------|
| `PromoteToNamedSelection`   | Run the PromoteToNamedSelection action.                                           |
| `PromoteToRemotePoint`      | Run the PromoteToRemotePoint action.                                              |
| `AddCommandSnippet`         | Creates a new CommandSnippet                                                      |
| `RenameBasedOnDefinition`   | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                    | Run the Delete action.                                                            |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `GetChildren`               | Gets the list of children, filtered by type.                                      |
| `AddComment`                | Creates a new child Comment.                                                      |
| `AddFigure`                 | Creates a new child Figure.                                                       |
| `AddImage`                  | Creates a new child Image.                                                        |
| `Activate`                  | Activate the current object.                                                      |
| `CopyTo`                    | Copies all visible properties from this object to another.                        |
| `Duplicate`                 | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`   | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`       | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`            | Get a property by its unique name.                                                |
| `PropertyByAPIName`         | Get a property by its API name.                                                   |
| `CreateParameter`           | Creates a new parameter for a Property.                                           |
| `GetParameter`              | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------|---------------------------------------------------------------|
| `InternalObject`            | Gets the internal object. For advanced usage only.            |
| `BeamElementAPDLName`       | Gets or sets the BeamElementAPDLName.                         |
| `Material`                  | Gets or sets the Material.                                    |
| `MobileBeamMaterial`        | Gets or sets the MobileBeamMaterial.                          |
| `MobileBody`                | Gets the MobileBody.                                          |
| `ReferenceBeamMaterial`     | Gets or sets the ReferenceBeamMaterial.                       |
| `ReferenceBody`             | Gets the ReferenceBody.                                       |
| `MobileBeamRadius`          | Gets or sets the MobileBeamRadius.                            |
| `MobileXCoordinate`         | Gets or sets the MobileXCoordinate.                           |
| `MobileYCoordinate`         | Gets or sets the MobileYCoordinate.                           |
| `MobileZCoordinate`         | Gets or sets the MobileZCoordinate.                           |
| `MobilePinballRegion`       | Gets or sets the MobilePinballRegion.                         |
| `Radius`                    | Gets or sets the Radius.                                      |
| `ReferenceBeamRadius`       | Gets or sets the ReferenceBeamRadius.                         |
| `ReferenceXCoordinate`      | Gets or sets the ReferenceXCoordinate.                        |
| `ReferenceYCoordinate`      | Gets or sets the ReferenceYCoordinate.                        |
| `ReferenceZCoordinate`      | Gets or sets the ReferenceZCoordinate.                        |
| `ReferencePinballRegion`    | Gets or sets the ReferencePinballRegion.                      |
| `CrossSection`              | Gets the CrossSection.                                        |
| `MobileAppliedBy`           | Gets or sets the MobileAppliedBy.                             |
| `MobileBehavior`            | Gets or sets the MobileBehavior.                              |
| `ReferenceAppliedBy`        | Gets or sets the ReferenceAppliedBy.                          |
| `ReferenceBehavior`         | Gets or sets the ReferenceBehavior.                           |
| `Scope`                     | Gets or sets the Scope.                                       |
| `Visible`                   | Gets or sets the Visible.                                     |
| `Suppressed`                | Gets or sets the Suppressed.                                  |
| `MobileCoordinateSystem`    | Gets or sets the MobileCoordinateSystem.                      |
| `ReferenceCoordinateSystem` | Gets or sets the ReferenceCoordinateSystem.                   |
| `MobileLocation`            | Gets or sets the MobileLocation.                              |
| `ReferenceLocationPoint`    | Gets or sets the ReferenceLocationPoint.                      |
| `ReferenceLocation`         | Gets or sets the ReferenceLocation.                           |
| `DataModelObjectCategory`   | Gets the current DataModelObject's category.                  |
| `Children`                  | Gets the list of children.                                    |
| `Comments`                  | Gets the list of associated comments.                         |
| `Figures`                   | Gets the list of associated figures.                          |
| `Images`                    | Gets the list of associated images.                           |
| `ReadOnly`                  | Gets or sets the ReadOnly.                                    |
| `InternalObject`            | Gets the internal object. For advanced usage only.            |
| `Properties`                | Gets the list of properties for this object.                  |
| `VisibleProperties`         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Beam.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Beam.BeamElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamElementAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Beam.CrossSection *: [Ansys.Mechanical.DataModel.Enums.CrossSectionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrossSectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrossSectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSection.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SpringScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceLocationPoint *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocationPoint.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

### *property* Beam.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Beam.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Beam.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Beam.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Beam.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### Beam.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Beam.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Beam.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Beam.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Beam.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Beam.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Beam.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Beam.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Beam.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Beam.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Beam.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Beam.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Beam.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Beam.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Beam.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Beam.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Beam.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Beam.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

