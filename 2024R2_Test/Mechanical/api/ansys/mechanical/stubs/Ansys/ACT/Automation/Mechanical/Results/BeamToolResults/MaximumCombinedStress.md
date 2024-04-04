# MaximumCombinedStress

### *class* MaximumCombinedStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaximumCombinedStress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MaximumCombinedStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MaximumCombinedStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MaximumCombinedStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MaximumCombinedStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MaximumCombinedStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MaximumCombinedStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MaximumCombinedStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MaximumCombinedStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MaximumCombinedStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MaximumCombinedStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MaximumCombinedStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MaximumCombinedStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MaximumCombinedStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MaximumCombinedStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MaximumCombinedStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MaximumCombinedStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MaximumCombinedStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MaximumCombinedStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MaximumCombinedStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MaximumCombinedStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaximumCombinedStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MaximumCombinedStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MaximumCombinedStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MaximumCombinedStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MaximumCombinedStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#MaximumCombinedStress.PlotData)                                                                                | Gets the result table.                                                 |
| [`Location`](#MaximumCombinedStress.Location)                                                                                | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MaximumCombinedStress.TimeForMinimumOfMinimumValues)                                      | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MaximumCombinedStress.TimeForMinimumOfMaximumValues)                                      | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MaximumCombinedStress.LoadStepForMinimumOfMinimumValues)                              | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MaximumCombinedStress.LoadStepForMinimumOfMaximumValues)                              | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MaximumCombinedStress.TimeForMaximumOfMinimumValues)                                      | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MaximumCombinedStress.TimeForMaximumOfMaximumValues)                                      | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MaximumCombinedStress.LoadStepForMaximumOfMinimumValues)                              | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MaximumCombinedStress.LoadStepForMaximumOfMaximumValues)                              | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MaximumCombinedStress.IsSolved)                                                                                | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MaximumCombinedStress.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MaximumCombinedStress.SetNumber)                                                                              | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MaximumCombinedStress.CombinationNumber)                                                              | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MaximumCombinedStress.SolutionCombinationDriver)                                              | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                 | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MaximumCombinedStress.WaterfallPanelShowTextOnMosaic)                                    | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MaximumCombinedStress.CrackFrontNumber)                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MaximumCombinedStress.GlobalIDs)                                                                              | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MaximumCombinedStress.Identifier)                                                                            | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MaximumCombinedStress.IterationNumber)                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#MaximumCombinedStress.LoadStep)                                                                                | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MaximumCombinedStress.MaximumOccursOn)                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MaximumCombinedStress.MinimumOccursOn)                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MaximumCombinedStress.LoadStepNumber)                                                                    | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MaximumCombinedStress.SolverComponentIDs)                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MaximumCombinedStress.Substep)                                                                                  | Gets the Substep.                                                      |
| [`Average`](#MaximumCombinedStress.Average)                                                                                  | Gets the Average.                                                      |
| [`Maximum`](#MaximumCombinedStress.Maximum)                                                                                  | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MaximumCombinedStress.MaximumOfMaximumOverTime)                                                | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MaximumCombinedStress.MaximumOfMinimumOverTime)                                                | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MaximumCombinedStress.Minimum)                                                                                  | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MaximumCombinedStress.MinimumOfMaximumOverTime)                                                | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MaximumCombinedStress.MinimumOfMinimumOverTime)                                                | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MaximumCombinedStress.Time)                                                                                        | Gets the Time.                                                         |
| [`DisplayTime`](#MaximumCombinedStress.DisplayTime)                                                                          | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MaximumCombinedStress.DisplayOption)                                                                      | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MaximumCombinedStress.DpfEvaluation)                                                                      | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MaximumCombinedStress.By)                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#MaximumCombinedStress.ItemType)                                                                                | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MaximumCombinedStress.CalculateTimeHistory)                                                        | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MaximumCombinedStress.Suppressed)                                                                            | Gets or sets the Suppressed.                                           |
| [`Children`](#MaximumCombinedStress.Children)                                                                                | Gets the list of children.                                             |
| [`Comments`](#MaximumCombinedStress.Comments)                                                                                | Gets the list of associated comments.                                  |
| [`Figures`](#MaximumCombinedStress.Figures)                                                                                  | Gets the list of associated figures.                                   |
| [`Images`](#MaximumCombinedStress.Images)                                                                                    | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MaximumCombinedStress.Properties)                                                                            | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MaximumCombinedStress.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import MaximumCombinedStress
```

## Property detail

### *property* MaximumCombinedStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MaximumCombinedStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MaximumCombinedStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MaximumCombinedStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
