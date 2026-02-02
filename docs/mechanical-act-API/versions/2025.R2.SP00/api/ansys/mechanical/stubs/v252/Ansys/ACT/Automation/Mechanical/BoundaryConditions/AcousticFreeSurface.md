# `AcousticFreeSurface`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFreeSurface"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFreeSurface

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFreeSurface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticFreeSurface.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticFreeSurface.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFreeSurface.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFreeSurface.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticFreeSurface.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticFreeSurface.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticFreeSurface.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticFreeSurface.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticFreeSurface.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticFreeSurface.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticFreeSurface.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFreeSurface.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticFreeSurface.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticFreeSurface.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticFreeSurface.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticFreeSurface.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticFreeSurface.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticFreeSurface.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticFreeSurface.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticFreeSurface.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticFreeSurface.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticFreeSurface.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticFreeSurface.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#AcousticFreeSurface.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticFreeSurface.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticFreeSurface.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticFreeSurface.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticFreeSurface.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFreeSurface.Children"></a>

### *property* AcousticFreeSurface.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Comments"></a>

### *property* AcousticFreeSurface.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.DataModelObjectCategory"></a>

### *property* AcousticFreeSurface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Figures"></a>

### *property* AcousticFreeSurface.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Images"></a>

### *property* AcousticFreeSurface.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.InternalObject"></a>

### *property* AcousticFreeSurface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Location"></a>

### *property* AcousticFreeSurface.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Properties"></a>

### *property* AcousticFreeSurface.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.ReadOnly"></a>

### *property* AcousticFreeSurface.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.SharedRefBody"></a>

### *property* AcousticFreeSurface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Suppressed"></a>

### *property* AcousticFreeSurface.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.VisibleProperties"></a>

### *property* AcousticFreeSurface.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFreeSurface.Activate"></a>

### AcousticFreeSurface.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddComment"></a>

### AcousticFreeSurface.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddFigure"></a>

### AcousticFreeSurface.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddImage"></a>

### AcousticFreeSurface.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.CopyTo"></a>

### AcousticFreeSurface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.CreateParameter"></a>

### AcousticFreeSurface.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Delete"></a>

### AcousticFreeSurface.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Duplicate"></a>

### AcousticFreeSurface.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetChildren"></a>

### AcousticFreeSurface.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetParameter"></a>

### AcousticFreeSurface.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GroupAllSimilarChildren"></a>

### AcousticFreeSurface.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GroupSimilarObjects"></a>

### AcousticFreeSurface.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PromoteToNamedSelection"></a>

### AcousticFreeSurface.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PropertyByAPIName"></a>

### AcousticFreeSurface.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PropertyByName"></a>

### AcousticFreeSurface.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.RemoveParameter"></a>

### AcousticFreeSurface.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

