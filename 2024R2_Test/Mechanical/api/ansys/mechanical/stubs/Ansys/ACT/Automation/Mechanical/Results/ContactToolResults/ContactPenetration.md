# ContactPenetration

### *class* ContactPenetration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactPenetration.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#ContactPenetration.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#ContactPenetration.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ContactPenetration.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ContactPenetration.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ContactPenetration.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ContactPenetration.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ContactPenetration.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ContactPenetration.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ContactPenetration.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ContactPenetration.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ContactPenetration.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ContactPenetration.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactPenetration.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactPenetration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactPenetration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactPenetration.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactPenetration.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactPenetration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactPenetration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactPenetration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactPenetration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactPenetration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactPenetration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ContactPenetration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactPenetration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#ContactPenetration.PlotData)                                                                                | Gets the result table.                                                 |
| [`Location`](#ContactPenetration.Location)                                                                                | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ContactPenetration.TimeForMinimumOfMinimumValues)                                      | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ContactPenetration.TimeForMinimumOfMaximumValues)                                      | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ContactPenetration.LoadStepForMinimumOfMinimumValues)                              | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ContactPenetration.LoadStepForMinimumOfMaximumValues)                              | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ContactPenetration.TimeForMaximumOfMinimumValues)                                      | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ContactPenetration.TimeForMaximumOfMaximumValues)                                      | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ContactPenetration.LoadStepForMaximumOfMinimumValues)                              | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ContactPenetration.LoadStepForMaximumOfMaximumValues)                              | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ContactPenetration.IsSolved)                                                                                | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ContactPenetration.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ContactPenetration.SetNumber)                                                                              | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ContactPenetration.CombinationNumber)                                                              | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ContactPenetration.SolutionCombinationDriver)                                              | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ContactPenetration.WaterfallPanelShowTextOnMosaic)                                    | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ContactPenetration.CrackFrontNumber)                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ContactPenetration.GlobalIDs)                                                                              | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ContactPenetration.Identifier)                                                                            | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ContactPenetration.IterationNumber)                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#ContactPenetration.LoadStep)                                                                                | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ContactPenetration.MaximumOccursOn)                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ContactPenetration.MinimumOccursOn)                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ContactPenetration.LoadStepNumber)                                                                    | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ContactPenetration.SolverComponentIDs)                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ContactPenetration.Substep)                                                                                  | Gets the Substep.                                                      |
| [`Average`](#ContactPenetration.Average)                                                                                  | Gets the Average.                                                      |
| [`Maximum`](#ContactPenetration.Maximum)                                                                                  | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ContactPenetration.MaximumOfMaximumOverTime)                                                | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ContactPenetration.MaximumOfMinimumOverTime)                                                | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ContactPenetration.Minimum)                                                                                  | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ContactPenetration.MinimumOfMaximumOverTime)                                                | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ContactPenetration.MinimumOfMinimumOverTime)                                                | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ContactPenetration.Time)                                                                                        | Gets the Time.                                                         |
| [`DisplayTime`](#ContactPenetration.DisplayTime)                                                                          | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ContactPenetration.DisplayOption)                                                                      | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ContactPenetration.DpfEvaluation)                                                                      | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ContactPenetration.By)                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#ContactPenetration.ItemType)                                                                                | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ContactPenetration.CalculateTimeHistory)                                                        | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ContactPenetration.Suppressed)                                                                            | Gets or sets the Suppressed.                                           |
| [`Children`](#ContactPenetration.Children)                                                                                | Gets the list of children.                                             |
| [`Comments`](#ContactPenetration.Comments)                                                                                | Gets the list of associated comments.                                  |
| [`Figures`](#ContactPenetration.Figures)                                                                                  | Gets the list of associated figures.                                   |
| [`Images`](#ContactPenetration.Images)                                                                                    | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ContactPenetration.Properties)                                                                            | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ContactPenetration.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactPenetration
```

## Property detail

### *property* ContactPenetration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactPenetration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ContactPenetration.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### ContactPenetration.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### ContactPenetration.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactPenetration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
