<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ConstructionLines"></a>

<a id="the-constructionlines-package"></a>

# The `ConstructionLines` package

<a id="summary"></a>

## Summary

### Classes

| [`ConstructionLine`](ConstructionLine.md#ConstructionLine)   |    |
|--------------------------------------------------------------|----|

<a id="description"></a>

## Description

ConstructionLines subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ConstructionLines.ConstructionLine"></a>

### *class* ConstructionLines.ConstructionLine

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| [`CreatePoints`](#ConstructionLines.CreatePoints)                       | CreatePoints method.                                                                    |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`CreatePlanarPoints`](#ConstructionLines.CreatePlanarPoints)           | CreatePlanarPoints method.                                                              |
| [`CreatePlane`](#ConstructionLines.CreatePlane)                         | Create a plane.                                                                         |
| [`CreateStraightLines`](#id1)                                           | CreateStraightLines method.                                                             |
| [`CreateStraightLines`](#id1)                                           | CreateStraightLines method.                                                             |
| [`FlipEdges`](#ConstructionLines.FlipEdges)                             | FlipEdges method.                                                                       |
| [`DeleteEdges`](#ConstructionLines.DeleteEdges)                         | DeleteEdges method.                                                                     |
| [`DeletePlane`](#ConstructionLines.DeletePlane)                         | Delete a plane associated with this construction line.                                  |
| [`AddToGeometry`](#ConstructionLines.AddToGeometry)                     | Add a part to Geometry with line bodies as contained in this ConstructionLine instance. |
| [`UpdateGeometry`](#ConstructionLines.UpdateGeometry)                   | Update the corresponding part with any changes made in this ConstructionLine instance.  |
| [`RemoveFromGeometry`](#ConstructionLines.RemoveFromGeometry)           | Remove the corresponding part from the geometry.                                        |
| [`GetPartFromGeometry`](#ConstructionLines.GetPartFromGeometry)         | Get the corresponding part for a ConstructionLine instance.                             |
| [`Undo`](#ConstructionLines.Undo)                                       | Undo the last operation in this Construction Line instance.                             |
| [`Redo`](#ConstructionLines.Redo)                                       | Redo and undone operation in this Construction Line instance.                           |
| [`AddComment`](#ConstructionLines.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ConstructionLines.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ConstructionLines.AddImage)                               | Creates a new child Image.                                                              |
| [`Activate`](#ConstructionLines.Activate)                               | Activate the current object.                                                            |
| [`CopyTo`](#ConstructionLines.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`Duplicate`](#ConstructionLines.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`GroupAllSimilarChildren`](#ConstructionLines.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ConstructionLines.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`PropertyByName`](#ConstructionLines.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`PropertyByAPIName`](#ConstructionLines.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`CreateParameter`](#ConstructionLines.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`GetParameter`](#ConstructionLines.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`RemoveParameter`](#ConstructionLines.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| [`Edges`](#ConstructionLines.Edges)                                                                                    | Creates for the user an IEdge representation of each edge in this Construction Line.   |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Points`](#ConstructionLines.Points)                                                                                  | Returns all points in this Construction Line, both those that have been created        |
| [`Planes`](#ConstructionLines.Planes)                                                                                  | Creates for the user an Plane representation of each plane in this Construction Line.  |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                                     |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                           |
| [`Comments`](#ConstructionLines.Comments)                                                                              | Gets the list of associated comments.                                                  |
| [`Figures`](#ConstructionLines.Figures)                                                                                | Gets the list of associated figures.                                                   |
| [`Images`](#ConstructionLines.Images)                                                                                  | Gets the list of associated images.                                                    |
| [`ReadOnly`](#ConstructionLines.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                                             |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                                     |
| [`Properties`](#ConstructionLines.Properties)                                                                          | Gets the list of properties for this object.                                           |
| [`VisibleProperties`](#ConstructionLines.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.                          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ConstructionLines import ConstructionLine
```

<a id="property-detail"></a>

## Property detail

<a id="ConstructionLines.Edges"></a>

### *property* ConstructionLines.Edges *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Creates for the user an IEdge representation of each edge in this Construction Line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Points"></a>

### *property* ConstructionLines.Points *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns all points in this Construction Line, both those that have been created
as well as virtual representations.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Planes"></a>

### *property* ConstructionLines.Planes *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Creates for the user an Plane representation of each plane in this Construction Line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.InternalObject"></a>

### *property* ConstructionLines.InternalObject *: Ansys.Common.Interop.DSLines.IDSLinesPythonInteraction | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.DataModelObjectCategory"></a>

### *property* ConstructionLines.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Comments"></a>

### *property* ConstructionLines.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Figures"></a>

### *property* ConstructionLines.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Images"></a>

### *property* ConstructionLines.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.ReadOnly"></a>

### *property* ConstructionLines.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ConstructionLines.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Properties"></a>

### *property* ConstructionLines.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.VisibleProperties"></a>

### *property* ConstructionLines.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionLines.CreatePoints"></a>

### ConstructionLines.CreatePoints(pointDefinitionCollection: System.Collections.Generic.IEnumerable[System.Object])

CreatePoints method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.CreatePlanarPoints"></a>

### ConstructionLines.CreatePlanarPoints(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#Plane), pointDefinitionCollection: System.Collections.Generic.IEnumerable[System.Object])

CreatePlanarPoints method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.CreatePlane"></a>

### ConstructionLines.CreatePlane(sketchPlaneDefinition: System.Object)

Create a plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.CreateStraightLines"></a>

### ConstructionLines.CreateStraightLines(pointCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#Point)])

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ConstructionLines.CreateStraightLines(pointCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#Point)], connectionCollection: System.Collections.Generic.IEnumerable[System.Collections.Generic.IEnumerable[System.Object]])

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.FlipEdges"></a>

### ConstructionLines.FlipEdges(edgesToFlip: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#IEdge)])

FlipEdges method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.DeleteEdges"></a>

### ConstructionLines.DeleteEdges(edgeCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#IEdge)])

DeleteEdges method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.DeletePlane"></a>

### ConstructionLines.DeletePlane(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#Plane), forceDelete: System.Boolean)

Delete a plane associated with this construction line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.AddToGeometry"></a>

### ConstructionLines.AddToGeometry()

Add a part to Geometry with line bodies as contained in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.UpdateGeometry"></a>

### ConstructionLines.UpdateGeometry()

Update the corresponding part with any changes made in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.RemoveFromGeometry"></a>

### ConstructionLines.RemoveFromGeometry()

Remove the corresponding part from the geometry.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GetPartFromGeometry"></a>

### ConstructionLines.GetPartFromGeometry()

Get the corresponding part for a ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Undo"></a>

### ConstructionLines.Undo()

Undo the last operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Redo"></a>

### ConstructionLines.Redo()

Redo and undone operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.AddComment"></a>

### ConstructionLines.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.AddFigure"></a>

### ConstructionLines.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.AddImage"></a>

### ConstructionLines.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Activate"></a>

### ConstructionLines.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.CopyTo"></a>

### ConstructionLines.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.Duplicate"></a>

### ConstructionLines.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GroupAllSimilarChildren"></a>

### ConstructionLines.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GroupSimilarObjects"></a>

### ConstructionLines.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.PropertyByName"></a>

### ConstructionLines.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.PropertyByAPIName"></a>

### ConstructionLines.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.CreateParameter"></a>

### ConstructionLines.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.GetParameter"></a>

### ConstructionLines.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLines.RemoveParameter"></a>

### ConstructionLines.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
