# `ConstructionLine`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ConstructionLines.ConstructionLine

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`Activate`](#ConstructionLine.Activate)                               | Activate the current object.                                                            |
| [`AddComment`](#ConstructionLine.AddComment)                           | Creates a new child Comment.                                                            |
| [`AddFigure`](#ConstructionLine.AddFigure)                             | Creates a new child Figure.                                                             |
| [`AddImage`](#ConstructionLine.AddImage)                               | Creates a new child Image.                                                              |
| [`AddToGeometry`](#ConstructionLine.AddToGeometry)                     | Add a part to Geometry with line bodies as contained in this ConstructionLine instance. |
| [`CopyTo`](#ConstructionLine.CopyTo)                                   | Copies all visible properties from this object to another.                              |
| [`CreateParameter`](#ConstructionLine.CreateParameter)                 | Creates a new parameter for a Property.                                                 |
| [`CreatePlanarPoints`](#ConstructionLine.CreatePlanarPoints)           | CreatePlanarPoints method.                                                              |
| [`CreatePlane`](#ConstructionLine.CreatePlane)                         | Create a plane.                                                                         |
| [`CreatePoints`](#ConstructionLine.CreatePoints)                       | CreatePoints method.                                                                    |
| [`CreateStraightLines`](#ConstructionLine.CreateStraightLines)         | CreateStraightLines method.                                                             |
| [`DeleteEdges`](#ConstructionLine.DeleteEdges)                         | DeleteEdges method.                                                                     |
| [`DeletePlane`](#ConstructionLine.DeletePlane)                         | Delete a plane associated with this construction line.                                  |
| [`Duplicate`](#ConstructionLine.Duplicate)                             | Creates a copy of the current DataModelObject.                                          |
| [`FlipEdges`](#ConstructionLine.FlipEdges)                             | FlipEdges method.                                                                       |
| [`GetParameter`](#ConstructionLine.GetParameter)                       | Gets the parameter corresponding to the given property.                                 |
| [`GetPartFromGeometry`](#ConstructionLine.GetPartFromGeometry)         | Get the corresponding part for a ConstructionLine instance.                             |
| [`GroupAllSimilarChildren`](#ConstructionLine.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                 |
| [`GroupSimilarObjects`](#ConstructionLine.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                     |
| [`PropertyByAPIName`](#ConstructionLine.PropertyByAPIName)             | Get a property by its API name.                                                         |
| [`PropertyByName`](#ConstructionLine.PropertyByName)                   | Get a property by its unique name.                                                      |
| [`Redo`](#ConstructionLine.Redo)                                       | Redo and undone operation in this Construction Line instance.                           |
| [`RemoveFromGeometry`](#ConstructionLine.RemoveFromGeometry)           | Remove the corresponding part from the geometry.                                        |
| [`RemoveParameter`](#ConstructionLine.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.       |
| [`Undo`](#ConstructionLine.Undo)                                       | Undo the last operation in this Construction Line instance.                             |
| [`UpdateGeometry`](#ConstructionLine.UpdateGeometry)                   | Update the corresponding part with any changes made in this ConstructionLine instance.  |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`Comments`](#ConstructionLine.Comments)                               | Gets the list of associated comments.                                                 |
| [`DataModelObjectCategory`](#ConstructionLine.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                          |
| [`Edges`](#ConstructionLine.Edges)                                     | Creates for the user an IEdge representation of each edge in this Construction Line.  |
| [`Figures`](#ConstructionLine.Figures)                                 | Gets the list of associated figures.                                                  |
| [`Images`](#ConstructionLine.Images)                                   | Gets the list of associated images.                                                   |
| [`InternalObject`](#ConstructionLine.InternalObject)                   | Gets the internal object. For advanced usage only.                                    |
| [`Planes`](#ConstructionLine.Planes)                                   | Creates for the user an Plane representation of each plane in this Construction Line. |
| [`Points`](#ConstructionLine.Points)                                   | Returns all points in this Construction Line, both those that have been created       |
| [`Properties`](#ConstructionLine.Properties)                           | Gets the list of properties for this object.                                          |
| [`ReadOnly`](#ConstructionLine.ReadOnly)                               | Gets or sets the ReadOnly.                                                            |
| [`VisibleProperties`](#ConstructionLine.VisibleProperties)             | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionLine.Comments"></a>

### *property* ConstructionLine.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DataModelObjectCategory"></a>

### *property* ConstructionLine.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Edges"></a>

### *property* ConstructionLine.Edges *: List[Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Creates for the user an IEdge representation of each edge in this Construction Line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Figures"></a>

### *property* ConstructionLine.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Images"></a>

### *property* ConstructionLine.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.InternalObject"></a>

### *property* ConstructionLine.InternalObject *: Ansys.Common.Interop.DSLines.IDSLinesPythonInteraction | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Planes"></a>

### *property* ConstructionLine.Planes *: List[Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Creates for the user an Plane representation of each plane in this Construction Line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Points"></a>

### *property* ConstructionLine.Points *: List[Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns all points in this Construction Line, both those that have been created
as well as virtual representations.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Properties"></a>

### *property* ConstructionLine.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.ReadOnly"></a>

### *property* ConstructionLine.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.VisibleProperties"></a>

### *property* ConstructionLine.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionLine.Activate"></a>

### ConstructionLine.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddComment"></a>

### ConstructionLine.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddFigure"></a>

### ConstructionLine.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddImage"></a>

### ConstructionLine.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.AddToGeometry"></a>

### ConstructionLine.AddToGeometry() → Ansys.ACT.Interfaces.Geometry.IGeoPart

Add a part to Geometry with line bodies as contained in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CopyTo"></a>

### ConstructionLine.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreateParameter"></a>

### ConstructionLine.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreatePlanarPoints"></a>

### ConstructionLine.CreatePlanarPoints(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.Plane), pointDefinitionCollection: Iterable[Any]) → List[Any]

CreatePlanarPoints method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreatePlane"></a>

### ConstructionLine.CreatePlane(sketchPlaneDefinition: Any) → [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.Plane)

Create a plane.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreatePoints"></a>

### ConstructionLine.CreatePoints(pointDefinitionCollection: Iterable[Any]) → List[Any]

CreatePoints method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.CreateStraightLines"></a>

### ConstructionLine.CreateStraightLines(pointCollection: Iterable[[Ansys.Mechanical.DataModel.ConstructionLines.Point](../../../../Mechanical/DataModel/ConstructionLines/Point.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.Point)]) → List[Any]

CreateStraightLines method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DeleteEdges"></a>

### ConstructionLine.DeleteEdges(edgeCollection: Iterable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge)]) → [None](https://docs.python.org/3/library/constants.html#None)

DeleteEdges method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.DeletePlane"></a>

### ConstructionLine.DeletePlane(plane: [Ansys.Mechanical.DataModel.ConstructionLines.Plane](../../../../Mechanical/DataModel/ConstructionLines/Plane.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.Plane), forceDelete: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Delete a plane associated with this construction line.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Duplicate"></a>

### ConstructionLine.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.FlipEdges"></a>

### ConstructionLine.FlipEdges(edgesToFlip: Iterable[[Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge](../../../../Mechanical/DataModel/ConstructionLines/Edges/IEdge.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.ConstructionLines.Edges.IEdge)]) → [None](https://docs.python.org/3/library/constants.html#None)

FlipEdges method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetParameter"></a>

### ConstructionLine.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GetPartFromGeometry"></a>

### ConstructionLine.GetPartFromGeometry() → Ansys.ACT.Interfaces.Geometry.IGeoPart

Get the corresponding part for a ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GroupAllSimilarChildren"></a>

### ConstructionLine.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.GroupSimilarObjects"></a>

### ConstructionLine.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.PropertyByAPIName"></a>

### ConstructionLine.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.PropertyByName"></a>

### ConstructionLine.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Redo"></a>

### ConstructionLine.Redo() → [None](https://docs.python.org/3/library/constants.html#None)

Redo and undone operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.RemoveFromGeometry"></a>

### ConstructionLine.RemoveFromGeometry() → [None](https://docs.python.org/3/library/constants.html#None)

Remove the corresponding part from the geometry.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.RemoveParameter"></a>

### ConstructionLine.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.Undo"></a>

### ConstructionLine.Undo() → [None](https://docs.python.org/3/library/constants.html#None)

Undo the last operation in this Construction Line instance.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionLine.UpdateGeometry"></a>

### ConstructionLine.UpdateGeometry() → [None](https://docs.python.org/3/library/constants.html#None)

Update the corresponding part with any changes made in this ConstructionLine instance.

<!-- !! processed by numpydoc !! -->

