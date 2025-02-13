# VectorHeatFlux

### *class* VectorHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorHeatFlux.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#VectorHeatFlux.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#VectorHeatFlux.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#VectorHeatFlux.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#VectorHeatFlux.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#VectorHeatFlux.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#VectorHeatFlux.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#VectorHeatFlux.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#VectorHeatFlux.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#VectorHeatFlux.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#VectorHeatFlux.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#VectorHeatFlux.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#VectorHeatFlux.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#VectorHeatFlux.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VectorHeatFlux.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VectorHeatFlux.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VectorHeatFlux.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#VectorHeatFlux.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#VectorHeatFlux.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VectorHeatFlux.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VectorHeatFlux.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VectorHeatFlux.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VectorHeatFlux.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VectorHeatFlux.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#VectorHeatFlux.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VectorHeatFlux.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#VectorHeatFlux.PlotData)                                                                                    | Gets the result table.                                                 |
| [`Location`](#VectorHeatFlux.Location)                                                                                    | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#VectorHeatFlux.TimeForMinimumOfMinimumValues)                                          | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#VectorHeatFlux.TimeForMinimumOfMaximumValues)                                          | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#VectorHeatFlux.LoadStepForMinimumOfMinimumValues)                                  | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#VectorHeatFlux.LoadStepForMinimumOfMaximumValues)                                  | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#VectorHeatFlux.TimeForMaximumOfMinimumValues)                                          | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#VectorHeatFlux.TimeForMaximumOfMaximumValues)                                          | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#VectorHeatFlux.LoadStepForMaximumOfMinimumValues)                                  | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#VectorHeatFlux.LoadStepForMaximumOfMaximumValues)                                  | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#VectorHeatFlux.IsSolved)                                                                                    | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#VectorHeatFlux.ScopingMethod)                                                                          | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#VectorHeatFlux.SetNumber)                                                                                  | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#VectorHeatFlux.CombinationNumber)                                                                  | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#VectorHeatFlux.SolutionCombinationDriver)                                                  | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#VectorHeatFlux.WaterfallPanelShowTextOnMosaic)                                        | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#VectorHeatFlux.CrackFrontNumber)                                                                    | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#VectorHeatFlux.GlobalIDs)                                                                                  | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#VectorHeatFlux.Identifier)                                                                                | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#VectorHeatFlux.IterationNumber)                                                                      | Gets the IterationNumber.                                              |
| [`LoadStep`](#VectorHeatFlux.LoadStep)                                                                                    | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#VectorHeatFlux.MaximumOccursOn)                                                                      | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#VectorHeatFlux.MinimumOccursOn)                                                                      | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#VectorHeatFlux.LoadStepNumber)                                                                        | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#VectorHeatFlux.SolverComponentIDs)                                                                | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#VectorHeatFlux.Substep)                                                                                      | Gets the Substep.                                                      |
| [`Average`](#VectorHeatFlux.Average)                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#VectorHeatFlux.Maximum)                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#VectorHeatFlux.MaximumOfMaximumOverTime)                                                    | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#VectorHeatFlux.MaximumOfMinimumOverTime)                                                    | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#VectorHeatFlux.Minimum)                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#VectorHeatFlux.MinimumOfMaximumOverTime)                                                    | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#VectorHeatFlux.MinimumOfMinimumOverTime)                                                    | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#VectorHeatFlux.Time)                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#VectorHeatFlux.DisplayTime)                                                                              | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#VectorHeatFlux.DisplayOption)                                                                          | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#VectorHeatFlux.DpfEvaluation)                                                                          | Gets or sets the DpfEvaluation.                                        |
| [`By`](#VectorHeatFlux.By)                                                                                                | Gets or sets the By.                                                   |
| [`ItemType`](#VectorHeatFlux.ItemType)                                                                                    | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#VectorHeatFlux.CalculateTimeHistory)                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#VectorHeatFlux.Suppressed)                                                                                | Gets or sets the Suppressed.                                           |
| [`Children`](#VectorHeatFlux.Children)                                                                                    | Gets the list of children.                                             |
| [`Comments`](#VectorHeatFlux.Comments)                                                                                    | Gets the list of associated comments.                                  |
| [`Figures`](#VectorHeatFlux.Figures)                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#VectorHeatFlux.Images)                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#VectorHeatFlux.Properties)                                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#VectorHeatFlux.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import VectorHeatFlux
```

## Property detail

### *property* VectorHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* VectorHeatFlux.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### VectorHeatFlux.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### VectorHeatFlux.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
