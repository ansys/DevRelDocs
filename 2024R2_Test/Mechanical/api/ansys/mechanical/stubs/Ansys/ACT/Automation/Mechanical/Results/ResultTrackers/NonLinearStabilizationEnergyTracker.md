<a id="nonlinearstabilizationenergytracker"></a>

# NonLinearStabilizationEnergyTracker

<a id="NonLinearStabilizationEnergyTracker"></a>

### *class* NonLinearStabilizationEnergyTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NonLinearStabilizationEnergyTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportAnimation`](#NonLinearStabilizationEnergyTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#NonLinearStabilizationEnergyTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#NonLinearStabilizationEnergyTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#NonLinearStabilizationEnergyTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NonLinearStabilizationEnergyTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NonLinearStabilizationEnergyTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#NonLinearStabilizationEnergyTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NonLinearStabilizationEnergyTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NonLinearStabilizationEnergyTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NonLinearStabilizationEnergyTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NonLinearStabilizationEnergyTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NonLinearStabilizationEnergyTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NonLinearStabilizationEnergyTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NonLinearStabilizationEnergyTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#NonLinearStabilizationEnergyTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NonLinearStabilizationEnergyTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NonLinearStabilizationEnergyTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#NonLinearStabilizationEnergyTracker.IsSolved)                                                               | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#NonLinearStabilizationEnergyTracker.BoundaryCondition)                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#NonLinearStabilizationEnergyTracker.CutFrequency)                                                       | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#NonLinearStabilizationEnergyTracker.SectorNumber)                                                       | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#NonLinearStabilizationEnergyTracker.GeometrySelectionString)                                 | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#NonLinearStabilizationEnergyTracker.LoadStepNumber)                                                   | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#NonLinearStabilizationEnergyTracker.ReportedFrequency)                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#NonLinearStabilizationEnergyTracker.Duration)                                                               | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#NonLinearStabilizationEnergyTracker.FilterMaximum)                                                     | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#NonLinearStabilizationEnergyTracker.FilterMinimum)                                                     | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#NonLinearStabilizationEnergyTracker.FrequencyAtMaximumAmplitude)                         | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#NonLinearStabilizationEnergyTracker.ImaginaryAtMaximumAmplitude)                         | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#NonLinearStabilizationEnergyTracker.MaximumAmplitude)                                               | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#NonLinearStabilizationEnergyTracker.MaximumFrequency)                                               | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#NonLinearStabilizationEnergyTracker.Maximum)                                                                 | Gets the Maximum.                                             |
| [`MinimumFrequency`](#NonLinearStabilizationEnergyTracker.MinimumFrequency)                                               | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#NonLinearStabilizationEnergyTracker.Minimum)                                                                 | Gets the Minimum.                                             |
| [`PhaseAngle`](#NonLinearStabilizationEnergyTracker.PhaseAngle)                                                           | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#NonLinearStabilizationEnergyTracker.RealAtMaximumAmplitude)                                   | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#NonLinearStabilizationEnergyTracker.RequestedFrequency)                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#NonLinearStabilizationEnergyTracker.AccelerationType)                                               | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#NonLinearStabilizationEnergyTracker.ChartViewingStyle)                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#NonLinearStabilizationEnergyTracker.SpatialResolution)                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#NonLinearStabilizationEnergyTracker.NormalOrientation)                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#NonLinearStabilizationEnergyTracker.CurvesAppearanceDisplay)                                 | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#NonLinearStabilizationEnergyTracker.ResultChartType)                                                 | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#NonLinearStabilizationEnergyTracker.DpfEvaluation)                                                     | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#NonLinearStabilizationEnergyTracker.ShearOrientation)                                               | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#NonLinearStabilizationEnergyTracker.TimeHistoryDisplay)                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#NonLinearStabilizationEnergyTracker.VelocityType)                                                       | Gets or sets the VelocityType.                                |
| [`Suppressed`](#NonLinearStabilizationEnergyTracker.Suppressed)                                                           | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#NonLinearStabilizationEnergyTracker.EnhancedTracking)                                               | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#NonLinearStabilizationEnergyTracker.UseParentFrequencyRange)                                 | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#NonLinearStabilizationEnergyTracker.Location)                                                               | Gets or sets the Location.                                    |
| [`Children`](#NonLinearStabilizationEnergyTracker.Children)                                                               | Gets the list of children.                                    |
| [`Comments`](#NonLinearStabilizationEnergyTracker.Comments)                                                               | Gets the list of associated comments.                         |
| [`Images`](#NonLinearStabilizationEnergyTracker.Images)                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NonLinearStabilizationEnergyTracker.Properties)                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NonLinearStabilizationEnergyTracker.VisibleProperties)                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import NonLinearStabilizationEnergyTracker
```

<a id="property-detail"></a>

## Property detail

<a id="NonLinearStabilizationEnergyTracker.InternalObject"></a>

### *property* NonLinearStabilizationEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.DataModelObjectCategory"></a>

### *property* NonLinearStabilizationEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.IsSolved"></a>

### *property* NonLinearStabilizationEnergyTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ChartDimensions"></a>

### *property* NonLinearStabilizationEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.BoundaryCondition"></a>

### *property* NonLinearStabilizationEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CutFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.SectorNumber"></a>

### *property* NonLinearStabilizationEnergyTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GeometrySelectionString"></a>

### *property* NonLinearStabilizationEnergyTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.LoadStepNumber"></a>

### *property* NonLinearStabilizationEnergyTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ReportedFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Duration"></a>

### *property* NonLinearStabilizationEnergyTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.FilterMaximum"></a>

### *property* NonLinearStabilizationEnergyTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.FilterMinimum"></a>

### *property* NonLinearStabilizationEnergyTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* NonLinearStabilizationEnergyTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* NonLinearStabilizationEnergyTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.MaximumAmplitude"></a>

### *property* NonLinearStabilizationEnergyTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.MaximumFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Maximum"></a>

### *property* NonLinearStabilizationEnergyTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.MinimumFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Minimum"></a>

### *property* NonLinearStabilizationEnergyTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.PhaseAngle"></a>

### *property* NonLinearStabilizationEnergyTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* NonLinearStabilizationEnergyTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RequestedFrequency"></a>

### *property* NonLinearStabilizationEnergyTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.AccelerationType"></a>

### *property* NonLinearStabilizationEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ChartViewingStyle"></a>

### *property* NonLinearStabilizationEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.DeformationType"></a>

### *property* NonLinearStabilizationEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.FilterType"></a>

### *property* NonLinearStabilizationEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.SpatialResolution"></a>

### *property* NonLinearStabilizationEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.NormalOrientation"></a>

### *property* NonLinearStabilizationEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* NonLinearStabilizationEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ResultChartType"></a>

### *property* NonLinearStabilizationEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.DpfEvaluation"></a>

### *property* NonLinearStabilizationEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.XAxisValues"></a>

### *property* NonLinearStabilizationEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ShearOrientation"></a>

### *property* NonLinearStabilizationEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.StressStrainType"></a>

### *property* NonLinearStabilizationEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.TimeHistoryDisplay"></a>

### *property* NonLinearStabilizationEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.VelocityType"></a>

### *property* NonLinearStabilizationEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Suppressed"></a>

### *property* NonLinearStabilizationEnergyTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.EnhancedTracking"></a>

### *property* NonLinearStabilizationEnergyTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.UseParentFrequencyRange"></a>

### *property* NonLinearStabilizationEnergyTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CoordinateSystem"></a>

### *property* NonLinearStabilizationEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Spring"></a>

### *property* NonLinearStabilizationEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Location"></a>

### *property* NonLinearStabilizationEnergyTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Children"></a>

### *property* NonLinearStabilizationEnergyTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Comments"></a>

### *property* NonLinearStabilizationEnergyTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Images"></a>

### *property* NonLinearStabilizationEnergyTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NonLinearStabilizationEnergyTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Properties"></a>

### *property* NonLinearStabilizationEnergyTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.VisibleProperties"></a>

### *property* NonLinearStabilizationEnergyTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NonLinearStabilizationEnergyTracker.ExportAnimation"></a>

### NonLinearStabilizationEnergyTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.ClearGeneratedData"></a>

### NonLinearStabilizationEnergyTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.EvaluateAllResults"></a>

### NonLinearStabilizationEnergyTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RenameBasedOnDefinition"></a>

### NonLinearStabilizationEnergyTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Delete"></a>

### NonLinearStabilizationEnergyTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetChildren"></a>

### NonLinearStabilizationEnergyTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NonLinearStabilizationEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.AddComment"></a>

### NonLinearStabilizationEnergyTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.AddImage"></a>

### NonLinearStabilizationEnergyTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Activate"></a>

### NonLinearStabilizationEnergyTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CopyTo"></a>

### NonLinearStabilizationEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.Duplicate"></a>

### NonLinearStabilizationEnergyTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GroupAllSimilarChildren"></a>

### NonLinearStabilizationEnergyTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GroupSimilarObjects"></a>

### NonLinearStabilizationEnergyTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.PropertyByName"></a>

### NonLinearStabilizationEnergyTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.PropertyByAPIName"></a>

### NonLinearStabilizationEnergyTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.CreateParameter"></a>

### NonLinearStabilizationEnergyTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.GetParameter"></a>

### NonLinearStabilizationEnergyTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NonLinearStabilizationEnergyTracker.RemoveParameter"></a>

### NonLinearStabilizationEnergyTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
