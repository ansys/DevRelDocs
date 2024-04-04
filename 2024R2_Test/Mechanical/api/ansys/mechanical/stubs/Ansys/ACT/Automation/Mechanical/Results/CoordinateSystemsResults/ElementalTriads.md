# ElementalTriads

### *class* ElementalTriads

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementalTriads.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#ElementalTriads.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#ElementalTriads.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ElementalTriads.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ElementalTriads.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ElementalTriads.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ElementalTriads.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ElementalTriads.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ElementalTriads.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ElementalTriads.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ElementalTriads.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ElementalTriads.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ElementalTriads.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElementalTriads.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElementalTriads.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementalTriads.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementalTriads.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElementalTriads.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElementalTriads.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElementalTriads.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElementalTriads.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementalTriads.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElementalTriads.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElementalTriads.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ElementalTriads.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElementalTriads.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#ElementalTriads.Mode)                                                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#ElementalTriads.Ply)                                                                                             | Gets or sets the Ply selection.                                        |
| [`LoadMultiplier`](#ElementalTriads.LoadMultiplier)                                                                       | Gets the LoadMultiplier.                                               |
| [`ScaleFactorValue`](#ElementalTriads.ScaleFactorValue)                                                                   | Gets or sets the ScaleFactorValue.                                     |
| [`SweepingPhase`](#ElementalTriads.SweepingPhase)                                                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#ElementalTriads.PhaseIncrement)                                                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#ElementalTriads.Frequency)                                                                                 | Gets or sets the Frequency.                                            |
| [`ScaleFactor`](#ElementalTriads.ScaleFactor)                                                                             | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`SubScopeBy`](#ElementalTriads.SubScopeBy)                                                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#ElementalTriads.Amplitude)                                                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](#ElementalTriads.PlotData)                                                                                   | Gets the result table.                                                 |
| [`Location`](#ElementalTriads.Location)                                                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ElementalTriads.TimeForMinimumOfMinimumValues)                                         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ElementalTriads.TimeForMinimumOfMaximumValues)                                         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ElementalTriads.LoadStepForMinimumOfMinimumValues)                                 | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ElementalTriads.LoadStepForMinimumOfMaximumValues)                                 | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ElementalTriads.TimeForMaximumOfMinimumValues)                                         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ElementalTriads.TimeForMaximumOfMaximumValues)                                         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ElementalTriads.LoadStepForMaximumOfMinimumValues)                                 | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ElementalTriads.LoadStepForMaximumOfMaximumValues)                                 | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ElementalTriads.IsSolved)                                                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ElementalTriads.ScopingMethod)                                                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ElementalTriads.SetNumber)                                                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ElementalTriads.CombinationNumber)                                                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ElementalTriads.SolutionCombinationDriver)                                                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ElementalTriads.WaterfallPanelShowTextOnMosaic)                                       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ElementalTriads.CrackFrontNumber)                                                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ElementalTriads.GlobalIDs)                                                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ElementalTriads.Identifier)                                                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ElementalTriads.IterationNumber)                                                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#ElementalTriads.LoadStep)                                                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ElementalTriads.MaximumOccursOn)                                                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ElementalTriads.MinimumOccursOn)                                                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ElementalTriads.LoadStepNumber)                                                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ElementalTriads.SolverComponentIDs)                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ElementalTriads.Substep)                                                                                     | Gets the Substep.                                                      |
| [`Average`](#ElementalTriads.Average)                                                                                     | Gets the Average.                                                      |
| [`Maximum`](#ElementalTriads.Maximum)                                                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ElementalTriads.MaximumOfMaximumOverTime)                                                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ElementalTriads.MaximumOfMinimumOverTime)                                                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ElementalTriads.Minimum)                                                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ElementalTriads.MinimumOfMaximumOverTime)                                                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ElementalTriads.MinimumOfMinimumOverTime)                                                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ElementalTriads.Time)                                                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#ElementalTriads.DisplayTime)                                                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ElementalTriads.DisplayOption)                                                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ElementalTriads.DpfEvaluation)                                                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ElementalTriads.By)                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#ElementalTriads.ItemType)                                                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ElementalTriads.CalculateTimeHistory)                                                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ElementalTriads.Suppressed)                                                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#ElementalTriads.Children)                                                                                   | Gets the list of children.                                             |
| [`Comments`](#ElementalTriads.Comments)                                                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#ElementalTriads.Figures)                                                                                     | Gets the list of associated figures.                                   |
| [`Images`](#ElementalTriads.Images)                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ElementalTriads.Properties)                                                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ElementalTriads.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults import ElementalTriads
```

## Property detail

### *property* ElementalTriads.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ElementalTriads.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ElementalTriads.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### ElementalTriads.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### ElementalTriads.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ElementalTriads.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
