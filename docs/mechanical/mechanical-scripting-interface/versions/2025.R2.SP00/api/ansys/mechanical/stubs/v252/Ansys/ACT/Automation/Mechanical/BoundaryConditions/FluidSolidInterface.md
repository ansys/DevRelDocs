# `FluidSolidInterface`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidSolidInterface"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidSolidInterface

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FluidSolidInterface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FluidSolidInterface.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FluidSolidInterface.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluidSolidInterface.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidSolidInterface.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FluidSolidInterface.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FluidSolidInterface.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FluidSolidInterface.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FluidSolidInterface.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#FluidSolidInterface.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FluidSolidInterface.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FluidSolidInterface.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidSolidInterface.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FluidSolidInterface.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FluidSolidInterface.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FluidSolidInterface.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FluidSolidInterface.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#FluidSolidInterface.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FluidSolidInterface.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FluidSolidInterface.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ExportResults`](#FluidSolidInterface.ExportResults)                     | Gets or sets the ExportResults.                               |
| [`Figures`](#FluidSolidInterface.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#FluidSolidInterface.Images)                                   | Gets the list of associated images.                           |
| [`InterfaceNumber`](#FluidSolidInterface.InterfaceNumber)                 | Gets or sets the InterfaceNumber.                             |
| [`InternalObject`](#FluidSolidInterface.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#FluidSolidInterface.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#FluidSolidInterface.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#FluidSolidInterface.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#FluidSolidInterface.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#FluidSolidInterface.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#FluidSolidInterface.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FluidSolidInterface.Children"></a>

### *property* FluidSolidInterface.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Comments"></a>

### *property* FluidSolidInterface.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.DataModelObjectCategory"></a>

### *property* FluidSolidInterface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ExportResults"></a>

### *property* FluidSolidInterface.ExportResults *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportResults.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Figures"></a>

### *property* FluidSolidInterface.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Images"></a>

### *property* FluidSolidInterface.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.InterfaceNumber"></a>

### *property* FluidSolidInterface.InterfaceNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.InternalObject"></a>

### *property* FluidSolidInterface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Location"></a>

### *property* FluidSolidInterface.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Properties"></a>

### *property* FluidSolidInterface.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ReadOnly"></a>

### *property* FluidSolidInterface.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.SharedRefBody"></a>

### *property* FluidSolidInterface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Suppressed"></a>

### *property* FluidSolidInterface.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.VisibleProperties"></a>

### *property* FluidSolidInterface.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidSolidInterface.Activate"></a>

### FluidSolidInterface.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddComment"></a>

### FluidSolidInterface.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddFigure"></a>

### FluidSolidInterface.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddImage"></a>

### FluidSolidInterface.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.CopyTo"></a>

### FluidSolidInterface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.CreateParameter"></a>

### FluidSolidInterface.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Delete"></a>

### FluidSolidInterface.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Duplicate"></a>

### FluidSolidInterface.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetChildren"></a>

### FluidSolidInterface.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetParameter"></a>

### FluidSolidInterface.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GroupAllSimilarChildren"></a>

### FluidSolidInterface.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GroupSimilarObjects"></a>

### FluidSolidInterface.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PromoteToNamedSelection"></a>

### FluidSolidInterface.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PropertyByAPIName"></a>

### FluidSolidInterface.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PropertyByName"></a>

### FluidSolidInterface.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.RemoveParameter"></a>

### FluidSolidInterface.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

