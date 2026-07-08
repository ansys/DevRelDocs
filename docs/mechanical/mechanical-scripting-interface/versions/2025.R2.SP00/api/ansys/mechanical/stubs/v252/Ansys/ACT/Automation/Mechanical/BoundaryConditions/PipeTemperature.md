# `PipeTemperature`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipeTemperature"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipeTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PipeTemperature.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PipeTemperature.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PipeTemperature.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PipeTemperature.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PipeTemperature.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PipeTemperature.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PipeTemperature.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PipeTemperature.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PipeTemperature.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#PipeTemperature.GetActivateAtLoadStep)     | Gets whether the pipe temperature is active at the specified load step.           |
| [`GetChildren`](#PipeTemperature.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PipeTemperature.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PipeTemperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PipeTemperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#PipeTemperature.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#PipeTemperature.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PipeTemperature.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PipeTemperature.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#PipeTemperature.SetActivateAtLoadStep)     | Sets whether the pipe temperature is active at the specified load step.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PipeTemperature.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#PipeTemperature.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PipeTemperature.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Figures`](#PipeTemperature.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#PipeTemperature.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`Images`](#PipeTemperature.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#PipeTemperature.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#PipeTemperature.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Loading`](#PipeTemperature.Loading)                                         | Gets or sets the Loading.                                     |
| [`Location`](#PipeTemperature.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#PipeTemperature.Magnitude)                                     | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#PipeTemperature.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#PipeTemperature.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#PipeTemperature.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#PipeTemperature.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#PipeTemperature.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#PipeTemperature.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#PipeTemperature.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PipeTemperature.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#PipeTemperature.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="PipeTemperature.Children"></a>

### *property* PipeTemperature.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Comments"></a>

### *property* PipeTemperature.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.DataModelObjectCategory"></a>

### *property* PipeTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Figures"></a>

### *property* PipeTemperature.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GraphControlsXAxis"></a>

### *property* PipeTemperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Images"></a>

### *property* PipeTemperature.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.IndependentVariable"></a>

### *property* PipeTemperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.InternalObject"></a>

### *property* PipeTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Loading"></a>

### *property* PipeTemperature.Loading *: [Ansys.Mechanical.DataModel.Enums.PipeLoadingType](../../../../Mechanical/DataModel/Enums/PipeLoadingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PipeLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Loading.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Location"></a>

### *property* PipeTemperature.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Magnitude"></a>

### *property* PipeTemperature.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.NumberOfSegments"></a>

### *property* PipeTemperature.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Properties"></a>

### *property* PipeTemperature.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.RangeMaximum"></a>

### *property* PipeTemperature.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.RangeMinimum"></a>

### *property* PipeTemperature.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.ReadOnly"></a>

### *property* PipeTemperature.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.SharedRefBody"></a>

### *property* PipeTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Suppressed"></a>

### *property* PipeTemperature.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.VisibleProperties"></a>

### *property* PipeTemperature.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.XYZFunctionCoordinateSystem"></a>

### *property* PipeTemperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PipeTemperature.Activate"></a>

### PipeTemperature.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.AddComment"></a>

### PipeTemperature.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.AddFigure"></a>

### PipeTemperature.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.AddImage"></a>

### PipeTemperature.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.CopyTo"></a>

### PipeTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.CreateParameter"></a>

### PipeTemperature.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Delete"></a>

### PipeTemperature.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.Duplicate"></a>

### PipeTemperature.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetActivateAtLoadStep"></a>

### PipeTemperature.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the pipe temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetChildren"></a>

### PipeTemperature.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GetParameter"></a>

### PipeTemperature.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GroupAllSimilarChildren"></a>

### PipeTemperature.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.GroupSimilarObjects"></a>

### PipeTemperature.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.PromoteToNamedSelection"></a>

### PipeTemperature.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.PropertyByAPIName"></a>

### PipeTemperature.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.PropertyByName"></a>

### PipeTemperature.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.RemoveParameter"></a>

### PipeTemperature.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipeTemperature.SetActivateAtLoadStep"></a>

### PipeTemperature.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the pipe temperature is active at the specified load step.

<!-- !! processed by numpydoc !! -->

