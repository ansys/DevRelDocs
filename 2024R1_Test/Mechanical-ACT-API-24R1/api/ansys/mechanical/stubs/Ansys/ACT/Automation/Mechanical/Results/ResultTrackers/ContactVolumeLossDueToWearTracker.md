# ContactVolumeLossDueToWearTracker

<a id="ContactVolumeLossDueToWearTracker"></a>

### *class* ContactVolumeLossDueToWearTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactVolumeLossDueToWearTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactVolumeLossDueToWearTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactVolumeLossDueToWearTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactVolumeLossDueToWearTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactVolumeLossDueToWearTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactVolumeLossDueToWearTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactVolumeLossDueToWearTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactVolumeLossDueToWearTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactVolumeLossDueToWearTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactVolumeLossDueToWearTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactVolumeLossDueToWearTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactVolumeLossDueToWearTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactVolumeLossDueToWearTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactVolumeLossDueToWearTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactVolumeLossDueToWearTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactVolumeLossDueToWearTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactVolumeLossDueToWearTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactVolumeLossDueToWearTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactVolumeLossDueToWearTracker.IsSolved)                                                                 | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactVolumeLossDueToWearTracker.BoundaryCondition)                                               | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactVolumeLossDueToWearTracker.CutFrequency)                                                         | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactVolumeLossDueToWearTracker.SectorNumber)                                                         | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactVolumeLossDueToWearTracker.GeometrySelectionString)                                   | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactVolumeLossDueToWearTracker.LoadStepNumber)                                                     | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactVolumeLossDueToWearTracker.ReportedFrequency)                                               | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactVolumeLossDueToWearTracker.Duration)                                                                 | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactVolumeLossDueToWearTracker.FilterMaximum)                                                       | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactVolumeLossDueToWearTracker.FilterMinimum)                                                       | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactVolumeLossDueToWearTracker.FrequencyAtMaximumAmplitude)                           | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactVolumeLossDueToWearTracker.ImaginaryAtMaximumAmplitude)                           | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactVolumeLossDueToWearTracker.MaximumAmplitude)                                                 | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactVolumeLossDueToWearTracker.MaximumFrequency)                                                 | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactVolumeLossDueToWearTracker.Maximum)                                                                   | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactVolumeLossDueToWearTracker.MinimumFrequency)                                                 | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactVolumeLossDueToWearTracker.Minimum)                                                                   | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactVolumeLossDueToWearTracker.PhaseAngle)                                                             | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactVolumeLossDueToWearTracker.RealAtMaximumAmplitude)                                     | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactVolumeLossDueToWearTracker.RequestedFrequency)                                             | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactVolumeLossDueToWearTracker.AccelerationType)                                                 | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactVolumeLossDueToWearTracker.ChartViewingStyle)                                               | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactVolumeLossDueToWearTracker.SpatialResolution)                                               | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactVolumeLossDueToWearTracker.NormalOrientation)                                               | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactVolumeLossDueToWearTracker.CurvesAppearanceDisplay)                                   | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactVolumeLossDueToWearTracker.ResultChartType)                                                   | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactVolumeLossDueToWearTracker.DpfEvaluation)                                                       | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactVolumeLossDueToWearTracker.ShearOrientation)                                                 | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactVolumeLossDueToWearTracker.TimeHistoryDisplay)                                             | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactVolumeLossDueToWearTracker.VelocityType)                                                         | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactVolumeLossDueToWearTracker.Suppressed)                                                             | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactVolumeLossDueToWearTracker.EnhancedTracking)                                                 | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactVolumeLossDueToWearTracker.UseParentFrequencyRange)                                   | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactVolumeLossDueToWearTracker.Location)                                                                 | Gets or sets the Location.                                    |
| [`Children`](#ContactVolumeLossDueToWearTracker.Children)                                                                 | Gets the list of children.                                    |
| [`Comments`](#ContactVolumeLossDueToWearTracker.Comments)                                                                 | Gets the list of associated comments.                         |
| [`Images`](#ContactVolumeLossDueToWearTracker.Images)                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactVolumeLossDueToWearTracker.Properties)                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactVolumeLossDueToWearTracker.VisibleProperties)                                               | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactVolumeLossDueToWearTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactVolumeLossDueToWearTracker.InternalObject"></a>

### *property* ContactVolumeLossDueToWearTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.ContactRegion"></a>

### *property* ContactVolumeLossDueToWearTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.DataModelObjectCategory"></a>

### *property* ContactVolumeLossDueToWearTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.IsSolved"></a>

### *property* ContactVolumeLossDueToWearTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.ChartDimensions"></a>

### *property* ContactVolumeLossDueToWearTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.BoundaryCondition"></a>

### *property* ContactVolumeLossDueToWearTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.CutFrequency"></a>

### *property* ContactVolumeLossDueToWearTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.SectorNumber"></a>

### *property* ContactVolumeLossDueToWearTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.GeometrySelectionString"></a>

### *property* ContactVolumeLossDueToWearTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.LoadStepNumber"></a>

### *property* ContactVolumeLossDueToWearTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.ReportedFrequency"></a>

### *property* ContactVolumeLossDueToWearTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Duration"></a>

### *property* ContactVolumeLossDueToWearTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.FilterMaximum"></a>

### *property* ContactVolumeLossDueToWearTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.FilterMinimum"></a>

### *property* ContactVolumeLossDueToWearTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactVolumeLossDueToWearTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactVolumeLossDueToWearTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.MaximumAmplitude"></a>

### *property* ContactVolumeLossDueToWearTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.MaximumFrequency"></a>

### *property* ContactVolumeLossDueToWearTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Maximum"></a>

### *property* ContactVolumeLossDueToWearTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.MinimumFrequency"></a>

### *property* ContactVolumeLossDueToWearTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Minimum"></a>

### *property* ContactVolumeLossDueToWearTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.PhaseAngle"></a>

### *property* ContactVolumeLossDueToWearTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.RealAtMaximumAmplitude"></a>

### *property* ContactVolumeLossDueToWearTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.RequestedFrequency"></a>

### *property* ContactVolumeLossDueToWearTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.AccelerationType"></a>

### *property* ContactVolumeLossDueToWearTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.ChartViewingStyle"></a>

### *property* ContactVolumeLossDueToWearTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.DeformationType"></a>

### *property* ContactVolumeLossDueToWearTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.FilterType"></a>

### *property* ContactVolumeLossDueToWearTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.SpatialResolution"></a>

### *property* ContactVolumeLossDueToWearTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.NormalOrientation"></a>

### *property* ContactVolumeLossDueToWearTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.CurvesAppearanceDisplay"></a>

### *property* ContactVolumeLossDueToWearTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.ResultChartType"></a>

### *property* ContactVolumeLossDueToWearTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.DpfEvaluation"></a>

### *property* ContactVolumeLossDueToWearTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.XAxisValues"></a>

### *property* ContactVolumeLossDueToWearTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.ShearOrientation"></a>

### *property* ContactVolumeLossDueToWearTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.StressStrainType"></a>

### *property* ContactVolumeLossDueToWearTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.TimeHistoryDisplay"></a>

### *property* ContactVolumeLossDueToWearTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.VelocityType"></a>

### *property* ContactVolumeLossDueToWearTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Suppressed"></a>

### *property* ContactVolumeLossDueToWearTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.EnhancedTracking"></a>

### *property* ContactVolumeLossDueToWearTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.UseParentFrequencyRange"></a>

### *property* ContactVolumeLossDueToWearTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.CoordinateSystem"></a>

### *property* ContactVolumeLossDueToWearTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Spring"></a>

### *property* ContactVolumeLossDueToWearTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Location"></a>

### *property* ContactVolumeLossDueToWearTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Children"></a>

### *property* ContactVolumeLossDueToWearTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Comments"></a>

### *property* ContactVolumeLossDueToWearTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Images"></a>

### *property* ContactVolumeLossDueToWearTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactVolumeLossDueToWearTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Properties"></a>

### *property* ContactVolumeLossDueToWearTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.VisibleProperties"></a>

### *property* ContactVolumeLossDueToWearTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactVolumeLossDueToWearTracker.ExportAnimation"></a>

### ContactVolumeLossDueToWearTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.ClearGeneratedData"></a>

### ContactVolumeLossDueToWearTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.EvaluateAllResults"></a>

### ContactVolumeLossDueToWearTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.RenameBasedOnDefinition"></a>

### ContactVolumeLossDueToWearTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Delete"></a>

### ContactVolumeLossDueToWearTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.GetChildren"></a>

### ContactVolumeLossDueToWearTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactVolumeLossDueToWearTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.AddComment"></a>

### ContactVolumeLossDueToWearTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.AddImage"></a>

### ContactVolumeLossDueToWearTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Activate"></a>

### ContactVolumeLossDueToWearTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.CopyTo"></a>

### ContactVolumeLossDueToWearTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.Duplicate"></a>

### ContactVolumeLossDueToWearTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.GroupAllSimilarChildren"></a>

### ContactVolumeLossDueToWearTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.GroupSimilarObjects"></a>

### ContactVolumeLossDueToWearTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.PropertyByName"></a>

### ContactVolumeLossDueToWearTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.PropertyByAPIName"></a>

### ContactVolumeLossDueToWearTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.CreateParameter"></a>

### ContactVolumeLossDueToWearTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.GetParameter"></a>

### ContactVolumeLossDueToWearTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactVolumeLossDueToWearTracker.RemoveParameter"></a>

### ContactVolumeLossDueToWearTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
