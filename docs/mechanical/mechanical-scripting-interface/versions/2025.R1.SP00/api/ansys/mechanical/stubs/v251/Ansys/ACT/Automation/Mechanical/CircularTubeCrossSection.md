# `CircularTubeCrossSection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CircularTubeCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CircularTubeCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CircularTubeCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CircularTubeCrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CircularTubeCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CircularTubeCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CircularTubeCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CircularTubeCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CircularTubeCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CircularTubeCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CircularTubeCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CircularTubeCrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CircularTubeCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CircularTubeCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CircularTubeCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CircularTubeCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CircularTubeCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CircularTubeCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#CircularTubeCrossSection.Area)                                       | Gets the Area.                                                |
| [`Children`](#CircularTubeCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CircularTubeCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CircularTubeCrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CircularTubeCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`IYY`](#CircularTubeCrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#CircularTubeCrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Images`](#CircularTubeCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InnerRadius`](#CircularTubeCrossSection.InnerRadius)                         | Gets or sets the InnerRadius.                                 |
| [`InternalObject`](#CircularTubeCrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`OuterRadius`](#CircularTubeCrossSection.OuterRadius)                         | Gets or sets the OuterRadius.                                 |
| [`Properties`](#CircularTubeCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CircularTubeCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#CircularTubeCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CircularTubeCrossSection.Area"></a>

### *property* CircularTubeCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Children"></a>

### *property* CircularTubeCrossSection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Comments"></a>

### *property* CircularTubeCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.DataModelObjectCategory"></a>

### *property* CircularTubeCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Figures"></a>

### *property* CircularTubeCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.IYY"></a>

### *property* CircularTubeCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.IZZ"></a>

### *property* CircularTubeCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Images"></a>

### *property* CircularTubeCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.InnerRadius"></a>

### *property* CircularTubeCrossSection.InnerRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerRadius.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.InternalObject"></a>

### *property* CircularTubeCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.OuterRadius"></a>

### *property* CircularTubeCrossSection.OuterRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterRadius.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Properties"></a>

### *property* CircularTubeCrossSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.ReadOnly"></a>

### *property* CircularTubeCrossSection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.VisibleProperties"></a>

### *property* CircularTubeCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CircularTubeCrossSection.Activate"></a>

### CircularTubeCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.AddComment"></a>

### CircularTubeCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.AddFigure"></a>

### CircularTubeCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.AddImage"></a>

### CircularTubeCrossSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.CopyTo"></a>

### CircularTubeCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.CreateParameter"></a>

### CircularTubeCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Delete"></a>

### CircularTubeCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Duplicate"></a>

### CircularTubeCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetChildren"></a>

### CircularTubeCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetParameter"></a>

### CircularTubeCrossSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GroupAllSimilarChildren"></a>

### CircularTubeCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GroupSimilarObjects"></a>

### CircularTubeCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.PropertyByAPIName"></a>

### CircularTubeCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.PropertyByName"></a>

### CircularTubeCrossSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.RemoveParameter"></a>

### CircularTubeCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

