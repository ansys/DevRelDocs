# `TCrossSection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.TCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.TCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TCrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#TCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#TCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#TCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#TCrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#TCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#TCrossSection.Area)                                       | Gets the Area.                                                |
| [`Children`](#TCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#TCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#TCrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#TCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`IYY`](#TCrossSection.IYY)                                         | Gets the IYY.                                                 |
| [`IZZ`](#TCrossSection.IZZ)                                         | Gets the IZZ.                                                 |
| [`Images`](#TCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#TCrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#TCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Thick1`](#TCrossSection.Thick1)                                   | Gets or sets the Thick1.                                      |
| [`Thick2`](#TCrossSection.Thick2)                                   | Gets or sets the Thick2.                                      |
| [`VisibleProperties`](#TCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`Width1`](#TCrossSection.Width1)                                   | Gets or sets the Width1.                                      |
| [`Width2`](#TCrossSection.Width2)                                   | Gets or sets the Width2.                                      |

<a id="property-detail"></a>

## Property detail

<a id="TCrossSection.Area"></a>

### *property* TCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Children"></a>

### *property* TCrossSection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Comments"></a>

### *property* TCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.DataModelObjectCategory"></a>

### *property* TCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Figures"></a>

### *property* TCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.IYY"></a>

### *property* TCrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.IZZ"></a>

### *property* TCrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Images"></a>

### *property* TCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.InternalObject"></a>

### *property* TCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Properties"></a>

### *property* TCrossSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.ReadOnly"></a>

### *property* TCrossSection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Thick1"></a>

### *property* TCrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Thick2"></a>

### *property* TCrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.VisibleProperties"></a>

### *property* TCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Width1"></a>

### *property* TCrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Width2"></a>

### *property* TCrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TCrossSection.Activate"></a>

### TCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.AddComment"></a>

### TCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.AddFigure"></a>

### TCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.AddImage"></a>

### TCrossSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.CopyTo"></a>

### TCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.CreateParameter"></a>

### TCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Delete"></a>

### TCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.Duplicate"></a>

### TCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.GetChildren"></a>

### TCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.GetParameter"></a>

### TCrossSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.GroupAllSimilarChildren"></a>

### TCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.GroupSimilarObjects"></a>

### TCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.PropertyByAPIName"></a>

### TCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.PropertyByName"></a>

### TCrossSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TCrossSection.RemoveParameter"></a>

### TCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

