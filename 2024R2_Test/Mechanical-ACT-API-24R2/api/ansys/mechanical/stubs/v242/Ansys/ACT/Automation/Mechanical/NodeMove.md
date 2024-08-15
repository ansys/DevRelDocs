# `NodeMove`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NodeMove

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodeMove.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MoveNode`                | Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location.   |
| `UndoAllNodeMoves`        | Undos all moves done to a node.                                                                                                                                                                            |
| `UndoLastNodeMove`        | Undos the last move done to a node.                                                                                                                                                                        |
| `MorphNodes`              | Morph all the nodes.                                                                                                                                                                                       |
| `Delete`                  | Run the Delete action.                                                                                                                                                                                     |
| `GetChildren`             | Gets the list of children, filtered by type.                                                                                                                                                               |
| `GetChildren`             | Gets the list of children, filtered by type.                                                                                                                                                               |
| `AddComment`              | Creates a new child Comment.                                                                                                                                                                               |
| `AddFigure`               | Creates a new child Figure.                                                                                                                                                                                |
| `AddImage`                | Creates a new child Image.                                                                                                                                                                                 |
| `Activate`                | Activate the current object.                                                                                                                                                                               |
| `CopyTo`                  | Copies all visible properties from this object to another.                                                                                                                                                 |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                                                                                                                                             |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                                                                                                                                                    |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                                                                                                                                                        |
| `PropertyByName`          | Get a property by its unique name.                                                                                                                                                                         |
| `PropertyByAPIName`       | Get a property by its API name.                                                                                                                                                                            |
| `CreateParameter`         | Creates a new parameter for a Property.                                                                                                                                                                    |
| `GetParameter`            | Gets the parameter corresponding to the given property.                                                                                                                                                    |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                          |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `NumberOfMoves`           | Gets the NumberOfMoves.                                       |
| `NumberOfNodes`           | Gets the NumberOfNodes.                                       |
| `Information`             | Gets the Information.                                         |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* NodeMove.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNodeMoveAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.NumberOfMoves *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfMoves.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.NumberOfNodes *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfNodes.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.Information *: [Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/NodeMoveInformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Information.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NodeMove.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### NodeMove.MoveNode(nodeId: System.Int32, locX: Ansys.Core.Units.Quantity, locY: Ansys.Core.Units.Quantity, locZ: Ansys.Core.Units.Quantity)

Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location.

<!-- !! processed by numpydoc !! -->

### NodeMove.UndoAllNodeMoves()

Undos all moves done to a node.

<!-- !! processed by numpydoc !! -->

### NodeMove.UndoLastNodeMove()

Undos the last move done to a node.

<!-- !! processed by numpydoc !! -->

### NodeMove.MorphNodes()

Morph all the nodes.

<!-- !! processed by numpydoc !! -->

### NodeMove.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NodeMove.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodeMove.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NodeMove.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NodeMove.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NodeMove.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### NodeMove.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NodeMove.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NodeMove.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NodeMove.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NodeMove.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NodeMove.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NodeMove.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### NodeMove.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NodeMove.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NodeMove.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

