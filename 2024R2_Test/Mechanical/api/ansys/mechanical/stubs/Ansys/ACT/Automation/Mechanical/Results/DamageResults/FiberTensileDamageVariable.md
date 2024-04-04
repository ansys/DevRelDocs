# FiberTensileDamageVariable

### *class* FiberTensileDamageVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FiberTensileDamageVariable.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FiberTensileDamageVariable.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FiberTensileDamageVariable.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FiberTensileDamageVariable.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FiberTensileDamageVariable.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FiberTensileDamageVariable.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FiberTensileDamageVariable.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FiberTensileDamageVariable.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FiberTensileDamageVariable.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FiberTensileDamageVariable.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FiberTensileDamageVariable.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FiberTensileDamageVariable.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FiberTensileDamageVariable.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FiberTensileDamageVariable.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FiberTensileDamageVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FiberTensileDamageVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FiberTensileDamageVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FiberTensileDamageVariable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FiberTensileDamageVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FiberTensileDamageVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FiberTensileDamageVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FiberTensileDamageVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FiberTensileDamageVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FiberTensileDamageVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FiberTensileDamageVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FiberTensileDamageVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#FiberTensileDamageVariable.Mode)                                                                                | Gets or sets the Mode.                                                 |
| [`Ply`](#FiberTensileDamageVariable.Ply)                                                                                  | Gets or sets the Ply selection.                                        |
| [`Plies`](#FiberTensileDamageVariable.Plies)                                                                              | Plies property.                                                        |
| [`DamageResultType`](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType)                      | Gets the DamageResultType.                                             |
| [`PlotData`](#FiberTensileDamageVariable.PlotData)                                                                        | Gets the result table.                                                 |
| [`Location`](#FiberTensileDamageVariable.Location)                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FiberTensileDamageVariable.TimeForMinimumOfMinimumValues)                              | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FiberTensileDamageVariable.TimeForMinimumOfMaximumValues)                              | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FiberTensileDamageVariable.LoadStepForMinimumOfMinimumValues)                      | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FiberTensileDamageVariable.LoadStepForMinimumOfMaximumValues)                      | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FiberTensileDamageVariable.TimeForMaximumOfMinimumValues)                              | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FiberTensileDamageVariable.TimeForMaximumOfMaximumValues)                              | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FiberTensileDamageVariable.LoadStepForMaximumOfMinimumValues)                      | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FiberTensileDamageVariable.LoadStepForMaximumOfMaximumValues)                      | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FiberTensileDamageVariable.IsSolved)                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FiberTensileDamageVariable.ScopingMethod)                                                              | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FiberTensileDamageVariable.SetNumber)                                                                      | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FiberTensileDamageVariable.CombinationNumber)                                                      | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FiberTensileDamageVariable.SolutionCombinationDriver)                                      | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FiberTensileDamageVariable.WaterfallPanelShowTextOnMosaic)                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FiberTensileDamageVariable.CrackFrontNumber)                                                        | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FiberTensileDamageVariable.GlobalIDs)                                                                      | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FiberTensileDamageVariable.Identifier)                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FiberTensileDamageVariable.IterationNumber)                                                          | Gets the IterationNumber.                                              |
| [`LoadStep`](#FiberTensileDamageVariable.LoadStep)                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FiberTensileDamageVariable.MaximumOccursOn)                                                          | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FiberTensileDamageVariable.MinimumOccursOn)                                                          | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FiberTensileDamageVariable.LoadStepNumber)                                                            | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FiberTensileDamageVariable.SolverComponentIDs)                                                    | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FiberTensileDamageVariable.Substep)                                                                          | Gets the Substep.                                                      |
| [`Average`](#FiberTensileDamageVariable.Average)                                                                          | Gets the Average.                                                      |
| [`Maximum`](#FiberTensileDamageVariable.Maximum)                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FiberTensileDamageVariable.MaximumOfMaximumOverTime)                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FiberTensileDamageVariable.MaximumOfMinimumOverTime)                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FiberTensileDamageVariable.Minimum)                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FiberTensileDamageVariable.MinimumOfMaximumOverTime)                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FiberTensileDamageVariable.MinimumOfMinimumOverTime)                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FiberTensileDamageVariable.Time)                                                                                | Gets the Time.                                                         |
| [`DisplayTime`](#FiberTensileDamageVariable.DisplayTime)                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FiberTensileDamageVariable.DisplayOption)                                                              | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FiberTensileDamageVariable.DpfEvaluation)                                                              | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FiberTensileDamageVariable.By)                                                                                    | Gets or sets the By.                                                   |
| [`ItemType`](#FiberTensileDamageVariable.ItemType)                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FiberTensileDamageVariable.CalculateTimeHistory)                                                | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FiberTensileDamageVariable.Suppressed)                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#FiberTensileDamageVariable.Children)                                                                        | Gets the list of children.                                             |
| [`Comments`](#FiberTensileDamageVariable.Comments)                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#FiberTensileDamageVariable.Figures)                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#FiberTensileDamageVariable.Images)                                                                            | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FiberTensileDamageVariable.Properties)                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FiberTensileDamageVariable.VisibleProperties)                                                      | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DamageResults import FiberTensileDamageVariable
```

## Property detail

### *property* FiberTensileDamageVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileDamageVariable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FiberTensileDamageVariable.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FiberTensileDamageVariable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
