# `KrylovResidualNorm`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.KrylovResidualNorm"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.KrylovResidualNorm

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a KrylovResidualNorm.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#KrylovResidualNorm.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#KrylovResidualNorm.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#KrylovResidualNorm.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#KrylovResidualNorm.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#KrylovResidualNorm.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#KrylovResidualNorm.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#KrylovResidualNorm.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#KrylovResidualNorm.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#KrylovResidualNorm.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#KrylovResidualNorm.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#KrylovResidualNorm.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#KrylovResidualNorm.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#KrylovResidualNorm.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#KrylovResidualNorm.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#KrylovResidualNorm.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#KrylovResidualNorm.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#KrylovResidualNorm.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#KrylovResidualNorm.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`AccelerationType`](#KrylovResidualNorm.AccelerationType)                       | Gets or sets the AccelerationType.                                                               |
| [`BoundaryCondition`](#KrylovResidualNorm.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                                              |
| [`ChartDimensions`](#KrylovResidualNorm.ChartDimensions)                         | Gets or sets the Chart Dimensions                                                                |
| [`ChartViewingStyle`](#KrylovResidualNorm.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                                              |
| [`Children`](#KrylovResidualNorm.Children)                                       | Gets the list of children.                                                                       |
| [`Comments`](#KrylovResidualNorm.Comments)                                       | Gets the list of associated comments.                                                            |
| [`CoordinateSystem`](#KrylovResidualNorm.CoordinateSystem)                       | Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System. |
| [`CurvesAppearanceDisplay`](#KrylovResidualNorm.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                                        |
| [`CutFrequency`](#KrylovResidualNorm.CutFrequency)                               | Gets or sets the CutFrequency.                                                                   |
| [`DeformationType`](#KrylovResidualNorm.DeformationType)                         | Gets or sets the DeformationType.                                                                |
| [`DpfEvaluation`](#KrylovResidualNorm.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                                                  |
| [`Duration`](#KrylovResidualNorm.Duration)                                       | Gets or sets the Duration.                                                                       |
| [`EnhancedTracking`](#KrylovResidualNorm.EnhancedTracking)                       | Gets the EnhancedTracking.                                                                       |
| [`FilterMaximum`](#KrylovResidualNorm.FilterMaximum)                             | Gets the FilterMaximum.                                                                          |
| [`FilterMinimum`](#KrylovResidualNorm.FilterMinimum)                             | Gets the FilterMinimum.                                                                          |
| [`FilterType`](#KrylovResidualNorm.FilterType)                                   | Gets or sets the FilterType.                                                                     |
| [`FrequencyAtMaximumAmplitude`](#KrylovResidualNorm.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                                            |
| [`GeometrySelectionString`](#KrylovResidualNorm.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                                        |
| [`Images`](#KrylovResidualNorm.Images)                                           | Gets the list of associated images.                                                              |
| [`ImaginaryAtMaximumAmplitude`](#KrylovResidualNorm.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                                            |
| [`InternalObject`](#KrylovResidualNorm.InternalObject)                           | Gets the internal object. For advanced usage only.                                               |
| [`IsSolved`](#KrylovResidualNorm.IsSolved)                                       | Gets the IsSolved.                                                                               |
| [`LoadStepNumber`](#KrylovResidualNorm.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                                                 |
| [`Location`](#KrylovResidualNorm.Location)                                       | Gets or sets the Location.                                                                       |
| [`Maximum`](#KrylovResidualNorm.Maximum)                                         | Gets the Maximum.                                                                                |
| [`MaximumAmplitude`](#KrylovResidualNorm.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                                                       |
| [`MaximumFrequency`](#KrylovResidualNorm.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                                               |
| [`Minimum`](#KrylovResidualNorm.Minimum)                                         | Gets the Minimum.                                                                                |
| [`MinimumFrequency`](#KrylovResidualNorm.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                                               |
| [`NormalOrientation`](#KrylovResidualNorm.NormalOrientation)                     | Gets or sets the NormalOrientation.                                                              |
| [`PhaseAngle`](#KrylovResidualNorm.PhaseAngle)                                   | Gets the PhaseAngle.                                                                             |
| [`Properties`](#KrylovResidualNorm.Properties)                                   | Gets the list of properties for this object.                                                     |
| [`RealAtMaximumAmplitude`](#KrylovResidualNorm.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                                                 |
| [`RemotePointSelection`](#KrylovResidualNorm.RemotePointSelection)               | Gets or sets the RemotePointSelection.                                                           |
| [`ReportedFrequency`](#KrylovResidualNorm.ReportedFrequency)                     | Gets the ReportedFrequency.                                                                      |
| [`RequestedFrequency`](#KrylovResidualNorm.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                                             |
| [`ResultChartType`](#KrylovResidualNorm.ResultChartType)                         | Gets the ResultChartType.                                                                        |
| [`SectorNumber`](#KrylovResidualNorm.SectorNumber)                               | Gets or sets the SectorNumber.                                                                   |
| [`ShearOrientation`](#KrylovResidualNorm.ShearOrientation)                       | Gets or sets the ShearOrientation.                                                               |
| [`SpatialResolution`](#KrylovResidualNorm.SpatialResolution)                     | Gets or sets the SpatialResolution.                                                              |
| [`Spring`](#KrylovResidualNorm.Spring)                                           | Gets or sets the Spring.                                                                         |
| [`StressStrainType`](#KrylovResidualNorm.StressStrainType)                       | Gets or sets the StressStrainType.                                                               |
| [`Suppressed`](#KrylovResidualNorm.Suppressed)                                   | Gets or sets the Suppressed.                                                                     |
| [`TimeHistoryDisplay`](#KrylovResidualNorm.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                                             |
| [`UseParentFrequencyRange`](#KrylovResidualNorm.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                                        |
| [`VelocityType`](#KrylovResidualNorm.VelocityType)                               | Gets or sets the VelocityType.                                                                   |
| [`VisibleProperties`](#KrylovResidualNorm.VisibleProperties)                     | Gets the list of properties that are visible for this object.                                    |
| [`XAxisValues`](#KrylovResidualNorm.XAxisValues)                                 | Gets or sets the XAxisValues.                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="KrylovResidualNorm.AccelerationType"></a>

### *property* KrylovResidualNorm.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.BoundaryCondition"></a>

### *property* KrylovResidualNorm.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ChartDimensions"></a>

### *property* KrylovResidualNorm.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ChartViewingStyle"></a>

### *property* KrylovResidualNorm.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Children"></a>

### *property* KrylovResidualNorm.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Comments"></a>

### *property* KrylovResidualNorm.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CoordinateSystem"></a>

### *property* KrylovResidualNorm.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CurvesAppearanceDisplay"></a>

### *property* KrylovResidualNorm.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CutFrequency"></a>

### *property* KrylovResidualNorm.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.DeformationType"></a>

### *property* KrylovResidualNorm.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.DpfEvaluation"></a>

### *property* KrylovResidualNorm.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Duration"></a>

### *property* KrylovResidualNorm.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.EnhancedTracking"></a>

### *property* KrylovResidualNorm.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FilterMaximum"></a>

### *property* KrylovResidualNorm.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FilterMinimum"></a>

### *property* KrylovResidualNorm.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FilterType"></a>

### *property* KrylovResidualNorm.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.FrequencyAtMaximumAmplitude"></a>

### *property* KrylovResidualNorm.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GeometrySelectionString"></a>

### *property* KrylovResidualNorm.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Images"></a>

### *property* KrylovResidualNorm.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ImaginaryAtMaximumAmplitude"></a>

### *property* KrylovResidualNorm.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.InternalObject"></a>

### *property* KrylovResidualNorm.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.IsSolved"></a>

### *property* KrylovResidualNorm.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.LoadStepNumber"></a>

### *property* KrylovResidualNorm.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Location"></a>

### *property* KrylovResidualNorm.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Maximum"></a>

### *property* KrylovResidualNorm.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.MaximumAmplitude"></a>

### *property* KrylovResidualNorm.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.MaximumFrequency"></a>

### *property* KrylovResidualNorm.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Minimum"></a>

### *property* KrylovResidualNorm.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.MinimumFrequency"></a>

### *property* KrylovResidualNorm.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.NormalOrientation"></a>

### *property* KrylovResidualNorm.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.PhaseAngle"></a>

### *property* KrylovResidualNorm.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Properties"></a>

### *property* KrylovResidualNorm.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RealAtMaximumAmplitude"></a>

### *property* KrylovResidualNorm.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RemotePointSelection"></a>

### *property* KrylovResidualNorm.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/RemotePoint.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ReportedFrequency"></a>

### *property* KrylovResidualNorm.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RequestedFrequency"></a>

### *property* KrylovResidualNorm.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ResultChartType"></a>

### *property* KrylovResidualNorm.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.SectorNumber"></a>

### *property* KrylovResidualNorm.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ShearOrientation"></a>

### *property* KrylovResidualNorm.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.SpatialResolution"></a>

### *property* KrylovResidualNorm.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Spring"></a>

### *property* KrylovResidualNorm.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.StressStrainType"></a>

### *property* KrylovResidualNorm.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Suppressed"></a>

### *property* KrylovResidualNorm.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.TimeHistoryDisplay"></a>

### *property* KrylovResidualNorm.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.UseParentFrequencyRange"></a>

### *property* KrylovResidualNorm.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.VelocityType"></a>

### *property* KrylovResidualNorm.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.VisibleProperties"></a>

### *property* KrylovResidualNorm.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.XAxisValues"></a>

### *property* KrylovResidualNorm.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="KrylovResidualNorm.Activate"></a>

### KrylovResidualNorm.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.AddComment"></a>

### KrylovResidualNorm.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.AddImage"></a>

### KrylovResidualNorm.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ClearGeneratedData"></a>

### KrylovResidualNorm.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CopyTo"></a>

### KrylovResidualNorm.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.CreateParameter"></a>

### KrylovResidualNorm.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Delete"></a>

### KrylovResidualNorm.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.Duplicate"></a>

### KrylovResidualNorm.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.EvaluateAllResults"></a>

### KrylovResidualNorm.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.ExportAnimation"></a>

### KrylovResidualNorm.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetChildren"></a>

### KrylovResidualNorm.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GetParameter"></a>

### KrylovResidualNorm.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GroupAllSimilarChildren"></a>

### KrylovResidualNorm.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.GroupSimilarObjects"></a>

### KrylovResidualNorm.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.PropertyByAPIName"></a>

### KrylovResidualNorm.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.PropertyByName"></a>

### KrylovResidualNorm.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RemoveParameter"></a>

### KrylovResidualNorm.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="KrylovResidualNorm.RenameBasedOnDefinition"></a>

### KrylovResidualNorm.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

