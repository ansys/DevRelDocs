# `NodalEulerXYAngle`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerXYAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalEulerXYAngle.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#id0)                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`Position`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Position)                                                   | Gets or sets the Position.                                             |
| [`SubScopeBy`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#NodalEulerXYAngle.WaterfallPanelShowTextOnMosaic)                                                                                                                      | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#id0)                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="NodalEulerXYAngle.InternalObject"></a>

### *property* NodalEulerXYAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.DataModelObjectCategory"></a>

### *property* NodalEulerXYAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Mode"></a>

### *property* NodalEulerXYAngle.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Ply"></a>

### *property* NodalEulerXYAngle.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.LoadMultiplier"></a>

### *property* NodalEulerXYAngle.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.ScaleFactorValue"></a>

### *property* NodalEulerXYAngle.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.SweepingPhase"></a>

### *property* NodalEulerXYAngle.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.PhaseIncrement"></a>

### *property* NodalEulerXYAngle.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Frequency"></a>

### *property* NodalEulerXYAngle.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.ScaleFactor"></a>

### *property* NodalEulerXYAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Position"></a>

### *property* NodalEulerXYAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.SubScopeBy"></a>

### *property* NodalEulerXYAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Amplitude"></a>

### *property* NodalEulerXYAngle.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.PlotData"></a>

### *property* NodalEulerXYAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Location"></a>

### *property* NodalEulerXYAngle.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.TimeForMinimumOfMinimumValues"></a>

### *property* NodalEulerXYAngle.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.TimeForMinimumOfMaximumValues"></a>

### *property* NodalEulerXYAngle.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* NodalEulerXYAngle.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* NodalEulerXYAngle.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.TimeForMaximumOfMinimumValues"></a>

### *property* NodalEulerXYAngle.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.TimeForMaximumOfMaximumValues"></a>

### *property* NodalEulerXYAngle.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* NodalEulerXYAngle.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* NodalEulerXYAngle.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.IsSolved"></a>

### *property* NodalEulerXYAngle.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.CoordinateSystem"></a>

### *property* NodalEulerXYAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.ScopingMethod"></a>

### *property* NodalEulerXYAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.SetNumber"></a>

### *property* NodalEulerXYAngle.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.CombinationNumber"></a>

### *property* NodalEulerXYAngle.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.SolutionCombinationDriver"></a>

### *property* NodalEulerXYAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Path"></a>

### *property* NodalEulerXYAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Surface"></a>

### *property* NodalEulerXYAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.NamedSelections"></a>

### *property* NodalEulerXYAngle.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.WaterfallPanelShowTextOnMosaic"></a>

### *property* NodalEulerXYAngle.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.CrackFrontNumber"></a>

### *property* NodalEulerXYAngle.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.GlobalIDs"></a>

### *property* NodalEulerXYAngle.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Identifier"></a>

### *property* NodalEulerXYAngle.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.IterationNumber"></a>

### *property* NodalEulerXYAngle.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.LoadStep"></a>

### *property* NodalEulerXYAngle.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.MaximumOccursOn"></a>

### *property* NodalEulerXYAngle.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.MinimumOccursOn"></a>

### *property* NodalEulerXYAngle.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.LoadStepNumber"></a>

### *property* NodalEulerXYAngle.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.SolverComponentIDs"></a>

### *property* NodalEulerXYAngle.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Substep"></a>

### *property* NodalEulerXYAngle.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Average"></a>

### *property* NodalEulerXYAngle.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Maximum"></a>

### *property* NodalEulerXYAngle.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.MaximumOfMaximumOverTime"></a>

### *property* NodalEulerXYAngle.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.MaximumOfMinimumOverTime"></a>

### *property* NodalEulerXYAngle.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Minimum"></a>

### *property* NodalEulerXYAngle.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.MinimumOfMaximumOverTime"></a>

### *property* NodalEulerXYAngle.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.MinimumOfMinimumOverTime"></a>

### *property* NodalEulerXYAngle.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Time"></a>

### *property* NodalEulerXYAngle.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.DisplayTime"></a>

### *property* NodalEulerXYAngle.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.GraphControlsXAxis"></a>

### *property* NodalEulerXYAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.DisplayOption"></a>

### *property* NodalEulerXYAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.DpfEvaluation"></a>

### *property* NodalEulerXYAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.By"></a>

### *property* NodalEulerXYAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.ItemType"></a>

### *property* NodalEulerXYAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.CalculateTimeHistory"></a>

### *property* NodalEulerXYAngle.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Suppressed"></a>

### *property* NodalEulerXYAngle.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Children"></a>

### *property* NodalEulerXYAngle.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Comments"></a>

### *property* NodalEulerXYAngle.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Figures"></a>

### *property* NodalEulerXYAngle.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Images"></a>

### *property* NodalEulerXYAngle.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodalEulerXYAngle.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Properties"></a>

### *property* NodalEulerXYAngle.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.VisibleProperties"></a>

### *property* NodalEulerXYAngle.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalEulerXYAngle.ClearGeneratedData"></a>

### NodalEulerXYAngle.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.EvaluateAllResults"></a>

### NodalEulerXYAngle.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.FetchRemoteResults"></a>

### NodalEulerXYAngle.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.ExportToTextFile"></a>

### NodalEulerXYAngle.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.ExportAnimation"></a>

### NodalEulerXYAngle.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.DuplicateWithoutResults"></a>

### NodalEulerXYAngle.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.CreateResultsAtAllSets"></a>

### NodalEulerXYAngle.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.PromoteToNamedSelection"></a>

### NodalEulerXYAngle.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.CreateParameter"></a>

### NodalEulerXYAngle.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.AddAlert"></a>

### NodalEulerXYAngle.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.AddConvergence"></a>

### NodalEulerXYAngle.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.RenameBasedOnDefinition"></a>

### NodalEulerXYAngle.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Delete"></a>

### NodalEulerXYAngle.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.GetChildren"></a>

### NodalEulerXYAngle.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodalEulerXYAngle.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.AddComment"></a>

### NodalEulerXYAngle.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.AddFigure"></a>

### NodalEulerXYAngle.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.AddImage"></a>

### NodalEulerXYAngle.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Activate"></a>

### NodalEulerXYAngle.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.CopyTo"></a>

### NodalEulerXYAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.Duplicate"></a>

### NodalEulerXYAngle.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.GroupAllSimilarChildren"></a>

### NodalEulerXYAngle.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.GroupSimilarObjects"></a>

### NodalEulerXYAngle.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.PropertyByName"></a>

### NodalEulerXYAngle.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.PropertyByAPIName"></a>

### NodalEulerXYAngle.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.GetParameter"></a>

### NodalEulerXYAngle.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXYAngle.RemoveParameter"></a>

### NodalEulerXYAngle.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

