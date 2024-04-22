<a id="importedcondensedpart"></a>

# ImportedCondensedPart

<a id="ImportedCondensedPart"></a>

### *class* ImportedCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedCondensedPart.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ImportCondensedPart`](#ImportedCondensedPart.ImportCondensedPart)                                   | Run the Import Condensed Part action.                                             |
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

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedCondensedPart
```

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

### *property* ImportedCondensedPart.CondensedPartUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ImportFileFormat"></a>

### *property* ImportedCondensedPart.ImportFileFormat *: [Ansys.Mechanical.DataModel.Enums.CondensedPartFileFormat](../../../Mechanical/DataModel/Enums/CondensedPartFileFormat.md#CondensedPartFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportFileFormat.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ImportStatus"></a>

### *property* ImportedCondensedPart.ImportStatus *: [Ansys.Mechanical.DataModel.Enums.ImportedCondensedPartStatus](../../../Mechanical/DataModel/Enums/ImportedCondensedPartStatus.md#ImportedCondensedPartStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportStatus.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CoordinateSystem"></a>

### *property* ImportedCondensedPart.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.DataModelObjectCategory"></a>

### *property* ImportedCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolverUnitSystem"></a>

### *property* ImportedCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolutionNameMode"></a>

### *property* ImportedCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolverUnits"></a>

### *property* ImportedCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ImportedCondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Figures"></a>

### *property* ImportedCondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Images"></a>

### *property* ImportedCondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### ImportedCondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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
