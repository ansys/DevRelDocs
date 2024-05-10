# ContactMaximumGeometricSlidingDistanceTracker

<a id="ContactMaximumGeometricSlidingDistanceTracker"></a>

### *class* ContactMaximumGeometricSlidingDistanceTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactMaximumGeometricSlidingDistanceTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactMaximumGeometricSlidingDistanceTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactMaximumGeometricSlidingDistanceTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactMaximumGeometricSlidingDistanceTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactMaximumGeometricSlidingDistanceTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactMaximumGeometricSlidingDistanceTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactMaximumGeometricSlidingDistanceTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactMaximumGeometricSlidingDistanceTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactMaximumGeometricSlidingDistanceTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactMaximumGeometricSlidingDistanceTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactMaximumGeometricSlidingDistanceTracker.ContactSide)                                               | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](./../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactMaximumGeometricSlidingDistanceTracker.IsSolved)                                                     | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition)                                   | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.CutFrequency)                                             | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactMaximumGeometricSlidingDistanceTracker.SectorNumber)                                             | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString)                       | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency)                                   | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactMaximumGeometricSlidingDistanceTracker.Duration)                                                     | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum)                                           | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum)                                           | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude)               | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude)               | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude)                                     | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency)                                     | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactMaximumGeometricSlidingDistanceTracker.Maximum)                                                       | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency)                                     | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactMaximumGeometricSlidingDistanceTracker.Minimum)                                                       | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle)                                                 | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude)                         | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency)                                 | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactMaximumGeometricSlidingDistanceTracker.AccelerationType)                                     | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle)                                   | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution)                                   | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation)                                   | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay)                       | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactMaximumGeometricSlidingDistanceTracker.ResultChartType)                                       | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation)                                     | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay)                                 | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactMaximumGeometricSlidingDistanceTracker.VelocityType)                                             | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactMaximumGeometricSlidingDistanceTracker.Suppressed)                                                 | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking)                                     | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange)                       | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactMaximumGeometricSlidingDistanceTracker.Location)                                                     | Gets or sets the Location.                                    |
| [`Children`](#ContactMaximumGeometricSlidingDistanceTracker.Children)                                                     | Gets the list of children.                                    |
| [`Comments`](#ContactMaximumGeometricSlidingDistanceTracker.Comments)                                                     | Gets the list of associated comments.                         |
| [`Images`](#ContactMaximumGeometricSlidingDistanceTracker.Images)                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactMaximumGeometricSlidingDistanceTracker.Properties)                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties)                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactMaximumGeometricSlidingDistanceTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactMaximumGeometricSlidingDistanceTracker.InternalObject"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ContactSide"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](./../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ContactRegion"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DataModelObjectCategory"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.IsSolved"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ChartDimensions"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CutFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.SectorNumber"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Duration"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Maximum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Minimum"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.AccelerationType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DeformationType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.FilterType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ResultChartType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.XAxisValues"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.StressStrainType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.VelocityType"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Suppressed"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CoordinateSystem"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Spring"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Location"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Children"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Comments"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Images"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Properties"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties"></a>

### *property* ContactMaximumGeometricSlidingDistanceTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation"></a>

### ContactMaximumGeometricSlidingDistanceTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData"></a>

### ContactMaximumGeometricSlidingDistanceTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults"></a>

### ContactMaximumGeometricSlidingDistanceTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition"></a>

### ContactMaximumGeometricSlidingDistanceTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Delete"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetChildren"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.AddComment"></a>

### ContactMaximumGeometricSlidingDistanceTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.AddImage"></a>

### ContactMaximumGeometricSlidingDistanceTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Activate"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CopyTo"></a>

### ContactMaximumGeometricSlidingDistanceTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.Duplicate"></a>

### ContactMaximumGeometricSlidingDistanceTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PropertyByName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName"></a>

### ContactMaximumGeometricSlidingDistanceTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.CreateParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.GetParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter"></a>

### ContactMaximumGeometricSlidingDistanceTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
