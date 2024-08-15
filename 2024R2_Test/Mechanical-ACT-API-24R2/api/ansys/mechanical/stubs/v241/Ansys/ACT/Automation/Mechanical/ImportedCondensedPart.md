# `ImportedCondensedPart`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------|-----------------------------------------------------------------------------------|
| `ImportCondensedPart`                  | Run the Import Condensed Part action.                                             |
| `CreateNodalNamedSelections`           | CreateNodalNamedSelections method.                                                |
| `CreateNodalNamedSelectionFromNodeIds` | CreateNodalNamedSelectionFromNodeIds method.                                      |
| `CreateRemotePoints`                   | CreateRemotePoints method.                                                        |
| `CreateRemotePointFromNodeIds`         | CreateRemotePointFromNodeIds method.                                              |
| `CreateJoints`                         | CreateJoints method.                                                              |
| `CreateJointFromNodeIds`               | CreateJointFromNodeIds method.                                                    |
| `ReadInterfaceData`                    | Run the Read Interface Data action.                                               |
| `UpdateNodeLocation`                   | Update Node Location of Original Interfaces Data view table.                      |
| `GetOriginalNodeCoordinates`           | Get all the Node Locations of the Original Interfaces Data table.                 |
| `GetTransformedNodeCoordinates`        | Get all the Node Locations of the Transformed Interfaces Data table.              |
| `AddCommandSnippet`                    | Creates a new CommandSnippet                                                      |
| `ClearGeneratedData`                   | Run the ClearGeneratedData action.                                                |
| `Delete`                               | Run the Delete action.                                                            |
| `GetChildren`                          | Gets the list of children, filtered by type.                                      |
| `GetChildren`                          | Gets the list of children, filtered by type.                                      |
| `AddComment`                           | Creates a new child Comment.                                                      |
| `AddFigure`                            | Creates a new child Figure.                                                       |
| `AddImage`                             | Creates a new child Image.                                                        |
| `Activate`                             | Activate the current object.                                                      |
| `CopyTo`                               | Copies all visible properties from this object to another.                        |
| `Duplicate`                            | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`              | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                  | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                       | Get a property by its unique name.                                                |
| `PropertyByAPIName`                    | Get a property by its API name.                                                   |
| `CreateParameter`                      | Creates a new parameter for a Property.                                           |
| `GetParameter`                         | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                      | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `ActualNodeOffset`        | Gets the ActualNodeOffset.                                    |
| `CondensedPartFileName`   | Gets or sets the CondensedPartFileName.                       |
| `NodeOffset`              | Gets or sets the NodeOffset.                                  |
| `CondensedPartUnitSystem` | Gets or sets the CondensedPartUnitSystem.                     |
| `ImportFileFormat`        | Gets or sets the ImportFileFormat.                            |
| `ImportStatus`            | Gets the ImportStatus.                                        |
| `CoordinateSystem`        | Gets or sets the CoordinateSystem.                            |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `NumberInterfaceEntries`  | Gets the NumberInterfaceEntries.                              |
| `NumberMasterNodes`       | Gets the NumberMasterNodes.                                   |
| `SolutionName`            | Gets or sets the SolutionName.                                |
| `SolverFilesDirectory`    | Gets the SolverFilesDirectory.                                |
| `TemperatureUnits`        | Gets the TemperatureUnits.                                    |
| `ReferenceTemperature`    | Gets or sets the ReferenceTemperature.                        |
| `Physics`                 | Gets the Physics.                                             |
| `SolverUnitSystem`        | Gets or sets the SolverUnitSystem.                            |
| `SolutionNameMode`        | Gets or sets the SolutionNameMode.                            |
| `SolverUnits`             | Gets or sets the SolverUnits.                                 |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `GeometrySelection`       | Gets or sets the GeometrySelection.                           |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* ImportedCondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.ActualNodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActualNodeOffset.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.CondensedPartFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartFileName.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.NodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.CondensedPartUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.ImportFileFormat *: [Ansys.Mechanical.DataModel.Enums.CondensedPartFileFormat](../../../Mechanical/DataModel/Enums/CondensedPartFileFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportFileFormat.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.ImportStatus *: [Ansys.Mechanical.DataModel.Enums.ImportedCondensedPartStatus](../../../Mechanical/DataModel/Enums/ImportedCondensedPartStatus.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ImportedCondensedPartStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportStatus.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.NumberInterfaceEntries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.NumberMasterNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.SolutionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.TemperatureUnits *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ImportedCondensedPart.ImportCondensedPart()

Run the Import Condensed Part action.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.CreateNodalNamedSelections(selectedInterfaceIDNumbers: System.Collections.Generic.IEnumerable[System.Int32])

CreateNodalNamedSelections method.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.CreateNodalNamedSelectionFromNodeIds(selectedNodeIds: System.Collections.Generic.IEnumerable[System.Int32])

CreateNodalNamedSelectionFromNodeIds method.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.CreateRemotePoints(selectedInterfaceIDNumbers: System.Collections.Generic.IEnumerable[System.Int32])

CreateRemotePoints method.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.CreateRemotePointFromNodeIds(selectedNodeIds: System.Collections.Generic.IEnumerable[System.Int32])

CreateRemotePointFromNodeIds method.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.CreateJoints(selectedInterfaceIDNumbers: System.Collections.Generic.IEnumerable[System.Int32])

CreateJoints method.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.CreateJointFromNodeIds(selectedNodeIds: System.Collections.Generic.IEnumerable[System.Int32])

CreateJointFromNodeIds method.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.ReadInterfaceData()

Run the Read Interface Data action.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.UpdateNodeLocation(iNodeID: System.Int32, locX: Ansys.Core.Units.Quantity, locY: Ansys.Core.Units.Quantity, locZ: Ansys.Core.Units.Quantity, rotX: Ansys.Core.Units.Quantity, rotY: Ansys.Core.Units.Quantity, rotZ: Ansys.Core.Units.Quantity)

Update Node Location of Original Interfaces Data view table.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.GetOriginalNodeCoordinates()

Get all the Node Locations of the Original Interfaces Data table.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.GetTransformedNodeCoordinates()

Get all the Node Locations of the Transformed Interfaces Data table.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

