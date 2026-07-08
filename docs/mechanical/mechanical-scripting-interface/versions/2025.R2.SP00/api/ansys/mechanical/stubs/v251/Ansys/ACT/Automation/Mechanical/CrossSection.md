# `CrossSection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#CrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CrossSection.Children"></a>

### *property* CrossSection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Comments"></a>

### *property* CrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.DataModelObjectCategory"></a>

### *property* CrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Figures"></a>

### *property* CrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Images"></a>

### *property* CrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.InternalObject"></a>

### *property* CrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Properties"></a>

### *property* CrossSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.ReadOnly"></a>

### *property* CrossSection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.VisibleProperties"></a>

### *property* CrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CrossSection.Activate"></a>

### CrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.AddComment"></a>

### CrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.AddFigure"></a>

### CrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.AddImage"></a>

### CrossSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.CopyTo"></a>

### CrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.CreateParameter"></a>

### CrossSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Delete"></a>

### CrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.Duplicate"></a>

### CrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetChildren"></a>

### CrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GetParameter"></a>

### CrossSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GroupAllSimilarChildren"></a>

### CrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.GroupSimilarObjects"></a>

### CrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.PropertyByAPIName"></a>

### CrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.PropertyByName"></a>

### CrossSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CrossSection.RemoveParameter"></a>

### CrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

