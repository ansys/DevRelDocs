# EquivalentRadiatedPowerLevel

### *class* EquivalentRadiatedPowerLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentRadiatedPowerLevel.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToXMLFile`](#EquivalentRadiatedPowerLevel.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                   |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToWAVFile`](#EquivalentRadiatedPowerLevel.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#EquivalentRadiatedPowerLevel.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#EquivalentRadiatedPowerLevel.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentRadiatedPowerLevel.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentRadiatedPowerLevel.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentRadiatedPowerLevel.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPowerLevel.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPowerLevel.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPowerLevel.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentRadiatedPowerLevel.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentRadiatedPowerLevel.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentRadiatedPowerLevel.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPowerLevel.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentRadiatedPowerLevel.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentRadiatedPowerLevel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentRadiatedPowerLevel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentRadiatedPowerLevel.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentRadiatedPowerLevel.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentRadiatedPowerLevel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentRadiatedPowerLevel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPowerLevel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentRadiatedPowerLevel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentRadiatedPowerLevel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentRadiatedPowerLevel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentRadiatedPowerLevel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentRadiatedPowerLevel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`DBWeighting`](#EquivalentRadiatedPowerLevel.DBWeighting)                                                                | Gets or sets the DBWeighting.                                          |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#EquivalentRadiatedPowerLevel.MaximumFrequency)                                                      | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#EquivalentRadiatedPowerLevel.MinimumFrequency)                                                      | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#EquivalentRadiatedPowerLevel.FrequencyRange)                                                          | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#EquivalentRadiatedPowerLevel.PlotData)                                                                      | Gets the result table.                                                 |
| [`Location`](#EquivalentRadiatedPowerLevel.Location)                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevel.TimeForMinimumOfMinimumValues)                            | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevel.TimeForMinimumOfMaximumValues)                            | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMinimumValues)                    | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMaximumValues)                    | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevel.TimeForMaximumOfMinimumValues)                            | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevel.TimeForMaximumOfMaximumValues)                            | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMinimumValues)                    | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMaximumValues)                    | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentRadiatedPowerLevel.IsSolved)                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentRadiatedPowerLevel.ScopingMethod)                                                            | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentRadiatedPowerLevel.SetNumber)                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentRadiatedPowerLevel.CombinationNumber)                                                    | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPowerLevel.SolutionCombinationDriver)                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentRadiatedPowerLevel.WaterfallPanelShowTextOnMosaic)                          | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentRadiatedPowerLevel.CrackFrontNumber)                                                      | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentRadiatedPowerLevel.GlobalIDs)                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentRadiatedPowerLevel.Identifier)                                                                  | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentRadiatedPowerLevel.IterationNumber)                                                        | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentRadiatedPowerLevel.LoadStep)                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentRadiatedPowerLevel.MaximumOccursOn)                                                        | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentRadiatedPowerLevel.MinimumOccursOn)                                                        | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentRadiatedPowerLevel.LoadStepNumber)                                                          | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentRadiatedPowerLevel.SolverComponentIDs)                                                  | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentRadiatedPowerLevel.Substep)                                                                        | Gets the Substep.                                                      |
| [`Average`](#EquivalentRadiatedPowerLevel.Average)                                                                        | Gets the Average.                                                      |
| [`Maximum`](#EquivalentRadiatedPowerLevel.Maximum)                                                                        | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPowerLevel.MaximumOfMaximumOverTime)                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPowerLevel.MaximumOfMinimumOverTime)                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentRadiatedPowerLevel.Minimum)                                                                        | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPowerLevel.MinimumOfMaximumOverTime)                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPowerLevel.MinimumOfMinimumOverTime)                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentRadiatedPowerLevel.Time)                                                                              | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentRadiatedPowerLevel.DisplayTime)                                                                | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentRadiatedPowerLevel.DisplayOption)                                                            | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentRadiatedPowerLevel.DpfEvaluation)                                                            | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentRadiatedPowerLevel.By)                                                                                  | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentRadiatedPowerLevel.ItemType)                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentRadiatedPowerLevel.CalculateTimeHistory)                                              | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentRadiatedPowerLevel.Suppressed)                                                                  | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentRadiatedPowerLevel.Children)                                                                      | Gets the list of children.                                             |
| [`Comments`](#EquivalentRadiatedPowerLevel.Comments)                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentRadiatedPowerLevel.Figures)                                                                        | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentRadiatedPowerLevel.Images)                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentRadiatedPowerLevel.Properties)                                                                  | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentRadiatedPowerLevel.VisibleProperties)                                                    | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import EquivalentRadiatedPowerLevel
```

## Property detail

### *property* EquivalentRadiatedPowerLevel.DBWeighting *: [Ansys.Mechanical.DataModel.Enums.DBWeightingType](../../../../../Mechanical/DataModel/Enums/DBWeightingType.md#DBWeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DBWeighting.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EquivalentRadiatedPowerLevel.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
