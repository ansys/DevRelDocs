# NewtonRaphsonResidualCharge

### *class* NewtonRaphsonResidualCharge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NewtonRaphsonResidualCharge.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#NewtonRaphsonResidualCharge.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#NewtonRaphsonResidualCharge.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#NewtonRaphsonResidualCharge.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#NewtonRaphsonResidualCharge.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#NewtonRaphsonResidualCharge.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#NewtonRaphsonResidualCharge.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#NewtonRaphsonResidualCharge.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#NewtonRaphsonResidualCharge.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#NewtonRaphsonResidualCharge.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#NewtonRaphsonResidualCharge.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#NewtonRaphsonResidualCharge.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#NewtonRaphsonResidualCharge.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NewtonRaphsonResidualCharge.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NewtonRaphsonResidualCharge.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NewtonRaphsonResidualCharge.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NewtonRaphsonResidualCharge.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NewtonRaphsonResidualCharge.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NewtonRaphsonResidualCharge.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NewtonRaphsonResidualCharge.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NewtonRaphsonResidualCharge.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NewtonRaphsonResidualCharge.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NewtonRaphsonResidualCharge.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NewtonRaphsonResidualCharge.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#NewtonRaphsonResidualCharge.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NewtonRaphsonResidualCharge.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#NewtonRaphsonResidualCharge.PlotData)                                                                    | Gets the result table.                                                 |
| [`Location`](#NewtonRaphsonResidualCharge.Location)                                                                    | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#NewtonRaphsonResidualCharge.TimeForMinimumOfMinimumValues)                          | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#NewtonRaphsonResidualCharge.TimeForMinimumOfMaximumValues)                          | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#NewtonRaphsonResidualCharge.LoadStepForMinimumOfMinimumValues)                  | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#NewtonRaphsonResidualCharge.LoadStepForMinimumOfMaximumValues)                  | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#NewtonRaphsonResidualCharge.TimeForMaximumOfMinimumValues)                          | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#NewtonRaphsonResidualCharge.TimeForMaximumOfMaximumValues)                          | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#NewtonRaphsonResidualCharge.LoadStepForMaximumOfMinimumValues)                  | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#NewtonRaphsonResidualCharge.LoadStepForMaximumOfMaximumValues)                  | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#NewtonRaphsonResidualCharge.IsSolved)                                                                    | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#NewtonRaphsonResidualCharge.ScopingMethod)                                                          | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#NewtonRaphsonResidualCharge.SetNumber)                                                                  | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#NewtonRaphsonResidualCharge.CombinationNumber)                                                  | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#NewtonRaphsonResidualCharge.SolutionCombinationDriver)                                  | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#NewtonRaphsonResidualCharge.WaterfallPanelShowTextOnMosaic)                        | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#NewtonRaphsonResidualCharge.CrackFrontNumber)                                                    | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#NewtonRaphsonResidualCharge.GlobalIDs)                                                                  | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#NewtonRaphsonResidualCharge.Identifier)                                                                | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#NewtonRaphsonResidualCharge.IterationNumber)                                                      | Gets the IterationNumber.                                              |
| [`LoadStep`](#NewtonRaphsonResidualCharge.LoadStep)                                                                    | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#NewtonRaphsonResidualCharge.MaximumOccursOn)                                                      | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#NewtonRaphsonResidualCharge.MinimumOccursOn)                                                      | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#NewtonRaphsonResidualCharge.LoadStepNumber)                                                        | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#NewtonRaphsonResidualCharge.SolverComponentIDs)                                                | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#NewtonRaphsonResidualCharge.Substep)                                                                      | Gets the Substep.                                                      |
| [`Average`](#NewtonRaphsonResidualCharge.Average)                                                                      | Gets the Average.                                                      |
| [`Maximum`](#NewtonRaphsonResidualCharge.Maximum)                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#NewtonRaphsonResidualCharge.MaximumOfMaximumOverTime)                                    | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#NewtonRaphsonResidualCharge.MaximumOfMinimumOverTime)                                    | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#NewtonRaphsonResidualCharge.Minimum)                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#NewtonRaphsonResidualCharge.MinimumOfMaximumOverTime)                                    | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#NewtonRaphsonResidualCharge.MinimumOfMinimumOverTime)                                    | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#NewtonRaphsonResidualCharge.Time)                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#NewtonRaphsonResidualCharge.DisplayTime)                                                              | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#NewtonRaphsonResidualCharge.DisplayOption)                                                          | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#NewtonRaphsonResidualCharge.DpfEvaluation)                                                          | Gets or sets the DpfEvaluation.                                        |
| [`By`](#NewtonRaphsonResidualCharge.By)                                                                                | Gets or sets the By.                                                   |
| [`ItemType`](#NewtonRaphsonResidualCharge.ItemType)                                                                    | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#NewtonRaphsonResidualCharge.CalculateTimeHistory)                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#NewtonRaphsonResidualCharge.Suppressed)                                                                | Gets or sets the Suppressed.                                           |
| [`Children`](#NewtonRaphsonResidualCharge.Children)                                                                    | Gets the list of children.                                             |
| [`Comments`](#NewtonRaphsonResidualCharge.Comments)                                                                    | Gets the list of associated comments.                                  |
| [`Figures`](#NewtonRaphsonResidualCharge.Figures)                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#NewtonRaphsonResidualCharge.Images)                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#NewtonRaphsonResidualCharge.Properties)                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#NewtonRaphsonResidualCharge.VisibleProperties)                                                  | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import NewtonRaphsonResidualCharge
```

## Property detail

### *property* NewtonRaphsonResidualCharge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NewtonRaphsonResidualCharge.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NewtonRaphsonResidualCharge.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NewtonRaphsonResidualCharge.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
