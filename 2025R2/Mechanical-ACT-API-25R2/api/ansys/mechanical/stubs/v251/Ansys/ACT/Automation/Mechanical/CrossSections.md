# `CrossSections`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CrossSections"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CrossSections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CrossSections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CrossSections.Activate)                                                 | Activate the current object.                                                      |
| [`AddChannelCrossSection`](#CrossSections.AddChannelCrossSection)                     | Creates a new ChannelCrossSection                                                 |
| [`AddCircularCrossSection`](#CrossSections.AddCircularCrossSection)                   | Creates a new CircularCrossSection                                                |
| [`AddCircularTubeCrossSection`](#CrossSections.AddCircularTubeCrossSection)           | Creates a new CircularTubeCrossSection                                            |
| [`AddComment`](#CrossSections.AddComment)                                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#CrossSections.AddFigure)                                               | Creates a new child Figure.                                                       |
| [`AddHatCrossSection`](#CrossSections.AddHatCrossSection)                             | Creates a new HatCrossSection                                                     |
| [`AddHollowRectangularCrossSection`](#CrossSections.AddHollowRectangularCrossSection) | Creates a new HollowRectangularCrossSection                                       |
| [`AddICrossSection`](#CrossSections.AddICrossSection)                                 | Creates a new ICrossSection                                                       |
| [`AddImage`](#CrossSections.AddImage)                                                 | Creates a new child Image.                                                        |
| [`AddLCrossSection`](#CrossSections.AddLCrossSection)                                 | Creates a new LCrossSection                                                       |
| [`AddRectangularCrossSection`](#CrossSections.AddRectangularCrossSection)             | Creates a new RectangularCrossSection                                             |
| [`AddTCrossSection`](#CrossSections.AddTCrossSection)                                 | Creates a new TCrossSection                                                       |
| [`AddUserDefinedCrossSection`](#CrossSections.AddUserDefinedCrossSection)             | Creates a new UserDefinedCrossSection                                             |
| [`AddZCrossSection`](#CrossSections.AddZCrossSection)                                 | Creates a new ZCrossSection                                                       |
| [`CopyTo`](#CrossSections.CopyTo)                                                     | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CrossSections.CreateParameter)                                   | Creates a new parameter for a Property.                                           |
| [`Delete`](#CrossSections.Delete)                                                     | Run the Delete action.                                                            |
| [`Duplicate`](#CrossSections.Duplicate)                                               | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CrossSections.GetChildren)                                           | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CrossSections.GetParameter)                                         | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CrossSections.GroupAllSimilarChildren)                   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CrossSections.GroupSimilarObjects)                           | Run the GroupSimilarObjects action.                                               |
| [`NameCrossSectionsUniquely`](#CrossSections.NameCrossSectionsUniquely)               | programmatically give each of the Cross Section objects a unique name .           |
| [`PropertyByAPIName`](#CrossSections.PropertyByAPIName)                               | Get a property by its API name.                                                   |
| [`PropertyByName`](#CrossSections.PropertyByName)                                     | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CrossSections.RemoveParameter)                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CrossSections.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CrossSections.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CrossSections.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CrossSections.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CrossSections.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CrossSections.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CrossSections.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CrossSections.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CrossSections.Children"></a>

### *property* CrossSections.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Comments"></a>

### *property* CrossSections.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.DataModelObjectCategory"></a>

### *property* CrossSections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Figures"></a>

### *property* CrossSections.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Images"></a>

### *property* CrossSections.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.InternalObject"></a>

### *property* CrossSections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Properties"></a>

### *property* CrossSections.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.VisibleProperties"></a>

### *property* CrossSections.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CrossSections.Activate"></a>

### CrossSections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddChannelCrossSection"></a>

### CrossSections.AddChannelCrossSection()

Creates a new ChannelCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddCircularCrossSection"></a>

### CrossSections.AddCircularCrossSection()

Creates a new CircularCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddCircularTubeCrossSection"></a>

### CrossSections.AddCircularTubeCrossSection()

Creates a new CircularTubeCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddComment"></a>

### CrossSections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddFigure"></a>

### CrossSections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddHatCrossSection"></a>

### CrossSections.AddHatCrossSection()

Creates a new HatCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddHollowRectangularCrossSection"></a>

### CrossSections.AddHollowRectangularCrossSection()

Creates a new HollowRectangularCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddICrossSection"></a>

### CrossSections.AddICrossSection()

Creates a new ICrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddImage"></a>

### CrossSections.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddLCrossSection"></a>

### CrossSections.AddLCrossSection()

Creates a new LCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddRectangularCrossSection"></a>

### CrossSections.AddRectangularCrossSection()

Creates a new RectangularCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddTCrossSection"></a>

### CrossSections.AddTCrossSection()

Creates a new TCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddUserDefinedCrossSection"></a>

### CrossSections.AddUserDefinedCrossSection()

Creates a new UserDefinedCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.AddZCrossSection"></a>

### CrossSections.AddZCrossSection()

Creates a new ZCrossSection

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.CopyTo"></a>

### CrossSections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.CreateParameter"></a>

### CrossSections.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Delete"></a>

### CrossSections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.Duplicate"></a>

### CrossSections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetChildren"></a>

### CrossSections.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GetParameter"></a>

### CrossSections.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GroupAllSimilarChildren"></a>

### CrossSections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.GroupSimilarObjects"></a>

### CrossSections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.NameCrossSectionsUniquely"></a>

### CrossSections.NameCrossSectionsUniquely()

programmatically give each of the Cross Section objects a unique name .

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.PropertyByAPIName"></a>

### CrossSections.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.PropertyByName"></a>

### CrossSections.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CrossSections.RemoveParameter"></a>

### CrossSections.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

