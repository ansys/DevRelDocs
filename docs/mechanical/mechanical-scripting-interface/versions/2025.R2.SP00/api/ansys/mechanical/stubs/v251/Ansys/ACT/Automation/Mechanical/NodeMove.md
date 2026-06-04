# `NodeMove`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NodeMove"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NodeMove

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodeMove.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#NodeMove.Activate)                               | Activate the current object.                                                                                                                                                                             |
| [`AddComment`](#NodeMove.AddComment)                           | Creates a new child Comment.                                                                                                                                                                             |
| [`AddFigure`](#NodeMove.AddFigure)                             | Creates a new child Figure.                                                                                                                                                                              |
| [`AddImage`](#NodeMove.AddImage)                               | Creates a new child Image.                                                                                                                                                                               |
| [`CopyTo`](#NodeMove.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                               |
| [`CreateParameter`](#NodeMove.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                  |
| [`Delete`](#NodeMove.Delete)                                   | Run the Delete action.                                                                                                                                                                                   |
| [`Duplicate`](#NodeMove.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                           |
| [`GetChildren`](#NodeMove.GetChildren)                         | Gets the list of children, filtered by type.                                                                                                                                                             |
| [`GetParameter`](#NodeMove.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                  |
| [`GroupAllSimilarChildren`](#NodeMove.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                  |
| [`GroupSimilarObjects`](#NodeMove.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                      |
| [`MorphNodes`](#NodeMove.MorphNodes)                           | Morph all the nodes.                                                                                                                                                                                     |
| [`MoveNode`](#NodeMove.MoveNode)                               | Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location. |
| [`PropertyByAPIName`](#NodeMove.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                          |
| [`PropertyByName`](#NodeMove.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                       |
| [`RemoveParameter`](#NodeMove.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                        |
| [`UndoAllNodeMoves`](#NodeMove.UndoAllNodeMoves)               | Undos all moves done to a node.                                                                                                                                                                          |
| [`UndoLastNodeMove`](#NodeMove.UndoLastNodeMove)               | Undos the last move done to a node.                                                                                                                                                                      |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#NodeMove.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NodeMove.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#NodeMove.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#NodeMove.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#NodeMove.Images)                                   | Gets the list of associated images.                           |
| [`Information`](#NodeMove.Information)                         | Gets the Information.                                         |
| [`InternalObject`](#NodeMove.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`NumberOfMoves`](#NodeMove.NumberOfMoves)                     | Gets the NumberOfMoves.                                       |
| [`NumberOfNodes`](#NodeMove.NumberOfNodes)                     | Gets the NumberOfNodes.                                       |
| [`Properties`](#NodeMove.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#NodeMove.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#NodeMove.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodeMove.Children"></a>

### *property* NodeMove.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Comments"></a>

### *property* NodeMove.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.DataModelObjectCategory"></a>

### *property* NodeMove.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Figures"></a>

### *property* NodeMove.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Images"></a>

### *property* NodeMove.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Information"></a>

### *property* NodeMove.Information *: [Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType](../../../Mechanical/DataModel/Enums/NodeMoveInformationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Information.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.InternalObject"></a>

### *property* NodeMove.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNodeMoveAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.NumberOfMoves"></a>

### *property* NodeMove.NumberOfMoves *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfMoves.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.NumberOfNodes"></a>

### *property* NodeMove.NumberOfNodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfNodes.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Properties"></a>

### *property* NodeMove.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.ReadOnly"></a>

### *property* NodeMove.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.VisibleProperties"></a>

### *property* NodeMove.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMove.Activate"></a>

### NodeMove.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.AddComment"></a>

### NodeMove.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.AddFigure"></a>

### NodeMove.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.AddImage"></a>

### NodeMove.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.CopyTo"></a>

### NodeMove.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.CreateParameter"></a>

### NodeMove.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Delete"></a>

### NodeMove.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Duplicate"></a>

### NodeMove.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetChildren"></a>

### NodeMove.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetParameter"></a>

### NodeMove.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GroupAllSimilarChildren"></a>

### NodeMove.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GroupSimilarObjects"></a>

### NodeMove.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.MorphNodes"></a>

### NodeMove.MorphNodes()

Morph all the nodes.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.MoveNode"></a>

### NodeMove.MoveNode(nodeId: [int](https://docs.python.org/3/library/functions.html#int), locX: Ansys.Core.Units.Quantity, locY: Ansys.Core.Units.Quantity, locZ: Ansys.Core.Units.Quantity)

Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.PropertyByAPIName"></a>

### NodeMove.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.PropertyByName"></a>

### NodeMove.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.RemoveParameter"></a>

### NodeMove.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.UndoAllNodeMoves"></a>

### NodeMove.UndoAllNodeMoves()

Undos all moves done to a node.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.UndoLastNodeMove"></a>

### NodeMove.UndoLastNodeMove()

Undos the last move done to a node.

<!-- !! processed by numpydoc !! -->

