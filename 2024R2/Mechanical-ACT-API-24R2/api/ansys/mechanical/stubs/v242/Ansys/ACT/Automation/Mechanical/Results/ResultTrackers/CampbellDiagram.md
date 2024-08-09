# `CampbellDiagram`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.CampbellDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CampbellDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#CampbellDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#CampbellDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#CampbellDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#CampbellDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#CampbellDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CampbellDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#CampbellDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CampbellDiagram.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CampbellDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CampbellDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CampbellDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CampbellDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CampbellDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CampbellDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CampbellDiagram.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CampbellDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CampbellDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RotationalVelocitySelection`](#CampbellDiagram.RotationalVelocitySelection)   | Gets or sets the Rotational Velocity Selection Type.          |
| [`InternalObject`](#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`Ratio`](#CampbellDiagram.Ratio)                                               | Gets or sets the Ratio.                                       |
| [`XAxisLabel`](#CampbellDiagram.XAxisLabel)                                     | Gets or sets the XAxisLabel.                                  |
| [`YAxisLabel`](#CampbellDiagram.YAxisLabel)                                     | Gets or sets the YAxisLabel.                                  |
| [`XAxisMaximum`](#CampbellDiagram.XAxisMaximum)                                 | Gets or sets the XAxisMaximum.                                |
| [`XAxisMinimum`](#CampbellDiagram.XAxisMinimum)                                 | Gets or sets the XAxisMinimum.                                |
| [`YAxisMaximum`](#CampbellDiagram.YAxisMaximum)                                 | Gets or sets the YAxisMaximum.                                |
| [`YAxisMinimum`](#CampbellDiagram.YAxisMinimum)                                 | Gets or sets the YAxisMinimum.                                |
| [`XAxisRange`](#CampbellDiagram.XAxisRange)                                     | Gets or sets the XAxisRange.                                  |
| [`YAxisData`](#CampbellDiagram.YAxisData)                                       | Gets or sets the YAxisData.                                   |
| [`YAxisRange`](#CampbellDiagram.YAxisRange)                                     | Gets or sets the YAxisRange.                                  |
| [`CriticalSpeed`](#CampbellDiagram.CriticalSpeed)                               | Gets or sets the CriticalSpeed.                               |
| [`Sorting`](#CampbellDiagram.Sorting)                                           | Gets or sets the Sorting.                                     |
| [`DataModelObjectCategory`](#CampbellDiagram.DataModelObjectCategory)           | Gets the current DataModelObject's category.                  |
| [`IsSolved`](#CampbellDiagram.IsSolved)                                         | Gets the IsSolved.                                            |
| [`ChartDimensions`](#CampbellDiagram.ChartDimensions)                           | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#CampbellDiagram.BoundaryCondition)                       | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#CampbellDiagram.CutFrequency)                                 | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#CampbellDiagram.SectorNumber)                                 | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#CampbellDiagram.GeometrySelectionString)           | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#CampbellDiagram.LoadStepNumber)                             | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#CampbellDiagram.ReportedFrequency)                       | Gets the ReportedFrequency.                                   |
| [`Duration`](#CampbellDiagram.Duration)                                         | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#CampbellDiagram.FilterMaximum)                               | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#CampbellDiagram.FilterMinimum)                               | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#CampbellDiagram.FrequencyAtMaximumAmplitude)   | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#CampbellDiagram.ImaginaryAtMaximumAmplitude)   | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#CampbellDiagram.MaximumAmplitude)                         | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#CampbellDiagram.MaximumFrequency)                         | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#CampbellDiagram.Maximum)                                           | Gets the Maximum.                                             |
| [`MinimumFrequency`](#CampbellDiagram.MinimumFrequency)                         | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#CampbellDiagram.Minimum)                                           | Gets the Minimum.                                             |
| [`PhaseAngle`](#CampbellDiagram.PhaseAngle)                                     | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#CampbellDiagram.RealAtMaximumAmplitude)             | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#CampbellDiagram.RequestedFrequency)                     | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#CampbellDiagram.AccelerationType)                         | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#CampbellDiagram.ChartViewingStyle)                       | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](#CampbellDiagram.DeformationType)                           | Gets or sets the DeformationType.                             |
| [`FilterType`](#CampbellDiagram.FilterType)                                     | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#CampbellDiagram.SpatialResolution)                       | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#CampbellDiagram.NormalOrientation)                       | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#CampbellDiagram.CurvesAppearanceDisplay)           | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#CampbellDiagram.ResultChartType)                           | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#CampbellDiagram.DpfEvaluation)                               | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](#CampbellDiagram.XAxisValues)                                   | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#CampbellDiagram.ShearOrientation)                         | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](#CampbellDiagram.StressStrainType)                         | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#CampbellDiagram.TimeHistoryDisplay)                     | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#CampbellDiagram.VelocityType)                                 | Gets or sets the VelocityType.                                |
| [`Suppressed`](#CampbellDiagram.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#CampbellDiagram.EnhancedTracking)                         | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#CampbellDiagram.UseParentFrequencyRange)           | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](#CampbellDiagram.CoordinateSystem)                         | Gets or sets the CoordinateSystem.                            |
| [`Spring`](#CampbellDiagram.Spring)                                             | Gets or sets the Spring.                                      |
| [`Location`](#CampbellDiagram.Location)                                         | Gets or sets the Location.                                    |
| [`Children`](#CampbellDiagram.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#CampbellDiagram.Comments)                                         | Gets the list of associated comments.                         |
| [`Images`](#CampbellDiagram.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CampbellDiagram.Properties)                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CampbellDiagram.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CampbellDiagram.RotationalVelocitySelection"></a>

### *property* CampbellDiagram.RotationalVelocitySelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotational Velocity Selection Type.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.InternalObject"></a>

### *property* CampbellDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Ratio"></a>

### *property* CampbellDiagram.Ratio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ratio.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.XAxisLabel"></a>

### *property* CampbellDiagram.XAxisLabel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisLabel.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.YAxisLabel"></a>

### *property* CampbellDiagram.YAxisLabel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisLabel.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.XAxisMaximum"></a>

### *property* CampbellDiagram.XAxisMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisMaximum.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.XAxisMinimum"></a>

### *property* CampbellDiagram.XAxisMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisMinimum.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.YAxisMaximum"></a>

### *property* CampbellDiagram.YAxisMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisMaximum.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.YAxisMinimum"></a>

### *property* CampbellDiagram.YAxisMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisMinimum.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.XAxisRange"></a>

### *property* CampbellDiagram.XAxisRange *: [Ansys.Mechanical.DataModel.Enums.DSCampbellAxisRange](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DSCampbellAxisRange.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DSCampbellAxisRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisRange.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.YAxisData"></a>

### *property* CampbellDiagram.YAxisData *: [Ansys.Mechanical.DataModel.Enums.DSCampbellYAxisDataType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DSCampbellYAxisDataType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DSCampbellYAxisDataType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisData.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.YAxisRange"></a>

### *property* CampbellDiagram.YAxisRange *: [Ansys.Mechanical.DataModel.Enums.DSCampbellAxisRange](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DSCampbellAxisRange.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DSCampbellAxisRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisRange.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.CriticalSpeed"></a>

### *property* CampbellDiagram.CriticalSpeed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalSpeed.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Sorting"></a>

### *property* CampbellDiagram.Sorting *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Sorting.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.DataModelObjectCategory"></a>

### *property* CampbellDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.IsSolved"></a>

### *property* CampbellDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.ChartDimensions"></a>

### *property* CampbellDiagram.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.BoundaryCondition"></a>

### *property* CampbellDiagram.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.CutFrequency"></a>

### *property* CampbellDiagram.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.SectorNumber"></a>

### *property* CampbellDiagram.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.GeometrySelectionString"></a>

### *property* CampbellDiagram.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.LoadStepNumber"></a>

### *property* CampbellDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.ReportedFrequency"></a>

### *property* CampbellDiagram.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Duration"></a>

### *property* CampbellDiagram.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.FilterMaximum"></a>

### *property* CampbellDiagram.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.FilterMinimum"></a>

### *property* CampbellDiagram.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.FrequencyAtMaximumAmplitude"></a>

### *property* CampbellDiagram.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.ImaginaryAtMaximumAmplitude"></a>

### *property* CampbellDiagram.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.MaximumAmplitude"></a>

### *property* CampbellDiagram.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.MaximumFrequency"></a>

### *property* CampbellDiagram.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Maximum"></a>

### *property* CampbellDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.MinimumFrequency"></a>

### *property* CampbellDiagram.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Minimum"></a>

### *property* CampbellDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.PhaseAngle"></a>

### *property* CampbellDiagram.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.RealAtMaximumAmplitude"></a>

### *property* CampbellDiagram.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.RequestedFrequency"></a>

### *property* CampbellDiagram.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.AccelerationType"></a>

### *property* CampbellDiagram.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.ChartViewingStyle"></a>

### *property* CampbellDiagram.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.DeformationType"></a>

### *property* CampbellDiagram.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.FilterType"></a>

### *property* CampbellDiagram.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.SpatialResolution"></a>

### *property* CampbellDiagram.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.NormalOrientation"></a>

### *property* CampbellDiagram.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.CurvesAppearanceDisplay"></a>

### *property* CampbellDiagram.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.ResultChartType"></a>

### *property* CampbellDiagram.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.DpfEvaluation"></a>

### *property* CampbellDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.XAxisValues"></a>

### *property* CampbellDiagram.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.ShearOrientation"></a>

### *property* CampbellDiagram.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.StressStrainType"></a>

### *property* CampbellDiagram.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.TimeHistoryDisplay"></a>

### *property* CampbellDiagram.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.VelocityType"></a>

### *property* CampbellDiagram.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Suppressed"></a>

### *property* CampbellDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.EnhancedTracking"></a>

### *property* CampbellDiagram.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.UseParentFrequencyRange"></a>

### *property* CampbellDiagram.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.CoordinateSystem"></a>

### *property* CampbellDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Spring"></a>

### *property* CampbellDiagram.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Location"></a>

### *property* CampbellDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Children"></a>

### *property* CampbellDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Comments"></a>

### *property* CampbellDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Images"></a>

### *property* CampbellDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CampbellDiagram.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Properties"></a>

### *property* CampbellDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.VisibleProperties"></a>

### *property* CampbellDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CampbellDiagram.ExportAnimation"></a>

### CampbellDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.ClearGeneratedData"></a>

### CampbellDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.EvaluateAllResults"></a>

### CampbellDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.RenameBasedOnDefinition"></a>

### CampbellDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Delete"></a>

### CampbellDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.GetChildren"></a>

### CampbellDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CampbellDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.AddComment"></a>

### CampbellDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.AddImage"></a>

### CampbellDiagram.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Activate"></a>

### CampbellDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.CopyTo"></a>

### CampbellDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.Duplicate"></a>

### CampbellDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.GroupAllSimilarChildren"></a>

### CampbellDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.GroupSimilarObjects"></a>

### CampbellDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.PropertyByName"></a>

### CampbellDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.PropertyByAPIName"></a>

### CampbellDiagram.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.CreateParameter"></a>

### CampbellDiagram.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.GetParameter"></a>

### CampbellDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CampbellDiagram.RemoveParameter"></a>

### CampbellDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

