# `ConstructionLine`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`CreatePoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.CreatePoints)                       | CreatePoints method.                                                                    |
| [`CreatePlanarPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.CreatePlanarPoints)           | CreatePlanarPoints method.                                                              |
| [`CreatePlane`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.CreatePlane)                         | Create a plane.                                                                         |
| [`CreateStraightLines`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#id1)                                          | CreateStraightLines method.                                                             |
| [`CreateStraightLines`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#id1)                                          | CreateStraightLines method.                                                             |
| [`FlipEdges`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.FlipEdges)                             | FlipEdges method.                                                                       |
| [`DeleteEdges`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.DeleteEdges)                         | DeleteEdges method.                                                                     |
| [`DeletePlane`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.DeletePlane)                         | Delete a plane associated with this construction line.                                  |
| [`AddToGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.AddToGeometry)                     | Add a part to Geometry with line bodies as contained in this ConstructionLine instance. |
| [`UpdateGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.UpdateGeometry)                   | Update the corresponding part with any changes made in this ConstructionLine instance.  |
| [`RemoveFromGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.RemoveFromGeometry)           | Remove the corresponding part from the geometry.                                        |
| [`GetPartFromGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.GetPartFromGeometry)         | Get the corresponding part for a ConstructionLine instance.                             |
| [`Undo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Undo)                                       | Undo the last operation in this Construction Line instance.                             |
| [`Redo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Redo)                                       | Redo and undone operation in this Construction Line instance.                           |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.AddImage)                               | Creates a new child Image.                                                              |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Activate)                               | Activate the current object.                                                            |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Edges`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Edges)                                     | Creates for the user an IEdge representation of each edge in this Construction Line.   |
| [`Points`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Points)                                   | Returns all points in this Construction Line, both those that have been created        |
| [`Planes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Planes)                                   | Creates for the user an Plane representation of each plane in this Construction Line.  |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#id0)                                               | Gets the internal object. For advanced usage only.                                     |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.DataModelObjectCategory) | Gets the current DataModelObject's category.                                           |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Comments)                               | Gets the list of associated comments.                                                  |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Figures)                                 | Gets the list of associated figures.                                                   |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Images)                                   | Gets the list of associated images.                                                    |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.ReadOnly)                               | Gets or sets the ReadOnly.                                                             |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#id0)                                               | Gets the internal object. For advanced usage only.                                     |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.Properties)                           | Gets the list of properties for this object.                                           |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionLines/ConstructionLine.md#ConstructionLine.VisibleProperties)             | Gets the list of properties that are visible for this object.                          |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionLine.Edges"></a>

### *property* ConstructionLine.Edges *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Creates for the user an IEdge representation of each edge in this Construction Line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Points"></a>

### *property* ConstructionLine.Points *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns all points in this Construction Line, both those that have been created
as well as virtual representations.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Planes"></a>

### *property* ConstructionLine.Planes *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Creates for the user an Plane representation of each plane in this Construction Line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.InternalObject"></a>

### *property* ConstructionLine.InternalObject *: Ansys.Common.Interop.DSLines.IDSLinesPythonInteraction | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DataModelObjectCategory"></a>

### *property* ConstructionLine.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Comments"></a>

### *property* ConstructionLine.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Figures"></a>

### *property* ConstructionLine.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Images"></a>

### *property* ConstructionLine.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.ReadOnly"></a>

### *property* ConstructionLine.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ConstructionLine.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Properties"></a>

### *property* ConstructionLine.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.VisibleProperties"></a>

### *property* ConstructionLine.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionLine.CreatePoints"></a>

### ConstructionLine.CreatePoints(pointDefinitionCollection: System.Collections.Generic.IEnumerable[System.Object])

CreatePoints method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreatePlanarPoints"></a>

### ConstructionLine.CreatePlanarPoints(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Plane), pointDefinitionCollection: System.Collections.Generic.IEnumerable[System.Object])

CreatePlanarPoints method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreatePlane"></a>

### ConstructionLine.CreatePlane(sketchPlaneDefinition: System.Object)

Create a plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreateStraightLines"></a>

### ConstructionLine.CreateStraightLines(pointCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Point)])

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ConstructionLine.CreateStraightLines(pointCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Point)], connectionCollection: System.Collections.Generic.IEnumerable[System.Collections.Generic.IEnumerable[System.Object]])

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.FlipEdges"></a>

### ConstructionLine.FlipEdges(edgesToFlip: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge)])

FlipEdges method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DeleteEdges"></a>

### ConstructionLine.DeleteEdges(edgeCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge)])

DeleteEdges method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DeletePlane"></a>

### ConstructionLine.DeletePlane(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Plane), forceDelete: System.Boolean)

Delete a plane associated with this construction line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddToGeometry"></a>

### ConstructionLine.AddToGeometry()

Add a part to Geometry with line bodies as contained in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.UpdateGeometry"></a>

### ConstructionLine.UpdateGeometry()

Update the corresponding part with any changes made in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.RemoveFromGeometry"></a>

### ConstructionLine.RemoveFromGeometry()

Remove the corresponding part from the geometry.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetPartFromGeometry"></a>

### ConstructionLine.GetPartFromGeometry()

Get the corresponding part for a ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Undo"></a>

### ConstructionLine.Undo()

Undo the last operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Redo"></a>

### ConstructionLine.Redo()

Redo and undone operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddComment"></a>

### ConstructionLine.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddFigure"></a>

### ConstructionLine.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddImage"></a>

### ConstructionLine.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Activate"></a>

### ConstructionLine.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CopyTo"></a>

### ConstructionLine.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Duplicate"></a>

### ConstructionLine.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GroupAllSimilarChildren"></a>

### ConstructionLine.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GroupSimilarObjects"></a>

### ConstructionLine.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.PropertyByName"></a>

### ConstructionLine.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.PropertyByAPIName"></a>

### ConstructionLine.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreateParameter"></a>

### ConstructionLine.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetParameter"></a>

### ConstructionLine.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.RemoveParameter"></a>

### ConstructionLine.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

