# `VelocityFrequencyResponse`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityFrequencyResponse"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityFrequencyResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VelocityFrequencyResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VelocityFrequencyResponse.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#VelocityFrequencyResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#VelocityFrequencyResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#VelocityFrequencyResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#VelocityFrequencyResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VelocityFrequencyResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#VelocityFrequencyResponse.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VelocityFrequencyResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#VelocityFrequencyResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#VelocityFrequencyResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#VelocityFrequencyResponse.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VelocityFrequencyResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VelocityFrequencyResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VelocityFrequencyResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#VelocityFrequencyResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VelocityFrequencyResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VelocityFrequencyResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VelocityFrequencyResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#VelocityFrequencyResponse.AccelerationType)                       | Gets or sets the AccelerationType.                                                               |
| [`BoundaryCondition`](#VelocityFrequencyResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                              |
| [`ChartDimensions`](#VelocityFrequencyResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`ChartViewingStyle`](#VelocityFrequencyResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                              |
| [`Children`](#VelocityFrequencyResponse.Children)                                       | Gets the list of children.                                                                       |
| [`Comments`](#VelocityFrequencyResponse.Comments)                                       | Gets the list of associated comments.                                                            |
| [`ContactRegion`](#VelocityFrequencyResponse.ContactRegion)                             | Gets or sets the ContactRegion.                                                                  |
| [`CoordinateSystem`](#VelocityFrequencyResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`CurvesAppearanceDisplay`](#VelocityFrequencyResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`CutFrequency`](#VelocityFrequencyResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                                                   |
| [`DataModelObjectCategory`](#VelocityFrequencyResponse.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                                                     |
| [`DeformationType`](#VelocityFrequencyResponse.DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`DpfEvaluation`](#VelocityFrequencyResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                  |
| [`Duration`](#VelocityFrequencyResponse.Duration)                                       | Gets or sets the Duration.                                                                       |
| [`EnhancedTracking`](#VelocityFrequencyResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                       |
| [`FilterMaximum`](#VelocityFrequencyResponse.FilterMaximum)                             | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#VelocityFrequencyResponse.FilterMinimum)                             | Gets the FilterMinimum.                                                                          |
| [`FilterType`](#VelocityFrequencyResponse.FilterType)                                   | Gets or sets the FilterType.                                                                     |
| [`FrequencyAtMaximumAmplitude`](#VelocityFrequencyResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`GeometrySelectionString`](#VelocityFrequencyResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                        |
| [`Images`](#VelocityFrequencyResponse.Images)                                           | Gets the list of associated images.                                                              |
| [`ImaginaryAtMaximumAmplitude`](#VelocityFrequencyResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`InternalObject`](#VelocityFrequencyResponse.InternalObject)                           | Gets the internal object. For advanced usage only.                                               |
| [`IsSolved`](#VelocityFrequencyResponse.IsSolved)                                       | Gets the IsSolved.                                                                               |
| [`LoadStepNumber`](#VelocityFrequencyResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                 |
| [`Location`](#VelocityFrequencyResponse.Location)                                       | Gets or sets the Location.                                                                       |
| [`Maximum`](#VelocityFrequencyResponse.Maximum)                                         | Gets the Maximum.                                                                                |
| [`MaximumAmplitude`](#VelocityFrequencyResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#VelocityFrequencyResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                               |
| [`Minimum`](#VelocityFrequencyResponse.Minimum)                                         | Gets the Minimum.                                                                                |
| [`MinimumFrequency`](#VelocityFrequencyResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                               |
| [`NamedSelections`](#VelocityFrequencyResponse.NamedSelections)                         | Gets or sets the NamedSelections.                                                                |
| [`NormalOrientation`](#VelocityFrequencyResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                              |
| [`PhaseAngle`](#VelocityFrequencyResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                                                             |
| [`Properties`](#VelocityFrequencyResponse.Properties)                                   | Gets the list of properties for this object.                                                     |
| [`RPMSelection`](#VelocityFrequencyResponse.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated.                         |
| [`RealAtMaximumAmplitude`](#VelocityFrequencyResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RemotePointSelection`](#VelocityFrequencyResponse.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                           |
| [`ReportedFrequency`](#VelocityFrequencyResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                      |
| [`RequestedFrequency`](#VelocityFrequencyResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                             |
| [`ResultChartType`](#VelocityFrequencyResponse.ResultChartType)                         | Gets the ResultChartType.                                                                        |
| [`SectorNumber`](#VelocityFrequencyResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                                                   |
| [`ShearOrientation`](#VelocityFrequencyResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                               |
| [`SpatialResolution`](#VelocityFrequencyResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                              |
| [`Spring`](#VelocityFrequencyResponse.Spring)                                           | Gets or sets the Spring.                                                                         |
| [`StressStrainType`](#VelocityFrequencyResponse.StressStrainType)                       | Gets or sets the StressStrainType.                                                               |
| [`Suppressed`](#VelocityFrequencyResponse.Suppressed)                                   | Gets or sets the Suppressed.                                                                     |
| [`TimeHistoryDisplay`](#VelocityFrequencyResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                             |
| [`UseParentFrequencyRange`](#VelocityFrequencyResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                        |
| [`VelocityType`](#VelocityFrequencyResponse.VelocityType)                               | Gets or sets the VelocityType.                                                                   |
| [`VisibleProperties`](#VelocityFrequencyResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                    |
| [`XAxisValues`](#VelocityFrequencyResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="VelocityFrequencyResponse.AccelerationType"></a>

### *property* VelocityFrequencyResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.BoundaryCondition"></a>

### *property* VelocityFrequencyResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ChartDimensions"></a>

### *property* VelocityFrequencyResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ChartViewingStyle"></a>

### *property* VelocityFrequencyResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Children"></a>

### *property* VelocityFrequencyResponse.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Comments"></a>

### *property* VelocityFrequencyResponse.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ContactRegion"></a>

### *property* VelocityFrequencyResponse.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.CoordinateSystem"></a>

### *property* VelocityFrequencyResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.CurvesAppearanceDisplay"></a>

### *property* VelocityFrequencyResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.CutFrequency"></a>

### *property* VelocityFrequencyResponse.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.DataModelObjectCategory"></a>

### *property* VelocityFrequencyResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.DeformationType"></a>

### *property* VelocityFrequencyResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.DpfEvaluation"></a>

### *property* VelocityFrequencyResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Duration"></a>

### *property* VelocityFrequencyResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.EnhancedTracking"></a>

### *property* VelocityFrequencyResponse.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.FilterMaximum"></a>

### *property* VelocityFrequencyResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.FilterMinimum"></a>

### *property* VelocityFrequencyResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.FilterType"></a>

### *property* VelocityFrequencyResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.FrequencyAtMaximumAmplitude"></a>

### *property* VelocityFrequencyResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.GeometrySelectionString"></a>

### *property* VelocityFrequencyResponse.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Images"></a>

### *property* VelocityFrequencyResponse.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* VelocityFrequencyResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.InternalObject"></a>

### *property* VelocityFrequencyResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.IsSolved"></a>

### *property* VelocityFrequencyResponse.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.LoadStepNumber"></a>

### *property* VelocityFrequencyResponse.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Location"></a>

### *property* VelocityFrequencyResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Maximum"></a>

### *property* VelocityFrequencyResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.MaximumAmplitude"></a>

### *property* VelocityFrequencyResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.MaximumFrequency"></a>

### *property* VelocityFrequencyResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Minimum"></a>

### *property* VelocityFrequencyResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.MinimumFrequency"></a>

### *property* VelocityFrequencyResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.NamedSelections"></a>

### *property* VelocityFrequencyResponse.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.NormalOrientation"></a>

### *property* VelocityFrequencyResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.PhaseAngle"></a>

### *property* VelocityFrequencyResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Properties"></a>

### *property* VelocityFrequencyResponse.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.RPMSelection"></a>

### *property* VelocityFrequencyResponse.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.RealAtMaximumAmplitude"></a>

### *property* VelocityFrequencyResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.RemotePointSelection"></a>

### *property* VelocityFrequencyResponse.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ReportedFrequency"></a>

### *property* VelocityFrequencyResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.RequestedFrequency"></a>

### *property* VelocityFrequencyResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ResultChartType"></a>

### *property* VelocityFrequencyResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.SectorNumber"></a>

### *property* VelocityFrequencyResponse.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ShearOrientation"></a>

### *property* VelocityFrequencyResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.SpatialResolution"></a>

### *property* VelocityFrequencyResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Spring"></a>

### *property* VelocityFrequencyResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.StressStrainType"></a>

### *property* VelocityFrequencyResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Suppressed"></a>

### *property* VelocityFrequencyResponse.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.TimeHistoryDisplay"></a>

### *property* VelocityFrequencyResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.UseParentFrequencyRange"></a>

### *property* VelocityFrequencyResponse.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.VelocityType"></a>

### *property* VelocityFrequencyResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.VisibleProperties"></a>

### *property* VelocityFrequencyResponse.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.XAxisValues"></a>

### *property* VelocityFrequencyResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VelocityFrequencyResponse.Activate"></a>

### VelocityFrequencyResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.AddComment"></a>

### VelocityFrequencyResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.AddImage"></a>

### VelocityFrequencyResponse.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ClearGeneratedData"></a>

### VelocityFrequencyResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.CopyTo"></a>

### VelocityFrequencyResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.CreateParameter"></a>

### VelocityFrequencyResponse.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Delete"></a>

### VelocityFrequencyResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.Duplicate"></a>

### VelocityFrequencyResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.EvaluateAllResults"></a>

### VelocityFrequencyResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.ExportAnimation"></a>

### VelocityFrequencyResponse.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.GetChildren"></a>

### VelocityFrequencyResponse.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.GetParameter"></a>

### VelocityFrequencyResponse.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.GroupAllSimilarChildren"></a>

### VelocityFrequencyResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.GroupSimilarObjects"></a>

### VelocityFrequencyResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.PropertyByAPIName"></a>

### VelocityFrequencyResponse.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.PropertyByName"></a>

### VelocityFrequencyResponse.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.RemoveParameter"></a>

### VelocityFrequencyResponse.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityFrequencyResponse.RenameBasedOnDefinition"></a>

### VelocityFrequencyResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

