# `Spring`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Spring.

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
|------------------------------------|---------------------------------------------------------------------------|
| `NonLinearLongitudinalStiffness`   | Gets the non linear longitudinal stiffness defined in the tabular data.   |
| `LongitudinalStiffness`            | Gets or sets the constant longitudinal stiffness (expressed in N/m).      |
| `InternalObject`                   | Gets the internal object. For advanced usage only.                        |
| `Material`                         | Gets or sets the Material.                                                |
| `MobileBeamMaterial`               | Gets or sets the MobileBeamMaterial.                                      |
| `MobileBody`                       | Gets the MobileBody.                                                      |
| `ReferenceBeamMaterial`            | Gets or sets the ReferenceBeamMaterial.                                   |
| `ReferenceBody`                    | Gets the ReferenceBody.                                                   |
| `SpringElementAPDLName`            | Gets or sets the SpringElementAPDLName.                                   |
| `MobileBeamRadius`                 | Gets or sets the MobileBeamRadius.                                        |
| `MobileXCoordinate`                | Gets or sets the MobileXCoordinate.                                       |
| `MobileYCoordinate`                | Gets or sets the MobileYCoordinate.                                       |
| `MobileZCoordinate`                | Gets or sets the MobileZCoordinate.                                       |
| `ReferenceBeamRadius`              | Gets or sets the ReferenceBeamRadius.                                     |
| `ReferenceXCoordinate`             | Gets or sets the ReferenceXCoordinate.                                    |
| `ReferenceYCoordinate`             | Gets or sets the ReferenceYCoordinate.                                    |
| `ReferenceZCoordinate`             | Gets or sets the ReferenceZCoordinate.                                    |
| `SpringLength`                     | Gets the SpringLength.                                                    |
| `LongitudinalDamping`              | Gets or sets the LongitudinalDamping.                                     |
| `MobilePinballRegion`              | Gets or sets the MobilePinballRegion.                                     |
| `FreeLength`                       | Gets or sets the FreeLength.                                              |
| `Load`                             | Gets or sets the Load.                                                    |
| `Rotation`                         | Gets or sets the Rotation.                                                |
| `Torque`                           | Gets or sets the Torque.                                                  |
| `ReferencePinballRegion`           | Gets or sets the ReferencePinballRegion.                                  |
| `TorsionalDamping`                 | Gets or sets the TorsionalDamping.                                        |
| `TorsionalStiffness`               | Gets or sets the TorsionalStiffness.                                      |
| `MobileAppliedBy`                  | Gets or sets the MobileAppliedBy.                                         |
| `ReferenceAppliedBy`               | Gets or sets the ReferenceAppliedBy.                                      |
| `SpringBehavior`                   | Gets or sets the SpringBehavior.                                          |
| `MobileBehavior`                   | Gets or sets the MobileBehavior.                                          |
| `PreloadType`                      | Gets or sets the PreloadType.                                             |
| `ReferenceBehavior`                | Gets or sets the ReferenceBehavior.                                       |
| `Scope`                            | Gets or sets the Scope.                                                   |
| `SpringType`                       | Gets or sets the SpringType.                                              |
| `Visible`                          | Gets or sets the Visible.                                                 |
| `Suppressed`                       | Gets or sets the Suppressed.                                              |
| `MobileCoordinateSystem`           | Gets or sets the MobileCoordinateSystem.                                  |
| `ReferenceCoordinateSystem`        | Gets or sets the ReferenceCoordinateSystem.                               |
| `MobileLocation`                   | Gets or sets the MobileLocation.                                          |
| `MobileScopeLocation`              | Gets or sets the MobileScopeLocation.                                     |
| `ReferenceLocation`                | Gets or sets the ReferenceLocation.                                       |
| `ReferenceScopeLocation`           | Gets or sets the ReferenceScopeLocation.                                  |
| `DataModelObjectCategory`          | Gets the current DataModelObject's category.                              |
| `Children`                         | Gets the list of children.                                                |
| `Comments`                         | Gets the list of associated comments.                                     |
| `Figures`                          | Gets the list of associated figures.                                      |
| `Images`                           | Gets the list of associated images.                                       |
| `ReadOnly`                         | Gets or sets the ReadOnly.                                                |
| `InternalObject`                   | Gets the internal object. For advanced usage only.                        |
| `Properties`                       | Gets the list of properties for this object.                              |
| `VisibleProperties`                | Gets the list of properties that are visible for this object.             |

<a id="property-detail"></a>

## Property detail

### *property* Spring.NonLinearLongitudinalStiffness *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the non linear longitudinal stiffness defined in the tabular data.

<!-- !! processed by numpydoc !! -->

### *property* Spring.LongitudinalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the constant longitudinal stiffness (expressed in N/m).

<!-- !! processed by numpydoc !! -->

### *property* Spring.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpringAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

### *property* Spring.SpringElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringElementAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Spring.SpringLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SpringLength.

<!-- !! processed by numpydoc !! -->

### *property* Spring.LongitudinalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LongitudinalDamping.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Spring.FreeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeLength.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Load *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Load.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Rotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotation.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Torque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Torque.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Spring.TorsionalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

### *property* Spring.TorsionalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Spring.SpringBehavior *: [Ansys.Mechanical.DataModel.Enums.SpringBehavior](../../../../Mechanical/DataModel/Enums/SpringBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Spring.PreloadType *: [Ansys.Mechanical.DataModel.Enums.SpringPreloadType](../../../../Mechanical/DataModel/Enums/SpringPreloadType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringPreloadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreloadType.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

### *property* Spring.SpringType *: [Ansys.Mechanical.DataModel.Enums.SpringType](../../../../Mechanical/DataModel/Enums/SpringType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringType.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileScopeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileScopeLocation.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceScopeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceScopeLocation.

<!-- !! processed by numpydoc !! -->

### *property* Spring.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Spring.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Spring.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Spring.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Spring.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### Spring.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Spring.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Spring.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Spring.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Spring.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Spring.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Spring.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Spring.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Spring.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Spring.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Spring.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Spring.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Spring.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Spring.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Spring.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Spring.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Spring.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Spring.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

