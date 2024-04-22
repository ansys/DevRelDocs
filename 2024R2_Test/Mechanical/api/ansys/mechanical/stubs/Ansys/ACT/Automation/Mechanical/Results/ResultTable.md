<a id="resulttable"></a>

# ResultTable

<a id="ResultTable"></a>

### *class* ResultTable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ResultTable.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ResultTable.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ResultTable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ResultTable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ResultTable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ResultTable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ResultTable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ResultTable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ResultTable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ResultTable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ResultTable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ResultTable.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ResultTable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ResultTable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Multiplier`](#ResultTable.Multiplier)                                                                                | Gets or sets the Multiplier.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ResultTable.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#ResultTable.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Images`](#ResultTable.Images)                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ResultTable.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ResultTable.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import ResultTable
```

<a id="property-detail"></a>

## Property detail

<a id="ResultTable.InternalObject"></a>

### *property* ResultTable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Multiplier"></a>

### *property* ResultTable.Multiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.DataModelObjectCategory"></a>

### *property* ResultTable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Children"></a>

### *property* ResultTable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Comments"></a>

### *property* ResultTable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Images"></a>

### *property* ResultTable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ResultTable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Properties"></a>

### *property* ResultTable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.VisibleProperties"></a>

### *property* ResultTable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResultTable.Delete"></a>

### ResultTable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetChildren"></a>

### ResultTable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ResultTable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.AddComment"></a>

### ResultTable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.AddImage"></a>

### ResultTable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Activate"></a>

### ResultTable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.CopyTo"></a>

### ResultTable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Duplicate"></a>

### ResultTable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GroupAllSimilarChildren"></a>

### ResultTable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GroupSimilarObjects"></a>

### ResultTable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.PropertyByName"></a>

### ResultTable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.PropertyByAPIName"></a>

### ResultTable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.CreateParameter"></a>

### ResultTable.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetParameter"></a>

### ResultTable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.RemoveParameter"></a>

### ResultTable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
