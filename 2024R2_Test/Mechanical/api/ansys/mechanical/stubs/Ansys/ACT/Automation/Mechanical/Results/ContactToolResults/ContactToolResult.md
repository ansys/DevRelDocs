# ContactToolResult

### *class* ContactToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactToolResult.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#ContactToolResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#ContactToolResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ContactToolResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ContactToolResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ContactToolResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ContactToolResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ContactToolResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ContactToolResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ContactToolResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ContactToolResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ContactToolResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ContactToolResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactToolResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactToolResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactToolResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactToolResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactToolResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactToolResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactToolResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactToolResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactToolResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactToolResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactToolResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ContactToolResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactToolResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#ContactToolResult.PlotData)                                                                                 | Gets the result table.                                                 |
| [`Location`](#ContactToolResult.Location)                                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ContactToolResult.TimeForMinimumOfMinimumValues)                                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ContactToolResult.TimeForMinimumOfMaximumValues)                                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ContactToolResult.LoadStepForMinimumOfMinimumValues)                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ContactToolResult.LoadStepForMinimumOfMaximumValues)                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ContactToolResult.TimeForMaximumOfMinimumValues)                                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ContactToolResult.TimeForMaximumOfMaximumValues)                                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ContactToolResult.LoadStepForMaximumOfMinimumValues)                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ContactToolResult.LoadStepForMaximumOfMaximumValues)                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ContactToolResult.IsSolved)                                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ContactToolResult.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ContactToolResult.SetNumber)                                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ContactToolResult.CombinationNumber)                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ContactToolResult.SolutionCombinationDriver)                                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ContactToolResult.WaterfallPanelShowTextOnMosaic)                                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ContactToolResult.CrackFrontNumber)                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ContactToolResult.GlobalIDs)                                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ContactToolResult.Identifier)                                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ContactToolResult.IterationNumber)                                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#ContactToolResult.LoadStep)                                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ContactToolResult.MaximumOccursOn)                                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ContactToolResult.MinimumOccursOn)                                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ContactToolResult.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ContactToolResult.SolverComponentIDs)                                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ContactToolResult.Substep)                                                                                   | Gets the Substep.                                                      |
| [`Average`](#ContactToolResult.Average)                                                                                   | Gets the Average.                                                      |
| [`Maximum`](#ContactToolResult.Maximum)                                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ContactToolResult.MaximumOfMaximumOverTime)                                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ContactToolResult.MaximumOfMinimumOverTime)                                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ContactToolResult.Minimum)                                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ContactToolResult.MinimumOfMaximumOverTime)                                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ContactToolResult.MinimumOfMinimumOverTime)                                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ContactToolResult.Time)                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#ContactToolResult.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ContactToolResult.DisplayOption)                                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ContactToolResult.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ContactToolResult.By)                                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#ContactToolResult.ItemType)                                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ContactToolResult.CalculateTimeHistory)                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ContactToolResult.Suppressed)                                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#ContactToolResult.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#ContactToolResult.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#ContactToolResult.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#ContactToolResult.Images)                                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ContactToolResult.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ContactToolResult.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactToolResult
```

## Property detail

### *property* ContactToolResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactToolResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactToolResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### ContactToolResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### ContactToolResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactToolResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
