# `ChargeReactionFrequencyResponse`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ChargeReactionFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ChargeReactionFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ChargeReactionFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ChargeReactionFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ChargeReactionFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ChargeReactionFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ChargeReactionFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ChargeReactionFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ChargeReactionFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ChargeReactionFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ChargeReactionFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ChargeReactionFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ChargeReactionFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ChargeReactionFrequencyResponse.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ChargeReactionFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ChargeReactionFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ChargeReactionFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ChargeReactionFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ChargeReactionFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ChargeReactionFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ChargeReactionFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#ChargeReactionFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                               |
| [`BoundaryCondition`](#ChargeReactionFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                              |
| [`ChartDimensions`](#ChargeReactionFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`ChartViewingStyle`](#ChargeReactionFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                              |
| [`Children`](#ChargeReactionFrequencyResponse.Children)                                       | Gets the list of children.                                                                       |
| [`Comments`](#ChargeReactionFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                            |
| [`CoordinateSystem`](#ChargeReactionFrequencyResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`CurvesAppearanceDisplay`](#ChargeReactionFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`CutFrequency`](#ChargeReactionFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                   |
| [`DataModelObjectCategory`](#ChargeReactionFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                                                     |
| [`DeformationType`](#ChargeReactionFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`DpfEvaluation`](#ChargeReactionFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                  |
| [`Duration`](#ChargeReactionFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                       |
| [`EnhancedTracking`](#ChargeReactionFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                       |
| [`FilterMaximum`](#ChargeReactionFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#ChargeReactionFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                          |
| [`FilterType`](#ChargeReactionFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                     |
| [`FrequencyAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`GeometrySelectionString`](#ChargeReactionFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                        |
| [`Images`](#ChargeReactionFrequencyResponse.Images)                                           | Gets the list of associated images.                                                              |
| [`ImaginaryAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`InternalObject`](#ChargeReactionFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                               |
| [`IsSolved`](#ChargeReactionFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                               |
| [`LoadStepNumber`](#ChargeReactionFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                 |
| [`Location`](#ChargeReactionFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                       |
| [`LocationMethod`](#ChargeReactionFrequencyResponse.LocationMethod)                           | Gets or sets the LocationMethod.                                                                 |
| [`Maximum`](#ChargeReactionFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                |
| [`MaximumAmplitude`](#ChargeReactionFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#ChargeReactionFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                               |
| [`Minimum`](#ChargeReactionFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                |
| [`MinimumFrequency`](#ChargeReactionFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                               |
| [`NamedSelections`](#ChargeReactionFrequencyResponse.NamedSelections)                         | Gets or sets the NamedSelections.                                                                |
| [`NormalOrientation`](#ChargeReactionFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                              |
| [`PhaseAngle`](#ChargeReactionFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                             |
| [`Properties`](#ChargeReactionFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                     |
| [`RPMSelection`](#ChargeReactionFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                         |
| [`RealAtMaximumAmplitude`](#ChargeReactionFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RemotePointSelection`](#ChargeReactionFrequencyResponse.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                           |
| [`ReportedFrequency`](#ChargeReactionFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                      |
| [`RequestedFrequency`](#ChargeReactionFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                             |
| [`ResultChartType`](#ChargeReactionFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                        |
| [`SectorNumber`](#ChargeReactionFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                   |
| [`ShearOrientation`](#ChargeReactionFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                               |
| [`SpatialResolution`](#ChargeReactionFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                              |
| [`Spring`](#ChargeReactionFrequencyResponse.Spring)                                           | Gets or sets the Spring.                                                                         |
| [`StressStrainType`](#ChargeReactionFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                               |
| [`Suppressed`](#ChargeReactionFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                     |
| [`TimeHistoryDisplay`](#ChargeReactionFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                             |
| [`UseParentFrequencyRange`](#ChargeReactionFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                        |
| [`VelocityType`](#ChargeReactionFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                   |
| [`VisibleProperties`](#ChargeReactionFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                    |
| [`XAxisValues`](#ChargeReactionFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="ChargeReactionFrequencyResponse.AccelerationType"></a>

### *property* ChargeReactionFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.BoundaryCondition"></a>

### *property* ChargeReactionFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ChartDimensions"></a>

### *property* ChargeReactionFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ChartViewingStyle"></a>

### *property* ChargeReactionFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Children"></a>

### *property* ChargeReactionFrequencyResponse.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Comments"></a>

### *property* ChargeReactionFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CoordinateSystem"></a>

### *property* ChargeReactionFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* ChargeReactionFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CutFrequency"></a>

### *property* ChargeReactionFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DataModelObjectCategory"></a>

### *property* ChargeReactionFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DeformationType"></a>

### *property* ChargeReactionFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.DpfEvaluation"></a>

### *property* ChargeReactionFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Duration"></a>

### *property* ChargeReactionFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.EnhancedTracking"></a>

### *property* ChargeReactionFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterMaximum"></a>

### *property* ChargeReactionFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterMinimum"></a>

### *property* ChargeReactionFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FilterType"></a>

### *property* ChargeReactionFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GeometrySelectionString"></a>

### *property* ChargeReactionFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Images"></a>

### *property* ChargeReactionFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.InternalObject"></a>

### *property* ChargeReactionFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.IsSolved"></a>

### *property* ChargeReactionFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.LoadStepNumber"></a>

### *property* ChargeReactionFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Location"></a>

### *property* ChargeReactionFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.LocationMethod"></a>

### *property* ChargeReactionFrequencyResponse.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Maximum"></a>

### *property* ChargeReactionFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MaximumFrequency"></a>

### *property* ChargeReactionFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Minimum"></a>

### *property* ChargeReactionFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.MinimumFrequency"></a>

### *property* ChargeReactionFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.NamedSelections"></a>

### *property* ChargeReactionFrequencyResponse.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.NormalOrientation"></a>

### *property* ChargeReactionFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PhaseAngle"></a>

### *property* ChargeReactionFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Properties"></a>

### *property* ChargeReactionFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RPMSelection"></a>

### *property* ChargeReactionFrequencyResponse.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* ChargeReactionFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RemotePointSelection"></a>

### *property* ChargeReactionFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ReportedFrequency"></a>

### *property* ChargeReactionFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RequestedFrequency"></a>

### *property* ChargeReactionFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ResultChartType"></a>

### *property* ChargeReactionFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.SectorNumber"></a>

### *property* ChargeReactionFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ShearOrientation"></a>

### *property* ChargeReactionFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.SpatialResolution"></a>

### *property* ChargeReactionFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Spring"></a>

### *property* ChargeReactionFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.StressStrainType"></a>

### *property* ChargeReactionFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Suppressed"></a>

### *property* ChargeReactionFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.TimeHistoryDisplay"></a>

### *property* ChargeReactionFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.UseParentFrequencyRange"></a>

### *property* ChargeReactionFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.VelocityType"></a>

### *property* ChargeReactionFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.VisibleProperties"></a>

### *property* ChargeReactionFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.XAxisValues"></a>

### *property* ChargeReactionFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ChargeReactionFrequencyResponse.Activate"></a>

### ChargeReactionFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.AddComment"></a>

### ChargeReactionFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.AddImage"></a>

### ChargeReactionFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ClearGeneratedData"></a>

### ChargeReactionFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CopyTo"></a>

### ChargeReactionFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.CreateParameter"></a>

### ChargeReactionFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Delete"></a>

### ChargeReactionFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.Duplicate"></a>

### ChargeReactionFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.EvaluateAllResults"></a>

### ChargeReactionFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.ExportAnimation"></a>

### ChargeReactionFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetChildren"></a>

### ChargeReactionFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GetParameter"></a>

### ChargeReactionFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GroupAllSimilarChildren"></a>

### ChargeReactionFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.GroupSimilarObjects"></a>

### ChargeReactionFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PropertyByAPIName"></a>

### ChargeReactionFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.PropertyByName"></a>

### ChargeReactionFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RemoveParameter"></a>

### ChargeReactionFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ChargeReactionFrequencyResponse.RenameBasedOnDefinition"></a>

### ChargeReactionFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

