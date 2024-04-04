# EquivalentRadiatedPowerLevelWaterfallDiagram

### *class* EquivalentRadiatedPowerLevelWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentRadiatedPowerLevelWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToXMLFile`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                   |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToWAVFile`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#EquivalentRadiatedPowerLevelWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentRadiatedPowerLevelWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`DBWeighting`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DBWeighting)                                                | Gets or sets the DBWeighting.                                          |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`PanelsToDisplay`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PanelsToDisplay)                                        | Gets or sets the PanelsToDisplay.                                      |
| [`DisplayPanel`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayPanel)                                              | Gets or sets the DisplayPanel.                                         |
| [`PanelContribution`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PanelContribution)                                    | Gets or sets the PanelContribution.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PlotData)                                                      | Gets the result table.                                                 |
| [`Location`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Location)                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues)            | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues)            | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues)    | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues)    | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues)            | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues)            | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues)    | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues)    | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentRadiatedPowerLevelWaterfallDiagram.IsSolved)                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ScopingMethod)                                            | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.SetNumber)                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CombinationNumber)                                    | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPowerLevelWaterfallDiagram.SolutionCombinationDriver)                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallPanelShowTextOnMosaic)          | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CrackFrontNumber)                                      | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GlobalIDs)                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Identifier)                                                  | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.IterationNumber)                                        | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStep)                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOccursOn)                                        | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOccursOn)                                        | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepNumber)                                          | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentRadiatedPowerLevelWaterfallDiagram.SolverComponentIDs)                                  | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Substep)                                                        | Gets the Substep.                                                      |
| [`Average`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Average)                                                        | Gets the Average.                                                      |
| [`Maximum`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Maximum)                                                        | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime)                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime)                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Minimum)                                                        | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime)                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime)                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Time)                                                              | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayTime)                                                | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayOption)                                            | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DpfEvaluation)                                            | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentRadiatedPowerLevelWaterfallDiagram.By)                                                                  | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ItemType)                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CalculateTimeHistory)                              | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Suppressed)                                                  | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Children)                                                      | Gets the list of children.                                             |
| [`Comments`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Comments)                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Figures)                                                        | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Images)                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Properties)                                                  | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentRadiatedPowerLevelWaterfallDiagram.VisibleProperties)                                    | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import EquivalentRadiatedPowerLevelWaterfallDiagram
```

## Property detail

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DBWeighting *: [Ansys.Mechanical.DataModel.Enums.DBWeightingType](../../../../../Mechanical/DataModel/Enums/DBWeightingType.md#DBWeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DBWeighting.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.PanelsToDisplay *: [Ansys.Mechanical.DataModel.Enums.PanelsToDisplayType](../../../../../Mechanical/DataModel/Enums/PanelsToDisplayType.md#PanelsToDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayPanel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.PanelContribution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerLevelWaterfallDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
