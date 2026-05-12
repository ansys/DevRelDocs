# `NodalDisplacement`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalDisplacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NodalDisplacement.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#NodalDisplacement.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalDisplacement.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalDisplacement.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#NodalDisplacement.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NodalDisplacement.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#NodalDisplacement.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#NodalDisplacement.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#NodalDisplacement.GetActivateAtLoadStep)                   | Gets whether the nodal displacement is active at the specified load step.         |
| [`GetChildren`](#NodalDisplacement.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#NodalDisplacement.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#NodalDisplacement.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NodalDisplacement.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalDisplacement.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#NodalDisplacement.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#NodalDisplacement.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#NodalDisplacement.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NodalDisplacement.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#NodalDisplacement.SetActivateAtLoadStep)                   | Sets whether the nodal displacement is active at the specified load step.         |
| [`SetComponentActivateAtLoadStep`](#NodalDisplacement.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#NodalDisplacement.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#NodalDisplacement.Comments)                                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#NodalDisplacement.CoordinateSystem)                               | Gets the CoordinateSystem.                                    |
| [`DataModelObjectCategory`](#NodalDisplacement.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`DynamicRelaxationBehavior`](#NodalDisplacement.DynamicRelaxationBehavior)             | Gets or sets the DynamicRelaxationBehavior.                   |
| [`Figures`](#NodalDisplacement.Figures)                                                 | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#NodalDisplacement.GraphControlsXAxis)                           | Gets or sets the GraphControlsXAxis.                          |
| [`Images`](#NodalDisplacement.Images)                                                   | Gets the list of associated images.                           |
| [`IndependentVariable`](#NodalDisplacement.IndependentVariable)                         | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#NodalDisplacement.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#NodalDisplacement.Location)                                               | Gets or sets the Location.                                    |
| [`NumberOfSegments`](#NodalDisplacement.NumberOfSegments)                               | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#NodalDisplacement.PhaseAngle)                                           | Gets or sets the PhaseAngle.                                  |
| [`Properties`](#NodalDisplacement.Properties)                                           | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#NodalDisplacement.RangeMaximum)                                       | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#NodalDisplacement.RangeMinimum)                                       | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#NodalDisplacement.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`ReverseDirectionForInverseSteps`](#NodalDisplacement.ReverseDirectionForInverseSteps) | Gets or sets the ReverseDirectionForInverseSteps.             |
| [`SharedRefBody`](#NodalDisplacement.SharedRefBody)                                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#NodalDisplacement.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#NodalDisplacement.VisibleProperties)                             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#NodalDisplacement.XComponent)                                           | Gets the XComponent.                                          |
| [`XYZFunctionCoordinateSystem`](#NodalDisplacement.XYZFunctionCoordinateSystem)         | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`YComponent`](#NodalDisplacement.YComponent)                                           | Gets the YComponent.                                          |
| [`ZComponent`](#NodalDisplacement.ZComponent)                                           | Gets the ZComponent.                                          |

<a id="property-detail"></a>

## Property detail

<a id="NodalDisplacement.Children"></a>

### *property* NodalDisplacement.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Comments"></a>

### *property* NodalDisplacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.CoordinateSystem"></a>

### *property* NodalDisplacement.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.DataModelObjectCategory"></a>

### *property* NodalDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.DynamicRelaxationBehavior"></a>

### *property* NodalDisplacement.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Figures"></a>

### *property* NodalDisplacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GraphControlsXAxis"></a>

### *property* NodalDisplacement.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Images"></a>

### *property* NodalDisplacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.IndependentVariable"></a>

### *property* NodalDisplacement.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.InternalObject"></a>

### *property* NodalDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Location"></a>

### *property* NodalDisplacement.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.NumberOfSegments"></a>

### *property* NodalDisplacement.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.PhaseAngle"></a>

### *property* NodalDisplacement.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Properties"></a>

### *property* NodalDisplacement.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.RangeMaximum"></a>

### *property* NodalDisplacement.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.RangeMinimum"></a>

### *property* NodalDisplacement.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.ReadOnly"></a>

### *property* NodalDisplacement.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.ReverseDirectionForInverseSteps"></a>

### *property* NodalDisplacement.ReverseDirectionForInverseSteps *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReverseDirectionForInverseSteps.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.SharedRefBody"></a>

### *property* NodalDisplacement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Suppressed"></a>

### *property* NodalDisplacement.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.VisibleProperties"></a>

### *property* NodalDisplacement.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.XComponent"></a>

### *property* NodalDisplacement.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.XYZFunctionCoordinateSystem"></a>

### *property* NodalDisplacement.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.YComponent"></a>

### *property* NodalDisplacement.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.ZComponent"></a>

### *property* NodalDisplacement.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalDisplacement.Activate"></a>

### NodalDisplacement.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.AddComment"></a>

### NodalDisplacement.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.AddFigure"></a>

### NodalDisplacement.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.AddImage"></a>

### NodalDisplacement.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.CopyTo"></a>

### NodalDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.CreateParameter"></a>

### NodalDisplacement.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Delete"></a>

### NodalDisplacement.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.Duplicate"></a>

### NodalDisplacement.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GetActivateAtLoadStep"></a>

### NodalDisplacement.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the nodal displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GetChildren"></a>

### NodalDisplacement.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GetComponentActivateAtLoadStep"></a>

### NodalDisplacement.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GetParameter"></a>

### NodalDisplacement.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GroupAllSimilarChildren"></a>

### NodalDisplacement.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.GroupSimilarObjects"></a>

### NodalDisplacement.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.PromoteToNamedSelection"></a>

### NodalDisplacement.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.PropertyByAPIName"></a>

### NodalDisplacement.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.PropertyByName"></a>

### NodalDisplacement.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.RemoveParameter"></a>

### NodalDisplacement.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.SetActivateAtLoadStep"></a>

### NodalDisplacement.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the nodal displacement is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="NodalDisplacement.SetComponentActivateAtLoadStep"></a>

### NodalDisplacement.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

