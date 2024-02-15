# VelocityWaterfallDiagram

### *class* VelocityWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VelocityWaterfallDiagram.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#VelocityWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#VelocityWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#VelocityWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#VelocityWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#VelocityWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#VelocityWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#VelocityWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#VelocityWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#VelocityWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#VelocityWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#VelocityWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#VelocityWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#VelocityWaterfallDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VelocityWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VelocityWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VelocityWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#VelocityWaterfallDiagram.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#VelocityWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VelocityWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VelocityWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VelocityWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VelocityWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VelocityWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#VelocityWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VelocityWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`SpatialResolution`](#VelocityWaterfallDiagram.SpatialResolution)                                                        | Gets or sets the SpatialResolution.                                    |
| [`NormalOrientation`](#VelocityWaterfallDiagram.NormalOrientation)                                                        | Gets or sets the NormalOrientation.                                    |
| [`PanelsToDisplay`](#VelocityWaterfallDiagram.PanelsToDisplay)                                                            | Gets or sets the PanelsToDisplay.                                      |
| [`DisplayPanel`](#VelocityWaterfallDiagram.DisplayPanel)                                                                  | Gets or sets the DisplayPanel.                                         |
| [`PanelContribution`](#VelocityWaterfallDiagram.PanelContribution)                                                        | Gets or sets the PanelContribution.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#VelocityWaterfallDiagram.PlotData)                                                                          | Gets the result table.                                                 |
| [`Location`](#VelocityWaterfallDiagram.Location)                                                                          | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#VelocityWaterfallDiagram.TimeForMinimumOfMinimumValues)                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#VelocityWaterfallDiagram.TimeForMinimumOfMaximumValues)                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#VelocityWaterfallDiagram.LoadStepForMinimumOfMinimumValues)                        | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#VelocityWaterfallDiagram.LoadStepForMinimumOfMaximumValues)                        | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#VelocityWaterfallDiagram.TimeForMaximumOfMinimumValues)                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#VelocityWaterfallDiagram.TimeForMaximumOfMaximumValues)                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#VelocityWaterfallDiagram.LoadStepForMaximumOfMinimumValues)                        | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#VelocityWaterfallDiagram.LoadStepForMaximumOfMaximumValues)                        | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#VelocityWaterfallDiagram.IsSolved)                                                                          | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#VelocityWaterfallDiagram.ScopingMethod)                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#VelocityWaterfallDiagram.SetNumber)                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#VelocityWaterfallDiagram.CombinationNumber)                                                        | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#VelocityWaterfallDiagram.SolutionCombinationDriver)                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#VelocityWaterfallDiagram.WaterfallPanelShowTextOnMosaic)                              | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#VelocityWaterfallDiagram.CrackFrontNumber)                                                          | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#VelocityWaterfallDiagram.GlobalIDs)                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#VelocityWaterfallDiagram.Identifier)                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#VelocityWaterfallDiagram.IterationNumber)                                                            | Gets the IterationNumber.                                              |
| [`LoadStep`](#VelocityWaterfallDiagram.LoadStep)                                                                          | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#VelocityWaterfallDiagram.MaximumOccursOn)                                                            | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#VelocityWaterfallDiagram.MinimumOccursOn)                                                            | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#VelocityWaterfallDiagram.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#VelocityWaterfallDiagram.SolverComponentIDs)                                                      | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#VelocityWaterfallDiagram.Substep)                                                                            | Gets the Substep.                                                      |
| [`Average`](#VelocityWaterfallDiagram.Average)                                                                            | Gets the Average.                                                      |
| [`Maximum`](#VelocityWaterfallDiagram.Maximum)                                                                            | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#VelocityWaterfallDiagram.MaximumOfMaximumOverTime)                                          | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#VelocityWaterfallDiagram.MaximumOfMinimumOverTime)                                          | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#VelocityWaterfallDiagram.Minimum)                                                                            | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#VelocityWaterfallDiagram.MinimumOfMaximumOverTime)                                          | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#VelocityWaterfallDiagram.MinimumOfMinimumOverTime)                                          | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#VelocityWaterfallDiagram.Time)                                                                                  | Gets the Time.                                                         |
| [`DisplayTime`](#VelocityWaterfallDiagram.DisplayTime)                                                                    | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#VelocityWaterfallDiagram.DisplayOption)                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#VelocityWaterfallDiagram.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#VelocityWaterfallDiagram.By)                                                                                      | Gets or sets the By.                                                   |
| [`ItemType`](#VelocityWaterfallDiagram.ItemType)                                                                          | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#VelocityWaterfallDiagram.CalculateTimeHistory)                                                  | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#VelocityWaterfallDiagram.Suppressed)                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#VelocityWaterfallDiagram.Children)                                                                          | Gets the list of children.                                             |
| [`Comments`](#VelocityWaterfallDiagram.Comments)                                                                          | Gets the list of associated comments.                                  |
| [`Figures`](#VelocityWaterfallDiagram.Figures)                                                                            | Gets the list of associated figures.                                   |
| [`Images`](#VelocityWaterfallDiagram.Images)                                                                              | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#VelocityWaterfallDiagram.Properties)                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#VelocityWaterfallDiagram.VisibleProperties)                                                        | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults import VelocityWaterfallDiagram
```

## Property detail

### *property* VelocityWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.PanelsToDisplay *: [Ansys.Mechanical.DataModel.Enums.PanelsToDisplayType](../../../../../Mechanical/DataModel/Enums/PanelsToDisplayType.md#PanelsToDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.DisplayPanel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.PanelContribution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* VelocityWaterfallDiagram.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### VelocityWaterfallDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### VelocityWaterfallDiagram.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
