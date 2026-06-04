# `FatigueRainflowMatrix`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueRainflowMatrix"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueRainflowMatrix

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueRainflowMatrix.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FatigueRainflowMatrix.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FatigueRainflowMatrix.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueRainflowMatrix.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FatigueRainflowMatrix.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FatigueRainflowMatrix.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FatigueRainflowMatrix.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FatigueRainflowMatrix.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FatigueRainflowMatrix.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#FatigueRainflowMatrix.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FatigueRainflowMatrix.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#FatigueRainflowMatrix.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FatigueRainflowMatrix.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FatigueRainflowMatrix.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueRainflowMatrix.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FatigueRainflowMatrix.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FatigueRainflowMatrix.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FatigueRainflowMatrix.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FatigueRainflowMatrix.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#FatigueRainflowMatrix.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#FatigueRainflowMatrix.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#FatigueRainflowMatrix.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#FatigueRainflowMatrix.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#FatigueRainflowMatrix.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#FatigueRainflowMatrix.Comments)                                       | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#FatigueRainflowMatrix.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#FatigueRainflowMatrix.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#FatigueRainflowMatrix.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#FatigueRainflowMatrix.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#FatigueRainflowMatrix.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#FatigueRainflowMatrix.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#FatigueRainflowMatrix.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#FatigueRainflowMatrix.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#FatigueRainflowMatrix.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#FatigueRainflowMatrix.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#FatigueRainflowMatrix.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#FatigueRainflowMatrix.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#FatigueRainflowMatrix.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#FatigueRainflowMatrix.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#FatigueRainflowMatrix.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#FatigueRainflowMatrix.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#FatigueRainflowMatrix.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#FatigueRainflowMatrix.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#FatigueRainflowMatrix.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#FatigueRainflowMatrix.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#FatigueRainflowMatrix.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`MaximumMean`](#FatigueRainflowMatrix.MaximumMean)                                 | Gets the MaximumMean.                                                    |
| [`MaximumRange`](#FatigueRainflowMatrix.MaximumRange)                               | Gets the MaximumRange.                                                   |
| [`Minimum`](#FatigueRainflowMatrix.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#FatigueRainflowMatrix.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`MinimumMean`](#FatigueRainflowMatrix.MinimumMean)                                 | Gets the MinimumMean.                                                    |
| [`MinimumRange`](#FatigueRainflowMatrix.MinimumRange)                               | Gets the MinimumRange.                                                   |
| [`NamedSelections`](#FatigueRainflowMatrix.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#FatigueRainflowMatrix.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`OutputUnit`](#FatigueRainflowMatrix.OutputUnit)                                   | Gets or sets the OutputUnit.                                             |
| [`PhaseAngle`](#FatigueRainflowMatrix.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#FatigueRainflowMatrix.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#FatigueRainflowMatrix.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#FatigueRainflowMatrix.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#FatigueRainflowMatrix.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#FatigueRainflowMatrix.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#FatigueRainflowMatrix.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#FatigueRainflowMatrix.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#FatigueRainflowMatrix.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#FatigueRainflowMatrix.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#FatigueRainflowMatrix.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#FatigueRainflowMatrix.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#FatigueRainflowMatrix.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#FatigueRainflowMatrix.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#FatigueRainflowMatrix.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#FatigueRainflowMatrix.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#FatigueRainflowMatrix.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#FatigueRainflowMatrix.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="FatigueRainflowMatrix.AccelerationType"></a>

### *property* FatigueRainflowMatrix.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.BoundaryCondition"></a>

### *property* FatigueRainflowMatrix.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ChartDimensions"></a>

### *property* FatigueRainflowMatrix.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ChartViewingStyle"></a>

### *property* FatigueRainflowMatrix.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Children"></a>

### *property* FatigueRainflowMatrix.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Comments"></a>

### *property* FatigueRainflowMatrix.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CoordinateSystem"></a>

### *property* FatigueRainflowMatrix.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CurvesAppearanceDisplay"></a>

### *property* FatigueRainflowMatrix.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CutFrequency"></a>

### *property* FatigueRainflowMatrix.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DataModelObjectCategory"></a>

### *property* FatigueRainflowMatrix.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DeformationType"></a>

### *property* FatigueRainflowMatrix.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.DpfEvaluation"></a>

### *property* FatigueRainflowMatrix.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Duration"></a>

### *property* FatigueRainflowMatrix.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.EnhancedTracking"></a>

### *property* FatigueRainflowMatrix.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterMaximum"></a>

### *property* FatigueRainflowMatrix.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterMinimum"></a>

### *property* FatigueRainflowMatrix.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FilterType"></a>

### *property* FatigueRainflowMatrix.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.FrequencyAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GeometrySelectionString"></a>

### *property* FatigueRainflowMatrix.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Images"></a>

### *property* FatigueRainflowMatrix.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.InternalObject"></a>

### *property* FatigueRainflowMatrix.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.IsSolved"></a>

### *property* FatigueRainflowMatrix.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.LoadStepNumber"></a>

### *property* FatigueRainflowMatrix.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Location"></a>

### *property* FatigueRainflowMatrix.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Maximum"></a>

### *property* FatigueRainflowMatrix.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumFrequency"></a>

### *property* FatigueRainflowMatrix.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumMean"></a>

### *property* FatigueRainflowMatrix.MaximumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MaximumRange"></a>

### *property* FatigueRainflowMatrix.MaximumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Minimum"></a>

### *property* FatigueRainflowMatrix.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumFrequency"></a>

### *property* FatigueRainflowMatrix.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumMean"></a>

### *property* FatigueRainflowMatrix.MinimumMean *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMean.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.MinimumRange"></a>

### *property* FatigueRainflowMatrix.MinimumRange *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.NamedSelections"></a>

### *property* FatigueRainflowMatrix.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.NormalOrientation"></a>

### *property* FatigueRainflowMatrix.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.OutputUnit"></a>

### *property* FatigueRainflowMatrix.OutputUnit *: [Ansys.Mechanical.DataModel.Enums.UnitCategoryType](../../../../../Mechanical/DataModel/Enums/UnitCategoryType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.UnitCategoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputUnit.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PhaseAngle"></a>

### *property* FatigueRainflowMatrix.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Properties"></a>

### *property* FatigueRainflowMatrix.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RPMSelection"></a>

### *property* FatigueRainflowMatrix.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RealAtMaximumAmplitude"></a>

### *property* FatigueRainflowMatrix.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ReportedFrequency"></a>

### *property* FatigueRainflowMatrix.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RequestedFrequency"></a>

### *property* FatigueRainflowMatrix.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ResultChartType"></a>

### *property* FatigueRainflowMatrix.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.SectorNumber"></a>

### *property* FatigueRainflowMatrix.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ShearOrientation"></a>

### *property* FatigueRainflowMatrix.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.SpatialResolution"></a>

### *property* FatigueRainflowMatrix.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Spring"></a>

### *property* FatigueRainflowMatrix.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.StressStrainType"></a>

### *property* FatigueRainflowMatrix.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Suppressed"></a>

### *property* FatigueRainflowMatrix.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.TimeHistoryDisplay"></a>

### *property* FatigueRainflowMatrix.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.UseParentFrequencyRange"></a>

### *property* FatigueRainflowMatrix.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.VelocityType"></a>

### *property* FatigueRainflowMatrix.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.VisibleProperties"></a>

### *property* FatigueRainflowMatrix.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.XAxisValues"></a>

### *property* FatigueRainflowMatrix.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueRainflowMatrix.Activate"></a>

### FatigueRainflowMatrix.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.AddComment"></a>

### FatigueRainflowMatrix.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.AddImage"></a>

### FatigueRainflowMatrix.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ClearGeneratedData"></a>

### FatigueRainflowMatrix.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CopyTo"></a>

### FatigueRainflowMatrix.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.CreateParameter"></a>

### FatigueRainflowMatrix.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Delete"></a>

### FatigueRainflowMatrix.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.Duplicate"></a>

### FatigueRainflowMatrix.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.EvaluateAllResults"></a>

### FatigueRainflowMatrix.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.ExportAnimation"></a>

### FatigueRainflowMatrix.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetChildren"></a>

### FatigueRainflowMatrix.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GetParameter"></a>

### FatigueRainflowMatrix.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GroupAllSimilarChildren"></a>

### FatigueRainflowMatrix.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.GroupSimilarObjects"></a>

### FatigueRainflowMatrix.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PropertyByAPIName"></a>

### FatigueRainflowMatrix.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.PropertyByName"></a>

### FatigueRainflowMatrix.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RemoveParameter"></a>

### FatigueRainflowMatrix.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueRainflowMatrix.RenameBasedOnDefinition"></a>

### FatigueRainflowMatrix.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

