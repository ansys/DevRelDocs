# `PipePressure`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipePressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipePressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PipePressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PipePressure.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#PipePressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#PipePressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#PipePressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#PipePressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PipePressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#PipePressure.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#PipePressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#PipePressure.GetActivateAtLoadStep)                   | Gets whether the pipe pressure is active at the specified load step.              |
| [`GetChildren`](#PipePressure.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#PipePressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#PipePressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PipePressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PipePressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#PipePressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#PipePressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#PipePressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PipePressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#PipePressure.SetActivateAtLoadStep)                   | Sets whether the pipe pressure is active at the specified load step.              |
| [`SetComponentActivateAtLoadStep`](#PipePressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PipePressure.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#PipePressure.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PipePressure.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Figures`](#PipePressure.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#PipePressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`Images`](#PipePressure.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#PipePressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#PipePressure.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Loading`](#PipePressure.Loading)                                         | Gets or sets the Loading.                                     |
| [`Location`](#PipePressure.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#PipePressure.Magnitude)                                     | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#PipePressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#PipePressure.PhaseAngle)                                   | Gets or sets the PhaseAngle.                                  |
| [`Properties`](#PipePressure.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#PipePressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#PipePressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#PipePressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#PipePressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#PipePressure.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PipePressure.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#PipePressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="PipePressure.Children"></a>

### *property* PipePressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Comments"></a>

### *property* PipePressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.DataModelObjectCategory"></a>

### *property* PipePressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Figures"></a>

### *property* PipePressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GraphControlsXAxis"></a>

### *property* PipePressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Images"></a>

### *property* PipePressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.IndependentVariable"></a>

### *property* PipePressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.InternalObject"></a>

### *property* PipePressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Loading"></a>

### *property* PipePressure.Loading *: [Ansys.Mechanical.DataModel.Enums.PipeLoadingType](../../../../Mechanical/DataModel/Enums/PipeLoadingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PipeLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Loading.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Location"></a>

### *property* PipePressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Magnitude"></a>

### *property* PipePressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.NumberOfSegments"></a>

### *property* PipePressure.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PhaseAngle"></a>

### *property* PipePressure.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Properties"></a>

### *property* PipePressure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.RangeMaximum"></a>

### *property* PipePressure.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.RangeMinimum"></a>

### *property* PipePressure.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.ReadOnly"></a>

### *property* PipePressure.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.SharedRefBody"></a>

### *property* PipePressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Suppressed"></a>

### *property* PipePressure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.VisibleProperties"></a>

### *property* PipePressure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.XYZFunctionCoordinateSystem"></a>

### *property* PipePressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PipePressure.Activate"></a>

### PipePressure.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.AddComment"></a>

### PipePressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.AddFigure"></a>

### PipePressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.AddImage"></a>

### PipePressure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.CopyTo"></a>

### PipePressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.CreateParameter"></a>

### PipePressure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Delete"></a>

### PipePressure.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.Duplicate"></a>

### PipePressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetActivateAtLoadStep"></a>

### PipePressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the pipe pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetChildren"></a>

### PipePressure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetComponentActivateAtLoadStep"></a>

### PipePressure.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GetParameter"></a>

### PipePressure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GroupAllSimilarChildren"></a>

### PipePressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.GroupSimilarObjects"></a>

### PipePressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PromoteToNamedSelection"></a>

### PipePressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PropertyByAPIName"></a>

### PipePressure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.PropertyByName"></a>

### PipePressure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.RemoveParameter"></a>

### PipePressure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.SetActivateAtLoadStep"></a>

### PipePressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the pipe pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="PipePressure.SetComponentActivateAtLoadStep"></a>

### PipePressure.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

