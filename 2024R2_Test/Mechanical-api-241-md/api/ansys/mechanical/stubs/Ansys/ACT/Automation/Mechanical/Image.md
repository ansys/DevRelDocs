<a id="image"></a>

# Image

<a id="Image"></a>

### *class* Image

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Image.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Delete`](#Image.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Image.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Image.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Image.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Image.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Image.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Image.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Image.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Image.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Image.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Image.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Image.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Image.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Image.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Image.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Images`](#Image.Images)                                                                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Image.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Image.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Image
```

<a id="property-detail"></a>

## Property detail

<a id="Image.InternalObject"></a>

### *property* Image.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAdvancedPostOutputAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Image.DataModelObjectCategory"></a>

### *property* Image.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Image.Children"></a>

### *property* Image.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Image.Comments"></a>

### *property* Image.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Image.Images"></a>

### *property* Image.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Image.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Image.Properties"></a>

### *property* Image.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Image.VisibleProperties"></a>

### *property* Image.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Image.Delete"></a>

### Image.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Image.GetChildren"></a>

### Image.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Image.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Image.AddComment"></a>

### Image.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Image.AddImage"></a>

### Image.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Image.Activate"></a>

### Image.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Image.CopyTo"></a>

### Image.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Image.Duplicate"></a>

### Image.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Image.GroupAllSimilarChildren"></a>

### Image.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Image.GroupSimilarObjects"></a>

### Image.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Image.PropertyByName"></a>

### Image.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Image.PropertyByAPIName"></a>

### Image.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Image.CreateParameter"></a>

### Image.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Image.GetParameter"></a>

### Image.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Image.RemoveParameter"></a>

### Image.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
