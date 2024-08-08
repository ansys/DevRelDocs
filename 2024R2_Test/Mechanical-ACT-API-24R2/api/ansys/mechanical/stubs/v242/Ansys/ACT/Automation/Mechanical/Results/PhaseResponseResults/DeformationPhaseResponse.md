# `DeformationPhaseResponse`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.DeformationPhaseResponse

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DeformationPhaseResponse.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#DeformationPhaseResponse.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#DeformationPhaseResponse.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DeformationPhaseResponse.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#DeformationPhaseResponse.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DeformationPhaseResponse.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DeformationPhaseResponse.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#DeformationPhaseResponse.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DeformationPhaseResponse.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DeformationPhaseResponse.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DeformationPhaseResponse.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DeformationPhaseResponse.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DeformationPhaseResponse.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DeformationPhaseResponse.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DeformationPhaseResponse.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DeformationPhaseResponse.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DeformationPhaseResponse.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DeformationPhaseResponse.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#DeformationPhaseResponse.DataModelObjectCategory)         | Gets the current DataModelObjectâ€™s category.                  |
| [`IsSolved`](#DeformationPhaseResponse.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](#DeformationPhaseResponse.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#DeformationPhaseResponse.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#DeformationPhaseResponse.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#DeformationPhaseResponse.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#DeformationPhaseResponse.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#DeformationPhaseResponse.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#DeformationPhaseResponse.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](#DeformationPhaseResponse.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#DeformationPhaseResponse.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#DeformationPhaseResponse.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#DeformationPhaseResponse.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#DeformationPhaseResponse.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#DeformationPhaseResponse.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#DeformationPhaseResponse.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#DeformationPhaseResponse.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](#DeformationPhaseResponse.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#DeformationPhaseResponse.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](#DeformationPhaseResponse.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#DeformationPhaseResponse.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#DeformationPhaseResponse.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#DeformationPhaseResponse.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#DeformationPhaseResponse.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](#DeformationPhaseResponse.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](#DeformationPhaseResponse.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#DeformationPhaseResponse.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#DeformationPhaseResponse.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#DeformationPhaseResponse.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#DeformationPhaseResponse.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#DeformationPhaseResponse.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](#DeformationPhaseResponse.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#DeformationPhaseResponse.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](#DeformationPhaseResponse.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#DeformationPhaseResponse.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#DeformationPhaseResponse.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](#DeformationPhaseResponse.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#DeformationPhaseResponse.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#DeformationPhaseResponse.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](#DeformationPhaseResponse.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](#DeformationPhaseResponse.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](#DeformationPhaseResponse.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](#DeformationPhaseResponse.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#DeformationPhaseResponse.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](#DeformationPhaseResponse.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#DeformationPhaseResponse.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#DeformationPhaseResponse.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="DeformationPhaseResponse.InternalObject"></a>

### *property* DeformationPhaseResponse.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.DataModelObjectCategory"></a>

### *property* DeformationPhaseResponse.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.IsSolved"></a>

### *property* DeformationPhaseResponse.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ChartDimensions"></a>

### *property* DeformationPhaseResponse.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.BoundaryCondition"></a>

### *property* DeformationPhaseResponse.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CutFrequency"></a>

### *property* DeformationPhaseResponse.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.SectorNumber"></a>

### *property* DeformationPhaseResponse.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GeometrySelectionString"></a>

### *property* DeformationPhaseResponse.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.LoadStepNumber"></a>

### *property* DeformationPhaseResponse.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ReportedFrequency"></a>

### *property* DeformationPhaseResponse.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Duration"></a>

### *property* DeformationPhaseResponse.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.FilterMaximum"></a>

### *property* DeformationPhaseResponse.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.FilterMinimum"></a>

### *property* DeformationPhaseResponse.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.FrequencyAtMaximumAmplitude"></a>

### *property* DeformationPhaseResponse.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ImaginaryAtMaximumAmplitude"></a>

### *property* DeformationPhaseResponse.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.MaximumAmplitude"></a>

### *property* DeformationPhaseResponse.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.MaximumFrequency"></a>

### *property* DeformationPhaseResponse.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Maximum"></a>

### *property* DeformationPhaseResponse.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.MinimumFrequency"></a>

### *property* DeformationPhaseResponse.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Minimum"></a>

### *property* DeformationPhaseResponse.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.PhaseAngle"></a>

### *property* DeformationPhaseResponse.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RealAtMaximumAmplitude"></a>

### *property* DeformationPhaseResponse.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RequestedFrequency"></a>

### *property* DeformationPhaseResponse.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.AccelerationType"></a>

### *property* DeformationPhaseResponse.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ChartViewingStyle"></a>

### *property* DeformationPhaseResponse.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.DeformationType"></a>

### *property* DeformationPhaseResponse.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.FilterType"></a>

### *property* DeformationPhaseResponse.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.SpatialResolution"></a>

### *property* DeformationPhaseResponse.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.NormalOrientation"></a>

### *property* DeformationPhaseResponse.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CurvesAppearanceDisplay"></a>

### *property* DeformationPhaseResponse.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ResultChartType"></a>

### *property* DeformationPhaseResponse.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.DpfEvaluation"></a>

### *property* DeformationPhaseResponse.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.XAxisValues"></a>

### *property* DeformationPhaseResponse.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ShearOrientation"></a>

### *property* DeformationPhaseResponse.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.StressStrainType"></a>

### *property* DeformationPhaseResponse.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.TimeHistoryDisplay"></a>

### *property* DeformationPhaseResponse.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.VelocityType"></a>

### *property* DeformationPhaseResponse.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Suppressed"></a>

### *property* DeformationPhaseResponse.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.EnhancedTracking"></a>

### *property* DeformationPhaseResponse.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.UseParentFrequencyRange"></a>

### *property* DeformationPhaseResponse.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CoordinateSystem"></a>

### *property* DeformationPhaseResponse.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Spring"></a>

### *property* DeformationPhaseResponse.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Location"></a>

### *property* DeformationPhaseResponse.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Children"></a>

### *property* DeformationPhaseResponse.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Comments"></a>

### *property* DeformationPhaseResponse.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Images"></a>

### *property* DeformationPhaseResponse.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DeformationPhaseResponse.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Properties"></a>

### *property* DeformationPhaseResponse.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.VisibleProperties"></a>

### *property* DeformationPhaseResponse.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DeformationPhaseResponse.ExportAnimation"></a>

### DeformationPhaseResponse.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.ClearGeneratedData"></a>

### DeformationPhaseResponse.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.EvaluateAllResults"></a>

### DeformationPhaseResponse.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RenameBasedOnDefinition"></a>

### DeformationPhaseResponse.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Delete"></a>

### DeformationPhaseResponse.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetChildren"></a>

### DeformationPhaseResponse.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DeformationPhaseResponse.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.AddComment"></a>

### DeformationPhaseResponse.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.AddImage"></a>

### DeformationPhaseResponse.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Activate"></a>

### DeformationPhaseResponse.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CopyTo"></a>

### DeformationPhaseResponse.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.Duplicate"></a>

### DeformationPhaseResponse.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GroupAllSimilarChildren"></a>

### DeformationPhaseResponse.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GroupSimilarObjects"></a>

### DeformationPhaseResponse.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.PropertyByName"></a>

### DeformationPhaseResponse.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.PropertyByAPIName"></a>

### DeformationPhaseResponse.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.CreateParameter"></a>

### DeformationPhaseResponse.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.GetParameter"></a>

### DeformationPhaseResponse.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationPhaseResponse.RemoveParameter"></a>

### DeformationPhaseResponse.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

