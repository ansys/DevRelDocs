# `MassFlowRate`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.MassFlowRate"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.MassFlowRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MassFlowRate.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MassFlowRate.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MassFlowRate.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MassFlowRate.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MassFlowRate.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MassFlowRate.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MassFlowRate.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MassFlowRate.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MassFlowRate.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MassFlowRate.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MassFlowRate.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MassFlowRate.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MassFlowRate.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MassFlowRate.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MassFlowRate.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MassFlowRate.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MassFlowRate.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MassFlowRate.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MassFlowRate.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MassFlowRate.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MassFlowRate.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MassFlowRate.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MassFlowRate.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#MassFlowRate.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#MassFlowRate.Magnitude)                             | Gets the Magnitude.                                           |
| [`Properties`](#MassFlowRate.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#MassFlowRate.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#MassFlowRate.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#MassFlowRate.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#MassFlowRate.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MassFlowRate.Children"></a>

### *property* MassFlowRate.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Comments"></a>

### *property* MassFlowRate.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.DataModelObjectCategory"></a>

### *property* MassFlowRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Figures"></a>

### *property* MassFlowRate.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Images"></a>

### *property* MassFlowRate.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.InternalObject"></a>

### *property* MassFlowRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Location"></a>

### *property* MassFlowRate.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Magnitude"></a>

### *property* MassFlowRate.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Properties"></a>

### *property* MassFlowRate.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.ReadOnly"></a>

### *property* MassFlowRate.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.SharedRefBody"></a>

### *property* MassFlowRate.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Suppressed"></a>

### *property* MassFlowRate.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.VisibleProperties"></a>

### *property* MassFlowRate.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MassFlowRate.Activate"></a>

### MassFlowRate.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.AddComment"></a>

### MassFlowRate.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.AddFigure"></a>

### MassFlowRate.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.AddImage"></a>

### MassFlowRate.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.CopyTo"></a>

### MassFlowRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.CreateParameter"></a>

### MassFlowRate.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Delete"></a>

### MassFlowRate.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Duplicate"></a>

### MassFlowRate.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetChildren"></a>

### MassFlowRate.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetParameter"></a>

### MassFlowRate.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GroupAllSimilarChildren"></a>

### MassFlowRate.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GroupSimilarObjects"></a>

### MassFlowRate.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.PromoteToNamedSelection"></a>

### MassFlowRate.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.PropertyByAPIName"></a>

### MassFlowRate.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.PropertyByName"></a>

### MassFlowRate.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.RemoveParameter"></a>

### MassFlowRate.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

