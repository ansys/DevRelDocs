<a id="constructiongeometry"></a>

# ConstructionGeometry

<a id="ConstructionGeometry"></a>

### *class* ConstructionGeometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ConstructionGeometry.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`UpdateAllSolids`](#ConstructionGeometry.UpdateAllSolids)                 | Update all solid parts under the Construction Geometry folder.                    |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`UpdateSolids`](#ConstructionGeometry.UpdateSolids)                       | Update only the solids that are activated                                         |
| [`AddConstructionLine`](#ConstructionGeometry.AddConstructionLine)         | Creates a new ConstructionLine                                                    |
| [`AddConstructionPoint`](#ConstructionGeometry.AddConstructionPoint)       | Creates a new ConstructionPoint                                                   |
| [`AddPath`](#ConstructionGeometry.AddPath)                                 | Creates a new Path                                                                |
| [`AddSolid`](#ConstructionGeometry.AddSolid)                               | Creates a new Solid                                                               |
| [`AddSTL`](#ConstructionGeometry.AddSTL)                                   | Creates a new STL                                                                 |
| [`AddSurface`](#ConstructionGeometry.AddSurface)                           | Creates a new Surface                                                             |
| [`Delete`](#ConstructionGeometry.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ConstructionGeometry.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ConstructionGeometry.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ConstructionGeometry.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ConstructionGeometry.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ConstructionGeometry.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ConstructionGeometry.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ConstructionGeometry.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ConstructionGeometry.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ConstructionGeometry.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ConstructionGeometry.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ConstructionGeometry.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ConstructionGeometry.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ConstructionGeometry.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ShowMesh`](#ConstructionGeometry.ShowMesh)                                                                        | Gets or sets the ShowMesh.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ConstructionGeometry.Children)                                                                        | Gets the list of children.                                    |
| [`Comments`](#ConstructionGeometry.Comments)                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#ConstructionGeometry.Figures)                                                                          | Gets the list of associated figures.                          |
| [`Images`](#ConstructionGeometry.Images)                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ConstructionGeometry.Properties)                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ConstructionGeometry.VisibleProperties)                                                      | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ConstructionGeometry
```

<a id="property-detail"></a>

## Property detail

<a id="ConstructionGeometry.InternalObject"></a>

### *property* ConstructionGeometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstructionGeometryGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.ShowMesh"></a>

### *property* ConstructionGeometry.ShowMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowMesh.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.DataModelObjectCategory"></a>

### *property* ConstructionGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Children"></a>

### *property* ConstructionGeometry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Comments"></a>

### *property* ConstructionGeometry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Figures"></a>

### *property* ConstructionGeometry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Images"></a>

### *property* ConstructionGeometry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ConstructionGeometry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Properties"></a>

### *property* ConstructionGeometry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.VisibleProperties"></a>

### *property* ConstructionGeometry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionGeometry.UpdateAllSolids"></a>

### ConstructionGeometry.UpdateAllSolids()

Update all solid parts under the Construction Geometry folder.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.UpdateSolids"></a>

### ConstructionGeometry.UpdateSolids()

Update only the solids that are activated

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddConstructionLine"></a>

### ConstructionGeometry.AddConstructionLine()

Creates a new ConstructionLine

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddConstructionPoint"></a>

### ConstructionGeometry.AddConstructionPoint()

Creates a new ConstructionPoint

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddPath"></a>

### ConstructionGeometry.AddPath()

Creates a new Path

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSolid"></a>

### ConstructionGeometry.AddSolid()

Creates a new Solid

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSTL"></a>

### ConstructionGeometry.AddSTL()

Creates a new STL

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddSurface"></a>

### ConstructionGeometry.AddSurface()

Creates a new Surface

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Delete"></a>

### ConstructionGeometry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetChildren"></a>

### ConstructionGeometry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ConstructionGeometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddComment"></a>

### ConstructionGeometry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddFigure"></a>

### ConstructionGeometry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.AddImage"></a>

### ConstructionGeometry.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Activate"></a>

### ConstructionGeometry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.CopyTo"></a>

### ConstructionGeometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Duplicate"></a>

### ConstructionGeometry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GroupAllSimilarChildren"></a>

### ConstructionGeometry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GroupSimilarObjects"></a>

### ConstructionGeometry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.PropertyByName"></a>

### ConstructionGeometry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.PropertyByAPIName"></a>

### ConstructionGeometry.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.CreateParameter"></a>

### ConstructionGeometry.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.GetParameter"></a>

### ConstructionGeometry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.RemoveParameter"></a>

### ConstructionGeometry.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
