# `InternalHeatGeneration`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.InternalHeatGeneration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.InternalHeatGeneration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a InternalHeatGeneration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#InternalHeatGeneration.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#InternalHeatGeneration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InternalHeatGeneration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InternalHeatGeneration.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#InternalHeatGeneration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#InternalHeatGeneration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#InternalHeatGeneration.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#InternalHeatGeneration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#InternalHeatGeneration.GetActivateAtLoadStep)     | Gets whether the internal heat generation is active at the specified load step.   |
| [`GetChildren`](#InternalHeatGeneration.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#InternalHeatGeneration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#InternalHeatGeneration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InternalHeatGeneration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#InternalHeatGeneration.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#InternalHeatGeneration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#InternalHeatGeneration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#InternalHeatGeneration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#InternalHeatGeneration.SetActivateAtLoadStep)     | Sets whether the internal heat generation is active at the specified load step.   |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#InternalHeatGeneration.Children)                               | Gets the list of children.                                    |
| [`Comments`](#InternalHeatGeneration.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#InternalHeatGeneration.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#InternalHeatGeneration.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#InternalHeatGeneration.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#InternalHeatGeneration.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#InternalHeatGeneration.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#InternalHeatGeneration.Magnitude)                             | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#InternalHeatGeneration.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#InternalHeatGeneration.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#InternalHeatGeneration.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#InternalHeatGeneration.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#InternalHeatGeneration.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#InternalHeatGeneration.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InternalHeatGeneration.Children"></a>

### *property* InternalHeatGeneration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Comments"></a>

### *property* InternalHeatGeneration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.DataModelObjectCategory"></a>

### *property* InternalHeatGeneration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Figures"></a>

### *property* InternalHeatGeneration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Images"></a>

### *property* InternalHeatGeneration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.InternalObject"></a>

### *property* InternalHeatGeneration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Location"></a>

### *property* InternalHeatGeneration.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Magnitude"></a>

### *property* InternalHeatGeneration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.NumberOfSegments"></a>

### *property* InternalHeatGeneration.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Properties"></a>

### *property* InternalHeatGeneration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.ReadOnly"></a>

### *property* InternalHeatGeneration.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.SharedRefBody"></a>

### *property* InternalHeatGeneration.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Suppressed"></a>

### *property* InternalHeatGeneration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.VisibleProperties"></a>

### *property* InternalHeatGeneration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InternalHeatGeneration.Activate"></a>

### InternalHeatGeneration.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddComment"></a>

### InternalHeatGeneration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddFigure"></a>

### InternalHeatGeneration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddImage"></a>

### InternalHeatGeneration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.CopyTo"></a>

### InternalHeatGeneration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.CreateParameter"></a>

### InternalHeatGeneration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Delete"></a>

### InternalHeatGeneration.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Duplicate"></a>

### InternalHeatGeneration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetActivateAtLoadStep"></a>

### InternalHeatGeneration.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the internal heat generation is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetChildren"></a>

### InternalHeatGeneration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetParameter"></a>

### InternalHeatGeneration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GroupAllSimilarChildren"></a>

### InternalHeatGeneration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GroupSimilarObjects"></a>

### InternalHeatGeneration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PromoteToNamedSelection"></a>

### InternalHeatGeneration.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PropertyByAPIName"></a>

### InternalHeatGeneration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PropertyByName"></a>

### InternalHeatGeneration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.RemoveParameter"></a>

### InternalHeatGeneration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.SetActivateAtLoadStep"></a>

### InternalHeatGeneration.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the internal heat generation is active at the specified load step.

<!-- !! processed by numpydoc !! -->

