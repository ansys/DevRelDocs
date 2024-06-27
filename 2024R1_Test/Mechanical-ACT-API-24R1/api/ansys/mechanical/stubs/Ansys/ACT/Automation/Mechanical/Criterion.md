# Criterion

<a id="Criterion"></a>

### *class* Criterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Criterion.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#Criterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Criterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Criterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Criterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Criterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Criterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Criterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Criterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Criterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Criterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Criterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Criterion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Criterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Criterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#Criterion.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Criterion.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#Criterion.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#Criterion.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#Criterion.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#Criterion.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Criterion.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Criterion.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Criterion
```

<a id="property-detail"></a>

## Property detail

<a id="Criterion.InternalObject"></a>

### *property* Criterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoCriterionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Suppressed"></a>

### *property* Criterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.DataModelObjectCategory"></a>

### *property* Criterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Children"></a>

### *property* Criterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Comments"></a>

### *property* Criterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Figures"></a>

### *property* Criterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Images"></a>

### *property* Criterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.ReadOnly"></a>

### *property* Criterion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Criterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Properties"></a>

### *property* Criterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.VisibleProperties"></a>

### *property* Criterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Criterion.Delete"></a>

### Criterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetChildren"></a>

### Criterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Criterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.AddComment"></a>

### Criterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.AddFigure"></a>

### Criterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.AddImage"></a>

### Criterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Activate"></a>

### Criterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.CopyTo"></a>

### Criterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Duplicate"></a>

### Criterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GroupAllSimilarChildren"></a>

### Criterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GroupSimilarObjects"></a>

### Criterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.PropertyByName"></a>

### Criterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.PropertyByAPIName"></a>

### Criterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.CreateParameter"></a>

### Criterion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetParameter"></a>

### Criterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.RemoveParameter"></a>

### Criterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
