# `EquivalentElasticStrainRST`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrainRST

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EquivalentElasticStrainRST.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                           |
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Plies)                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Position`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentElasticStrainRST.WaterfallPanelShowTextOnMosaic)                                                                                                                    | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentElasticStrainRST.InternalObject"></a>

### *property* EquivalentElasticStrainRST.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DataModelObjectCategory"></a>

### *property* EquivalentElasticStrainRST.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Mode"></a>

### *property* EquivalentElasticStrainRST.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Ply"></a>

### *property* EquivalentElasticStrainRST.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Plies"></a>

### *property* EquivalentElasticStrainRST.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.EnvironmentSelection"></a>

### *property* EquivalentElasticStrainRST.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.HarmonicIndex"></a>

### *property* EquivalentElasticStrainRST.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CyclicMode"></a>

### *property* EquivalentElasticStrainRST.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.IterationStep"></a>

### *property* EquivalentElasticStrainRST.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadMultiplier"></a>

### *property* EquivalentElasticStrainRST.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ReportedFrequency"></a>

### *property* EquivalentElasticStrainRST.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SweepingPhase"></a>

### *property* EquivalentElasticStrainRST.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PhaseIncrement"></a>

### *property* EquivalentElasticStrainRST.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Frequency"></a>

### *property* EquivalentElasticStrainRST.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Position"></a>

### *property* EquivalentElasticStrainRST.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.StressStrainType"></a>

### *property* EquivalentElasticStrainRST.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SubScopeBy"></a>

### *property* EquivalentElasticStrainRST.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Amplitude"></a>

### *property* EquivalentElasticStrainRST.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AverageAcrossBodies"></a>

### *property* EquivalentElasticStrainRST.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PlotData"></a>

### *property* EquivalentElasticStrainRST.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Location"></a>

### *property* EquivalentElasticStrainRST.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentElasticStrainRST.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentElasticStrainRST.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentElasticStrainRST.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentElasticStrainRST.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentElasticStrainRST.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentElasticStrainRST.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentElasticStrainRST.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentElasticStrainRST.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.IsSolved"></a>

### *property* EquivalentElasticStrainRST.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CoordinateSystem"></a>

### *property* EquivalentElasticStrainRST.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ScopingMethod"></a>

### *property* EquivalentElasticStrainRST.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SetNumber"></a>

### *property* EquivalentElasticStrainRST.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CombinationNumber"></a>

### *property* EquivalentElasticStrainRST.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SolutionCombinationDriver"></a>

### *property* EquivalentElasticStrainRST.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Path"></a>

### *property* EquivalentElasticStrainRST.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Surface"></a>

### *property* EquivalentElasticStrainRST.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.NamedSelections"></a>

### *property* EquivalentElasticStrainRST.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.WaterfallPanelShowTextOnMosaic"></a>

### *property* EquivalentElasticStrainRST.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CrackFrontNumber"></a>

### *property* EquivalentElasticStrainRST.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GlobalIDs"></a>

### *property* EquivalentElasticStrainRST.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Identifier"></a>

### *property* EquivalentElasticStrainRST.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.IterationNumber"></a>

### *property* EquivalentElasticStrainRST.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStep"></a>

### *property* EquivalentElasticStrainRST.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MaximumOccursOn"></a>

### *property* EquivalentElasticStrainRST.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MinimumOccursOn"></a>

### *property* EquivalentElasticStrainRST.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepNumber"></a>

### *property* EquivalentElasticStrainRST.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SolverComponentIDs"></a>

### *property* EquivalentElasticStrainRST.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Substep"></a>

### *property* EquivalentElasticStrainRST.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Average"></a>

### *property* EquivalentElasticStrainRST.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Maximum"></a>

### *property* EquivalentElasticStrainRST.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MaximumOfMaximumOverTime"></a>

### *property* EquivalentElasticStrainRST.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MaximumOfMinimumOverTime"></a>

### *property* EquivalentElasticStrainRST.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Minimum"></a>

### *property* EquivalentElasticStrainRST.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MinimumOfMaximumOverTime"></a>

### *property* EquivalentElasticStrainRST.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MinimumOfMinimumOverTime"></a>

### *property* EquivalentElasticStrainRST.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Time"></a>

### *property* EquivalentElasticStrainRST.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DisplayTime"></a>

### *property* EquivalentElasticStrainRST.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GraphControlsXAxis"></a>

### *property* EquivalentElasticStrainRST.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DisplayOption"></a>

### *property* EquivalentElasticStrainRST.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DpfEvaluation"></a>

### *property* EquivalentElasticStrainRST.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.By"></a>

### *property* EquivalentElasticStrainRST.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ItemType"></a>

### *property* EquivalentElasticStrainRST.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CalculateTimeHistory"></a>

### *property* EquivalentElasticStrainRST.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Suppressed"></a>

### *property* EquivalentElasticStrainRST.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Children"></a>

### *property* EquivalentElasticStrainRST.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Comments"></a>

### *property* EquivalentElasticStrainRST.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Figures"></a>

### *property* EquivalentElasticStrainRST.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Images"></a>

### *property* EquivalentElasticStrainRST.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EquivalentElasticStrainRST.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Properties"></a>

### *property* EquivalentElasticStrainRST.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.VisibleProperties"></a>

### *property* EquivalentElasticStrainRST.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentElasticStrainRST.ClearGeneratedData"></a>

### EquivalentElasticStrainRST.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.EvaluateAllResults"></a>

### EquivalentElasticStrainRST.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.FetchRemoteResults"></a>

### EquivalentElasticStrainRST.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ExportToTextFile"></a>

### EquivalentElasticStrainRST.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ExportAnimation"></a>

### EquivalentElasticStrainRST.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DuplicateWithoutResults"></a>

### EquivalentElasticStrainRST.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CreateResultsAtAllSets"></a>

### EquivalentElasticStrainRST.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PromoteToNamedSelection"></a>

### EquivalentElasticStrainRST.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CreateParameter"></a>

### EquivalentElasticStrainRST.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddAlert"></a>

### EquivalentElasticStrainRST.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddConvergence"></a>

### EquivalentElasticStrainRST.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.RenameBasedOnDefinition"></a>

### EquivalentElasticStrainRST.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Delete"></a>

### EquivalentElasticStrainRST.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GetChildren"></a>

### EquivalentElasticStrainRST.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EquivalentElasticStrainRST.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddComment"></a>

### EquivalentElasticStrainRST.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddFigure"></a>

### EquivalentElasticStrainRST.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddImage"></a>

### EquivalentElasticStrainRST.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Activate"></a>

### EquivalentElasticStrainRST.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CopyTo"></a>

### EquivalentElasticStrainRST.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Duplicate"></a>

### EquivalentElasticStrainRST.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GroupAllSimilarChildren"></a>

### EquivalentElasticStrainRST.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GroupSimilarObjects"></a>

### EquivalentElasticStrainRST.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PropertyByName"></a>

### EquivalentElasticStrainRST.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PropertyByAPIName"></a>

### EquivalentElasticStrainRST.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GetParameter"></a>

### EquivalentElasticStrainRST.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.RemoveParameter"></a>

### EquivalentElasticStrainRST.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

