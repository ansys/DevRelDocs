# `MiddlePrincipalElasticStrain`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MiddlePrincipalElasticStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#id0)                                                                               | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Plies)                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Position`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MiddlePrincipalElasticStrain.WaterfallPanelShowTextOnMosaic)                                                                                                                      | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#id0)                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MiddlePrincipalElasticStrain.InternalObject"></a>

### *property* MiddlePrincipalElasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DataModelObjectCategory"></a>

### *property* MiddlePrincipalElasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Mode"></a>

### *property* MiddlePrincipalElasticStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Ply"></a>

### *property* MiddlePrincipalElasticStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Plies"></a>

### *property* MiddlePrincipalElasticStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.EnvironmentSelection"></a>

### *property* MiddlePrincipalElasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.HarmonicIndex"></a>

### *property* MiddlePrincipalElasticStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CyclicMode"></a>

### *property* MiddlePrincipalElasticStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.IterationStep"></a>

### *property* MiddlePrincipalElasticStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadMultiplier"></a>

### *property* MiddlePrincipalElasticStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ReportedFrequency"></a>

### *property* MiddlePrincipalElasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SweepingPhase"></a>

### *property* MiddlePrincipalElasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PhaseIncrement"></a>

### *property* MiddlePrincipalElasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Frequency"></a>

### *property* MiddlePrincipalElasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Position"></a>

### *property* MiddlePrincipalElasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.StressStrainType"></a>

### *property* MiddlePrincipalElasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SubScopeBy"></a>

### *property* MiddlePrincipalElasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Amplitude"></a>

### *property* MiddlePrincipalElasticStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AverageAcrossBodies"></a>

### *property* MiddlePrincipalElasticStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PlotData"></a>

### *property* MiddlePrincipalElasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Location"></a>

### *property* MiddlePrincipalElasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.TimeForMinimumOfMinimumValues"></a>

### *property* MiddlePrincipalElasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.TimeForMinimumOfMaximumValues"></a>

### *property* MiddlePrincipalElasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.TimeForMaximumOfMinimumValues"></a>

### *property* MiddlePrincipalElasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.TimeForMaximumOfMaximumValues"></a>

### *property* MiddlePrincipalElasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.IsSolved"></a>

### *property* MiddlePrincipalElasticStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CoordinateSystem"></a>

### *property* MiddlePrincipalElasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ScopingMethod"></a>

### *property* MiddlePrincipalElasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SetNumber"></a>

### *property* MiddlePrincipalElasticStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CombinationNumber"></a>

### *property* MiddlePrincipalElasticStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SolutionCombinationDriver"></a>

### *property* MiddlePrincipalElasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Path"></a>

### *property* MiddlePrincipalElasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Surface"></a>

### *property* MiddlePrincipalElasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.NamedSelections"></a>

### *property* MiddlePrincipalElasticStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.WaterfallPanelShowTextOnMosaic"></a>

### *property* MiddlePrincipalElasticStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CrackFrontNumber"></a>

### *property* MiddlePrincipalElasticStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GlobalIDs"></a>

### *property* MiddlePrincipalElasticStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Identifier"></a>

### *property* MiddlePrincipalElasticStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.IterationNumber"></a>

### *property* MiddlePrincipalElasticStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStep"></a>

### *property* MiddlePrincipalElasticStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MaximumOccursOn"></a>

### *property* MiddlePrincipalElasticStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MinimumOccursOn"></a>

### *property* MiddlePrincipalElasticStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepNumber"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SolverComponentIDs"></a>

### *property* MiddlePrincipalElasticStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Substep"></a>

### *property* MiddlePrincipalElasticStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Average"></a>

### *property* MiddlePrincipalElasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Maximum"></a>

### *property* MiddlePrincipalElasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MaximumOfMaximumOverTime"></a>

### *property* MiddlePrincipalElasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MaximumOfMinimumOverTime"></a>

### *property* MiddlePrincipalElasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Minimum"></a>

### *property* MiddlePrincipalElasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MinimumOfMaximumOverTime"></a>

### *property* MiddlePrincipalElasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MinimumOfMinimumOverTime"></a>

### *property* MiddlePrincipalElasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Time"></a>

### *property* MiddlePrincipalElasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DisplayTime"></a>

### *property* MiddlePrincipalElasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GraphControlsXAxis"></a>

### *property* MiddlePrincipalElasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DisplayOption"></a>

### *property* MiddlePrincipalElasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DpfEvaluation"></a>

### *property* MiddlePrincipalElasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.By"></a>

### *property* MiddlePrincipalElasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ItemType"></a>

### *property* MiddlePrincipalElasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CalculateTimeHistory"></a>

### *property* MiddlePrincipalElasticStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Suppressed"></a>

### *property* MiddlePrincipalElasticStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Children"></a>

### *property* MiddlePrincipalElasticStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Comments"></a>

### *property* MiddlePrincipalElasticStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Figures"></a>

### *property* MiddlePrincipalElasticStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Images"></a>

### *property* MiddlePrincipalElasticStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MiddlePrincipalElasticStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Properties"></a>

### *property* MiddlePrincipalElasticStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.VisibleProperties"></a>

### *property* MiddlePrincipalElasticStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MiddlePrincipalElasticStrain.ClearGeneratedData"></a>

### MiddlePrincipalElasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.EvaluateAllResults"></a>

### MiddlePrincipalElasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.FetchRemoteResults"></a>

### MiddlePrincipalElasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ExportToTextFile"></a>

### MiddlePrincipalElasticStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ExportAnimation"></a>

### MiddlePrincipalElasticStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DuplicateWithoutResults"></a>

### MiddlePrincipalElasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CreateResultsAtAllSets"></a>

### MiddlePrincipalElasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PromoteToNamedSelection"></a>

### MiddlePrincipalElasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CreateParameter"></a>

### MiddlePrincipalElasticStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddAlert"></a>

### MiddlePrincipalElasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddConvergence"></a>

### MiddlePrincipalElasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.RenameBasedOnDefinition"></a>

### MiddlePrincipalElasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Delete"></a>

### MiddlePrincipalElasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GetChildren"></a>

### MiddlePrincipalElasticStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MiddlePrincipalElasticStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddComment"></a>

### MiddlePrincipalElasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddFigure"></a>

### MiddlePrincipalElasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddImage"></a>

### MiddlePrincipalElasticStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Activate"></a>

### MiddlePrincipalElasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CopyTo"></a>

### MiddlePrincipalElasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Duplicate"></a>

### MiddlePrincipalElasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GroupAllSimilarChildren"></a>

### MiddlePrincipalElasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GroupSimilarObjects"></a>

### MiddlePrincipalElasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PropertyByName"></a>

### MiddlePrincipalElasticStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PropertyByAPIName"></a>

### MiddlePrincipalElasticStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GetParameter"></a>

### MiddlePrincipalElasticStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.RemoveParameter"></a>

### MiddlePrincipalElasticStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

