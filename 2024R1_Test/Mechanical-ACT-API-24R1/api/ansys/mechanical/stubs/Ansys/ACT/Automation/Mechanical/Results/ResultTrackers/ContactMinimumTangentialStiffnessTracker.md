# ContactMinimumTangentialStiffnessTracker

<a id="ContactMinimumTangentialStiffnessTracker"></a>

### *class* ContactMinimumTangentialStiffnessTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactMinimumTangentialStiffnessTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactMinimumTangentialStiffnessTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactMinimumTangentialStiffnessTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactMinimumTangentialStiffnessTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactMinimumTangentialStiffnessTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactMinimumTangentialStiffnessTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactMinimumTangentialStiffnessTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactMinimumTangentialStiffnessTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactMinimumTangentialStiffnessTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactMinimumTangentialStiffnessTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactMinimumTangentialStiffnessTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactMinimumTangentialStiffnessTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMinimumTangentialStiffnessTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactMinimumTangentialStiffnessTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactMinimumTangentialStiffnessTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactMinimumTangentialStiffnessTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactMinimumTangentialStiffnessTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactMinimumTangentialStiffnessTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactMinimumTangentialStiffnessTracker.ContactSide)                                                    | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactMinimumTangentialStiffnessTracker.IsSolved)                                                          | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactMinimumTangentialStiffnessTracker.BoundaryCondition)                                        | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactMinimumTangentialStiffnessTracker.CutFrequency)                                                  | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactMinimumTangentialStiffnessTracker.SectorNumber)                                                  | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactMinimumTangentialStiffnessTracker.GeometrySelectionString)                            | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactMinimumTangentialStiffnessTracker.LoadStepNumber)                                              | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactMinimumTangentialStiffnessTracker.ReportedFrequency)                                        | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactMinimumTangentialStiffnessTracker.Duration)                                                          | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactMinimumTangentialStiffnessTracker.FilterMaximum)                                                | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactMinimumTangentialStiffnessTracker.FilterMinimum)                                                | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactMinimumTangentialStiffnessTracker.FrequencyAtMaximumAmplitude)                    | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactMinimumTangentialStiffnessTracker.ImaginaryAtMaximumAmplitude)                    | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactMinimumTangentialStiffnessTracker.MaximumAmplitude)                                          | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactMinimumTangentialStiffnessTracker.MaximumFrequency)                                          | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactMinimumTangentialStiffnessTracker.Maximum)                                                            | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactMinimumTangentialStiffnessTracker.MinimumFrequency)                                          | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactMinimumTangentialStiffnessTracker.Minimum)                                                            | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactMinimumTangentialStiffnessTracker.PhaseAngle)                                                      | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactMinimumTangentialStiffnessTracker.RealAtMaximumAmplitude)                              | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactMinimumTangentialStiffnessTracker.RequestedFrequency)                                      | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactMinimumTangentialStiffnessTracker.AccelerationType)                                          | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactMinimumTangentialStiffnessTracker.ChartViewingStyle)                                        | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactMinimumTangentialStiffnessTracker.SpatialResolution)                                        | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactMinimumTangentialStiffnessTracker.NormalOrientation)                                        | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactMinimumTangentialStiffnessTracker.CurvesAppearanceDisplay)                            | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactMinimumTangentialStiffnessTracker.ResultChartType)                                            | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactMinimumTangentialStiffnessTracker.DpfEvaluation)                                                | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactMinimumTangentialStiffnessTracker.ShearOrientation)                                          | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactMinimumTangentialStiffnessTracker.TimeHistoryDisplay)                                      | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactMinimumTangentialStiffnessTracker.VelocityType)                                                  | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactMinimumTangentialStiffnessTracker.Suppressed)                                                      | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactMinimumTangentialStiffnessTracker.EnhancedTracking)                                          | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactMinimumTangentialStiffnessTracker.UseParentFrequencyRange)                            | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactMinimumTangentialStiffnessTracker.Location)                                                          | Gets or sets the Location.                                    |
| [`Children`](#ContactMinimumTangentialStiffnessTracker.Children)                                                          | Gets the list of children.                                    |
| [`Comments`](#ContactMinimumTangentialStiffnessTracker.Comments)                                                          | Gets the list of associated comments.                         |
| [`Images`](#ContactMinimumTangentialStiffnessTracker.Images)                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactMinimumTangentialStiffnessTracker.Properties)                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactMinimumTangentialStiffnessTracker.VisibleProperties)                                        | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactMinimumTangentialStiffnessTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactMinimumTangentialStiffnessTracker.InternalObject"></a>

### *property* ContactMinimumTangentialStiffnessTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ContactSide"></a>

### *property* ContactMinimumTangentialStiffnessTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ContactRegion"></a>

### *property* ContactMinimumTangentialStiffnessTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.DataModelObjectCategory"></a>

### *property* ContactMinimumTangentialStiffnessTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.IsSolved"></a>

### *property* ContactMinimumTangentialStiffnessTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ChartDimensions"></a>

### *property* ContactMinimumTangentialStiffnessTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.BoundaryCondition"></a>

### *property* ContactMinimumTangentialStiffnessTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.CutFrequency"></a>

### *property* ContactMinimumTangentialStiffnessTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.SectorNumber"></a>

### *property* ContactMinimumTangentialStiffnessTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.GeometrySelectionString"></a>

### *property* ContactMinimumTangentialStiffnessTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.LoadStepNumber"></a>

### *property* ContactMinimumTangentialStiffnessTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ReportedFrequency"></a>

### *property* ContactMinimumTangentialStiffnessTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Duration"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.FilterMaximum"></a>

### *property* ContactMinimumTangentialStiffnessTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.FilterMinimum"></a>

### *property* ContactMinimumTangentialStiffnessTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactMinimumTangentialStiffnessTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactMinimumTangentialStiffnessTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.MaximumAmplitude"></a>

### *property* ContactMinimumTangentialStiffnessTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.MaximumFrequency"></a>

### *property* ContactMinimumTangentialStiffnessTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Maximum"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.MinimumFrequency"></a>

### *property* ContactMinimumTangentialStiffnessTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Minimum"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.PhaseAngle"></a>

### *property* ContactMinimumTangentialStiffnessTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.RealAtMaximumAmplitude"></a>

### *property* ContactMinimumTangentialStiffnessTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.RequestedFrequency"></a>

### *property* ContactMinimumTangentialStiffnessTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.AccelerationType"></a>

### *property* ContactMinimumTangentialStiffnessTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ChartViewingStyle"></a>

### *property* ContactMinimumTangentialStiffnessTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.DeformationType"></a>

### *property* ContactMinimumTangentialStiffnessTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.FilterType"></a>

### *property* ContactMinimumTangentialStiffnessTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.SpatialResolution"></a>

### *property* ContactMinimumTangentialStiffnessTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.NormalOrientation"></a>

### *property* ContactMinimumTangentialStiffnessTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.CurvesAppearanceDisplay"></a>

### *property* ContactMinimumTangentialStiffnessTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ResultChartType"></a>

### *property* ContactMinimumTangentialStiffnessTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.DpfEvaluation"></a>

### *property* ContactMinimumTangentialStiffnessTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.XAxisValues"></a>

### *property* ContactMinimumTangentialStiffnessTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ShearOrientation"></a>

### *property* ContactMinimumTangentialStiffnessTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.StressStrainType"></a>

### *property* ContactMinimumTangentialStiffnessTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.TimeHistoryDisplay"></a>

### *property* ContactMinimumTangentialStiffnessTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.VelocityType"></a>

### *property* ContactMinimumTangentialStiffnessTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Suppressed"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.EnhancedTracking"></a>

### *property* ContactMinimumTangentialStiffnessTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.UseParentFrequencyRange"></a>

### *property* ContactMinimumTangentialStiffnessTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.CoordinateSystem"></a>

### *property* ContactMinimumTangentialStiffnessTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Spring"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Location"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Children"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Comments"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Images"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactMinimumTangentialStiffnessTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Properties"></a>

### *property* ContactMinimumTangentialStiffnessTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.VisibleProperties"></a>

### *property* ContactMinimumTangentialStiffnessTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMinimumTangentialStiffnessTracker.ExportAnimation"></a>

### ContactMinimumTangentialStiffnessTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.ClearGeneratedData"></a>

### ContactMinimumTangentialStiffnessTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.EvaluateAllResults"></a>

### ContactMinimumTangentialStiffnessTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.RenameBasedOnDefinition"></a>

### ContactMinimumTangentialStiffnessTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Delete"></a>

### ContactMinimumTangentialStiffnessTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.GetChildren"></a>

### ContactMinimumTangentialStiffnessTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactMinimumTangentialStiffnessTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.AddComment"></a>

### ContactMinimumTangentialStiffnessTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.AddImage"></a>

### ContactMinimumTangentialStiffnessTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Activate"></a>

### ContactMinimumTangentialStiffnessTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.CopyTo"></a>

### ContactMinimumTangentialStiffnessTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.Duplicate"></a>

### ContactMinimumTangentialStiffnessTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.GroupAllSimilarChildren"></a>

### ContactMinimumTangentialStiffnessTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.GroupSimilarObjects"></a>

### ContactMinimumTangentialStiffnessTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.PropertyByName"></a>

### ContactMinimumTangentialStiffnessTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.PropertyByAPIName"></a>

### ContactMinimumTangentialStiffnessTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.CreateParameter"></a>

### ContactMinimumTangentialStiffnessTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.GetParameter"></a>

### ContactMinimumTangentialStiffnessTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMinimumTangentialStiffnessTracker.RemoveParameter"></a>

### ContactMinimumTangentialStiffnessTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
