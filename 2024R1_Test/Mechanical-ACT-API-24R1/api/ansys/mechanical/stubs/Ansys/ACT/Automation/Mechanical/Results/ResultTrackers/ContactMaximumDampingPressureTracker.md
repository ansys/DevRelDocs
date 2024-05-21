# ContactMaximumDampingPressureTracker

<a id="ContactMaximumDampingPressureTracker"></a>

### *class* ContactMaximumDampingPressureTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactMaximumDampingPressureTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactMaximumDampingPressureTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactMaximumDampingPressureTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactMaximumDampingPressureTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactMaximumDampingPressureTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactMaximumDampingPressureTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactMaximumDampingPressureTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactMaximumDampingPressureTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactMaximumDampingPressureTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactMaximumDampingPressureTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactMaximumDampingPressureTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactMaximumDampingPressureTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMaximumDampingPressureTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactMaximumDampingPressureTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactMaximumDampingPressureTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactMaximumDampingPressureTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactMaximumDampingPressureTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactMaximumDampingPressureTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactMaximumDampingPressureTracker.ContactSide)                                                        | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactMaximumDampingPressureTracker.IsSolved)                                                              | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactMaximumDampingPressureTracker.BoundaryCondition)                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactMaximumDampingPressureTracker.CutFrequency)                                                      | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactMaximumDampingPressureTracker.SectorNumber)                                                      | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactMaximumDampingPressureTracker.GeometrySelectionString)                                | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactMaximumDampingPressureTracker.LoadStepNumber)                                                  | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactMaximumDampingPressureTracker.ReportedFrequency)                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactMaximumDampingPressureTracker.Duration)                                                              | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactMaximumDampingPressureTracker.FilterMaximum)                                                    | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactMaximumDampingPressureTracker.FilterMinimum)                                                    | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactMaximumDampingPressureTracker.FrequencyAtMaximumAmplitude)                        | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactMaximumDampingPressureTracker.ImaginaryAtMaximumAmplitude)                        | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactMaximumDampingPressureTracker.MaximumAmplitude)                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactMaximumDampingPressureTracker.MaximumFrequency)                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactMaximumDampingPressureTracker.Maximum)                                                                | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactMaximumDampingPressureTracker.MinimumFrequency)                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactMaximumDampingPressureTracker.Minimum)                                                                | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactMaximumDampingPressureTracker.PhaseAngle)                                                          | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactMaximumDampingPressureTracker.RealAtMaximumAmplitude)                                  | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactMaximumDampingPressureTracker.RequestedFrequency)                                          | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactMaximumDampingPressureTracker.AccelerationType)                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactMaximumDampingPressureTracker.ChartViewingStyle)                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactMaximumDampingPressureTracker.SpatialResolution)                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactMaximumDampingPressureTracker.NormalOrientation)                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactMaximumDampingPressureTracker.CurvesAppearanceDisplay)                                | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactMaximumDampingPressureTracker.ResultChartType)                                                | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactMaximumDampingPressureTracker.DpfEvaluation)                                                    | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactMaximumDampingPressureTracker.ShearOrientation)                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactMaximumDampingPressureTracker.TimeHistoryDisplay)                                          | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactMaximumDampingPressureTracker.VelocityType)                                                      | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactMaximumDampingPressureTracker.Suppressed)                                                          | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactMaximumDampingPressureTracker.EnhancedTracking)                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactMaximumDampingPressureTracker.UseParentFrequencyRange)                                | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactMaximumDampingPressureTracker.Location)                                                              | Gets or sets the Location.                                    |
| [`Children`](#ContactMaximumDampingPressureTracker.Children)                                                              | Gets the list of children.                                    |
| [`Comments`](#ContactMaximumDampingPressureTracker.Comments)                                                              | Gets the list of associated comments.                         |
| [`Images`](#ContactMaximumDampingPressureTracker.Images)                                                                  | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactMaximumDampingPressureTracker.Properties)                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactMaximumDampingPressureTracker.VisibleProperties)                                            | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactMaximumDampingPressureTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactMaximumDampingPressureTracker.InternalObject"></a>

### *property* ContactMaximumDampingPressureTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ContactSide"></a>

### *property* ContactMaximumDampingPressureTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ContactRegion"></a>

### *property* ContactMaximumDampingPressureTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.DataModelObjectCategory"></a>

### *property* ContactMaximumDampingPressureTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.IsSolved"></a>

### *property* ContactMaximumDampingPressureTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ChartDimensions"></a>

### *property* ContactMaximumDampingPressureTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.BoundaryCondition"></a>

### *property* ContactMaximumDampingPressureTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.CutFrequency"></a>

### *property* ContactMaximumDampingPressureTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.SectorNumber"></a>

### *property* ContactMaximumDampingPressureTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.GeometrySelectionString"></a>

### *property* ContactMaximumDampingPressureTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.LoadStepNumber"></a>

### *property* ContactMaximumDampingPressureTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ReportedFrequency"></a>

### *property* ContactMaximumDampingPressureTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Duration"></a>

### *property* ContactMaximumDampingPressureTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.FilterMaximum"></a>

### *property* ContactMaximumDampingPressureTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.FilterMinimum"></a>

### *property* ContactMaximumDampingPressureTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactMaximumDampingPressureTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactMaximumDampingPressureTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.MaximumAmplitude"></a>

### *property* ContactMaximumDampingPressureTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.MaximumFrequency"></a>

### *property* ContactMaximumDampingPressureTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Maximum"></a>

### *property* ContactMaximumDampingPressureTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.MinimumFrequency"></a>

### *property* ContactMaximumDampingPressureTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Minimum"></a>

### *property* ContactMaximumDampingPressureTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.PhaseAngle"></a>

### *property* ContactMaximumDampingPressureTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.RealAtMaximumAmplitude"></a>

### *property* ContactMaximumDampingPressureTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.RequestedFrequency"></a>

### *property* ContactMaximumDampingPressureTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.AccelerationType"></a>

### *property* ContactMaximumDampingPressureTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ChartViewingStyle"></a>

### *property* ContactMaximumDampingPressureTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.DeformationType"></a>

### *property* ContactMaximumDampingPressureTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.FilterType"></a>

### *property* ContactMaximumDampingPressureTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.SpatialResolution"></a>

### *property* ContactMaximumDampingPressureTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.NormalOrientation"></a>

### *property* ContactMaximumDampingPressureTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.CurvesAppearanceDisplay"></a>

### *property* ContactMaximumDampingPressureTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ResultChartType"></a>

### *property* ContactMaximumDampingPressureTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.DpfEvaluation"></a>

### *property* ContactMaximumDampingPressureTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.XAxisValues"></a>

### *property* ContactMaximumDampingPressureTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ShearOrientation"></a>

### *property* ContactMaximumDampingPressureTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.StressStrainType"></a>

### *property* ContactMaximumDampingPressureTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.TimeHistoryDisplay"></a>

### *property* ContactMaximumDampingPressureTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.VelocityType"></a>

### *property* ContactMaximumDampingPressureTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Suppressed"></a>

### *property* ContactMaximumDampingPressureTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.EnhancedTracking"></a>

### *property* ContactMaximumDampingPressureTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.UseParentFrequencyRange"></a>

### *property* ContactMaximumDampingPressureTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.CoordinateSystem"></a>

### *property* ContactMaximumDampingPressureTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Spring"></a>

### *property* ContactMaximumDampingPressureTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Location"></a>

### *property* ContactMaximumDampingPressureTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Children"></a>

### *property* ContactMaximumDampingPressureTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Comments"></a>

### *property* ContactMaximumDampingPressureTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Images"></a>

### *property* ContactMaximumDampingPressureTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactMaximumDampingPressureTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Properties"></a>

### *property* ContactMaximumDampingPressureTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.VisibleProperties"></a>

### *property* ContactMaximumDampingPressureTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMaximumDampingPressureTracker.ExportAnimation"></a>

### ContactMaximumDampingPressureTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.ClearGeneratedData"></a>

### ContactMaximumDampingPressureTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.EvaluateAllResults"></a>

### ContactMaximumDampingPressureTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.RenameBasedOnDefinition"></a>

### ContactMaximumDampingPressureTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Delete"></a>

### ContactMaximumDampingPressureTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.GetChildren"></a>

### ContactMaximumDampingPressureTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactMaximumDampingPressureTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.AddComment"></a>

### ContactMaximumDampingPressureTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.AddImage"></a>

### ContactMaximumDampingPressureTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Activate"></a>

### ContactMaximumDampingPressureTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.CopyTo"></a>

### ContactMaximumDampingPressureTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.Duplicate"></a>

### ContactMaximumDampingPressureTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.GroupAllSimilarChildren"></a>

### ContactMaximumDampingPressureTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.GroupSimilarObjects"></a>

### ContactMaximumDampingPressureTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.PropertyByName"></a>

### ContactMaximumDampingPressureTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.PropertyByAPIName"></a>

### ContactMaximumDampingPressureTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.CreateParameter"></a>

### ContactMaximumDampingPressureTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.GetParameter"></a>

### ContactMaximumDampingPressureTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumDampingPressureTracker.RemoveParameter"></a>

### ContactMaximumDampingPressureTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
