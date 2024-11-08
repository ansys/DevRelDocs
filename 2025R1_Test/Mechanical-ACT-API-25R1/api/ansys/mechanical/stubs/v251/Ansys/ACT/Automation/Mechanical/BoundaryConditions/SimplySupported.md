# `SimplySupported`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.SimplySupported"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.SimplySupported

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SimplySupported.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SimplySupported.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#SimplySupported.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SimplySupported.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SimplySupported.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#SimplySupported.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SimplySupported.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#SimplySupported.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#SimplySupported.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#SimplySupported.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SimplySupported.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SimplySupported.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SimplySupported.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#SimplySupported.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#SimplySupported.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#SimplySupported.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SimplySupported.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#SimplySupported.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SimplySupported.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#SimplySupported.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#SimplySupported.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#SimplySupported.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#SimplySupported.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#SimplySupported.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#SimplySupported.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SimplySupported.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#SimplySupported.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#SimplySupported.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#SimplySupported.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SimplySupported.Children"></a>

### *property* SimplySupported.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Comments"></a>

### *property* SimplySupported.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.DataModelObjectCategory"></a>

### *property* SimplySupported.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Figures"></a>

### *property* SimplySupported.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Images"></a>

### *property* SimplySupported.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.InternalObject"></a>

### *property* SimplySupported.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Location"></a>

### *property* SimplySupported.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Properties"></a>

### *property* SimplySupported.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.ReadOnly"></a>

### *property* SimplySupported.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.SharedRefBody"></a>

### *property* SimplySupported.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Suppressed"></a>

### *property* SimplySupported.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.VisibleProperties"></a>

### *property* SimplySupported.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SimplySupported.Activate"></a>

### SimplySupported.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddComment"></a>

### SimplySupported.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddFigure"></a>

### SimplySupported.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddImage"></a>

### SimplySupported.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.CopyTo"></a>

### SimplySupported.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.CreateParameter"></a>

### SimplySupported.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Delete"></a>

### SimplySupported.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Duplicate"></a>

### SimplySupported.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetChildren"></a>

### SimplySupported.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetParameter"></a>

### SimplySupported.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GroupAllSimilarChildren"></a>

### SimplySupported.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GroupSimilarObjects"></a>

### SimplySupported.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PromoteToNamedSelection"></a>

### SimplySupported.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PropertyByAPIName"></a>

### SimplySupported.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PropertyByName"></a>

### SimplySupported.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.RemoveParameter"></a>

### SimplySupported.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

