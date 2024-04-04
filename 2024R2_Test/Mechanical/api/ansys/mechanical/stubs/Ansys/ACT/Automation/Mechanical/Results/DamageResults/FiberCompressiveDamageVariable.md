# FiberCompressiveDamageVariable

### *class* FiberCompressiveDamageVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FiberCompressiveDamageVariable.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FiberCompressiveDamageVariable.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FiberCompressiveDamageVariable.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FiberCompressiveDamageVariable.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FiberCompressiveDamageVariable.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FiberCompressiveDamageVariable.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FiberCompressiveDamageVariable.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FiberCompressiveDamageVariable.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FiberCompressiveDamageVariable.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FiberCompressiveDamageVariable.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FiberCompressiveDamageVariable.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FiberCompressiveDamageVariable.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FiberCompressiveDamageVariable.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FiberCompressiveDamageVariable.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FiberCompressiveDamageVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FiberCompressiveDamageVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FiberCompressiveDamageVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FiberCompressiveDamageVariable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FiberCompressiveDamageVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FiberCompressiveDamageVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FiberCompressiveDamageVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FiberCompressiveDamageVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FiberCompressiveDamageVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FiberCompressiveDamageVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FiberCompressiveDamageVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FiberCompressiveDamageVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#FiberCompressiveDamageVariable.Mode)                                                                            | Gets or sets the Mode.                                                 |
| [`Ply`](#FiberCompressiveDamageVariable.Ply)                                                                              | Gets or sets the Ply selection.                                        |
| [`Plies`](#FiberCompressiveDamageVariable.Plies)                                                                          | Plies property.                                                        |
| [`DamageResultType`](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType)                      | Gets the DamageResultType.                                             |
| [`PlotData`](#FiberCompressiveDamageVariable.PlotData)                                                                    | Gets the result table.                                                 |
| [`Location`](#FiberCompressiveDamageVariable.Location)                                                                    | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FiberCompressiveDamageVariable.TimeForMinimumOfMinimumValues)                          | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FiberCompressiveDamageVariable.TimeForMinimumOfMaximumValues)                          | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FiberCompressiveDamageVariable.LoadStepForMinimumOfMinimumValues)                  | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FiberCompressiveDamageVariable.LoadStepForMinimumOfMaximumValues)                  | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FiberCompressiveDamageVariable.TimeForMaximumOfMinimumValues)                          | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FiberCompressiveDamageVariable.TimeForMaximumOfMaximumValues)                          | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FiberCompressiveDamageVariable.LoadStepForMaximumOfMinimumValues)                  | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FiberCompressiveDamageVariable.LoadStepForMaximumOfMaximumValues)                  | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FiberCompressiveDamageVariable.IsSolved)                                                                    | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FiberCompressiveDamageVariable.ScopingMethod)                                                          | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FiberCompressiveDamageVariable.SetNumber)                                                                  | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FiberCompressiveDamageVariable.CombinationNumber)                                                  | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FiberCompressiveDamageVariable.SolutionCombinationDriver)                                  | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FiberCompressiveDamageVariable.WaterfallPanelShowTextOnMosaic)                        | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FiberCompressiveDamageVariable.CrackFrontNumber)                                                    | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FiberCompressiveDamageVariable.GlobalIDs)                                                                  | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FiberCompressiveDamageVariable.Identifier)                                                                | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FiberCompressiveDamageVariable.IterationNumber)                                                      | Gets the IterationNumber.                                              |
| [`LoadStep`](#FiberCompressiveDamageVariable.LoadStep)                                                                    | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FiberCompressiveDamageVariable.MaximumOccursOn)                                                      | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FiberCompressiveDamageVariable.MinimumOccursOn)                                                      | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FiberCompressiveDamageVariable.LoadStepNumber)                                                        | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FiberCompressiveDamageVariable.SolverComponentIDs)                                                | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FiberCompressiveDamageVariable.Substep)                                                                      | Gets the Substep.                                                      |
| [`Average`](#FiberCompressiveDamageVariable.Average)                                                                      | Gets the Average.                                                      |
| [`Maximum`](#FiberCompressiveDamageVariable.Maximum)                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FiberCompressiveDamageVariable.MaximumOfMaximumOverTime)                                    | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FiberCompressiveDamageVariable.MaximumOfMinimumOverTime)                                    | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FiberCompressiveDamageVariable.Minimum)                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FiberCompressiveDamageVariable.MinimumOfMaximumOverTime)                                    | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FiberCompressiveDamageVariable.MinimumOfMinimumOverTime)                                    | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FiberCompressiveDamageVariable.Time)                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#FiberCompressiveDamageVariable.DisplayTime)                                                              | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FiberCompressiveDamageVariable.DisplayOption)                                                          | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FiberCompressiveDamageVariable.DpfEvaluation)                                                          | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FiberCompressiveDamageVariable.By)                                                                                | Gets or sets the By.                                                   |
| [`ItemType`](#FiberCompressiveDamageVariable.ItemType)                                                                    | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FiberCompressiveDamageVariable.CalculateTimeHistory)                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FiberCompressiveDamageVariable.Suppressed)                                                                | Gets or sets the Suppressed.                                           |
| [`Children`](#FiberCompressiveDamageVariable.Children)                                                                    | Gets the list of children.                                             |
| [`Comments`](#FiberCompressiveDamageVariable.Comments)                                                                    | Gets the list of associated comments.                                  |
| [`Figures`](#FiberCompressiveDamageVariable.Figures)                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#FiberCompressiveDamageVariable.Images)                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FiberCompressiveDamageVariable.Properties)                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FiberCompressiveDamageVariable.VisibleProperties)                                                  | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DamageResults import FiberCompressiveDamageVariable
```

## Property detail

### *property* FiberCompressiveDamageVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveDamageVariable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FiberCompressiveDamageVariable.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveDamageVariable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
