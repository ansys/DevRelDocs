# FiberTensileFailureCriterion

### *class* FiberTensileFailureCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FiberTensileFailureCriterion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FiberTensileFailureCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FiberTensileFailureCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FiberTensileFailureCriterion.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FiberTensileFailureCriterion.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FiberTensileFailureCriterion.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FiberTensileFailureCriterion.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FiberTensileFailureCriterion.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FiberTensileFailureCriterion.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FiberTensileFailureCriterion.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FiberTensileFailureCriterion.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FiberTensileFailureCriterion.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FiberTensileFailureCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FiberTensileFailureCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FiberTensileFailureCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FiberTensileFailureCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FiberTensileFailureCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FiberTensileFailureCriterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FiberTensileFailureCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FiberTensileFailureCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FiberTensileFailureCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FiberTensileFailureCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FiberTensileFailureCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FiberTensileFailureCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FiberTensileFailureCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FiberTensileFailureCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#FiberTensileFailureCriterion.Mode)                                                                              | Gets or sets the Mode.                                                 |
| [`Ply`](#FiberTensileFailureCriterion.Ply)                                                                                | Gets or sets the Ply selection.                                        |
| [`Plies`](#FiberTensileFailureCriterion.Plies)                                                                            | Plies property.                                                        |
| [`DamageResultType`](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType)                      | Gets the DamageResultType.                                             |
| [`PlotData`](#FiberTensileFailureCriterion.PlotData)                                                                      | Gets the result table.                                                 |
| [`Location`](#FiberTensileFailureCriterion.Location)                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FiberTensileFailureCriterion.TimeForMinimumOfMinimumValues)                            | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FiberTensileFailureCriterion.TimeForMinimumOfMaximumValues)                            | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FiberTensileFailureCriterion.LoadStepForMinimumOfMinimumValues)                    | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FiberTensileFailureCriterion.LoadStepForMinimumOfMaximumValues)                    | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FiberTensileFailureCriterion.TimeForMaximumOfMinimumValues)                            | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FiberTensileFailureCriterion.TimeForMaximumOfMaximumValues)                            | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FiberTensileFailureCriterion.LoadStepForMaximumOfMinimumValues)                    | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FiberTensileFailureCriterion.LoadStepForMaximumOfMaximumValues)                    | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FiberTensileFailureCriterion.IsSolved)                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FiberTensileFailureCriterion.ScopingMethod)                                                            | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FiberTensileFailureCriterion.SetNumber)                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FiberTensileFailureCriterion.CombinationNumber)                                                    | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FiberTensileFailureCriterion.SolutionCombinationDriver)                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FiberTensileFailureCriterion.WaterfallPanelShowTextOnMosaic)                          | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FiberTensileFailureCriterion.CrackFrontNumber)                                                      | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FiberTensileFailureCriterion.GlobalIDs)                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FiberTensileFailureCriterion.Identifier)                                                                  | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FiberTensileFailureCriterion.IterationNumber)                                                        | Gets the IterationNumber.                                              |
| [`LoadStep`](#FiberTensileFailureCriterion.LoadStep)                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FiberTensileFailureCriterion.MaximumOccursOn)                                                        | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FiberTensileFailureCriterion.MinimumOccursOn)                                                        | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FiberTensileFailureCriterion.LoadStepNumber)                                                          | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FiberTensileFailureCriterion.SolverComponentIDs)                                                  | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FiberTensileFailureCriterion.Substep)                                                                        | Gets the Substep.                                                      |
| [`Average`](#FiberTensileFailureCriterion.Average)                                                                        | Gets the Average.                                                      |
| [`Maximum`](#FiberTensileFailureCriterion.Maximum)                                                                        | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FiberTensileFailureCriterion.MaximumOfMaximumOverTime)                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FiberTensileFailureCriterion.MaximumOfMinimumOverTime)                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FiberTensileFailureCriterion.Minimum)                                                                        | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FiberTensileFailureCriterion.MinimumOfMaximumOverTime)                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FiberTensileFailureCriterion.MinimumOfMinimumOverTime)                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FiberTensileFailureCriterion.Time)                                                                              | Gets the Time.                                                         |
| [`DisplayTime`](#FiberTensileFailureCriterion.DisplayTime)                                                                | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FiberTensileFailureCriterion.DisplayOption)                                                            | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FiberTensileFailureCriterion.DpfEvaluation)                                                            | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FiberTensileFailureCriterion.By)                                                                                  | Gets or sets the By.                                                   |
| [`ItemType`](#FiberTensileFailureCriterion.ItemType)                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FiberTensileFailureCriterion.CalculateTimeHistory)                                              | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FiberTensileFailureCriterion.Suppressed)                                                                  | Gets or sets the Suppressed.                                           |
| [`Children`](#FiberTensileFailureCriterion.Children)                                                                      | Gets the list of children.                                             |
| [`Comments`](#FiberTensileFailureCriterion.Comments)                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#FiberTensileFailureCriterion.Figures)                                                                        | Gets the list of associated figures.                                   |
| [`Images`](#FiberTensileFailureCriterion.Images)                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FiberTensileFailureCriterion.Properties)                                                                  | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FiberTensileFailureCriterion.VisibleProperties)                                                    | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DamageResults import FiberTensileFailureCriterion
```

## Property detail

### *property* FiberTensileFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FiberTensileFailureCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FiberTensileFailureCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FiberTensileFailureCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
