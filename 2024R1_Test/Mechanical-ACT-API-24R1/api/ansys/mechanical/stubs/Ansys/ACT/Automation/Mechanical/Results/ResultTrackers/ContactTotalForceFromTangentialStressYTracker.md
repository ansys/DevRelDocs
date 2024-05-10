# ContactTotalForceFromTangentialStressYTracker

<a id="ContactTotalForceFromTangentialStressYTracker"></a>

### *class* ContactTotalForceFromTangentialStressYTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactTotalForceFromTangentialStressYTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactTotalForceFromTangentialStressYTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactTotalForceFromTangentialStressYTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactTotalForceFromTangentialStressYTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactTotalForceFromTangentialStressYTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactTotalForceFromTangentialStressYTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactTotalForceFromTangentialStressYTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTotalForceFromTangentialStressYTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactTotalForceFromTangentialStressYTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactTotalForceFromTangentialStressYTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactTotalForceFromTangentialStressYTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactTotalForceFromTangentialStressYTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTotalForceFromTangentialStressYTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactTotalForceFromTangentialStressYTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactTotalForceFromTangentialStressYTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactTotalForceFromTangentialStressYTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactTotalForceFromTangentialStressYTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactTotalForceFromTangentialStressYTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](./../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactTotalForceFromTangentialStressYTracker.IsSolved)                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactTotalForceFromTangentialStressYTracker.BoundaryCondition)                                   | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactTotalForceFromTangentialStressYTracker.CutFrequency)                                             | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactTotalForceFromTangentialStressYTracker.SectorNumber)                                             | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactTotalForceFromTangentialStressYTracker.GeometrySelectionString)                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactTotalForceFromTangentialStressYTracker.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactTotalForceFromTangentialStressYTracker.ReportedFrequency)                                   | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactTotalForceFromTangentialStressYTracker.Duration)                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactTotalForceFromTangentialStressYTracker.FilterMaximum)                                           | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactTotalForceFromTangentialStressYTracker.FilterMinimum)                                           | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressYTracker.FrequencyAtMaximumAmplitude)               | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressYTracker.ImaginaryAtMaximumAmplitude)               | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactTotalForceFromTangentialStressYTracker.MaximumAmplitude)                                     | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactTotalForceFromTangentialStressYTracker.MaximumFrequency)                                     | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactTotalForceFromTangentialStressYTracker.Maximum)                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactTotalForceFromTangentialStressYTracker.MinimumFrequency)                                     | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactTotalForceFromTangentialStressYTracker.Minimum)                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactTotalForceFromTangentialStressYTracker.PhaseAngle)                                                 | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressYTracker.RealAtMaximumAmplitude)                         | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactTotalForceFromTangentialStressYTracker.RequestedFrequency)                                 | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactTotalForceFromTangentialStressYTracker.AccelerationType)                                     | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactTotalForceFromTangentialStressYTracker.ChartViewingStyle)                                   | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactTotalForceFromTangentialStressYTracker.SpatialResolution)                                   | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactTotalForceFromTangentialStressYTracker.NormalOrientation)                                   | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactTotalForceFromTangentialStressYTracker.CurvesAppearanceDisplay)                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactTotalForceFromTangentialStressYTracker.ResultChartType)                                       | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactTotalForceFromTangentialStressYTracker.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactTotalForceFromTangentialStressYTracker.ShearOrientation)                                     | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactTotalForceFromTangentialStressYTracker.TimeHistoryDisplay)                                 | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactTotalForceFromTangentialStressYTracker.VelocityType)                                             | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactTotalForceFromTangentialStressYTracker.Suppressed)                                                 | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactTotalForceFromTangentialStressYTracker.EnhancedTracking)                                     | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactTotalForceFromTangentialStressYTracker.UseParentFrequencyRange)                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactTotalForceFromTangentialStressYTracker.Location)                                                     | Gets or sets the Location.                                    |
| [`Children`](#ContactTotalForceFromTangentialStressYTracker.Children)                                                     | Gets the list of children.                                    |
| [`Comments`](#ContactTotalForceFromTangentialStressYTracker.Comments)                                                     | Gets the list of associated comments.                         |
| [`Images`](#ContactTotalForceFromTangentialStressYTracker.Images)                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactTotalForceFromTangentialStressYTracker.Properties)                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactTotalForceFromTangentialStressYTracker.VisibleProperties)                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactTotalForceFromTangentialStressYTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactTotalForceFromTangentialStressYTracker.InternalObject"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.ContactRegion"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.DataModelObjectCategory"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.IsSolved"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.ChartDimensions"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.BoundaryCondition"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.CutFrequency"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.SectorNumber"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.GeometrySelectionString"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.LoadStepNumber"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.ReportedFrequency"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Duration"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.FilterMaximum"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.FilterMinimum"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.MaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.MaximumFrequency"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Maximum"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.MinimumFrequency"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Minimum"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.PhaseAngle"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.RealAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.RequestedFrequency"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.AccelerationType"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.ChartViewingStyle"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.DeformationType"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.FilterType"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.SpatialResolution"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.NormalOrientation"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.CurvesAppearanceDisplay"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.ResultChartType"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.DpfEvaluation"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.XAxisValues"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.ShearOrientation"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.StressStrainType"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.TimeHistoryDisplay"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.VelocityType"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Suppressed"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.EnhancedTracking"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.UseParentFrequencyRange"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.CoordinateSystem"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Spring"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Location"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Children"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Comments"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Images"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Properties"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.VisibleProperties"></a>

### *property* ContactTotalForceFromTangentialStressYTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTotalForceFromTangentialStressYTracker.ExportAnimation"></a>

### ContactTotalForceFromTangentialStressYTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.ClearGeneratedData"></a>

### ContactTotalForceFromTangentialStressYTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.EvaluateAllResults"></a>

### ContactTotalForceFromTangentialStressYTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.RenameBasedOnDefinition"></a>

### ContactTotalForceFromTangentialStressYTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Delete"></a>

### ContactTotalForceFromTangentialStressYTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.GetChildren"></a>

### ContactTotalForceFromTangentialStressYTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactTotalForceFromTangentialStressYTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.AddComment"></a>

### ContactTotalForceFromTangentialStressYTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.AddImage"></a>

### ContactTotalForceFromTangentialStressYTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Activate"></a>

### ContactTotalForceFromTangentialStressYTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.CopyTo"></a>

### ContactTotalForceFromTangentialStressYTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.Duplicate"></a>

### ContactTotalForceFromTangentialStressYTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.GroupAllSimilarChildren"></a>

### ContactTotalForceFromTangentialStressYTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.GroupSimilarObjects"></a>

### ContactTotalForceFromTangentialStressYTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.PropertyByName"></a>

### ContactTotalForceFromTangentialStressYTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.PropertyByAPIName"></a>

### ContactTotalForceFromTangentialStressYTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.CreateParameter"></a>

### ContactTotalForceFromTangentialStressYTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.GetParameter"></a>

### ContactTotalForceFromTangentialStressYTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressYTracker.RemoveParameter"></a>

### ContactTotalForceFromTangentialStressYTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
