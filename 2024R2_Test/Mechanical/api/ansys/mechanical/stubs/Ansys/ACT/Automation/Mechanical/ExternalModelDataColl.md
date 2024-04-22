<a id="externalmodeldatacoll"></a>

# ExternalModelDataColl

<a id="ExternalModelDataColl"></a>

### *class* ExternalModelDataColl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ExternalModelDataColl.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ExternalModelDataColl.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ExternalModelDataColl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ExternalModelDataColl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ExternalModelDataColl.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ExternalModelDataColl.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ExternalModelDataColl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ExternalModelDataColl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ExternalModelDataColl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ExternalModelDataColl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ExternalModelDataColl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ExternalModelDataColl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ExternalModelDataColl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ExternalModelDataColl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ExternalModelDataColl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Count`](#ExternalModelDataColl.Count)                                                                             | Gets the NumberOfRows.                                        |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#ExternalModelDataColl.Suppressed)                                                                   | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ExternalModelDataColl.Children)                                                                       | Gets the list of children.                                    |
| [`Comments`](#ExternalModelDataColl.Comments)                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#ExternalModelDataColl.Figures)                                                                         | Gets the list of associated figures.                          |
| [`Images`](#ExternalModelDataColl.Images)                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#ExternalModelDataColl.ReadOnly)                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ExternalModelDataColl.Properties)                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ExternalModelDataColl.VisibleProperties)                                                     | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ExternalModelDataColl
```

<a id="property-detail"></a>

## Property detail

<a id="ExternalModelDataColl.Count"></a>

### *property* ExternalModelDataColl.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.InternalObject"></a>

### *property* ExternalModelDataColl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Suppressed"></a>

### *property* ExternalModelDataColl.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.DataModelObjectCategory"></a>

### *property* ExternalModelDataColl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Children"></a>

### *property* ExternalModelDataColl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Comments"></a>

### *property* ExternalModelDataColl.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Figures"></a>

### *property* ExternalModelDataColl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Images"></a>

### *property* ExternalModelDataColl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.ReadOnly"></a>

### *property* ExternalModelDataColl.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ExternalModelDataColl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Properties"></a>

### *property* ExternalModelDataColl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.VisibleProperties"></a>

### *property* ExternalModelDataColl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExternalModelDataColl.Delete"></a>

### ExternalModelDataColl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetChildren"></a>

### ExternalModelDataColl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ExternalModelDataColl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddComment"></a>

### ExternalModelDataColl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddFigure"></a>

### ExternalModelDataColl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddImage"></a>

### ExternalModelDataColl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Activate"></a>

### ExternalModelDataColl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CopyTo"></a>

### ExternalModelDataColl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Duplicate"></a>

### ExternalModelDataColl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GroupAllSimilarChildren"></a>

### ExternalModelDataColl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GroupSimilarObjects"></a>

### ExternalModelDataColl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PropertyByName"></a>

### ExternalModelDataColl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PropertyByAPIName"></a>

### ExternalModelDataColl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CreateParameter"></a>

### ExternalModelDataColl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetParameter"></a>

### ExternalModelDataColl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveParameter"></a>

### ExternalModelDataColl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
