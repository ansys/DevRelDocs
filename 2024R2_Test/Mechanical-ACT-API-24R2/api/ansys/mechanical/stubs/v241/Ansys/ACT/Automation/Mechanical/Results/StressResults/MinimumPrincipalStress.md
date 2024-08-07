# `MinimumPrincipalStress`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StressResults.MinimumPrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MinimumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#id0)                                                                         | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Plies)                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`Layer`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Layer)                                                         | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`Probability`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Probability)                                             | Gets the Probability.                                                  |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.BendingInside)                                         | Gets the BendingInside.                                                |
| [`BendingOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.BendingOutside)                                       | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Membrane)                                                   | Gets the Membrane.                                                     |
| [`PeakCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.PeakCenter)                                               | Gets the PeakCenter.                                                   |
| [`PeakInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.PeakInside)                                               | Gets the PeakInside.                                                   |
| [`PeakOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.PeakOutside)                                             | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`TotalCenter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.TotalCenter)                                             | Gets the TotalCenter.                                                  |
| [`TotalInside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.TotalInside)                                             | Gets the TotalInside.                                                  |
| [`TotalOutside`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.TotalOutside)                                           | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Subtype)                                                     | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`Position`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MinimumPrincipalStress.WaterfallPanelShowTextOnMosaic)                                                                                                                | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#id0)                                                                         | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MinimumPrincipalStress.InternalObject"></a>

### *property* MinimumPrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DataModelObjectCategory"></a>

### *property* MinimumPrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Mode"></a>

### *property* MinimumPrincipalStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Ply"></a>

### *property* MinimumPrincipalStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Plies"></a>

### *property* MinimumPrincipalStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.EnvironmentSelection"></a>

### *property* MinimumPrincipalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.HarmonicIndex"></a>

### *property* MinimumPrincipalStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CyclicMode"></a>

### *property* MinimumPrincipalStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IterationStep"></a>

### *property* MinimumPrincipalStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Layer"></a>

### *property* MinimumPrincipalStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadMultiplier"></a>

### *property* MinimumPrincipalStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Probability"></a>

### *property* MinimumPrincipalStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ReportedFrequency"></a>

### *property* MinimumPrincipalStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AverageRadiusOfCurvature"></a>

### *property* MinimumPrincipalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.BendingInside"></a>

### *property* MinimumPrincipalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.BendingOutside"></a>

### *property* MinimumPrincipalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MembraneBendingCenter"></a>

### *property* MinimumPrincipalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MembraneBendingInside"></a>

### *property* MinimumPrincipalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MembraneBendingOutside"></a>

### *property* MinimumPrincipalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Membrane"></a>

### *property* MinimumPrincipalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PeakCenter"></a>

### *property* MinimumPrincipalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PeakInside"></a>

### *property* MinimumPrincipalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PeakOutside"></a>

### *property* MinimumPrincipalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SweepingPhase"></a>

### *property* MinimumPrincipalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PhaseIncrement"></a>

### *property* MinimumPrincipalStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Frequency"></a>

### *property* MinimumPrincipalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TotalCenter"></a>

### *property* MinimumPrincipalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TotalInside"></a>

### *property* MinimumPrincipalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TotalOutside"></a>

### *property* MinimumPrincipalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Linearized2DBehavior"></a>

### *property* MinimumPrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Subtype"></a>

### *property* MinimumPrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.NormalOrientation"></a>

### *property* MinimumPrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ScaleFactor"></a>

### *property* MinimumPrincipalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Position"></a>

### *property* MinimumPrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.StressStrainType"></a>

### *property* MinimumPrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SubScopeBy"></a>

### *property* MinimumPrincipalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ThroughThicknessBendingStress"></a>

### *property* MinimumPrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Amplitude"></a>

### *property* MinimumPrincipalStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AverageAcrossBodies"></a>

### *property* MinimumPrincipalStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PlotData"></a>

### *property* MinimumPrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Location"></a>

### *property* MinimumPrincipalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TimeForMinimumOfMinimumValues"></a>

### *property* MinimumPrincipalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TimeForMinimumOfMaximumValues"></a>

### *property* MinimumPrincipalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* MinimumPrincipalStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* MinimumPrincipalStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TimeForMaximumOfMinimumValues"></a>

### *property* MinimumPrincipalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TimeForMaximumOfMaximumValues"></a>

### *property* MinimumPrincipalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* MinimumPrincipalStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* MinimumPrincipalStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IsSolved"></a>

### *property* MinimumPrincipalStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CoordinateSystem"></a>

### *property* MinimumPrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ScopingMethod"></a>

### *property* MinimumPrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SetNumber"></a>

### *property* MinimumPrincipalStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CombinationNumber"></a>

### *property* MinimumPrincipalStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SolutionCombinationDriver"></a>

### *property* MinimumPrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Path"></a>

### *property* MinimumPrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Surface"></a>

### *property* MinimumPrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.NamedSelections"></a>

### *property* MinimumPrincipalStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* MinimumPrincipalStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CrackFrontNumber"></a>

### *property* MinimumPrincipalStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GlobalIDs"></a>

### *property* MinimumPrincipalStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Identifier"></a>

### *property* MinimumPrincipalStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IterationNumber"></a>

### *property* MinimumPrincipalStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStep"></a>

### *property* MinimumPrincipalStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MaximumOccursOn"></a>

### *property* MinimumPrincipalStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MinimumOccursOn"></a>

### *property* MinimumPrincipalStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepNumber"></a>

### *property* MinimumPrincipalStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SolverComponentIDs"></a>

### *property* MinimumPrincipalStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Substep"></a>

### *property* MinimumPrincipalStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Average"></a>

### *property* MinimumPrincipalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Maximum"></a>

### *property* MinimumPrincipalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MaximumOfMaximumOverTime"></a>

### *property* MinimumPrincipalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MaximumOfMinimumOverTime"></a>

### *property* MinimumPrincipalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Minimum"></a>

### *property* MinimumPrincipalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MinimumOfMaximumOverTime"></a>

### *property* MinimumPrincipalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MinimumOfMinimumOverTime"></a>

### *property* MinimumPrincipalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Time"></a>

### *property* MinimumPrincipalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DisplayTime"></a>

### *property* MinimumPrincipalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GraphControlsXAxis"></a>

### *property* MinimumPrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DisplayOption"></a>

### *property* MinimumPrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DpfEvaluation"></a>

### *property* MinimumPrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.By"></a>

### *property* MinimumPrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ItemType"></a>

### *property* MinimumPrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CalculateTimeHistory"></a>

### *property* MinimumPrincipalStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Suppressed"></a>

### *property* MinimumPrincipalStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Children"></a>

### *property* MinimumPrincipalStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Comments"></a>

### *property* MinimumPrincipalStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Figures"></a>

### *property* MinimumPrincipalStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Images"></a>

### *property* MinimumPrincipalStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MinimumPrincipalStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Properties"></a>

### *property* MinimumPrincipalStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.VisibleProperties"></a>

### *property* MinimumPrincipalStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MinimumPrincipalStress.ClearGeneratedData"></a>

### MinimumPrincipalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.EvaluateAllResults"></a>

### MinimumPrincipalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.FetchRemoteResults"></a>

### MinimumPrincipalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ExportToTextFile"></a>

### MinimumPrincipalStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ExportAnimation"></a>

### MinimumPrincipalStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DuplicateWithoutResults"></a>

### MinimumPrincipalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CreateResultsAtAllSets"></a>

### MinimumPrincipalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PromoteToNamedSelection"></a>

### MinimumPrincipalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CreateParameter"></a>

### MinimumPrincipalStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddAlert"></a>

### MinimumPrincipalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddConvergence"></a>

### MinimumPrincipalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RenameBasedOnDefinition"></a>

### MinimumPrincipalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Delete"></a>

### MinimumPrincipalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetChildren"></a>

### MinimumPrincipalStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MinimumPrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddComment"></a>

### MinimumPrincipalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddFigure"></a>

### MinimumPrincipalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddImage"></a>

### MinimumPrincipalStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Activate"></a>

### MinimumPrincipalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CopyTo"></a>

### MinimumPrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Duplicate"></a>

### MinimumPrincipalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GroupAllSimilarChildren"></a>

### MinimumPrincipalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GroupSimilarObjects"></a>

### MinimumPrincipalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PropertyByName"></a>

### MinimumPrincipalStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PropertyByAPIName"></a>

### MinimumPrincipalStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetParameter"></a>

### MinimumPrincipalStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RemoveParameter"></a>

### MinimumPrincipalStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

