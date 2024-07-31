# `LinearizedEquivalentStress`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedEquivalentStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LinearizedEquivalentStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`ZeroThroughThicknessBendingStress`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.ZeroThroughThicknessBendingStress) | Gets or sets the ZeroThroughThicknessBendingStress.                    |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`AverageRadiusOfCurvature`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.BendingInside)                                         | Gets the BendingInside.                                                |
| [`BendingOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.BendingOutside)                                       | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Membrane)                                                   | Gets the Membrane.                                                     |
| [`PeakCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.PeakCenter)                                               | Gets the PeakCenter.                                                   |
| [`PeakInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.PeakInside)                                               | Gets the PeakInside.                                                   |
| [`PeakOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.PeakOutside)                                             | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`TotalCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.TotalCenter)                                             | Gets the TotalCenter.                                                  |
| [`TotalInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.TotalInside)                                             | Gets the TotalInside.                                                  |
| [`TotalOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.TotalOutside)                                           | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Subtype)                                                     | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`Position`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`ThroughThicknessBendingStress`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#LinearizedEquivalentStress.WaterfallPanelShowTextOnMosaic)                                                                                                                              | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/LinearizedStressResults/LinearizedEquivalentStress.md#LinearizedEquivalentStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="LinearizedEquivalentStress.InternalObject"></a>

### *property* LinearizedEquivalentStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.DataModelObjectCategory"></a>

### *property* LinearizedEquivalentStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedEquivalentStress.ZeroThroughThicknessBendingStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.LoadMultiplier"></a>

### *property* LinearizedEquivalentStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.AverageRadiusOfCurvature"></a>

### *property* LinearizedEquivalentStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.BendingInside"></a>

### *property* LinearizedEquivalentStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.BendingOutside"></a>

### *property* LinearizedEquivalentStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MembraneBendingCenter"></a>

### *property* LinearizedEquivalentStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MembraneBendingInside"></a>

### *property* LinearizedEquivalentStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MembraneBendingOutside"></a>

### *property* LinearizedEquivalentStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Membrane"></a>

### *property* LinearizedEquivalentStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.PeakCenter"></a>

### *property* LinearizedEquivalentStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.PeakInside"></a>

### *property* LinearizedEquivalentStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.PeakOutside"></a>

### *property* LinearizedEquivalentStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.SweepingPhase"></a>

### *property* LinearizedEquivalentStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Frequency"></a>

### *property* LinearizedEquivalentStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.TotalCenter"></a>

### *property* LinearizedEquivalentStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.TotalInside"></a>

### *property* LinearizedEquivalentStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.TotalOutside"></a>

### *property* LinearizedEquivalentStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Linearized2DBehavior"></a>

### *property* LinearizedEquivalentStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Subtype"></a>

### *property* LinearizedEquivalentStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.NormalOrientation"></a>

### *property* LinearizedEquivalentStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Position"></a>

### *property* LinearizedEquivalentStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.StressStrainType"></a>

### *property* LinearizedEquivalentStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.ThroughThicknessBendingStress"></a>

### *property* LinearizedEquivalentStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Amplitude"></a>

### *property* LinearizedEquivalentStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.PlotData"></a>

### *property* LinearizedEquivalentStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Location"></a>

### *property* LinearizedEquivalentStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedEquivalentStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedEquivalentStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedEquivalentStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedEquivalentStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedEquivalentStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedEquivalentStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedEquivalentStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedEquivalentStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.IsSolved"></a>

### *property* LinearizedEquivalentStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.CoordinateSystem"></a>

### *property* LinearizedEquivalentStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.ScopingMethod"></a>

### *property* LinearizedEquivalentStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.SetNumber"></a>

### *property* LinearizedEquivalentStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.CombinationNumber"></a>

### *property* LinearizedEquivalentStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.SolutionCombinationDriver"></a>

### *property* LinearizedEquivalentStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Path"></a>

### *property* LinearizedEquivalentStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Surface"></a>

### *property* LinearizedEquivalentStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.NamedSelections"></a>

### *property* LinearizedEquivalentStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* LinearizedEquivalentStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.CrackFrontNumber"></a>

### *property* LinearizedEquivalentStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.GlobalIDs"></a>

### *property* LinearizedEquivalentStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Identifier"></a>

### *property* LinearizedEquivalentStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.IterationNumber"></a>

### *property* LinearizedEquivalentStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.LoadStep"></a>

### *property* LinearizedEquivalentStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MaximumOccursOn"></a>

### *property* LinearizedEquivalentStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MinimumOccursOn"></a>

### *property* LinearizedEquivalentStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.LoadStepNumber"></a>

### *property* LinearizedEquivalentStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.SolverComponentIDs"></a>

### *property* LinearizedEquivalentStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Substep"></a>

### *property* LinearizedEquivalentStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Average"></a>

### *property* LinearizedEquivalentStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Maximum"></a>

### *property* LinearizedEquivalentStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MaximumOfMaximumOverTime"></a>

### *property* LinearizedEquivalentStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MaximumOfMinimumOverTime"></a>

### *property* LinearizedEquivalentStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Minimum"></a>

### *property* LinearizedEquivalentStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MinimumOfMaximumOverTime"></a>

### *property* LinearizedEquivalentStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.MinimumOfMinimumOverTime"></a>

### *property* LinearizedEquivalentStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Time"></a>

### *property* LinearizedEquivalentStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.DisplayTime"></a>

### *property* LinearizedEquivalentStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.GraphControlsXAxis"></a>

### *property* LinearizedEquivalentStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.DisplayOption"></a>

### *property* LinearizedEquivalentStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.DpfEvaluation"></a>

### *property* LinearizedEquivalentStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.By"></a>

### *property* LinearizedEquivalentStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.ItemType"></a>

### *property* LinearizedEquivalentStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.CalculateTimeHistory"></a>

### *property* LinearizedEquivalentStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Suppressed"></a>

### *property* LinearizedEquivalentStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Children"></a>

### *property* LinearizedEquivalentStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Comments"></a>

### *property* LinearizedEquivalentStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Figures"></a>

### *property* LinearizedEquivalentStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Images"></a>

### *property* LinearizedEquivalentStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LinearizedEquivalentStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Properties"></a>

### *property* LinearizedEquivalentStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.VisibleProperties"></a>

### *property* LinearizedEquivalentStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedEquivalentStress.ClearGeneratedData"></a>

### LinearizedEquivalentStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.EvaluateAllResults"></a>

### LinearizedEquivalentStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.FetchRemoteResults"></a>

### LinearizedEquivalentStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.ExportToTextFile"></a>

### LinearizedEquivalentStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.ExportAnimation"></a>

### LinearizedEquivalentStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.DuplicateWithoutResults"></a>

### LinearizedEquivalentStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.CreateResultsAtAllSets"></a>

### LinearizedEquivalentStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.PromoteToNamedSelection"></a>

### LinearizedEquivalentStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.CreateParameter"></a>

### LinearizedEquivalentStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.AddAlert"></a>

### LinearizedEquivalentStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.AddConvergence"></a>

### LinearizedEquivalentStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.RenameBasedOnDefinition"></a>

### LinearizedEquivalentStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Delete"></a>

### LinearizedEquivalentStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.GetChildren"></a>

### LinearizedEquivalentStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LinearizedEquivalentStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.AddComment"></a>

### LinearizedEquivalentStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.AddFigure"></a>

### LinearizedEquivalentStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.AddImage"></a>

### LinearizedEquivalentStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Activate"></a>

### LinearizedEquivalentStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.CopyTo"></a>

### LinearizedEquivalentStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.Duplicate"></a>

### LinearizedEquivalentStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.GroupAllSimilarChildren"></a>

### LinearizedEquivalentStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.GroupSimilarObjects"></a>

### LinearizedEquivalentStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.PropertyByName"></a>

### LinearizedEquivalentStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.PropertyByAPIName"></a>

### LinearizedEquivalentStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.GetParameter"></a>

### LinearizedEquivalentStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedEquivalentStress.RemoveParameter"></a>

### LinearizedEquivalentStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

