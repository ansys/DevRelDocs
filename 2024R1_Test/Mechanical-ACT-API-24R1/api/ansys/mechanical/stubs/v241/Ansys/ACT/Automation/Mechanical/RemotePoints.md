<!-- vale off -->

<a id="remotepoints"></a>

# `RemotePoints`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoints"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoints

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddRemotePoint`](#RemotePoints.AddRemotePoint)                   | Creates a new RemotePoint                                                         |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RemotePoints.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RemotePoints.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RemotePoints.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RemotePoints.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RemotePoints.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RemotePoints.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RemotePoints.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RemotePoints.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RemotePoints.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RemotePoints.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RemotePoints.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RemotePoints.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RemotePoints.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                           | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#RemotePoints.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#RemotePoints.Children)                               | Gets the list of children.                                    |
| [`Comments`](#RemotePoints.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#RemotePoints.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#RemotePoints.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                           | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RemotePoints.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RemotePoints.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RemotePoints.InternalObject"></a>

### *property* RemotePoints.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRemotePointGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.DataModelObjectCategory"></a>

### *property* RemotePoints.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Children"></a>

### *property* RemotePoints.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Comments"></a>

### *property* RemotePoints.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Figures"></a>

### *property* RemotePoints.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Images"></a>

### *property* RemotePoints.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RemotePoints.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Properties"></a>

### *property* RemotePoints.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.VisibleProperties"></a>

### *property* RemotePoints.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemotePoints.AddRemotePoint"></a>

### RemotePoints.AddRemotePoint()

Creates a new RemotePoint

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetChildren"></a>

### RemotePoints.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RemotePoints.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddComment"></a>

### RemotePoints.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddFigure"></a>

### RemotePoints.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddImage"></a>

### RemotePoints.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Activate"></a>

### RemotePoints.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.CopyTo"></a>

### RemotePoints.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Duplicate"></a>

### RemotePoints.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GroupAllSimilarChildren"></a>

### RemotePoints.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GroupSimilarObjects"></a>

### RemotePoints.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.PropertyByName"></a>

### RemotePoints.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.PropertyByAPIName"></a>

### RemotePoints.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.CreateParameter"></a>

### RemotePoints.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetParameter"></a>

### RemotePoints.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.RemoveParameter"></a>

### RemotePoints.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
