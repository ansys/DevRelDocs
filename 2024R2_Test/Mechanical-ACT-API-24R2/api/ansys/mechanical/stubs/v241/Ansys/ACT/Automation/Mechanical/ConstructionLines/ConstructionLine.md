# `ConstructionLine`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------------|
| `CreatePoints`            | CreatePoints method.                                                                    |
| `CreatePlanarPoints`      | CreatePlanarPoints method.                                                              |
| `CreatePlane`             | Create a plane.                                                                         |
| `CreateStraightLines`     | CreateStraightLines method.                                                             |
| `CreateStraightLines`     | CreateStraightLines method.                                                             |
| `FlipEdges`               | FlipEdges method.                                                                       |
| `DeleteEdges`             | DeleteEdges method.                                                                     |
| `DeletePlane`             | Delete a plane associated with this construction line.                                  |
| `AddToGeometry`           | Add a part to Geometry with line bodies as contained in this ConstructionLine instance. |
| `UpdateGeometry`          | Update the corresponding part with any changes made in this ConstructionLine instance.  |
| `RemoveFromGeometry`      | Remove the corresponding part from the geometry.                                        |
| `GetPartFromGeometry`     | Get the corresponding part for a ConstructionLine instance.                             |
| `Undo`                    | Undo the last operation in this Construction Line instance.                             |
| `Redo`                    | Redo and undone operation in this Construction Line instance.                           |
| `AddComment`              | Creates a new child Comment.                                                            |
| `AddFigure`               | Creates a new child Figure.                                                             |
| `AddImage`                | Creates a new child Image.                                                              |
| `Activate`                | Activate the current object.                                                            |
| `CopyTo`                  | Copies all visible properties from this object to another.                              |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                          |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                                 |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                                     |
| `PropertyByName`          | Get a property by its unique name.                                                      |
| `PropertyByAPIName`       | Get a property by its API name.                                                         |
| `CreateParameter`         | Creates a new parameter for a Property.                                                 |
| `GetParameter`            | Gets the parameter corresponding to the given property.                                 |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property.       |

### Properties

| Name | Description |
|---------------------------|----------------------------------------------------------------------------------------|
| `Edges`                   | Creates for the user an IEdge representation of each edge in this Construction Line.   |
| `Points`                  | Returns all points in this Construction Line, both those that have been created        |
| `Planes`                  | Creates for the user an Plane representation of each plane in this Construction Line.  |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                     |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                           |
| `Comments`                | Gets the list of associated comments.                                                  |
| `Figures`                 | Gets the list of associated figures.                                                   |
| `Images`                  | Gets the list of associated images.                                                    |
| `ReadOnly`                | Gets or sets the ReadOnly.                                                             |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                     |
| `Properties`              | Gets the list of properties for this object.                                           |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                          |

<a id="property-detail"></a>

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

### *property* ConstructionLine.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ConstructionLine.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### ConstructionLine.CreatePoints(pointDefinitionCollection: System.Collections.Generic.IEnumerable[System.Object])

CreatePoints method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreatePlanarPoints(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Plane), pointDefinitionCollection: System.Collections.Generic.IEnumerable[System.Object])

CreatePlanarPoints method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreatePlane(sketchPlaneDefinition: System.Object)

Create a plane.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreateStraightLines(pointCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Point)])

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.CreateStraightLines(pointCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Point)], connectionCollection: System.Collections.Generic.IEnumerable[System.Collections.Generic.IEnumerable[System.Object]])

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.FlipEdges(edgesToFlip: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge)])

FlipEdges method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.DeleteEdges(edgeCollection: System.Collections.Generic.IEnumerable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge)])

DeleteEdges method.

<!-- !! processed by numpydoc !! -->

### ConstructionLine.DeletePlane(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.ConstructionLines.Plane), forceDelete: System.Boolean)

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

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

