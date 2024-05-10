# TableGroup

<a id="TableGroup"></a>

### *class* TableGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TableGroup.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddTable`](#TableGroup.AddTable)                               | Create the object for working with an imported part.                              |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TableGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TableGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TableGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TableGroup.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TableGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TableGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TableGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TableGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TableGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TableGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#TableGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#TableGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TableGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#TableGroup.Children)                                                                                  | Gets the list of children.                                    |
| [`Comments`](#TableGroup.Comments)                                                                                  | Gets the list of associated comments.                         |
| [`Figures`](#TableGroup.Figures)                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#TableGroup.Images)                                                                                      | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TableGroup.Properties)                                                                              | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#TableGroup.VisibleProperties)                                                                | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import TableGroup
```

<a id="property-detail"></a>

## Property detail

<a id="TableGroup.InternalObject"></a>

### *property* TableGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTableGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.DataModelObjectCategory"></a>

### *property* TableGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Children"></a>

### *property* TableGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Comments"></a>

### *property* TableGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Figures"></a>

### *property* TableGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Images"></a>

### *property* TableGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TableGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Properties"></a>

### *property* TableGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.VisibleProperties"></a>

### *property* TableGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TableGroup.AddTable"></a>

### TableGroup.AddTable(activate: System.Boolean, expandGroup: System.Boolean)

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetChildren"></a>

### TableGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TableGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddComment"></a>

### TableGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddFigure"></a>

### TableGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.AddImage"></a>

### TableGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Activate"></a>

### TableGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.CopyTo"></a>

### TableGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.Duplicate"></a>

### TableGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GroupAllSimilarChildren"></a>

### TableGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GroupSimilarObjects"></a>

### TableGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.PropertyByName"></a>

### TableGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.PropertyByAPIName"></a>

### TableGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.CreateParameter"></a>

### TableGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.GetParameter"></a>

### TableGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TableGroup.RemoveParameter"></a>

### TableGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
