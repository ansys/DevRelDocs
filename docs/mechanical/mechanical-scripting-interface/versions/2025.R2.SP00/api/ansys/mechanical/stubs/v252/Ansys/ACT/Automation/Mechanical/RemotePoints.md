# `RemotePoints`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoints"></a>

#### *class* Ansys.ACT.Automation.Mechanical.RemotePoints

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RemotePoints.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RemotePoints.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RemotePoints.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RemotePoints.AddImage)                               | Creates a new child Image.                                                        |
| [`AddRemotePoint`](#RemotePoints.AddRemotePoint)                   | Creates a new RemotePoint                                                         |
| [`CopyTo`](#RemotePoints.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RemotePoints.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#RemotePoints.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#RemotePoints.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RemotePoints.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RemotePoints.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RemotePoints.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RemotePoints.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RemotePoints.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RemotePoints.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#RemotePoints.Children)                               | Gets the list of children.                                    |
| [`Comments`](#RemotePoints.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RemotePoints.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#RemotePoints.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#RemotePoints.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#RemotePoints.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RemotePoints.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RemotePoints.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RemotePoints.Children"></a>

### *property* RemotePoints.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Comments"></a>

### *property* RemotePoints.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.DataModelObjectCategory"></a>

### *property* RemotePoints.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Figures"></a>

### *property* RemotePoints.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Images"></a>

### *property* RemotePoints.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.InternalObject"></a>

### *property* RemotePoints.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRemotePointGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Properties"></a>

### *property* RemotePoints.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.VisibleProperties"></a>

### *property* RemotePoints.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemotePoints.Activate"></a>

### RemotePoints.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddComment"></a>

### RemotePoints.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddFigure"></a>

### RemotePoints.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddImage"></a>

### RemotePoints.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddRemotePoint"></a>

### RemotePoints.AddRemotePoint() → [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint)

Creates a new RemotePoint

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.CopyTo"></a>

### RemotePoints.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.CreateParameter"></a>

### RemotePoints.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Duplicate"></a>

### RemotePoints.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetChildren"></a>

### RemotePoints.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetParameter"></a>

### RemotePoints.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GroupAllSimilarChildren"></a>

### RemotePoints.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GroupSimilarObjects"></a>

### RemotePoints.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.PropertyByAPIName"></a>

### RemotePoints.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.PropertyByName"></a>

### RemotePoints.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.RemoveParameter"></a>

### RemotePoints.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

