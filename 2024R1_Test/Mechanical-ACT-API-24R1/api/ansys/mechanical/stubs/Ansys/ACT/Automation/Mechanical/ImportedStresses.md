# ImportedStresses

<a id="ImportedStresses"></a>

### *class* ImportedStresses

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedStresses.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ImportedStresses.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedStresses.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedStresses.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedStresses.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedStresses.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedStresses.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedStresses.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedStresses.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedStresses.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedStresses.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedStresses.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedStresses.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedStresses.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedStresses.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedStresses.Count)                                                                                  | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedStresses.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedStresses.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#ImportedStresses.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#ImportedStresses.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#ImportedStresses.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedStresses.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedStresses.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedStresses.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedStresses
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedStresses.InternalObject"></a>

### *property* ImportedStresses.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.DataModelObjectCategory"></a>

### *property* ImportedStresses.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Count"></a>

### *property* ImportedStresses.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Suppressed"></a>

### *property* ImportedStresses.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Children"></a>

### *property* ImportedStresses.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Comments"></a>

### *property* ImportedStresses.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Figures"></a>

### *property* ImportedStresses.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Images"></a>

### *property* ImportedStresses.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.ReadOnly"></a>

### *property* ImportedStresses.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedStresses.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Properties"></a>

### *property* ImportedStresses.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.VisibleProperties"></a>

### *property* ImportedStresses.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedStresses.Delete"></a>

### ImportedStresses.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.GetChildren"></a>

### ImportedStresses.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedStresses.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.AddComment"></a>

### ImportedStresses.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.AddFigure"></a>

### ImportedStresses.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.AddImage"></a>

### ImportedStresses.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Activate"></a>

### ImportedStresses.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.CopyTo"></a>

### ImportedStresses.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.Duplicate"></a>

### ImportedStresses.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.GroupAllSimilarChildren"></a>

### ImportedStresses.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.GroupSimilarObjects"></a>

### ImportedStresses.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.PropertyByName"></a>

### ImportedStresses.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.PropertyByAPIName"></a>

### ImportedStresses.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.CreateParameter"></a>

### ImportedStresses.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.GetParameter"></a>

### ImportedStresses.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedStresses.RemoveParameter"></a>

### ImportedStresses.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
