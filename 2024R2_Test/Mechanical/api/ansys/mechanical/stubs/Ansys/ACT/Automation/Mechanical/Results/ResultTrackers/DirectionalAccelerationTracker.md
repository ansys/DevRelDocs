<a id="directionalaccelerationtracker"></a>

# DirectionalAccelerationTracker

<a id="DirectionalAccelerationTracker"></a>

### *class* DirectionalAccelerationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalAccelerationTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#DirectionalAccelerationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#DirectionalAccelerationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalAccelerationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#DirectionalAccelerationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalAccelerationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalAccelerationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#DirectionalAccelerationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalAccelerationTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalAccelerationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalAccelerationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalAccelerationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalAccelerationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalAccelerationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalAccelerationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DirectionalAccelerationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DirectionalAccelerationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalAccelerationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`LocationXCoordinate`](#DirectionalAccelerationTracker.LocationXCoordinate)                                              | Gets or sets the LocationXCoordinate.                         |
| [`LocationYCoordinate`](#DirectionalAccelerationTracker.LocationYCoordinate)                                              | Gets or sets the LocationYCoordinate.                         |
| [`LocationZCoordinate`](#DirectionalAccelerationTracker.LocationZCoordinate)                                              | Gets or sets the LocationZCoordinate.                         |
| [`LocationMethod`](#DirectionalAccelerationTracker.LocationMethod)                                                        | Gets or sets the LocationMethod.                              |
| [`LocationCoordinateSystem`](#DirectionalAccelerationTracker.LocationCoordinateSystem)                                    | Gets or sets the LocationCoordinateSystem.                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#DirectionalAccelerationTracker.IsSolved)                                                                    | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#DirectionalAccelerationTracker.BoundaryCondition)                                                  | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#DirectionalAccelerationTracker.CutFrequency)                                                            | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#DirectionalAccelerationTracker.SectorNumber)                                                            | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#DirectionalAccelerationTracker.GeometrySelectionString)                                      | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#DirectionalAccelerationTracker.LoadStepNumber)                                                        | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#DirectionalAccelerationTracker.ReportedFrequency)                                                  | Gets the ReportedFrequency.                                   |
| [`Duration`](#DirectionalAccelerationTracker.Duration)                                                                    | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#DirectionalAccelerationTracker.FilterMaximum)                                                          | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#DirectionalAccelerationTracker.FilterMinimum)                                                          | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#DirectionalAccelerationTracker.FrequencyAtMaximumAmplitude)                              | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#DirectionalAccelerationTracker.ImaginaryAtMaximumAmplitude)                              | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#DirectionalAccelerationTracker.MaximumAmplitude)                                                    | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#DirectionalAccelerationTracker.MaximumFrequency)                                                    | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#DirectionalAccelerationTracker.Maximum)                                                                      | Gets the Maximum.                                             |
| [`MinimumFrequency`](#DirectionalAccelerationTracker.MinimumFrequency)                                                    | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#DirectionalAccelerationTracker.Minimum)                                                                      | Gets the Minimum.                                             |
| [`PhaseAngle`](#DirectionalAccelerationTracker.PhaseAngle)                                                                | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#DirectionalAccelerationTracker.RealAtMaximumAmplitude)                                        | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#DirectionalAccelerationTracker.RequestedFrequency)                                                | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#DirectionalAccelerationTracker.AccelerationType)                                                    | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#DirectionalAccelerationTracker.ChartViewingStyle)                                                  | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#DirectionalAccelerationTracker.SpatialResolution)                                                  | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#DirectionalAccelerationTracker.NormalOrientation)                                                  | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#DirectionalAccelerationTracker.CurvesAppearanceDisplay)                                      | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#DirectionalAccelerationTracker.ResultChartType)                                                      | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#DirectionalAccelerationTracker.DpfEvaluation)                                                          | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#DirectionalAccelerationTracker.ShearOrientation)                                                    | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#DirectionalAccelerationTracker.TimeHistoryDisplay)                                                | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#DirectionalAccelerationTracker.VelocityType)                                                            | Gets or sets the VelocityType.                                |
| [`Suppressed`](#DirectionalAccelerationTracker.Suppressed)                                                                | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#DirectionalAccelerationTracker.EnhancedTracking)                                                    | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#DirectionalAccelerationTracker.UseParentFrequencyRange)                                      | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#DirectionalAccelerationTracker.Location)                                                                    | Gets or sets the Location.                                    |
| [`Children`](#DirectionalAccelerationTracker.Children)                                                                    | Gets the list of children.                                    |
| [`Comments`](#DirectionalAccelerationTracker.Comments)                                                                    | Gets the list of associated comments.                         |
| [`Images`](#DirectionalAccelerationTracker.Images)                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#DirectionalAccelerationTracker.Properties)                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#DirectionalAccelerationTracker.VisibleProperties)                                                  | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import DirectionalAccelerationTracker
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalAccelerationTracker.InternalObject"></a>

### *property* DirectionalAccelerationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.LocationXCoordinate"></a>

### *property* DirectionalAccelerationTracker.LocationXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.LocationYCoordinate"></a>

### *property* DirectionalAccelerationTracker.LocationYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.LocationZCoordinate"></a>

### *property* DirectionalAccelerationTracker.LocationZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.LocationMethod"></a>

### *property* DirectionalAccelerationTracker.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.LocationCoordinateSystem"></a>

### *property* DirectionalAccelerationTracker.LocationCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.DataModelObjectCategory"></a>

### *property* DirectionalAccelerationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.IsSolved"></a>

### *property* DirectionalAccelerationTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.ChartDimensions"></a>

### *property* DirectionalAccelerationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.BoundaryCondition"></a>

### *property* DirectionalAccelerationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.CutFrequency"></a>

### *property* DirectionalAccelerationTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.SectorNumber"></a>

### *property* DirectionalAccelerationTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.GeometrySelectionString"></a>

### *property* DirectionalAccelerationTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.LoadStepNumber"></a>

### *property* DirectionalAccelerationTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.ReportedFrequency"></a>

### *property* DirectionalAccelerationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Duration"></a>

### *property* DirectionalAccelerationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.FilterMaximum"></a>

### *property* DirectionalAccelerationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.FilterMinimum"></a>

### *property* DirectionalAccelerationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* DirectionalAccelerationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* DirectionalAccelerationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.MaximumAmplitude"></a>

### *property* DirectionalAccelerationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.MaximumFrequency"></a>

### *property* DirectionalAccelerationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Maximum"></a>

### *property* DirectionalAccelerationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.MinimumFrequency"></a>

### *property* DirectionalAccelerationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Minimum"></a>

### *property* DirectionalAccelerationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.PhaseAngle"></a>

### *property* DirectionalAccelerationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.RealAtMaximumAmplitude"></a>

### *property* DirectionalAccelerationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.RequestedFrequency"></a>

### *property* DirectionalAccelerationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.AccelerationType"></a>

### *property* DirectionalAccelerationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.ChartViewingStyle"></a>

### *property* DirectionalAccelerationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.DeformationType"></a>

### *property* DirectionalAccelerationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.FilterType"></a>

### *property* DirectionalAccelerationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.SpatialResolution"></a>

### *property* DirectionalAccelerationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.NormalOrientation"></a>

### *property* DirectionalAccelerationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.CurvesAppearanceDisplay"></a>

### *property* DirectionalAccelerationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.ResultChartType"></a>

### *property* DirectionalAccelerationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.DpfEvaluation"></a>

### *property* DirectionalAccelerationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.XAxisValues"></a>

### *property* DirectionalAccelerationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.ShearOrientation"></a>

### *property* DirectionalAccelerationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.StressStrainType"></a>

### *property* DirectionalAccelerationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.TimeHistoryDisplay"></a>

### *property* DirectionalAccelerationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.VelocityType"></a>

### *property* DirectionalAccelerationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Suppressed"></a>

### *property* DirectionalAccelerationTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.EnhancedTracking"></a>

### *property* DirectionalAccelerationTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.UseParentFrequencyRange"></a>

### *property* DirectionalAccelerationTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.CoordinateSystem"></a>

### *property* DirectionalAccelerationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Spring"></a>

### *property* DirectionalAccelerationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Location"></a>

### *property* DirectionalAccelerationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Children"></a>

### *property* DirectionalAccelerationTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Comments"></a>

### *property* DirectionalAccelerationTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Images"></a>

### *property* DirectionalAccelerationTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalAccelerationTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Properties"></a>

### *property* DirectionalAccelerationTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.VisibleProperties"></a>

### *property* DirectionalAccelerationTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalAccelerationTracker.ExportAnimation"></a>

### DirectionalAccelerationTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.ClearGeneratedData"></a>

### DirectionalAccelerationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.EvaluateAllResults"></a>

### DirectionalAccelerationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.RenameBasedOnDefinition"></a>

### DirectionalAccelerationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Delete"></a>

### DirectionalAccelerationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.GetChildren"></a>

### DirectionalAccelerationTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalAccelerationTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.AddComment"></a>

### DirectionalAccelerationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.AddImage"></a>

### DirectionalAccelerationTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Activate"></a>

### DirectionalAccelerationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.CopyTo"></a>

### DirectionalAccelerationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.Duplicate"></a>

### DirectionalAccelerationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.GroupAllSimilarChildren"></a>

### DirectionalAccelerationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.GroupSimilarObjects"></a>

### DirectionalAccelerationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.PropertyByName"></a>

### DirectionalAccelerationTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.PropertyByAPIName"></a>

### DirectionalAccelerationTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.CreateParameter"></a>

### DirectionalAccelerationTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.GetParameter"></a>

### DirectionalAccelerationTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationTracker.RemoveParameter"></a>

### DirectionalAccelerationTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
