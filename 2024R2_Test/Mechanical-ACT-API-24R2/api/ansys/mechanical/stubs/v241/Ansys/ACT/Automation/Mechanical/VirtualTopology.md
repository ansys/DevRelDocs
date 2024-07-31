# `VirtualTopology`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.VirtualTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VirtualTopology.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetVirtualCellFromSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.GetVirtualCellFromSelection)   | Gets the Virtual Cell from the selection.                                         |
| [`GenerateVirtualCells`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.GenerateVirtualCells)                 | Generate the Virtual Cells on the selected/all entities.                          |
| [`VirtualSplitFaceAtVertices`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VirtualSplitFaceAtVertices)     | Generate the Virtual Cells on the selected/all entities.                          |
| [`VirtualSplitEdge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VirtualSplitEdge)                         | Generate the Virtual Cells on the selected/all entities.                          |
| [`DeleteAllVirtualCells`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.DeleteAllVirtualCells)               | Delete all Virtual Cells.                                                         |
| [`DeleteAllVirtualEntities`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.DeleteAllVirtualEntities)         | Delete all Virtual Entities.                                                      |
| [`DeleteAllVirtualSplitEdges`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.DeleteAllVirtualSplitEdges)     | Delete all Virtual Split Edges.                                                   |
| [`DeleteAllVirtualSplitFaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.DeleteAllVirtualSplitFaces)     | Delete all Virtual Split Faces.                                                   |
| [`DeleteAllVirtualHardVertices`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.DeleteAllVirtualHardVertices) | Delete all Virtual Split Hard Vertices.                                           |
| [`AddVirtualCell`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.AddVirtualCell)                             | Add Virtual Cell.                                                                 |
| [`AddVirtualHardVertex`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.AddVirtualHardVertex)                 | Add Virtual Hard Vertex.                                                          |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Delete)                                             | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.AddComment)                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.AddFigure)                                       | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.AddImage)                                         | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Activate)                                         | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.CopyTo)                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Duplicate)                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.PropertyByName)                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.PropertyByAPIName)                       | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.CreateParameter)                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.GetParameter)                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`AutomaticBehavior`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.AutomaticBehavior)                                 | Gets or sets the Behavior when Method is set to “Automatic”.   |
| [`RepairBehavior`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.RepairBehavior)                                       | Gets or sets the Behavior when Method is set to “Repair”.      |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#id0)                                                                  | Gets the internal object. For advanced usage only.             |
| [`AspectRatio`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.AspectRatio)                                             | Gets or sets the AspectRatio.                                  |
| [`SharedBoundaryRatio`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.SharedBoundaryRatio)                             | Gets or sets the SharedBoundaryRatio.                          |
| [`VirtualEdges`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VirtualEdges)                                           | Gets the VirtualEdges.                                         |
| [`VirtualEntities`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VirtualEntities)                                     | Gets the VirtualEntities.                                      |
| [`VirtualFaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VirtualFaces)                                           | Gets the VirtualFaces.                                         |
| [`VirtualHardVertex`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VirtualHardVertex)                                 | Gets the VirtualHardVertex.                                    |
| [`VirtualSplitEdges`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VirtualSplitEdges)                                 | Gets the VirtualSplitEdges.                                    |
| [`VirtualSplitFaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VirtualSplitFaces)                                 | Gets the VirtualSplitFaces.                                    |
| [`ContactAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.ContactAngle)                                           | Gets or sets the ContactAngle.                                 |
| [`CustomFeatureAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.CustomFeatureAngle)                               | Gets or sets the CustomFeatureAngle.                           |
| [`EdgeAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.EdgeAngle)                                                 | Gets or sets the EdgeAngle.                                    |
| [`GaussAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.GaussAngle)                                               | Gets or sets the GaussAngle.                                   |
| [`MaxEdgeLength`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.MaxEdgeLength)                                         | Gets or sets the MaxEdgeLength.                                |
| [`MaxFaceArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.MaxFaceArea)                                             | Gets or sets the MaxFaceArea.                                  |
| [`MaxSliverWidth`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.MaxSliverWidth)                                       | Gets or sets the MaxSliverWidth.                               |
| [`MinEdgeLength`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.MinEdgeLength)                                         | Gets or sets the MinEdgeLength.                                |
| [`MinFaceArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.MinFaceArea)                                             | Gets or sets the MinFaceArea.                                  |
| [`MinSliverWidth`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.MinSliverWidth)                                       | Gets or sets the MinSliverWidth.                               |
| [`LockPositionOfDependentEdgeSplits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.LockPositionOfDependentEdgeSplits) | Gets or sets the LockPositionOfDependentEdgeSplits.            |
| [`MergeFaceEdges`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.MergeFaceEdges)                                       | Gets or sets the MergeFaceEdges.                               |
| [`Method`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Method)                                                       | Gets or sets the Method.                                       |
| [`GenerateOnUpdate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.GenerateOnUpdate)                                   | Gets or sets the GenerateOnUpdate.                             |
| [`SimplifyFaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.SimplifyFaces)                                         | Gets or sets the SimplifyFaces.                                |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                   |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Children)                                                   | Gets the list of children.                                     |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Comments)                                                   | Gets the list of associated comments.                          |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Figures)                                                     | Gets the list of associated figures.                           |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Images)                                                       | Gets the list of associated images.                            |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#id0)                                                                  | Gets the internal object. For advanced usage only.             |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.Properties)                                               | Gets the list of properties for this object.                   |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/VirtualTopology.md#VirtualTopology.VisibleProperties)                                 | Gets the list of properties that are visible for this object.  |

<a id="property-detail"></a>

## Property detail

<a id="VirtualTopology.AutomaticBehavior"></a>

### *property* VirtualTopology.AutomaticBehavior *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupAutomaticBehaviorType](../../../Mechanical/DataModel/Enums/VirtualCellGroupAutomaticBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupAutomaticBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior when Method is set to “Automatic”.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.RepairBehavior"></a>

### *property* VirtualTopology.RepairBehavior *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupRepairBehaviorType](../../../Mechanical/DataModel/Enums/VirtualCellGroupRepairBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupRepairBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior when Method is set to “Repair”.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.InternalObject"></a>

### *property* VirtualTopology.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSVirtualCellGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AspectRatio"></a>

### *property* VirtualTopology.AspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.SharedBoundaryRatio"></a>

### *property* VirtualTopology.SharedBoundaryRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedBoundaryRatio.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualEdges"></a>

### *property* VirtualTopology.VirtualEdges *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualEdges.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualEntities"></a>

### *property* VirtualTopology.VirtualEntities *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualEntities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualFaces"></a>

### *property* VirtualTopology.VirtualFaces *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualFaces.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualHardVertex"></a>

### *property* VirtualTopology.VirtualHardVertex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualHardVertex.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualSplitEdges"></a>

### *property* VirtualTopology.VirtualSplitEdges *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualSplitEdges.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualSplitFaces"></a>

### *property* VirtualTopology.VirtualSplitFaces *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualSplitFaces.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.ContactAngle"></a>

### *property* VirtualTopology.ContactAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactAngle.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.CustomFeatureAngle"></a>

### *property* VirtualTopology.CustomFeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CustomFeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.EdgeAngle"></a>

### *property* VirtualTopology.EdgeAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeAngle.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GaussAngle"></a>

### *property* VirtualTopology.GaussAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GaussAngle.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MaxEdgeLength"></a>

### *property* VirtualTopology.MaxEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MaxFaceArea"></a>

### *property* VirtualTopology.MaxFaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxFaceArea.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MaxSliverWidth"></a>

### *property* VirtualTopology.MaxSliverWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxSliverWidth.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MinEdgeLength"></a>

### *property* VirtualTopology.MinEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MinFaceArea"></a>

### *property* VirtualTopology.MinFaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinFaceArea.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MinSliverWidth"></a>

### *property* VirtualTopology.MinSliverWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinSliverWidth.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.LockPositionOfDependentEdgeSplits"></a>

### *property* VirtualTopology.LockPositionOfDependentEdgeSplits *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LockPositionOfDependentEdgeSplits.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MergeFaceEdges"></a>

### *property* VirtualTopology.MergeFaceEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaceEdges.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Method"></a>

### *property* VirtualTopology.Method *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupMethodType](../../../Mechanical/DataModel/Enums/VirtualCellGroupMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GenerateOnUpdate"></a>

### *property* VirtualTopology.GenerateOnUpdate *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnUpdate.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.SimplifyFaces"></a>

### *property* VirtualTopology.SimplifyFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SimplifyFaces.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DataModelObjectCategory"></a>

### *property* VirtualTopology.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Children"></a>

### *property* VirtualTopology.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Comments"></a>

### *property* VirtualTopology.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Figures"></a>

### *property* VirtualTopology.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Images"></a>

### *property* VirtualTopology.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* VirtualTopology.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Properties"></a>

### *property* VirtualTopology.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VisibleProperties"></a>

### *property* VirtualTopology.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VirtualTopology.GetVirtualCellFromSelection"></a>

### VirtualTopology.GetVirtualCellFromSelection(currentSelection: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Gets the Virtual Cell from the selection.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GenerateVirtualCells"></a>

### VirtualTopology.GenerateVirtualCells(selectionInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualSplitFaceAtVertices"></a>

### VirtualTopology.VirtualSplitFaceAtVertices(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualSplitEdge"></a>

### VirtualTopology.VirtualSplitEdge(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo, splitRatio: System.Double)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualCells"></a>

### VirtualTopology.DeleteAllVirtualCells()

Delete all Virtual Cells.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualEntities"></a>

### VirtualTopology.DeleteAllVirtualEntities()

Delete all Virtual Entities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualSplitEdges"></a>

### VirtualTopology.DeleteAllVirtualSplitEdges()

Delete all Virtual Split Edges.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualSplitFaces"></a>

### VirtualTopology.DeleteAllVirtualSplitFaces()

Delete all Virtual Split Faces.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualHardVertices"></a>

### VirtualTopology.DeleteAllVirtualHardVertices()

Delete all Virtual Split Hard Vertices.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddVirtualCell"></a>

### VirtualTopology.AddVirtualCell(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Add Virtual Cell.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddVirtualHardVertex"></a>

### VirtualTopology.AddVirtualHardVertex(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo, point: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.Point))

Add Virtual Hard Vertex.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Delete"></a>

### VirtualTopology.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GetChildren"></a>

### VirtualTopology.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### VirtualTopology.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddComment"></a>

### VirtualTopology.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddFigure"></a>

### VirtualTopology.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddImage"></a>

### VirtualTopology.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Activate"></a>

### VirtualTopology.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.CopyTo"></a>

### VirtualTopology.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Duplicate"></a>

### VirtualTopology.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GroupAllSimilarChildren"></a>

### VirtualTopology.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GroupSimilarObjects"></a>

### VirtualTopology.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.PropertyByName"></a>

### VirtualTopology.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.PropertyByAPIName"></a>

### VirtualTopology.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.CreateParameter"></a>

### VirtualTopology.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GetParameter"></a>

### VirtualTopology.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.RemoveParameter"></a>

### VirtualTopology.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

