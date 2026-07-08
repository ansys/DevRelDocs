# `VirtualTopology`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.VirtualTopology"></a>

#### *class* Ansys.ACT.Automation.Mechanical.VirtualTopology

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VirtualTopology.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VirtualTopology.Activate)                                         | Activate the current object.                                                      |
| [`AddComment`](#VirtualTopology.AddComment)                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](#VirtualTopology.AddFigure)                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#VirtualTopology.AddImage)                                         | Creates a new child Image.                                                        |
| [`AddVirtualCell`](#VirtualTopology.AddVirtualCell)                             | Add Virtual Cell.                                                                 |
| [`AddVirtualHardVertex`](#VirtualTopology.AddVirtualHardVertex)                 | Add Virtual Hard Vertex.                                                          |
| [`AddVirtualSplitEdgeAt`](#VirtualTopology.AddVirtualSplitEdgeAt)               | Add Virtual Split Edge at                                                         |
| [`CopyTo`](#VirtualTopology.CopyTo)                                             | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VirtualTopology.CreateParameter)                           | Creates a new parameter for a Property.                                           |
| [`Delete`](#VirtualTopology.Delete)                                             | Run the Delete action.                                                            |
| [`DeleteAllVirtualCells`](#VirtualTopology.DeleteAllVirtualCells)               | Delete all Virtual Cells.                                                         |
| [`DeleteAllVirtualEntities`](#VirtualTopology.DeleteAllVirtualEntities)         | Delete all Virtual Entities.                                                      |
| [`DeleteAllVirtualHardVertices`](#VirtualTopology.DeleteAllVirtualHardVertices) | Delete all Virtual Split Hard Vertices.                                           |
| [`DeleteAllVirtualSplitEdges`](#VirtualTopology.DeleteAllVirtualSplitEdges)     | Delete all Virtual Split Edges.                                                   |
| [`DeleteAllVirtualSplitFaces`](#VirtualTopology.DeleteAllVirtualSplitFaces)     | Delete all Virtual Split Faces.                                                   |
| [`Duplicate`](#VirtualTopology.Duplicate)                                       | Creates a copy of the current DataModelObject.                                    |
| [`GenerateVirtualCells`](#VirtualTopology.GenerateVirtualCells)                 | Generate the Virtual Cells on the selected/all entities.                          |
| [`GetChildren`](#VirtualTopology.GetChildren)                                   | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VirtualTopology.GetParameter)                                 | Gets the parameter corresponding to the given property.                           |
| [`GetVirtualCellFromSelection`](#VirtualTopology.GetVirtualCellFromSelection)   | Gets the Virtual Cell from the selection.                                         |
| [`GroupAllSimilarChildren`](#VirtualTopology.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VirtualTopology.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#VirtualTopology.PropertyByAPIName)                       | Get a property by its API name.                                                   |
| [`PropertyByName`](#VirtualTopology.PropertyByName)                             | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VirtualTopology.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property. |
| [`VirtualSplitEdge`](#VirtualTopology.VirtualSplitEdge)                         | Generate the Virtual Cells on the selected/all entities.                          |
| [`VirtualSplitFaceAtVertices`](#VirtualTopology.VirtualSplitFaceAtVertices)     | Generate the Virtual Cells on the selected/all entities.                          |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AspectRatio`](#VirtualTopology.AspectRatio)                                             | Gets or sets the AspectRatio.                                 |
| [`AutomaticBehavior`](#VirtualTopology.AutomaticBehavior)                                 | Gets or sets the Behavior when Method is set to “Automatic”.  |
| [`Children`](#VirtualTopology.Children)                                                   | Gets the list of children.                                    |
| [`Comments`](#VirtualTopology.Comments)                                                   | Gets the list of associated comments.                         |
| [`ContactAngle`](#VirtualTopology.ContactAngle)                                           | Gets or sets the ContactAngle.                                |
| [`CustomFeatureAngle`](#VirtualTopology.CustomFeatureAngle)                               | Gets or sets the CustomFeatureAngle.                          |
| [`DataModelObjectCategory`](#VirtualTopology.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                  |
| [`EdgeAngle`](#VirtualTopology.EdgeAngle)                                                 | Gets or sets the EdgeAngle.                                   |
| [`Figures`](#VirtualTopology.Figures)                                                     | Gets the list of associated figures.                          |
| [`GaussAngle`](#VirtualTopology.GaussAngle)                                               | Gets or sets the GaussAngle.                                  |
| [`GenerateOnUpdate`](#VirtualTopology.GenerateOnUpdate)                                   | Gets or sets the GenerateOnUpdate.                            |
| [`Images`](#VirtualTopology.Images)                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#VirtualTopology.InternalObject)                                       | Gets the internal object. For advanced usage only.            |
| [`LockPositionOfDependentEdgeSplits`](#VirtualTopology.LockPositionOfDependentEdgeSplits) | Gets or sets the LockPositionOfDependentEdgeSplits.           |
| [`MaxEdgeLength`](#VirtualTopology.MaxEdgeLength)                                         | Gets or sets the MaxEdgeLength.                               |
| [`MaxFaceArea`](#VirtualTopology.MaxFaceArea)                                             | Gets or sets the MaxFaceArea.                                 |
| [`MaxSliverWidth`](#VirtualTopology.MaxSliverWidth)                                       | Gets or sets the MaxSliverWidth.                              |
| [`MergeFaceEdges`](#VirtualTopology.MergeFaceEdges)                                       | Gets or sets the MergeFaceEdges.                              |
| [`Method`](#VirtualTopology.Method)                                                       | Gets or sets the Method.                                      |
| [`MinEdgeLength`](#VirtualTopology.MinEdgeLength)                                         | Gets or sets the MinEdgeLength.                               |
| [`MinFaceArea`](#VirtualTopology.MinFaceArea)                                             | Gets or sets the MinFaceArea.                                 |
| [`MinSliverWidth`](#VirtualTopology.MinSliverWidth)                                       | Gets or sets the MinSliverWidth.                              |
| [`Properties`](#VirtualTopology.Properties)                                               | Gets the list of properties for this object.                  |
| [`RepairBehavior`](#VirtualTopology.RepairBehavior)                                       | Gets or sets the Behavior when Method is set to “Repair”.     |
| [`SharedBoundaryRatio`](#VirtualTopology.SharedBoundaryRatio)                             | Gets or sets the SharedBoundaryRatio.                         |
| [`SimplifyFaces`](#VirtualTopology.SimplifyFaces)                                         | Gets or sets the SimplifyFaces.                               |
| [`VirtualEdges`](#VirtualTopology.VirtualEdges)                                           | Gets the VirtualEdges.                                        |
| [`VirtualEntities`](#VirtualTopology.VirtualEntities)                                     | Gets the VirtualEntities.                                     |
| [`VirtualFaces`](#VirtualTopology.VirtualFaces)                                           | Gets the VirtualFaces.                                        |
| [`VirtualHardVertex`](#VirtualTopology.VirtualHardVertex)                                 | Gets the VirtualHardVertex.                                   |
| [`VirtualSplitEdges`](#VirtualTopology.VirtualSplitEdges)                                 | Gets the VirtualSplitEdges.                                   |
| [`VirtualSplitFaces`](#VirtualTopology.VirtualSplitFaces)                                 | Gets the VirtualSplitFaces.                                   |
| [`VisibleProperties`](#VirtualTopology.VisibleProperties)                                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="VirtualTopology.AspectRatio"></a>

### *property* VirtualTopology.AspectRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AutomaticBehavior"></a>

### *property* VirtualTopology.AutomaticBehavior *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupAutomaticBehaviorType](../../../Mechanical/DataModel/Enums/VirtualCellGroupAutomaticBehaviorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupAutomaticBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior when Method is set to “Automatic”.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Children"></a>

### *property* VirtualTopology.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Comments"></a>

### *property* VirtualTopology.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.ContactAngle"></a>

### *property* VirtualTopology.ContactAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactAngle.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.CustomFeatureAngle"></a>

### *property* VirtualTopology.CustomFeatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CustomFeatureAngle.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DataModelObjectCategory"></a>

### *property* VirtualTopology.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.EdgeAngle"></a>

### *property* VirtualTopology.EdgeAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeAngle.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Figures"></a>

### *property* VirtualTopology.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GaussAngle"></a>

### *property* VirtualTopology.GaussAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GaussAngle.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GenerateOnUpdate"></a>

### *property* VirtualTopology.GenerateOnUpdate *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnUpdate.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Images"></a>

### *property* VirtualTopology.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.InternalObject"></a>

### *property* VirtualTopology.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSVirtualCellGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.LockPositionOfDependentEdgeSplits"></a>

### *property* VirtualTopology.LockPositionOfDependentEdgeSplits *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LockPositionOfDependentEdgeSplits.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MaxEdgeLength"></a>

### *property* VirtualTopology.MaxEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MaxFaceArea"></a>

### *property* VirtualTopology.MaxFaceArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxFaceArea.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MaxSliverWidth"></a>

### *property* VirtualTopology.MaxSliverWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaxSliverWidth.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MergeFaceEdges"></a>

### *property* VirtualTopology.MergeFaceEdges *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MergeFaceEdges.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Method"></a>

### *property* VirtualTopology.Method *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupMethodType](../../../Mechanical/DataModel/Enums/VirtualCellGroupMethodType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MinEdgeLength"></a>

### *property* VirtualTopology.MinEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinEdgeLength.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MinFaceArea"></a>

### *property* VirtualTopology.MinFaceArea *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinFaceArea.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.MinSliverWidth"></a>

### *property* VirtualTopology.MinSliverWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinSliverWidth.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Properties"></a>

### *property* VirtualTopology.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.RepairBehavior"></a>

### *property* VirtualTopology.RepairBehavior *: [Ansys.Mechanical.DataModel.Enums.VirtualCellGroupRepairBehaviorType](../../../Mechanical/DataModel/Enums/VirtualCellGroupRepairBehaviorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.VirtualCellGroupRepairBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior when Method is set to “Repair”.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.SharedBoundaryRatio"></a>

### *property* VirtualTopology.SharedBoundaryRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedBoundaryRatio.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.SimplifyFaces"></a>

### *property* VirtualTopology.SimplifyFaces *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SimplifyFaces.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualEdges"></a>

### *property* VirtualTopology.VirtualEdges *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualEdges.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualEntities"></a>

### *property* VirtualTopology.VirtualEntities *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualEntities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualFaces"></a>

### *property* VirtualTopology.VirtualFaces *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualFaces.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualHardVertex"></a>

### *property* VirtualTopology.VirtualHardVertex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualHardVertex.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualSplitEdges"></a>

### *property* VirtualTopology.VirtualSplitEdges *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualSplitEdges.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualSplitFaces"></a>

### *property* VirtualTopology.VirtualSplitFaces *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VirtualSplitFaces.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VisibleProperties"></a>

### *property* VirtualTopology.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VirtualTopology.Activate"></a>

### VirtualTopology.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddComment"></a>

### VirtualTopology.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddFigure"></a>

### VirtualTopology.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddImage"></a>

### VirtualTopology.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddVirtualCell"></a>

### VirtualTopology.AddVirtualCell(iSelInfo: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo)) → Iterable[[Ansys.ACT.Automation.Mechanical.VirtualCell](VirtualCell.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.VirtualCell)]

Add Virtual Cell.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddVirtualHardVertex"></a>

### VirtualTopology.AddVirtualHardVertex(iSelInfo: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo), point: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.Point)) → [None](https://docs.python.org/3/library/constants.html#None)

Add Virtual Hard Vertex.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.AddVirtualSplitEdgeAt"></a>

### VirtualTopology.AddVirtualSplitEdgeAt(iSelInfo: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo), point: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.Point)) → [None](https://docs.python.org/3/library/constants.html#None)

Add Virtual Split Edge at

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.CopyTo"></a>

### VirtualTopology.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.CreateParameter"></a>

### VirtualTopology.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Delete"></a>

### VirtualTopology.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualCells"></a>

### VirtualTopology.DeleteAllVirtualCells() → [None](https://docs.python.org/3/library/constants.html#None)

Delete all Virtual Cells.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualEntities"></a>

### VirtualTopology.DeleteAllVirtualEntities() → [None](https://docs.python.org/3/library/constants.html#None)

Delete all Virtual Entities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualHardVertices"></a>

### VirtualTopology.DeleteAllVirtualHardVertices() → [None](https://docs.python.org/3/library/constants.html#None)

Delete all Virtual Split Hard Vertices.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualSplitEdges"></a>

### VirtualTopology.DeleteAllVirtualSplitEdges() → [None](https://docs.python.org/3/library/constants.html#None)

Delete all Virtual Split Edges.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.DeleteAllVirtualSplitFaces"></a>

### VirtualTopology.DeleteAllVirtualSplitFaces() → [None](https://docs.python.org/3/library/constants.html#None)

Delete all Virtual Split Faces.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.Duplicate"></a>

### VirtualTopology.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GenerateVirtualCells"></a>

### VirtualTopology.GenerateVirtualCells(selectionInfo: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo)) → [None](https://docs.python.org/3/library/constants.html#None)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GetChildren"></a>

### VirtualTopology.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GetParameter"></a>

### VirtualTopology.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GetVirtualCellFromSelection"></a>

### VirtualTopology.GetVirtualCellFromSelection(currentSelection: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo)) → [Ansys.ACT.Automation.Mechanical.VirtualCell](VirtualCell.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.VirtualCell)

Gets the Virtual Cell from the selection.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GroupAllSimilarChildren"></a>

### VirtualTopology.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.GroupSimilarObjects"></a>

### VirtualTopology.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.PropertyByAPIName"></a>

### VirtualTopology.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.PropertyByName"></a>

### VirtualTopology.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.RemoveParameter"></a>

### VirtualTopology.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualSplitEdge"></a>

### VirtualTopology.VirtualSplitEdge(iSelInfo: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo), splitRatio: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

<a id="VirtualTopology.VirtualSplitFaceAtVertices"></a>

### VirtualTopology.VirtualSplitFaceAtVertices(iSelInfo: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo)) → [None](https://docs.python.org/3/library/constants.html#None)

Generate the Virtual Cells on the selected/all entities.

<!-- !! processed by numpydoc !! -->

