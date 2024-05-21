# Bearing

<a id="Bearing"></a>

### *class* Bearing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Bearing.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#Bearing.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
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

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ReferenceSet`](#Bearing.ReferenceSet)                                                                                | Gets the ReferenceSet.                                        |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Bearing
```

<a id="property-detail"></a>

## Property detail

<a id="Bearing.ReferenceSet"></a>

### *property* Bearing.ReferenceSet *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceSet.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.InternalObject"></a>

### *property* Bearing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBearingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AnsBCType"></a>

### *property* Bearing.AnsBCType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnsBCType.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBeamMaterial"></a>

### *property* Bearing.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBody"></a>

### *property* Bearing.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBeamMaterial"></a>

### *property* Bearing.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBodyName"></a>

### *property* Bearing.ReferenceBodyName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBodyName.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC11"></a>

### *property* Bearing.DampingC11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC11.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC12"></a>

### *property* Bearing.DampingC12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC12.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC21"></a>

### *property* Bearing.DampingC21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC21.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DampingC22"></a>

### *property* Bearing.DampingC22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC22.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK11"></a>

### *property* Bearing.StiffnessK11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK11.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK12"></a>

### *property* Bearing.StiffnessK12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK12.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK21"></a>

### *property* Bearing.StiffnessK21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK21.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.StiffnessK22"></a>

### *property* Bearing.StiffnessK22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK22.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBeamRadius"></a>

### *property* Bearing.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileXCoordinate"></a>

### *property* Bearing.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileYCoordinate"></a>

### *property* Bearing.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileZCoordinate"></a>

### *property* Bearing.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobilePinballSize"></a>

### *property* Bearing.MobilePinballSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballSize.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBeamRadius"></a>

### *property* Bearing.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceXCoordinate"></a>

### *property* Bearing.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceYCoordinate"></a>

### *property* Bearing.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceZCoordinate"></a>

### *property* Bearing.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferencePinballRegion"></a>

### *property* Bearing.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileBehavior"></a>

### *property* Bearing.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceBehavior"></a>

### *property* Bearing.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceRotationPlane"></a>

### *property* Bearing.ReferenceRotationPlane *: [Ansys.Mechanical.DataModel.Enums.RotationPlane](../../../../Mechanical/DataModel/Enums/RotationPlane.md#RotationPlane) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRotationPlane.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ConnectionType"></a>

### *property* Bearing.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.ConnectionScopingType](../../../../Mechanical/DataModel/Enums/ConnectionScopingType.md#ConnectionScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Suppressed"></a>

### *property* Bearing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileCoordinateSystem"></a>

### *property* Bearing.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceCoordinateSystem"></a>

### *property* Bearing.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.MobileLocation"></a>

### *property* Bearing.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReferenceLocation"></a>

### *property* Bearing.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.DataModelObjectCategory"></a>

### *property* Bearing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Children"></a>

### *property* Bearing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Comments"></a>

### *property* Bearing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Figures"></a>

### *property* Bearing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Images"></a>

### *property* Bearing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.ReadOnly"></a>

### *property* Bearing.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Bearing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Properties"></a>

### *property* Bearing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.VisibleProperties"></a>

### *property* Bearing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Bearing.PromoteToNamedSelection"></a>

### Bearing.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PromoteToRemotePoint"></a>

### Bearing.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddCommandSnippet"></a>

### Bearing.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Bearing.RenameBasedOnDefinition"></a>

### Bearing.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Delete"></a>

### Bearing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetChildren"></a>

### Bearing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Bearing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddComment"></a>

### Bearing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddFigure"></a>

### Bearing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.AddImage"></a>

### Bearing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Activate"></a>

### Bearing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.CopyTo"></a>

### Bearing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.Duplicate"></a>

### Bearing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GroupAllSimilarChildren"></a>

### Bearing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GroupSimilarObjects"></a>

### Bearing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PropertyByName"></a>

### Bearing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.PropertyByAPIName"></a>

### Bearing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.CreateParameter"></a>

### Bearing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.GetParameter"></a>

### Bearing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Bearing.RemoveParameter"></a>

### Bearing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
