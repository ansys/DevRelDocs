# `ExternalForceTracker`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ExternalForceTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ExternalForceTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#id0)                                                           | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#id0)                                                           | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/ExternalForceTracker.md#ExternalForceTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExternalForceTracker.InternalObject"></a>

### *property* ExternalForceTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.DataModelObjectCategory"></a>

### *property* ExternalForceTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.IsSolved"></a>

### *property* ExternalForceTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.ChartDimensions"></a>

### *property* ExternalForceTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.BoundaryCondition"></a>

### *property* ExternalForceTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.CutFrequency"></a>

### *property* ExternalForceTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.SectorNumber"></a>

### *property* ExternalForceTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.GeometrySelectionString"></a>

### *property* ExternalForceTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.LoadStepNumber"></a>

### *property* ExternalForceTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.ReportedFrequency"></a>

### *property* ExternalForceTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Duration"></a>

### *property* ExternalForceTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.FilterMaximum"></a>

### *property* ExternalForceTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.FilterMinimum"></a>

### *property* ExternalForceTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ExternalForceTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ExternalForceTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.MaximumAmplitude"></a>

### *property* ExternalForceTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.MaximumFrequency"></a>

### *property* ExternalForceTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Maximum"></a>

### *property* ExternalForceTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.MinimumFrequency"></a>

### *property* ExternalForceTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Minimum"></a>

### *property* ExternalForceTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.PhaseAngle"></a>

### *property* ExternalForceTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.RealAtMaximumAmplitude"></a>

### *property* ExternalForceTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.RequestedFrequency"></a>

### *property* ExternalForceTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.AccelerationType"></a>

### *property* ExternalForceTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.ChartViewingStyle"></a>

### *property* ExternalForceTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.DeformationType"></a>

### *property* ExternalForceTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.FilterType"></a>

### *property* ExternalForceTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.SpatialResolution"></a>

### *property* ExternalForceTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.NormalOrientation"></a>

### *property* ExternalForceTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.CurvesAppearanceDisplay"></a>

### *property* ExternalForceTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.ResultChartType"></a>

### *property* ExternalForceTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.DpfEvaluation"></a>

### *property* ExternalForceTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.XAxisValues"></a>

### *property* ExternalForceTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.ShearOrientation"></a>

### *property* ExternalForceTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.StressStrainType"></a>

### *property* ExternalForceTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.TimeHistoryDisplay"></a>

### *property* ExternalForceTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.VelocityType"></a>

### *property* ExternalForceTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Suppressed"></a>

### *property* ExternalForceTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.EnhancedTracking"></a>

### *property* ExternalForceTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.UseParentFrequencyRange"></a>

### *property* ExternalForceTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.CoordinateSystem"></a>

### *property* ExternalForceTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Spring"></a>

### *property* ExternalForceTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Location"></a>

### *property* ExternalForceTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Children"></a>

### *property* ExternalForceTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Comments"></a>

### *property* ExternalForceTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Images"></a>

### *property* ExternalForceTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ExternalForceTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Properties"></a>

### *property* ExternalForceTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.VisibleProperties"></a>

### *property* ExternalForceTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExternalForceTracker.ExportAnimation"></a>

### ExternalForceTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.ClearGeneratedData"></a>

### ExternalForceTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.EvaluateAllResults"></a>

### ExternalForceTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.RenameBasedOnDefinition"></a>

### ExternalForceTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Delete"></a>

### ExternalForceTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.GetChildren"></a>

### ExternalForceTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ExternalForceTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.AddComment"></a>

### ExternalForceTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.AddImage"></a>

### ExternalForceTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Activate"></a>

### ExternalForceTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.CopyTo"></a>

### ExternalForceTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.Duplicate"></a>

### ExternalForceTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.GroupAllSimilarChildren"></a>

### ExternalForceTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.GroupSimilarObjects"></a>

### ExternalForceTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.PropertyByName"></a>

### ExternalForceTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.PropertyByAPIName"></a>

### ExternalForceTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.CreateParameter"></a>

### ExternalForceTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.GetParameter"></a>

### ExternalForceTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalForceTracker.RemoveParameter"></a>

### ExternalForceTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

