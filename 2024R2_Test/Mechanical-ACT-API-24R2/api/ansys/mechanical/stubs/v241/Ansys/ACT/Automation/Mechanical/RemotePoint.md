# `RemotePoint`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `GetMeshRegion`           | Returns the mesh region associated to the remote point.                           |
| `PromoteToNamedSelection` | Run the PromoteToNamedSelection action.                                           |
| `AddCommandSnippet`       | Creates a new CommandSnippet                                                      |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `PilotNodeAPDLName`       | Gets or sets the PilotNodeAPDLName.                           |
| `OutlineSelection`        | Gets or sets the OutlineSelection.                            |
| `GloballyAvailable`       | Remote point is globally available                            |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Material`                | Gets or sets the Material.                                    |
| `Radius`                  | Gets or sets the Radius.                                      |
| `XCoordinate`             | Gets or sets the XCoordinate.                                 |
| `YCoordinate`             | Gets or sets the YCoordinate.                                 |
| `ZCoordinate`             | Gets or sets the ZCoordinate.                                 |
| `PinballRegion`           | Gets or sets the PinballRegion.                               |
| `Behavior`                | Gets or sets the Behavior.                                    |
| `XComponent`              | Gets or sets the XComponent.                                  |
| `YComponent`              | Gets or sets the YComponent.                                  |
| `ZComponent`              | Gets or sets the ZComponent.                                  |
| `DOFSelection`            | Gets or sets the DOFSelection.                                |
| `ScopingMethod`           | Gets or sets the ScopingMethod.                               |
| `PilotNodeScopingType`    | Gets or sets the PilotNodeScopingType.                        |
| `Formulation`             | Gets or sets the Formulation.                                 |
| `RotationX`               | Gets or sets the RotationX.                                   |
| `RotationY`               | Gets or sets the RotationY.                                   |
| `RotationZ`               | Gets or sets the RotationZ.                                   |
| `RelaxationMethod`        | Gets or sets the RelaxationMethod.                            |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `Point`                   | Gets or sets the Point.                                       |
| `CoordinateSystem`        | Gets or sets the CoordinateSystem.                            |
| `Location`                | Gets or sets the Location.                                    |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* RemotePoint.PilotNodeAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PilotNodeAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.OutlineSelection *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.RemotePoint](#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutlineSelection.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.GloballyAvailable *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Remote point is globally available

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRemotePointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.XComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.YComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.ZComponent *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType](../../../Mechanical/DataModel/Enums/RemotePointDOFSelectionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointDOFSelectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.PilotNodeScopingType *: [Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType](../../../Mechanical/DataModel/Enums/PilotNodeScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PilotNodeScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PilotNodeScopingType.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Formulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.RotationX *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.RotationY *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.RotationZ *: [Ansys.Mechanical.DataModel.Enums.ActiveOrInactive](../../../Mechanical/DataModel/Enums/ActiveOrInactive.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ActiveOrInactive) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.RelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelaxationMethod.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Point *: [Ansys.ACT.Automation.Mechanical.ConstructionPoint](ConstructionPoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionPoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Point.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RemotePoint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### RemotePoint.GetMeshRegion()

Returns the mesh region associated to the remote point.

<!-- !! processed by numpydoc !! -->

### RemotePoint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### RemotePoint.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### RemotePoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RemotePoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RemotePoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RemotePoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RemotePoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RemotePoint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RemotePoint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### RemotePoint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RemotePoint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RemotePoint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

