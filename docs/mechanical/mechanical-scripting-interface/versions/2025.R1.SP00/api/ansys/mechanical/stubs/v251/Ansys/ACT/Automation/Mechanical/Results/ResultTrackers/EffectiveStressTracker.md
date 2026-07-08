# `EffectiveStressTracker`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.EffectiveStressTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.EffectiveStressTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EffectiveStressTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EffectiveStressTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#EffectiveStressTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#EffectiveStressTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#EffectiveStressTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#EffectiveStressTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EffectiveStressTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#EffectiveStressTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#EffectiveStressTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#EffectiveStressTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#EffectiveStressTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#EffectiveStressTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#EffectiveStressTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#EffectiveStressTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EffectiveStressTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#EffectiveStressTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#EffectiveStressTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EffectiveStressTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#EffectiveStressTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#EffectiveStressTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#EffectiveStressTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#EffectiveStressTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#EffectiveStressTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#EffectiveStressTracker.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#EffectiveStressTracker.Comments)                                       | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#EffectiveStressTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#EffectiveStressTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#EffectiveStressTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#EffectiveStressTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#EffectiveStressTracker.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#EffectiveStressTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#EffectiveStressTracker.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#EffectiveStressTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#EffectiveStressTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#EffectiveStressTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#EffectiveStressTracker.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#EffectiveStressTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#EffectiveStressTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#EffectiveStressTracker.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#EffectiveStressTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#EffectiveStressTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#EffectiveStressTracker.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#EffectiveStressTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#EffectiveStressTracker.Location)                                       | Gets or sets the Location.                                               |
| [`LocationCoordinateSystem`](#EffectiveStressTracker.LocationCoordinateSystem)       | Gets or sets the LocationCoordinateSystem.                               |
| [`LocationMethod`](#EffectiveStressTracker.LocationMethod)                           | Gets or sets the LocationMethod.                                         |
| [`LocationXCoordinate`](#EffectiveStressTracker.LocationXCoordinate)                 | Gets or sets the LocationXCoordinate.                                    |
| [`LocationYCoordinate`](#EffectiveStressTracker.LocationYCoordinate)                 | Gets or sets the LocationYCoordinate.                                    |
| [`LocationZCoordinate`](#EffectiveStressTracker.LocationZCoordinate)                 | Gets or sets the LocationZCoordinate.                                    |
| [`Maximum`](#EffectiveStressTracker.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#EffectiveStressTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#EffectiveStressTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#EffectiveStressTracker.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#EffectiveStressTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#EffectiveStressTracker.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#EffectiveStressTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#EffectiveStressTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#EffectiveStressTracker.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#EffectiveStressTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#EffectiveStressTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#EffectiveStressTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#EffectiveStressTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#EffectiveStressTracker.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#EffectiveStressTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#EffectiveStressTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#EffectiveStressTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#EffectiveStressTracker.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#EffectiveStressTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#EffectiveStressTracker.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#EffectiveStressTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#EffectiveStressTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#EffectiveStressTracker.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#EffectiveStressTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#EffectiveStressTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="EffectiveStressTracker.AccelerationType"></a>

### *property* EffectiveStressTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.BoundaryCondition"></a>

### *property* EffectiveStressTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.ChartDimensions"></a>

### *property* EffectiveStressTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.ChartViewingStyle"></a>

### *property* EffectiveStressTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Children"></a>

### *property* EffectiveStressTracker.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Comments"></a>

### *property* EffectiveStressTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.CoordinateSystem"></a>

### *property* EffectiveStressTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.CurvesAppearanceDisplay"></a>

### *property* EffectiveStressTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.CutFrequency"></a>

### *property* EffectiveStressTracker.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.DataModelObjectCategory"></a>

### *property* EffectiveStressTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.DeformationType"></a>

### *property* EffectiveStressTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.DpfEvaluation"></a>

### *property* EffectiveStressTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Duration"></a>

### *property* EffectiveStressTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.EnhancedTracking"></a>

### *property* EffectiveStressTracker.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.FilterMaximum"></a>

### *property* EffectiveStressTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.FilterMinimum"></a>

### *property* EffectiveStressTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.FilterType"></a>

### *property* EffectiveStressTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.FrequencyAtMaximumAmplitude"></a>

### *property* EffectiveStressTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.GeometrySelectionString"></a>

### *property* EffectiveStressTracker.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Images"></a>

### *property* EffectiveStressTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* EffectiveStressTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.InternalObject"></a>

### *property* EffectiveStressTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.IsSolved"></a>

### *property* EffectiveStressTracker.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.LoadStepNumber"></a>

### *property* EffectiveStressTracker.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Location"></a>

### *property* EffectiveStressTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.LocationCoordinateSystem"></a>

### *property* EffectiveStressTracker.LocationCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.LocationMethod"></a>

### *property* EffectiveStressTracker.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.LocationXCoordinate"></a>

### *property* EffectiveStressTracker.LocationXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.LocationYCoordinate"></a>

### *property* EffectiveStressTracker.LocationYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.LocationZCoordinate"></a>

### *property* EffectiveStressTracker.LocationZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Maximum"></a>

### *property* EffectiveStressTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.MaximumAmplitude"></a>

### *property* EffectiveStressTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.MaximumFrequency"></a>

### *property* EffectiveStressTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Minimum"></a>

### *property* EffectiveStressTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.MinimumFrequency"></a>

### *property* EffectiveStressTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.NamedSelections"></a>

### *property* EffectiveStressTracker.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.NormalOrientation"></a>

### *property* EffectiveStressTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.PhaseAngle"></a>

### *property* EffectiveStressTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Properties"></a>

### *property* EffectiveStressTracker.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.RPMSelection"></a>

### *property* EffectiveStressTracker.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.RealAtMaximumAmplitude"></a>

### *property* EffectiveStressTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.ReportedFrequency"></a>

### *property* EffectiveStressTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.RequestedFrequency"></a>

### *property* EffectiveStressTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.ResultChartType"></a>

### *property* EffectiveStressTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.SectorNumber"></a>

### *property* EffectiveStressTracker.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.ShearOrientation"></a>

### *property* EffectiveStressTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.SpatialResolution"></a>

### *property* EffectiveStressTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Spring"></a>

### *property* EffectiveStressTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.StressStrainType"></a>

### *property* EffectiveStressTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Suppressed"></a>

### *property* EffectiveStressTracker.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.TimeHistoryDisplay"></a>

### *property* EffectiveStressTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.UseParentFrequencyRange"></a>

### *property* EffectiveStressTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.VelocityType"></a>

### *property* EffectiveStressTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.VisibleProperties"></a>

### *property* EffectiveStressTracker.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.XAxisValues"></a>

### *property* EffectiveStressTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EffectiveStressTracker.Activate"></a>

### EffectiveStressTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.AddComment"></a>

### EffectiveStressTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.AddImage"></a>

### EffectiveStressTracker.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.ClearGeneratedData"></a>

### EffectiveStressTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.CopyTo"></a>

### EffectiveStressTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.CreateParameter"></a>

### EffectiveStressTracker.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Delete"></a>

### EffectiveStressTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.Duplicate"></a>

### EffectiveStressTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.EvaluateAllResults"></a>

### EffectiveStressTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.ExportAnimation"></a>

### EffectiveStressTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.GetChildren"></a>

### EffectiveStressTracker.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.GetParameter"></a>

### EffectiveStressTracker.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.GroupAllSimilarChildren"></a>

### EffectiveStressTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.GroupSimilarObjects"></a>

### EffectiveStressTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.PropertyByAPIName"></a>

### EffectiveStressTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.PropertyByName"></a>

### EffectiveStressTracker.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.RemoveParameter"></a>

### EffectiveStressTracker.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EffectiveStressTracker.RenameBasedOnDefinition"></a>

### EffectiveStressTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

