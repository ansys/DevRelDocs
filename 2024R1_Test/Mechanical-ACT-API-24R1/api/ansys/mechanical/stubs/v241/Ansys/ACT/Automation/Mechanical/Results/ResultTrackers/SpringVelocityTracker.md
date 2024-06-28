<!-- vale off -->

<a id="springvelocitytracker"></a>

# `SpringVelocityTracker`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringVelocityTracker"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringVelocityTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SpringVelocityTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#SpringVelocityTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#SpringVelocityTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#SpringVelocityTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#SpringVelocityTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#SpringVelocityTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SpringVelocityTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#SpringVelocityTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SpringVelocityTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SpringVelocityTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SpringVelocityTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SpringVelocityTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SpringVelocityTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SpringVelocityTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SpringVelocityTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SpringVelocityTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SpringVelocityTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SpringVelocityTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#SpringVelocityTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#SpringVelocityTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](#SpringVelocityTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#SpringVelocityTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#SpringVelocityTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#SpringVelocityTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#SpringVelocityTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#SpringVelocityTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#SpringVelocityTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](#SpringVelocityTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#SpringVelocityTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#SpringVelocityTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#SpringVelocityTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#SpringVelocityTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#SpringVelocityTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#SpringVelocityTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#SpringVelocityTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](#SpringVelocityTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#SpringVelocityTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](#SpringVelocityTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#SpringVelocityTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#SpringVelocityTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#SpringVelocityTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#SpringVelocityTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](#SpringVelocityTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](#SpringVelocityTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#SpringVelocityTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#SpringVelocityTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#SpringVelocityTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#SpringVelocityTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#SpringVelocityTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](#SpringVelocityTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#SpringVelocityTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](#SpringVelocityTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#SpringVelocityTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#SpringVelocityTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](#SpringVelocityTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#SpringVelocityTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#SpringVelocityTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](#SpringVelocityTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](#SpringVelocityTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](#SpringVelocityTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](#SpringVelocityTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#SpringVelocityTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](#SpringVelocityTracker.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SpringVelocityTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SpringVelocityTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SpringVelocityTracker.InternalObject"></a>

### *property* SpringVelocityTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.DataModelObjectCategory"></a>

### *property* SpringVelocityTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.IsSolved"></a>

### *property* SpringVelocityTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.ChartDimensions"></a>

### *property* SpringVelocityTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.BoundaryCondition"></a>

### *property* SpringVelocityTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.CutFrequency"></a>

### *property* SpringVelocityTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.SectorNumber"></a>

### *property* SpringVelocityTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.GeometrySelectionString"></a>

### *property* SpringVelocityTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.LoadStepNumber"></a>

### *property* SpringVelocityTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.ReportedFrequency"></a>

### *property* SpringVelocityTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Duration"></a>

### *property* SpringVelocityTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.FilterMaximum"></a>

### *property* SpringVelocityTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.FilterMinimum"></a>

### *property* SpringVelocityTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.FrequencyAtMaximumAmplitude"></a>

### *property* SpringVelocityTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* SpringVelocityTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.MaximumAmplitude"></a>

### *property* SpringVelocityTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.MaximumFrequency"></a>

### *property* SpringVelocityTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Maximum"></a>

### *property* SpringVelocityTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.MinimumFrequency"></a>

### *property* SpringVelocityTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Minimum"></a>

### *property* SpringVelocityTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.PhaseAngle"></a>

### *property* SpringVelocityTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.RealAtMaximumAmplitude"></a>

### *property* SpringVelocityTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.RequestedFrequency"></a>

### *property* SpringVelocityTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.AccelerationType"></a>

### *property* SpringVelocityTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.ChartViewingStyle"></a>

### *property* SpringVelocityTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.DeformationType"></a>

### *property* SpringVelocityTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.FilterType"></a>

### *property* SpringVelocityTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.SpatialResolution"></a>

### *property* SpringVelocityTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.NormalOrientation"></a>

### *property* SpringVelocityTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.CurvesAppearanceDisplay"></a>

### *property* SpringVelocityTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.ResultChartType"></a>

### *property* SpringVelocityTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.DpfEvaluation"></a>

### *property* SpringVelocityTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.XAxisValues"></a>

### *property* SpringVelocityTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.ShearOrientation"></a>

### *property* SpringVelocityTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.StressStrainType"></a>

### *property* SpringVelocityTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.TimeHistoryDisplay"></a>

### *property* SpringVelocityTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.VelocityType"></a>

### *property* SpringVelocityTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Suppressed"></a>

### *property* SpringVelocityTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.EnhancedTracking"></a>

### *property* SpringVelocityTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.UseParentFrequencyRange"></a>

### *property* SpringVelocityTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.CoordinateSystem"></a>

### *property* SpringVelocityTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Spring"></a>

### *property* SpringVelocityTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Location"></a>

### *property* SpringVelocityTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Children"></a>

### *property* SpringVelocityTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Comments"></a>

### *property* SpringVelocityTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Images"></a>

### *property* SpringVelocityTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SpringVelocityTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Properties"></a>

### *property* SpringVelocityTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.VisibleProperties"></a>

### *property* SpringVelocityTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpringVelocityTracker.ExportAnimation"></a>

### SpringVelocityTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.ClearGeneratedData"></a>

### SpringVelocityTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.EvaluateAllResults"></a>

### SpringVelocityTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.RenameBasedOnDefinition"></a>

### SpringVelocityTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Delete"></a>

### SpringVelocityTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.GetChildren"></a>

### SpringVelocityTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SpringVelocityTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.AddComment"></a>

### SpringVelocityTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.AddImage"></a>

### SpringVelocityTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Activate"></a>

### SpringVelocityTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.CopyTo"></a>

### SpringVelocityTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.Duplicate"></a>

### SpringVelocityTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.GroupAllSimilarChildren"></a>

### SpringVelocityTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.GroupSimilarObjects"></a>

### SpringVelocityTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.PropertyByName"></a>

### SpringVelocityTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.PropertyByAPIName"></a>

### SpringVelocityTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.CreateParameter"></a>

### SpringVelocityTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.GetParameter"></a>

### SpringVelocityTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpringVelocityTracker.RemoveParameter"></a>

### SpringVelocityTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
