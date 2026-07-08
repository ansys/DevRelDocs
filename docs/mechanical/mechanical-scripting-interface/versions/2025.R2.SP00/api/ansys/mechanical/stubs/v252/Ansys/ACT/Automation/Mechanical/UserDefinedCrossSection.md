# `UserDefinedCrossSection`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.UserDefinedCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.UserDefinedCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a UserDefinedCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#UserDefinedCrossSection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#UserDefinedCrossSection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#UserDefinedCrossSection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#UserDefinedCrossSection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#UserDefinedCrossSection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#UserDefinedCrossSection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#UserDefinedCrossSection.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#UserDefinedCrossSection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#UserDefinedCrossSection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#UserDefinedCrossSection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#UserDefinedCrossSection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#UserDefinedCrossSection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#UserDefinedCrossSection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#UserDefinedCrossSection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#UserDefinedCrossSection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#UserDefinedCrossSection.Area)                                       | Gets or sets the Area.                                        |
| [`CGZ`](#UserDefinedCrossSection.CGZ)                                         | Gets or sets the CGZ.                                         |
| [`CGy`](#UserDefinedCrossSection.CGy)                                         | Gets or sets the CGy.                                         |
| [`Children`](#UserDefinedCrossSection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#UserDefinedCrossSection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#UserDefinedCrossSection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#UserDefinedCrossSection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#UserDefinedCrossSection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#UserDefinedCrossSection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Iw`](#UserDefinedCrossSection.Iw)                                           | Gets or sets the Iw.                                          |
| [`Iyy`](#UserDefinedCrossSection.Iyy)                                         | Gets or sets the Iyy.                                         |
| [`Izz`](#UserDefinedCrossSection.Izz)                                         | Gets or sets the Izz.                                         |
| [`J`](#UserDefinedCrossSection.J)                                             | Gets or sets the J.                                           |
| [`Properties`](#UserDefinedCrossSection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#UserDefinedCrossSection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SHy`](#UserDefinedCrossSection.SHy)                                         | Gets or sets the SHy.                                         |
| [`SHz`](#UserDefinedCrossSection.SHz)                                         | Gets or sets the SHz.                                         |
| [`VisibleProperties`](#UserDefinedCrossSection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="UserDefinedCrossSection.Area"></a>

### *property* UserDefinedCrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Area.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CGZ"></a>

### *property* UserDefinedCrossSection.CGZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CGZ.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CGy"></a>

### *property* UserDefinedCrossSection.CGy *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CGy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Children"></a>

### *property* UserDefinedCrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Comments"></a>

### *property* UserDefinedCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.DataModelObjectCategory"></a>

### *property* UserDefinedCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Figures"></a>

### *property* UserDefinedCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Images"></a>

### *property* UserDefinedCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.InternalObject"></a>

### *property* UserDefinedCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Iw"></a>

### *property* UserDefinedCrossSection.Iw *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Iw.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Iyy"></a>

### *property* UserDefinedCrossSection.Iyy *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Iyy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Izz"></a>

### *property* UserDefinedCrossSection.Izz *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Izz.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.J"></a>

### *property* UserDefinedCrossSection.J *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the J.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Properties"></a>

### *property* UserDefinedCrossSection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.ReadOnly"></a>

### *property* UserDefinedCrossSection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.SHy"></a>

### *property* UserDefinedCrossSection.SHy *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SHy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.SHz"></a>

### *property* UserDefinedCrossSection.SHz *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SHz.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.VisibleProperties"></a>

### *property* UserDefinedCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="UserDefinedCrossSection.Activate"></a>

### UserDefinedCrossSection.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddComment"></a>

### UserDefinedCrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddFigure"></a>

### UserDefinedCrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddImage"></a>

### UserDefinedCrossSection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CopyTo"></a>

### UserDefinedCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CreateParameter"></a>

### UserDefinedCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Delete"></a>

### UserDefinedCrossSection.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Duplicate"></a>

### UserDefinedCrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetChildren"></a>

### UserDefinedCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetParameter"></a>

### UserDefinedCrossSection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GroupAllSimilarChildren"></a>

### UserDefinedCrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GroupSimilarObjects"></a>

### UserDefinedCrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.PropertyByAPIName"></a>

### UserDefinedCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.PropertyByName"></a>

### UserDefinedCrossSection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.RemoveParameter"></a>

### UserDefinedCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

