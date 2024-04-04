# ConstructionLine

### *class* ConstructionLine

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`CreatePoints`](#ConstructionLine.CreatePoints)                       | CreatePoints method.                                                                    |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`CreatePlanarPoints`](#ConstructionLine.CreatePlanarPoints)           | CreatePlanarPoints method.                                                              |
| [`CreatePlane`](#ConstructionLine.CreatePlane)                         | Create a plane.                                                                         |
| [`CreateStraightLines`](#id1)                                          | CreateStraightLines method.                                                             |
| [`CreateStraightLines`](#id1)                                          | CreateStraightLines method.                                                             |
| [`FlipEdges`](#ConstructionLine.FlipEdges)                             | FlipEdges method.                                                                       |
| [`DeleteEdges`](#ConstructionLine.DeleteEdges)                         | DeleteEdges method.                                                                     |
| [`DeletePlane`](#ConstructionLine.DeletePlane)                         | Delete a plane associated with this construction line.                                  |
| [`AddToGeometry`](#ConstructionLine.AddToGeometry)                     | Add a part to Geometry with line bodies as contained in this ConstructionLine instance. |
| [`UpdateGeometry`](#ConstructionLine.UpdateGeometry)                   | Update the corresponding part with any changes made in this ConstructionLine instance.  |
| [`RemoveFromGeometry`](#ConstructionLine.RemoveFromGeometry)           | Remove the corresponding part from the geometry.                                        |
| [`GetPartFromGeometry`](#ConstructionLine.GetPartFromGeometry)         | Get the corresponding part for a ConstructionLine instance.                             |
| [`Undo`](#ConstructionLine.Undo)                                       | Undo the last operation in this Construction Line instance.                             |
| [`Redo`](#ConstructionLine.Redo)                                       | Redo and undone operation in this Construction Line instance.                           |
| [`AddComment`](#ConstructionLine.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ConstructionLine.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ConstructionLine.AddImage)                               | Creates a new child Image.                                                              |
| [`Activate`](#ConstructionLine.Activate)                               | Activate the current object.                                                            |
| [`CopyTo`](#ConstructionLine.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`Duplicate`](#ConstructionLine.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`GroupAllSimilarChildren`](#ConstructionLine.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ConstructionLine.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`PropertyByName`](#ConstructionLine.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`PropertyByAPIName`](#ConstructionLine.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`CreateParameter`](#ConstructionLine.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`GetParameter`](#ConstructionLine.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`RemoveParameter`](#ConstructionLine.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| [`Edges`](#ConstructionLine.Edges)                                                                                     | Creates for the user an IEdge representation of each edge in this Construction Line.   |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Points`](#ConstructionLine.Points)                                                                                   | Returns all points in this Construction Line, both those that have been created        |
| [`Planes`](#ConstructionLine.Planes)                                                                                   | Creates for the user an Plane representation of each plane in this Construction Line.  |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                                     |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                           |
| [`Comments`](#ConstructionLine.Comments)                                                                               | Gets the list of associated comments.                                                  |
| [`Figures`](#ConstructionLine.Figures)                                                                                 | Gets the list of associated figures.                                                   |
| [`Images`](#ConstructionLine.Images)                                                                                   | Gets the list of associated images.                                                    |
| [`ReadOnly`](#ConstructionLine.ReadOnly)                                                                               | Gets or sets the ReadOnly.                                                             |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                                     |
| [`Properties`](#ConstructionLine.Properties)                                                                           | Gets the list of properties for this object.                                           |
| [`VisibleProperties`](#ConstructionLine.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.                          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.ConstructionLines import ConstructionLine
```

## Property detail

### *property* ConstructionLine.Edges *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Creates for the user an IEdge representation of each edge in this Construction Line.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Points *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns all points in this Construction Line, both those that have been created
as well as virtual representations.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Planes *: System.Collections.Generic.IList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Creates for the user an Plane representation of each plane in this Construction Line.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.InternalObject *: Ansys.Common.Interop.DSLines.IDSLinesPythonInteraction | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ConstructionLine.CreatePoints(pointDefinitionCollection: System.Collections.Generic.IEnumerable[System.Object])

CreatePoints method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreatePlanarPoints(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#Plane), pointDefinitionCollection: System.Collections.Generic.IEnumerable[System.Object])

CreatePlanarPoints method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreatePlane(sketchPlaneDefinition: System.Object)

Create a plane.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreateStraightLines(pointCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#Point)])

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreateStraightLines(pointCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#Point)], connectionCollection: System.Collections.Generic.IEnumerable[System.Collections.Generic.IEnumerable[System.Object]])

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.FlipEdges(edgesToFlip: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#IEdge)])

FlipEdges method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.DeleteEdges(edgeCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#IEdge)])

DeleteEdges method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.DeletePlane(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#Plane), forceDelete: System.Boolean)

Delete a plane associated with this construction line.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.AddToGeometry()

Add a part to Geometry with line bodies as contained in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.UpdateGeometry()

Update the corresponding part with any changes made in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.RemoveFromGeometry()

Remove the corresponding part from the geometry.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.GetPartFromGeometry()

Get the corresponding part for a ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.Undo()

Undo the last operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.Redo()

Redo and undone operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
