# EquivalentRadiatedPowerWaterfallDiagram

### *class* EquivalentRadiatedPowerWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentRadiatedPowerWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#EquivalentRadiatedPowerWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#EquivalentRadiatedPowerWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentRadiatedPowerWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentRadiatedPowerWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentRadiatedPowerWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPowerWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPowerWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPowerWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentRadiatedPowerWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentRadiatedPowerWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentRadiatedPowerWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPowerWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentRadiatedPowerWaterfallDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentRadiatedPowerWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentRadiatedPowerWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentRadiatedPowerWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentRadiatedPowerWaterfallDiagram.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentRadiatedPowerWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentRadiatedPowerWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPowerWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentRadiatedPowerWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentRadiatedPowerWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentRadiatedPowerWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentRadiatedPowerWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentRadiatedPowerWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`PanelsToDisplay`](#EquivalentRadiatedPowerWaterfallDiagram.PanelsToDisplay)                                             | Gets or sets the PanelsToDisplay.                                      |
| [`DisplayPanel`](#EquivalentRadiatedPowerWaterfallDiagram.DisplayPanel)                                                   | Gets or sets the DisplayPanel.                                         |
| [`PanelContribution`](#EquivalentRadiatedPowerWaterfallDiagram.PanelContribution)                                         | Gets or sets the PanelContribution.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#EquivalentRadiatedPowerWaterfallDiagram.PlotData)                                                           | Gets the result table.                                                 |
| [`Location`](#EquivalentRadiatedPowerWaterfallDiagram.Location)                                                           | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMinimumValues)                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMaximumValues)                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMinimumValues)         | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMaximumValues)         | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMinimumValues)                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMaximumValues)                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMinimumValues)         | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMaximumValues)         | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentRadiatedPowerWaterfallDiagram.IsSolved)                                                           | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentRadiatedPowerWaterfallDiagram.ScopingMethod)                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentRadiatedPowerWaterfallDiagram.SetNumber)                                                         | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentRadiatedPowerWaterfallDiagram.CombinationNumber)                                         | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPowerWaterfallDiagram.SolutionCombinationDriver)                         | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallPanelShowTextOnMosaic)               | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentRadiatedPowerWaterfallDiagram.CrackFrontNumber)                                           | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentRadiatedPowerWaterfallDiagram.GlobalIDs)                                                         | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentRadiatedPowerWaterfallDiagram.Identifier)                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentRadiatedPowerWaterfallDiagram.IterationNumber)                                             | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStep)                                                           | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentRadiatedPowerWaterfallDiagram.MaximumOccursOn)                                             | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentRadiatedPowerWaterfallDiagram.MinimumOccursOn)                                             | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepNumber)                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentRadiatedPowerWaterfallDiagram.SolverComponentIDs)                                       | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentRadiatedPowerWaterfallDiagram.Substep)                                                             | Gets the Substep.                                                      |
| [`Average`](#EquivalentRadiatedPowerWaterfallDiagram.Average)                                                             | Gets the Average.                                                      |
| [`Maximum`](#EquivalentRadiatedPowerWaterfallDiagram.Maximum)                                                             | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMaximumOverTime)                           | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMinimumOverTime)                           | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentRadiatedPowerWaterfallDiagram.Minimum)                                                             | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMaximumOverTime)                           | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMinimumOverTime)                           | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentRadiatedPowerWaterfallDiagram.Time)                                                                   | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentRadiatedPowerWaterfallDiagram.DisplayTime)                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentRadiatedPowerWaterfallDiagram.DisplayOption)                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentRadiatedPowerWaterfallDiagram.DpfEvaluation)                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentRadiatedPowerWaterfallDiagram.By)                                                                       | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentRadiatedPowerWaterfallDiagram.ItemType)                                                           | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentRadiatedPowerWaterfallDiagram.CalculateTimeHistory)                                   | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentRadiatedPowerWaterfallDiagram.Suppressed)                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentRadiatedPowerWaterfallDiagram.Children)                                                           | Gets the list of children.                                             |
| [`Comments`](#EquivalentRadiatedPowerWaterfallDiagram.Comments)                                                           | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentRadiatedPowerWaterfallDiagram.Figures)                                                             | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentRadiatedPowerWaterfallDiagram.Images)                                                               | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentRadiatedPowerWaterfallDiagram.Properties)                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentRadiatedPowerWaterfallDiagram.VisibleProperties)                                         | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import EquivalentRadiatedPowerWaterfallDiagram
```

## Property detail

### *property* EquivalentRadiatedPowerWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.PanelsToDisplay *: [Ansys.Mechanical.DataModel.Enums.PanelsToDisplayType](../../../../../Mechanical/DataModel/Enums/PanelsToDisplayType.md#PanelsToDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.DisplayPanel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.PanelContribution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentRadiatedPowerWaterfallDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EquivalentRadiatedPowerWaterfallDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EquivalentRadiatedPowerWaterfallDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
