# FiberCompressiveFailureCriterion

### *class* FiberCompressiveFailureCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FiberCompressiveFailureCriterion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FiberCompressiveFailureCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FiberCompressiveFailureCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FiberCompressiveFailureCriterion.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FiberCompressiveFailureCriterion.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FiberCompressiveFailureCriterion.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FiberCompressiveFailureCriterion.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FiberCompressiveFailureCriterion.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FiberCompressiveFailureCriterion.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FiberCompressiveFailureCriterion.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FiberCompressiveFailureCriterion.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FiberCompressiveFailureCriterion.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FiberCompressiveFailureCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FiberCompressiveFailureCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FiberCompressiveFailureCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FiberCompressiveFailureCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FiberCompressiveFailureCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FiberCompressiveFailureCriterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FiberCompressiveFailureCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FiberCompressiveFailureCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FiberCompressiveFailureCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FiberCompressiveFailureCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FiberCompressiveFailureCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FiberCompressiveFailureCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FiberCompressiveFailureCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FiberCompressiveFailureCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#FiberCompressiveFailureCriterion.Mode)                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#FiberCompressiveFailureCriterion.Ply)                                                                            | Gets or sets the Ply selection.                                        |
| [`Plies`](#FiberCompressiveFailureCriterion.Plies)                                                                        | Plies property.                                                        |
| [`DamageResultType`](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType)                      | Gets the DamageResultType.                                             |
| [`PlotData`](#FiberCompressiveFailureCriterion.PlotData)                                                                  | Gets the result table.                                                 |
| [`Location`](#FiberCompressiveFailureCriterion.Location)                                                                  | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues)                        | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues)                        | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues)                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues)                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues)                        | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues)                        | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues)                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues)                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FiberCompressiveFailureCriterion.IsSolved)                                                                  | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FiberCompressiveFailureCriterion.ScopingMethod)                                                        | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FiberCompressiveFailureCriterion.SetNumber)                                                                | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FiberCompressiveFailureCriterion.CombinationNumber)                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FiberCompressiveFailureCriterion.SolutionCombinationDriver)                                | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FiberCompressiveFailureCriterion.WaterfallPanelShowTextOnMosaic)                      | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FiberCompressiveFailureCriterion.CrackFrontNumber)                                                  | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FiberCompressiveFailureCriterion.GlobalIDs)                                                                | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FiberCompressiveFailureCriterion.Identifier)                                                              | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FiberCompressiveFailureCriterion.IterationNumber)                                                    | Gets the IterationNumber.                                              |
| [`LoadStep`](#FiberCompressiveFailureCriterion.LoadStep)                                                                  | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FiberCompressiveFailureCriterion.MaximumOccursOn)                                                    | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FiberCompressiveFailureCriterion.MinimumOccursOn)                                                    | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FiberCompressiveFailureCriterion.LoadStepNumber)                                                      | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FiberCompressiveFailureCriterion.SolverComponentIDs)                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FiberCompressiveFailureCriterion.Substep)                                                                    | Gets the Substep.                                                      |
| [`Average`](#FiberCompressiveFailureCriterion.Average)                                                                    | Gets the Average.                                                      |
| [`Maximum`](#FiberCompressiveFailureCriterion.Maximum)                                                                    | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime)                                  | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime)                                  | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FiberCompressiveFailureCriterion.Minimum)                                                                    | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime)                                  | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime)                                  | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FiberCompressiveFailureCriterion.Time)                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#FiberCompressiveFailureCriterion.DisplayTime)                                                            | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FiberCompressiveFailureCriterion.DisplayOption)                                                        | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FiberCompressiveFailureCriterion.DpfEvaluation)                                                        | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FiberCompressiveFailureCriterion.By)                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#FiberCompressiveFailureCriterion.ItemType)                                                                  | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FiberCompressiveFailureCriterion.CalculateTimeHistory)                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FiberCompressiveFailureCriterion.Suppressed)                                                              | Gets or sets the Suppressed.                                           |
| [`Children`](#FiberCompressiveFailureCriterion.Children)                                                                  | Gets the list of children.                                             |
| [`Comments`](#FiberCompressiveFailureCriterion.Comments)                                                                  | Gets the list of associated comments.                                  |
| [`Figures`](#FiberCompressiveFailureCriterion.Figures)                                                                    | Gets the list of associated figures.                                   |
| [`Images`](#FiberCompressiveFailureCriterion.Images)                                                                      | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FiberCompressiveFailureCriterion.Properties)                                                              | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FiberCompressiveFailureCriterion.VisibleProperties)                                                | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DamageResults import FiberCompressiveFailureCriterion
```

## Property detail

### *property* FiberCompressiveFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FiberCompressiveFailureCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FiberCompressiveFailureCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FiberCompressiveFailureCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
