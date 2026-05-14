# `ImportedCFDPressure`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImportedCFDPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImportedCFDPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCFDPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedCFDPressure.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedCFDPressure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCFDPressure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCFDPressure.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedCFDPressure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedCFDPressure.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedCFDPressure.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedCFDPressure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedCFDPressure.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedCFDPressure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedCFDPressure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCFDPressure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ImportedCFDPressure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ImportedCFDPressure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedCFDPressure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedCFDPressure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CFDPressureFile`](#ImportedCFDPressure.CFDPressureFile)                 | Gets or sets the CFDPressureFile.                             |
| [`Children`](#ImportedCFDPressure.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedCFDPressure.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedCFDPressure.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedCFDPressure.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedCFDPressure.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedCFDPressure.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ImportedCFDPressure.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#ImportedCFDPressure.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedCFDPressure.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#ImportedCFDPressure.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#ImportedCFDPressure.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedCFDPressure.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCFDPressure.CFDPressureFile"></a>

### *property* ImportedCFDPressure.CFDPressureFile *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CFDPressureFile.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Children"></a>

### *property* ImportedCFDPressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Comments"></a>

### *property* ImportedCFDPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.DataModelObjectCategory"></a>

### *property* ImportedCFDPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Figures"></a>

### *property* ImportedCFDPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Images"></a>

### *property* ImportedCFDPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.InternalObject"></a>

### *property* ImportedCFDPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Location"></a>

### *property* ImportedCFDPressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Properties"></a>

### *property* ImportedCFDPressure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.ReadOnly"></a>

### *property* ImportedCFDPressure.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.SharedRefBody"></a>

### *property* ImportedCFDPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Suppressed"></a>

### *property* ImportedCFDPressure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.VisibleProperties"></a>

### *property* ImportedCFDPressure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCFDPressure.Activate"></a>

### ImportedCFDPressure.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddComment"></a>

### ImportedCFDPressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddFigure"></a>

### ImportedCFDPressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddImage"></a>

### ImportedCFDPressure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CopyTo"></a>

### ImportedCFDPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CreateParameter"></a>

### ImportedCFDPressure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Delete"></a>

### ImportedCFDPressure.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Duplicate"></a>

### ImportedCFDPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetChildren"></a>

### ImportedCFDPressure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetParameter"></a>

### ImportedCFDPressure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GroupAllSimilarChildren"></a>

### ImportedCFDPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GroupSimilarObjects"></a>

### ImportedCFDPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PromoteToNamedSelection"></a>

### ImportedCFDPressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PropertyByAPIName"></a>

### ImportedCFDPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PropertyByName"></a>

### ImportedCFDPressure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.RemoveParameter"></a>

### ImportedCFDPressure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

