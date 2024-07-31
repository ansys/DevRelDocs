# `ImportedCondensedPart`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ImportCondensedPart`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.ImportCondensedPart)                                   | Run the Import Condensed Part action.                                             |
| [`CreateNodalNamedSelections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CreateNodalNamedSelections)                     | CreateNodalNamedSelections method.                                                |
| [`CreateNodalNamedSelectionFromNodeIds`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CreateNodalNamedSelectionFromNodeIds) | CreateNodalNamedSelectionFromNodeIds method.                                      |
| [`CreateRemotePoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CreateRemotePoints)                                     | CreateRemotePoints method.                                                        |
| [`CreateRemotePointFromNodeIds`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CreateRemotePointFromNodeIds)                 | CreateRemotePointFromNodeIds method.                                              |
| [`CreateJoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CreateJoints)                                                 | CreateJoints method.                                                              |
| [`CreateJointFromNodeIds`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CreateJointFromNodeIds)                             | CreateJointFromNodeIds method.                                                    |
| [`ReadInterfaceData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.ReadInterfaceData)                                       | Run the Read Interface Data action.                                               |
| [`UpdateNodeLocation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.UpdateNodeLocation)                                     | Update Node Location of Original Interfaces Data view table.                      |
| [`GetOriginalNodeCoordinates`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.GetOriginalNodeCoordinates)                     | Get all the Node Locations of the Original Interfaces Data table.                 |
| [`GetTransformedNodeCoordinates`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.GetTransformedNodeCoordinates)               | Get all the Node Locations of the Transformed Interfaces Data table.              |
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.AddCommandSnippet)                                       | Creates a new CommandSnippet                                                      |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.ClearGeneratedData)                                     | Run the ClearGeneratedData action.                                                |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Delete)                                                             | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#id1)                                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#id1)                                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.AddComment)                                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.AddFigure)                                                       | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.AddImage)                                                         | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Activate)                                                         | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CopyTo)                                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Duplicate)                                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.GroupAllSimilarChildren)                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.GroupSimilarObjects)                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.PropertyByName)                                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.PropertyByAPIName)                                       | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CreateParameter)                                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.GetParameter)                                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.RemoveParameter)                                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`ActualNodeOffset`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.ActualNodeOffset)               | Gets the ActualNodeOffset.                                    |
| [`CondensedPartFileName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CondensedPartFileName)     | Gets or sets the CondensedPartFileName.                       |
| [`NodeOffset`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.NodeOffset)                           | Gets or sets the NodeOffset.                                  |
| [`CondensedPartUnitSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CondensedPartUnitSystem) | Gets or sets the CondensedPartUnitSystem.                     |
| [`ImportFileFormat`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.ImportFileFormat)               | Gets or sets the ImportFileFormat.                            |
| [`ImportStatus`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.ImportStatus)                       | Gets the ImportStatus.                                        |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`NumberInterfaceEntries`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.NumberMasterNodes)             | Gets the NumberMasterNodes.                                   |
| [`SolutionName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.SolutionName)                       | Gets or sets the SolutionName.                                |
| [`SolverFilesDirectory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`TemperatureUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.TemperatureUnits)               | Gets the TemperatureUnits.                                    |
| [`ReferenceTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                        |
| [`Physics`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Physics)                                 | Gets the Physics.                                             |
| [`SolverUnitSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                            |
| [`SolutionNameMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.SolutionNameMode)               | Gets or sets the SolutionNameMode.                            |
| [`SolverUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.SolverUnits)                         | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`GeometrySelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ImportedCondensedPart.md#ImportedCondensedPart.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCondensedPart.InternalObject"></a>

### *property* ImportedCondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ActualNodeOffset"></a>

### *property* ImportedCondensedPart.ActualNodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActualNodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CondensedPartFileName"></a>

### *property* ImportedCondensedPart.CondensedPartFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartFileName.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.NodeOffset"></a>

### *property* ImportedCondensedPart.NodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CondensedPartUnitSystem"></a>

### *property* ImportedCondensedPart.CondensedPartUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ImportFileFormat"></a>

### *property* ImportedCondensedPart.ImportFileFormat *: [Ansys.Mechanical.DataModel.Enums.CondensedPartFileFormat](../../../Mechanical/DataModel/Enums/CondensedPartFileFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportFileFormat.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ImportStatus"></a>

### *property* ImportedCondensedPart.ImportStatus *: [Ansys.Mechanical.DataModel.Enums.ImportedCondensedPartStatus](../../../Mechanical/DataModel/Enums/ImportedCondensedPartStatus.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ImportedCondensedPartStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportStatus.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CoordinateSystem"></a>

### *property* ImportedCondensedPart.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.DataModelObjectCategory"></a>

### *property* ImportedCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.NumberInterfaceEntries"></a>

### *property* ImportedCondensedPart.NumberInterfaceEntries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.NumberMasterNodes"></a>

### *property* ImportedCondensedPart.NumberMasterNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolutionName"></a>

### *property* ImportedCondensedPart.SolutionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolverFilesDirectory"></a>

### *property* ImportedCondensedPart.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.TemperatureUnits"></a>

### *property* ImportedCondensedPart.TemperatureUnits *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ReferenceTemperature"></a>

### *property* ImportedCondensedPart.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Physics"></a>

### *property* ImportedCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolverUnitSystem"></a>

### *property* ImportedCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolutionNameMode"></a>

### *property* ImportedCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolverUnits"></a>

### *property* ImportedCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Suppressed"></a>

### *property* ImportedCondensedPart.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GeometrySelection"></a>

### *property* ImportedCondensedPart.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Children"></a>

### *property* ImportedCondensedPart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Comments"></a>

### *property* ImportedCondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Figures"></a>

### *property* ImportedCondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Images"></a>

### *property* ImportedCondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedCondensedPart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Properties"></a>

### *property* ImportedCondensedPart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.VisibleProperties"></a>

### *property* ImportedCondensedPart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCondensedPart.ImportCondensedPart"></a>

### ImportedCondensedPart.ImportCondensedPart()

Run the Import Condensed Part action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateNodalNamedSelections"></a>

### ImportedCondensedPart.CreateNodalNamedSelections(selectedInterfaceIDNumbers: System.Collections.Generic.IEnumerable[System.Int32])

CreateNodalNamedSelections method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateNodalNamedSelectionFromNodeIds"></a>

### ImportedCondensedPart.CreateNodalNamedSelectionFromNodeIds(selectedNodeIds: System.Collections.Generic.IEnumerable[System.Int32])

CreateNodalNamedSelectionFromNodeIds method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateRemotePoints"></a>

### ImportedCondensedPart.CreateRemotePoints(selectedInterfaceIDNumbers: System.Collections.Generic.IEnumerable[System.Int32])

CreateRemotePoints method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateRemotePointFromNodeIds"></a>

### ImportedCondensedPart.CreateRemotePointFromNodeIds(selectedNodeIds: System.Collections.Generic.IEnumerable[System.Int32])

CreateRemotePointFromNodeIds method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateJoints"></a>

### ImportedCondensedPart.CreateJoints(selectedInterfaceIDNumbers: System.Collections.Generic.IEnumerable[System.Int32])

CreateJoints method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateJointFromNodeIds"></a>

### ImportedCondensedPart.CreateJointFromNodeIds(selectedNodeIds: System.Collections.Generic.IEnumerable[System.Int32])

CreateJointFromNodeIds method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ReadInterfaceData"></a>

### ImportedCondensedPart.ReadInterfaceData()

Run the Read Interface Data action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.UpdateNodeLocation"></a>

### ImportedCondensedPart.UpdateNodeLocation(iNodeID: System.Int32, locX: Ansys.Core.Units.Quantity, locY: Ansys.Core.Units.Quantity, locZ: Ansys.Core.Units.Quantity, rotX: Ansys.Core.Units.Quantity, rotY: Ansys.Core.Units.Quantity, rotZ: Ansys.Core.Units.Quantity)

Update Node Location of Original Interfaces Data view table.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GetOriginalNodeCoordinates"></a>

### ImportedCondensedPart.GetOriginalNodeCoordinates()

Get all the Node Locations of the Original Interfaces Data table.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GetTransformedNodeCoordinates"></a>

### ImportedCondensedPart.GetTransformedNodeCoordinates()

Get all the Node Locations of the Transformed Interfaces Data table.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.AddCommandSnippet"></a>

### ImportedCondensedPart.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ClearGeneratedData"></a>

### ImportedCondensedPart.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Delete"></a>

### ImportedCondensedPart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GetChildren"></a>

### ImportedCondensedPart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedCondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.AddComment"></a>

### ImportedCondensedPart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.AddFigure"></a>

### ImportedCondensedPart.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.AddImage"></a>

### ImportedCondensedPart.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Activate"></a>

### ImportedCondensedPart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CopyTo"></a>

### ImportedCondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Duplicate"></a>

### ImportedCondensedPart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GroupAllSimilarChildren"></a>

### ImportedCondensedPart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GroupSimilarObjects"></a>

### ImportedCondensedPart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.PropertyByName"></a>

### ImportedCondensedPart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.PropertyByAPIName"></a>

### ImportedCondensedPart.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateParameter"></a>

### ImportedCondensedPart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GetParameter"></a>

### ImportedCondensedPart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.RemoveParameter"></a>

### ImportedCondensedPart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

