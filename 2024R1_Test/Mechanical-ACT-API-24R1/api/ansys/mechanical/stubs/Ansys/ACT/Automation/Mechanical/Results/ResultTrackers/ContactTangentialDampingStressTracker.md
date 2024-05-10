# ContactTangentialDampingStressTracker

<a id="ContactTangentialDampingStressTracker"></a>

### *class* ContactTangentialDampingStressTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactTangentialDampingStressTracker.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactTangentialDampingStressTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactTangentialDampingStressTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactTangentialDampingStressTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactTangentialDampingStressTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactTangentialDampingStressTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactTangentialDampingStressTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTangentialDampingStressTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactTangentialDampingStressTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactTangentialDampingStressTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactTangentialDampingStressTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactTangentialDampingStressTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTangentialDampingStressTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactTangentialDampingStressTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactTangentialDampingStressTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactTangentialDampingStressTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactTangentialDampingStressTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactTangentialDampingStressTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](./../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#ContactTangentialDampingStressTracker.IsSolved)                                                             | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactTangentialDampingStressTracker.BoundaryCondition)                                           | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactTangentialDampingStressTracker.CutFrequency)                                                     | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactTangentialDampingStressTracker.SectorNumber)                                                     | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactTangentialDampingStressTracker.GeometrySelectionString)                               | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactTangentialDampingStressTracker.LoadStepNumber)                                                 | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactTangentialDampingStressTracker.ReportedFrequency)                                           | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactTangentialDampingStressTracker.Duration)                                                             | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactTangentialDampingStressTracker.FilterMaximum)                                                   | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactTangentialDampingStressTracker.FilterMinimum)                                                   | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactTangentialDampingStressTracker.FrequencyAtMaximumAmplitude)                       | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactTangentialDampingStressTracker.ImaginaryAtMaximumAmplitude)                       | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactTangentialDampingStressTracker.MaximumAmplitude)                                             | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactTangentialDampingStressTracker.MaximumFrequency)                                             | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactTangentialDampingStressTracker.Maximum)                                                               | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactTangentialDampingStressTracker.MinimumFrequency)                                             | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactTangentialDampingStressTracker.Minimum)                                                               | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactTangentialDampingStressTracker.PhaseAngle)                                                         | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactTangentialDampingStressTracker.RealAtMaximumAmplitude)                                 | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactTangentialDampingStressTracker.RequestedFrequency)                                         | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactTangentialDampingStressTracker.AccelerationType)                                             | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactTangentialDampingStressTracker.ChartViewingStyle)                                           | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactTangentialDampingStressTracker.SpatialResolution)                                           | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactTangentialDampingStressTracker.NormalOrientation)                                           | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactTangentialDampingStressTracker.CurvesAppearanceDisplay)                               | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactTangentialDampingStressTracker.ResultChartType)                                               | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactTangentialDampingStressTracker.DpfEvaluation)                                                   | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactTangentialDampingStressTracker.ShearOrientation)                                             | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactTangentialDampingStressTracker.TimeHistoryDisplay)                                         | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactTangentialDampingStressTracker.VelocityType)                                                     | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactTangentialDampingStressTracker.Suppressed)                                                         | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactTangentialDampingStressTracker.EnhancedTracking)                                             | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactTangentialDampingStressTracker.UseParentFrequencyRange)                               | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#ContactTangentialDampingStressTracker.Location)                                                             | Gets or sets the Location.                                    |
| [`Children`](#ContactTangentialDampingStressTracker.Children)                                                             | Gets the list of children.                                    |
| [`Comments`](#ContactTangentialDampingStressTracker.Comments)                                                             | Gets the list of associated comments.                         |
| [`Images`](#ContactTangentialDampingStressTracker.Images)                                                                 | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactTangentialDampingStressTracker.Properties)                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactTangentialDampingStressTracker.VisibleProperties)                                           | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import ContactTangentialDampingStressTracker
```

<a id="property-detail"></a>

## Property detail

<a id="ContactTangentialDampingStressTracker.InternalObject"></a>

### *property* ContactTangentialDampingStressTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ContactRegion"></a>

### *property* ContactTangentialDampingStressTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.DataModelObjectCategory"></a>

### *property* ContactTangentialDampingStressTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.IsSolved"></a>

### *property* ContactTangentialDampingStressTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ChartDimensions"></a>

### *property* ContactTangentialDampingStressTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.BoundaryCondition"></a>

### *property* ContactTangentialDampingStressTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CutFrequency"></a>

### *property* ContactTangentialDampingStressTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.SectorNumber"></a>

### *property* ContactTangentialDampingStressTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GeometrySelectionString"></a>

### *property* ContactTangentialDampingStressTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.LoadStepNumber"></a>

### *property* ContactTangentialDampingStressTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ReportedFrequency"></a>

### *property* ContactTangentialDampingStressTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Duration"></a>

### *property* ContactTangentialDampingStressTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.FilterMaximum"></a>

### *property* ContactTangentialDampingStressTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.FilterMinimum"></a>

### *property* ContactTangentialDampingStressTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactTangentialDampingStressTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactTangentialDampingStressTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.MaximumAmplitude"></a>

### *property* ContactTangentialDampingStressTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.MaximumFrequency"></a>

### *property* ContactTangentialDampingStressTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Maximum"></a>

### *property* ContactTangentialDampingStressTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.MinimumFrequency"></a>

### *property* ContactTangentialDampingStressTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Minimum"></a>

### *property* ContactTangentialDampingStressTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.PhaseAngle"></a>

### *property* ContactTangentialDampingStressTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.RealAtMaximumAmplitude"></a>

### *property* ContactTangentialDampingStressTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.RequestedFrequency"></a>

### *property* ContactTangentialDampingStressTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.AccelerationType"></a>

### *property* ContactTangentialDampingStressTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ChartViewingStyle"></a>

### *property* ContactTangentialDampingStressTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.DeformationType"></a>

### *property* ContactTangentialDampingStressTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.FilterType"></a>

### *property* ContactTangentialDampingStressTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.SpatialResolution"></a>

### *property* ContactTangentialDampingStressTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.NormalOrientation"></a>

### *property* ContactTangentialDampingStressTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CurvesAppearanceDisplay"></a>

### *property* ContactTangentialDampingStressTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ResultChartType"></a>

### *property* ContactTangentialDampingStressTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.DpfEvaluation"></a>

### *property* ContactTangentialDampingStressTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.XAxisValues"></a>

### *property* ContactTangentialDampingStressTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ShearOrientation"></a>

### *property* ContactTangentialDampingStressTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.StressStrainType"></a>

### *property* ContactTangentialDampingStressTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.TimeHistoryDisplay"></a>

### *property* ContactTangentialDampingStressTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.VelocityType"></a>

### *property* ContactTangentialDampingStressTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Suppressed"></a>

### *property* ContactTangentialDampingStressTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.EnhancedTracking"></a>

### *property* ContactTangentialDampingStressTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.UseParentFrequencyRange"></a>

### *property* ContactTangentialDampingStressTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CoordinateSystem"></a>

### *property* ContactTangentialDampingStressTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Spring"></a>

### *property* ContactTangentialDampingStressTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Location"></a>

### *property* ContactTangentialDampingStressTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Children"></a>

### *property* ContactTangentialDampingStressTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Comments"></a>

### *property* ContactTangentialDampingStressTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Images"></a>

### *property* ContactTangentialDampingStressTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactTangentialDampingStressTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Properties"></a>

### *property* ContactTangentialDampingStressTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.VisibleProperties"></a>

### *property* ContactTangentialDampingStressTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTangentialDampingStressTracker.ExportAnimation"></a>

### ContactTangentialDampingStressTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ClearGeneratedData"></a>

### ContactTangentialDampingStressTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.EvaluateAllResults"></a>

### ContactTangentialDampingStressTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.RenameBasedOnDefinition"></a>

### ContactTangentialDampingStressTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Delete"></a>

### ContactTangentialDampingStressTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GetChildren"></a>

### ContactTangentialDampingStressTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactTangentialDampingStressTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.AddComment"></a>

### ContactTangentialDampingStressTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.AddImage"></a>

### ContactTangentialDampingStressTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Activate"></a>

### ContactTangentialDampingStressTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CopyTo"></a>

### ContactTangentialDampingStressTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Duplicate"></a>

### ContactTangentialDampingStressTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GroupAllSimilarChildren"></a>

### ContactTangentialDampingStressTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GroupSimilarObjects"></a>

### ContactTangentialDampingStressTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.PropertyByName"></a>

### ContactTangentialDampingStressTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.PropertyByAPIName"></a>

### ContactTangentialDampingStressTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CreateParameter"></a>

### ContactTangentialDampingStressTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GetParameter"></a>

### ContactTangentialDampingStressTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.RemoveParameter"></a>

### ContactTangentialDampingStressTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
