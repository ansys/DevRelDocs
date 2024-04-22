<a id="acoustickineticenergyfrequencyresponse"></a>

# AcousticKineticEnergyFrequencyResponse

<a id="AcousticKineticEnergyFrequencyResponse"></a>

### *class* AcousticKineticEnergyFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticKineticEnergyFrequencyResponse.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#AcousticKineticEnergyFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#AcousticKineticEnergyFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticKineticEnergyFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#AcousticKineticEnergyFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticKineticEnergyFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticKineticEnergyFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AcousticKineticEnergyFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticKineticEnergyFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticKineticEnergyFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticKineticEnergyFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticKineticEnergyFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticKineticEnergyFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticKineticEnergyFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticKineticEnergyFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticKineticEnergyFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticKineticEnergyFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticKineticEnergyFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#AcousticKineticEnergyFrequencyResponse.IsSolved)                                                            | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#AcousticKineticEnergyFrequencyResponse.BoundaryCondition)                                          | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#AcousticKineticEnergyFrequencyResponse.CutFrequency)                                                    | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#AcousticKineticEnergyFrequencyResponse.SectorNumber)                                                    | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#AcousticKineticEnergyFrequencyResponse.GeometrySelectionString)                              | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#AcousticKineticEnergyFrequencyResponse.LoadStepNumber)                                                | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#AcousticKineticEnergyFrequencyResponse.ReportedFrequency)                                          | Gets the ReportedFrequency.                                   |
| [`Duration`](#AcousticKineticEnergyFrequencyResponse.Duration)                                                            | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#AcousticKineticEnergyFrequencyResponse.FilterMaximum)                                                  | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#AcousticKineticEnergyFrequencyResponse.FilterMinimum)                                                  | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#AcousticKineticEnergyFrequencyResponse.FrequencyAtMaximumAmplitude)                      | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#AcousticKineticEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude)                      | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#AcousticKineticEnergyFrequencyResponse.MaximumAmplitude)                                            | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#AcousticKineticEnergyFrequencyResponse.MaximumFrequency)                                            | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#AcousticKineticEnergyFrequencyResponse.Maximum)                                                              | Gets the Maximum.                                             |
| [`MinimumFrequency`](#AcousticKineticEnergyFrequencyResponse.MinimumFrequency)                                            | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#AcousticKineticEnergyFrequencyResponse.Minimum)                                                              | Gets the Minimum.                                             |
| [`PhaseAngle`](#AcousticKineticEnergyFrequencyResponse.PhaseAngle)                                                        | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#AcousticKineticEnergyFrequencyResponse.RealAtMaximumAmplitude)                                | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#AcousticKineticEnergyFrequencyResponse.RequestedFrequency)                                        | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#AcousticKineticEnergyFrequencyResponse.AccelerationType)                                            | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#AcousticKineticEnergyFrequencyResponse.ChartViewingStyle)                                          | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#AcousticKineticEnergyFrequencyResponse.SpatialResolution)                                          | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#AcousticKineticEnergyFrequencyResponse.NormalOrientation)                                          | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#AcousticKineticEnergyFrequencyResponse.CurvesAppearanceDisplay)                              | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#AcousticKineticEnergyFrequencyResponse.ResultChartType)                                              | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#AcousticKineticEnergyFrequencyResponse.DpfEvaluation)                                                  | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#AcousticKineticEnergyFrequencyResponse.ShearOrientation)                                            | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#AcousticKineticEnergyFrequencyResponse.TimeHistoryDisplay)                                        | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#AcousticKineticEnergyFrequencyResponse.VelocityType)                                                    | Gets or sets the VelocityType.                                |
| [`Suppressed`](#AcousticKineticEnergyFrequencyResponse.Suppressed)                                                        | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#AcousticKineticEnergyFrequencyResponse.EnhancedTracking)                                            | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#AcousticKineticEnergyFrequencyResponse.UseParentFrequencyRange)                              | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#AcousticKineticEnergyFrequencyResponse.Location)                                                            | Gets or sets the Location.                                    |
| [`Children`](#AcousticKineticEnergyFrequencyResponse.Children)                                                            | Gets the list of children.                                    |
| [`Comments`](#AcousticKineticEnergyFrequencyResponse.Comments)                                                            | Gets the list of associated comments.                         |
| [`Images`](#AcousticKineticEnergyFrequencyResponse.Images)                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticKineticEnergyFrequencyResponse.Properties)                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticKineticEnergyFrequencyResponse.VisibleProperties)                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import AcousticKineticEnergyFrequencyResponse
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticKineticEnergyFrequencyResponse.InternalObject"></a>

### *property* AcousticKineticEnergyFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.DataModelObjectCategory"></a>

### *property* AcousticKineticEnergyFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.IsSolved"></a>

### *property* AcousticKineticEnergyFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.ChartDimensions"></a>

### *property* AcousticKineticEnergyFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.BoundaryCondition"></a>

### *property* AcousticKineticEnergyFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.CutFrequency"></a>

### *property* AcousticKineticEnergyFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.SectorNumber"></a>

### *property* AcousticKineticEnergyFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.GeometrySelectionString"></a>

### *property* AcousticKineticEnergyFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.LoadStepNumber"></a>

### *property* AcousticKineticEnergyFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.ReportedFrequency"></a>

### *property* AcousticKineticEnergyFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Duration"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.FilterMaximum"></a>

### *property* AcousticKineticEnergyFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.FilterMinimum"></a>

### *property* AcousticKineticEnergyFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AcousticKineticEnergyFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AcousticKineticEnergyFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.MaximumAmplitude"></a>

### *property* AcousticKineticEnergyFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.MaximumFrequency"></a>

### *property* AcousticKineticEnergyFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Maximum"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.MinimumFrequency"></a>

### *property* AcousticKineticEnergyFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Minimum"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.PhaseAngle"></a>

### *property* AcousticKineticEnergyFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AcousticKineticEnergyFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.RequestedFrequency"></a>

### *property* AcousticKineticEnergyFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.AccelerationType"></a>

### *property* AcousticKineticEnergyFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.ChartViewingStyle"></a>

### *property* AcousticKineticEnergyFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.DeformationType"></a>

### *property* AcousticKineticEnergyFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.FilterType"></a>

### *property* AcousticKineticEnergyFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.SpatialResolution"></a>

### *property* AcousticKineticEnergyFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.NormalOrientation"></a>

### *property* AcousticKineticEnergyFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AcousticKineticEnergyFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.ResultChartType"></a>

### *property* AcousticKineticEnergyFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.DpfEvaluation"></a>

### *property* AcousticKineticEnergyFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.XAxisValues"></a>

### *property* AcousticKineticEnergyFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.ShearOrientation"></a>

### *property* AcousticKineticEnergyFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.StressStrainType"></a>

### *property* AcousticKineticEnergyFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AcousticKineticEnergyFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.VelocityType"></a>

### *property* AcousticKineticEnergyFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Suppressed"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.EnhancedTracking"></a>

### *property* AcousticKineticEnergyFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AcousticKineticEnergyFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.CoordinateSystem"></a>

### *property* AcousticKineticEnergyFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Spring"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Location"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Children"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Comments"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Images"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticKineticEnergyFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Properties"></a>

### *property* AcousticKineticEnergyFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.VisibleProperties"></a>

### *property* AcousticKineticEnergyFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticKineticEnergyFrequencyResponse.ExportAnimation"></a>

### AcousticKineticEnergyFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.ClearGeneratedData"></a>

### AcousticKineticEnergyFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.EvaluateAllResults"></a>

### AcousticKineticEnergyFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.RenameBasedOnDefinition"></a>

### AcousticKineticEnergyFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Delete"></a>

### AcousticKineticEnergyFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.GetChildren"></a>

### AcousticKineticEnergyFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticKineticEnergyFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.AddComment"></a>

### AcousticKineticEnergyFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.AddImage"></a>

### AcousticKineticEnergyFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Activate"></a>

### AcousticKineticEnergyFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.CopyTo"></a>

### AcousticKineticEnergyFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.Duplicate"></a>

### AcousticKineticEnergyFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.GroupAllSimilarChildren"></a>

### AcousticKineticEnergyFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.GroupSimilarObjects"></a>

### AcousticKineticEnergyFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.PropertyByName"></a>

### AcousticKineticEnergyFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.PropertyByAPIName"></a>

### AcousticKineticEnergyFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.CreateParameter"></a>

### AcousticKineticEnergyFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.GetParameter"></a>

### AcousticKineticEnergyFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticKineticEnergyFrequencyResponse.RemoveParameter"></a>

### AcousticKineticEnergyFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
