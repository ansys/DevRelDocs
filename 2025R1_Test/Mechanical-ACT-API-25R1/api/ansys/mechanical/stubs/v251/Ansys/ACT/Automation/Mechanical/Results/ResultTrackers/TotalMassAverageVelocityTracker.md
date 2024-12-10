# `TotalMassAverageVelocityTracker`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TotalMassAverageVelocityTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TotalMassAverageVelocityTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalMassAverageVelocityTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalMassAverageVelocityTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#TotalMassAverageVelocityTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#TotalMassAverageVelocityTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalMassAverageVelocityTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalMassAverageVelocityTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalMassAverageVelocityTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#TotalMassAverageVelocityTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalMassAverageVelocityTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#TotalMassAverageVelocityTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalMassAverageVelocityTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#TotalMassAverageVelocityTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalMassAverageVelocityTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalMassAverageVelocityTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalMassAverageVelocityTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#TotalMassAverageVelocityTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalMassAverageVelocityTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalMassAverageVelocityTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalMassAverageVelocityTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#TotalMassAverageVelocityTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#TotalMassAverageVelocityTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#TotalMassAverageVelocityTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#TotalMassAverageVelocityTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#TotalMassAverageVelocityTracker.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#TotalMassAverageVelocityTracker.Comments)                                       | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#TotalMassAverageVelocityTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#TotalMassAverageVelocityTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#TotalMassAverageVelocityTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#TotalMassAverageVelocityTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#TotalMassAverageVelocityTracker.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#TotalMassAverageVelocityTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#TotalMassAverageVelocityTracker.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#TotalMassAverageVelocityTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#TotalMassAverageVelocityTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#TotalMassAverageVelocityTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#TotalMassAverageVelocityTracker.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#TotalMassAverageVelocityTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#TotalMassAverageVelocityTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#TotalMassAverageVelocityTracker.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#TotalMassAverageVelocityTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#TotalMassAverageVelocityTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#TotalMassAverageVelocityTracker.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#TotalMassAverageVelocityTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#TotalMassAverageVelocityTracker.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#TotalMassAverageVelocityTracker.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#TotalMassAverageVelocityTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#TotalMassAverageVelocityTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#TotalMassAverageVelocityTracker.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#TotalMassAverageVelocityTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#TotalMassAverageVelocityTracker.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#TotalMassAverageVelocityTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#TotalMassAverageVelocityTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#TotalMassAverageVelocityTracker.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#TotalMassAverageVelocityTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#TotalMassAverageVelocityTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#TotalMassAverageVelocityTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#TotalMassAverageVelocityTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#TotalMassAverageVelocityTracker.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#TotalMassAverageVelocityTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#TotalMassAverageVelocityTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#TotalMassAverageVelocityTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#TotalMassAverageVelocityTracker.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#TotalMassAverageVelocityTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#TotalMassAverageVelocityTracker.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#TotalMassAverageVelocityTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#TotalMassAverageVelocityTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#TotalMassAverageVelocityTracker.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#TotalMassAverageVelocityTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#TotalMassAverageVelocityTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="TotalMassAverageVelocityTracker.AccelerationType"></a>

### *property* TotalMassAverageVelocityTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.BoundaryCondition"></a>

### *property* TotalMassAverageVelocityTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ChartDimensions"></a>

### *property* TotalMassAverageVelocityTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ChartViewingStyle"></a>

### *property* TotalMassAverageVelocityTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Children"></a>

### *property* TotalMassAverageVelocityTracker.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Comments"></a>

### *property* TotalMassAverageVelocityTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CoordinateSystem"></a>

### *property* TotalMassAverageVelocityTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CurvesAppearanceDisplay"></a>

### *property* TotalMassAverageVelocityTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CutFrequency"></a>

### *property* TotalMassAverageVelocityTracker.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.DataModelObjectCategory"></a>

### *property* TotalMassAverageVelocityTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.DeformationType"></a>

### *property* TotalMassAverageVelocityTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.DpfEvaluation"></a>

### *property* TotalMassAverageVelocityTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Duration"></a>

### *property* TotalMassAverageVelocityTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.EnhancedTracking"></a>

### *property* TotalMassAverageVelocityTracker.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.FilterMaximum"></a>

### *property* TotalMassAverageVelocityTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.FilterMinimum"></a>

### *property* TotalMassAverageVelocityTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.FilterType"></a>

### *property* TotalMassAverageVelocityTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.FrequencyAtMaximumAmplitude"></a>

### *property* TotalMassAverageVelocityTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GeometrySelectionString"></a>

### *property* TotalMassAverageVelocityTracker.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Images"></a>

### *property* TotalMassAverageVelocityTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* TotalMassAverageVelocityTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.InternalObject"></a>

### *property* TotalMassAverageVelocityTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.IsSolved"></a>

### *property* TotalMassAverageVelocityTracker.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.LoadStepNumber"></a>

### *property* TotalMassAverageVelocityTracker.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Location"></a>

### *property* TotalMassAverageVelocityTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Maximum"></a>

### *property* TotalMassAverageVelocityTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.MaximumAmplitude"></a>

### *property* TotalMassAverageVelocityTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.MaximumFrequency"></a>

### *property* TotalMassAverageVelocityTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Minimum"></a>

### *property* TotalMassAverageVelocityTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.MinimumFrequency"></a>

### *property* TotalMassAverageVelocityTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.NamedSelections"></a>

### *property* TotalMassAverageVelocityTracker.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.NormalOrientation"></a>

### *property* TotalMassAverageVelocityTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.PhaseAngle"></a>

### *property* TotalMassAverageVelocityTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Properties"></a>

### *property* TotalMassAverageVelocityTracker.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RPMSelection"></a>

### *property* TotalMassAverageVelocityTracker.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RealAtMaximumAmplitude"></a>

### *property* TotalMassAverageVelocityTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ReportedFrequency"></a>

### *property* TotalMassAverageVelocityTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RequestedFrequency"></a>

### *property* TotalMassAverageVelocityTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ResultChartType"></a>

### *property* TotalMassAverageVelocityTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.SectorNumber"></a>

### *property* TotalMassAverageVelocityTracker.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ShearOrientation"></a>

### *property* TotalMassAverageVelocityTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.SpatialResolution"></a>

### *property* TotalMassAverageVelocityTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Spring"></a>

### *property* TotalMassAverageVelocityTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.StressStrainType"></a>

### *property* TotalMassAverageVelocityTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Suppressed"></a>

### *property* TotalMassAverageVelocityTracker.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.TimeHistoryDisplay"></a>

### *property* TotalMassAverageVelocityTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.UseParentFrequencyRange"></a>

### *property* TotalMassAverageVelocityTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.VelocityType"></a>

### *property* TotalMassAverageVelocityTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.VisibleProperties"></a>

### *property* TotalMassAverageVelocityTracker.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.XAxisValues"></a>

### *property* TotalMassAverageVelocityTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalMassAverageVelocityTracker.Activate"></a>

### TotalMassAverageVelocityTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.AddComment"></a>

### TotalMassAverageVelocityTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.AddImage"></a>

### TotalMassAverageVelocityTracker.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ClearGeneratedData"></a>

### TotalMassAverageVelocityTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CopyTo"></a>

### TotalMassAverageVelocityTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.CreateParameter"></a>

### TotalMassAverageVelocityTracker.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Delete"></a>

### TotalMassAverageVelocityTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.Duplicate"></a>

### TotalMassAverageVelocityTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.EvaluateAllResults"></a>

### TotalMassAverageVelocityTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.ExportAnimation"></a>

### TotalMassAverageVelocityTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetChildren"></a>

### TotalMassAverageVelocityTracker.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GetParameter"></a>

### TotalMassAverageVelocityTracker.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GroupAllSimilarChildren"></a>

### TotalMassAverageVelocityTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.GroupSimilarObjects"></a>

### TotalMassAverageVelocityTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.PropertyByAPIName"></a>

### TotalMassAverageVelocityTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.PropertyByName"></a>

### TotalMassAverageVelocityTracker.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RemoveParameter"></a>

### TotalMassAverageVelocityTracker.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalMassAverageVelocityTracker.RenameBasedOnDefinition"></a>

### TotalMassAverageVelocityTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

