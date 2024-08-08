# `TemperatureTracker`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.TemperatureTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TemperatureTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#id0)                                                         | Gets the internal object. For advanced usage only.            |
| [`LocationXCoordinate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.LocationXCoordinate)                 | Gets or sets the LocationXCoordinate.                         |
| [`LocationYCoordinate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.LocationYCoordinate)                 | Gets or sets the LocationYCoordinate.                         |
| [`LocationZCoordinate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.LocationZCoordinate)                 | Gets or sets the LocationZCoordinate.                         |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ScopingMethod)                             | Gets or sets the ScopingMethod.                               |
| [`LocationMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.LocationMethod)                           | Gets or sets the LocationMethod.                              |
| [`LocationCoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.LocationCoordinateSystem)       | Gets or sets the LocationCoordinateSystem.                    |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`Duration`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`FilterMaximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MinimumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`PhaseAngle`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#id0)                                                         | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ResultTrackers/TemperatureTracker.md#TemperatureTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TemperatureTracker.InternalObject"></a>

### *property* TemperatureTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationXCoordinate"></a>

### *property* TemperatureTracker.LocationXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationYCoordinate"></a>

### *property* TemperatureTracker.LocationYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationZCoordinate"></a>

### *property* TemperatureTracker.LocationZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ScopingMethod"></a>

### *property* TemperatureTracker.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationMethod"></a>

### *property* TemperatureTracker.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LocationCoordinateSystem"></a>

### *property* TemperatureTracker.LocationCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.DataModelObjectCategory"></a>

### *property* TemperatureTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.IsSolved"></a>

### *property* TemperatureTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ChartDimensions"></a>

### *property* TemperatureTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.BoundaryCondition"></a>

### *property* TemperatureTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CutFrequency"></a>

### *property* TemperatureTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.SectorNumber"></a>

### *property* TemperatureTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GeometrySelectionString"></a>

### *property* TemperatureTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.LoadStepNumber"></a>

### *property* TemperatureTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ReportedFrequency"></a>

### *property* TemperatureTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Duration"></a>

### *property* TemperatureTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.FilterMaximum"></a>

### *property* TemperatureTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.FilterMinimum"></a>

### *property* TemperatureTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.FrequencyAtMaximumAmplitude"></a>

### *property* TemperatureTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* TemperatureTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.MaximumAmplitude"></a>

### *property* TemperatureTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.MaximumFrequency"></a>

### *property* TemperatureTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Maximum"></a>

### *property* TemperatureTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.MinimumFrequency"></a>

### *property* TemperatureTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Minimum"></a>

### *property* TemperatureTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.PhaseAngle"></a>

### *property* TemperatureTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.RealAtMaximumAmplitude"></a>

### *property* TemperatureTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.RequestedFrequency"></a>

### *property* TemperatureTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.AccelerationType"></a>

### *property* TemperatureTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ChartViewingStyle"></a>

### *property* TemperatureTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.DeformationType"></a>

### *property* TemperatureTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.FilterType"></a>

### *property* TemperatureTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.SpatialResolution"></a>

### *property* TemperatureTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.NormalOrientation"></a>

### *property* TemperatureTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CurvesAppearanceDisplay"></a>

### *property* TemperatureTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ResultChartType"></a>

### *property* TemperatureTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.DpfEvaluation"></a>

### *property* TemperatureTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.XAxisValues"></a>

### *property* TemperatureTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ShearOrientation"></a>

### *property* TemperatureTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.StressStrainType"></a>

### *property* TemperatureTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.TimeHistoryDisplay"></a>

### *property* TemperatureTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.VelocityType"></a>

### *property* TemperatureTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Suppressed"></a>

### *property* TemperatureTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.EnhancedTracking"></a>

### *property* TemperatureTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.UseParentFrequencyRange"></a>

### *property* TemperatureTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CoordinateSystem"></a>

### *property* TemperatureTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Spring"></a>

### *property* TemperatureTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Location"></a>

### *property* TemperatureTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Children"></a>

### *property* TemperatureTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Comments"></a>

### *property* TemperatureTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Images"></a>

### *property* TemperatureTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TemperatureTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Properties"></a>

### *property* TemperatureTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.VisibleProperties"></a>

### *property* TemperatureTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TemperatureTracker.ExportAnimation"></a>

### TemperatureTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.ClearGeneratedData"></a>

### TemperatureTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.EvaluateAllResults"></a>

### TemperatureTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.RenameBasedOnDefinition"></a>

### TemperatureTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Delete"></a>

### TemperatureTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GetChildren"></a>

### TemperatureTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TemperatureTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.AddComment"></a>

### TemperatureTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.AddImage"></a>

### TemperatureTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Activate"></a>

### TemperatureTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CopyTo"></a>

### TemperatureTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.Duplicate"></a>

### TemperatureTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GroupAllSimilarChildren"></a>

### TemperatureTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GroupSimilarObjects"></a>

### TemperatureTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.PropertyByName"></a>

### TemperatureTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.PropertyByAPIName"></a>

### TemperatureTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.CreateParameter"></a>

### TemperatureTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.GetParameter"></a>

### TemperatureTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureTracker.RemoveParameter"></a>

### TemperatureTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

