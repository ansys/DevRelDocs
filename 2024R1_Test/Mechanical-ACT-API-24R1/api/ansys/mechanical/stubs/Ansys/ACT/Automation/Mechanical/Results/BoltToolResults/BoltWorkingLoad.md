# BoltWorkingLoad

<a id="BoltWorkingLoad"></a>

### *class* BoltWorkingLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltWorkingLoad.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#BoltWorkingLoad.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#BoltWorkingLoad.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#BoltWorkingLoad.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#BoltWorkingLoad.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#BoltWorkingLoad.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#BoltWorkingLoad.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#BoltWorkingLoad.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#BoltWorkingLoad.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#BoltWorkingLoad.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#BoltWorkingLoad.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#BoltWorkingLoad.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#BoltWorkingLoad.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#BoltWorkingLoad.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BoltWorkingLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BoltWorkingLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BoltWorkingLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BoltWorkingLoad.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BoltWorkingLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BoltWorkingLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BoltWorkingLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BoltWorkingLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BoltWorkingLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BoltWorkingLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#BoltWorkingLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BoltWorkingLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`BoltResultType`](./../../../../../Mechanical/DataModel/Enums/BoltResultType.md#BoltResultType)                            | Gets or sets the BoltResultType.                                       |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#BoltWorkingLoad.PlotData)                                                                                   | Gets the result table.                                                 |
| [`Location`](#BoltWorkingLoad.Location)                                                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#BoltWorkingLoad.TimeForMinimumOfMinimumValues)                                         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#BoltWorkingLoad.TimeForMinimumOfMaximumValues)                                         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#BoltWorkingLoad.LoadStepForMinimumOfMinimumValues)                                 | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#BoltWorkingLoad.LoadStepForMinimumOfMaximumValues)                                 | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#BoltWorkingLoad.TimeForMaximumOfMinimumValues)                                         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#BoltWorkingLoad.TimeForMaximumOfMaximumValues)                                         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#BoltWorkingLoad.LoadStepForMaximumOfMinimumValues)                                 | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#BoltWorkingLoad.LoadStepForMaximumOfMaximumValues)                                 | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#BoltWorkingLoad.IsSolved)                                                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#BoltWorkingLoad.ScopingMethod)                                                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#BoltWorkingLoad.SetNumber)                                                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#BoltWorkingLoad.CombinationNumber)                                                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#BoltWorkingLoad.SolutionCombinationDriver)                                                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](./../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](./../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](./../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#BoltWorkingLoad.WaterfallPanelShowTextOnMosaic)                                       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#BoltWorkingLoad.CrackFrontNumber)                                                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#BoltWorkingLoad.GlobalIDs)                                                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#BoltWorkingLoad.Identifier)                                                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#BoltWorkingLoad.IterationNumber)                                                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#BoltWorkingLoad.LoadStep)                                                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#BoltWorkingLoad.MaximumOccursOn)                                                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#BoltWorkingLoad.MinimumOccursOn)                                                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#BoltWorkingLoad.LoadStepNumber)                                                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#BoltWorkingLoad.SolverComponentIDs)                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#BoltWorkingLoad.Substep)                                                                                     | Gets the Substep.                                                      |
| [`Average`](#BoltWorkingLoad.Average)                                                                                     | Gets the Average.                                                      |
| [`Maximum`](#BoltWorkingLoad.Maximum)                                                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#BoltWorkingLoad.MaximumOfMaximumOverTime)                                                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#BoltWorkingLoad.MaximumOfMinimumOverTime)                                                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#BoltWorkingLoad.Minimum)                                                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#BoltWorkingLoad.MinimumOfMaximumOverTime)                                                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#BoltWorkingLoad.MinimumOfMinimumOverTime)                                                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#BoltWorkingLoad.Time)                                                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#BoltWorkingLoad.DisplayTime)                                                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#BoltWorkingLoad.DisplayOption)                                                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#BoltWorkingLoad.DpfEvaluation)                                                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#BoltWorkingLoad.By)                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#BoltWorkingLoad.ItemType)                                                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#BoltWorkingLoad.CalculateTimeHistory)                                                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#BoltWorkingLoad.Suppressed)                                                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#BoltWorkingLoad.Children)                                                                                   | Gets the list of children.                                             |
| [`Comments`](#BoltWorkingLoad.Comments)                                                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#BoltWorkingLoad.Figures)                                                                                     | Gets the list of associated figures.                                   |
| [`Images`](#BoltWorkingLoad.Images)                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#BoltWorkingLoad.Properties)                                                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#BoltWorkingLoad.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults import BoltWorkingLoad
```

<a id="property-detail"></a>

## Property detail

<a id="BoltWorkingLoad.InternalObject"></a>

### *property* BoltWorkingLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.BoltResultType"></a>

### *property* BoltWorkingLoad.BoltResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](./../../../../../Mechanical/DataModel/Enums/ResultType.md#ResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoltResultType.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DataModelObjectCategory"></a>

### *property* BoltWorkingLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.PlotData"></a>

### *property* BoltWorkingLoad.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](./../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Location"></a>

### *property* BoltWorkingLoad.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.TimeForMinimumOfMinimumValues"></a>

### *property* BoltWorkingLoad.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.TimeForMinimumOfMaximumValues"></a>

### *property* BoltWorkingLoad.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepForMinimumOfMinimumValues"></a>

### *property* BoltWorkingLoad.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepForMinimumOfMaximumValues"></a>

### *property* BoltWorkingLoad.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.TimeForMaximumOfMinimumValues"></a>

### *property* BoltWorkingLoad.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.TimeForMaximumOfMaximumValues"></a>

### *property* BoltWorkingLoad.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepForMaximumOfMinimumValues"></a>

### *property* BoltWorkingLoad.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepForMaximumOfMaximumValues"></a>

### *property* BoltWorkingLoad.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.IsSolved"></a>

### *property* BoltWorkingLoad.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CoordinateSystem"></a>

### *property* BoltWorkingLoad.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ScopingMethod"></a>

### *property* BoltWorkingLoad.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.SetNumber"></a>

### *property* BoltWorkingLoad.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CombinationNumber"></a>

### *property* BoltWorkingLoad.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.SolutionCombinationDriver"></a>

### *property* BoltWorkingLoad.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](./../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Path"></a>

### *property* BoltWorkingLoad.Path *: [Ansys.ACT.Automation.Mechanical.Path](./../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Surface"></a>

### *property* BoltWorkingLoad.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.NamedSelections"></a>

### *property* BoltWorkingLoad.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.WaterfallPanelShowTextOnMosaic"></a>

### *property* BoltWorkingLoad.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CrackFrontNumber"></a>

### *property* BoltWorkingLoad.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GlobalIDs"></a>

### *property* BoltWorkingLoad.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Identifier"></a>

### *property* BoltWorkingLoad.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.IterationNumber"></a>

### *property* BoltWorkingLoad.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStep"></a>

### *property* BoltWorkingLoad.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MaximumOccursOn"></a>

### *property* BoltWorkingLoad.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MinimumOccursOn"></a>

### *property* BoltWorkingLoad.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepNumber"></a>

### *property* BoltWorkingLoad.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.SolverComponentIDs"></a>

### *property* BoltWorkingLoad.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Substep"></a>

### *property* BoltWorkingLoad.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Average"></a>

### *property* BoltWorkingLoad.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Maximum"></a>

### *property* BoltWorkingLoad.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MaximumOfMaximumOverTime"></a>

### *property* BoltWorkingLoad.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MaximumOfMinimumOverTime"></a>

### *property* BoltWorkingLoad.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Minimum"></a>

### *property* BoltWorkingLoad.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MinimumOfMaximumOverTime"></a>

### *property* BoltWorkingLoad.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MinimumOfMinimumOverTime"></a>

### *property* BoltWorkingLoad.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Time"></a>

### *property* BoltWorkingLoad.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DisplayTime"></a>

### *property* BoltWorkingLoad.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GraphControlsXAxis"></a>

### *property* BoltWorkingLoad.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DisplayOption"></a>

### *property* BoltWorkingLoad.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](./../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DpfEvaluation"></a>

### *property* BoltWorkingLoad.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.By"></a>

### *property* BoltWorkingLoad.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](./../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ItemType"></a>

### *property* BoltWorkingLoad.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](./../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CalculateTimeHistory"></a>

### *property* BoltWorkingLoad.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Suppressed"></a>

### *property* BoltWorkingLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Children"></a>

### *property* BoltWorkingLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Comments"></a>

### *property* BoltWorkingLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Figures"></a>

### *property* BoltWorkingLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Images"></a>

### *property* BoltWorkingLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BoltWorkingLoad.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Properties"></a>

### *property* BoltWorkingLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.VisibleProperties"></a>

### *property* BoltWorkingLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltWorkingLoad.ClearGeneratedData"></a>

### BoltWorkingLoad.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.EvaluateAllResults"></a>

### BoltWorkingLoad.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.FetchRemoteResults"></a>

### BoltWorkingLoad.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ExportToTextFile"></a>

### BoltWorkingLoad.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ExportAnimation"></a>

### BoltWorkingLoad.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DuplicateWithoutResults"></a>

### BoltWorkingLoad.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CreateResultsAtAllSets"></a>

### BoltWorkingLoad.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.PromoteToNamedSelection"></a>

### BoltWorkingLoad.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CreateParameter"></a>

### BoltWorkingLoad.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddAlert"></a>

### BoltWorkingLoad.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddConvergence"></a>

### BoltWorkingLoad.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.RenameBasedOnDefinition"></a>

### BoltWorkingLoad.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Delete"></a>

### BoltWorkingLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GetChildren"></a>

### BoltWorkingLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BoltWorkingLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddComment"></a>

### BoltWorkingLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddFigure"></a>

### BoltWorkingLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddImage"></a>

### BoltWorkingLoad.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Activate"></a>

### BoltWorkingLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CopyTo"></a>

### BoltWorkingLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Duplicate"></a>

### BoltWorkingLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GroupAllSimilarChildren"></a>

### BoltWorkingLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GroupSimilarObjects"></a>

### BoltWorkingLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.PropertyByName"></a>

### BoltWorkingLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.PropertyByAPIName"></a>

### BoltWorkingLoad.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GetParameter"></a>

### BoltWorkingLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.RemoveParameter"></a>

### BoltWorkingLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
