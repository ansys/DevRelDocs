# ContactHeatFlux

### *class* ContactHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactHeatFlux.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#ContactHeatFlux.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#ContactHeatFlux.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ContactHeatFlux.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ContactHeatFlux.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ContactHeatFlux.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ContactHeatFlux.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ContactHeatFlux.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ContactHeatFlux.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ContactHeatFlux.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ContactHeatFlux.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ContactHeatFlux.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ContactHeatFlux.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactHeatFlux.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactHeatFlux.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactHeatFlux.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactHeatFlux.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactHeatFlux.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactHeatFlux.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactHeatFlux.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactHeatFlux.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactHeatFlux.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactHeatFlux.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactHeatFlux.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ContactHeatFlux.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactHeatFlux.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#ContactHeatFlux.PlotData)                                                                                   | Gets the result table.                                                 |
| [`Location`](#ContactHeatFlux.Location)                                                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ContactHeatFlux.TimeForMinimumOfMinimumValues)                                         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ContactHeatFlux.TimeForMinimumOfMaximumValues)                                         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ContactHeatFlux.LoadStepForMinimumOfMinimumValues)                                 | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ContactHeatFlux.LoadStepForMinimumOfMaximumValues)                                 | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ContactHeatFlux.TimeForMaximumOfMinimumValues)                                         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ContactHeatFlux.TimeForMaximumOfMaximumValues)                                         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ContactHeatFlux.LoadStepForMaximumOfMinimumValues)                                 | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ContactHeatFlux.LoadStepForMaximumOfMaximumValues)                                 | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ContactHeatFlux.IsSolved)                                                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ContactHeatFlux.ScopingMethod)                                                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ContactHeatFlux.SetNumber)                                                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ContactHeatFlux.CombinationNumber)                                                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ContactHeatFlux.SolutionCombinationDriver)                                                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ContactHeatFlux.WaterfallPanelShowTextOnMosaic)                                       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ContactHeatFlux.CrackFrontNumber)                                                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ContactHeatFlux.GlobalIDs)                                                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ContactHeatFlux.Identifier)                                                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ContactHeatFlux.IterationNumber)                                                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#ContactHeatFlux.LoadStep)                                                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ContactHeatFlux.MaximumOccursOn)                                                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ContactHeatFlux.MinimumOccursOn)                                                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ContactHeatFlux.LoadStepNumber)                                                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ContactHeatFlux.SolverComponentIDs)                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ContactHeatFlux.Substep)                                                                                     | Gets the Substep.                                                      |
| [`Average`](#ContactHeatFlux.Average)                                                                                     | Gets the Average.                                                      |
| [`Maximum`](#ContactHeatFlux.Maximum)                                                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ContactHeatFlux.MaximumOfMaximumOverTime)                                                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ContactHeatFlux.MaximumOfMinimumOverTime)                                                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ContactHeatFlux.Minimum)                                                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ContactHeatFlux.MinimumOfMaximumOverTime)                                                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ContactHeatFlux.MinimumOfMinimumOverTime)                                                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ContactHeatFlux.Time)                                                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#ContactHeatFlux.DisplayTime)                                                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ContactHeatFlux.DisplayOption)                                                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ContactHeatFlux.DpfEvaluation)                                                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ContactHeatFlux.By)                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#ContactHeatFlux.ItemType)                                                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ContactHeatFlux.CalculateTimeHistory)                                                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ContactHeatFlux.Suppressed)                                                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#ContactHeatFlux.Children)                                                                                   | Gets the list of children.                                             |
| [`Comments`](#ContactHeatFlux.Comments)                                                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#ContactHeatFlux.Figures)                                                                                     | Gets the list of associated figures.                                   |
| [`Images`](#ContactHeatFlux.Images)                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ContactHeatFlux.Properties)                                                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ContactHeatFlux.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactHeatFlux
```

## Property detail

### *property* ContactHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactHeatFlux.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactHeatFlux.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactHeatFlux.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
