# ImportedCondensedPart

### *class* ImportedCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCondensedPart.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ImportCondensedPart`](#ImportedCondensedPart.ImportCondensedPart)                                   | Run the Import Condensed Part action.                                             |
|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`CreateNodalNamedSelections`](#ImportedCondensedPart.CreateNodalNamedSelections)                     | CreateNodalNamedSelections method.                                                |
| [`CreateNodalNamedSelectionFromNodeIds`](#ImportedCondensedPart.CreateNodalNamedSelectionFromNodeIds) | CreateNodalNamedSelectionFromNodeIds method.                                      |
| [`CreateRemotePoints`](#ImportedCondensedPart.CreateRemotePoints)                                     | CreateRemotePoints method.                                                        |
| [`CreateRemotePointFromNodeIds`](#ImportedCondensedPart.CreateRemotePointFromNodeIds)                 | CreateRemotePointFromNodeIds method.                                              |
| [`CreateJoints`](#ImportedCondensedPart.CreateJoints)                                                 | CreateJoints method.                                                              |
| [`CreateJointFromNodeIds`](#ImportedCondensedPart.CreateJointFromNodeIds)                             | CreateJointFromNodeIds method.                                                    |
| [`ReadInterfaceData`](#ImportedCondensedPart.ReadInterfaceData)                                       | Run the Read Interface Data action.                                               |
| [`UpdateNodeLocation`](#ImportedCondensedPart.UpdateNodeLocation)                                     | Update Node Location of Original Interfaces Data view table.                      |
| [`GetOriginalNodeCoordinates`](#ImportedCondensedPart.GetOriginalNodeCoordinates)                     | Get all the Node Locations of the Original Interfaces Data table.                 |
| [`GetTransformedNodeCoordinates`](#ImportedCondensedPart.GetTransformedNodeCoordinates)               | Get all the Node Locations of the Transformed Interfaces Data table.              |
| [`AddCommandSnippet`](#ImportedCondensedPart.AddCommandSnippet)                                       | Creates a new CommandSnippet                                                      |
| [`ClearGeneratedData`](#ImportedCondensedPart.ClearGeneratedData)                                     | Run the ClearGeneratedData action.                                                |
| [`Delete`](#ImportedCondensedPart.Delete)                                                             | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedCondensedPart.AddComment)                                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCondensedPart.AddFigure)                                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCondensedPart.AddImage)                                                         | Creates a new child Image.                                                        |
| [`Activate`](#ImportedCondensedPart.Activate)                                                         | Activate the current object.                                                      |
| [`CopyTo`](#ImportedCondensedPart.CopyTo)                                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedCondensedPart.Duplicate)                                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedCondensedPart.GroupAllSimilarChildren)                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCondensedPart.GroupSimilarObjects)                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedCondensedPart.PropertyByName)                                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedCondensedPart.PropertyByAPIName)                                       | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedCondensedPart.CreateParameter)                                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedCondensedPart.GetParameter)                                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedCondensedPart.RemoveParameter)                                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActualNodeOffset`](#ImportedCondensedPart.ActualNodeOffset)                                                       | Gets the ActualNodeOffset.                                    |
| [`CondensedPartFileName`](#ImportedCondensedPart.CondensedPartFileName)                                             | Gets or sets the CondensedPartFileName.                       |
| [`NodeOffset`](#ImportedCondensedPart.NodeOffset)                                                                   | Gets or sets the NodeOffset.                                  |
| [`CondensedPartUnitSystem`](#ImportedCondensedPart.CondensedPartUnitSystem)                                         | Gets or sets the CondensedPartUnitSystem.                     |
| [`ImportFileFormat`](#ImportedCondensedPart.ImportFileFormat)                                                       | Gets or sets the ImportFileFormat.                            |
| [`ImportStatus`](#ImportedCondensedPart.ImportStatus)                                                               | Gets the ImportStatus.                                        |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`NumberInterfaceEntries`](#ImportedCondensedPart.NumberInterfaceEntries)                                           | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](#ImportedCondensedPart.NumberMasterNodes)                                                     | Gets the NumberMasterNodes.                                   |
| [`SolutionName`](#ImportedCondensedPart.SolutionName)                                                               | Gets or sets the SolutionName.                                |
| [`SolverFilesDirectory`](#ImportedCondensedPart.SolverFilesDirectory)                                               | Gets the SolverFilesDirectory.                                |
| [`TemperatureUnits`](#ImportedCondensedPart.TemperatureUnits)                                                       | Gets the TemperatureUnits.                                    |
| [`ReferenceTemperature`](#ImportedCondensedPart.ReferenceTemperature)                                               | Gets or sets the ReferenceTemperature.                        |
| [`Physics`](#ImportedCondensedPart.Physics)                                                                         | Gets the Physics.                                             |
| [`SolverUnitSystem`](#ImportedCondensedPart.SolverUnitSystem)                                                       | Gets or sets the SolverUnitSystem.                            |
| [`SolutionNameMode`](#ImportedCondensedPart.SolutionNameMode)                                                       | Gets or sets the SolutionNameMode.                            |
| [`SolverUnits`](#ImportedCondensedPart.SolverUnits)                                                                 | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](#ImportedCondensedPart.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`GeometrySelection`](#ImportedCondensedPart.GeometrySelection)                                                     | Gets or sets the GeometrySelection.                           |
| [`Children`](#ImportedCondensedPart.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#ImportedCondensedPart.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#ImportedCondensedPart.Figures)                                                                         | Gets the list of associated figures.                          |
| [`Images`](#ImportedCondensedPart.Images)                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedCondensedPart.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedCondensedPart.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedCondensedPart
```

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

### *property* ImportedCondensedPart.CondensedPartUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.ImportFileFormat *: [Ansys.Mechanical.DataModel.Enums.CondensedPartFileFormat](../../../Mechanical/DataModel/Enums/CondensedPartFileFormat.md#CondensedPartFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportFileFormat.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.ImportStatus *: [Ansys.Mechanical.DataModel.Enums.ImportedCondensedPartStatus](../../../Mechanical/DataModel/Enums/ImportedCondensedPartStatus.md#ImportedCondensedPartStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportStatus.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

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

### *property* ImportedCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedCondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ImportedCondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### ImportedCondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ImportedCondensedPart.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
