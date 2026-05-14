# `ContactSolutionInformation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ContactSolutionInformation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ContactSolutionInformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactSolutionInformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactSolutionInformation.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactSolutionInformation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactSolutionInformation.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ContactSolutionInformation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactSolutionInformation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactSolutionInformation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactSolutionInformation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ContactSolutionInformation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactSolutionInformation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactSolutionInformation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactSolutionInformation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactSolutionInformation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactSolutionInformation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactSolutionInformation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ContactSolutionInformation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ContactSolutionInformation.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ContactSolutionInformation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#ContactSolutionInformation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactSolutionInformation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactSolutionInformation.Properties)                           | Gets the list of properties for this object.                  |
| [`UpdateInterval`](#ContactSolutionInformation.UpdateInterval)                   | Gets or sets the UpdateInterval.                              |
| [`VisibleProperties`](#ContactSolutionInformation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactSolutionInformation.Children"></a>

### *property* ContactSolutionInformation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Comments"></a>

### *property* ContactSolutionInformation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.DataModelObjectCategory"></a>

### *property* ContactSolutionInformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Images"></a>

### *property* ContactSolutionInformation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.InternalObject"></a>

### *property* ContactSolutionInformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactInfoToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Properties"></a>

### *property* ContactSolutionInformation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.UpdateInterval"></a>

### *property* ContactSolutionInformation.UpdateInterval *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateInterval.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.VisibleProperties"></a>

### *property* ContactSolutionInformation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactSolutionInformation.Activate"></a>

### ContactSolutionInformation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.AddComment"></a>

### ContactSolutionInformation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.AddImage"></a>

### ContactSolutionInformation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.CopyTo"></a>

### ContactSolutionInformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.CreateParameter"></a>

### ContactSolutionInformation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Delete"></a>

### ContactSolutionInformation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Duplicate"></a>

### ContactSolutionInformation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetChildren"></a>

### ContactSolutionInformation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetParameter"></a>

### ContactSolutionInformation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GroupAllSimilarChildren"></a>

### ContactSolutionInformation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GroupSimilarObjects"></a>

### ContactSolutionInformation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.PropertyByAPIName"></a>

### ContactSolutionInformation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.PropertyByName"></a>

### ContactSolutionInformation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.RemoveParameter"></a>

### ContactSolutionInformation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

