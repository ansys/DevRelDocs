# MatrixTensileDamageVariable

### *class* MatrixTensileDamageVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MatrixTensileDamageVariable.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MatrixTensileDamageVariable.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MatrixTensileDamageVariable.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MatrixTensileDamageVariable.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MatrixTensileDamageVariable.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MatrixTensileDamageVariable.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MatrixTensileDamageVariable.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MatrixTensileDamageVariable.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MatrixTensileDamageVariable.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MatrixTensileDamageVariable.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MatrixTensileDamageVariable.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MatrixTensileDamageVariable.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MatrixTensileDamageVariable.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MatrixTensileDamageVariable.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MatrixTensileDamageVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MatrixTensileDamageVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MatrixTensileDamageVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MatrixTensileDamageVariable.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MatrixTensileDamageVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MatrixTensileDamageVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MatrixTensileDamageVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MatrixTensileDamageVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MatrixTensileDamageVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MatrixTensileDamageVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MatrixTensileDamageVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MatrixTensileDamageVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MatrixTensileDamageVariable.Mode)                                                                               | Gets or sets the Mode.                                                 |
| [`Ply`](#MatrixTensileDamageVariable.Ply)                                                                                 | Gets or sets the Ply selection.                                        |
| [`Plies`](#MatrixTensileDamageVariable.Plies)                                                                             | Plies property.                                                        |
| [`DamageResultType`](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType)                      | Gets the DamageResultType.                                             |
| [`PlotData`](#MatrixTensileDamageVariable.PlotData)                                                                       | Gets the result table.                                                 |
| [`Location`](#MatrixTensileDamageVariable.Location)                                                                       | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MatrixTensileDamageVariable.TimeForMinimumOfMinimumValues)                             | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MatrixTensileDamageVariable.TimeForMinimumOfMaximumValues)                             | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MatrixTensileDamageVariable.LoadStepForMinimumOfMinimumValues)                     | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MatrixTensileDamageVariable.LoadStepForMinimumOfMaximumValues)                     | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MatrixTensileDamageVariable.TimeForMaximumOfMinimumValues)                             | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MatrixTensileDamageVariable.TimeForMaximumOfMaximumValues)                             | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MatrixTensileDamageVariable.LoadStepForMaximumOfMinimumValues)                     | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MatrixTensileDamageVariable.LoadStepForMaximumOfMaximumValues)                     | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MatrixTensileDamageVariable.IsSolved)                                                                       | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MatrixTensileDamageVariable.ScopingMethod)                                                             | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MatrixTensileDamageVariable.SetNumber)                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MatrixTensileDamageVariable.CombinationNumber)                                                     | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MatrixTensileDamageVariable.SolutionCombinationDriver)                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MatrixTensileDamageVariable.WaterfallPanelShowTextOnMosaic)                           | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MatrixTensileDamageVariable.CrackFrontNumber)                                                       | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MatrixTensileDamageVariable.GlobalIDs)                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MatrixTensileDamageVariable.Identifier)                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MatrixTensileDamageVariable.IterationNumber)                                                         | Gets the IterationNumber.                                              |
| [`LoadStep`](#MatrixTensileDamageVariable.LoadStep)                                                                       | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MatrixTensileDamageVariable.MaximumOccursOn)                                                         | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MatrixTensileDamageVariable.MinimumOccursOn)                                                         | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MatrixTensileDamageVariable.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MatrixTensileDamageVariable.SolverComponentIDs)                                                   | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MatrixTensileDamageVariable.Substep)                                                                         | Gets the Substep.                                                      |
| [`Average`](#MatrixTensileDamageVariable.Average)                                                                         | Gets the Average.                                                      |
| [`Maximum`](#MatrixTensileDamageVariable.Maximum)                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MatrixTensileDamageVariable.MaximumOfMaximumOverTime)                                       | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MatrixTensileDamageVariable.MaximumOfMinimumOverTime)                                       | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MatrixTensileDamageVariable.Minimum)                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MatrixTensileDamageVariable.MinimumOfMaximumOverTime)                                       | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MatrixTensileDamageVariable.MinimumOfMinimumOverTime)                                       | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MatrixTensileDamageVariable.Time)                                                                               | Gets the Time.                                                         |
| [`DisplayTime`](#MatrixTensileDamageVariable.DisplayTime)                                                                 | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MatrixTensileDamageVariable.DisplayOption)                                                             | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MatrixTensileDamageVariable.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MatrixTensileDamageVariable.By)                                                                                   | Gets or sets the By.                                                   |
| [`ItemType`](#MatrixTensileDamageVariable.ItemType)                                                                       | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MatrixTensileDamageVariable.CalculateTimeHistory)                                               | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MatrixTensileDamageVariable.Suppressed)                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#MatrixTensileDamageVariable.Children)                                                                       | Gets the list of children.                                             |
| [`Comments`](#MatrixTensileDamageVariable.Comments)                                                                       | Gets the list of associated comments.                                  |
| [`Figures`](#MatrixTensileDamageVariable.Figures)                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#MatrixTensileDamageVariable.Images)                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MatrixTensileDamageVariable.Properties)                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MatrixTensileDamageVariable.VisibleProperties)                                                     | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DamageResults import MatrixTensileDamageVariable
```

## Property detail

### *property* MatrixTensileDamageVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileDamageVariable.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MatrixTensileDamageVariable.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MatrixTensileDamageVariable.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
