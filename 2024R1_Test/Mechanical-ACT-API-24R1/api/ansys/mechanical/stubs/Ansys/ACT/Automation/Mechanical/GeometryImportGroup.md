# GeometryImportGroup

<a id="GeometryImportGroup"></a>

### *class* GeometryImportGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeometryImportGroup.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddGeometryImport`](#GeometryImportGroup.AddGeometryImport)             | Create the object for working with an imported part.                              |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GeometryImportGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeometryImportGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeometryImportGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GeometryImportGroup.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GeometryImportGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GeometryImportGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GeometryImportGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeometryImportGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GeometryImportGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GeometryImportGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GeometryImportGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GeometryImportGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GeometryImportGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Count`](#GeometryImportGroup.Count)                                                                               | Get the number of child                                       |
| [`Item`](#GeometryImportGroup.Item)                                                                                 | Item property.                                                |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#GeometryImportGroup.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#GeometryImportGroup.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#GeometryImportGroup.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#GeometryImportGroup.Images)                                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GeometryImportGroup.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeometryImportGroup.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import GeometryImportGroup
```

<a id="property-detail"></a>

## Property detail

<a id="GeometryImportGroup.Count"></a>

### *property* GeometryImportGroup.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the number of child

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Item"></a>

### *property* GeometryImportGroup.Item *: [Ansys.ACT.Automation.Mechanical.GeometryImport](GeometryImport.md#GeometryImport) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.InternalObject"></a>

### *property* GeometryImportGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryImportGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.DataModelObjectCategory"></a>

### *property* GeometryImportGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Children"></a>

### *property* GeometryImportGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Comments"></a>

### *property* GeometryImportGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Figures"></a>

### *property* GeometryImportGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Images"></a>

### *property* GeometryImportGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GeometryImportGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Properties"></a>

### *property* GeometryImportGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.VisibleProperties"></a>

### *property* GeometryImportGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryImportGroup.AddGeometryImport"></a>

### GeometryImportGroup.AddGeometryImport()

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetChildren"></a>

### GeometryImportGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GeometryImportGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddComment"></a>

### GeometryImportGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddFigure"></a>

### GeometryImportGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddImage"></a>

### GeometryImportGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Activate"></a>

### GeometryImportGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CopyTo"></a>

### GeometryImportGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Duplicate"></a>

### GeometryImportGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GroupAllSimilarChildren"></a>

### GeometryImportGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GroupSimilarObjects"></a>

### GeometryImportGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.PropertyByName"></a>

### GeometryImportGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.PropertyByAPIName"></a>

### GeometryImportGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CreateParameter"></a>

### GeometryImportGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetParameter"></a>

### GeometryImportGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.RemoveParameter"></a>

### GeometryImportGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
