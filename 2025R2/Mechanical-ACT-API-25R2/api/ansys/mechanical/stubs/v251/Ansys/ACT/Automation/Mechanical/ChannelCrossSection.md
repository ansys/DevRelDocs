# `ChannelCrossSection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ChannelCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ChannelCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ChannelCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ChannelCrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ChannelCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ChannelCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ChannelCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ChannelCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ChannelCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ChannelCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ChannelCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ChannelCrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ChannelCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ChannelCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ChannelCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ChannelCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ChannelCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ChannelCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#ChannelCrossSection.Area)                                       | Gets the Area.                                                |
| [`Children`](#ChannelCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ChannelCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ChannelCrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ChannelCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`IYY`](#ChannelCrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#ChannelCrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Images`](#ChannelCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ChannelCrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ChannelCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ChannelCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Thick1`](#ChannelCrossSection.Thick1)                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#ChannelCrossSection.Thick2)                                   | Gets or sets the Thick2.                                      |
| [`Thick3`](#ChannelCrossSection.Thick3)                                   | Gets or sets the Thick3.                                      |
| [`VisibleProperties`](#ChannelCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`Width1`](#ChannelCrossSection.Width1)                                   | Gets or sets the Width1.                                      |
| [`Width2`](#ChannelCrossSection.Width2)                                   | Gets or sets the Width2.                                      |
| [`Width3`](#ChannelCrossSection.Width3)                                   | Gets or sets the Width3.                                      |

<a id="property-detail"></a>

## Property detail

<a id="ChannelCrossSection.Area"></a>

### *property* ChannelCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Children"></a>

### *property* ChannelCrossSection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Comments"></a>

### *property* ChannelCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.DataModelObjectCategory"></a>

### *property* ChannelCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Figures"></a>

### *property* ChannelCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IYY"></a>

### *property* ChannelCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IZZ"></a>

### *property* ChannelCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Images"></a>

### *property* ChannelCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.InternalObject"></a>

### *property* ChannelCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Properties"></a>

### *property* ChannelCrossSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.ReadOnly"></a>

### *property* ChannelCrossSection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick1"></a>

### *property* ChannelCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick2"></a>

### *property* ChannelCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick3"></a>

### *property* ChannelCrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.VisibleProperties"></a>

### *property* ChannelCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width1"></a>

### *property* ChannelCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width2"></a>

### *property* ChannelCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width3"></a>

### *property* ChannelCrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ChannelCrossSection.Activate"></a>

### ChannelCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddComment"></a>

### ChannelCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddFigure"></a>

### ChannelCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddImage"></a>

### ChannelCrossSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.CopyTo"></a>

### ChannelCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.CreateParameter"></a>

### ChannelCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Delete"></a>

### ChannelCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Duplicate"></a>

### ChannelCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetChildren"></a>

### ChannelCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetParameter"></a>

### ChannelCrossSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GroupAllSimilarChildren"></a>

### ChannelCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GroupSimilarObjects"></a>

### ChannelCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.PropertyByAPIName"></a>

### ChannelCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.PropertyByName"></a>

### ChannelCrossSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.RemoveParameter"></a>

### ChannelCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

