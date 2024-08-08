# `StrainResult`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StrainResults.StrainResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StrainResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Plies)                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#id0)                                                               | Gets the internal object. For advanced usage only.                     |
| [`HarmonicIndex`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Position`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#StrainResult.WaterfallPanelShowTextOnMosaic)                                                                                                      | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#id0)                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/StrainResults/StrainResult.md#StrainResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="StrainResult.Mode"></a>

### *property* StrainResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Ply"></a>

### *property* StrainResult.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Plies"></a>

### *property* StrainResult.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.EnvironmentSelection"></a>

### *property* StrainResult.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.InternalObject"></a>

### *property* StrainResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.HarmonicIndex"></a>

### *property* StrainResult.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CyclicMode"></a>

### *property* StrainResult.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IterationStep"></a>

### *property* StrainResult.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadMultiplier"></a>

### *property* StrainResult.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ReportedFrequency"></a>

### *property* StrainResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SweepingPhase"></a>

### *property* StrainResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PhaseIncrement"></a>

### *property* StrainResult.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Frequency"></a>

### *property* StrainResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Position"></a>

### *property* StrainResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.StressStrainType"></a>

### *property* StrainResult.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SubScopeBy"></a>

### *property* StrainResult.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Amplitude"></a>

### *property* StrainResult.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AverageAcrossBodies"></a>

### *property* StrainResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DataModelObjectCategory"></a>

### *property* StrainResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PlotData"></a>

### *property* StrainResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Location"></a>

### *property* StrainResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TimeForMinimumOfMinimumValues"></a>

### *property* StrainResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TimeForMinimumOfMaximumValues"></a>

### *property* StrainResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* StrainResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* StrainResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TimeForMaximumOfMinimumValues"></a>

### *property* StrainResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.TimeForMaximumOfMaximumValues"></a>

### *property* StrainResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* StrainResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* StrainResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IsSolved"></a>

### *property* StrainResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CoordinateSystem"></a>

### *property* StrainResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ScopingMethod"></a>

### *property* StrainResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SetNumber"></a>

### *property* StrainResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CombinationNumber"></a>

### *property* StrainResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SolutionCombinationDriver"></a>

### *property* StrainResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Path"></a>

### *property* StrainResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Surface"></a>

### *property* StrainResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.NamedSelections"></a>

### *property* StrainResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* StrainResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CrackFrontNumber"></a>

### *property* StrainResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GlobalIDs"></a>

### *property* StrainResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Identifier"></a>

### *property* StrainResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.IterationNumber"></a>

### *property* StrainResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStep"></a>

### *property* StrainResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MaximumOccursOn"></a>

### *property* StrainResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MinimumOccursOn"></a>

### *property* StrainResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.LoadStepNumber"></a>

### *property* StrainResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.SolverComponentIDs"></a>

### *property* StrainResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Substep"></a>

### *property* StrainResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Average"></a>

### *property* StrainResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Maximum"></a>

### *property* StrainResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MaximumOfMaximumOverTime"></a>

### *property* StrainResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MaximumOfMinimumOverTime"></a>

### *property* StrainResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Minimum"></a>

### *property* StrainResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MinimumOfMaximumOverTime"></a>

### *property* StrainResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.MinimumOfMinimumOverTime"></a>

### *property* StrainResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Time"></a>

### *property* StrainResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DisplayTime"></a>

### *property* StrainResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GraphControlsXAxis"></a>

### *property* StrainResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DisplayOption"></a>

### *property* StrainResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DpfEvaluation"></a>

### *property* StrainResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.By"></a>

### *property* StrainResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ItemType"></a>

### *property* StrainResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CalculateTimeHistory"></a>

### *property* StrainResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Suppressed"></a>

### *property* StrainResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Children"></a>

### *property* StrainResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Comments"></a>

### *property* StrainResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Figures"></a>

### *property* StrainResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Images"></a>

### *property* StrainResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* StrainResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Properties"></a>

### *property* StrainResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.VisibleProperties"></a>

### *property* StrainResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StrainResult.ClearGeneratedData"></a>

### StrainResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.EvaluateAllResults"></a>

### StrainResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.FetchRemoteResults"></a>

### StrainResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ExportToTextFile"></a>

### StrainResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.ExportAnimation"></a>

### StrainResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.DuplicateWithoutResults"></a>

### StrainResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CreateResultsAtAllSets"></a>

### StrainResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PromoteToNamedSelection"></a>

### StrainResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CreateParameter"></a>

### StrainResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddAlert"></a>

### StrainResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddConvergence"></a>

### StrainResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RenameBasedOnDefinition"></a>

### StrainResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Delete"></a>

### StrainResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetChildren"></a>

### StrainResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### StrainResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddComment"></a>

### StrainResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddFigure"></a>

### StrainResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.AddImage"></a>

### StrainResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Activate"></a>

### StrainResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.CopyTo"></a>

### StrainResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.Duplicate"></a>

### StrainResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GroupAllSimilarChildren"></a>

### StrainResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GroupSimilarObjects"></a>

### StrainResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PropertyByName"></a>

### StrainResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.PropertyByAPIName"></a>

### StrainResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.GetParameter"></a>

### StrainResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainResult.RemoveParameter"></a>

### StrainResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

