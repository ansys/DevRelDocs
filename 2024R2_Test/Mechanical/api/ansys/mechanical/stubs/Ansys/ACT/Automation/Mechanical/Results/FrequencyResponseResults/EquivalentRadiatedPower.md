# EquivalentRadiatedPower

### *class* EquivalentRadiatedPower

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentRadiatedPower.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#EquivalentRadiatedPower.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#EquivalentRadiatedPower.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentRadiatedPower.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentRadiatedPower.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentRadiatedPower.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPower.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPower.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPower.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentRadiatedPower.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentRadiatedPower.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentRadiatedPower.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPower.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentRadiatedPower.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentRadiatedPower.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentRadiatedPower.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentRadiatedPower.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentRadiatedPower.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentRadiatedPower.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentRadiatedPower.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPower.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentRadiatedPower.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentRadiatedPower.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentRadiatedPower.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentRadiatedPower.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentRadiatedPower.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`MaximumFrequency`](#EquivalentRadiatedPower.MaximumFrequency)                                                           | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#EquivalentRadiatedPower.MinimumFrequency)                                                           | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#EquivalentRadiatedPower.FrequencyRange)                                                               | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#EquivalentRadiatedPower.PlotData)                                                                           | Gets the result table.                                                 |
| [`Location`](#EquivalentRadiatedPower.Location)                                                                           | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPower.TimeForMinimumOfMinimumValues)                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPower.TimeForMinimumOfMaximumValues)                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPower.LoadStepForMinimumOfMinimumValues)                         | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPower.LoadStepForMinimumOfMaximumValues)                         | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPower.TimeForMaximumOfMinimumValues)                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPower.TimeForMaximumOfMaximumValues)                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPower.LoadStepForMaximumOfMinimumValues)                         | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPower.LoadStepForMaximumOfMaximumValues)                         | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentRadiatedPower.IsSolved)                                                                           | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentRadiatedPower.ScopingMethod)                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentRadiatedPower.SetNumber)                                                                         | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentRadiatedPower.CombinationNumber)                                                         | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPower.SolutionCombinationDriver)                                         | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentRadiatedPower.WaterfallPanelShowTextOnMosaic)                               | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentRadiatedPower.CrackFrontNumber)                                                           | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentRadiatedPower.GlobalIDs)                                                                         | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentRadiatedPower.Identifier)                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentRadiatedPower.IterationNumber)                                                             | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentRadiatedPower.LoadStep)                                                                           | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentRadiatedPower.MaximumOccursOn)                                                             | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentRadiatedPower.MinimumOccursOn)                                                             | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentRadiatedPower.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentRadiatedPower.SolverComponentIDs)                                                       | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentRadiatedPower.Substep)                                                                             | Gets the Substep.                                                      |
| [`Average`](#EquivalentRadiatedPower.Average)                                                                             | Gets the Average.                                                      |
| [`Maximum`](#EquivalentRadiatedPower.Maximum)                                                                             | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPower.MaximumOfMaximumOverTime)                                           | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPower.MaximumOfMinimumOverTime)                                           | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentRadiatedPower.Minimum)                                                                             | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPower.MinimumOfMaximumOverTime)                                           | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPower.MinimumOfMinimumOverTime)                                           | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentRadiatedPower.Time)                                                                                   | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentRadiatedPower.DisplayTime)                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentRadiatedPower.DisplayOption)                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentRadiatedPower.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentRadiatedPower.By)                                                                                       | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentRadiatedPower.ItemType)                                                                           | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentRadiatedPower.CalculateTimeHistory)                                                   | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentRadiatedPower.Suppressed)                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentRadiatedPower.Children)                                                                           | Gets the list of children.                                             |
| [`Comments`](#EquivalentRadiatedPower.Comments)                                                                           | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentRadiatedPower.Figures)                                                                             | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentRadiatedPower.Images)                                                                               | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentRadiatedPower.Properties)                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentRadiatedPower.VisibleProperties)                                                         | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import EquivalentRadiatedPower
```

## Property detail

### *property* EquivalentRadiatedPower.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPower.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EquivalentRadiatedPower.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPower.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
