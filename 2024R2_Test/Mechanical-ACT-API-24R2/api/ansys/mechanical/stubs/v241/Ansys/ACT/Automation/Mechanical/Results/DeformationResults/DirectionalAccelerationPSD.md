# `DirectionalAccelerationPSD`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalAccelerationPSD

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectionalAccelerationPSD.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                           |
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`Probability`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Probability)                                             | Gets the Probability.                                                  |
| [`ScaleFactorValue`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Stability)                                                 | Gets the Stability.                                                    |
| [`CyclicPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CyclicPhase)                                             | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.DeformationType)                                     | Gets or sets the DeformationType.                                      |
| [`Reference`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Reference)                                                 | Gets the Reference.                                                    |
| [`ScaleFactor`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.AccelerationInG)                                     | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.AllowPhaseSweep)                                     | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalAccelerationPSD.WaterfallPanelShowTextOnMosaic)                                                                                                                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/DirectionalAccelerationPSD.md#DirectionalAccelerationPSD.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalAccelerationPSD.InternalObject"></a>

### *property* DirectionalAccelerationPSD.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.NormalOrientation"></a>

### *property* DirectionalAccelerationPSD.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DataModelObjectCategory"></a>

### *property* DirectionalAccelerationPSD.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Mode"></a>

### *property* DirectionalAccelerationPSD.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ReportedFrequency"></a>

### *property* DirectionalAccelerationPSD.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DampedFrequency"></a>

### *property* DirectionalAccelerationPSD.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.EnvironmentSelection"></a>

### *property* DirectionalAccelerationPSD.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LogarithmicDecrement"></a>

### *property* DirectionalAccelerationPSD.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ModalDampingRatio"></a>

### *property* DirectionalAccelerationPSD.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.HarmonicIndex"></a>

### *property* DirectionalAccelerationPSD.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CyclicMode"></a>

### *property* DirectionalAccelerationPSD.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.IterationStep"></a>

### *property* DirectionalAccelerationPSD.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadMultiplier"></a>

### *property* DirectionalAccelerationPSD.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Probability"></a>

### *property* DirectionalAccelerationPSD.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ScaleFactorValue"></a>

### *property* DirectionalAccelerationPSD.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Stability"></a>

### *property* DirectionalAccelerationPSD.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CyclicPhase"></a>

### *property* DirectionalAccelerationPSD.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.SweepingPhase"></a>

### *property* DirectionalAccelerationPSD.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PhaseIncrement"></a>

### *property* DirectionalAccelerationPSD.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Frequency"></a>

### *property* DirectionalAccelerationPSD.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DeformationType"></a>

### *property* DirectionalAccelerationPSD.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Reference"></a>

### *property* DirectionalAccelerationPSD.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ScaleFactor"></a>

### *property* DirectionalAccelerationPSD.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AccelerationInG"></a>

### *property* DirectionalAccelerationPSD.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Amplitude"></a>

### *property* DirectionalAccelerationPSD.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AllowPhaseSweep"></a>

### *property* DirectionalAccelerationPSD.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PlotData"></a>

### *property* DirectionalAccelerationPSD.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Location"></a>

### *property* DirectionalAccelerationPSD.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalAccelerationPSD.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalAccelerationPSD.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalAccelerationPSD.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalAccelerationPSD.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalAccelerationPSD.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalAccelerationPSD.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalAccelerationPSD.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalAccelerationPSD.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.IsSolved"></a>

### *property* DirectionalAccelerationPSD.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CoordinateSystem"></a>

### *property* DirectionalAccelerationPSD.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ScopingMethod"></a>

### *property* DirectionalAccelerationPSD.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.SetNumber"></a>

### *property* DirectionalAccelerationPSD.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CombinationNumber"></a>

### *property* DirectionalAccelerationPSD.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.SolutionCombinationDriver"></a>

### *property* DirectionalAccelerationPSD.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Path"></a>

### *property* DirectionalAccelerationPSD.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Surface"></a>

### *property* DirectionalAccelerationPSD.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.NamedSelections"></a>

### *property* DirectionalAccelerationPSD.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalAccelerationPSD.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CrackFrontNumber"></a>

### *property* DirectionalAccelerationPSD.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GlobalIDs"></a>

### *property* DirectionalAccelerationPSD.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Identifier"></a>

### *property* DirectionalAccelerationPSD.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.IterationNumber"></a>

### *property* DirectionalAccelerationPSD.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStep"></a>

### *property* DirectionalAccelerationPSD.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MaximumOccursOn"></a>

### *property* DirectionalAccelerationPSD.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MinimumOccursOn"></a>

### *property* DirectionalAccelerationPSD.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepNumber"></a>

### *property* DirectionalAccelerationPSD.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.SolverComponentIDs"></a>

### *property* DirectionalAccelerationPSD.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Substep"></a>

### *property* DirectionalAccelerationPSD.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Average"></a>

### *property* DirectionalAccelerationPSD.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Maximum"></a>

### *property* DirectionalAccelerationPSD.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MaximumOfMaximumOverTime"></a>

### *property* DirectionalAccelerationPSD.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MaximumOfMinimumOverTime"></a>

### *property* DirectionalAccelerationPSD.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Minimum"></a>

### *property* DirectionalAccelerationPSD.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MinimumOfMaximumOverTime"></a>

### *property* DirectionalAccelerationPSD.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MinimumOfMinimumOverTime"></a>

### *property* DirectionalAccelerationPSD.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Time"></a>

### *property* DirectionalAccelerationPSD.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DisplayTime"></a>

### *property* DirectionalAccelerationPSD.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GraphControlsXAxis"></a>

### *property* DirectionalAccelerationPSD.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DisplayOption"></a>

### *property* DirectionalAccelerationPSD.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DpfEvaluation"></a>

### *property* DirectionalAccelerationPSD.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.By"></a>

### *property* DirectionalAccelerationPSD.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ItemType"></a>

### *property* DirectionalAccelerationPSD.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CalculateTimeHistory"></a>

### *property* DirectionalAccelerationPSD.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Suppressed"></a>

### *property* DirectionalAccelerationPSD.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Children"></a>

### *property* DirectionalAccelerationPSD.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Comments"></a>

### *property* DirectionalAccelerationPSD.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Figures"></a>

### *property* DirectionalAccelerationPSD.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Images"></a>

### *property* DirectionalAccelerationPSD.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalAccelerationPSD.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Properties"></a>

### *property* DirectionalAccelerationPSD.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.VisibleProperties"></a>

### *property* DirectionalAccelerationPSD.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalAccelerationPSD.ClearGeneratedData"></a>

### DirectionalAccelerationPSD.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.EvaluateAllResults"></a>

### DirectionalAccelerationPSD.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.FetchRemoteResults"></a>

### DirectionalAccelerationPSD.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ExportToTextFile"></a>

### DirectionalAccelerationPSD.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ExportAnimation"></a>

### DirectionalAccelerationPSD.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DuplicateWithoutResults"></a>

### DirectionalAccelerationPSD.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CreateResultsAtAllSets"></a>

### DirectionalAccelerationPSD.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PromoteToNamedSelection"></a>

### DirectionalAccelerationPSD.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CreateParameter"></a>

### DirectionalAccelerationPSD.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddAlert"></a>

### DirectionalAccelerationPSD.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddConvergence"></a>

### DirectionalAccelerationPSD.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.RenameBasedOnDefinition"></a>

### DirectionalAccelerationPSD.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Delete"></a>

### DirectionalAccelerationPSD.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GetChildren"></a>

### DirectionalAccelerationPSD.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalAccelerationPSD.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddComment"></a>

### DirectionalAccelerationPSD.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddFigure"></a>

### DirectionalAccelerationPSD.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddImage"></a>

### DirectionalAccelerationPSD.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Activate"></a>

### DirectionalAccelerationPSD.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CopyTo"></a>

### DirectionalAccelerationPSD.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Duplicate"></a>

### DirectionalAccelerationPSD.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GroupAllSimilarChildren"></a>

### DirectionalAccelerationPSD.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GroupSimilarObjects"></a>

### DirectionalAccelerationPSD.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PropertyByName"></a>

### DirectionalAccelerationPSD.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PropertyByAPIName"></a>

### DirectionalAccelerationPSD.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GetParameter"></a>

### DirectionalAccelerationPSD.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.RemoveParameter"></a>

### DirectionalAccelerationPSD.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

