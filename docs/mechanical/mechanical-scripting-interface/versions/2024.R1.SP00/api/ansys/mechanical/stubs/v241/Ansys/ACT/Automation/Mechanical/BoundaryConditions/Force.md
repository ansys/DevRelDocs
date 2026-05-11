# `Force`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Force"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Force

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Force.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#Force.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#Force.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#Force.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#Force.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#Force.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Force.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Force.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Force.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Force.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#Force.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#Force.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Force.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Force.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Force.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Force.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Force.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#Force.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Force.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Force.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`Direction`](#Force.Direction)                                 | Gets or sets the Direction.                                   |
| [`StepSelection`](#Force.StepSelection)                         | Gets or sets the StepSelection.                               |
| [`InternalObject`](#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#Force.NumberOfSegments)                   | Gets or sets the NumberOfSegments.                            |
| [`LoadVectorNumber`](#Force.LoadVectorNumber)                   | Gets or sets the LoadVectorNumber.                            |
| [`XComponent`](#Force.XComponent)                               | Gets the XComponent.                                          |
| [`XComponentImag`](#Force.XComponentImag)                       | Gets the XComponentImag.                                      |
| [`YComponent`](#Force.YComponent)                               | Gets the YComponent.                                          |
| [`YComponentImag`](#Force.YComponentImag)                       | Gets or sets the YComponentImag.                              |
| [`ZComponent`](#Force.ZComponent)                               | Gets the ZComponent.                                          |
| [`ZComponentImag`](#Force.ZComponentImag)                       | Gets or sets the ZComponentImag.                              |
| [`HarmonicIndex`](#Force.HarmonicIndex)                         | Gets or sets the HarmonicIndex.                               |
| [`SectorNumber`](#Force.SectorNumber)                           | Gets or sets the SectorNumber.                                |
| [`Magnitude`](#Force.Magnitude)                                 | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#Force.MagnitudeImag)                         | Gets the MagnitudeImag.                                       |
| [`PhaseAngle`](#Force.PhaseAngle)                               | Gets the PhaseAngle.                                          |
| [`XPhaseAngle`](#Force.XPhaseAngle)                             | Gets the XPhaseAngle.                                         |
| [`YPhaseAngle`](#Force.YPhaseAngle)                             | Gets the YPhaseAngle.                                         |
| [`ZPhaseAngle`](#Force.ZPhaseAngle)                             | Gets the ZPhaseAngle.                                         |
| [`RangeMaximum`](#Force.RangeMaximum)                           | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Force.RangeMinimum)                           | Gets or sets the RangeMinimum.                                |
| [`RpmSelection`](#Force.RpmSelection)                           | Gets or sets the RpmSelection.                                |
| [`AppliedBy`](#Force.AppliedBy)                                 | Gets or sets the AppliedBy.                                   |
| [`DefineBy`](#Force.DefineBy)                                   | Gets or sets the DefineBy.                                    |
| [`DynamicRelaxationBehavior`](#Force.DynamicRelaxationBehavior) | Gets or sets the DynamicRelaxationBehavior.                   |
| [`GraphControlsXAxis`](#Force.GraphControlsXAxis)               | Gets or sets the GraphControlsXAxis.                          |
| [`StepVarying`](#Force.StepVarying)                             | Gets or sets the StepVarying.                                 |
| [`LoadVectorAssignment`](#Force.LoadVectorAssignment)           | Gets or sets the LoadVectorAssignment.                        |
| [`NonCyclicLoadingType`](#Force.NonCyclicLoadingType)           | Gets or sets the NonCyclicLoadingType.                        |
| [`IndependentVariable`](#Force.IndependentVariable)             | Gets or sets the IndependentVariable.                         |
| [`DivideLoadByNodes`](#Force.DivideLoadByNodes)                 | Gets or sets the DivideLoadByNodes.                           |
| [`CoordinateSystem`](#Force.CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`Location`](#Force.Location)                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#Force.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#Force.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Force.SharedRefBody)                         | Gets or sets the SharedRefBody.                               |
| [`Children`](#Force.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#Force.Comments)                                   | Gets the list of associated comments.                         |
| [`Figures`](#Force.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](#Force.Images)                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#Force.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Force.Properties)                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Force.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Force.Direction"></a>

### *property* Force.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Force.StepSelection"></a>

### *property* Force.StepSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Force.InternalObject"></a>

### *property* Force.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Force.NumberOfSegments"></a>

### *property* Force.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorNumber"></a>

### *property* Force.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Force.XComponent"></a>

### *property* Force.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.XComponentImag"></a>

### *property* Force.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.YComponent"></a>

### *property* Force.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.YComponentImag"></a>

### *property* Force.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZComponent"></a>

### *property* Force.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZComponentImag"></a>

### *property* Force.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.HarmonicIndex"></a>

### *property* Force.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Force.SectorNumber"></a>

### *property* Force.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Force.Magnitude"></a>

### *property* Force.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Force.MagnitudeImag"></a>

### *property* Force.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Force.PhaseAngle"></a>

### *property* Force.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.XPhaseAngle"></a>

### *property* Force.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.YPhaseAngle"></a>

### *property* Force.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.ZPhaseAngle"></a>

### *property* Force.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Force.RangeMaximum"></a>

### *property* Force.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Force.RangeMinimum"></a>

### *property* Force.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Force.RpmSelection"></a>

### *property* Force.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

<a id="Force.AppliedBy"></a>

### *property* Force.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Force.DefineBy"></a>

### *property* Force.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Force.DynamicRelaxationBehavior"></a>

### *property* Force.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Force.GraphControlsXAxis"></a>

### *property* Force.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Force.StepVarying"></a>

### *property* Force.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Force.LoadVectorAssignment"></a>

### *property* Force.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Force.NonCyclicLoadingType"></a>

### *property* Force.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Force.IndependentVariable"></a>

### *property* Force.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Force.DivideLoadByNodes"></a>

### *property* Force.DivideLoadByNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DivideLoadByNodes.

<!-- !! processed by numpydoc !! -->

<a id="Force.CoordinateSystem"></a>

### *property* Force.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Force.Location"></a>

### *property* Force.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Force.DataModelObjectCategory"></a>

### *property* Force.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Force.Suppressed"></a>

### *property* Force.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Force.SharedRefBody"></a>

### *property* Force.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Force.Children"></a>

### *property* Force.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Force.Comments"></a>

### *property* Force.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Force.Figures"></a>

### *property* Force.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Force.Images"></a>

### *property* Force.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Force.ReadOnly"></a>

### *property* Force.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Force.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Force.Properties"></a>

### *property* Force.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Force.VisibleProperties"></a>

### *property* Force.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Force.GetActivateAtLoadStep"></a>

### Force.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Force.SetActivateAtLoadStep"></a>

### Force.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetComponentActivateAtLoadStep"></a>

### Force.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Force.SetComponentActivateAtLoadStep"></a>

### Force.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Force.PromoteToNamedSelection"></a>

### Force.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Force.Delete"></a>

### Force.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetChildren"></a>

### Force.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Force.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### Force.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Force.Activate"></a>

### Force.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Force.CopyTo"></a>

### Force.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Force.Duplicate"></a>

### Force.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Force.GroupAllSimilarChildren"></a>

### Force.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Force.GroupSimilarObjects"></a>

### Force.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Force.PropertyByName"></a>

### Force.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Force.PropertyByAPIName"></a>

### Force.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Force.CreateParameter"></a>

### Force.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Force.GetParameter"></a>

### Force.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Force.RemoveParameter"></a>

### Force.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

