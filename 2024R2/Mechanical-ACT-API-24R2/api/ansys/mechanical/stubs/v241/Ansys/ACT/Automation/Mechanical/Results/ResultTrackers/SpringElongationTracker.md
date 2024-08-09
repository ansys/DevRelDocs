# `SpringElongationTracker`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.SpringElongationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SpringElongationTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#id0)                                                              | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#id0)                                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/SpringElongationTracker.md#SpringElongationTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SpringElongationTracker.InternalObject"></a>

### *property* SpringElongationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.DataModelObjectCategory"></a>

### *property* SpringElongationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.IsSolved"></a>

### *property* SpringElongationTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.ChartDimensions"></a>

### *property* SpringElongationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.BoundaryCondition"></a>

### *property* SpringElongationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.CutFrequency"></a>

### *property* SpringElongationTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.SectorNumber"></a>

### *property* SpringElongationTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.GeometrySelectionString"></a>

### *property* SpringElongationTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.LoadStepNumber"></a>

### *property* SpringElongationTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.ReportedFrequency"></a>

### *property* SpringElongationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Duration"></a>

### *property* SpringElongationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.FilterMaximum"></a>

### *property* SpringElongationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.FilterMinimum"></a>

### *property* SpringElongationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* SpringElongationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* SpringElongationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.MaximumAmplitude"></a>

### *property* SpringElongationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.MaximumFrequency"></a>

### *property* SpringElongationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Maximum"></a>

### *property* SpringElongationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.MinimumFrequency"></a>

### *property* SpringElongationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Minimum"></a>

### *property* SpringElongationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.PhaseAngle"></a>

### *property* SpringElongationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.RealAtMaximumAmplitude"></a>

### *property* SpringElongationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.RequestedFrequency"></a>

### *property* SpringElongationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.AccelerationType"></a>

### *property* SpringElongationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.ChartViewingStyle"></a>

### *property* SpringElongationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.DeformationType"></a>

### *property* SpringElongationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.FilterType"></a>

### *property* SpringElongationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.SpatialResolution"></a>

### *property* SpringElongationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.NormalOrientation"></a>

### *property* SpringElongationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.CurvesAppearanceDisplay"></a>

### *property* SpringElongationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.ResultChartType"></a>

### *property* SpringElongationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.DpfEvaluation"></a>

### *property* SpringElongationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.XAxisValues"></a>

### *property* SpringElongationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.ShearOrientation"></a>

### *property* SpringElongationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.StressStrainType"></a>

### *property* SpringElongationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.TimeHistoryDisplay"></a>

### *property* SpringElongationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.VelocityType"></a>

### *property* SpringElongationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Suppressed"></a>

### *property* SpringElongationTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.EnhancedTracking"></a>

### *property* SpringElongationTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.UseParentFrequencyRange"></a>

### *property* SpringElongationTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.CoordinateSystem"></a>

### *property* SpringElongationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Spring"></a>

### *property* SpringElongationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Location"></a>

### *property* SpringElongationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Children"></a>

### *property* SpringElongationTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Comments"></a>

### *property* SpringElongationTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Images"></a>

### *property* SpringElongationTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SpringElongationTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Properties"></a>

### *property* SpringElongationTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.VisibleProperties"></a>

### *property* SpringElongationTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpringElongationTracker.ExportAnimation"></a>

### SpringElongationTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.ClearGeneratedData"></a>

### SpringElongationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.EvaluateAllResults"></a>

### SpringElongationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.RenameBasedOnDefinition"></a>

### SpringElongationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Delete"></a>

### SpringElongationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.GetChildren"></a>

### SpringElongationTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SpringElongationTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.AddComment"></a>

### SpringElongationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.AddImage"></a>

### SpringElongationTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Activate"></a>

### SpringElongationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.CopyTo"></a>

### SpringElongationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.Duplicate"></a>

### SpringElongationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.GroupAllSimilarChildren"></a>

### SpringElongationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.GroupSimilarObjects"></a>

### SpringElongationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.PropertyByName"></a>

### SpringElongationTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.PropertyByAPIName"></a>

### SpringElongationTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.CreateParameter"></a>

### SpringElongationTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.GetParameter"></a>

### SpringElongationTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpringElongationTracker.RemoveParameter"></a>

### SpringElongationTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

