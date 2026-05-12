# `HatCrossSection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.HatCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.HatCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a HatCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#HatCrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#HatCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#HatCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#HatCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#HatCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#HatCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#HatCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#HatCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#HatCrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#HatCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#HatCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HatCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#HatCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#HatCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#HatCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#HatCrossSection.Area)                                       | Gets the Area.                                                |
| [`Children`](#HatCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#HatCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#HatCrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#HatCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`IYY`](#HatCrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#HatCrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Images`](#HatCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#HatCrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#HatCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HatCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Thick1`](#HatCrossSection.Thick1)                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#HatCrossSection.Thick2)                                   | Gets or sets the Thick2.                                      |
| [`Thick3`](#HatCrossSection.Thick3)                                   | Gets or sets the Thick3.                                      |
| [`Thick4`](#HatCrossSection.Thick4)                                   | Gets or sets the Thick4.                                      |
| [`Thick5`](#HatCrossSection.Thick5)                                   | Gets or sets the Thick5.                                      |
| [`VisibleProperties`](#HatCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`Width1`](#HatCrossSection.Width1)                                   | Gets or sets the Width1.                                      |
| [`Width2`](#HatCrossSection.Width2)                                   | Gets or sets the Width2.                                      |
| [`Width3`](#HatCrossSection.Width3)                                   | Gets or sets the Width3.                                      |
| [`Width4`](#HatCrossSection.Width4)                                   | Gets or sets the Width4.                                      |

<a id="property-detail"></a>

## Property detail

<a id="HatCrossSection.Area"></a>

### *property* HatCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Children"></a>

### *property* HatCrossSection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Comments"></a>

### *property* HatCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.DataModelObjectCategory"></a>

### *property* HatCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Figures"></a>

### *property* HatCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IYY"></a>

### *property* HatCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.IZZ"></a>

### *property* HatCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Images"></a>

### *property* HatCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.InternalObject"></a>

### *property* HatCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Properties"></a>

### *property* HatCrossSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.ReadOnly"></a>

### *property* HatCrossSection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick1"></a>

### *property* HatCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick2"></a>

### *property* HatCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick3"></a>

### *property* HatCrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick4"></a>

### *property* HatCrossSection.Thick4 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick4.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Thick5"></a>

### *property* HatCrossSection.Thick5 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick5.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.VisibleProperties"></a>

### *property* HatCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width1"></a>

### *property* HatCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width2"></a>

### *property* HatCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width3"></a>

### *property* HatCrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Width4"></a>

### *property* HatCrossSection.Width4 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width4.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HatCrossSection.Activate"></a>

### HatCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddComment"></a>

### HatCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddFigure"></a>

### HatCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.AddImage"></a>

### HatCrossSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.CopyTo"></a>

### HatCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.CreateParameter"></a>

### HatCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Delete"></a>

### HatCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.Duplicate"></a>

### HatCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetChildren"></a>

### HatCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GetParameter"></a>

### HatCrossSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GroupAllSimilarChildren"></a>

### HatCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.GroupSimilarObjects"></a>

### HatCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.PropertyByAPIName"></a>

### HatCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.PropertyByName"></a>

### HatCrossSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HatCrossSection.RemoveParameter"></a>

### HatCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

