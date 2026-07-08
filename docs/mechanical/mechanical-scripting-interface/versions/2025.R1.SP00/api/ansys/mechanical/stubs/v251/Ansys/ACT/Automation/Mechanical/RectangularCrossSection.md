# `RectangularCrossSection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RectangularCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.RectangularCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RectangularCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RectangularCrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RectangularCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RectangularCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RectangularCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#RectangularCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RectangularCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RectangularCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RectangularCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#RectangularCrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RectangularCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RectangularCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RectangularCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RectangularCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RectangularCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RectangularCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#RectangularCrossSection.Area)                                       | Gets the Area.                                                |
| [`Children`](#RectangularCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#RectangularCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RectangularCrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#RectangularCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`Height`](#RectangularCrossSection.Height)                                   | Gets or sets the Height.                                      |
| [`IYY`](#RectangularCrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#RectangularCrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Images`](#RectangularCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#RectangularCrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RectangularCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#RectangularCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#RectangularCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`Width`](#RectangularCrossSection.Width)                                     | Gets or sets the Width.                                       |

<a id="property-detail"></a>

## Property detail

<a id="RectangularCrossSection.Area"></a>

### *property* RectangularCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Children"></a>

### *property* RectangularCrossSection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Comments"></a>

### *property* RectangularCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.DataModelObjectCategory"></a>

### *property* RectangularCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Figures"></a>

### *property* RectangularCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Height"></a>

### *property* RectangularCrossSection.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.IYY"></a>

### *property* RectangularCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.IZZ"></a>

### *property* RectangularCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Images"></a>

### *property* RectangularCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.InternalObject"></a>

### *property* RectangularCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Properties"></a>

### *property* RectangularCrossSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.ReadOnly"></a>

### *property* RectangularCrossSection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.VisibleProperties"></a>

### *property* RectangularCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Width"></a>

### *property* RectangularCrossSection.Width *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RectangularCrossSection.Activate"></a>

### RectangularCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.AddComment"></a>

### RectangularCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.AddFigure"></a>

### RectangularCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.AddImage"></a>

### RectangularCrossSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.CopyTo"></a>

### RectangularCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.CreateParameter"></a>

### RectangularCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Delete"></a>

### RectangularCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.Duplicate"></a>

### RectangularCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.GetChildren"></a>

### RectangularCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.GetParameter"></a>

### RectangularCrossSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.GroupAllSimilarChildren"></a>

### RectangularCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.GroupSimilarObjects"></a>

### RectangularCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.PropertyByAPIName"></a>

### RectangularCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.PropertyByName"></a>

### RectangularCrossSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RectangularCrossSection.RemoveParameter"></a>

### RectangularCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

