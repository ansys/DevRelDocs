# ImportedElementOrientations

<a id="ImportedElementOrientations"></a>

### *class* ImportedElementOrientations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ImportedElementOrientations.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ImportedElementOrientations.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedElementOrientations.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedElementOrientations.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedElementOrientations.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImportedElementOrientations.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImportedElementOrientations.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedElementOrientations.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedElementOrientations.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedElementOrientations.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedElementOrientations.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedElementOrientations.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedElementOrientations.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedElementOrientations.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedElementOrientations.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Count`](#ImportedElementOrientations.Count)                                                                       | Gets the NumberOfRows.                                        |
| [`Suppressed`](#ImportedElementOrientations.Suppressed)                                                             | Gets or sets the Suppressed.                                  |
| [`Children`](#ImportedElementOrientations.Children)                                                                 | Gets the list of children.                                    |
| [`Comments`](#ImportedElementOrientations.Comments)                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#ImportedElementOrientations.Figures)                                                                   | Gets the list of associated figures.                          |
| [`Images`](#ImportedElementOrientations.Images)                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedElementOrientations.ReadOnly)                                                                 | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedElementOrientations.Properties)                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedElementOrientations.VisibleProperties)                                               | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ImportedElementOrientations
```

<a id="property-detail"></a>

## Property detail

<a id="ImportedElementOrientations.InternalObject"></a>

### *property* ImportedElementOrientations.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.DataModelObjectCategory"></a>

### *property* ImportedElementOrientations.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Count"></a>

### *property* ImportedElementOrientations.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Suppressed"></a>

### *property* ImportedElementOrientations.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Children"></a>

### *property* ImportedElementOrientations.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Comments"></a>

### *property* ImportedElementOrientations.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Figures"></a>

### *property* ImportedElementOrientations.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Images"></a>

### *property* ImportedElementOrientations.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.ReadOnly"></a>

### *property* ImportedElementOrientations.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedElementOrientations.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Properties"></a>

### *property* ImportedElementOrientations.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.VisibleProperties"></a>

### *property* ImportedElementOrientations.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedElementOrientations.Delete"></a>

### ImportedElementOrientations.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.GetChildren"></a>

### ImportedElementOrientations.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedElementOrientations.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.AddComment"></a>

### ImportedElementOrientations.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.AddFigure"></a>

### ImportedElementOrientations.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.AddImage"></a>

### ImportedElementOrientations.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Activate"></a>

### ImportedElementOrientations.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.CopyTo"></a>

### ImportedElementOrientations.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Duplicate"></a>

### ImportedElementOrientations.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.GroupAllSimilarChildren"></a>

### ImportedElementOrientations.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.GroupSimilarObjects"></a>

### ImportedElementOrientations.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.PropertyByName"></a>

### ImportedElementOrientations.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.PropertyByAPIName"></a>

### ImportedElementOrientations.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.CreateParameter"></a>

### ImportedElementOrientations.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.GetParameter"></a>

### ImportedElementOrientations.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.RemoveParameter"></a>

### ImportedElementOrientations.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
