# `SurfaceChargeDensity`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.SurfaceChargeDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.SurfaceChargeDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SurfaceChargeDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SurfaceChargeDensity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#SurfaceChargeDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SurfaceChargeDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SurfaceChargeDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#SurfaceChargeDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SurfaceChargeDensity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#SurfaceChargeDensity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#SurfaceChargeDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#SurfaceChargeDensity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SurfaceChargeDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SurfaceChargeDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SurfaceChargeDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#SurfaceChargeDensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#SurfaceChargeDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#SurfaceChargeDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SurfaceChargeDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#SurfaceChargeDensity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SurfaceChargeDensity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#SurfaceChargeDensity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#SurfaceChargeDensity.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#SurfaceChargeDensity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#SurfaceChargeDensity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#SurfaceChargeDensity.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#SurfaceChargeDensity.Magnitude)                             | Gets or sets the Magnitude.                                   |
| [`Properties`](#SurfaceChargeDensity.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SurfaceChargeDensity.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#SurfaceChargeDensity.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#SurfaceChargeDensity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#SurfaceChargeDensity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SurfaceChargeDensity.Children"></a>

### *property* SurfaceChargeDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Comments"></a>

### *property* SurfaceChargeDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.DataModelObjectCategory"></a>

### *property* SurfaceChargeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Figures"></a>

### *property* SurfaceChargeDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Images"></a>

### *property* SurfaceChargeDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.InternalObject"></a>

### *property* SurfaceChargeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Location"></a>

### *property* SurfaceChargeDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Magnitude"></a>

### *property* SurfaceChargeDensity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Properties"></a>

### *property* SurfaceChargeDensity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.ReadOnly"></a>

### *property* SurfaceChargeDensity.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.SharedRefBody"></a>

### *property* SurfaceChargeDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Suppressed"></a>

### *property* SurfaceChargeDensity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.VisibleProperties"></a>

### *property* SurfaceChargeDensity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SurfaceChargeDensity.Activate"></a>

### SurfaceChargeDensity.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.AddComment"></a>

### SurfaceChargeDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.AddFigure"></a>

### SurfaceChargeDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.AddImage"></a>

### SurfaceChargeDensity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.CopyTo"></a>

### SurfaceChargeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.CreateParameter"></a>

### SurfaceChargeDensity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Delete"></a>

### SurfaceChargeDensity.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Duplicate"></a>

### SurfaceChargeDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetChildren"></a>

### SurfaceChargeDensity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetParameter"></a>

### SurfaceChargeDensity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GroupAllSimilarChildren"></a>

### SurfaceChargeDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GroupSimilarObjects"></a>

### SurfaceChargeDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.PromoteToNamedSelection"></a>

### SurfaceChargeDensity.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.PropertyByAPIName"></a>

### SurfaceChargeDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.PropertyByName"></a>

### SurfaceChargeDensity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.RemoveParameter"></a>

### SurfaceChargeDensity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

