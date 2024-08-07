# `ConstructionGeometry`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ConstructionGeometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ConstructionGeometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`UpdateAllSolids`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.UpdateAllSolids)                 | Update all solid parts under the Construction Geometry folder.                    |
| [`UpdateSolids`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.UpdateSolids)                       | Update only the solids that are activated                                         |
| [`AddConstructionLine`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddConstructionLine)         | Creates a new ConstructionLine                                                    |
| [`AddConstructionPoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddConstructionPoint)       | Creates a new ConstructionPoint                                                   |
| [`AddPath`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddPath)                                 | Creates a new Path                                                                |
| [`AddSolid`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddSolid)                               | Creates a new Solid                                                               |
| [`AddSTL`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddSTL)                                   | Creates a new STL                                                                 |
| [`AddSurface`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddSurface)                           | Creates a new Surface                                                             |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`ShowMesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.ShowMesh)                               | Gets or sets the ShowMesh.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ConstructionGeometry.md#ConstructionGeometry.VisibleProperties)             | Gets the list of properties that are visible for this object. |

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

### *property* ConstructionGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Children"></a>

### *property* ConstructionGeometry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Comments"></a>

### *property* ConstructionGeometry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Figures"></a>

### *property* ConstructionGeometry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionGeometry.Images"></a>

### *property* ConstructionGeometry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### ConstructionGeometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

