# Beam

### *class* Beam

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Beam.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#Beam.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#Beam.PromoteToRemotePoint)         | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#Beam.AddCommandSnippet)               | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#Beam.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Beam.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Beam.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Beam.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Beam.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#Beam.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#Beam.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Beam.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Beam.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Beam.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Beam.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Beam.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#Beam.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Beam.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Beam.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BeamElementAPDLName`](#Beam.BeamElementAPDLName)                                                                     | Gets or sets the BeamElementAPDLName.                         |
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`MobileBeamMaterial`](#Beam.MobileBeamMaterial)                                                                       | Gets or sets the MobileBeamMaterial.                          |
| [`MobileBody`](#Beam.MobileBody)                                                                                       | Gets the MobileBody.                                          |
| [`ReferenceBeamMaterial`](#Beam.ReferenceBeamMaterial)                                                                 | Gets or sets the ReferenceBeamMaterial.                       |
| [`ReferenceBody`](#Beam.ReferenceBody)                                                                                 | Gets the ReferenceBody.                                       |
| [`MobileBeamRadius`](#Beam.MobileBeamRadius)                                                                           | Gets or sets the MobileBeamRadius.                            |
| [`MobileXCoordinate`](#Beam.MobileXCoordinate)                                                                         | Gets or sets the MobileXCoordinate.                           |
| [`MobileYCoordinate`](#Beam.MobileYCoordinate)                                                                         | Gets or sets the MobileYCoordinate.                           |
| [`MobileZCoordinate`](#Beam.MobileZCoordinate)                                                                         | Gets or sets the MobileZCoordinate.                           |
| [`MobilePinballRegion`](#Beam.MobilePinballRegion)                                                                     | Gets or sets the MobilePinballRegion.                         |
| [`Radius`](#Beam.Radius)                                                                                               | Gets or sets the Radius.                                      |
| [`ReferenceBeamRadius`](#Beam.ReferenceBeamRadius)                                                                     | Gets or sets the ReferenceBeamRadius.                         |
| [`ReferenceXCoordinate`](#Beam.ReferenceXCoordinate)                                                                   | Gets or sets the ReferenceXCoordinate.                        |
| [`ReferenceYCoordinate`](#Beam.ReferenceYCoordinate)                                                                   | Gets or sets the ReferenceYCoordinate.                        |
| [`ReferenceZCoordinate`](#Beam.ReferenceZCoordinate)                                                                   | Gets or sets the ReferenceZCoordinate.                        |
| [`ReferencePinballRegion`](#Beam.ReferencePinballRegion)                                                               | Gets or sets the ReferencePinballRegion.                      |
| [`CrossSection`](../CrossSection.md#CrossSection)                                                                      | Gets the CrossSection.                                        |
| [`MobileAppliedBy`](#Beam.MobileAppliedBy)                                                                             | Gets or sets the MobileAppliedBy.                             |
| [`MobileBehavior`](#Beam.MobileBehavior)                                                                               | Gets or sets the MobileBehavior.                              |
| [`ReferenceAppliedBy`](#Beam.ReferenceAppliedBy)                                                                       | Gets or sets the ReferenceAppliedBy.                          |
| [`ReferenceBehavior`](#Beam.ReferenceBehavior)                                                                         | Gets or sets the ReferenceBehavior.                           |
| [`Scope`](#Beam.Scope)                                                                                                 | Gets or sets the Scope.                                       |
| [`Visible`](#Beam.Visible)                                                                                             | Gets or sets the Visible.                                     |
| [`Suppressed`](#Beam.Suppressed)                                                                                       | Gets or sets the Suppressed.                                  |
| [`MobileCoordinateSystem`](#Beam.MobileCoordinateSystem)                                                               | Gets or sets the MobileCoordinateSystem.                      |
| [`ReferenceCoordinateSystem`](#Beam.ReferenceCoordinateSystem)                                                         | Gets or sets the ReferenceCoordinateSystem.                   |
| [`MobileLocation`](#Beam.MobileLocation)                                                                               | Gets or sets the MobileLocation.                              |
| [`ReferenceLocationPoint`](#Beam.ReferenceLocationPoint)                                                               | Gets or sets the ReferenceLocationPoint.                      |
| [`ReferenceLocation`](#Beam.ReferenceLocation)                                                                         | Gets or sets the ReferenceLocation.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Beam.Children)                                                                                           | Gets the list of children.                                    |
| [`Comments`](#Beam.Comments)                                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#Beam.Figures)                                                                                             | Gets the list of associated figures.                          |
| [`Images`](#Beam.Images)                                                                                               | Gets the list of associated images.                           |
| [`ReadOnly`](#Beam.ReadOnly)                                                                                           | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Beam.Properties)                                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Beam.VisibleProperties)                                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Beam
```

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

### *property* Beam.CrossSection *: [Ansys.Mechanical.DataModel.Enums.CrossSectionType](../../../../Mechanical/DataModel/Enums/CrossSectionType.md#CrossSectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSection.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Beam.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Beam.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Beam.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Beam.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### Beam.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Beam.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Beam.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Beam.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
