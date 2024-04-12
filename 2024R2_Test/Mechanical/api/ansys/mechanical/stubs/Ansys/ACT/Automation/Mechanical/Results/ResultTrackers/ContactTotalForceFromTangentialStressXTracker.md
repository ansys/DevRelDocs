<a id="contacttotalforcefromtangentialstressxtracker"></a>

# ContactTotalForceFromTangentialStressXTracker

<a id="ContactTotalForceFromTangentialStressXTracker"></a>

### *class* ContactTotalForceFromTangentialStressXTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactTotalForceFromTangentialStressXTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactTotalForceFromTangentialStressXTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactTotalForceFromTangentialStressXTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactTotalForceFromTangentialStressXTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactTotalForceFromTangentialStressXTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactTotalForceFromTangentialStressXTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactTotalForceFromTangentialStressXTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTotalForceFromTangentialStressXTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactTotalForceFromTangentialStressXTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactTotalForceFromTangentialStressXTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactTotalForceFromTangentialStressXTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactTotalForceFromTangentialStressXTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTotalForceFromTangentialStressXTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactTotalForceFromTangentialStressXTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactTotalForceFromTangentialStressXTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactTotalForceFromTangentialStressXTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactTotalForceFromTangentialStressXTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactTotalForceFromTangentialStressXTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactTotalForceFromTangentialStressXTracker.IsSolved)                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactTotalForceFromTangentialStressXTracker.BoundaryCondition)                                   | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactTotalForceFromTangentialStressXTracker.CutFrequency)                                             | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactTotalForceFromTangentialStressXTracker.SectorNumber)                                             | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactTotalForceFromTangentialStressXTracker.GeometrySelectionString)                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactTotalForceFromTangentialStressXTracker.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactTotalForceFromTangentialStressXTracker.ReportedFrequency)                                   | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactTotalForceFromTangentialStressXTracker.Duration)                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactTotalForceFromTangentialStressXTracker.FilterMaximum)                                           | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactTotalForceFromTangentialStressXTracker.FilterMinimum)                                           | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressXTracker.FrequencyAtMaximumAmplitude)               | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressXTracker.ImaginaryAtMaximumAmplitude)               | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactTotalForceFromTangentialStressXTracker.MaximumAmplitude)                                     | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactTotalForceFromTangentialStressXTracker.MaximumFrequency)                                     | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactTotalForceFromTangentialStressXTracker.Maximum)                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactTotalForceFromTangentialStressXTracker.MinimumFrequency)                                     | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactTotalForceFromTangentialStressXTracker.Minimum)                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactTotalForceFromTangentialStressXTracker.PhaseAngle)                                                 | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressXTracker.RealAtMaximumAmplitude)                         | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactTotalForceFromTangentialStressXTracker.RequestedFrequency)                                 | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactTotalForceFromTangentialStressXTracker.AccelerationType)                                     | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactTotalForceFromTangentialStressXTracker.ChartViewingStyle)                                   | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactTotalForceFromTangentialStressXTracker.SpatialResolution)                                   | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactTotalForceFromTangentialStressXTracker.NormalOrientation)                                   | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactTotalForceFromTangentialStressXTracker.CurvesAppearanceDisplay)                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactTotalForceFromTangentialStressXTracker.ResultChartType)                                       | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactTotalForceFromTangentialStressXTracker.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactTotalForceFromTangentialStressXTracker.ShearOrientation)                                     | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactTotalForceFromTangentialStressXTracker.TimeHistoryDisplay)                                 | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactTotalForceFromTangentialStressXTracker.VelocityType)                                             | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactTotalForceFromTangentialStressXTracker.Suppressed)                                                 | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactTotalForceFromTangentialStressXTracker.EnhancedTracking)                                     | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactTotalForceFromTangentialStressXTracker.UseParentFrequencyRange)                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactTotalForceFromTangentialStressXTracker.Location)                                                     | Gets or sets the Location.                                    |
| [`Children`](#ContactTotalForceFromTangentialStressXTracker.Children)                                                     | Gets the list of children.                                    |
| [`Comments`](#ContactTotalForceFromTangentialStressXTracker.Comments)                                                     | Gets the list of associated comments.                         |
| [`Images`](#ContactTotalForceFromTangentialStressXTracker.Images)                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactTotalForceFromTangentialStressXTracker.Properties)                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactTotalForceFromTangentialStressXTracker.VisibleProperties)                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactTotalForceFromTangentialStressXTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactTotalForceFromTangentialStressXTracker.InternalObject"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ContactRegion"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.DataModelObjectCategory"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.IsSolved"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ChartDimensions"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.BoundaryCondition"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CutFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.SectorNumber"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GeometrySelectionString"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.LoadStepNumber"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ReportedFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Duration"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.FilterMaximum"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.FilterMinimum"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.MaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.MaximumFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Maximum"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.MinimumFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Minimum"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.PhaseAngle"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RealAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RequestedFrequency"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.AccelerationType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ChartViewingStyle"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.DeformationType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.FilterType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.SpatialResolution"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.NormalOrientation"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CurvesAppearanceDisplay"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ResultChartType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.DpfEvaluation"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.XAxisValues"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ShearOrientation"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.StressStrainType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.TimeHistoryDisplay"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.VelocityType"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Suppressed"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.EnhancedTracking"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.UseParentFrequencyRange"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CoordinateSystem"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Spring"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Location"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Children"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Comments"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Images"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Properties"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.VisibleProperties"></a>

### *property* ContactTotalForceFromTangentialStressXTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTotalForceFromTangentialStressXTracker.ExportAnimation"></a>

### ContactTotalForceFromTangentialStressXTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.ClearGeneratedData"></a>

### ContactTotalForceFromTangentialStressXTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.EvaluateAllResults"></a>

### ContactTotalForceFromTangentialStressXTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RenameBasedOnDefinition"></a>

### ContactTotalForceFromTangentialStressXTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Delete"></a>

### ContactTotalForceFromTangentialStressXTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GetChildren"></a>

### ContactTotalForceFromTangentialStressXTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactTotalForceFromTangentialStressXTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.AddComment"></a>

### ContactTotalForceFromTangentialStressXTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.AddImage"></a>

### ContactTotalForceFromTangentialStressXTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Activate"></a>

### ContactTotalForceFromTangentialStressXTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CopyTo"></a>

### ContactTotalForceFromTangentialStressXTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.Duplicate"></a>

### ContactTotalForceFromTangentialStressXTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GroupAllSimilarChildren"></a>

### ContactTotalForceFromTangentialStressXTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GroupSimilarObjects"></a>

### ContactTotalForceFromTangentialStressXTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.PropertyByName"></a>

### ContactTotalForceFromTangentialStressXTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.PropertyByAPIName"></a>

### ContactTotalForceFromTangentialStressXTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.CreateParameter"></a>

### ContactTotalForceFromTangentialStressXTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.GetParameter"></a>

### ContactTotalForceFromTangentialStressXTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressXTracker.RemoveParameter"></a>

### ContactTotalForceFromTangentialStressXTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
