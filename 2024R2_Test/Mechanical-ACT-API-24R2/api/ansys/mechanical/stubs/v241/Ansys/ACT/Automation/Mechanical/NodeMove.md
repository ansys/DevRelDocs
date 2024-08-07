# `NodeMove`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NodeMove

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodeMove.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`MoveNode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.MoveNode)                               | Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location.   |
| [`UndoAllNodeMoves`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.UndoAllNodeMoves)               | Undos all moves done to a node.                                                                                                                                                                            |
| [`UndoLastNodeMove`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.UndoLastNodeMove)               | Undos the last move done to a node.                                                                                                                                                                        |
| [`MorphNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.MorphNodes)                           | Morph all the nodes.                                                                                                                                                                                       |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Delete)                                   | Run the Delete action.                                                                                                                                                                                     |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#id1)                                          | Gets the list of children, filtered by type.                                                                                                                                                               |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#id1)                                          | Gets the list of children, filtered by type.                                                                                                                                                               |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.AddComment)                           | Creates a new child Comment.                                                                                                                                                                               |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.AddFigure)                             | Creates a new child Figure.                                                                                                                                                                                |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.AddImage)                               | Creates a new child Image.                                                                                                                                                                                 |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Activate)                               | Activate the current object.                                                                                                                                                                               |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                 |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                             |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                    |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                        |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                         |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                            |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                    |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                    |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                          |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`NumberOfMoves`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.NumberOfMoves)                     | Gets the NumberOfMoves.                                       |
| [`NumberOfNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.NumberOfNodes)                     | Gets the NumberOfNodes.                                       |
| [`Information`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Information)                         | Gets the Information.                                         |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NodeMove.md#NodeMove.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodeMove.InternalObject"></a>

### *property* NodeMove.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNodeMoveAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.NumberOfMoves"></a>

### *property* NodeMove.NumberOfMoves *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfMoves.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.NumberOfNodes"></a>

### *property* NodeMove.NumberOfNodes *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfNodes.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Information"></a>

### *property* NodeMove.Information *: [Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType](../../../Mechanical/DataModel/Enums/NodeMoveInformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Information.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.DataModelObjectCategory"></a>

### *property* NodeMove.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Children"></a>

### *property* NodeMove.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Comments"></a>

### *property* NodeMove.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Figures"></a>

### *property* NodeMove.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Images"></a>

### *property* NodeMove.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.ReadOnly"></a>

### *property* NodeMove.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodeMove.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Properties"></a>

### *property* NodeMove.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.VisibleProperties"></a>

### *property* NodeMove.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMove.MoveNode"></a>

### NodeMove.MoveNode(nodeId: System.Int32, locX: Ansys.Core.Units.Quantity, locY: Ansys.Core.Units.Quantity, locZ: Ansys.Core.Units.Quantity)

Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.UndoAllNodeMoves"></a>

### NodeMove.UndoAllNodeMoves()

Undos all moves done to a node.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.UndoLastNodeMove"></a>

### NodeMove.UndoLastNodeMove()

Undos the last move done to a node.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.MorphNodes"></a>

### NodeMove.MorphNodes()

Morph all the nodes.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Delete"></a>

### NodeMove.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetChildren"></a>

### NodeMove.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodeMove.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### NodeMove.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Activate"></a>

### NodeMove.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.CopyTo"></a>

### NodeMove.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Duplicate"></a>

### NodeMove.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GroupAllSimilarChildren"></a>

### NodeMove.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GroupSimilarObjects"></a>

### NodeMove.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.PropertyByName"></a>

### NodeMove.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.PropertyByAPIName"></a>

### NodeMove.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.CreateParameter"></a>

### NodeMove.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetParameter"></a>

### NodeMove.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.RemoveParameter"></a>

### NodeMove.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

