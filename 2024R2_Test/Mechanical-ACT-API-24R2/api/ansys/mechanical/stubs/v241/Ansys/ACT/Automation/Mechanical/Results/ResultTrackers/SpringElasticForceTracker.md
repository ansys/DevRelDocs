# `SpringElasticForceTracker`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringElasticForceTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SpringElasticForceTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#id0)                                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#id0)                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElasticForceTracker.md#SpringElasticForceTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SpringElasticForceTracker.InternalObject"></a>

### *property* SpringElasticForceTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.DataModelObjectCategory"></a>

### *property* SpringElasticForceTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.IsSolved"></a>

### *property* SpringElasticForceTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ChartDimensions"></a>

### *property* SpringElasticForceTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.BoundaryCondition"></a>

### *property* SpringElasticForceTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CutFrequency"></a>

### *property* SpringElasticForceTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.SectorNumber"></a>

### *property* SpringElasticForceTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GeometrySelectionString"></a>

### *property* SpringElasticForceTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.LoadStepNumber"></a>

### *property* SpringElasticForceTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ReportedFrequency"></a>

### *property* SpringElasticForceTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Duration"></a>

### *property* SpringElasticForceTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.FilterMaximum"></a>

### *property* SpringElasticForceTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.FilterMinimum"></a>

### *property* SpringElasticForceTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.FrequencyAtMaximumAmplitude"></a>

### *property* SpringElasticForceTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* SpringElasticForceTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.MaximumAmplitude"></a>

### *property* SpringElasticForceTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.MaximumFrequency"></a>

### *property* SpringElasticForceTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Maximum"></a>

### *property* SpringElasticForceTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.MinimumFrequency"></a>

### *property* SpringElasticForceTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Minimum"></a>

### *property* SpringElasticForceTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.PhaseAngle"></a>

### *property* SpringElasticForceTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.RealAtMaximumAmplitude"></a>

### *property* SpringElasticForceTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.RequestedFrequency"></a>

### *property* SpringElasticForceTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.AccelerationType"></a>

### *property* SpringElasticForceTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ChartViewingStyle"></a>

### *property* SpringElasticForceTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.DeformationType"></a>

### *property* SpringElasticForceTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.FilterType"></a>

### *property* SpringElasticForceTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.SpatialResolution"></a>

### *property* SpringElasticForceTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.NormalOrientation"></a>

### *property* SpringElasticForceTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CurvesAppearanceDisplay"></a>

### *property* SpringElasticForceTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ResultChartType"></a>

### *property* SpringElasticForceTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.DpfEvaluation"></a>

### *property* SpringElasticForceTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.XAxisValues"></a>

### *property* SpringElasticForceTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ShearOrientation"></a>

### *property* SpringElasticForceTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.StressStrainType"></a>

### *property* SpringElasticForceTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.TimeHistoryDisplay"></a>

### *property* SpringElasticForceTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.VelocityType"></a>

### *property* SpringElasticForceTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Suppressed"></a>

### *property* SpringElasticForceTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.EnhancedTracking"></a>

### *property* SpringElasticForceTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.UseParentFrequencyRange"></a>

### *property* SpringElasticForceTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CoordinateSystem"></a>

### *property* SpringElasticForceTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Spring"></a>

### *property* SpringElasticForceTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Location"></a>

### *property* SpringElasticForceTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Children"></a>

### *property* SpringElasticForceTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Comments"></a>

### *property* SpringElasticForceTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Images"></a>

### *property* SpringElasticForceTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SpringElasticForceTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Properties"></a>

### *property* SpringElasticForceTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.VisibleProperties"></a>

### *property* SpringElasticForceTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpringElasticForceTracker.ExportAnimation"></a>

### SpringElasticForceTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.ClearGeneratedData"></a>

### SpringElasticForceTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.EvaluateAllResults"></a>

### SpringElasticForceTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.RenameBasedOnDefinition"></a>

### SpringElasticForceTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Delete"></a>

### SpringElasticForceTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GetChildren"></a>

### SpringElasticForceTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SpringElasticForceTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.AddComment"></a>

### SpringElasticForceTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.AddImage"></a>

### SpringElasticForceTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Activate"></a>

### SpringElasticForceTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CopyTo"></a>

### SpringElasticForceTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.Duplicate"></a>

### SpringElasticForceTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GroupAllSimilarChildren"></a>

### SpringElasticForceTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GroupSimilarObjects"></a>

### SpringElasticForceTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.PropertyByName"></a>

### SpringElasticForceTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.PropertyByAPIName"></a>

### SpringElasticForceTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.CreateParameter"></a>

### SpringElasticForceTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.GetParameter"></a>

### SpringElasticForceTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpringElasticForceTracker.RemoveParameter"></a>

### SpringElasticForceTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

