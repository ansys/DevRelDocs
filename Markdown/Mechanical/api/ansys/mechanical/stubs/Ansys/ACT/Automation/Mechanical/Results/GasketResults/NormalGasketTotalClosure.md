# NormalGasketTotalClosure

### *class* NormalGasketTotalClosure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NormalGasketTotalClosure.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#NormalGasketTotalClosure.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#NormalGasketTotalClosure.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#NormalGasketTotalClosure.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#NormalGasketTotalClosure.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#NormalGasketTotalClosure.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#NormalGasketTotalClosure.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#NormalGasketTotalClosure.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#NormalGasketTotalClosure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#NormalGasketTotalClosure.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#NormalGasketTotalClosure.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#NormalGasketTotalClosure.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#NormalGasketTotalClosure.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NormalGasketTotalClosure.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NormalGasketTotalClosure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NormalGasketTotalClosure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NormalGasketTotalClosure.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NormalGasketTotalClosure.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NormalGasketTotalClosure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NormalGasketTotalClosure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NormalGasketTotalClosure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NormalGasketTotalClosure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NormalGasketTotalClosure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NormalGasketTotalClosure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#NormalGasketTotalClosure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NormalGasketTotalClosure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`GasketResultType`](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType)                      | Gets or sets the GasketResultType.                                     |
| [`PlotData`](#NormalGasketTotalClosure.PlotData)                                                                          | Gets the result table.                                                 |
| [`Location`](#NormalGasketTotalClosure.Location)                                                                          | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#NormalGasketTotalClosure.TimeForMinimumOfMinimumValues)                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#NormalGasketTotalClosure.TimeForMinimumOfMaximumValues)                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#NormalGasketTotalClosure.LoadStepForMinimumOfMinimumValues)                        | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#NormalGasketTotalClosure.LoadStepForMinimumOfMaximumValues)                        | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#NormalGasketTotalClosure.TimeForMaximumOfMinimumValues)                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#NormalGasketTotalClosure.TimeForMaximumOfMaximumValues)                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#NormalGasketTotalClosure.LoadStepForMaximumOfMinimumValues)                        | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#NormalGasketTotalClosure.LoadStepForMaximumOfMaximumValues)                        | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#NormalGasketTotalClosure.IsSolved)                                                                          | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#NormalGasketTotalClosure.ScopingMethod)                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#NormalGasketTotalClosure.SetNumber)                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#NormalGasketTotalClosure.CombinationNumber)                                                        | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#NormalGasketTotalClosure.SolutionCombinationDriver)                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#NormalGasketTotalClosure.WaterfallPanelShowTextOnMosaic)                              | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#NormalGasketTotalClosure.CrackFrontNumber)                                                          | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#NormalGasketTotalClosure.GlobalIDs)                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#NormalGasketTotalClosure.Identifier)                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#NormalGasketTotalClosure.IterationNumber)                                                            | Gets the IterationNumber.                                              |
| [`LoadStep`](#NormalGasketTotalClosure.LoadStep)                                                                          | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#NormalGasketTotalClosure.MaximumOccursOn)                                                            | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#NormalGasketTotalClosure.MinimumOccursOn)                                                            | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#NormalGasketTotalClosure.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#NormalGasketTotalClosure.SolverComponentIDs)                                                      | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#NormalGasketTotalClosure.Substep)                                                                            | Gets the Substep.                                                      |
| [`Average`](#NormalGasketTotalClosure.Average)                                                                            | Gets the Average.                                                      |
| [`Maximum`](#NormalGasketTotalClosure.Maximum)                                                                            | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#NormalGasketTotalClosure.MaximumOfMaximumOverTime)                                          | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#NormalGasketTotalClosure.MaximumOfMinimumOverTime)                                          | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#NormalGasketTotalClosure.Minimum)                                                                            | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#NormalGasketTotalClosure.MinimumOfMaximumOverTime)                                          | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#NormalGasketTotalClosure.MinimumOfMinimumOverTime)                                          | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#NormalGasketTotalClosure.Time)                                                                                  | Gets the Time.                                                         |
| [`DisplayTime`](#NormalGasketTotalClosure.DisplayTime)                                                                    | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#NormalGasketTotalClosure.DisplayOption)                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#NormalGasketTotalClosure.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#NormalGasketTotalClosure.By)                                                                                      | Gets or sets the By.                                                   |
| [`ItemType`](#NormalGasketTotalClosure.ItemType)                                                                          | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#NormalGasketTotalClosure.CalculateTimeHistory)                                                  | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#NormalGasketTotalClosure.Suppressed)                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#NormalGasketTotalClosure.Children)                                                                          | Gets the list of children.                                             |
| [`Comments`](#NormalGasketTotalClosure.Comments)                                                                          | Gets the list of associated comments.                                  |
| [`Figures`](#NormalGasketTotalClosure.Figures)                                                                            | Gets the list of associated figures.                                   |
| [`Images`](#NormalGasketTotalClosure.Images)                                                                              | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#NormalGasketTotalClosure.Properties)                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#NormalGasketTotalClosure.VisibleProperties)                                                        | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.GasketResults import NormalGasketTotalClosure
```

## Property detail

### *property* NormalGasketTotalClosure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NormalGasketTotalClosure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NormalGasketTotalClosure.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NormalGasketTotalClosure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
