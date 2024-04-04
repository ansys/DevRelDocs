# Spring

### *class* Spring

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Spring.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#Spring.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#Spring.PromoteToRemotePoint)         | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#Spring.AddCommandSnippet)               | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#Spring.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Spring.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Spring.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Spring.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Spring.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#Spring.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#Spring.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Spring.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Spring.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Spring.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Spring.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Spring.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#Spring.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Spring.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Spring.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`NonLinearLongitudinalStiffness`](#Spring.NonLinearLongitudinalStiffness)                                             | Gets the non linear longitudinal stiffness defined in the tabular data.   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`LongitudinalStiffness`](#Spring.LongitudinalStiffness)                                                               | Gets or sets the constant longitudinal stiffness (expressed in N/m).      |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                        |
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                                |
| [`MobileBeamMaterial`](#Spring.MobileBeamMaterial)                                                                     | Gets or sets the MobileBeamMaterial.                                      |
| [`MobileBody`](#Spring.MobileBody)                                                                                     | Gets the MobileBody.                                                      |
| [`ReferenceBeamMaterial`](#Spring.ReferenceBeamMaterial)                                                               | Gets or sets the ReferenceBeamMaterial.                                   |
| [`ReferenceBody`](#Spring.ReferenceBody)                                                                               | Gets the ReferenceBody.                                                   |
| [`SpringElementAPDLName`](#Spring.SpringElementAPDLName)                                                               | Gets or sets the SpringElementAPDLName.                                   |
| [`MobileBeamRadius`](#Spring.MobileBeamRadius)                                                                         | Gets or sets the MobileBeamRadius.                                        |
| [`MobileXCoordinate`](#Spring.MobileXCoordinate)                                                                       | Gets or sets the MobileXCoordinate.                                       |
| [`MobileYCoordinate`](#Spring.MobileYCoordinate)                                                                       | Gets or sets the MobileYCoordinate.                                       |
| [`MobileZCoordinate`](#Spring.MobileZCoordinate)                                                                       | Gets or sets the MobileZCoordinate.                                       |
| [`ReferenceBeamRadius`](#Spring.ReferenceBeamRadius)                                                                   | Gets or sets the ReferenceBeamRadius.                                     |
| [`ReferenceXCoordinate`](#Spring.ReferenceXCoordinate)                                                                 | Gets or sets the ReferenceXCoordinate.                                    |
| [`ReferenceYCoordinate`](#Spring.ReferenceYCoordinate)                                                                 | Gets or sets the ReferenceYCoordinate.                                    |
| [`ReferenceZCoordinate`](#Spring.ReferenceZCoordinate)                                                                 | Gets or sets the ReferenceZCoordinate.                                    |
| [`SpringLength`](#Spring.SpringLength)                                                                                 | Gets the SpringLength.                                                    |
| [`LongitudinalDamping`](#Spring.LongitudinalDamping)                                                                   | Gets or sets the LongitudinalDamping.                                     |
| [`MobilePinballRegion`](#Spring.MobilePinballRegion)                                                                   | Gets or sets the MobilePinballRegion.                                     |
| [`FreeLength`](#Spring.FreeLength)                                                                                     | Gets or sets the FreeLength.                                              |
| [`Load`](#Spring.Load)                                                                                                 | Gets or sets the Load.                                                    |
| [`Rotation`](#Spring.Rotation)                                                                                         | Gets or sets the Rotation.                                                |
| [`Torque`](#Spring.Torque)                                                                                             | Gets or sets the Torque.                                                  |
| [`ReferencePinballRegion`](#Spring.ReferencePinballRegion)                                                             | Gets or sets the ReferencePinballRegion.                                  |
| [`TorsionalDamping`](#Spring.TorsionalDamping)                                                                         | Gets or sets the TorsionalDamping.                                        |
| [`TorsionalStiffness`](#Spring.TorsionalStiffness)                                                                     | Gets or sets the TorsionalStiffness.                                      |
| [`MobileAppliedBy`](#Spring.MobileAppliedBy)                                                                           | Gets or sets the MobileAppliedBy.                                         |
| [`ReferenceAppliedBy`](#Spring.ReferenceAppliedBy)                                                                     | Gets or sets the ReferenceAppliedBy.                                      |
| [`SpringBehavior`](../../../../Mechanical/DataModel/Enums/SpringBehavior.md#SpringBehavior)                            | Gets or sets the SpringBehavior.                                          |
| [`MobileBehavior`](#Spring.MobileBehavior)                                                                             | Gets or sets the MobileBehavior.                                          |
| [`PreloadType`](#Spring.PreloadType)                                                                                   | Gets or sets the PreloadType.                                             |
| [`ReferenceBehavior`](#Spring.ReferenceBehavior)                                                                       | Gets or sets the ReferenceBehavior.                                       |
| [`Scope`](#Spring.Scope)                                                                                               | Gets or sets the Scope.                                                   |
| [`SpringType`](../../../../Mechanical/DataModel/Enums/SpringType.md#SpringType)                                        | Gets or sets the SpringType.                                              |
| [`Visible`](#Spring.Visible)                                                                                           | Gets or sets the Visible.                                                 |
| [`Suppressed`](#Spring.Suppressed)                                                                                     | Gets or sets the Suppressed.                                              |
| [`MobileCoordinateSystem`](#Spring.MobileCoordinateSystem)                                                             | Gets or sets the MobileCoordinateSystem.                                  |
| [`ReferenceCoordinateSystem`](#Spring.ReferenceCoordinateSystem)                                                       | Gets or sets the ReferenceCoordinateSystem.                               |
| [`MobileLocation`](#Spring.MobileLocation)                                                                             | Gets or sets the MobileLocation.                                          |
| [`MobileScopeLocation`](#Spring.MobileScopeLocation)                                                                   | Gets or sets the MobileScopeLocation.                                     |
| [`ReferenceLocation`](#Spring.ReferenceLocation)                                                                       | Gets or sets the ReferenceLocation.                                       |
| [`ReferenceScopeLocation`](#Spring.ReferenceScopeLocation)                                                             | Gets or sets the ReferenceScopeLocation.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                              |
| [`Children`](#Spring.Children)                                                                                         | Gets the list of children.                                                |
| [`Comments`](#Spring.Comments)                                                                                         | Gets the list of associated comments.                                     |
| [`Figures`](#Spring.Figures)                                                                                           | Gets the list of associated figures.                                      |
| [`Images`](#Spring.Images)                                                                                             | Gets the list of associated images.                                       |
| [`ReadOnly`](#Spring.ReadOnly)                                                                                         | Gets or sets the ReadOnly.                                                |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                        |
| [`Properties`](#Spring.Properties)                                                                                     | Gets the list of properties for this object.                              |
| [`VisibleProperties`](#Spring.VisibleProperties)                                                                       | Gets the list of properties that are visible for this object.             |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Spring
```

## Property detail

### *property* Spring.NonLinearLongitudinalStiffness *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Spring.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Spring.SpringBehavior *: [Ansys.Mechanical.DataModel.Enums.SpringBehavior](../../../../Mechanical/DataModel/Enums/SpringBehavior.md#SpringBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Spring.PreloadType *: [Ansys.Mechanical.DataModel.Enums.SpringPreloadType](../../../../Mechanical/DataModel/Enums/SpringPreloadType.md#SpringPreloadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreloadType.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

### *property* Spring.SpringType *: [Ansys.Mechanical.DataModel.Enums.SpringType](../../../../Mechanical/DataModel/Enums/SpringType.md#SpringType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringType.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Spring.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Spring.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Spring.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Spring.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### Spring.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Spring.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Spring.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Spring.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
