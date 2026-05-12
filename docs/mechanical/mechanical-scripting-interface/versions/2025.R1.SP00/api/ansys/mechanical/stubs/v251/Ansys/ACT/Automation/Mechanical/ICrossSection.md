# `ICrossSection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ICrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ICrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ICrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ICrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ICrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ICrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ICrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ICrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ICrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ICrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ICrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ICrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ICrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ICrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ICrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ICrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ICrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ICrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#ICrossSection.Area)                                       | Gets the Area.                                                |
| [`Children`](#ICrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ICrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ICrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ICrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`IYY`](#ICrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#ICrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Images`](#ICrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ICrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ICrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ICrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Thick1`](#ICrossSection.Thick1)                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#ICrossSection.Thick2)                                   | Gets or sets the Thick2.                                      |
| [`Thick3`](#ICrossSection.Thick3)                                   | Gets or sets the Thick3.                                      |
| [`VisibleProperties`](#ICrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`Width1`](#ICrossSection.Width1)                                   | Gets or sets the Width1.                                      |
| [`Width2`](#ICrossSection.Width2)                                   | Gets or sets the Width2.                                      |
| [`Width3`](#ICrossSection.Width3)                                   | Gets or sets the Width3.                                      |

<a id="property-detail"></a>

## Property detail

<a id="ICrossSection.Area"></a>

### *property* ICrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Children"></a>

### *property* ICrossSection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Comments"></a>

### *property* ICrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.DataModelObjectCategory"></a>

### *property* ICrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Figures"></a>

### *property* ICrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.IYY"></a>

### *property* ICrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.IZZ"></a>

### *property* ICrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Images"></a>

### *property* ICrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.InternalObject"></a>

### *property* ICrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Properties"></a>

### *property* ICrossSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.ReadOnly"></a>

### *property* ICrossSection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Thick1"></a>

### *property* ICrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Thick2"></a>

### *property* ICrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Thick3"></a>

### *property* ICrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.VisibleProperties"></a>

### *property* ICrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Width1"></a>

### *property* ICrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Width2"></a>

### *property* ICrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Width3"></a>

### *property* ICrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ICrossSection.Activate"></a>

### ICrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.AddComment"></a>

### ICrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.AddFigure"></a>

### ICrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.AddImage"></a>

### ICrossSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.CopyTo"></a>

### ICrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.CreateParameter"></a>

### ICrossSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Delete"></a>

### ICrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Duplicate"></a>

### ICrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetChildren"></a>

### ICrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetParameter"></a>

### ICrossSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GroupAllSimilarChildren"></a>

### ICrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GroupSimilarObjects"></a>

### ICrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.PropertyByAPIName"></a>

### ICrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.PropertyByName"></a>

### ICrossSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.RemoveParameter"></a>

### ICrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

