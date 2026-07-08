# `StressFrequencyResponse`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.StressFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.StressFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StressFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#StressFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#StressFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#StressFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#StressFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#StressFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#StressFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#StressFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#StressFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#StressFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#StressFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#StressFrequencyResponse.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#StressFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#StressFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#StressFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#StressFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#StressFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#StressFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#StressFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                               |
| [`BoundaryCondition`](#StressFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                              |
| [`ChartDimensions`](#StressFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`ChartViewingStyle`](#StressFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                              |
| [`Children`](#StressFrequencyResponse.Children)                                       | Gets the list of children.                                                                       |
| [`Comments`](#StressFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                            |
| [`CoordinateSystem`](#StressFrequencyResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`CurvesAppearanceDisplay`](#StressFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`CutFrequency`](#StressFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                   |
| [`DataModelObjectCategory`](#StressFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                                                     |
| [`DeformationType`](#StressFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`DpfEvaluation`](#StressFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                  |
| [`Duration`](#StressFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                       |
| [`EnhancedTracking`](#StressFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                       |
| [`FilterMaximum`](#StressFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#StressFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                          |
| [`FilterType`](#StressFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                     |
| [`FrequencyAtMaximumAmplitude`](#StressFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`GeometrySelectionString`](#StressFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                        |
| [`Images`](#StressFrequencyResponse.Images)                                           | Gets the list of associated images.                                                              |
| [`ImaginaryAtMaximumAmplitude`](#StressFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`InternalObject`](#StressFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                               |
| [`IsSolved`](#StressFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                               |
| [`LoadStepNumber`](#StressFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                 |
| [`Location`](#StressFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                       |
| [`Maximum`](#StressFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                |
| [`MaximumAmplitude`](#StressFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#StressFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                               |
| [`Minimum`](#StressFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                |
| [`MinimumFrequency`](#StressFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                               |
| [`NamedSelections`](#StressFrequencyResponse.NamedSelections)                         | Gets or sets the NamedSelections.                                                                |
| [`NormalOrientation`](#StressFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                              |
| [`PhaseAngle`](#StressFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                             |
| [`Properties`](#StressFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                     |
| [`RPMSelection`](#StressFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                         |
| [`RealAtMaximumAmplitude`](#StressFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RemotePointSelection`](#StressFrequencyResponse.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                           |
| [`ReportedFrequency`](#StressFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                      |
| [`RequestedFrequency`](#StressFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                             |
| [`ResultChartType`](#StressFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                        |
| [`SectorNumber`](#StressFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                   |
| [`ShearOrientation`](#StressFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                               |
| [`SpatialResolution`](#StressFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                              |
| [`Spring`](#StressFrequencyResponse.Spring)                                           | Gets or sets the Spring.                                                                         |
| [`StressStrainType`](#StressFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                               |
| [`Suppressed`](#StressFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                     |
| [`TimeHistoryDisplay`](#StressFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                             |
| [`UseParentFrequencyRange`](#StressFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                        |
| [`VelocityType`](#StressFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                   |
| [`VisibleProperties`](#StressFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                    |
| [`XAxisValues`](#StressFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="StressFrequencyResponse.AccelerationType"></a>

### *property* StressFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.BoundaryCondition"></a>

### *property* StressFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ChartDimensions"></a>

### *property* StressFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ChartViewingStyle"></a>

### *property* StressFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Children"></a>

### *property* StressFrequencyResponse.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Comments"></a>

### *property* StressFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CoordinateSystem"></a>

### *property* StressFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* StressFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CutFrequency"></a>

### *property* StressFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.DataModelObjectCategory"></a>

### *property* StressFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.DeformationType"></a>

### *property* StressFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.DpfEvaluation"></a>

### *property* StressFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Duration"></a>

### *property* StressFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.EnhancedTracking"></a>

### *property* StressFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.FilterMaximum"></a>

### *property* StressFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.FilterMinimum"></a>

### *property* StressFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.FilterType"></a>

### *property* StressFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* StressFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GeometrySelectionString"></a>

### *property* StressFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Images"></a>

### *property* StressFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* StressFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.InternalObject"></a>

### *property* StressFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.IsSolved"></a>

### *property* StressFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.LoadStepNumber"></a>

### *property* StressFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Location"></a>

### *property* StressFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Maximum"></a>

### *property* StressFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.MaximumAmplitude"></a>

### *property* StressFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.MaximumFrequency"></a>

### *property* StressFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Minimum"></a>

### *property* StressFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.MinimumFrequency"></a>

### *property* StressFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.NamedSelections"></a>

### *property* StressFrequencyResponse.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.NormalOrientation"></a>

### *property* StressFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.PhaseAngle"></a>

### *property* StressFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Properties"></a>

### *property* StressFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RPMSelection"></a>

### *property* StressFrequencyResponse.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* StressFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RemotePointSelection"></a>

### *property* StressFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ReportedFrequency"></a>

### *property* StressFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RequestedFrequency"></a>

### *property* StressFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ResultChartType"></a>

### *property* StressFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.SectorNumber"></a>

### *property* StressFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ShearOrientation"></a>

### *property* StressFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.SpatialResolution"></a>

### *property* StressFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Spring"></a>

### *property* StressFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.StressStrainType"></a>

### *property* StressFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Suppressed"></a>

### *property* StressFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.TimeHistoryDisplay"></a>

### *property* StressFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.UseParentFrequencyRange"></a>

### *property* StressFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.VelocityType"></a>

### *property* StressFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.VisibleProperties"></a>

### *property* StressFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.XAxisValues"></a>

### *property* StressFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressFrequencyResponse.Activate"></a>

### StressFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.AddComment"></a>

### StressFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.AddImage"></a>

### StressFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ClearGeneratedData"></a>

### StressFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CopyTo"></a>

### StressFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.CreateParameter"></a>

### StressFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Delete"></a>

### StressFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.Duplicate"></a>

### StressFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.EvaluateAllResults"></a>

### StressFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.ExportAnimation"></a>

### StressFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GetChildren"></a>

### StressFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GetParameter"></a>

### StressFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GroupAllSimilarChildren"></a>

### StressFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.GroupSimilarObjects"></a>

### StressFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.PropertyByAPIName"></a>

### StressFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.PropertyByName"></a>

### StressFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RemoveParameter"></a>

### StressFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressFrequencyResponse.RenameBasedOnDefinition"></a>

### StressFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

