# `CylindricalSupport`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.CylindricalSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.CylindricalSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CylindricalSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CylindricalSupport.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CylindricalSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CylindricalSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CylindricalSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CylindricalSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CylindricalSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CylindricalSupport.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CylindricalSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CylindricalSupport.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CylindricalSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CylindricalSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CylindricalSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#CylindricalSupport.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#CylindricalSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CylindricalSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CylindricalSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axial`](#CylindricalSupport.Axial)                                     | Gets or sets the Axial.                                       |
| [`Children`](#CylindricalSupport.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CylindricalSupport.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CylindricalSupport.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CylindricalSupport.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CylindricalSupport.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CylindricalSupport.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#CylindricalSupport.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#CylindricalSupport.Properties)                           | Gets the list of properties for this object.                  |
| [`Radial`](#CylindricalSupport.Radial)                                   | Gets or sets the Radial.                                      |
| [`ReadOnly`](#CylindricalSupport.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#CylindricalSupport.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#CylindricalSupport.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Tangential`](#CylindricalSupport.Tangential)                           | Gets or sets the Tangential.                                  |
| [`VisibleProperties`](#CylindricalSupport.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CylindricalSupport.Axial"></a>

### *property* CylindricalSupport.Axial *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axial.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Children"></a>

### *property* CylindricalSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Comments"></a>

### *property* CylindricalSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.DataModelObjectCategory"></a>

### *property* CylindricalSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Figures"></a>

### *property* CylindricalSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Images"></a>

### *property* CylindricalSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.InternalObject"></a>

### *property* CylindricalSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Location"></a>

### *property* CylindricalSupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Properties"></a>

### *property* CylindricalSupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Radial"></a>

### *property* CylindricalSupport.Radial *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radial.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.ReadOnly"></a>

### *property* CylindricalSupport.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.SharedRefBody"></a>

### *property* CylindricalSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Suppressed"></a>

### *property* CylindricalSupport.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Tangential"></a>

### *property* CylindricalSupport.Tangential *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tangential.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.VisibleProperties"></a>

### *property* CylindricalSupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CylindricalSupport.Activate"></a>

### CylindricalSupport.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddComment"></a>

### CylindricalSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddFigure"></a>

### CylindricalSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.AddImage"></a>

### CylindricalSupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.CopyTo"></a>

### CylindricalSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.CreateParameter"></a>

### CylindricalSupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Delete"></a>

### CylindricalSupport.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.Duplicate"></a>

### CylindricalSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetChildren"></a>

### CylindricalSupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GetParameter"></a>

### CylindricalSupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GroupAllSimilarChildren"></a>

### CylindricalSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.GroupSimilarObjects"></a>

### CylindricalSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PromoteToNamedSelection"></a>

### CylindricalSupport.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PropertyByAPIName"></a>

### CylindricalSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.PropertyByName"></a>

### CylindricalSupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalSupport.RemoveParameter"></a>

### CylindricalSupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

