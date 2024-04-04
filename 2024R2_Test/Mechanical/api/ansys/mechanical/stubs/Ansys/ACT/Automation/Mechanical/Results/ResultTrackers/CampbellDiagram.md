# CampbellDiagram

### *class* CampbellDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CampbellDiagram.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#CampbellDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#CampbellDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#CampbellDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#CampbellDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#CampbellDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CampbellDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#CampbellDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CampbellDiagram.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CampbellDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CampbellDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CampbellDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CampbellDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CampbellDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CampbellDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CampbellDiagram.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CampbellDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CampbellDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`RotationalVelocitySelection`](#CampbellDiagram.RotationalVelocitySelection)                                             | Gets or sets the Rotational Velocity Selection Type.          |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Ratio`](#CampbellDiagram.Ratio)                                                                                         | Gets or sets the Ratio.                                       |
| [`XAxisLabel`](#CampbellDiagram.XAxisLabel)                                                                               | Gets or sets the XAxisLabel.                                  |
| [`YAxisLabel`](#CampbellDiagram.YAxisLabel)                                                                               | Gets or sets the YAxisLabel.                                  |
| [`XAxisMaximum`](#CampbellDiagram.XAxisMaximum)                                                                           | Gets or sets the XAxisMaximum.                                |
| [`XAxisMinimum`](#CampbellDiagram.XAxisMinimum)                                                                           | Gets or sets the XAxisMinimum.                                |
| [`YAxisMaximum`](#CampbellDiagram.YAxisMaximum)                                                                           | Gets or sets the YAxisMaximum.                                |
| [`YAxisMinimum`](#CampbellDiagram.YAxisMinimum)                                                                           | Gets or sets the YAxisMinimum.                                |
| [`XAxisRange`](#CampbellDiagram.XAxisRange)                                                                               | Gets or sets the XAxisRange.                                  |
| [`YAxisData`](#CampbellDiagram.YAxisData)                                                                                 | Gets or sets the YAxisData.                                   |
| [`YAxisRange`](#CampbellDiagram.YAxisRange)                                                                               | Gets or sets the YAxisRange.                                  |
| [`CriticalSpeed`](#CampbellDiagram.CriticalSpeed)                                                                         | Gets or sets the CriticalSpeed.                               |
| [`Sorting`](#CampbellDiagram.Sorting)                                                                                     | Gets or sets the Sorting.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#CampbellDiagram.IsSolved)                                                                                   | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#CampbellDiagram.BoundaryCondition)                                                                 | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#CampbellDiagram.CutFrequency)                                                                           | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#CampbellDiagram.SectorNumber)                                                                           | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#CampbellDiagram.GeometrySelectionString)                                                     | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#CampbellDiagram.LoadStepNumber)                                                                       | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#CampbellDiagram.ReportedFrequency)                                                                 | Gets the ReportedFrequency.                                   |
| [`Duration`](#CampbellDiagram.Duration)                                                                                   | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#CampbellDiagram.FilterMaximum)                                                                         | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#CampbellDiagram.FilterMinimum)                                                                         | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#CampbellDiagram.FrequencyAtMaximumAmplitude)                                             | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#CampbellDiagram.ImaginaryAtMaximumAmplitude)                                             | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#CampbellDiagram.MaximumAmplitude)                                                                   | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#CampbellDiagram.MaximumFrequency)                                                                   | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#CampbellDiagram.Maximum)                                                                                     | Gets the Maximum.                                             |
| [`MinimumFrequency`](#CampbellDiagram.MinimumFrequency)                                                                   | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#CampbellDiagram.Minimum)                                                                                     | Gets the Minimum.                                             |
| [`PhaseAngle`](#CampbellDiagram.PhaseAngle)                                                                               | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#CampbellDiagram.RealAtMaximumAmplitude)                                                       | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#CampbellDiagram.RequestedFrequency)                                                               | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#CampbellDiagram.AccelerationType)                                                                   | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#CampbellDiagram.ChartViewingStyle)                                                                 | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#CampbellDiagram.SpatialResolution)                                                                 | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#CampbellDiagram.NormalOrientation)                                                                 | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#CampbellDiagram.CurvesAppearanceDisplay)                                                     | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#CampbellDiagram.ResultChartType)                                                                     | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#CampbellDiagram.DpfEvaluation)                                                                         | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#CampbellDiagram.ShearOrientation)                                                                   | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#CampbellDiagram.TimeHistoryDisplay)                                                               | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#CampbellDiagram.VelocityType)                                                                           | Gets or sets the VelocityType.                                |
| [`Suppressed`](#CampbellDiagram.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#CampbellDiagram.EnhancedTracking)                                                                   | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#CampbellDiagram.UseParentFrequencyRange)                                                     | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#CampbellDiagram.Location)                                                                                   | Gets or sets the Location.                                    |
| [`Children`](#CampbellDiagram.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#CampbellDiagram.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Images`](#CampbellDiagram.Images)                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CampbellDiagram.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CampbellDiagram.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import CampbellDiagram
```

## Property detail

### *property* CampbellDiagram.RotationalVelocitySelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotational Velocity Selection Type.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Ratio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ratio.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.XAxisLabel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisLabel.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.YAxisLabel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisLabel.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.XAxisMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisMaximum.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.XAxisMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisMinimum.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.YAxisMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisMaximum.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.YAxisMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisMinimum.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.XAxisRange *: [Ansys.Mechanical.DataModel.Enums.DSCampbellAxisRange](../../../../../Mechanical/DataModel/Enums/DSCampbellAxisRange.md#DSCampbellAxisRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisRange.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.YAxisData *: [Ansys.Mechanical.DataModel.Enums.DSCampbellYAxisDataType](../../../../../Mechanical/DataModel/Enums/DSCampbellYAxisDataType.md#DSCampbellYAxisDataType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisData.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.YAxisRange *: [Ansys.Mechanical.DataModel.Enums.DSCampbellAxisRange](../../../../../Mechanical/DataModel/Enums/DSCampbellAxisRange.md#DSCampbellAxisRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisRange.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.CriticalSpeed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalSpeed.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Sorting *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Sorting.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CampbellDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CampbellDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CampbellDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
