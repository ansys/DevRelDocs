<a id="beamresult"></a>

# BeamResult

<a id="BeamResult"></a>

### *class* BeamResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BeamResult.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#BeamResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#BeamResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#BeamResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#BeamResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#BeamResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#BeamResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#BeamResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#BeamResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#BeamResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#BeamResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#BeamResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#BeamResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#BeamResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BeamResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BeamResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BeamResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BeamResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BeamResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BeamResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BeamResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BeamResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BeamResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BeamResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#BeamResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BeamResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`BeamResultType`](#BeamResult.BeamResultType)                                                                            | Gets or sets the BeamResultType.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#BeamResult.PlotData)                                                                                        | Gets the result table.                                                 |
| [`Location`](#BeamResult.Location)                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#BeamResult.TimeForMinimumOfMinimumValues)                                              | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#BeamResult.TimeForMinimumOfMaximumValues)                                              | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#BeamResult.LoadStepForMinimumOfMinimumValues)                                      | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#BeamResult.LoadStepForMinimumOfMaximumValues)                                      | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#BeamResult.TimeForMaximumOfMinimumValues)                                              | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#BeamResult.TimeForMaximumOfMaximumValues)                                              | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#BeamResult.LoadStepForMaximumOfMinimumValues)                                      | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#BeamResult.LoadStepForMaximumOfMaximumValues)                                      | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#BeamResult.IsSolved)                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#BeamResult.ScopingMethod)                                                                              | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#BeamResult.SetNumber)                                                                                      | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#BeamResult.CombinationNumber)                                                                      | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#BeamResult.SolutionCombinationDriver)                                                      | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#BeamResult.WaterfallPanelShowTextOnMosaic)                                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#BeamResult.CrackFrontNumber)                                                                        | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#BeamResult.GlobalIDs)                                                                                      | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#BeamResult.Identifier)                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#BeamResult.IterationNumber)                                                                          | Gets the IterationNumber.                                              |
| [`LoadStep`](#BeamResult.LoadStep)                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#BeamResult.MaximumOccursOn)                                                                          | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#BeamResult.MinimumOccursOn)                                                                          | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#BeamResult.LoadStepNumber)                                                                            | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#BeamResult.SolverComponentIDs)                                                                    | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#BeamResult.Substep)                                                                                          | Gets the Substep.                                                      |
| [`Average`](#BeamResult.Average)                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#BeamResult.Maximum)                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#BeamResult.MaximumOfMaximumOverTime)                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#BeamResult.MaximumOfMinimumOverTime)                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#BeamResult.Minimum)                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#BeamResult.MinimumOfMaximumOverTime)                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#BeamResult.MinimumOfMinimumOverTime)                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#BeamResult.Time)                                                                                                | Gets the Time.                                                         |
| [`DisplayTime`](#BeamResult.DisplayTime)                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#BeamResult.DisplayOption)                                                                              | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#BeamResult.DpfEvaluation)                                                                              | Gets or sets the DpfEvaluation.                                        |
| [`By`](#BeamResult.By)                                                                                                    | Gets or sets the By.                                                   |
| [`ItemType`](#BeamResult.ItemType)                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#BeamResult.CalculateTimeHistory)                                                                | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#BeamResult.Suppressed)                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#BeamResult.Children)                                                                                        | Gets the list of children.                                             |
| [`Comments`](#BeamResult.Comments)                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#BeamResult.Figures)                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#BeamResult.Images)                                                                                            | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#BeamResult.Properties)                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#BeamResult.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import BeamResult
```

<a id="property-detail"></a>

## Property detail

<a id="BeamResult.InternalObject"></a>

### *property* BeamResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.BeamResultType"></a>

### *property* BeamResult.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.DataModelObjectCategory"></a>

### *property* BeamResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.PlotData"></a>

### *property* BeamResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Location"></a>

### *property* BeamResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.TimeForMinimumOfMinimumValues"></a>

### *property* BeamResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.TimeForMinimumOfMaximumValues"></a>

### *property* BeamResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* BeamResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* BeamResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.TimeForMaximumOfMinimumValues"></a>

### *property* BeamResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.TimeForMaximumOfMaximumValues"></a>

### *property* BeamResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* BeamResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* BeamResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.IsSolved"></a>

### *property* BeamResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.CoordinateSystem"></a>

### *property* BeamResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.ScopingMethod"></a>

### *property* BeamResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.SetNumber"></a>

### *property* BeamResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.CombinationNumber"></a>

### *property* BeamResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.SolutionCombinationDriver"></a>

### *property* BeamResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Path"></a>

### *property* BeamResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Surface"></a>

### *property* BeamResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.NamedSelections"></a>

### *property* BeamResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* BeamResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.CrackFrontNumber"></a>

### *property* BeamResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.GlobalIDs"></a>

### *property* BeamResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Identifier"></a>

### *property* BeamResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.IterationNumber"></a>

### *property* BeamResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.LoadStep"></a>

### *property* BeamResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.MaximumOccursOn"></a>

### *property* BeamResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.MinimumOccursOn"></a>

### *property* BeamResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.LoadStepNumber"></a>

### *property* BeamResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.SolverComponentIDs"></a>

### *property* BeamResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Substep"></a>

### *property* BeamResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Average"></a>

### *property* BeamResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Maximum"></a>

### *property* BeamResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.MaximumOfMaximumOverTime"></a>

### *property* BeamResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.MaximumOfMinimumOverTime"></a>

### *property* BeamResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Minimum"></a>

### *property* BeamResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.MinimumOfMaximumOverTime"></a>

### *property* BeamResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.MinimumOfMinimumOverTime"></a>

### *property* BeamResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Time"></a>

### *property* BeamResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.DisplayTime"></a>

### *property* BeamResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.GraphControlsXAxis"></a>

### *property* BeamResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.DisplayOption"></a>

### *property* BeamResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.DpfEvaluation"></a>

### *property* BeamResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.By"></a>

### *property* BeamResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.ItemType"></a>

### *property* BeamResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.CalculateTimeHistory"></a>

### *property* BeamResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Suppressed"></a>

### *property* BeamResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Children"></a>

### *property* BeamResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Comments"></a>

### *property* BeamResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Figures"></a>

### *property* BeamResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Images"></a>

### *property* BeamResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BeamResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Properties"></a>

### *property* BeamResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.VisibleProperties"></a>

### *property* BeamResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BeamResult.ClearGeneratedData"></a>

### BeamResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.EvaluateAllResults"></a>

### BeamResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.FetchRemoteResults"></a>

### BeamResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.ExportToTextFile"></a>

### BeamResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.ExportAnimation"></a>

### BeamResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.DuplicateWithoutResults"></a>

### BeamResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.CreateResultsAtAllSets"></a>

### BeamResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.PromoteToNamedSelection"></a>

### BeamResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.CreateParameter"></a>

### BeamResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.AddAlert"></a>

### BeamResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.AddConvergence"></a>

### BeamResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.RenameBasedOnDefinition"></a>

### BeamResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Delete"></a>

### BeamResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.GetChildren"></a>

### BeamResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BeamResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.AddComment"></a>

### BeamResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.AddFigure"></a>

### BeamResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.AddImage"></a>

### BeamResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Activate"></a>

### BeamResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.CopyTo"></a>

### BeamResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.Duplicate"></a>

### BeamResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.GroupAllSimilarChildren"></a>

### BeamResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.GroupSimilarObjects"></a>

### BeamResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.PropertyByName"></a>

### BeamResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.PropertyByAPIName"></a>

### BeamResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.GetParameter"></a>

### BeamResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamResult.RemoveParameter"></a>

### BeamResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
