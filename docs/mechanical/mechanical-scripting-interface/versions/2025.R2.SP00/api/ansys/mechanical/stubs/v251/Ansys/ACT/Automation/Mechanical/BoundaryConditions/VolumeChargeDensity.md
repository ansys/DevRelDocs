# `VolumeChargeDensity`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VolumeChargeDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.VolumeChargeDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VolumeChargeDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VolumeChargeDensity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#VolumeChargeDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VolumeChargeDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VolumeChargeDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#VolumeChargeDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VolumeChargeDensity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#VolumeChargeDensity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VolumeChargeDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#VolumeChargeDensity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VolumeChargeDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VolumeChargeDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VolumeChargeDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#VolumeChargeDensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#VolumeChargeDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VolumeChargeDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VolumeChargeDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#VolumeChargeDensity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#VolumeChargeDensity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#VolumeChargeDensity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#VolumeChargeDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#VolumeChargeDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#VolumeChargeDensity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#VolumeChargeDensity.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#VolumeChargeDensity.Magnitude)                             | Gets or sets the Magnitude.                                   |
| [`Properties`](#VolumeChargeDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#VolumeChargeDensity.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#VolumeChargeDensity.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#VolumeChargeDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#VolumeChargeDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="VolumeChargeDensity.Children"></a>

### *property* VolumeChargeDensity.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Comments"></a>

### *property* VolumeChargeDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.DataModelObjectCategory"></a>

### *property* VolumeChargeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Figures"></a>

### *property* VolumeChargeDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Images"></a>

### *property* VolumeChargeDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.InternalObject"></a>

### *property* VolumeChargeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Location"></a>

### *property* VolumeChargeDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Magnitude"></a>

### *property* VolumeChargeDensity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Properties"></a>

### *property* VolumeChargeDensity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.ReadOnly"></a>

### *property* VolumeChargeDensity.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.SharedRefBody"></a>

### *property* VolumeChargeDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Suppressed"></a>

### *property* VolumeChargeDensity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.VisibleProperties"></a>

### *property* VolumeChargeDensity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VolumeChargeDensity.Activate"></a>

### VolumeChargeDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.AddComment"></a>

### VolumeChargeDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.AddFigure"></a>

### VolumeChargeDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.AddImage"></a>

### VolumeChargeDensity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.CopyTo"></a>

### VolumeChargeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.CreateParameter"></a>

### VolumeChargeDensity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Delete"></a>

### VolumeChargeDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Duplicate"></a>

### VolumeChargeDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetChildren"></a>

### VolumeChargeDensity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetParameter"></a>

### VolumeChargeDensity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GroupAllSimilarChildren"></a>

### VolumeChargeDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GroupSimilarObjects"></a>

### VolumeChargeDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.PromoteToNamedSelection"></a>

### VolumeChargeDensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.PropertyByAPIName"></a>

### VolumeChargeDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.PropertyByName"></a>

### VolumeChargeDensity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.RemoveParameter"></a>

### VolumeChargeDensity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

