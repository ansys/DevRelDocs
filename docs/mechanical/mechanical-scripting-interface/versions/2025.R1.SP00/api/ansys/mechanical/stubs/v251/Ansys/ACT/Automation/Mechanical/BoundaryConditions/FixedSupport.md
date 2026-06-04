# `FixedSupport`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FixedSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FixedSupport.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FixedSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FixedSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FixedSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FixedSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FixedSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FixedSupport.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FixedSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#FixedSupport.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FixedSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FixedSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FixedSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FixedSupport.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FixedSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FixedSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FixedSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#FixedSupport.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FixedSupport.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FixedSupport.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#FixedSupport.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#FixedSupport.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FixedSupport.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#FixedSupport.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#FixedSupport.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#FixedSupport.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#FixedSupport.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#FixedSupport.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#FixedSupport.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FixedSupport.Children"></a>

### *property* FixedSupport.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Comments"></a>

### *property* FixedSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.DataModelObjectCategory"></a>

### *property* FixedSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Figures"></a>

### *property* FixedSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Images"></a>

### *property* FixedSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.InternalObject"></a>

### *property* FixedSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Location"></a>

### *property* FixedSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Properties"></a>

### *property* FixedSupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.ReadOnly"></a>

### *property* FixedSupport.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.SharedRefBody"></a>

### *property* FixedSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Suppressed"></a>

### *property* FixedSupport.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.VisibleProperties"></a>

### *property* FixedSupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedSupport.Activate"></a>

### FixedSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddComment"></a>

### FixedSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddFigure"></a>

### FixedSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddImage"></a>

### FixedSupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.CopyTo"></a>

### FixedSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.CreateParameter"></a>

### FixedSupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Delete"></a>

### FixedSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Duplicate"></a>

### FixedSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetChildren"></a>

### FixedSupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetParameter"></a>

### FixedSupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GroupAllSimilarChildren"></a>

### FixedSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GroupSimilarObjects"></a>

### FixedSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PromoteToNamedSelection"></a>

### FixedSupport.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PropertyByAPIName"></a>

### FixedSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PropertyByName"></a>

### FixedSupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.RemoveParameter"></a>

### FixedSupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

