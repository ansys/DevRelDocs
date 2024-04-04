# DirectionalVelocityPSD

### *class* DirectionalVelocityPSD

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalVelocityPSD.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#DirectionalVelocityPSD.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#DirectionalVelocityPSD.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalVelocityPSD.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalVelocityPSD.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalVelocityPSD.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalVelocityPSD.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalVelocityPSD.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalVelocityPSD.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalVelocityPSD.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalVelocityPSD.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalVelocityPSD.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalVelocityPSD.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalVelocityPSD.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalVelocityPSD.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalVelocityPSD.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalVelocityPSD.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalVelocityPSD.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalVelocityPSD.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalVelocityPSD.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalVelocityPSD.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalVelocityPSD.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalVelocityPSD.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalVelocityPSD.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalVelocityPSD.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalVelocityPSD.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`NormalOrientation`](#DirectionalVelocityPSD.NormalOrientation)                                                          | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#DirectionalVelocityPSD.Mode)                                                                                    | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#DirectionalVelocityPSD.ReportedFrequency)                                                          | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#DirectionalVelocityPSD.DampedFrequency)                                                              | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#DirectionalVelocityPSD.EnvironmentSelection)                                                    | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#DirectionalVelocityPSD.LogarithmicDecrement)                                                    | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#DirectionalVelocityPSD.ModalDampingRatio)                                                          | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#DirectionalVelocityPSD.HarmonicIndex)                                                                  | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#DirectionalVelocityPSD.CyclicMode)                                                                        | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#DirectionalVelocityPSD.IterationStep)                                                                  | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#DirectionalVelocityPSD.LoadMultiplier)                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#DirectionalVelocityPSD.Probability)                                                                      | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#DirectionalVelocityPSD.ScaleFactorValue)                                                            | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#DirectionalVelocityPSD.Stability)                                                                          | Gets the Stability.                                                    |
| [`CyclicPhase`](#DirectionalVelocityPSD.CyclicPhase)                                                                      | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#DirectionalVelocityPSD.SweepingPhase)                                                                  | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalVelocityPSD.PhaseIncrement)                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalVelocityPSD.Frequency)                                                                          | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#DirectionalVelocityPSD.Reference)                                                                          | Gets the Reference.                                                    |
| [`ScaleFactor`](#DirectionalVelocityPSD.ScaleFactor)                                                                      | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#DirectionalVelocityPSD.AccelerationInG)                                                              | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#DirectionalVelocityPSD.Amplitude)                                                                          | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#DirectionalVelocityPSD.AllowPhaseSweep)                                                              | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#DirectionalVelocityPSD.PlotData)                                                                            | Gets the result table.                                                 |
| [`Location`](#DirectionalVelocityPSD.Location)                                                                            | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalVelocityPSD.TimeForMinimumOfMinimumValues)                                  | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalVelocityPSD.TimeForMinimumOfMaximumValues)                                  | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalVelocityPSD.LoadStepForMinimumOfMinimumValues)                          | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalVelocityPSD.LoadStepForMinimumOfMaximumValues)                          | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalVelocityPSD.TimeForMaximumOfMinimumValues)                                  | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalVelocityPSD.TimeForMaximumOfMaximumValues)                                  | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalVelocityPSD.LoadStepForMaximumOfMinimumValues)                          | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalVelocityPSD.LoadStepForMaximumOfMaximumValues)                          | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalVelocityPSD.IsSolved)                                                                            | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalVelocityPSD.ScopingMethod)                                                                  | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalVelocityPSD.SetNumber)                                                                          | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalVelocityPSD.CombinationNumber)                                                          | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalVelocityPSD.SolutionCombinationDriver)                                          | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalVelocityPSD.WaterfallPanelShowTextOnMosaic)                                | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalVelocityPSD.CrackFrontNumber)                                                            | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalVelocityPSD.GlobalIDs)                                                                          | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalVelocityPSD.Identifier)                                                                        | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalVelocityPSD.IterationNumber)                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalVelocityPSD.LoadStep)                                                                            | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalVelocityPSD.MaximumOccursOn)                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalVelocityPSD.MinimumOccursOn)                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalVelocityPSD.LoadStepNumber)                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalVelocityPSD.SolverComponentIDs)                                                        | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalVelocityPSD.Substep)                                                                              | Gets the Substep.                                                      |
| [`Average`](#DirectionalVelocityPSD.Average)                                                                              | Gets the Average.                                                      |
| [`Maximum`](#DirectionalVelocityPSD.Maximum)                                                                              | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalVelocityPSD.MaximumOfMaximumOverTime)                                            | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalVelocityPSD.MaximumOfMinimumOverTime)                                            | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalVelocityPSD.Minimum)                                                                              | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalVelocityPSD.MinimumOfMaximumOverTime)                                            | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalVelocityPSD.MinimumOfMinimumOverTime)                                            | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalVelocityPSD.Time)                                                                                    | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalVelocityPSD.DisplayTime)                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalVelocityPSD.DisplayOption)                                                                  | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalVelocityPSD.DpfEvaluation)                                                                  | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalVelocityPSD.By)                                                                                        | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalVelocityPSD.ItemType)                                                                            | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalVelocityPSD.CalculateTimeHistory)                                                    | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalVelocityPSD.Suppressed)                                                                        | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalVelocityPSD.Children)                                                                            | Gets the list of children.                                             |
| [`Comments`](#DirectionalVelocityPSD.Comments)                                                                            | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalVelocityPSD.Figures)                                                                              | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalVelocityPSD.Images)                                                                                | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalVelocityPSD.Properties)                                                                        | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalVelocityPSD.VisibleProperties)                                                          | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalVelocityPSD
```

## Property detail

### *property* DirectionalVelocityPSD.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalVelocityPSD.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DirectionalVelocityPSD.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DirectionalVelocityPSD.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
