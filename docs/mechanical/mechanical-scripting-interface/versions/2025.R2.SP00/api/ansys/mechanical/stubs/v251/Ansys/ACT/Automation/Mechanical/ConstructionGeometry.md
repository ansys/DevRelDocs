# `ConstructionGeometry`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ConstructionGeometry"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ConstructionGeometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConstructionGeometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ConstructionGeometry.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ConstructionGeometry.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConstructionLine`](#ConstructionGeometry.AddConstructionLine)         | Creates a new ConstructionLine                                                    |
| [`AddConstructionPoint`](#ConstructionGeometry.AddConstructionPoint)       | Creates a new ConstructionPoint                                                   |
| [`AddFigure`](#ConstructionGeometry.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ConstructionGeometry.AddImage)                               | Creates a new child Image.                                                        |
| [`AddPath`](#ConstructionGeometry.AddPath)                                 | Creates a new Path                                                                |
| [`AddSTL`](#ConstructionGeometry.AddSTL)                                   | Creates a new STL                                                                 |
| [`AddSolid`](#ConstructionGeometry.AddSolid)                               | Creates a new Solid                                                               |
| [`AddSurface`](#ConstructionGeometry.AddSurface)                           | Creates a new Surface                                                             |
| [`CopyTo`](#ConstructionGeometry.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ConstructionGeometry.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ConstructionGeometry.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ConstructionGeometry.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ConstructionGeometry.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ConstructionGeometry.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ConstructionGeometry.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ConstructionGeometry.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ConstructionGeometry.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ConstructionGeometry.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ConstructionGeometry.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`UpdateAllSolids`](#ConstructionGeometry.UpdateAllSolids)                 | Update all solid parts under the Construction Geometry folder.                    |
| [`UpdateSolids`](#ConstructionGeometry.UpdateSolids)                       | Update only the solids that are activated                                         |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ConstructionGeometry.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ConstructionGeometry.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ConstructionGeometry.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ConstructionGeometry.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ConstructionGeometry.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ConstructionGeometry.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ConstructionGeometry.Properties)                           | Gets the list of properties for this object.                  |
| [`ShowMesh`](#ConstructionGeometry.ShowMesh)                               | Gets or sets the ShowMesh.                                    |
| [`VisibleProperties`](#ConstructionGeometry.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionGeometry.Children"></a>

### *property* ConstructionGeometry.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Comments"></a>

### *property* ConstructionGeometry.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.DataModelObjectCategory"></a>

### *property* ConstructionGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Figures"></a>

### *property* ConstructionGeometry.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Images"></a>

### *property* ConstructionGeometry.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.InternalObject"></a>

### *property* ConstructionGeometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstructionGeometryGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Properties"></a>

### *property* ConstructionGeometry.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.ShowMesh"></a>

### *property* ConstructionGeometry.ShowMesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowMesh.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.VisibleProperties"></a>

### *property* ConstructionGeometry.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionGeometry.Activate"></a>

### ConstructionGeometry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddComment"></a>

### ConstructionGeometry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddConstructionLine"></a>

### ConstructionGeometry.AddConstructionLine()

Creates a new ConstructionLine

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddConstructionPoint"></a>

### ConstructionGeometry.AddConstructionPoint()

Creates a new ConstructionPoint

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddFigure"></a>

### ConstructionGeometry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddImage"></a>

### ConstructionGeometry.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddPath"></a>

### ConstructionGeometry.AddPath()

Creates a new Path

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSTL"></a>

### ConstructionGeometry.AddSTL()

Creates a new STL

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSolid"></a>

### ConstructionGeometry.AddSolid()

Creates a new Solid

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSurface"></a>

### ConstructionGeometry.AddSurface()

Creates a new Surface

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.CopyTo"></a>

### ConstructionGeometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.CreateParameter"></a>

### ConstructionGeometry.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Delete"></a>

### ConstructionGeometry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Duplicate"></a>

### ConstructionGeometry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetChildren"></a>

### ConstructionGeometry.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetParameter"></a>

### ConstructionGeometry.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GroupAllSimilarChildren"></a>

### ConstructionGeometry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GroupSimilarObjects"></a>

### ConstructionGeometry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.PropertyByAPIName"></a>

### ConstructionGeometry.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.PropertyByName"></a>

### ConstructionGeometry.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.RemoveParameter"></a>

### ConstructionGeometry.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.UpdateAllSolids"></a>

### ConstructionGeometry.UpdateAllSolids()

Update all solid parts under the Construction Geometry folder.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.UpdateSolids"></a>

### ConstructionGeometry.UpdateSolids()

Update only the solids that are activated

<!-- !! processed by numpydoc !! -->

