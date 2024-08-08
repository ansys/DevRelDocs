# `TotalDeformation`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalDeformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalDeformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#id0)                                                                   | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`Probability`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Probability)                                             | Gets the Probability.                                                  |
| [`ScaleFactorValue`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Stability)                                                 | Gets the Stability.                                                    |
| [`CyclicPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CyclicPhase)                                             | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.DeformationType)                                     | Gets or sets the DeformationType.                                      |
| [`Reference`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Reference)                                                 | Gets the Reference.                                                    |
| [`ScaleFactor`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.AccelerationInG)                                     | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.AllowPhaseSweep)                                     | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#TotalDeformation.WaterfallPanelShowTextOnMosaic)                                                                                                               | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#id0)                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="TotalDeformation.InternalObject"></a>

### *property* TotalDeformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DataModelObjectCategory"></a>

### *property* TotalDeformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Mode"></a>

### *property* TotalDeformation.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ReportedFrequency"></a>

### *property* TotalDeformation.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DampedFrequency"></a>

### *property* TotalDeformation.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.EnvironmentSelection"></a>

### *property* TotalDeformation.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LogarithmicDecrement"></a>

### *property* TotalDeformation.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ModalDampingRatio"></a>

### *property* TotalDeformation.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.HarmonicIndex"></a>

### *property* TotalDeformation.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CyclicMode"></a>

### *property* TotalDeformation.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IterationStep"></a>

### *property* TotalDeformation.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadMultiplier"></a>

### *property* TotalDeformation.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Probability"></a>

### *property* TotalDeformation.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScaleFactorValue"></a>

### *property* TotalDeformation.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Stability"></a>

### *property* TotalDeformation.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CyclicPhase"></a>

### *property* TotalDeformation.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SweepingPhase"></a>

### *property* TotalDeformation.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PhaseIncrement"></a>

### *property* TotalDeformation.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Frequency"></a>

### *property* TotalDeformation.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DeformationType"></a>

### *property* TotalDeformation.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Reference"></a>

### *property* TotalDeformation.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScaleFactor"></a>

### *property* TotalDeformation.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AccelerationInG"></a>

### *property* TotalDeformation.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Amplitude"></a>

### *property* TotalDeformation.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AllowPhaseSweep"></a>

### *property* TotalDeformation.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PlotData"></a>

### *property* TotalDeformation.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Location"></a>

### *property* TotalDeformation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMinimumOfMinimumValues"></a>

### *property* TotalDeformation.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMinimumOfMaximumValues"></a>

### *property* TotalDeformation.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalDeformation.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalDeformation.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMaximumOfMinimumValues"></a>

### *property* TotalDeformation.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMaximumOfMaximumValues"></a>

### *property* TotalDeformation.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalDeformation.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalDeformation.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IsSolved"></a>

### *property* TotalDeformation.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CoordinateSystem"></a>

### *property* TotalDeformation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScopingMethod"></a>

### *property* TotalDeformation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SetNumber"></a>

### *property* TotalDeformation.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CombinationNumber"></a>

### *property* TotalDeformation.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SolutionCombinationDriver"></a>

### *property* TotalDeformation.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Path"></a>

### *property* TotalDeformation.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Surface"></a>

### *property* TotalDeformation.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.NamedSelections"></a>

### *property* TotalDeformation.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.WaterfallPanelShowTextOnMosaic"></a>

### *property* TotalDeformation.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CrackFrontNumber"></a>

### *property* TotalDeformation.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GlobalIDs"></a>

### *property* TotalDeformation.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Identifier"></a>

### *property* TotalDeformation.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IterationNumber"></a>

### *property* TotalDeformation.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStep"></a>

### *property* TotalDeformation.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOccursOn"></a>

### *property* TotalDeformation.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOccursOn"></a>

### *property* TotalDeformation.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepNumber"></a>

### *property* TotalDeformation.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SolverComponentIDs"></a>

### *property* TotalDeformation.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Substep"></a>

### *property* TotalDeformation.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Average"></a>

### *property* TotalDeformation.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Maximum"></a>

### *property* TotalDeformation.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOfMaximumOverTime"></a>

### *property* TotalDeformation.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOfMinimumOverTime"></a>

### *property* TotalDeformation.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Minimum"></a>

### *property* TotalDeformation.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOfMaximumOverTime"></a>

### *property* TotalDeformation.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOfMinimumOverTime"></a>

### *property* TotalDeformation.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Time"></a>

### *property* TotalDeformation.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DisplayTime"></a>

### *property* TotalDeformation.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GraphControlsXAxis"></a>

### *property* TotalDeformation.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DisplayOption"></a>

### *property* TotalDeformation.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DpfEvaluation"></a>

### *property* TotalDeformation.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.By"></a>

### *property* TotalDeformation.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ItemType"></a>

### *property* TotalDeformation.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CalculateTimeHistory"></a>

### *property* TotalDeformation.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Suppressed"></a>

### *property* TotalDeformation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Children"></a>

### *property* TotalDeformation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Comments"></a>

### *property* TotalDeformation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Figures"></a>

### *property* TotalDeformation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Images"></a>

### *property* TotalDeformation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TotalDeformation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Properties"></a>

### *property* TotalDeformation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.VisibleProperties"></a>

### *property* TotalDeformation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalDeformation.ClearGeneratedData"></a>

### TotalDeformation.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.EvaluateAllResults"></a>

### TotalDeformation.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.FetchRemoteResults"></a>

### TotalDeformation.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ExportToTextFile"></a>

### TotalDeformation.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ExportAnimation"></a>

### TotalDeformation.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DuplicateWithoutResults"></a>

### TotalDeformation.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CreateResultsAtAllSets"></a>

### TotalDeformation.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PromoteToNamedSelection"></a>

### TotalDeformation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CreateParameter"></a>

### TotalDeformation.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddAlert"></a>

### TotalDeformation.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddConvergence"></a>

### TotalDeformation.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.RenameBasedOnDefinition"></a>

### TotalDeformation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Delete"></a>

### TotalDeformation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GetChildren"></a>

### TotalDeformation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TotalDeformation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddComment"></a>

### TotalDeformation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddFigure"></a>

### TotalDeformation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddImage"></a>

### TotalDeformation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Activate"></a>

### TotalDeformation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CopyTo"></a>

### TotalDeformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Duplicate"></a>

### TotalDeformation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GroupAllSimilarChildren"></a>

### TotalDeformation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GroupSimilarObjects"></a>

### TotalDeformation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PropertyByName"></a>

### TotalDeformation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PropertyByAPIName"></a>

### TotalDeformation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GetParameter"></a>

### TotalDeformation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.RemoveParameter"></a>

### TotalDeformation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

