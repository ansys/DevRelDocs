# ContactFrictionalDissipationEnergyTracker

<a id="ContactFrictionalDissipationEnergyTracker"></a>

### *class* ContactFrictionalDissipationEnergyTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactFrictionalDissipationEnergyTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactFrictionalDissipationEnergyTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactFrictionalDissipationEnergyTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactFrictionalDissipationEnergyTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactFrictionalDissipationEnergyTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactFrictionalDissipationEnergyTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactFrictionalDissipationEnergyTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactFrictionalDissipationEnergyTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactFrictionalDissipationEnergyTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactFrictionalDissipationEnergyTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactFrictionalDissipationEnergyTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactFrictionalDissipationEnergyTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactFrictionalDissipationEnergyTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactFrictionalDissipationEnergyTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactFrictionalDissipationEnergyTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactFrictionalDissipationEnergyTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactFrictionalDissipationEnergyTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactFrictionalDissipationEnergyTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactFrictionalDissipationEnergyTracker.IsSolved)                                                         | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactFrictionalDissipationEnergyTracker.BoundaryCondition)                                       | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactFrictionalDissipationEnergyTracker.CutFrequency)                                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactFrictionalDissipationEnergyTracker.SectorNumber)                                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactFrictionalDissipationEnergyTracker.GeometrySelectionString)                           | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactFrictionalDissipationEnergyTracker.LoadStepNumber)                                             | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactFrictionalDissipationEnergyTracker.ReportedFrequency)                                       | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactFrictionalDissipationEnergyTracker.Duration)                                                         | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactFrictionalDissipationEnergyTracker.FilterMaximum)                                               | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactFrictionalDissipationEnergyTracker.FilterMinimum)                                               | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactFrictionalDissipationEnergyTracker.FrequencyAtMaximumAmplitude)                   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactFrictionalDissipationEnergyTracker.ImaginaryAtMaximumAmplitude)                   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactFrictionalDissipationEnergyTracker.MaximumAmplitude)                                         | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactFrictionalDissipationEnergyTracker.MaximumFrequency)                                         | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactFrictionalDissipationEnergyTracker.Maximum)                                                           | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactFrictionalDissipationEnergyTracker.MinimumFrequency)                                         | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactFrictionalDissipationEnergyTracker.Minimum)                                                           | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactFrictionalDissipationEnergyTracker.PhaseAngle)                                                     | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactFrictionalDissipationEnergyTracker.RealAtMaximumAmplitude)                             | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactFrictionalDissipationEnergyTracker.RequestedFrequency)                                     | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactFrictionalDissipationEnergyTracker.AccelerationType)                                         | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactFrictionalDissipationEnergyTracker.ChartViewingStyle)                                       | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactFrictionalDissipationEnergyTracker.SpatialResolution)                                       | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactFrictionalDissipationEnergyTracker.NormalOrientation)                                       | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactFrictionalDissipationEnergyTracker.CurvesAppearanceDisplay)                           | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactFrictionalDissipationEnergyTracker.ResultChartType)                                           | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactFrictionalDissipationEnergyTracker.DpfEvaluation)                                               | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactFrictionalDissipationEnergyTracker.ShearOrientation)                                         | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactFrictionalDissipationEnergyTracker.TimeHistoryDisplay)                                     | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactFrictionalDissipationEnergyTracker.VelocityType)                                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactFrictionalDissipationEnergyTracker.Suppressed)                                                     | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactFrictionalDissipationEnergyTracker.EnhancedTracking)                                         | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactFrictionalDissipationEnergyTracker.UseParentFrequencyRange)                           | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactFrictionalDissipationEnergyTracker.Location)                                                         | Gets or sets the Location.                                    |
| [`Children`](#ContactFrictionalDissipationEnergyTracker.Children)                                                         | Gets the list of children.                                    |
| [`Comments`](#ContactFrictionalDissipationEnergyTracker.Comments)                                                         | Gets the list of associated comments.                         |
| [`Images`](#ContactFrictionalDissipationEnergyTracker.Images)                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactFrictionalDissipationEnergyTracker.Properties)                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactFrictionalDissipationEnergyTracker.VisibleProperties)                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactFrictionalDissipationEnergyTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactFrictionalDissipationEnergyTracker.InternalObject"></a>

### *property* ContactFrictionalDissipationEnergyTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ContactRegion"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.DataModelObjectCategory"></a>

### *property* ContactFrictionalDissipationEnergyTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.IsSolved"></a>

### *property* ContactFrictionalDissipationEnergyTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ChartDimensions"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.BoundaryCondition"></a>

### *property* ContactFrictionalDissipationEnergyTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CutFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.SectorNumber"></a>

### *property* ContactFrictionalDissipationEnergyTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GeometrySelectionString"></a>

### *property* ContactFrictionalDissipationEnergyTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.LoadStepNumber"></a>

### *property* ContactFrictionalDissipationEnergyTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ReportedFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Duration"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.FilterMaximum"></a>

### *property* ContactFrictionalDissipationEnergyTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.FilterMinimum"></a>

### *property* ContactFrictionalDissipationEnergyTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactFrictionalDissipationEnergyTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.MaximumAmplitude"></a>

### *property* ContactFrictionalDissipationEnergyTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.MaximumFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Maximum"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.MinimumFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Minimum"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.PhaseAngle"></a>

### *property* ContactFrictionalDissipationEnergyTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RealAtMaximumAmplitude"></a>

### *property* ContactFrictionalDissipationEnergyTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RequestedFrequency"></a>

### *property* ContactFrictionalDissipationEnergyTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.AccelerationType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ChartViewingStyle"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.DeformationType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.FilterType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.SpatialResolution"></a>

### *property* ContactFrictionalDissipationEnergyTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.NormalOrientation"></a>

### *property* ContactFrictionalDissipationEnergyTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CurvesAppearanceDisplay"></a>

### *property* ContactFrictionalDissipationEnergyTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ResultChartType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.DpfEvaluation"></a>

### *property* ContactFrictionalDissipationEnergyTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.XAxisValues"></a>

### *property* ContactFrictionalDissipationEnergyTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ShearOrientation"></a>

### *property* ContactFrictionalDissipationEnergyTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.StressStrainType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.TimeHistoryDisplay"></a>

### *property* ContactFrictionalDissipationEnergyTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.VelocityType"></a>

### *property* ContactFrictionalDissipationEnergyTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Suppressed"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.EnhancedTracking"></a>

### *property* ContactFrictionalDissipationEnergyTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.UseParentFrequencyRange"></a>

### *property* ContactFrictionalDissipationEnergyTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CoordinateSystem"></a>

### *property* ContactFrictionalDissipationEnergyTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Spring"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Location"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Children"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Comments"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Images"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactFrictionalDissipationEnergyTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Properties"></a>

### *property* ContactFrictionalDissipationEnergyTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.VisibleProperties"></a>

### *property* ContactFrictionalDissipationEnergyTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactFrictionalDissipationEnergyTracker.ExportAnimation"></a>

### ContactFrictionalDissipationEnergyTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.ClearGeneratedData"></a>

### ContactFrictionalDissipationEnergyTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.EvaluateAllResults"></a>

### ContactFrictionalDissipationEnergyTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RenameBasedOnDefinition"></a>

### ContactFrictionalDissipationEnergyTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Delete"></a>

### ContactFrictionalDissipationEnergyTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetChildren"></a>

### ContactFrictionalDissipationEnergyTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactFrictionalDissipationEnergyTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.AddComment"></a>

### ContactFrictionalDissipationEnergyTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.AddImage"></a>

### ContactFrictionalDissipationEnergyTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Activate"></a>

### ContactFrictionalDissipationEnergyTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CopyTo"></a>

### ContactFrictionalDissipationEnergyTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.Duplicate"></a>

### ContactFrictionalDissipationEnergyTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GroupAllSimilarChildren"></a>

### ContactFrictionalDissipationEnergyTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GroupSimilarObjects"></a>

### ContactFrictionalDissipationEnergyTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.PropertyByName"></a>

### ContactFrictionalDissipationEnergyTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.PropertyByAPIName"></a>

### ContactFrictionalDissipationEnergyTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.CreateParameter"></a>

### ContactFrictionalDissipationEnergyTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.GetParameter"></a>

### ContactFrictionalDissipationEnergyTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactFrictionalDissipationEnergyTracker.RemoveParameter"></a>

### ContactFrictionalDissipationEnergyTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
