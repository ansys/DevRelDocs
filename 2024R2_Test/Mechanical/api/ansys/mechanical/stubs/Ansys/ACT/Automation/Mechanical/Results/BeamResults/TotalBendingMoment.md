# TotalBendingMoment

### *class* TotalBendingMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalBendingMoment.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#TotalBendingMoment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#TotalBendingMoment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#TotalBendingMoment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#TotalBendingMoment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#TotalBendingMoment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#TotalBendingMoment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#TotalBendingMoment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#TotalBendingMoment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#TotalBendingMoment.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#TotalBendingMoment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#TotalBendingMoment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#TotalBendingMoment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TotalBendingMoment.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TotalBendingMoment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TotalBendingMoment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalBendingMoment.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TotalBendingMoment.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TotalBendingMoment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TotalBendingMoment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TotalBendingMoment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalBendingMoment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TotalBendingMoment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TotalBendingMoment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#TotalBendingMoment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TotalBendingMoment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`BeamResultType`](#TotalBendingMoment.BeamResultType)                                                                    | Gets or sets the BeamResultType.                                       |
| [`PlotData`](#TotalBendingMoment.PlotData)                                                                                | Gets the result table.                                                 |
| [`Location`](#TotalBendingMoment.Location)                                                                                | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#TotalBendingMoment.TimeForMinimumOfMinimumValues)                                      | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalBendingMoment.TimeForMinimumOfMaximumValues)                                      | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#TotalBendingMoment.LoadStepForMinimumOfMinimumValues)                              | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalBendingMoment.LoadStepForMinimumOfMaximumValues)                              | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#TotalBendingMoment.TimeForMaximumOfMinimumValues)                                      | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#TotalBendingMoment.TimeForMaximumOfMaximumValues)                                      | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#TotalBendingMoment.LoadStepForMaximumOfMinimumValues)                              | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#TotalBendingMoment.LoadStepForMaximumOfMaximumValues)                              | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#TotalBendingMoment.IsSolved)                                                                                | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#TotalBendingMoment.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalBendingMoment.SetNumber)                                                                              | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#TotalBendingMoment.CombinationNumber)                                                              | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#TotalBendingMoment.SolutionCombinationDriver)                                              | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#TotalBendingMoment.WaterfallPanelShowTextOnMosaic)                                    | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#TotalBendingMoment.CrackFrontNumber)                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#TotalBendingMoment.GlobalIDs)                                                                              | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#TotalBendingMoment.Identifier)                                                                            | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#TotalBendingMoment.IterationNumber)                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#TotalBendingMoment.LoadStep)                                                                                | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#TotalBendingMoment.MaximumOccursOn)                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#TotalBendingMoment.MinimumOccursOn)                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#TotalBendingMoment.LoadStepNumber)                                                                    | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#TotalBendingMoment.SolverComponentIDs)                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TotalBendingMoment.Substep)                                                                                  | Gets the Substep.                                                      |
| [`Average`](#TotalBendingMoment.Average)                                                                                  | Gets the Average.                                                      |
| [`Maximum`](#TotalBendingMoment.Maximum)                                                                                  | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#TotalBendingMoment.MaximumOfMaximumOverTime)                                                | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalBendingMoment.MaximumOfMinimumOverTime)                                                | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalBendingMoment.Minimum)                                                                                  | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#TotalBendingMoment.MinimumOfMaximumOverTime)                                                | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalBendingMoment.MinimumOfMinimumOverTime)                                                | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#TotalBendingMoment.Time)                                                                                        | Gets the Time.                                                         |
| [`DisplayTime`](#TotalBendingMoment.DisplayTime)                                                                          | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#TotalBendingMoment.DisplayOption)                                                                      | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#TotalBendingMoment.DpfEvaluation)                                                                      | Gets or sets the DpfEvaluation.                                        |
| [`By`](#TotalBendingMoment.By)                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#TotalBendingMoment.ItemType)                                                                                | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#TotalBendingMoment.CalculateTimeHistory)                                                        | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#TotalBendingMoment.Suppressed)                                                                            | Gets or sets the Suppressed.                                           |
| [`Children`](#TotalBendingMoment.Children)                                                                                | Gets the list of children.                                             |
| [`Comments`](#TotalBendingMoment.Comments)                                                                                | Gets the list of associated comments.                                  |
| [`Figures`](#TotalBendingMoment.Figures)                                                                                  | Gets the list of associated figures.                                   |
| [`Images`](#TotalBendingMoment.Images)                                                                                    | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#TotalBendingMoment.Properties)                                                                            | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#TotalBendingMoment.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import TotalBendingMoment
```

## Property detail

### *property* TotalBendingMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TotalBendingMoment.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TotalBendingMoment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TotalBendingMoment.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
