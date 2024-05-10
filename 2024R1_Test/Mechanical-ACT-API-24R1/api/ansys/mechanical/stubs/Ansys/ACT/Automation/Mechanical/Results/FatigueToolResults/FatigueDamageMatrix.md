# FatigueDamageMatrix

<a id="FatigueDamageMatrix"></a>

### *class* FatigueDamageMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueDamageMatrix.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#FatigueDamageMatrix.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#FatigueDamageMatrix.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FatigueDamageMatrix.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#FatigueDamageMatrix.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueDamageMatrix.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueDamageMatrix.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueDamageMatrix.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueDamageMatrix.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueDamageMatrix.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueDamageMatrix.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueDamageMatrix.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueDamageMatrix.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueDamageMatrix.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueDamageMatrix.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FatigueDamageMatrix.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FatigueDamageMatrix.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueDamageMatrix.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`DesignLife`](#FatigueDamageMatrix.DesignLife)                                                                           | Gets or sets the DesignLife.                                  |
| [`MaximumRange`](#FatigueDamageMatrix.MaximumRange)                                                                       | Gets the MaximumRange.                                        |
| [`MaximumMean`](#FatigueDamageMatrix.MaximumMean)                                                                         | Gets the MaximumMean.                                         |
| [`MinimumRange`](#FatigueDamageMatrix.MinimumRange)                                                                       | Gets the MinimumRange.                                        |
| [`MinimumMean`](#FatigueDamageMatrix.MinimumMean)                                                                         | Gets the MinimumMean.                                         |
| [`OutputUnit`](#FatigueDamageMatrix.OutputUnit)                                                                           | Gets or sets the OutputUnit.                                  |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#FatigueDamageMatrix.IsSolved)                                                                               | Gets the IsSolved.                                            |
| [`ChartDimensions`](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#FatigueDamageMatrix.BoundaryCondition)                                                             | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#FatigueDamageMatrix.CutFrequency)                                                                       | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#FatigueDamageMatrix.SectorNumber)                                                                       | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#FatigueDamageMatrix.GeometrySelectionString)                                                 | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#FatigueDamageMatrix.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#FatigueDamageMatrix.ReportedFrequency)                                                             | Gets the ReportedFrequency.                                   |
| [`Duration`](#FatigueDamageMatrix.Duration)                                                                               | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#FatigueDamageMatrix.FilterMaximum)                                                                     | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#FatigueDamageMatrix.FilterMinimum)                                                                     | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#FatigueDamageMatrix.FrequencyAtMaximumAmplitude)                                         | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#FatigueDamageMatrix.ImaginaryAtMaximumAmplitude)                                         | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#FatigueDamageMatrix.MaximumAmplitude)                                                               | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#FatigueDamageMatrix.MaximumFrequency)                                                               | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#FatigueDamageMatrix.Maximum)                                                                                 | Gets the Maximum.                                             |
| [`MinimumFrequency`](#FatigueDamageMatrix.MinimumFrequency)                                                               | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#FatigueDamageMatrix.Minimum)                                                                                 | Gets the Minimum.                                             |
| [`PhaseAngle`](#FatigueDamageMatrix.PhaseAngle)                                                                           | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#FatigueDamageMatrix.RealAtMaximumAmplitude)                                                   | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#FatigueDamageMatrix.RequestedFrequency)                                                           | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#FatigueDamageMatrix.AccelerationType)                                                               | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#FatigueDamageMatrix.ChartViewingStyle)                                                             | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](./../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#FatigueDamageMatrix.SpatialResolution)                                                             | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#FatigueDamageMatrix.NormalOrientation)                                                             | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#FatigueDamageMatrix.CurvesAppearanceDisplay)                                                 | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#FatigueDamageMatrix.ResultChartType)                                                                 | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#FatigueDamageMatrix.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#FatigueDamageMatrix.ShearOrientation)                                                               | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#FatigueDamageMatrix.TimeHistoryDisplay)                                                           | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#FatigueDamageMatrix.VelocityType)                                                                       | Gets or sets the VelocityType.                                |
| [`Suppressed`](#FatigueDamageMatrix.Suppressed)                                                                           | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#FatigueDamageMatrix.EnhancedTracking)                                                               | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#FatigueDamageMatrix.UseParentFrequencyRange)                                                 | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](./../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#FatigueDamageMatrix.Location)                                                                               | Gets or sets the Location.                                    |
| [`Children`](#FatigueDamageMatrix.Children)                                                                               | Gets the list of children.                                    |
| [`Comments`](#FatigueDamageMatrix.Comments)                                                                               | Gets the list of associated comments.                         |
| [`Images`](#FatigueDamageMatrix.Images)                                                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FatigueDamageMatrix.Properties)                                                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FatigueDamageMatrix.VisibleProperties)                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueDamageMatrix
```

<a id="property-detail"></a>

## Property detail

<a id="FatigueDamageMatrix.InternalObject"></a>

### *property* FatigueDamageMatrix.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.DesignLife"></a>

### *property* FatigueDamageMatrix.DesignLife *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MaximumRange"></a>

### *property* FatigueDamageMatrix.MaximumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MaximumMean"></a>

### *property* FatigueDamageMatrix.MaximumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MinimumRange"></a>

### *property* FatigueDamageMatrix.MinimumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MinimumMean"></a>

### *property* FatigueDamageMatrix.MinimumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.OutputUnit"></a>

### *property* FatigueDamageMatrix.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](./../../../../../Mechanical/DataModel/Enums/UnitCategoryType.md#UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.DataModelObjectCategory"></a>

### *property* FatigueDamageMatrix.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.IsSolved"></a>

### *property* FatigueDamageMatrix.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ChartDimensions"></a>

### *property* FatigueDamageMatrix.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](./../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.BoundaryCondition"></a>

### *property* FatigueDamageMatrix.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](./../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CutFrequency"></a>

### *property* FatigueDamageMatrix.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.SectorNumber"></a>

### *property* FatigueDamageMatrix.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GeometrySelectionString"></a>

### *property* FatigueDamageMatrix.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.LoadStepNumber"></a>

### *property* FatigueDamageMatrix.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ReportedFrequency"></a>

### *property* FatigueDamageMatrix.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Duration"></a>

### *property* FatigueDamageMatrix.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.FilterMaximum"></a>

### *property* FatigueDamageMatrix.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.FilterMinimum"></a>

### *property* FatigueDamageMatrix.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.FrequencyAtMaximumAmplitude"></a>

### *property* FatigueDamageMatrix.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ImaginaryAtMaximumAmplitude"></a>

### *property* FatigueDamageMatrix.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MaximumAmplitude"></a>

### *property* FatigueDamageMatrix.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MaximumFrequency"></a>

### *property* FatigueDamageMatrix.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Maximum"></a>

### *property* FatigueDamageMatrix.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.MinimumFrequency"></a>

### *property* FatigueDamageMatrix.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Minimum"></a>

### *property* FatigueDamageMatrix.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.PhaseAngle"></a>

### *property* FatigueDamageMatrix.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RealAtMaximumAmplitude"></a>

### *property* FatigueDamageMatrix.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RequestedFrequency"></a>

### *property* FatigueDamageMatrix.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.AccelerationType"></a>

### *property* FatigueDamageMatrix.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ChartViewingStyle"></a>

### *property* FatigueDamageMatrix.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](./../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.DeformationType"></a>

### *property* FatigueDamageMatrix.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.FilterType"></a>

### *property* FatigueDamageMatrix.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](./../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.SpatialResolution"></a>

### *property* FatigueDamageMatrix.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](./../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.NormalOrientation"></a>

### *property* FatigueDamageMatrix.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CurvesAppearanceDisplay"></a>

### *property* FatigueDamageMatrix.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](./../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ResultChartType"></a>

### *property* FatigueDamageMatrix.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](./../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.DpfEvaluation"></a>

### *property* FatigueDamageMatrix.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.XAxisValues"></a>

### *property* FatigueDamageMatrix.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](./../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ShearOrientation"></a>

### *property* FatigueDamageMatrix.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](./../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.StressStrainType"></a>

### *property* FatigueDamageMatrix.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](./../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.TimeHistoryDisplay"></a>

### *property* FatigueDamageMatrix.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](./../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.VelocityType"></a>

### *property* FatigueDamageMatrix.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](./../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Suppressed"></a>

### *property* FatigueDamageMatrix.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.EnhancedTracking"></a>

### *property* FatigueDamageMatrix.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.UseParentFrequencyRange"></a>

### *property* FatigueDamageMatrix.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CoordinateSystem"></a>

### *property* FatigueDamageMatrix.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Spring"></a>

### *property* FatigueDamageMatrix.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Location"></a>

### *property* FatigueDamageMatrix.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Children"></a>

### *property* FatigueDamageMatrix.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Comments"></a>

### *property* FatigueDamageMatrix.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Images"></a>

### *property* FatigueDamageMatrix.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueDamageMatrix.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Properties"></a>

### *property* FatigueDamageMatrix.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.VisibleProperties"></a>

### *property* FatigueDamageMatrix.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueDamageMatrix.ExportAnimation"></a>

### FatigueDamageMatrix.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.ClearGeneratedData"></a>

### FatigueDamageMatrix.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.EvaluateAllResults"></a>

### FatigueDamageMatrix.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RenameBasedOnDefinition"></a>

### FatigueDamageMatrix.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Delete"></a>

### FatigueDamageMatrix.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GetChildren"></a>

### FatigueDamageMatrix.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueDamageMatrix.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.AddComment"></a>

### FatigueDamageMatrix.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.AddImage"></a>

### FatigueDamageMatrix.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Activate"></a>

### FatigueDamageMatrix.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CopyTo"></a>

### FatigueDamageMatrix.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.Duplicate"></a>

### FatigueDamageMatrix.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GroupAllSimilarChildren"></a>

### FatigueDamageMatrix.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GroupSimilarObjects"></a>

### FatigueDamageMatrix.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.PropertyByName"></a>

### FatigueDamageMatrix.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.PropertyByAPIName"></a>

### FatigueDamageMatrix.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.CreateParameter"></a>

### FatigueDamageMatrix.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.GetParameter"></a>

### FatigueDamageMatrix.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueDamageMatrix.RemoveParameter"></a>

### FatigueDamageMatrix.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
