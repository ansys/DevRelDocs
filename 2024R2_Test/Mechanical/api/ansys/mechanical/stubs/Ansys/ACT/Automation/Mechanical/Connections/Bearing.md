# Bearing

### *class* Bearing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Bearing.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToNamedSelection`](#Bearing.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#Bearing.PromoteToRemotePoint)         | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#Bearing.AddCommandSnippet)               | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#Bearing.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Bearing.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Bearing.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#Bearing.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#Bearing.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#Bearing.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#Bearing.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Bearing.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Bearing.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Bearing.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Bearing.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Bearing.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#Bearing.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Bearing.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Bearing.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ReferenceSet`](#Bearing.ReferenceSet)                                                                                | Gets the ReferenceSet.                                        |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`AnsBCType`](#Bearing.AnsBCType)                                                                                      | Gets the AnsBCType.                                           |
| [`MobileBeamMaterial`](#Bearing.MobileBeamMaterial)                                                                    | Gets or sets the MobileBeamMaterial.                          |
| [`MobileBody`](#Bearing.MobileBody)                                                                                    | Gets the MobileBody.                                          |
| [`ReferenceBeamMaterial`](#Bearing.ReferenceBeamMaterial)                                                              | Gets or sets the ReferenceBeamMaterial.                       |
| [`ReferenceBodyName`](#Bearing.ReferenceBodyName)                                                                      | Gets the ReferenceBodyName.                                   |
| [`DampingC11`](#Bearing.DampingC11)                                                                                    | Gets the DampingC11.                                          |
| [`DampingC12`](#Bearing.DampingC12)                                                                                    | Gets the DampingC12.                                          |
| [`DampingC21`](#Bearing.DampingC21)                                                                                    | Gets the DampingC21.                                          |
| [`DampingC22`](#Bearing.DampingC22)                                                                                    | Gets the DampingC22.                                          |
| [`StiffnessK11`](#Bearing.StiffnessK11)                                                                                | Gets the StiffnessK11.                                        |
| [`StiffnessK12`](#Bearing.StiffnessK12)                                                                                | Gets the StiffnessK12.                                        |
| [`StiffnessK21`](#Bearing.StiffnessK21)                                                                                | Gets the StiffnessK21.                                        |
| [`StiffnessK22`](#Bearing.StiffnessK22)                                                                                | Gets the StiffnessK22.                                        |
| [`MobileBeamRadius`](#Bearing.MobileBeamRadius)                                                                        | Gets or sets the MobileBeamRadius.                            |
| [`MobileXCoordinate`](#Bearing.MobileXCoordinate)                                                                      | Gets or sets the MobileXCoordinate.                           |
| [`MobileYCoordinate`](#Bearing.MobileYCoordinate)                                                                      | Gets or sets the MobileYCoordinate.                           |
| [`MobileZCoordinate`](#Bearing.MobileZCoordinate)                                                                      | Gets or sets the MobileZCoordinate.                           |
| [`MobilePinballSize`](#Bearing.MobilePinballSize)                                                                      | Gets or sets the MobilePinballSize.                           |
| [`ReferenceBeamRadius`](#Bearing.ReferenceBeamRadius)                                                                  | Gets or sets the ReferenceBeamRadius.                         |
| [`ReferenceXCoordinate`](#Bearing.ReferenceXCoordinate)                                                                | Gets or sets the ReferenceXCoordinate.                        |
| [`ReferenceYCoordinate`](#Bearing.ReferenceYCoordinate)                                                                | Gets or sets the ReferenceYCoordinate.                        |
| [`ReferenceZCoordinate`](#Bearing.ReferenceZCoordinate)                                                                | Gets or sets the ReferenceZCoordinate.                        |
| [`ReferencePinballRegion`](#Bearing.ReferencePinballRegion)                                                            | Gets or sets the ReferencePinballRegion.                      |
| [`MobileBehavior`](#Bearing.MobileBehavior)                                                                            | Gets or sets the MobileBehavior.                              |
| [`ReferenceBehavior`](#Bearing.ReferenceBehavior)                                                                      | Gets or sets the ReferenceBehavior.                           |
| [`ReferenceRotationPlane`](#Bearing.ReferenceRotationPlane)                                                            | Gets or sets the ReferenceRotationPlane.                      |
| [`ConnectionType`](#Bearing.ConnectionType)                                                                            | Gets or sets the ConnectionType.                              |
| [`Suppressed`](#Bearing.Suppressed)                                                                                    | Gets or sets the Suppressed.                                  |
| [`MobileCoordinateSystem`](#Bearing.MobileCoordinateSystem)                                                            | Gets or sets the MobileCoordinateSystem.                      |
| [`ReferenceCoordinateSystem`](#Bearing.ReferenceCoordinateSystem)                                                      | Gets or sets the ReferenceCoordinateSystem.                   |
| [`MobileLocation`](#Bearing.MobileLocation)                                                                            | Gets or sets the MobileLocation.                              |
| [`ReferenceLocation`](#Bearing.ReferenceLocation)                                                                      | Gets or sets the ReferenceLocation.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Bearing.Children)                                                                                        | Gets the list of children.                                    |
| [`Comments`](#Bearing.Comments)                                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#Bearing.Figures)                                                                                          | Gets the list of associated figures.                          |
| [`Images`](#Bearing.Images)                                                                                            | Gets the list of associated images.                           |
| [`ReadOnly`](#Bearing.ReadOnly)                                                                                        | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Bearing.Properties)                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Bearing.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Bearing
```

## Property detail

### *property* Bearing.ReferenceSet *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceSet.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBearingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.AnsBCType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnsBCType.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceBodyName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBodyName.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.DampingC11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC11.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.DampingC12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC12.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.DampingC21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC21.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.DampingC22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC22.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.StiffnessK11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK11.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.StiffnessK12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK12.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.StiffnessK21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK21.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.StiffnessK22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK22.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobilePinballSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballSize.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceRotationPlane *: [Ansys.Mechanical.DataModel.Enums.RotationPlane](../../../../Mechanical/DataModel/Enums/RotationPlane.md#RotationPlane) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRotationPlane.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.ConnectionScopingType](../../../../Mechanical/DataModel/Enums/ConnectionScopingType.md#ConnectionScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Bearing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Bearing.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Bearing.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### Bearing.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Bearing.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Bearing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Bearing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Bearing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Bearing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Bearing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Bearing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Bearing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Bearing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Bearing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Bearing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Bearing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Bearing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Bearing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Bearing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Bearing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Bearing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
