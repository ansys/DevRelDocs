# ElectromagneticResult

### *class* ElectromagneticResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectromagneticResult.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#ElectromagneticResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#ElectromagneticResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ElectromagneticResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ElectromagneticResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ElectromagneticResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ElectromagneticResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ElectromagneticResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ElectromagneticResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ElectromagneticResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ElectromagneticResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ElectromagneticResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ElectromagneticResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElectromagneticResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElectromagneticResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectromagneticResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectromagneticResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElectromagneticResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElectromagneticResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElectromagneticResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElectromagneticResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectromagneticResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElectromagneticResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElectromagneticResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ElectromagneticResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElectromagneticResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ElectromagneticResultType`](#ElectromagneticResult.ElectromagneticResultType)                                           | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#ElectromagneticResult.AverageAcrossBodies)                                                       | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#ElectromagneticResult.PlotData)                                                                             | Gets the result table.                                                 |
| [`Location`](#ElectromagneticResult.Location)                                                                             | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ElectromagneticResult.TimeForMinimumOfMinimumValues)                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ElectromagneticResult.TimeForMinimumOfMaximumValues)                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ElectromagneticResult.LoadStepForMinimumOfMinimumValues)                           | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ElectromagneticResult.LoadStepForMinimumOfMaximumValues)                           | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ElectromagneticResult.TimeForMaximumOfMinimumValues)                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ElectromagneticResult.TimeForMaximumOfMaximumValues)                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ElectromagneticResult.LoadStepForMaximumOfMinimumValues)                           | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ElectromagneticResult.LoadStepForMaximumOfMaximumValues)                           | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ElectromagneticResult.IsSolved)                                                                             | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ElectromagneticResult.ScopingMethod)                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ElectromagneticResult.SetNumber)                                                                           | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ElectromagneticResult.CombinationNumber)                                                           | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ElectromagneticResult.SolutionCombinationDriver)                                           | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ElectromagneticResult.WaterfallPanelShowTextOnMosaic)                                 | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ElectromagneticResult.CrackFrontNumber)                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ElectromagneticResult.GlobalIDs)                                                                           | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ElectromagneticResult.Identifier)                                                                         | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ElectromagneticResult.IterationNumber)                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#ElectromagneticResult.LoadStep)                                                                             | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ElectromagneticResult.MaximumOccursOn)                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ElectromagneticResult.MinimumOccursOn)                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ElectromagneticResult.LoadStepNumber)                                                                 | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ElectromagneticResult.SolverComponentIDs)                                                         | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ElectromagneticResult.Substep)                                                                               | Gets the Substep.                                                      |
| [`Average`](#ElectromagneticResult.Average)                                                                               | Gets the Average.                                                      |
| [`Maximum`](#ElectromagneticResult.Maximum)                                                                               | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ElectromagneticResult.MaximumOfMaximumOverTime)                                             | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ElectromagneticResult.MaximumOfMinimumOverTime)                                             | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ElectromagneticResult.Minimum)                                                                               | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ElectromagneticResult.MinimumOfMaximumOverTime)                                             | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ElectromagneticResult.MinimumOfMinimumOverTime)                                             | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ElectromagneticResult.Time)                                                                                     | Gets the Time.                                                         |
| [`DisplayTime`](#ElectromagneticResult.DisplayTime)                                                                       | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ElectromagneticResult.DisplayOption)                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ElectromagneticResult.DpfEvaluation)                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ElectromagneticResult.By)                                                                                         | Gets or sets the By.                                                   |
| [`ItemType`](#ElectromagneticResult.ItemType)                                                                             | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ElectromagneticResult.CalculateTimeHistory)                                                     | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ElectromagneticResult.Suppressed)                                                                         | Gets or sets the Suppressed.                                           |
| [`Children`](#ElectromagneticResult.Children)                                                                             | Gets the list of children.                                             |
| [`Comments`](#ElectromagneticResult.Comments)                                                                             | Gets the list of associated comments.                                  |
| [`Figures`](#ElectromagneticResult.Figures)                                                                               | Gets the list of associated figures.                                   |
| [`Images`](#ElectromagneticResult.Images)                                                                                 | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ElectromagneticResult.Properties)                                                                         | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ElectromagneticResult.VisibleProperties)                                                           | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults import ElectromagneticResult
```

## Property detail

### *property* ElectromagneticResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ElectromagneticResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ElectromagneticResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ElectromagneticResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
