# `VirtualTopology`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.VirtualTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VirtualTopology.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------|-----------------------------------------------------------------------------------|
| `GetVirtualCellFromSelection`   | Gets the Virtual Cell from the selection.                                         |
| `GenerateVirtualCells`          | Generate the Virtual Cells on the selected/all entities.                          |
| `VirtualSplitFaceAtVertices`    | Generate the Virtual Cells on the selected/all entities.                          |
| `VirtualSplitEdge`              | Generate the Virtual Cells on the selected/all entities.                          |
| `DeleteAllVirtualCells`         | Delete all Virtual Cells.                                                         |
| `DeleteAllVirtualEntities`      | Delete all Virtual Entities.                                                      |
| `DeleteAllVirtualSplitEdges`    | Delete all Virtual Split Edges.                                                   |
| `DeleteAllVirtualSplitFaces`    | Delete all Virtual Split Faces.                                                   |
| `DeleteAllVirtualHardVertices`  | Delete all Virtual Split Hard Vertices.                                           |
| `AddVirtualCell`                | Add Virtual Cell.                                                                 |
| `AddVirtualHardVertex`          | Add Virtual Hard Vertex.                                                          |
| `Delete`                        | Run the Delete action.                                                            |
| `GetChildren`                   | Gets the list of children, filtered by type.                                      |
| `GetChildren`                   | Gets the list of children, filtered by type.                                      |
| `AddComment`                    | Creates a new child Comment.                                                      |
| `AddFigure`                     | Creates a new child Figure.                                                       |
| `AddImage`                      | Creates a new child Image.                                                        |
| `Activate`                      | Activate the current object.                                                      |
| `CopyTo`                        | Copies all visible properties from this object to another.                        |
| `Duplicate`                     | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`       | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`           | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                | Get a property by its unique name.                                                |
| `PropertyByAPIName`             | Get a property by its API name.                                                   |
| `CreateParameter`               | Creates a new parameter for a Property.                                           |
| `GetParameter`                  | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------|----------------------------------------------------------------|
| `AutomaticBehavior`                 | Gets or sets the Behavior when Method is set to “Automatic”.   |
| `RepairBehavior`                    | Gets or sets the Behavior when Method is set to “Repair”.      |
| `InternalObject`                    | Gets the internal object. For advanced usage only.             |
| `AspectRatio`                       | Gets or sets the AspectRatio.                                  |
| `SharedBoundaryRatio`               | Gets or sets the SharedBoundaryRatio.                          |
| `VirtualEdges`                      | Gets the VirtualEdges.                                         |
| `VirtualEntities`                   | Gets the VirtualEntities.                                      |
| `VirtualFaces`                      | Gets the VirtualFaces.                                         |
| `VirtualHardVertex`                 | Gets the VirtualHardVertex.                                    |
| `VirtualSplitEdges`                 | Gets the VirtualSplitEdges.                                    |
| `VirtualSplitFaces`                 | Gets the VirtualSplitFaces.                                    |
| `ContactAngle`                      | Gets or sets the ContactAngle.                                 |
| `CustomFeatureAngle`                | Gets or sets the CustomFeatureAngle.                           |
| `EdgeAngle`                         | Gets or sets the EdgeAngle.                                    |
| `GaussAngle`                        | Gets or sets the GaussAngle.                                   |
| `MaxEdgeLength`                     | Gets or sets the MaxEdgeLength.                                |
| `MaxFaceArea`                       | Gets or sets the MaxFaceArea.                                  |
| `MaxSliverWidth`                    | Gets or sets the MaxSliverWidth.                               |
| `MinEdgeLength`                     | Gets or sets the MinEdgeLength.                                |
| `MinFaceArea`                       | Gets or sets the MinFaceArea.                                  |
| `MinSliverWidth`                    | Gets or sets the MinSliverWidth.                               |
| `LockPositionOfDependentEdgeSplits` | Gets or sets the LockPositionOfDependentEdgeSplits.            |
| `MergeFaceEdges`                    | Gets or sets the MergeFaceEdges.                               |
| `Method`                            | Gets or sets the Method.                                       |
| `GenerateOnUpdate`                  | Gets or sets the GenerateOnUpdate.                             |
| `SimplifyFaces`                     | Gets or sets the SimplifyFaces.                                |
| `DataModelObjectCategory`           | Gets the current DataModelObject's category.                   |
| `Children`                          | Gets the list of children.                                     |
| `Comments`                          | Gets the list of associated comments.                          |
| `Figures`                           | Gets the list of associated figures.                           |
| `Images`                            | Gets the list of associated images.                            |
| `InternalObject`                    | Gets the internal object. For advanced usage only.             |
| `Properties`                        | Gets the list of properties for this object.                   |
| `VisibleProperties`                 | Gets the list of properties that are visible for this object.  |

<a id="property-detail"></a>

## Property detail

### *property* VirtualTopology.AutomaticBehavior *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupAutomaticBehaviorType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/VirtualCellGroupAutomaticBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupAutomaticBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior when Method is set to “Automatic”.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.RepairBehavior *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupRepairBehaviorType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/VirtualCellGroupRepairBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupRepairBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* VirtualTopology.LockPositionOfDependentEdgeSplits *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LockPositionOfDependentEdgeSplits.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.MergeFaceEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaceEdges.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Method *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupMethodType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/VirtualCellGroupMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.GenerateOnUpdate *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnUpdate.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.SimplifyFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SimplifyFaces.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* VirtualTopology.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### VirtualTopology.AddVirtualHardVertex(iSelInfo: Ansys.ACT.Interfaces.Common.ISelectionInfo, point: [Ansys.Mechanical.Graphics.Point](../../../../../v241/Ansys/Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.Point))

Add Virtual Hard Vertex.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### VirtualTopology.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

