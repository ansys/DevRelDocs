# VirtualTopology

### *class* VirtualTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VirtualTopology.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetVirtualCellFromSelection`](#VirtualTopology.GetVirtualCellFromSelection)   | Gets the Virtual Cell from the selection.                                         |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateVirtualCells`](#VirtualTopology.GenerateVirtualCells)                 | Generate the Virtual Cells on the selected/all entities.                          |
| [`VirtualSplitFaceAtVertices`](#VirtualTopology.VirtualSplitFaceAtVertices)     | Generate the Virtual Cells on the selected/all entities.                          |
| [`VirtualSplitEdge`](#VirtualTopology.VirtualSplitEdge)                         | Generate the Virtual Cells on the selected/all entities.                          |
| [`DeleteAllVirtualCells`](#VirtualTopology.DeleteAllVirtualCells)               | Delete all Virtual Cells.                                                         |
| [`DeleteAllVirtualEntities`](#VirtualTopology.DeleteAllVirtualEntities)         | Delete all Virtual Entities.                                                      |
| [`DeleteAllVirtualSplitEdges`](#VirtualTopology.DeleteAllVirtualSplitEdges)     | Delete all Virtual Split Edges.                                                   |
| [`DeleteAllVirtualSplitFaces`](#VirtualTopology.DeleteAllVirtualSplitFaces)     | Delete all Virtual Split Faces.                                                   |
| [`DeleteAllVirtualHardVertices`](#VirtualTopology.DeleteAllVirtualHardVertices) | Delete all Virtual Split Hard Vertices.                                           |
| [`AddVirtualCell`](#VirtualTopology.AddVirtualCell)                             | Add Virtual Cell.                                                                 |
| [`AddVirtualHardVertex`](#VirtualTopology.AddVirtualHardVertex)                 | Add Virtual Hard Vertex.                                                          |
| [`Delete`](#VirtualTopology.Delete)                                             | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VirtualTopology.AddComment)                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](#VirtualTopology.AddFigure)                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#VirtualTopology.AddImage)                                         | Creates a new child Image.                                                        |
| [`Activate`](#VirtualTopology.Activate)                                         | Activate the current object.                                                      |
| [`CopyTo`](#VirtualTopology.CopyTo)                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VirtualTopology.Duplicate)                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VirtualTopology.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VirtualTopology.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VirtualTopology.PropertyByName)                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VirtualTopology.PropertyByAPIName)                       | Get a property by its API name.                                                   |
| [`CreateParameter`](#VirtualTopology.CreateParameter)                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#VirtualTopology.GetParameter)                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VirtualTopology.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`AutomaticBehavior`](#VirtualTopology.AutomaticBehavior)                                                           | Gets or sets the Behavior when Method is set to “Automatic”.   |
|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`RepairBehavior`](#VirtualTopology.RepairBehavior)                                                                 | Gets or sets the Behavior when Method is set to “Repair”.      |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.             |
| [`AspectRatio`](#VirtualTopology.AspectRatio)                                                                       | Gets or sets the AspectRatio.                                  |
| [`SharedBoundaryRatio`](#VirtualTopology.SharedBoundaryRatio)                                                       | Gets or sets the SharedBoundaryRatio.                          |
| [`VirtualEdges`](#VirtualTopology.VirtualEdges)                                                                     | Gets the VirtualEdges.                                         |
| [`VirtualEntities`](#VirtualTopology.VirtualEntities)                                                               | Gets the VirtualEntities.                                      |
| [`VirtualFaces`](#VirtualTopology.VirtualFaces)                                                                     | Gets the VirtualFaces.                                         |
| [`VirtualHardVertex`](#VirtualTopology.VirtualHardVertex)                                                           | Gets the VirtualHardVertex.                                    |
| [`VirtualSplitEdges`](#VirtualTopology.VirtualSplitEdges)                                                           | Gets the VirtualSplitEdges.                                    |
| [`VirtualSplitFaces`](#VirtualTopology.VirtualSplitFaces)                                                           | Gets the VirtualSplitFaces.                                    |
| [`ContactAngle`](#VirtualTopology.ContactAngle)                                                                     | Gets or sets the ContactAngle.                                 |
| [`CustomFeatureAngle`](#VirtualTopology.CustomFeatureAngle)                                                         | Gets or sets the CustomFeatureAngle.                           |
| [`EdgeAngle`](#VirtualTopology.EdgeAngle)                                                                           | Gets or sets the EdgeAngle.                                    |
| [`GaussAngle`](#VirtualTopology.GaussAngle)                                                                         | Gets or sets the GaussAngle.                                   |
| [`MaxEdgeLength`](#VirtualTopology.MaxEdgeLength)                                                                   | Gets or sets the MaxEdgeLength.                                |
| [`MaxFaceArea`](#VirtualTopology.MaxFaceArea)                                                                       | Gets or sets the MaxFaceArea.                                  |
| [`MaxSliverWidth`](#VirtualTopology.MaxSliverWidth)                                                                 | Gets or sets the MaxSliverWidth.                               |
| [`MinEdgeLength`](#VirtualTopology.MinEdgeLength)                                                                   | Gets or sets the MinEdgeLength.                                |
| [`MinFaceArea`](#VirtualTopology.MinFaceArea)                                                                       | Gets or sets the MinFaceArea.                                  |
| [`MinSliverWidth`](#VirtualTopology.MinSliverWidth)                                                                 | Gets or sets the MinSliverWidth.                               |
| [`LockPositionOfDependentEdgeSplits`](#VirtualTopology.LockPositionOfDependentEdgeSplits)                           | Gets or sets the LockPositionOfDependentEdgeSplits.            |
| [`MergeFaceEdges`](#VirtualTopology.MergeFaceEdges)                                                                 | Gets or sets the MergeFaceEdges.                               |
| [`Method`](#VirtualTopology.Method)                                                                                 | Gets or sets the Method.                                       |
| [`GenerateOnUpdate`](#VirtualTopology.GenerateOnUpdate)                                                             | Gets or sets the GenerateOnUpdate.                             |
| [`SimplifyFaces`](#VirtualTopology.SimplifyFaces)                                                                   | Gets or sets the SimplifyFaces.                                |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                   |
| [`Children`](#VirtualTopology.Children)                                                                             | Gets the list of children.                                     |
| [`Comments`](#VirtualTopology.Comments)                                                                             | Gets the list of associated comments.                          |
| [`Figures`](#VirtualTopology.Figures)                                                                               | Gets the list of associated figures.                           |
| [`Images`](#VirtualTopology.Images)                                                                                 | Gets the list of associated images.                            |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.             |
| [`Properties`](#VirtualTopology.Properties)                                                                         | Gets the list of properties for this object.                   |
| [`VisibleProperties`](#VirtualTopology.VisibleProperties)                                                           | Gets the list of properties that are visible for this object.  |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import VirtualTopology
```

## Property detail

### *property* VirtualTopology.AutomaticBehavior *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupAutomaticBehaviorType](../../../Mechanical/DataModel/Enums/VirtualCellGroupAutomaticBehaviorType.md#VirtualCellGroupAutomaticBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior when Method is set to “Automatic”.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.RepairBehavior *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupRepairBehaviorType](../../../Mechanical/DataModel/Enums/VirtualCellGroupRepairBehaviorType.md#VirtualCellGroupRepairBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior when Method is set to “Repair”.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSVirtualCellGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.AspectRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.SharedBoundaryRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedBoundaryRatio.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.VirtualEdges *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualEdges.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.VirtualEntities *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualEntities.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.VirtualFaces *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualFaces.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.VirtualHardVertex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualHardVertex.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.VirtualSplitEdges *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualSplitEdges.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.VirtualSplitFaces *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualSplitFaces.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.ContactAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactAngle.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.CustomFeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CustomFeatureAngle.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.EdgeAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeAngle.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.GaussAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GaussAngle.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.MaxEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxEdgeLength.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.MaxFaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxFaceArea.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.MaxSliverWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxSliverWidth.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.MinEdgeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinEdgeLength.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.MinFaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinFaceArea.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.MinSliverWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinSliverWidth.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.LockPositionOfDependentEdgeSplits *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LockPositionOfDependentEdgeSplits.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.MergeFaceEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaceEdges.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Method *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupMethodType](../../../Mechanical/DataModel/Enums/VirtualCellGroupMethodType.md#VirtualCellGroupMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.GenerateOnUpdate *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnUpdate.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.SimplifyFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SimplifyFaces.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### VirtualTopology.GetVirtualCellFromSelection(currentSelection: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Gets the Virtual Cell from the selection.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.GenerateVirtualCells(selectionInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.VirtualSplitFaceAtVertices(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.VirtualSplitEdge(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo, splitRatio: System.Double)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.DeleteAllVirtualCells()

Delete all Virtual Cells.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.DeleteAllVirtualEntities()

Delete all Virtual Entities.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.DeleteAllVirtualSplitEdges()

Delete all Virtual Split Edges.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.DeleteAllVirtualSplitFaces()

Delete all Virtual Split Faces.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.DeleteAllVirtualHardVertices()

Delete all Virtual Split Hard Vertices.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.AddVirtualCell(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo)

Add Virtual Cell.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.AddVirtualHardVertex(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo, point: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#Point))

Add Virtual Hard Vertex.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
