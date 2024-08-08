# `ContactTotalForceFromTangentialStressZTracker`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactTotalForceFromTangentialStressZTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactTotalForceFromTangentialStressZTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactTotalForceFromTangentialStressZTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactTotalForceFromTangentialStressZTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ContactTotalForceFromTangentialStressZTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#ContactTotalForceFromTangentialStressZTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactTotalForceFromTangentialStressZTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactTotalForceFromTangentialStressZTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactTotalForceFromTangentialStressZTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactTotalForceFromTangentialStressZTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactTotalForceFromTangentialStressZTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactTotalForceFromTangentialStressZTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactTotalForceFromTangentialStressZTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactTotalForceFromTangentialStressZTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactTotalForceFromTangentialStressZTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactTotalForceFromTangentialStressZTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactTotalForceFromTangentialStressZTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactTotalForceFromTangentialStressZTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactTotalForceFromTangentialStressZTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                    | Gets the internal object. For advanced usage only.            |
| [`ContactRegion`](#ContactTotalForceFromTangentialStressZTracker.ContactRegion)                             | Gets or sets the ContactRegion.                               |
| [`DataModelObjectCategory`](#ContactTotalForceFromTangentialStressZTracker.DataModelObjectCategory)         | Gets the current DataModelObjectâ€™s category.                  |
| [`IsSolved`](#ContactTotalForceFromTangentialStressZTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](#ContactTotalForceFromTangentialStressZTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#ContactTotalForceFromTangentialStressZTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#ContactTotalForceFromTangentialStressZTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#ContactTotalForceFromTangentialStressZTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#ContactTotalForceFromTangentialStressZTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#ContactTotalForceFromTangentialStressZTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#ContactTotalForceFromTangentialStressZTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](#ContactTotalForceFromTangentialStressZTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#ContactTotalForceFromTangentialStressZTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactTotalForceFromTangentialStressZTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressZTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressZTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#ContactTotalForceFromTangentialStressZTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactTotalForceFromTangentialStressZTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#ContactTotalForceFromTangentialStressZTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](#ContactTotalForceFromTangentialStressZTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#ContactTotalForceFromTangentialStressZTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](#ContactTotalForceFromTangentialStressZTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#ContactTotalForceFromTangentialStressZTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#ContactTotalForceFromTangentialStressZTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#ContactTotalForceFromTangentialStressZTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#ContactTotalForceFromTangentialStressZTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](#ContactTotalForceFromTangentialStressZTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](#ContactTotalForceFromTangentialStressZTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#ContactTotalForceFromTangentialStressZTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#ContactTotalForceFromTangentialStressZTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#ContactTotalForceFromTangentialStressZTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#ContactTotalForceFromTangentialStressZTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#ContactTotalForceFromTangentialStressZTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](#ContactTotalForceFromTangentialStressZTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#ContactTotalForceFromTangentialStressZTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](#ContactTotalForceFromTangentialStressZTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#ContactTotalForceFromTangentialStressZTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#ContactTotalForceFromTangentialStressZTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](#ContactTotalForceFromTangentialStressZTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#ContactTotalForceFromTangentialStressZTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#ContactTotalForceFromTangentialStressZTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](#ContactTotalForceFromTangentialStressZTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](#ContactTotalForceFromTangentialStressZTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](#ContactTotalForceFromTangentialStressZTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](#ContactTotalForceFromTangentialStressZTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#ContactTotalForceFromTangentialStressZTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](#ContactTotalForceFromTangentialStressZTracker.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactTotalForceFromTangentialStressZTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactTotalForceFromTangentialStressZTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactTotalForceFromTangentialStressZTracker.InternalObject"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.ContactRegion"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.DataModelObjectCategory"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.IsSolved"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.ChartDimensions"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.BoundaryCondition"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.CutFrequency"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.SectorNumber"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.GeometrySelectionString"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.LoadStepNumber"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.ReportedFrequency"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Duration"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.FilterMaximum"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.FilterMinimum"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.MaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.MaximumFrequency"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Maximum"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.MinimumFrequency"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Minimum"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.PhaseAngle"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.RealAtMaximumAmplitude"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.RequestedFrequency"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.AccelerationType"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.ChartViewingStyle"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.DeformationType"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.FilterType"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.SpatialResolution"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.NormalOrientation"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.CurvesAppearanceDisplay"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.ResultChartType"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.DpfEvaluation"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.XAxisValues"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.ShearOrientation"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.StressStrainType"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.TimeHistoryDisplay"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.VelocityType"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Suppressed"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.EnhancedTracking"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.UseParentFrequencyRange"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.CoordinateSystem"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Spring"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Location"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Children"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Comments"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Images"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Properties"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.VisibleProperties"></a>

### *property* ContactTotalForceFromTangentialStressZTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTotalForceFromTangentialStressZTracker.ExportAnimation"></a>

### ContactTotalForceFromTangentialStressZTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.ClearGeneratedData"></a>

### ContactTotalForceFromTangentialStressZTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.EvaluateAllResults"></a>

### ContactTotalForceFromTangentialStressZTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.RenameBasedOnDefinition"></a>

### ContactTotalForceFromTangentialStressZTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Delete"></a>

### ContactTotalForceFromTangentialStressZTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.GetChildren"></a>

### ContactTotalForceFromTangentialStressZTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactTotalForceFromTangentialStressZTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.AddComment"></a>

### ContactTotalForceFromTangentialStressZTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.AddImage"></a>

### ContactTotalForceFromTangentialStressZTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Activate"></a>

### ContactTotalForceFromTangentialStressZTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.CopyTo"></a>

### ContactTotalForceFromTangentialStressZTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.Duplicate"></a>

### ContactTotalForceFromTangentialStressZTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.GroupAllSimilarChildren"></a>

### ContactTotalForceFromTangentialStressZTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.GroupSimilarObjects"></a>

### ContactTotalForceFromTangentialStressZTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.PropertyByName"></a>

### ContactTotalForceFromTangentialStressZTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.PropertyByAPIName"></a>

### ContactTotalForceFromTangentialStressZTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.CreateParameter"></a>

### ContactTotalForceFromTangentialStressZTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.GetParameter"></a>

### ContactTotalForceFromTangentialStressZTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForceFromTangentialStressZTracker.RemoveParameter"></a>

### ContactTotalForceFromTangentialStressZTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

