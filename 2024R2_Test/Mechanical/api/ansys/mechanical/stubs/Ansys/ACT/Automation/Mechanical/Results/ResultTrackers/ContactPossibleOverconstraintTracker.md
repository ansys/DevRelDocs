<a id="contactpossibleoverconstrainttracker"></a>

# ContactPossibleOverconstraintTracker

<a id="ContactPossibleOverconstraintTracker"></a>

### *class* ContactPossibleOverconstraintTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactPossibleOverconstraintTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactPossibleOverconstraintTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactPossibleOverconstraintTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactPossibleOverconstraintTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactPossibleOverconstraintTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactPossibleOverconstraintTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactPossibleOverconstraintTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactPossibleOverconstraintTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactPossibleOverconstraintTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactPossibleOverconstraintTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactPossibleOverconstraintTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactPossibleOverconstraintTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactPossibleOverconstraintTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactPossibleOverconstraintTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactPossibleOverconstraintTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactPossibleOverconstraintTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactPossibleOverconstraintTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactPossibleOverconstraintTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactPossibleOverconstraintTracker.ContactSide)                                                        | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactPossibleOverconstraintTracker.IsSolved)                                                              | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactPossibleOverconstraintTracker.BoundaryCondition)                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactPossibleOverconstraintTracker.CutFrequency)                                                      | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactPossibleOverconstraintTracker.SectorNumber)                                                      | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactPossibleOverconstraintTracker.GeometrySelectionString)                                | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactPossibleOverconstraintTracker.LoadStepNumber)                                                  | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactPossibleOverconstraintTracker.ReportedFrequency)                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactPossibleOverconstraintTracker.Duration)                                                              | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactPossibleOverconstraintTracker.FilterMaximum)                                                    | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactPossibleOverconstraintTracker.FilterMinimum)                                                    | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactPossibleOverconstraintTracker.FrequencyAtMaximumAmplitude)                        | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactPossibleOverconstraintTracker.ImaginaryAtMaximumAmplitude)                        | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactPossibleOverconstraintTracker.MaximumAmplitude)                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactPossibleOverconstraintTracker.MaximumFrequency)                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactPossibleOverconstraintTracker.Maximum)                                                                | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactPossibleOverconstraintTracker.MinimumFrequency)                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactPossibleOverconstraintTracker.Minimum)                                                                | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactPossibleOverconstraintTracker.PhaseAngle)                                                          | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactPossibleOverconstraintTracker.RealAtMaximumAmplitude)                                  | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactPossibleOverconstraintTracker.RequestedFrequency)                                          | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactPossibleOverconstraintTracker.AccelerationType)                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactPossibleOverconstraintTracker.ChartViewingStyle)                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactPossibleOverconstraintTracker.SpatialResolution)                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactPossibleOverconstraintTracker.NormalOrientation)                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactPossibleOverconstraintTracker.CurvesAppearanceDisplay)                                | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactPossibleOverconstraintTracker.ResultChartType)                                                | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactPossibleOverconstraintTracker.DpfEvaluation)                                                    | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactPossibleOverconstraintTracker.ShearOrientation)                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactPossibleOverconstraintTracker.TimeHistoryDisplay)                                          | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactPossibleOverconstraintTracker.VelocityType)                                                      | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactPossibleOverconstraintTracker.Suppressed)                                                          | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactPossibleOverconstraintTracker.EnhancedTracking)                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactPossibleOverconstraintTracker.UseParentFrequencyRange)                                | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactPossibleOverconstraintTracker.Location)                                                              | Gets or sets the Location.                                    |
| [`Children`](#ContactPossibleOverconstraintTracker.Children)                                                              | Gets the list of children.                                    |
| [`Comments`](#ContactPossibleOverconstraintTracker.Comments)                                                              | Gets the list of associated comments.                         |
| [`Images`](#ContactPossibleOverconstraintTracker.Images)                                                                  | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactPossibleOverconstraintTracker.Properties)                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactPossibleOverconstraintTracker.VisibleProperties)                                            | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactPossibleOverconstraintTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactPossibleOverconstraintTracker.InternalObject"></a>

### *property* ContactPossibleOverconstraintTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ContactSide"></a>

### *property* ContactPossibleOverconstraintTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ContactRegion"></a>

### *property* ContactPossibleOverconstraintTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.DataModelObjectCategory"></a>

### *property* ContactPossibleOverconstraintTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.IsSolved"></a>

### *property* ContactPossibleOverconstraintTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ChartDimensions"></a>

### *property* ContactPossibleOverconstraintTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.BoundaryCondition"></a>

### *property* ContactPossibleOverconstraintTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CutFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.SectorNumber"></a>

### *property* ContactPossibleOverconstraintTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GeometrySelectionString"></a>

### *property* ContactPossibleOverconstraintTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.LoadStepNumber"></a>

### *property* ContactPossibleOverconstraintTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ReportedFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Duration"></a>

### *property* ContactPossibleOverconstraintTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.FilterMaximum"></a>

### *property* ContactPossibleOverconstraintTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.FilterMinimum"></a>

### *property* ContactPossibleOverconstraintTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactPossibleOverconstraintTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactPossibleOverconstraintTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.MaximumAmplitude"></a>

### *property* ContactPossibleOverconstraintTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.MaximumFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Maximum"></a>

### *property* ContactPossibleOverconstraintTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.MinimumFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Minimum"></a>

### *property* ContactPossibleOverconstraintTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.PhaseAngle"></a>

### *property* ContactPossibleOverconstraintTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RealAtMaximumAmplitude"></a>

### *property* ContactPossibleOverconstraintTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RequestedFrequency"></a>

### *property* ContactPossibleOverconstraintTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.AccelerationType"></a>

### *property* ContactPossibleOverconstraintTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ChartViewingStyle"></a>

### *property* ContactPossibleOverconstraintTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.DeformationType"></a>

### *property* ContactPossibleOverconstraintTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.FilterType"></a>

### *property* ContactPossibleOverconstraintTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.SpatialResolution"></a>

### *property* ContactPossibleOverconstraintTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.NormalOrientation"></a>

### *property* ContactPossibleOverconstraintTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CurvesAppearanceDisplay"></a>

### *property* ContactPossibleOverconstraintTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ResultChartType"></a>

### *property* ContactPossibleOverconstraintTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.DpfEvaluation"></a>

### *property* ContactPossibleOverconstraintTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.XAxisValues"></a>

### *property* ContactPossibleOverconstraintTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ShearOrientation"></a>

### *property* ContactPossibleOverconstraintTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.StressStrainType"></a>

### *property* ContactPossibleOverconstraintTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.TimeHistoryDisplay"></a>

### *property* ContactPossibleOverconstraintTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.VelocityType"></a>

### *property* ContactPossibleOverconstraintTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Suppressed"></a>

### *property* ContactPossibleOverconstraintTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.EnhancedTracking"></a>

### *property* ContactPossibleOverconstraintTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.UseParentFrequencyRange"></a>

### *property* ContactPossibleOverconstraintTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CoordinateSystem"></a>

### *property* ContactPossibleOverconstraintTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Spring"></a>

### *property* ContactPossibleOverconstraintTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Location"></a>

### *property* ContactPossibleOverconstraintTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Children"></a>

### *property* ContactPossibleOverconstraintTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Comments"></a>

### *property* ContactPossibleOverconstraintTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Images"></a>

### *property* ContactPossibleOverconstraintTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactPossibleOverconstraintTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Properties"></a>

### *property* ContactPossibleOverconstraintTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.VisibleProperties"></a>

### *property* ContactPossibleOverconstraintTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactPossibleOverconstraintTracker.ExportAnimation"></a>

### ContactPossibleOverconstraintTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.ClearGeneratedData"></a>

### ContactPossibleOverconstraintTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.EvaluateAllResults"></a>

### ContactPossibleOverconstraintTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RenameBasedOnDefinition"></a>

### ContactPossibleOverconstraintTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Delete"></a>

### ContactPossibleOverconstraintTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetChildren"></a>

### ContactPossibleOverconstraintTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactPossibleOverconstraintTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.AddComment"></a>

### ContactPossibleOverconstraintTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.AddImage"></a>

### ContactPossibleOverconstraintTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Activate"></a>

### ContactPossibleOverconstraintTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CopyTo"></a>

### ContactPossibleOverconstraintTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.Duplicate"></a>

### ContactPossibleOverconstraintTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GroupAllSimilarChildren"></a>

### ContactPossibleOverconstraintTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GroupSimilarObjects"></a>

### ContactPossibleOverconstraintTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.PropertyByName"></a>

### ContactPossibleOverconstraintTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.PropertyByAPIName"></a>

### ContactPossibleOverconstraintTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.CreateParameter"></a>

### ContactPossibleOverconstraintTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.GetParameter"></a>

### ContactPossibleOverconstraintTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPossibleOverconstraintTracker.RemoveParameter"></a>

### ContactPossibleOverconstraintTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
