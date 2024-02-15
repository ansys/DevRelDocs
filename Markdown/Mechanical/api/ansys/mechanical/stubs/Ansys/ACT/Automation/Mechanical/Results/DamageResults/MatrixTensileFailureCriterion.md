# MatrixTensileFailureCriterion

### *class* MatrixTensileFailureCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MatrixTensileFailureCriterion.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MatrixTensileFailureCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MatrixTensileFailureCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MatrixTensileFailureCriterion.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MatrixTensileFailureCriterion.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MatrixTensileFailureCriterion.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MatrixTensileFailureCriterion.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MatrixTensileFailureCriterion.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MatrixTensileFailureCriterion.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MatrixTensileFailureCriterion.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MatrixTensileFailureCriterion.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MatrixTensileFailureCriterion.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MatrixTensileFailureCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MatrixTensileFailureCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MatrixTensileFailureCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MatrixTensileFailureCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MatrixTensileFailureCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MatrixTensileFailureCriterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MatrixTensileFailureCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MatrixTensileFailureCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MatrixTensileFailureCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MatrixTensileFailureCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MatrixTensileFailureCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MatrixTensileFailureCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MatrixTensileFailureCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MatrixTensileFailureCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MatrixTensileFailureCriterion.Mode)                                                                             | Gets or sets the Mode.                                                 |
| [`Ply`](#MatrixTensileFailureCriterion.Ply)                                                                               | Gets or sets the Ply selection.                                        |
| [`Plies`](#MatrixTensileFailureCriterion.Plies)                                                                           | Plies property.                                                        |
| [`DamageResultType`](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType)                      | Gets the DamageResultType.                                             |
| [`PlotData`](#MatrixTensileFailureCriterion.PlotData)                                                                     | Gets the result table.                                                 |
| [`Location`](#MatrixTensileFailureCriterion.Location)                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MatrixTensileFailureCriterion.TimeForMinimumOfMinimumValues)                           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MatrixTensileFailureCriterion.TimeForMinimumOfMaximumValues)                           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MatrixTensileFailureCriterion.LoadStepForMinimumOfMinimumValues)                   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MatrixTensileFailureCriterion.LoadStepForMinimumOfMaximumValues)                   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MatrixTensileFailureCriterion.TimeForMaximumOfMinimumValues)                           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MatrixTensileFailureCriterion.TimeForMaximumOfMaximumValues)                           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MatrixTensileFailureCriterion.LoadStepForMaximumOfMinimumValues)                   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MatrixTensileFailureCriterion.LoadStepForMaximumOfMaximumValues)                   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MatrixTensileFailureCriterion.IsSolved)                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MatrixTensileFailureCriterion.ScopingMethod)                                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MatrixTensileFailureCriterion.SetNumber)                                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MatrixTensileFailureCriterion.CombinationNumber)                                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MatrixTensileFailureCriterion.SolutionCombinationDriver)                                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MatrixTensileFailureCriterion.WaterfallPanelShowTextOnMosaic)                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MatrixTensileFailureCriterion.CrackFrontNumber)                                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MatrixTensileFailureCriterion.GlobalIDs)                                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MatrixTensileFailureCriterion.Identifier)                                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MatrixTensileFailureCriterion.IterationNumber)                                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#MatrixTensileFailureCriterion.LoadStep)                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MatrixTensileFailureCriterion.MaximumOccursOn)                                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MatrixTensileFailureCriterion.MinimumOccursOn)                                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MatrixTensileFailureCriterion.LoadStepNumber)                                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MatrixTensileFailureCriterion.SolverComponentIDs)                                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MatrixTensileFailureCriterion.Substep)                                                                       | Gets the Substep.                                                      |
| [`Average`](#MatrixTensileFailureCriterion.Average)                                                                       | Gets the Average.                                                      |
| [`Maximum`](#MatrixTensileFailureCriterion.Maximum)                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MatrixTensileFailureCriterion.MaximumOfMaximumOverTime)                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MatrixTensileFailureCriterion.MaximumOfMinimumOverTime)                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MatrixTensileFailureCriterion.Minimum)                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MatrixTensileFailureCriterion.MinimumOfMaximumOverTime)                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MatrixTensileFailureCriterion.MinimumOfMinimumOverTime)                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MatrixTensileFailureCriterion.Time)                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#MatrixTensileFailureCriterion.DisplayTime)                                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MatrixTensileFailureCriterion.DisplayOption)                                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MatrixTensileFailureCriterion.DpfEvaluation)                                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MatrixTensileFailureCriterion.By)                                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#MatrixTensileFailureCriterion.ItemType)                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MatrixTensileFailureCriterion.CalculateTimeHistory)                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MatrixTensileFailureCriterion.Suppressed)                                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#MatrixTensileFailureCriterion.Children)                                                                     | Gets the list of children.                                             |
| [`Comments`](#MatrixTensileFailureCriterion.Comments)                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#MatrixTensileFailureCriterion.Figures)                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#MatrixTensileFailureCriterion.Images)                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MatrixTensileFailureCriterion.Properties)                                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MatrixTensileFailureCriterion.VisibleProperties)                                                   | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DamageResults import MatrixTensileFailureCriterion
```

## Property detail

### *property* MatrixTensileFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MatrixTensileFailureCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MatrixTensileFailureCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MatrixTensileFailureCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
