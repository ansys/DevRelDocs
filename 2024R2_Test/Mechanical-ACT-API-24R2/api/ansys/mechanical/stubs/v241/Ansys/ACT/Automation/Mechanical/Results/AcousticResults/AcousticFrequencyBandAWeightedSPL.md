# `AcousticFrequencyBandAWeightedSPL`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFrequencyBandAWeightedSPL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFrequencyBandAWeightedSPL.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#id0)                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`Stability`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Stability)                                                 | Gets the Stability.                                                    |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticFrequencyBandAWeightedSPL.WaterfallPanelShowTextOnMosaic)                                                                                                                             | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#id0)                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#AcousticFrequencyBandAWeightedSPL.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFrequencyBandAWeightedSPL.InternalObject"></a>

### *property* AcousticFrequencyBandAWeightedSPL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Mode"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ReportedFrequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DampedFrequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ModalDampingRatio"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Stability"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SweepingPhase"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Frequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Amplitude"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PlotData"></a>

### *property* AcousticFrequencyBandAWeightedSPL.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Location"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.IsSolved"></a>

### *property* AcousticFrequencyBandAWeightedSPL.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CoordinateSystem"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ScopingMethod"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SetNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CombinationNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Path"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Surface"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.NamedSelections"></a>

### *property* AcousticFrequencyBandAWeightedSPL.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.WaterfallPanelShowTextOnMosaic"></a>

### *property* AcousticFrequencyBandAWeightedSPL.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CrackFrontNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GlobalIDs"></a>

### *property* AcousticFrequencyBandAWeightedSPL.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Identifier"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.IterationNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStep"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOccursOn"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOccursOn"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SolverComponentIDs"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Substep"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Average"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Maximum"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Minimum"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Time"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DisplayTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis"></a>

### *property* AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DisplayOption"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DpfEvaluation"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.By"></a>

### *property* AcousticFrequencyBandAWeightedSPL.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ItemType"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Suppressed"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Children"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Comments"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Figures"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Images"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticFrequencyBandAWeightedSPL.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Properties"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.VisibleProperties"></a>

### *property* AcousticFrequencyBandAWeightedSPL.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFrequencyBandAWeightedSPL.ClearGeneratedData"></a>

### AcousticFrequencyBandAWeightedSPL.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.EvaluateAllResults"></a>

### AcousticFrequencyBandAWeightedSPL.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.FetchRemoteResults"></a>

### AcousticFrequencyBandAWeightedSPL.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ExportToTextFile"></a>

### AcousticFrequencyBandAWeightedSPL.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ExportAnimation"></a>

### AcousticFrequencyBandAWeightedSPL.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults"></a>

### AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets"></a>

### AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection"></a>

### AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CreateParameter"></a>

### AcousticFrequencyBandAWeightedSPL.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddAlert"></a>

### AcousticFrequencyBandAWeightedSPL.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddConvergence"></a>

### AcousticFrequencyBandAWeightedSPL.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition"></a>

### AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Delete"></a>

### AcousticFrequencyBandAWeightedSPL.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GetChildren"></a>

### AcousticFrequencyBandAWeightedSPL.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticFrequencyBandAWeightedSPL.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddComment"></a>

### AcousticFrequencyBandAWeightedSPL.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddFigure"></a>

### AcousticFrequencyBandAWeightedSPL.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddImage"></a>

### AcousticFrequencyBandAWeightedSPL.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Activate"></a>

### AcousticFrequencyBandAWeightedSPL.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CopyTo"></a>

### AcousticFrequencyBandAWeightedSPL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Duplicate"></a>

### AcousticFrequencyBandAWeightedSPL.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren"></a>

### AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects"></a>

### AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PropertyByName"></a>

### AcousticFrequencyBandAWeightedSPL.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PropertyByAPIName"></a>

### AcousticFrequencyBandAWeightedSPL.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GetParameter"></a>

### AcousticFrequencyBandAWeightedSPL.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.RemoveParameter"></a>

### AcousticFrequencyBandAWeightedSPL.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

