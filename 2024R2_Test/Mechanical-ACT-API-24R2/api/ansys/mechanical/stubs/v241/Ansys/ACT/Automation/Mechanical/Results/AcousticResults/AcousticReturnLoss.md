# `AcousticReturnLoss`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticReturnLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticReturnLoss.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InputPort`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.InputPort)                                                 | Gets or sets the InputPort.                                            |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#id0)                                                                     | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.MaximumFrequency)                                   | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.MinimumFrequency)                                   | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.FrequencyRange)                                       | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`Stability`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Stability)                                                 | Gets the Stability.                                                    |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticReturnLoss.WaterfallPanelShowTextOnMosaic)                                                                                                              | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#id0)                                                                     | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/AcousticResults/AcousticReturnLoss.md#AcousticReturnLoss.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="AcousticReturnLoss.InputPort"></a>

### *property* AcousticReturnLoss.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.InternalObject"></a>

### *property* AcousticReturnLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MaximumFrequency"></a>

### *property* AcousticReturnLoss.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MinimumFrequency"></a>

### *property* AcousticReturnLoss.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.FrequencyRange"></a>

### *property* AcousticReturnLoss.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DataModelObjectCategory"></a>

### *property* AcousticReturnLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Mode"></a>

### *property* AcousticReturnLoss.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ReportedFrequency"></a>

### *property* AcousticReturnLoss.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DampedFrequency"></a>

### *property* AcousticReturnLoss.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LogarithmicDecrement"></a>

### *property* AcousticReturnLoss.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ModalDampingRatio"></a>

### *property* AcousticReturnLoss.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Stability"></a>

### *property* AcousticReturnLoss.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SweepingPhase"></a>

### *property* AcousticReturnLoss.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Frequency"></a>

### *property* AcousticReturnLoss.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Amplitude"></a>

### *property* AcousticReturnLoss.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.PlotData"></a>

### *property* AcousticReturnLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Location"></a>

### *property* AcousticReturnLoss.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticReturnLoss.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticReturnLoss.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticReturnLoss.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticReturnLoss.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticReturnLoss.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticReturnLoss.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticReturnLoss.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticReturnLoss.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.IsSolved"></a>

### *property* AcousticReturnLoss.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CoordinateSystem"></a>

### *property* AcousticReturnLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ScopingMethod"></a>

### *property* AcousticReturnLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SetNumber"></a>

### *property* AcousticReturnLoss.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CombinationNumber"></a>

### *property* AcousticReturnLoss.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SolutionCombinationDriver"></a>

### *property* AcousticReturnLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Path"></a>

### *property* AcousticReturnLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Surface"></a>

### *property* AcousticReturnLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.NamedSelections"></a>

### *property* AcousticReturnLoss.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.WaterfallPanelShowTextOnMosaic"></a>

### *property* AcousticReturnLoss.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CrackFrontNumber"></a>

### *property* AcousticReturnLoss.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GlobalIDs"></a>

### *property* AcousticReturnLoss.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Identifier"></a>

### *property* AcousticReturnLoss.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.IterationNumber"></a>

### *property* AcousticReturnLoss.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStep"></a>

### *property* AcousticReturnLoss.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MaximumOccursOn"></a>

### *property* AcousticReturnLoss.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MinimumOccursOn"></a>

### *property* AcousticReturnLoss.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepNumber"></a>

### *property* AcousticReturnLoss.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SolverComponentIDs"></a>

### *property* AcousticReturnLoss.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Substep"></a>

### *property* AcousticReturnLoss.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Average"></a>

### *property* AcousticReturnLoss.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Maximum"></a>

### *property* AcousticReturnLoss.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MaximumOfMaximumOverTime"></a>

### *property* AcousticReturnLoss.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MaximumOfMinimumOverTime"></a>

### *property* AcousticReturnLoss.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Minimum"></a>

### *property* AcousticReturnLoss.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MinimumOfMaximumOverTime"></a>

### *property* AcousticReturnLoss.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MinimumOfMinimumOverTime"></a>

### *property* AcousticReturnLoss.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Time"></a>

### *property* AcousticReturnLoss.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DisplayTime"></a>

### *property* AcousticReturnLoss.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GraphControlsXAxis"></a>

### *property* AcousticReturnLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DisplayOption"></a>

### *property* AcousticReturnLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DpfEvaluation"></a>

### *property* AcousticReturnLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.By"></a>

### *property* AcousticReturnLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ItemType"></a>

### *property* AcousticReturnLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CalculateTimeHistory"></a>

### *property* AcousticReturnLoss.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Suppressed"></a>

### *property* AcousticReturnLoss.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Children"></a>

### *property* AcousticReturnLoss.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Comments"></a>

### *property* AcousticReturnLoss.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Figures"></a>

### *property* AcousticReturnLoss.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Images"></a>

### *property* AcousticReturnLoss.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticReturnLoss.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Properties"></a>

### *property* AcousticReturnLoss.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.VisibleProperties"></a>

### *property* AcousticReturnLoss.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticReturnLoss.ClearGeneratedData"></a>

### AcousticReturnLoss.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.EvaluateAllResults"></a>

### AcousticReturnLoss.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.FetchRemoteResults"></a>

### AcousticReturnLoss.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ExportToTextFile"></a>

### AcousticReturnLoss.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ExportAnimation"></a>

### AcousticReturnLoss.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DuplicateWithoutResults"></a>

### AcousticReturnLoss.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CreateResultsAtAllSets"></a>

### AcousticReturnLoss.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.PromoteToNamedSelection"></a>

### AcousticReturnLoss.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CreateParameter"></a>

### AcousticReturnLoss.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddAlert"></a>

### AcousticReturnLoss.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddConvergence"></a>

### AcousticReturnLoss.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.RenameBasedOnDefinition"></a>

### AcousticReturnLoss.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Delete"></a>

### AcousticReturnLoss.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GetChildren"></a>

### AcousticReturnLoss.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticReturnLoss.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddComment"></a>

### AcousticReturnLoss.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddFigure"></a>

### AcousticReturnLoss.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddImage"></a>

### AcousticReturnLoss.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Activate"></a>

### AcousticReturnLoss.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CopyTo"></a>

### AcousticReturnLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Duplicate"></a>

### AcousticReturnLoss.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GroupAllSimilarChildren"></a>

### AcousticReturnLoss.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GroupSimilarObjects"></a>

### AcousticReturnLoss.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.PropertyByName"></a>

### AcousticReturnLoss.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.PropertyByAPIName"></a>

### AcousticReturnLoss.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GetParameter"></a>

### AcousticReturnLoss.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.RemoveParameter"></a>

### AcousticReturnLoss.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

