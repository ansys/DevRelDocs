# `Force`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Force"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Force

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Force.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Force.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#Force.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Force.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Force.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#Force.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Force.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#Force.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#Force.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Force.GetActivateAtLoadStep)                   | Gets whether the force is active at the specified load step.                      |
| [`GetChildren`](#Force.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#Force.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#Force.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Force.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Force.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Force.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#Force.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#Force.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Force.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Force.SetActivateAtLoadStep)                   | Sets whether the force is active at the specified load step.                      |
| [`SetComponentActivateAtLoadStep`](#Force.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AppliedBy`](#Force.AppliedBy)                                 | Gets or sets the AppliedBy.                                   |
| [`Children`](#Force.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#Force.Comments)                                   | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#Force.CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Force.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#Force.DefineBy)                                   | Gets or sets the DefineBy.                                    |
| [`Direction`](#Force.Direction)                                 | Gets or sets the Direction.                                   |
| [`DivideLoadByNodes`](#Force.DivideLoadByNodes)                 | Gets or sets the DivideLoadByNodes.                           |
| [`DynamicRelaxationBehavior`](#Force.DynamicRelaxationBehavior) | Gets or sets the DynamicRelaxationBehavior.                   |
| [`Figures`](#Force.Figures)                                     | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#Force.GraphControlsXAxis)               | Gets or sets the GraphControlsXAxis.                          |
| [`HarmonicIndex`](#Force.HarmonicIndex)                         | Gets or sets the HarmonicIndex.                               |
| [`Images`](#Force.Images)                                       | Gets the list of associated images.                           |
| [`IndependentVariable`](#Force.IndependentVariable)             | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Force.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`LoadVectorAssignment`](#Force.LoadVectorAssignment)           | Gets or sets the LoadVectorAssignment.                        |
| [`LoadVectorNumber`](#Force.LoadVectorNumber)                   | Gets or sets the LoadVectorNumber.                            |
| [`Location`](#Force.Location)                                   | Gets or sets the Location.                                    |
| [`Magnitude`](#Force.Magnitude)                                 | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#Force.MagnitudeImag)                         | Gets the MagnitudeImag.                                       |
| [`NonCyclicLoadingType`](#Force.NonCyclicLoadingType)           | Gets or sets the NonCyclicLoadingType.                        |
| [`NumberOfSegments`](#Force.NumberOfSegments)                   | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#Force.PhaseAngle)                               | Gets the PhaseAngle.                                          |
| [`Properties`](#Force.Properties)                               | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#Force.RangeMaximum)                           | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Force.RangeMinimum)                           | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#Force.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`RpmSelection`](#Force.RpmSelection)                           | Gets or sets the RPMSelection.                                |
| [`SectorNumber`](#Force.SectorNumber)                           | Gets or sets the SectorNumber.                                |
| [`SharedRefBody`](#Force.SharedRefBody)                         | Gets or sets the SharedRefBody.                               |
| [`StepSelection`](#Force.StepSelection)                         | Gets or sets the StepSelection.                               |
| [`StepVarying`](#Force.StepVarying)                             | Gets or sets the StepVarying.                                 |
| [`Suppressed`](#Force.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Force.VisibleProperties)                 | Gets the list of properties that are visible for this object. |
| [`XComponent`](#Force.XComponent)                               | Gets the XComponent.                                          |
| [`XComponentImag`](#Force.XComponentImag)                       | Gets the XComponentImag.                                      |
| [`XPhaseAngle`](#Force.XPhaseAngle)                             | Gets the XPhaseAngle.                                         |
| [`YComponent`](#Force.YComponent)                               | Gets the YComponent.                                          |
| [`YComponentImag`](#Force.YComponentImag)                       | Gets or sets the YComponentImag.                              |
| [`YPhaseAngle`](#Force.YPhaseAngle)                             | Gets the YPhaseAngle.                                         |
| [`ZComponent`](#Force.ZComponent)                               | Gets the ZComponent.                                          |
| [`ZComponentImag`](#Force.ZComponentImag)                       | Gets or sets the ZComponentImag.                              |
| [`ZPhaseAngle`](#Force.ZPhaseAngle)                             | Gets the ZPhaseAngle.                                         |

<a id="property-detail"></a>

## Property detail

<a id="Force.AppliedBy"></a>

### *property* Force.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Force.Children"></a>

### *property* Force.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Force.Comments"></a>

### *property* Force.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Force.CoordinateSystem"></a>

### *property* Force.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Force.DataModelObjectCategory"></a>

### *property* Force.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Force.DefineBy"></a>

### *property* Force.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Force.Direction"></a>

### *property* Force.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Force.DivideLoadByNodes"></a>

### *property* Force.DivideLoadByNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DivideLoadByNodes.

<!-- !! processed by numpydoc !! -->

<a id="Force.DynamicRelaxationBehavior"></a>

### *property* Force.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Force.Figures"></a>

### *property* Force.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Force.GraphControlsXAxis"></a>

### *property* Force.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Force.HarmonicIndex"></a>

### *property* Force.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Force.Images"></a>

### *property* Force.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Force.IndependentVariable"></a>

### *property* Force.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Force.InternalObject"></a>

### *property* Force.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorAssignment"></a>

### *property* Force.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumber"></a>

### *property* Force.LoadVectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Force.Location"></a>

### *property* Force.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Force.Magnitude"></a>

### *property* Force.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Force.MagnitudeImag"></a>

### *property* Force.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.NonCyclicLoadingType"></a>

### *property* Force.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Force.NumberOfSegments"></a>

### *property* Force.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Force.PhaseAngle"></a>

### *property* Force.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.Properties"></a>

### *property* Force.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Force.RangeMaximum"></a>

### *property* Force.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Force.RangeMinimum"></a>

### *property* Force.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Force.ReadOnly"></a>

### *property* Force.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Force.RpmSelection"></a>

### *property* Force.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPMSelection.

<!-- !! processed by numpydoc !! -->

<a id="Force.SectorNumber"></a>

### *property* Force.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Force.SharedRefBody"></a>

### *property* Force.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Force.StepSelection"></a>

### *property* Force.StepSelection *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Force.StepVarying"></a>

### *property* Force.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Force.Suppressed"></a>

### *property* Force.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Force.VisibleProperties"></a>

### *property* Force.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Force.XComponent"></a>

### *property* Force.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.XComponentImag"></a>

### *property* Force.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.XPhaseAngle"></a>

### *property* Force.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.YComponent"></a>

### *property* Force.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.YComponentImag"></a>

### *property* Force.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.YPhaseAngle"></a>

### *property* Force.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZComponent"></a>

### *property* Force.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZComponentImag"></a>

### *property* Force.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZPhaseAngle"></a>

### *property* Force.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Force.Activate"></a>

### Force.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Force.AddComment"></a>

### Force.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Force.AddFigure"></a>

### Force.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Force.AddImage"></a>

### Force.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Force.CopyTo"></a>

### Force.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Force.CreateParameter"></a>

### Force.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Force.Delete"></a>

### Force.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Force.Duplicate"></a>

### Force.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetActivateAtLoadStep"></a>

### Force.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetChildren"></a>

### Force.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetComponentActivateAtLoadStep"></a>

### Force.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetParameter"></a>

### Force.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Force.GroupAllSimilarChildren"></a>

### Force.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Force.GroupSimilarObjects"></a>

### Force.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Force.PromoteToNamedSelection"></a>

### Force.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Force.PropertyByAPIName"></a>

### Force.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Force.PropertyByName"></a>

### Force.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Force.RemoveParameter"></a>

### Force.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Force.SetActivateAtLoadStep"></a>

### Force.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the force is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Force.SetComponentActivateAtLoadStep"></a>

### Force.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

