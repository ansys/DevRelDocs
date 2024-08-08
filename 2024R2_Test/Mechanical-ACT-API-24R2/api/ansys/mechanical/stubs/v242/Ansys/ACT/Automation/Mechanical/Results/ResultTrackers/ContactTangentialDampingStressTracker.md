# `ContactTangentialDampingStressTracker`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTangentialDampingStressTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactTangentialDampingStressTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactTangentialDampingStressTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactTangentialDampingStressTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactTangentialDampingStressTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactTangentialDampingStressTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactTangentialDampingStressTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactTangentialDampingStressTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTangentialDampingStressTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactTangentialDampingStressTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactTangentialDampingStressTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactTangentialDampingStressTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactTangentialDampingStressTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTangentialDampingStressTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactTangentialDampingStressTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactTangentialDampingStressTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactTangentialDampingStressTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactTangentialDampingStressTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactTangentialDampingStressTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](#ContactTangentialDampingStressTracker.ContactRegion)                             | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](#ContactTangentialDampingStressTracker.DataModelObjectCategory)         | Gets the current DataModelObjectâ€™s category.                  |
| [`IsSolved`](#ContactTangentialDampingStressTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](#ContactTangentialDampingStressTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactTangentialDampingStressTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactTangentialDampingStressTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactTangentialDampingStressTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactTangentialDampingStressTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactTangentialDampingStressTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactTangentialDampingStressTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactTangentialDampingStressTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactTangentialDampingStressTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactTangentialDampingStressTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactTangentialDampingStressTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactTangentialDampingStressTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactTangentialDampingStressTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactTangentialDampingStressTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactTangentialDampingStressTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactTangentialDampingStressTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactTangentialDampingStressTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactTangentialDampingStressTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactTangentialDampingStressTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactTangentialDampingStressTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactTangentialDampingStressTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactTangentialDampingStressTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](#ContactTangentialDampingStressTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](#ContactTangentialDampingStressTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactTangentialDampingStressTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactTangentialDampingStressTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactTangentialDampingStressTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactTangentialDampingStressTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactTangentialDampingStressTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](#ContactTangentialDampingStressTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactTangentialDampingStressTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](#ContactTangentialDampingStressTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactTangentialDampingStressTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactTangentialDampingStressTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactTangentialDampingStressTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactTangentialDampingStressTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactTangentialDampingStressTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](#ContactTangentialDampingStressTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](#ContactTangentialDampingStressTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](#ContactTangentialDampingStressTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](#ContactTangentialDampingStressTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#ContactTangentialDampingStressTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](#ContactTangentialDampingStressTracker.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactTangentialDampingStressTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactTangentialDampingStressTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactTangentialDampingStressTracker.InternalObject"></a>

### *property* ContactTangentialDampingStressTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ContactRegion"></a>

### *property* ContactTangentialDampingStressTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.DataModelObjectCategory"></a>

### *property* ContactTangentialDampingStressTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.IsSolved"></a>

### *property* ContactTangentialDampingStressTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ChartDimensions"></a>

### *property* ContactTangentialDampingStressTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.BoundaryCondition"></a>

### *property* ContactTangentialDampingStressTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CutFrequency"></a>

### *property* ContactTangentialDampingStressTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.SectorNumber"></a>

### *property* ContactTangentialDampingStressTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GeometrySelectionString"></a>

### *property* ContactTangentialDampingStressTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.LoadStepNumber"></a>

### *property* ContactTangentialDampingStressTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ReportedFrequency"></a>

### *property* ContactTangentialDampingStressTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Duration"></a>

### *property* ContactTangentialDampingStressTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.FilterMaximum"></a>

### *property* ContactTangentialDampingStressTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.FilterMinimum"></a>

### *property* ContactTangentialDampingStressTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactTangentialDampingStressTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactTangentialDampingStressTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.MaximumAmplitude"></a>

### *property* ContactTangentialDampingStressTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.MaximumFrequency"></a>

### *property* ContactTangentialDampingStressTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Maximum"></a>

### *property* ContactTangentialDampingStressTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.MinimumFrequency"></a>

### *property* ContactTangentialDampingStressTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Minimum"></a>

### *property* ContactTangentialDampingStressTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.PhaseAngle"></a>

### *property* ContactTangentialDampingStressTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.RealAtMaximumAmplitude"></a>

### *property* ContactTangentialDampingStressTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.RequestedFrequency"></a>

### *property* ContactTangentialDampingStressTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.AccelerationType"></a>

### *property* ContactTangentialDampingStressTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ChartViewingStyle"></a>

### *property* ContactTangentialDampingStressTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.DeformationType"></a>

### *property* ContactTangentialDampingStressTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.FilterType"></a>

### *property* ContactTangentialDampingStressTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.SpatialResolution"></a>

### *property* ContactTangentialDampingStressTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.NormalOrientation"></a>

### *property* ContactTangentialDampingStressTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CurvesAppearanceDisplay"></a>

### *property* ContactTangentialDampingStressTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ResultChartType"></a>

### *property* ContactTangentialDampingStressTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.DpfEvaluation"></a>

### *property* ContactTangentialDampingStressTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.XAxisValues"></a>

### *property* ContactTangentialDampingStressTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ShearOrientation"></a>

### *property* ContactTangentialDampingStressTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.StressStrainType"></a>

### *property* ContactTangentialDampingStressTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.TimeHistoryDisplay"></a>

### *property* ContactTangentialDampingStressTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.VelocityType"></a>

### *property* ContactTangentialDampingStressTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Suppressed"></a>

### *property* ContactTangentialDampingStressTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.EnhancedTracking"></a>

### *property* ContactTangentialDampingStressTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.UseParentFrequencyRange"></a>

### *property* ContactTangentialDampingStressTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CoordinateSystem"></a>

### *property* ContactTangentialDampingStressTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Spring"></a>

### *property* ContactTangentialDampingStressTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Location"></a>

### *property* ContactTangentialDampingStressTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Children"></a>

### *property* ContactTangentialDampingStressTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Comments"></a>

### *property* ContactTangentialDampingStressTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Images"></a>

### *property* ContactTangentialDampingStressTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactTangentialDampingStressTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Properties"></a>

### *property* ContactTangentialDampingStressTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.VisibleProperties"></a>

### *property* ContactTangentialDampingStressTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTangentialDampingStressTracker.ExportAnimation"></a>

### ContactTangentialDampingStressTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.ClearGeneratedData"></a>

### ContactTangentialDampingStressTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.EvaluateAllResults"></a>

### ContactTangentialDampingStressTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.RenameBasedOnDefinition"></a>

### ContactTangentialDampingStressTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Delete"></a>

### ContactTangentialDampingStressTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GetChildren"></a>

### ContactTangentialDampingStressTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactTangentialDampingStressTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.AddComment"></a>

### ContactTangentialDampingStressTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.AddImage"></a>

### ContactTangentialDampingStressTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Activate"></a>

### ContactTangentialDampingStressTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CopyTo"></a>

### ContactTangentialDampingStressTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.Duplicate"></a>

### ContactTangentialDampingStressTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GroupAllSimilarChildren"></a>

### ContactTangentialDampingStressTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GroupSimilarObjects"></a>

### ContactTangentialDampingStressTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.PropertyByName"></a>

### ContactTangentialDampingStressTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.PropertyByAPIName"></a>

### ContactTangentialDampingStressTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.CreateParameter"></a>

### ContactTangentialDampingStressTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.GetParameter"></a>

### ContactTangentialDampingStressTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTangentialDampingStressTracker.RemoveParameter"></a>

### ContactTangentialDampingStressTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

