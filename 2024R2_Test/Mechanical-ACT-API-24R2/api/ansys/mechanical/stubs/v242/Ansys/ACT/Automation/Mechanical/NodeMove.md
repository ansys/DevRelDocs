# `NodeMove`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NodeMove

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodeMove.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`MoveNode`](#NodeMove.MoveNode)                               | Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location.   |
| [`UndoAllNodeMoves`](#NodeMove.UndoAllNodeMoves)               | Undos all moves done to a node.                                                                                                                                                                            |
| [`UndoLastNodeMove`](#NodeMove.UndoLastNodeMove)               | Undos the last move done to a node.                                                                                                                                                                        |
| [`MorphNodes`](#NodeMove.MorphNodes)                           | Morph all the nodes.                                                                                                                                                                                       |
| [`Delete`](#NodeMove.Delete)                                   | Run the Delete action.                                                                                                                                                                                     |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                                                                                                                                               |
| [`GetChildren`](#id1)                                          | Gets the list of children, filtered by type.                                                                                                                                                               |
| [`AddComment`](#NodeMove.AddComment)                           | Creates a new child Comment.                                                                                                                                                                               |
| [`AddFigure`](#NodeMove.AddFigure)                             | Creates a new child Figure.                                                                                                                                                                                |
| [`AddImage`](#NodeMove.AddImage)                               | Creates a new child Image.                                                                                                                                                                                 |
| [`Activate`](#NodeMove.Activate)                               | Activate the current object.                                                                                                                                                                               |
| [`CopyTo`](#NodeMove.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                 |
| [`Duplicate`](#NodeMove.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                             |
| [`GroupAllSimilarChildren`](#NodeMove.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                    |
| [`GroupSimilarObjects`](#NodeMove.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                        |
| [`PropertyByName`](#NodeMove.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                         |
| [`PropertyByAPIName`](#NodeMove.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                            |
| [`CreateParameter`](#NodeMove.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                    |
| [`GetParameter`](#NodeMove.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                    |
| [`RemoveParameter`](#NodeMove.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                          |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`NumberOfMoves`](#NodeMove.NumberOfMoves)                     | Gets the NumberOfMoves.                                       |
| [`NumberOfNodes`](#NodeMove.NumberOfNodes)                     | Gets the NumberOfNodes.                                       |
| [`Information`](#NodeMove.Information)                         | Gets the Information.                                         |
| [`DataModelObjectCategory`](#NodeMove.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#NodeMove.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NodeMove.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#NodeMove.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#NodeMove.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#NodeMove.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodeMove.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodeMove.VisibleProperties)             | Gets the list of properties that are visible for this object. |

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

### *property* NodeMove.Information *: [Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/NodeMoveInformationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Information.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.DataModelObjectCategory"></a>

### *property* NodeMove.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Children"></a>

### *property* NodeMove.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Comments"></a>

### *property* NodeMove.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Figures"></a>

### *property* NodeMove.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Images"></a>

### *property* NodeMove.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### NodeMove.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

