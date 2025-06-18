# `VoltageFrequencyResponse`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VoltageFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VoltageFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VoltageFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VoltageFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#VoltageFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#VoltageFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#VoltageFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#VoltageFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VoltageFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#VoltageFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VoltageFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#VoltageFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#VoltageFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#VoltageFrequencyResponse.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VoltageFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VoltageFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VoltageFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#VoltageFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VoltageFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VoltageFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VoltageFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#VoltageFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                               |
| [`BoundaryCondition`](#VoltageFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                              |
| [`ChartDimensions`](#VoltageFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`ChartViewingStyle`](#VoltageFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                              |
| [`Children`](#VoltageFrequencyResponse.Children)                                       | Gets the list of children.                                                                       |
| [`Comments`](#VoltageFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                            |
| [`CoordinateSystem`](#VoltageFrequencyResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`CurvesAppearanceDisplay`](#VoltageFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`CutFrequency`](#VoltageFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                   |
| [`DataModelObjectCategory`](#VoltageFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                                                     |
| [`DeformationType`](#VoltageFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`DpfEvaluation`](#VoltageFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                  |
| [`Duration`](#VoltageFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                       |
| [`EnhancedTracking`](#VoltageFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                       |
| [`FilterMaximum`](#VoltageFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#VoltageFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                          |
| [`FilterType`](#VoltageFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                     |
| [`FrequencyAtMaximumAmplitude`](#VoltageFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`GeometrySelectionString`](#VoltageFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                        |
| [`Images`](#VoltageFrequencyResponse.Images)                                           | Gets the list of associated images.                                                              |
| [`ImaginaryAtMaximumAmplitude`](#VoltageFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`InternalObject`](#VoltageFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                               |
| [`IsSolved`](#VoltageFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                               |
| [`LoadStepNumber`](#VoltageFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                 |
| [`Location`](#VoltageFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                       |
| [`Maximum`](#VoltageFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                |
| [`MaximumAmplitude`](#VoltageFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#VoltageFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                               |
| [`Minimum`](#VoltageFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                |
| [`MinimumFrequency`](#VoltageFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                               |
| [`NamedSelections`](#VoltageFrequencyResponse.NamedSelections)                         | Gets or sets the NamedSelections.                                                                |
| [`NormalOrientation`](#VoltageFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                              |
| [`PhaseAngle`](#VoltageFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                             |
| [`Properties`](#VoltageFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                     |
| [`RPMSelection`](#VoltageFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                         |
| [`RealAtMaximumAmplitude`](#VoltageFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RemotePointSelection`](#VoltageFrequencyResponse.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                           |
| [`ReportedFrequency`](#VoltageFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                      |
| [`RequestedFrequency`](#VoltageFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                             |
| [`ResultChartType`](#VoltageFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                        |
| [`SectorNumber`](#VoltageFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                   |
| [`ShearOrientation`](#VoltageFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                               |
| [`SpatialResolution`](#VoltageFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                              |
| [`Spring`](#VoltageFrequencyResponse.Spring)                                           | Gets or sets the Spring.                                                                         |
| [`StressStrainType`](#VoltageFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                               |
| [`Suppressed`](#VoltageFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                     |
| [`TimeHistoryDisplay`](#VoltageFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                             |
| [`UseParentFrequencyRange`](#VoltageFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                        |
| [`VelocityType`](#VoltageFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                   |
| [`VisibleProperties`](#VoltageFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                    |
| [`XAxisValues`](#VoltageFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="VoltageFrequencyResponse.AccelerationType"></a>

### *property* VoltageFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.BoundaryCondition"></a>

### *property* VoltageFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.ChartDimensions"></a>

### *property* VoltageFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.ChartViewingStyle"></a>

### *property* VoltageFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Children"></a>

### *property* VoltageFrequencyResponse.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Comments"></a>

### *property* VoltageFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.CoordinateSystem"></a>

### *property* VoltageFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* VoltageFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.CutFrequency"></a>

### *property* VoltageFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.DataModelObjectCategory"></a>

### *property* VoltageFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.DeformationType"></a>

### *property* VoltageFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.DpfEvaluation"></a>

### *property* VoltageFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Duration"></a>

### *property* VoltageFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.EnhancedTracking"></a>

### *property* VoltageFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.FilterMaximum"></a>

### *property* VoltageFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.FilterMinimum"></a>

### *property* VoltageFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.FilterType"></a>

### *property* VoltageFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* VoltageFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.GeometrySelectionString"></a>

### *property* VoltageFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Images"></a>

### *property* VoltageFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* VoltageFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.InternalObject"></a>

### *property* VoltageFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.IsSolved"></a>

### *property* VoltageFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.LoadStepNumber"></a>

### *property* VoltageFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Location"></a>

### *property* VoltageFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Maximum"></a>

### *property* VoltageFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.MaximumAmplitude"></a>

### *property* VoltageFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.MaximumFrequency"></a>

### *property* VoltageFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Minimum"></a>

### *property* VoltageFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.MinimumFrequency"></a>

### *property* VoltageFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.NamedSelections"></a>

### *property* VoltageFrequencyResponse.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.NormalOrientation"></a>

### *property* VoltageFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.PhaseAngle"></a>

### *property* VoltageFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Properties"></a>

### *property* VoltageFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.RPMSelection"></a>

### *property* VoltageFrequencyResponse.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* VoltageFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.RemotePointSelection"></a>

### *property* VoltageFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.ReportedFrequency"></a>

### *property* VoltageFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.RequestedFrequency"></a>

### *property* VoltageFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.ResultChartType"></a>

### *property* VoltageFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.SectorNumber"></a>

### *property* VoltageFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.ShearOrientation"></a>

### *property* VoltageFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.SpatialResolution"></a>

### *property* VoltageFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Spring"></a>

### *property* VoltageFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.StressStrainType"></a>

### *property* VoltageFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Suppressed"></a>

### *property* VoltageFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.TimeHistoryDisplay"></a>

### *property* VoltageFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.UseParentFrequencyRange"></a>

### *property* VoltageFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.VelocityType"></a>

### *property* VoltageFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.VisibleProperties"></a>

### *property* VoltageFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.XAxisValues"></a>

### *property* VoltageFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VoltageFrequencyResponse.Activate"></a>

### VoltageFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.AddComment"></a>

### VoltageFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.AddImage"></a>

### VoltageFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.ClearGeneratedData"></a>

### VoltageFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.CopyTo"></a>

### VoltageFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.CreateParameter"></a>

### VoltageFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Delete"></a>

### VoltageFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.Duplicate"></a>

### VoltageFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.EvaluateAllResults"></a>

### VoltageFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.ExportAnimation"></a>

### VoltageFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.GetChildren"></a>

### VoltageFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.GetParameter"></a>

### VoltageFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.GroupAllSimilarChildren"></a>

### VoltageFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.GroupSimilarObjects"></a>

### VoltageFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.PropertyByAPIName"></a>

### VoltageFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.PropertyByName"></a>

### VoltageFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.RemoveParameter"></a>

### VoltageFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageFrequencyResponse.RenameBasedOnDefinition"></a>

### VoltageFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

