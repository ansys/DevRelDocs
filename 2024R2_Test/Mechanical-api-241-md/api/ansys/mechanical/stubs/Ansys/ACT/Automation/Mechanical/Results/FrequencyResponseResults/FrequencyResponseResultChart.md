<a id="frequencyresponseresultchart"></a>

# FrequencyResponseResultChart

<a id="FrequencyResponseResultChart"></a>

### *class* FrequencyResponseResultChart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FrequencyResponseResultChart.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportAnimation`](#FrequencyResponseResultChart.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FrequencyResponseResultChart.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FrequencyResponseResultChart.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#FrequencyResponseResultChart.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FrequencyResponseResultChart.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FrequencyResponseResultChart.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FrequencyResponseResultChart.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FrequencyResponseResultChart.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FrequencyResponseResultChart.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FrequencyResponseResultChart.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FrequencyResponseResultChart.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FrequencyResponseResultChart.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FrequencyResponseResultChart.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FrequencyResponseResultChart.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FrequencyResponseResultChart.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FrequencyResponseResultChart.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FrequencyResponseResultChart.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.   |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                 |
| [`RemotePointSelection`](#FrequencyResponseResultChart.RemotePointSelection)                                              | Gets or sets the RemotePointSelection.                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                       |
| [`IsSolved`](#FrequencyResponseResultChart.IsSolved)                                                                      | Gets the IsSolved.                                                                                 |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                  |
| [`BoundaryCondition`](#FrequencyResponseResultChart.BoundaryCondition)                                                    | Gets or sets the BoundaryCondition.                                                                |
| [`CutFrequency`](#FrequencyResponseResultChart.CutFrequency)                                                              | Gets or sets the CutFrequency.                                                                     |
| [`SectorNumber`](#FrequencyResponseResultChart.SectorNumber)                                                              | Gets or sets the SectorNumber.                                                                     |
| [`GeometrySelectionString`](#FrequencyResponseResultChart.GeometrySelectionString)                                        | Gets or sets the GeometrySelectionString.                                                          |
| [`LoadStepNumber`](#FrequencyResponseResultChart.LoadStepNumber)                                                          | Gets or sets the LoadStepNumber.                                                                   |
| [`ReportedFrequency`](#FrequencyResponseResultChart.ReportedFrequency)                                                    | Gets the ReportedFrequency.                                                                        |
| [`Duration`](#FrequencyResponseResultChart.Duration)                                                                      | Gets or sets the Duration.                                                                         |
| [`FilterMaximum`](#FrequencyResponseResultChart.FilterMaximum)                                                            | Gets the FilterMaximum.                                                                            |
| [`FilterMinimum`](#FrequencyResponseResultChart.FilterMinimum)                                                            | Gets the FilterMinimum.                                                                            |
| [`FrequencyAtMaximumAmplitude`](#FrequencyResponseResultChart.FrequencyAtMaximumAmplitude)                                | Gets the FrequencyAtMaximumAmplitude.                                                              |
| [`ImaginaryAtMaximumAmplitude`](#FrequencyResponseResultChart.ImaginaryAtMaximumAmplitude)                                | Gets the ImaginaryAtMaximumAmplitude.                                                              |
| [`MaximumAmplitude`](#FrequencyResponseResultChart.MaximumAmplitude)                                                      | Gets the MaximumAmplitude.                                                                         |
| [`MaximumFrequency`](#FrequencyResponseResultChart.MaximumFrequency)                                                      | Gets or sets the MaximumFrequency.                                                                 |
| [`Maximum`](#FrequencyResponseResultChart.Maximum)                                                                        | Gets the Maximum.                                                                                  |
| [`MinimumFrequency`](#FrequencyResponseResultChart.MinimumFrequency)                                                      | Gets or sets the MinimumFrequency.                                                                 |
| [`Minimum`](#FrequencyResponseResultChart.Minimum)                                                                        | Gets the Minimum.                                                                                  |
| [`PhaseAngle`](#FrequencyResponseResultChart.PhaseAngle)                                                                  | Gets the PhaseAngle.                                                                               |
| [`RealAtMaximumAmplitude`](#FrequencyResponseResultChart.RealAtMaximumAmplitude)                                          | Gets the RealAtMaximumAmplitude.                                                                   |
| [`RequestedFrequency`](#FrequencyResponseResultChart.RequestedFrequency)                                                  | Gets or sets the RequestedFrequency.                                                               |
| [`AccelerationType`](#FrequencyResponseResultChart.AccelerationType)                                                      | Gets or sets the AccelerationType.                                                                 |
| [`ChartViewingStyle`](#FrequencyResponseResultChart.ChartViewingStyle)                                                    | Gets or sets the ChartViewingStyle.                                                                |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                                                  |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                                                       |
| [`SpatialResolution`](#FrequencyResponseResultChart.SpatialResolution)                                                    | Gets or sets the SpatialResolution.                                                                |
| [`NormalOrientation`](#FrequencyResponseResultChart.NormalOrientation)                                                    | Gets or sets the NormalOrientation.                                                                |
| [`CurvesAppearanceDisplay`](#FrequencyResponseResultChart.CurvesAppearanceDisplay)                                        | Gets or sets the CurvesAppearanceDisplay.                                                          |
| [`ResultChartType`](#FrequencyResponseResultChart.ResultChartType)                                                        | Gets the ResultChartType.                                                                          |
| [`DpfEvaluation`](#FrequencyResponseResultChart.DpfEvaluation)                                                            | Gets or sets the DpfEvaluation.                                                                    |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                                                      |
| [`ShearOrientation`](#FrequencyResponseResultChart.ShearOrientation)                                                      | Gets or sets the ShearOrientation.                                                                 |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                                                 |
| [`TimeHistoryDisplay`](#FrequencyResponseResultChart.TimeHistoryDisplay)                                                  | Gets or sets the TimeHistoryDisplay.                                                               |
| [`VelocityType`](#FrequencyResponseResultChart.VelocityType)                                                              | Gets or sets the VelocityType.                                                                     |
| [`Suppressed`](#FrequencyResponseResultChart.Suppressed)                                                                  | Gets or sets the Suppressed.                                                                       |
| [`EnhancedTracking`](#FrequencyResponseResultChart.EnhancedTracking)                                                      | Gets the EnhancedTracking.                                                                         |
| [`UseParentFrequencyRange`](#FrequencyResponseResultChart.UseParentFrequencyRange)                                        | Gets or sets the UseParentFrequencyRange.                                                          |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                           |
| [`Location`](#FrequencyResponseResultChart.Location)                                                                      | Gets or sets the Location.                                                                         |
| [`Children`](#FrequencyResponseResultChart.Children)                                                                      | Gets the list of children.                                                                         |
| [`Comments`](#FrequencyResponseResultChart.Comments)                                                                      | Gets the list of associated comments.                                                              |
| [`Images`](#FrequencyResponseResultChart.Images)                                                                          | Gets the list of associated images.                                                                |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                 |
| [`Properties`](#FrequencyResponseResultChart.Properties)                                                                  | Gets the list of properties for this object.                                                       |
| [`VisibleProperties`](#FrequencyResponseResultChart.VisibleProperties)                                                    | Gets the list of properties that are visible for this object.                                      |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import FrequencyResponseResultChart
```

<a id="property-detail"></a>

## Property detail

<a id="FrequencyResponseResultChart.CoordinateSystem"></a>

### *property* FrequencyResponseResultChart.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.InternalObject"></a>

### *property* FrequencyResponseResultChart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RemotePointSelection"></a>

### *property* FrequencyResponseResultChart.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.DataModelObjectCategory"></a>

### *property* FrequencyResponseResultChart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.IsSolved"></a>

### *property* FrequencyResponseResultChart.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ChartDimensions"></a>

### *property* FrequencyResponseResultChart.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.BoundaryCondition"></a>

### *property* FrequencyResponseResultChart.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CutFrequency"></a>

### *property* FrequencyResponseResultChart.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.SectorNumber"></a>

### *property* FrequencyResponseResultChart.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GeometrySelectionString"></a>

### *property* FrequencyResponseResultChart.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.LoadStepNumber"></a>

### *property* FrequencyResponseResultChart.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ReportedFrequency"></a>

### *property* FrequencyResponseResultChart.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Duration"></a>

### *property* FrequencyResponseResultChart.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.FilterMaximum"></a>

### *property* FrequencyResponseResultChart.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.FilterMinimum"></a>

### *property* FrequencyResponseResultChart.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.FrequencyAtMaximumAmplitude"></a>

### *property* FrequencyResponseResultChart.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ImaginaryAtMaximumAmplitude"></a>

### *property* FrequencyResponseResultChart.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.MaximumAmplitude"></a>

### *property* FrequencyResponseResultChart.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.MaximumFrequency"></a>

### *property* FrequencyResponseResultChart.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Maximum"></a>

### *property* FrequencyResponseResultChart.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.MinimumFrequency"></a>

### *property* FrequencyResponseResultChart.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Minimum"></a>

### *property* FrequencyResponseResultChart.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.PhaseAngle"></a>

### *property* FrequencyResponseResultChart.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RealAtMaximumAmplitude"></a>

### *property* FrequencyResponseResultChart.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RequestedFrequency"></a>

### *property* FrequencyResponseResultChart.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.AccelerationType"></a>

### *property* FrequencyResponseResultChart.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ChartViewingStyle"></a>

### *property* FrequencyResponseResultChart.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.DeformationType"></a>

### *property* FrequencyResponseResultChart.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.FilterType"></a>

### *property* FrequencyResponseResultChart.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.SpatialResolution"></a>

### *property* FrequencyResponseResultChart.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.NormalOrientation"></a>

### *property* FrequencyResponseResultChart.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CurvesAppearanceDisplay"></a>

### *property* FrequencyResponseResultChart.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ResultChartType"></a>

### *property* FrequencyResponseResultChart.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.DpfEvaluation"></a>

### *property* FrequencyResponseResultChart.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.XAxisValues"></a>

### *property* FrequencyResponseResultChart.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ShearOrientation"></a>

### *property* FrequencyResponseResultChart.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.StressStrainType"></a>

### *property* FrequencyResponseResultChart.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.TimeHistoryDisplay"></a>

### *property* FrequencyResponseResultChart.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.VelocityType"></a>

### *property* FrequencyResponseResultChart.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Suppressed"></a>

### *property* FrequencyResponseResultChart.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.EnhancedTracking"></a>

### *property* FrequencyResponseResultChart.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.UseParentFrequencyRange"></a>

### *property* FrequencyResponseResultChart.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Spring"></a>

### *property* FrequencyResponseResultChart.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Location"></a>

### *property* FrequencyResponseResultChart.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Children"></a>

### *property* FrequencyResponseResultChart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Comments"></a>

### *property* FrequencyResponseResultChart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Images"></a>

### *property* FrequencyResponseResultChart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FrequencyResponseResultChart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Properties"></a>

### *property* FrequencyResponseResultChart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.VisibleProperties"></a>

### *property* FrequencyResponseResultChart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FrequencyResponseResultChart.ExportAnimation"></a>

### FrequencyResponseResultChart.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.ClearGeneratedData"></a>

### FrequencyResponseResultChart.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.EvaluateAllResults"></a>

### FrequencyResponseResultChart.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RenameBasedOnDefinition"></a>

### FrequencyResponseResultChart.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Delete"></a>

### FrequencyResponseResultChart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetChildren"></a>

### FrequencyResponseResultChart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FrequencyResponseResultChart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.AddComment"></a>

### FrequencyResponseResultChart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.AddImage"></a>

### FrequencyResponseResultChart.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Activate"></a>

### FrequencyResponseResultChart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CopyTo"></a>

### FrequencyResponseResultChart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.Duplicate"></a>

### FrequencyResponseResultChart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GroupAllSimilarChildren"></a>

### FrequencyResponseResultChart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GroupSimilarObjects"></a>

### FrequencyResponseResultChart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.PropertyByName"></a>

### FrequencyResponseResultChart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.PropertyByAPIName"></a>

### FrequencyResponseResultChart.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.CreateParameter"></a>

### FrequencyResponseResultChart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.GetParameter"></a>

### FrequencyResponseResultChart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrequencyResponseResultChart.RemoveParameter"></a>

### FrequencyResponseResultChart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
