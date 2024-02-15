# FatigueEquivalentAlternativeStress

### *class* FatigueEquivalentAlternativeStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueEquivalentAlternativeStress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FatigueEquivalentAlternativeStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FatigueEquivalentAlternativeStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FatigueEquivalentAlternativeStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FatigueEquivalentAlternativeStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FatigueEquivalentAlternativeStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FatigueEquivalentAlternativeStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FatigueEquivalentAlternativeStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FatigueEquivalentAlternativeStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FatigueEquivalentAlternativeStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FatigueEquivalentAlternativeStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FatigueEquivalentAlternativeStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FatigueEquivalentAlternativeStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueEquivalentAlternativeStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueEquivalentAlternativeStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FatigueEquivalentAlternativeStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueEquivalentAlternativeStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueEquivalentAlternativeStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueEquivalentAlternativeStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueEquivalentAlternativeStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueEquivalentAlternativeStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueEquivalentAlternativeStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueEquivalentAlternativeStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueEquivalentAlternativeStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FatigueEquivalentAlternativeStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueEquivalentAlternativeStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#FatigueEquivalentAlternativeStress.Method)                                                                    | Gets the Method.                                                       |
| [`DesignLife`](#FatigueEquivalentAlternativeStress.DesignLife)                                                            | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#FatigueEquivalentAlternativeStress.AverageAcrossBodies)                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FatigueEquivalentAlternativeStress.PlotData)                                                                | Gets the result table.                                                 |
| [`Location`](#FatigueEquivalentAlternativeStress.Location)                                                                | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FatigueEquivalentAlternativeStress.TimeForMinimumOfMinimumValues)                      | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueEquivalentAlternativeStress.TimeForMinimumOfMaximumValues)                      | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMinimumValues)              | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMaximumValues)              | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FatigueEquivalentAlternativeStress.TimeForMaximumOfMinimumValues)                      | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FatigueEquivalentAlternativeStress.TimeForMaximumOfMaximumValues)                      | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMinimumValues)              | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMaximumValues)              | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FatigueEquivalentAlternativeStress.IsSolved)                                                                | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FatigueEquivalentAlternativeStress.ScopingMethod)                                                      | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueEquivalentAlternativeStress.SetNumber)                                                              | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FatigueEquivalentAlternativeStress.CombinationNumber)                                              | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FatigueEquivalentAlternativeStress.SolutionCombinationDriver)                              | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FatigueEquivalentAlternativeStress.WaterfallPanelShowTextOnMosaic)                    | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FatigueEquivalentAlternativeStress.CrackFrontNumber)                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FatigueEquivalentAlternativeStress.GlobalIDs)                                                              | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FatigueEquivalentAlternativeStress.Identifier)                                                            | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FatigueEquivalentAlternativeStress.IterationNumber)                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueEquivalentAlternativeStress.LoadStep)                                                                | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FatigueEquivalentAlternativeStress.MaximumOccursOn)                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FatigueEquivalentAlternativeStress.MinimumOccursOn)                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FatigueEquivalentAlternativeStress.LoadStepNumber)                                                    | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FatigueEquivalentAlternativeStress.SolverComponentIDs)                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueEquivalentAlternativeStress.Substep)                                                                  | Gets the Substep.                                                      |
| [`Average`](#FatigueEquivalentAlternativeStress.Average)                                                                  | Gets the Average.                                                      |
| [`Maximum`](#FatigueEquivalentAlternativeStress.Maximum)                                                                  | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FatigueEquivalentAlternativeStress.MaximumOfMaximumOverTime)                                | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueEquivalentAlternativeStress.MaximumOfMinimumOverTime)                                | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FatigueEquivalentAlternativeStress.Minimum)                                                                  | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FatigueEquivalentAlternativeStress.MinimumOfMaximumOverTime)                                | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueEquivalentAlternativeStress.MinimumOfMinimumOverTime)                                | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FatigueEquivalentAlternativeStress.Time)                                                                        | Gets the Time.                                                         |
| [`DisplayTime`](#FatigueEquivalentAlternativeStress.DisplayTime)                                                          | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FatigueEquivalentAlternativeStress.DisplayOption)                                                      | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FatigueEquivalentAlternativeStress.DpfEvaluation)                                                      | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FatigueEquivalentAlternativeStress.By)                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#FatigueEquivalentAlternativeStress.ItemType)                                                                | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FatigueEquivalentAlternativeStress.CalculateTimeHistory)                                        | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FatigueEquivalentAlternativeStress.Suppressed)                                                            | Gets or sets the Suppressed.                                           |
| [`Children`](#FatigueEquivalentAlternativeStress.Children)                                                                | Gets the list of children.                                             |
| [`Comments`](#FatigueEquivalentAlternativeStress.Comments)                                                                | Gets the list of associated comments.                                  |
| [`Figures`](#FatigueEquivalentAlternativeStress.Figures)                                                                  | Gets the list of associated figures.                                   |
| [`Images`](#FatigueEquivalentAlternativeStress.Images)                                                                    | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FatigueEquivalentAlternativeStress.Properties)                                                            | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FatigueEquivalentAlternativeStress.VisibleProperties)                                              | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueEquivalentAlternativeStress
```

## Property detail

### *property* FatigueEquivalentAlternativeStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FatigueEquivalentAlternativeStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FatigueEquivalentAlternativeStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FatigueEquivalentAlternativeStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
