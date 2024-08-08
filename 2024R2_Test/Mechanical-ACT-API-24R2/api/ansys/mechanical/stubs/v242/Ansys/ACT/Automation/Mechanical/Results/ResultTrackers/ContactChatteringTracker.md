# `ContactChatteringTracker`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactChatteringTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactChatteringTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactChatteringTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactChatteringTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactChatteringTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactChatteringTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactChatteringTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactChatteringTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactChatteringTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactChatteringTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactChatteringTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactChatteringTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactChatteringTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactChatteringTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactChatteringTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactChatteringTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactChatteringTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactChatteringTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactChatteringTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                               | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#ContactChatteringTracker.ContactSide)                                 | Gets or sets the ContactSide.                                 |
| [`ContactRegion`](#ContactChatteringTracker.ContactRegion)                             | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](#ContactChatteringTracker.DataModelObjectCategory)         | Gets the current DataModelObjectâ€™s category.                  |
| [`IsSolved`](#ContactChatteringTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](#ContactChatteringTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactChatteringTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactChatteringTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactChatteringTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactChatteringTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactChatteringTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactChatteringTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactChatteringTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactChatteringTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactChatteringTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactChatteringTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactChatteringTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactChatteringTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactChatteringTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactChatteringTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactChatteringTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactChatteringTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactChatteringTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactChatteringTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactChatteringTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactChatteringTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactChatteringTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](#ContactChatteringTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](#ContactChatteringTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactChatteringTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactChatteringTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactChatteringTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactChatteringTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactChatteringTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](#ContactChatteringTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactChatteringTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](#ContactChatteringTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactChatteringTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactChatteringTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactChatteringTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactChatteringTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactChatteringTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](#ContactChatteringTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](#ContactChatteringTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](#ContactChatteringTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](#ContactChatteringTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#ContactChatteringTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](#ContactChatteringTracker.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactChatteringTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactChatteringTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactChatteringTracker.InternalObject"></a>

### *property* ContactChatteringTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ContactSide"></a>

### *property* ContactChatteringTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ContactRegion"></a>

### *property* ContactChatteringTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.DataModelObjectCategory"></a>

### *property* ContactChatteringTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.IsSolved"></a>

### *property* ContactChatteringTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ChartDimensions"></a>

### *property* ContactChatteringTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.BoundaryCondition"></a>

### *property* ContactChatteringTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.CutFrequency"></a>

### *property* ContactChatteringTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.SectorNumber"></a>

### *property* ContactChatteringTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.GeometrySelectionString"></a>

### *property* ContactChatteringTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.LoadStepNumber"></a>

### *property* ContactChatteringTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ReportedFrequency"></a>

### *property* ContactChatteringTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Duration"></a>

### *property* ContactChatteringTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.FilterMaximum"></a>

### *property* ContactChatteringTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.FilterMinimum"></a>

### *property* ContactChatteringTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactChatteringTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactChatteringTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.MaximumAmplitude"></a>

### *property* ContactChatteringTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.MaximumFrequency"></a>

### *property* ContactChatteringTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Maximum"></a>

### *property* ContactChatteringTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.MinimumFrequency"></a>

### *property* ContactChatteringTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Minimum"></a>

### *property* ContactChatteringTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.PhaseAngle"></a>

### *property* ContactChatteringTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.RealAtMaximumAmplitude"></a>

### *property* ContactChatteringTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.RequestedFrequency"></a>

### *property* ContactChatteringTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.AccelerationType"></a>

### *property* ContactChatteringTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ChartViewingStyle"></a>

### *property* ContactChatteringTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.DeformationType"></a>

### *property* ContactChatteringTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.FilterType"></a>

### *property* ContactChatteringTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.SpatialResolution"></a>

### *property* ContactChatteringTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.NormalOrientation"></a>

### *property* ContactChatteringTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.CurvesAppearanceDisplay"></a>

### *property* ContactChatteringTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ResultChartType"></a>

### *property* ContactChatteringTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.DpfEvaluation"></a>

### *property* ContactChatteringTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.XAxisValues"></a>

### *property* ContactChatteringTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ShearOrientation"></a>

### *property* ContactChatteringTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.StressStrainType"></a>

### *property* ContactChatteringTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.TimeHistoryDisplay"></a>

### *property* ContactChatteringTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.VelocityType"></a>

### *property* ContactChatteringTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Suppressed"></a>

### *property* ContactChatteringTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.EnhancedTracking"></a>

### *property* ContactChatteringTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.UseParentFrequencyRange"></a>

### *property* ContactChatteringTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.CoordinateSystem"></a>

### *property* ContactChatteringTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Spring"></a>

### *property* ContactChatteringTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Location"></a>

### *property* ContactChatteringTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Children"></a>

### *property* ContactChatteringTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Comments"></a>

### *property* ContactChatteringTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Images"></a>

### *property* ContactChatteringTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactChatteringTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Properties"></a>

### *property* ContactChatteringTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.VisibleProperties"></a>

### *property* ContactChatteringTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactChatteringTracker.ExportAnimation"></a>

### ContactChatteringTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.ClearGeneratedData"></a>

### ContactChatteringTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.EvaluateAllResults"></a>

### ContactChatteringTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.RenameBasedOnDefinition"></a>

### ContactChatteringTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Delete"></a>

### ContactChatteringTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.GetChildren"></a>

### ContactChatteringTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactChatteringTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.AddComment"></a>

### ContactChatteringTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.AddImage"></a>

### ContactChatteringTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Activate"></a>

### ContactChatteringTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.CopyTo"></a>

### ContactChatteringTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.Duplicate"></a>

### ContactChatteringTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.GroupAllSimilarChildren"></a>

### ContactChatteringTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.GroupSimilarObjects"></a>

### ContactChatteringTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.PropertyByName"></a>

### ContactChatteringTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.PropertyByAPIName"></a>

### ContactChatteringTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.CreateParameter"></a>

### ContactChatteringTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.GetParameter"></a>

### ContactChatteringTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactChatteringTracker.RemoveParameter"></a>

### ContactChatteringTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

