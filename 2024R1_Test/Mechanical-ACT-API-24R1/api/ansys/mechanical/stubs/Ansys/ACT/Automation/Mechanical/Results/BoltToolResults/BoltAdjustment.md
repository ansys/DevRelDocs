# BoltAdjustment

<a id="BoltAdjustment"></a>

### *class* BoltAdjustment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltAdjustment.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#BoltAdjustment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#BoltAdjustment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#BoltAdjustment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#BoltAdjustment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#BoltAdjustment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#BoltAdjustment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#BoltAdjustment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#BoltAdjustment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#BoltAdjustment.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#BoltAdjustment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#BoltAdjustment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#BoltAdjustment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#BoltAdjustment.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BoltAdjustment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BoltAdjustment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BoltAdjustment.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BoltAdjustment.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BoltAdjustment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BoltAdjustment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BoltAdjustment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BoltAdjustment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BoltAdjustment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BoltAdjustment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#BoltAdjustment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BoltAdjustment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`BoltResultType`](./../../../../../Mechanical/DataModel/Enums/BoltResultType.md#BoltResultType)                            | Gets or sets the BoltResultType.                                       |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#BoltAdjustment.PlotData)                                                                                    | Gets the result table.                                                 |
| [`Location`](#BoltAdjustment.Location)                                                                                    | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#BoltAdjustment.TimeForMinimumOfMinimumValues)                                          | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#BoltAdjustment.TimeForMinimumOfMaximumValues)                                          | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#BoltAdjustment.LoadStepForMinimumOfMinimumValues)                                  | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#BoltAdjustment.LoadStepForMinimumOfMaximumValues)                                  | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#BoltAdjustment.TimeForMaximumOfMinimumValues)                                          | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#BoltAdjustment.TimeForMaximumOfMaximumValues)                                          | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#BoltAdjustment.LoadStepForMaximumOfMinimumValues)                                  | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#BoltAdjustment.LoadStepForMaximumOfMaximumValues)                                  | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#BoltAdjustment.IsSolved)                                                                                    | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#BoltAdjustment.ScopingMethod)                                                                          | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#BoltAdjustment.SetNumber)                                                                                  | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#BoltAdjustment.CombinationNumber)                                                                  | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#BoltAdjustment.SolutionCombinationDriver)                                                  | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](./../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](./../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](./../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#BoltAdjustment.WaterfallPanelShowTextOnMosaic)                                        | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#BoltAdjustment.CrackFrontNumber)                                                                    | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#BoltAdjustment.GlobalIDs)                                                                                  | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#BoltAdjustment.Identifier)                                                                                | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#BoltAdjustment.IterationNumber)                                                                      | Gets the IterationNumber.                                              |
| [`LoadStep`](#BoltAdjustment.LoadStep)                                                                                    | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#BoltAdjustment.MaximumOccursOn)                                                                      | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#BoltAdjustment.MinimumOccursOn)                                                                      | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#BoltAdjustment.LoadStepNumber)                                                                        | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#BoltAdjustment.SolverComponentIDs)                                                                | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#BoltAdjustment.Substep)                                                                                      | Gets the Substep.                                                      |
| [`Average`](#BoltAdjustment.Average)                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#BoltAdjustment.Maximum)                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#BoltAdjustment.MaximumOfMaximumOverTime)                                                    | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#BoltAdjustment.MaximumOfMinimumOverTime)                                                    | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#BoltAdjustment.Minimum)                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#BoltAdjustment.MinimumOfMaximumOverTime)                                                    | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#BoltAdjustment.MinimumOfMinimumOverTime)                                                    | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#BoltAdjustment.Time)                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#BoltAdjustment.DisplayTime)                                                                              | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#BoltAdjustment.DisplayOption)                                                                          | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#BoltAdjustment.DpfEvaluation)                                                                          | Gets or sets the DpfEvaluation.                                        |
| [`By`](#BoltAdjustment.By)                                                                                                | Gets or sets the By.                                                   |
| [`ItemType`](#BoltAdjustment.ItemType)                                                                                    | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#BoltAdjustment.CalculateTimeHistory)                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#BoltAdjustment.Suppressed)                                                                                | Gets or sets the Suppressed.                                           |
| [`Children`](#BoltAdjustment.Children)                                                                                    | Gets the list of children.                                             |
| [`Comments`](#BoltAdjustment.Comments)                                                                                    | Gets the list of associated comments.                                  |
| [`Figures`](#BoltAdjustment.Figures)                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#BoltAdjustment.Images)                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#BoltAdjustment.Properties)                                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#BoltAdjustment.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults import BoltAdjustment
```

<a id="property-detail"></a>

## Property detail

<a id="BoltAdjustment.InternalObject"></a>

### *property* BoltAdjustment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.BoltResultType"></a>

### *property* BoltAdjustment.BoltResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](./../../../../../Mechanical/DataModel/Enums/ResultType.md#ResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoltResultType.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DataModelObjectCategory"></a>

### *property* BoltAdjustment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.PlotData"></a>

### *property* BoltAdjustment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](./../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Location"></a>

### *property* BoltAdjustment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.TimeForMinimumOfMinimumValues"></a>

### *property* BoltAdjustment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.TimeForMinimumOfMaximumValues"></a>

### *property* BoltAdjustment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepForMinimumOfMinimumValues"></a>

### *property* BoltAdjustment.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepForMinimumOfMaximumValues"></a>

### *property* BoltAdjustment.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.TimeForMaximumOfMinimumValues"></a>

### *property* BoltAdjustment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.TimeForMaximumOfMaximumValues"></a>

### *property* BoltAdjustment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepForMaximumOfMinimumValues"></a>

### *property* BoltAdjustment.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepForMaximumOfMaximumValues"></a>

### *property* BoltAdjustment.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.IsSolved"></a>

### *property* BoltAdjustment.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CoordinateSystem"></a>

### *property* BoltAdjustment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ScopingMethod"></a>

### *property* BoltAdjustment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.SetNumber"></a>

### *property* BoltAdjustment.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CombinationNumber"></a>

### *property* BoltAdjustment.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.SolutionCombinationDriver"></a>

### *property* BoltAdjustment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](./../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Path"></a>

### *property* BoltAdjustment.Path *: [Ansys.ACT.Automation.Mechanical.Path](./../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Surface"></a>

### *property* BoltAdjustment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.NamedSelections"></a>

### *property* BoltAdjustment.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.WaterfallPanelShowTextOnMosaic"></a>

### *property* BoltAdjustment.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CrackFrontNumber"></a>

### *property* BoltAdjustment.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GlobalIDs"></a>

### *property* BoltAdjustment.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Identifier"></a>

### *property* BoltAdjustment.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.IterationNumber"></a>

### *property* BoltAdjustment.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStep"></a>

### *property* BoltAdjustment.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MaximumOccursOn"></a>

### *property* BoltAdjustment.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MinimumOccursOn"></a>

### *property* BoltAdjustment.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepNumber"></a>

### *property* BoltAdjustment.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.SolverComponentIDs"></a>

### *property* BoltAdjustment.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Substep"></a>

### *property* BoltAdjustment.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Average"></a>

### *property* BoltAdjustment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Maximum"></a>

### *property* BoltAdjustment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MaximumOfMaximumOverTime"></a>

### *property* BoltAdjustment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MaximumOfMinimumOverTime"></a>

### *property* BoltAdjustment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Minimum"></a>

### *property* BoltAdjustment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MinimumOfMaximumOverTime"></a>

### *property* BoltAdjustment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MinimumOfMinimumOverTime"></a>

### *property* BoltAdjustment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Time"></a>

### *property* BoltAdjustment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DisplayTime"></a>

### *property* BoltAdjustment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GraphControlsXAxis"></a>

### *property* BoltAdjustment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DisplayOption"></a>

### *property* BoltAdjustment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](./../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DpfEvaluation"></a>

### *property* BoltAdjustment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.By"></a>

### *property* BoltAdjustment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](./../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ItemType"></a>

### *property* BoltAdjustment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](./../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CalculateTimeHistory"></a>

### *property* BoltAdjustment.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Suppressed"></a>

### *property* BoltAdjustment.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Children"></a>

### *property* BoltAdjustment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Comments"></a>

### *property* BoltAdjustment.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Figures"></a>

### *property* BoltAdjustment.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Images"></a>

### *property* BoltAdjustment.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BoltAdjustment.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Properties"></a>

### *property* BoltAdjustment.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.VisibleProperties"></a>

### *property* BoltAdjustment.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltAdjustment.ClearGeneratedData"></a>

### BoltAdjustment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.EvaluateAllResults"></a>

### BoltAdjustment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.FetchRemoteResults"></a>

### BoltAdjustment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ExportToTextFile"></a>

### BoltAdjustment.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ExportAnimation"></a>

### BoltAdjustment.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DuplicateWithoutResults"></a>

### BoltAdjustment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CreateResultsAtAllSets"></a>

### BoltAdjustment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.PromoteToNamedSelection"></a>

### BoltAdjustment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CreateParameter"></a>

### BoltAdjustment.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddAlert"></a>

### BoltAdjustment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddConvergence"></a>

### BoltAdjustment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.RenameBasedOnDefinition"></a>

### BoltAdjustment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Delete"></a>

### BoltAdjustment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GetChildren"></a>

### BoltAdjustment.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BoltAdjustment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddComment"></a>

### BoltAdjustment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddFigure"></a>

### BoltAdjustment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddImage"></a>

### BoltAdjustment.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Activate"></a>

### BoltAdjustment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CopyTo"></a>

### BoltAdjustment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Duplicate"></a>

### BoltAdjustment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GroupAllSimilarChildren"></a>

### BoltAdjustment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GroupSimilarObjects"></a>

### BoltAdjustment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.PropertyByName"></a>

### BoltAdjustment.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.PropertyByAPIName"></a>

### BoltAdjustment.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GetParameter"></a>

### BoltAdjustment.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.RemoveParameter"></a>

### BoltAdjustment.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
