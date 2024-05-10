<a id="temperaturetracker"></a>

# TemperatureTracker

<a id="TemperatureTracker"></a>

### *class* TemperatureTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TemperatureTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportAnimation`](#TemperatureTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#TemperatureTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#TemperatureTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#TemperatureTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TemperatureTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TemperatureTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#TemperatureTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TemperatureTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TemperatureTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TemperatureTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TemperatureTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TemperatureTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TemperatureTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TemperatureTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#TemperatureTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#TemperatureTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TemperatureTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LocationXCoordinate`](#TemperatureTracker.LocationXCoordinate)                                                          | Gets or sets the LocationXCoordinate.                         |
| [`LocationYCoordinate`](#TemperatureTracker.LocationYCoordinate)                                                          | Gets or sets the LocationYCoordinate.                         |
| [`LocationZCoordinate`](#TemperatureTracker.LocationZCoordinate)                                                          | Gets or sets the LocationZCoordinate.                         |
| [`ScopingMethod`](#TemperatureTracker.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                               |
| [`LocationMethod`](#TemperatureTracker.LocationMethod)                                                                    | Gets or sets the LocationMethod.                              |
| [`LocationCoordinateSystem`](#TemperatureTracker.LocationCoordinateSystem)                                                | Gets or sets the LocationCoordinateSystem.                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#TemperatureTracker.IsSolved)                                                                                | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#TemperatureTracker.BoundaryCondition)                                                              | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#TemperatureTracker.CutFrequency)                                                                        | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#TemperatureTracker.SectorNumber)                                                                        | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#TemperatureTracker.GeometrySelectionString)                                                  | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#TemperatureTracker.LoadStepNumber)                                                                    | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#TemperatureTracker.ReportedFrequency)                                                              | Gets the ReportedFrequency.                                   |
| [`Duration`](#TemperatureTracker.Duration)                                                                                | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#TemperatureTracker.FilterMaximum)                                                                      | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#TemperatureTracker.FilterMinimum)                                                                      | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#TemperatureTracker.FrequencyAtMaximumAmplitude)                                          | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#TemperatureTracker.ImaginaryAtMaximumAmplitude)                                          | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#TemperatureTracker.MaximumAmplitude)                                                                | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#TemperatureTracker.MaximumFrequency)                                                                | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#TemperatureTracker.Maximum)                                                                                  | Gets the Maximum.                                             |
| [`MinimumFrequency`](#TemperatureTracker.MinimumFrequency)                                                                | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#TemperatureTracker.Minimum)                                                                                  | Gets the Minimum.                                             |
| [`PhaseAngle`](#TemperatureTracker.PhaseAngle)                                                                            | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#TemperatureTracker.RealAtMaximumAmplitude)                                                    | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#TemperatureTracker.RequestedFrequency)                                                            | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#TemperatureTracker.AccelerationType)                                                                | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#TemperatureTracker.ChartViewingStyle)                                                              | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#TemperatureTracker.SpatialResolution)                                                              | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#TemperatureTracker.NormalOrientation)                                                              | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#TemperatureTracker.CurvesAppearanceDisplay)                                                  | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#TemperatureTracker.ResultChartType)                                                                  | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#TemperatureTracker.DpfEvaluation)                                                                      | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#TemperatureTracker.ShearOrientation)                                                                | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#TemperatureTracker.TimeHistoryDisplay)                                                            | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#TemperatureTracker.VelocityType)                                                                        | Gets or sets the VelocityType.                                |
| [`Suppressed`](#TemperatureTracker.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#TemperatureTracker.EnhancedTracking)                                                                | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#TemperatureTracker.UseParentFrequencyRange)                                                  | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#TemperatureTracker.Location)                                                                                | Gets or sets the Location.                                    |
| [`Children`](#TemperatureTracker.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#TemperatureTracker.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Images`](#TemperatureTracker.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TemperatureTracker.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#TemperatureTracker.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import TemperatureTracker
```

<a id="property-detail"></a>

## Property detail

<a id="TemperatureTracker.InternalObject"></a>

### *property* TemperatureTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationXCoordinate"></a>

### *property* TemperatureTracker.LocationXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationYCoordinate"></a>

### *property* TemperatureTracker.LocationYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationZCoordinate"></a>

### *property* TemperatureTracker.LocationZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ScopingMethod"></a>

### *property* TemperatureTracker.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationMethod"></a>

### *property* TemperatureTracker.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationCoordinateSystem"></a>

### *property* TemperatureTracker.LocationCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.DataModelObjectCategory"></a>

### *property* TemperatureTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.IsSolved"></a>

### *property* TemperatureTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ChartDimensions"></a>

### *property* TemperatureTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.BoundaryCondition"></a>

### *property* TemperatureTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CutFrequency"></a>

### *property* TemperatureTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.SectorNumber"></a>

### *property* TemperatureTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GeometrySelectionString"></a>

### *property* TemperatureTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LoadStepNumber"></a>

### *property* TemperatureTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ReportedFrequency"></a>

### *property* TemperatureTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Duration"></a>

### *property* TemperatureTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.FilterMaximum"></a>

### *property* TemperatureTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.FilterMinimum"></a>

### *property* TemperatureTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.FrequencyAtMaximumAmplitude"></a>

### *property* TemperatureTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* TemperatureTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.MaximumAmplitude"></a>

### *property* TemperatureTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.MaximumFrequency"></a>

### *property* TemperatureTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Maximum"></a>

### *property* TemperatureTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.MinimumFrequency"></a>

### *property* TemperatureTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Minimum"></a>

### *property* TemperatureTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.PhaseAngle"></a>

### *property* TemperatureTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.RealAtMaximumAmplitude"></a>

### *property* TemperatureTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.RequestedFrequency"></a>

### *property* TemperatureTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.AccelerationType"></a>

### *property* TemperatureTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ChartViewingStyle"></a>

### *property* TemperatureTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.DeformationType"></a>

### *property* TemperatureTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.FilterType"></a>

### *property* TemperatureTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.SpatialResolution"></a>

### *property* TemperatureTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.NormalOrientation"></a>

### *property* TemperatureTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CurvesAppearanceDisplay"></a>

### *property* TemperatureTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ResultChartType"></a>

### *property* TemperatureTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.DpfEvaluation"></a>

### *property* TemperatureTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.XAxisValues"></a>

### *property* TemperatureTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ShearOrientation"></a>

### *property* TemperatureTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.StressStrainType"></a>

### *property* TemperatureTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.TimeHistoryDisplay"></a>

### *property* TemperatureTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.VelocityType"></a>

### *property* TemperatureTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Suppressed"></a>

### *property* TemperatureTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.EnhancedTracking"></a>

### *property* TemperatureTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.UseParentFrequencyRange"></a>

### *property* TemperatureTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CoordinateSystem"></a>

### *property* TemperatureTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Spring"></a>

### *property* TemperatureTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Location"></a>

### *property* TemperatureTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Children"></a>

### *property* TemperatureTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Comments"></a>

### *property* TemperatureTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Images"></a>

### *property* TemperatureTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TemperatureTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Properties"></a>

### *property* TemperatureTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.VisibleProperties"></a>

### *property* TemperatureTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TemperatureTracker.ExportAnimation"></a>

### TemperatureTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ClearGeneratedData"></a>

### TemperatureTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.EvaluateAllResults"></a>

### TemperatureTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.RenameBasedOnDefinition"></a>

### TemperatureTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Delete"></a>

### TemperatureTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GetChildren"></a>

### TemperatureTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TemperatureTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.AddComment"></a>

### TemperatureTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.AddImage"></a>

### TemperatureTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Activate"></a>

### TemperatureTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CopyTo"></a>

### TemperatureTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Duplicate"></a>

### TemperatureTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GroupAllSimilarChildren"></a>

### TemperatureTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GroupSimilarObjects"></a>

### TemperatureTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.PropertyByName"></a>

### TemperatureTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.PropertyByAPIName"></a>

### TemperatureTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CreateParameter"></a>

### TemperatureTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GetParameter"></a>

### TemperatureTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.RemoveParameter"></a>

### TemperatureTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
