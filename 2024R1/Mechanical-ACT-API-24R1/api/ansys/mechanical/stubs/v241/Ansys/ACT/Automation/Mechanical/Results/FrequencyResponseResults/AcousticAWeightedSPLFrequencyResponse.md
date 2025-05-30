# `AcousticAWeightedSPLFrequencyResponse`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticAWeightedSPLFrequencyResponse"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticAWeightedSPLFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticAWeightedSPLFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#AcousticAWeightedSPLFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#AcousticAWeightedSPLFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticAWeightedSPLFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#AcousticAWeightedSPLFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticAWeightedSPLFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticAWeightedSPLFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#AcousticAWeightedSPLFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticAWeightedSPLFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticAWeightedSPLFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticAWeightedSPLFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticAWeightedSPLFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticAWeightedSPLFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticAWeightedSPLFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticAWeightedSPLFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticAWeightedSPLFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticAWeightedSPLFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticAWeightedSPLFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#AcousticAWeightedSPLFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#AcousticAWeightedSPLFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](#AcousticAWeightedSPLFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#AcousticAWeightedSPLFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#AcousticAWeightedSPLFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#AcousticAWeightedSPLFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#AcousticAWeightedSPLFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#AcousticAWeightedSPLFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#AcousticAWeightedSPLFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](#AcousticAWeightedSPLFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#AcousticAWeightedSPLFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#AcousticAWeightedSPLFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#AcousticAWeightedSPLFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#AcousticAWeightedSPLFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#AcousticAWeightedSPLFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#AcousticAWeightedSPLFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#AcousticAWeightedSPLFrequencyResponse.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](#AcousticAWeightedSPLFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#AcousticAWeightedSPLFrequencyResponse.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](#AcousticAWeightedSPLFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#AcousticAWeightedSPLFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#AcousticAWeightedSPLFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#AcousticAWeightedSPLFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#AcousticAWeightedSPLFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](#AcousticAWeightedSPLFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](#AcousticAWeightedSPLFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#AcousticAWeightedSPLFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#AcousticAWeightedSPLFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#AcousticAWeightedSPLFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#AcousticAWeightedSPLFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#AcousticAWeightedSPLFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](#AcousticAWeightedSPLFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#AcousticAWeightedSPLFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](#AcousticAWeightedSPLFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#AcousticAWeightedSPLFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#AcousticAWeightedSPLFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](#AcousticAWeightedSPLFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#AcousticAWeightedSPLFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#AcousticAWeightedSPLFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](#AcousticAWeightedSPLFrequencyResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](#AcousticAWeightedSPLFrequencyResponse.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](#AcousticAWeightedSPLFrequencyResponse.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](#AcousticAWeightedSPLFrequencyResponse.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#AcousticAWeightedSPLFrequencyResponse.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](#AcousticAWeightedSPLFrequencyResponse.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticAWeightedSPLFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticAWeightedSPLFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticAWeightedSPLFrequencyResponse.InternalObject"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.DataModelObjectCategory"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.IsSolved"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.ChartDimensions"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.BoundaryCondition"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.CutFrequency"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.SectorNumber"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.GeometrySelectionString"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.LoadStepNumber"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.ReportedFrequency"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Duration"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.FilterMaximum"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.FilterMinimum"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.MaximumAmplitude"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.MaximumFrequency"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Maximum"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.MinimumFrequency"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Minimum"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.PhaseAngle"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.RequestedFrequency"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.AccelerationType"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.ChartViewingStyle"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.DeformationType"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.FilterType"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.SpatialResolution"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.NormalOrientation"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.ResultChartType"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.DpfEvaluation"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.XAxisValues"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.ShearOrientation"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.StressStrainType"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.TimeHistoryDisplay"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.VelocityType"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Suppressed"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.EnhancedTracking"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.UseParentFrequencyRange"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.CoordinateSystem"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Spring"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Location"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Children"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Comments"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Images"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Properties"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.VisibleProperties"></a>

### *property* AcousticAWeightedSPLFrequencyResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAWeightedSPLFrequencyResponse.ExportAnimation"></a>

### AcousticAWeightedSPLFrequencyResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.ClearGeneratedData"></a>

### AcousticAWeightedSPLFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.EvaluateAllResults"></a>

### AcousticAWeightedSPLFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.RenameBasedOnDefinition"></a>

### AcousticAWeightedSPLFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Delete"></a>

### AcousticAWeightedSPLFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.GetChildren"></a>

### AcousticAWeightedSPLFrequencyResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticAWeightedSPLFrequencyResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.AddComment"></a>

### AcousticAWeightedSPLFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.AddImage"></a>

### AcousticAWeightedSPLFrequencyResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Activate"></a>

### AcousticAWeightedSPLFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.CopyTo"></a>

### AcousticAWeightedSPLFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.Duplicate"></a>

### AcousticAWeightedSPLFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.GroupAllSimilarChildren"></a>

### AcousticAWeightedSPLFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.GroupSimilarObjects"></a>

### AcousticAWeightedSPLFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.PropertyByName"></a>

### AcousticAWeightedSPLFrequencyResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.PropertyByAPIName"></a>

### AcousticAWeightedSPLFrequencyResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.CreateParameter"></a>

### AcousticAWeightedSPLFrequencyResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.GetParameter"></a>

### AcousticAWeightedSPLFrequencyResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSPLFrequencyResponse.RemoveParameter"></a>

### AcousticAWeightedSPLFrequencyResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

