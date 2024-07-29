# `CoordinateSystemsResult`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.CoordinateSystemsResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoordinateSystemsResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#id0)                                                                          | Gets the internal object. For advanced usage only.                     |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`Position`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Position)                                                   | Gets or sets the Position.                                             |
| [`SubScopeBy`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#CoordinateSystemsResult.WaterfallPanelShowTextOnMosaic)                                                                                                                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#id0)                                                                          | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/CoordinateSystemsResult.md#CoordinateSystemsResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="CoordinateSystemsResult.Mode"></a>

### *property* CoordinateSystemsResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Ply"></a>

### *property* CoordinateSystemsResult.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.InternalObject"></a>

### *property* CoordinateSystemsResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadMultiplier"></a>

### *property* CoordinateSystemsResult.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ScaleFactorValue"></a>

### *property* CoordinateSystemsResult.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SweepingPhase"></a>

### *property* CoordinateSystemsResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PhaseIncrement"></a>

### *property* CoordinateSystemsResult.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Frequency"></a>

### *property* CoordinateSystemsResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ScaleFactor"></a>

### *property* CoordinateSystemsResult.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Position"></a>

### *property* CoordinateSystemsResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SubScopeBy"></a>

### *property* CoordinateSystemsResult.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Amplitude"></a>

### *property* CoordinateSystemsResult.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DataModelObjectCategory"></a>

### *property* CoordinateSystemsResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PlotData"></a>

### *property* CoordinateSystemsResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Location"></a>

### *property* CoordinateSystemsResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.TimeForMinimumOfMinimumValues"></a>

### *property* CoordinateSystemsResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.TimeForMinimumOfMaximumValues"></a>

### *property* CoordinateSystemsResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* CoordinateSystemsResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* CoordinateSystemsResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.TimeForMaximumOfMinimumValues"></a>

### *property* CoordinateSystemsResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.TimeForMaximumOfMaximumValues"></a>

### *property* CoordinateSystemsResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* CoordinateSystemsResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* CoordinateSystemsResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.IsSolved"></a>

### *property* CoordinateSystemsResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CoordinateSystem"></a>

### *property* CoordinateSystemsResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ScopingMethod"></a>

### *property* CoordinateSystemsResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SetNumber"></a>

### *property* CoordinateSystemsResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CombinationNumber"></a>

### *property* CoordinateSystemsResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SolutionCombinationDriver"></a>

### *property* CoordinateSystemsResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Path"></a>

### *property* CoordinateSystemsResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Surface"></a>

### *property* CoordinateSystemsResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.NamedSelections"></a>

### *property* CoordinateSystemsResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* CoordinateSystemsResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CrackFrontNumber"></a>

### *property* CoordinateSystemsResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GlobalIDs"></a>

### *property* CoordinateSystemsResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Identifier"></a>

### *property* CoordinateSystemsResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.IterationNumber"></a>

### *property* CoordinateSystemsResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStep"></a>

### *property* CoordinateSystemsResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MaximumOccursOn"></a>

### *property* CoordinateSystemsResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MinimumOccursOn"></a>

### *property* CoordinateSystemsResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepNumber"></a>

### *property* CoordinateSystemsResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SolverComponentIDs"></a>

### *property* CoordinateSystemsResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Substep"></a>

### *property* CoordinateSystemsResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Average"></a>

### *property* CoordinateSystemsResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Maximum"></a>

### *property* CoordinateSystemsResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MaximumOfMaximumOverTime"></a>

### *property* CoordinateSystemsResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MaximumOfMinimumOverTime"></a>

### *property* CoordinateSystemsResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Minimum"></a>

### *property* CoordinateSystemsResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MinimumOfMaximumOverTime"></a>

### *property* CoordinateSystemsResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MinimumOfMinimumOverTime"></a>

### *property* CoordinateSystemsResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Time"></a>

### *property* CoordinateSystemsResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DisplayTime"></a>

### *property* CoordinateSystemsResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GraphControlsXAxis"></a>

### *property* CoordinateSystemsResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DisplayOption"></a>

### *property* CoordinateSystemsResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DpfEvaluation"></a>

### *property* CoordinateSystemsResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.By"></a>

### *property* CoordinateSystemsResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ItemType"></a>

### *property* CoordinateSystemsResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CalculateTimeHistory"></a>

### *property* CoordinateSystemsResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Suppressed"></a>

### *property* CoordinateSystemsResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Children"></a>

### *property* CoordinateSystemsResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Comments"></a>

### *property* CoordinateSystemsResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Figures"></a>

### *property* CoordinateSystemsResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Images"></a>

### *property* CoordinateSystemsResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CoordinateSystemsResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Properties"></a>

### *property* CoordinateSystemsResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.VisibleProperties"></a>

### *property* CoordinateSystemsResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoordinateSystemsResult.ClearGeneratedData"></a>

### CoordinateSystemsResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.EvaluateAllResults"></a>

### CoordinateSystemsResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.FetchRemoteResults"></a>

### CoordinateSystemsResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ExportToTextFile"></a>

### CoordinateSystemsResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ExportAnimation"></a>

### CoordinateSystemsResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DuplicateWithoutResults"></a>

### CoordinateSystemsResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CreateResultsAtAllSets"></a>

### CoordinateSystemsResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PromoteToNamedSelection"></a>

### CoordinateSystemsResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CreateParameter"></a>

### CoordinateSystemsResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddAlert"></a>

### CoordinateSystemsResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddConvergence"></a>

### CoordinateSystemsResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.RenameBasedOnDefinition"></a>

### CoordinateSystemsResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Delete"></a>

### CoordinateSystemsResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GetChildren"></a>

### CoordinateSystemsResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CoordinateSystemsResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddComment"></a>

### CoordinateSystemsResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddFigure"></a>

### CoordinateSystemsResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddImage"></a>

### CoordinateSystemsResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Activate"></a>

### CoordinateSystemsResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CopyTo"></a>

### CoordinateSystemsResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Duplicate"></a>

### CoordinateSystemsResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GroupAllSimilarChildren"></a>

### CoordinateSystemsResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GroupSimilarObjects"></a>

### CoordinateSystemsResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PropertyByName"></a>

### CoordinateSystemsResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PropertyByAPIName"></a>

### CoordinateSystemsResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GetParameter"></a>

### CoordinateSystemsResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.RemoveParameter"></a>

### CoordinateSystemsResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

