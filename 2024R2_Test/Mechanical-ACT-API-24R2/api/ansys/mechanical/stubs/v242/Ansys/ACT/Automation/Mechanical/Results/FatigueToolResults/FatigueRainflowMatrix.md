# `FatigueRainflowMatrix`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueRainflowMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueRainflowMatrix.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#FatigueRainflowMatrix.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#FatigueRainflowMatrix.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FatigueRainflowMatrix.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#FatigueRainflowMatrix.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueRainflowMatrix.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueRainflowMatrix.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueRainflowMatrix.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueRainflowMatrix.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueRainflowMatrix.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueRainflowMatrix.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueRainflowMatrix.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueRainflowMatrix.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueRainflowMatrix.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueRainflowMatrix.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FatigueRainflowMatrix.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FatigueRainflowMatrix.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueRainflowMatrix.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                            | Gets the internal object. For advanced usage only.            |
| [`MaximumRange`](#FatigueRainflowMatrix.MaximumRange)                               | Gets the MaximumRange.                                        |
| [`MaximumMean`](#FatigueRainflowMatrix.MaximumMean)                                 | Gets the MaximumMean.                                         |
| [`MinimumRange`](#FatigueRainflowMatrix.MinimumRange)                               | Gets the MinimumRange.                                        |
| [`MinimumMean`](#FatigueRainflowMatrix.MinimumMean)                                 | Gets the MinimumMean.                                         |
| [`OutputUnit`](#FatigueRainflowMatrix.OutputUnit)                                   | Gets or sets the OutputUnit.                                  |
| [`DataModelObjectCategory`](#FatigueRainflowMatrix.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#FatigueRainflowMatrix.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](#FatigueRainflowMatrix.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#FatigueRainflowMatrix.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#FatigueRainflowMatrix.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#FatigueRainflowMatrix.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#FatigueRainflowMatrix.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#FatigueRainflowMatrix.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#FatigueRainflowMatrix.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](#FatigueRainflowMatrix.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#FatigueRainflowMatrix.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#FatigueRainflowMatrix.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#FatigueRainflowMatrix.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#FatigueRainflowMatrix.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#FatigueRainflowMatrix.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#FatigueRainflowMatrix.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](#FatigueRainflowMatrix.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#FatigueRainflowMatrix.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](#FatigueRainflowMatrix.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#FatigueRainflowMatrix.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#FatigueRainflowMatrix.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#FatigueRainflowMatrix.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#FatigueRainflowMatrix.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](#FatigueRainflowMatrix.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](#FatigueRainflowMatrix.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#FatigueRainflowMatrix.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#FatigueRainflowMatrix.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#FatigueRainflowMatrix.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#FatigueRainflowMatrix.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#FatigueRainflowMatrix.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](#FatigueRainflowMatrix.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#FatigueRainflowMatrix.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](#FatigueRainflowMatrix.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#FatigueRainflowMatrix.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#FatigueRainflowMatrix.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](#FatigueRainflowMatrix.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#FatigueRainflowMatrix.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#FatigueRainflowMatrix.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](#FatigueRainflowMatrix.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](#FatigueRainflowMatrix.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](#FatigueRainflowMatrix.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](#FatigueRainflowMatrix.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#FatigueRainflowMatrix.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](#FatigueRainflowMatrix.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FatigueRainflowMatrix.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FatigueRainflowMatrix.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FatigueRainflowMatrix.InternalObject"></a>

### *property* FatigueRainflowMatrix.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumRange"></a>

### *property* FatigueRainflowMatrix.MaximumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumMean"></a>

### *property* FatigueRainflowMatrix.MaximumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumRange"></a>

### *property* FatigueRainflowMatrix.MinimumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumMean"></a>

### *property* FatigueRainflowMatrix.MinimumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.OutputUnit"></a>

### *property* FatigueRainflowMatrix.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/UnitCategoryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DataModelObjectCategory"></a>

### *property* FatigueRainflowMatrix.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.IsSolved"></a>

### *property* FatigueRainflowMatrix.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ChartDimensions"></a>

### *property* FatigueRainflowMatrix.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.BoundaryCondition"></a>

### *property* FatigueRainflowMatrix.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CutFrequency"></a>

### *property* FatigueRainflowMatrix.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.SectorNumber"></a>

### *property* FatigueRainflowMatrix.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GeometrySelectionString"></a>

### *property* FatigueRainflowMatrix.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.LoadStepNumber"></a>

### *property* FatigueRainflowMatrix.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ReportedFrequency"></a>

### *property* FatigueRainflowMatrix.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Duration"></a>

### *property* FatigueRainflowMatrix.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterMaximum"></a>

### *property* FatigueRainflowMatrix.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterMinimum"></a>

### *property* FatigueRainflowMatrix.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FrequencyAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumFrequency"></a>

### *property* FatigueRainflowMatrix.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Maximum"></a>

### *property* FatigueRainflowMatrix.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumFrequency"></a>

### *property* FatigueRainflowMatrix.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Minimum"></a>

### *property* FatigueRainflowMatrix.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PhaseAngle"></a>

### *property* FatigueRainflowMatrix.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RealAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RequestedFrequency"></a>

### *property* FatigueRainflowMatrix.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.AccelerationType"></a>

### *property* FatigueRainflowMatrix.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ChartViewingStyle"></a>

### *property* FatigueRainflowMatrix.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DeformationType"></a>

### *property* FatigueRainflowMatrix.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterType"></a>

### *property* FatigueRainflowMatrix.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.SpatialResolution"></a>

### *property* FatigueRainflowMatrix.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.NormalOrientation"></a>

### *property* FatigueRainflowMatrix.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CurvesAppearanceDisplay"></a>

### *property* FatigueRainflowMatrix.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ResultChartType"></a>

### *property* FatigueRainflowMatrix.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DpfEvaluation"></a>

### *property* FatigueRainflowMatrix.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.XAxisValues"></a>

### *property* FatigueRainflowMatrix.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ShearOrientation"></a>

### *property* FatigueRainflowMatrix.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.StressStrainType"></a>

### *property* FatigueRainflowMatrix.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.TimeHistoryDisplay"></a>

### *property* FatigueRainflowMatrix.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.VelocityType"></a>

### *property* FatigueRainflowMatrix.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Suppressed"></a>

### *property* FatigueRainflowMatrix.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.EnhancedTracking"></a>

### *property* FatigueRainflowMatrix.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.UseParentFrequencyRange"></a>

### *property* FatigueRainflowMatrix.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CoordinateSystem"></a>

### *property* FatigueRainflowMatrix.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Spring"></a>

### *property* FatigueRainflowMatrix.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Location"></a>

### *property* FatigueRainflowMatrix.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Children"></a>

### *property* FatigueRainflowMatrix.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Comments"></a>

### *property* FatigueRainflowMatrix.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Images"></a>

### *property* FatigueRainflowMatrix.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueRainflowMatrix.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Properties"></a>

### *property* FatigueRainflowMatrix.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.VisibleProperties"></a>

### *property* FatigueRainflowMatrix.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueRainflowMatrix.ExportAnimation"></a>

### FatigueRainflowMatrix.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ClearGeneratedData"></a>

### FatigueRainflowMatrix.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.EvaluateAllResults"></a>

### FatigueRainflowMatrix.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RenameBasedOnDefinition"></a>

### FatigueRainflowMatrix.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Delete"></a>

### FatigueRainflowMatrix.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetChildren"></a>

### FatigueRainflowMatrix.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueRainflowMatrix.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.AddComment"></a>

### FatigueRainflowMatrix.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.AddImage"></a>

### FatigueRainflowMatrix.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Activate"></a>

### FatigueRainflowMatrix.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CopyTo"></a>

### FatigueRainflowMatrix.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Duplicate"></a>

### FatigueRainflowMatrix.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GroupAllSimilarChildren"></a>

### FatigueRainflowMatrix.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GroupSimilarObjects"></a>

### FatigueRainflowMatrix.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PropertyByName"></a>

### FatigueRainflowMatrix.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PropertyByAPIName"></a>

### FatigueRainflowMatrix.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CreateParameter"></a>

### FatigueRainflowMatrix.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetParameter"></a>

### FatigueRainflowMatrix.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RemoveParameter"></a>

### FatigueRainflowMatrix.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

