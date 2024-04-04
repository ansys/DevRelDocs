# MinimumBendingStress

### *class* MinimumBendingStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MinimumBendingStress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MinimumBendingStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MinimumBendingStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MinimumBendingStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MinimumBendingStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MinimumBendingStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MinimumBendingStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MinimumBendingStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MinimumBendingStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MinimumBendingStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MinimumBendingStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MinimumBendingStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MinimumBendingStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MinimumBendingStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MinimumBendingStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MinimumBendingStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MinimumBendingStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MinimumBendingStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MinimumBendingStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MinimumBendingStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MinimumBendingStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MinimumBendingStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MinimumBendingStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MinimumBendingStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MinimumBendingStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MinimumBendingStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#MinimumBendingStress.PlotData)                                                                                 | Gets the result table.                                                 |
| [`Location`](#MinimumBendingStress.Location)                                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MinimumBendingStress.TimeForMinimumOfMinimumValues)                                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MinimumBendingStress.TimeForMinimumOfMaximumValues)                                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MinimumBendingStress.LoadStepForMinimumOfMinimumValues)                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MinimumBendingStress.LoadStepForMinimumOfMaximumValues)                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MinimumBendingStress.TimeForMaximumOfMinimumValues)                                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MinimumBendingStress.TimeForMaximumOfMaximumValues)                                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MinimumBendingStress.LoadStepForMaximumOfMinimumValues)                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MinimumBendingStress.LoadStepForMaximumOfMaximumValues)                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MinimumBendingStress.IsSolved)                                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MinimumBendingStress.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MinimumBendingStress.SetNumber)                                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MinimumBendingStress.CombinationNumber)                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MinimumBendingStress.SolutionCombinationDriver)                                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                 | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MinimumBendingStress.WaterfallPanelShowTextOnMosaic)                                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MinimumBendingStress.CrackFrontNumber)                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MinimumBendingStress.GlobalIDs)                                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MinimumBendingStress.Identifier)                                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MinimumBendingStress.IterationNumber)                                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#MinimumBendingStress.LoadStep)                                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MinimumBendingStress.MaximumOccursOn)                                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MinimumBendingStress.MinimumOccursOn)                                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MinimumBendingStress.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MinimumBendingStress.SolverComponentIDs)                                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MinimumBendingStress.Substep)                                                                                   | Gets the Substep.                                                      |
| [`Average`](#MinimumBendingStress.Average)                                                                                   | Gets the Average.                                                      |
| [`Maximum`](#MinimumBendingStress.Maximum)                                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MinimumBendingStress.MaximumOfMaximumOverTime)                                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MinimumBendingStress.MaximumOfMinimumOverTime)                                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MinimumBendingStress.Minimum)                                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MinimumBendingStress.MinimumOfMaximumOverTime)                                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MinimumBendingStress.MinimumOfMinimumOverTime)                                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MinimumBendingStress.Time)                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#MinimumBendingStress.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MinimumBendingStress.DisplayOption)                                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MinimumBendingStress.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MinimumBendingStress.By)                                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#MinimumBendingStress.ItemType)                                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MinimumBendingStress.CalculateTimeHistory)                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MinimumBendingStress.Suppressed)                                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#MinimumBendingStress.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#MinimumBendingStress.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#MinimumBendingStress.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#MinimumBendingStress.Images)                                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MinimumBendingStress.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MinimumBendingStress.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import MinimumBendingStress
```

## Property detail

### *property* MinimumBendingStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MinimumBendingStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MinimumBendingStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MinimumBendingStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
