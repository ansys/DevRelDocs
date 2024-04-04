# MagneticPotential

### *class* MagneticPotential

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MagneticPotential.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MagneticPotential.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MagneticPotential.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MagneticPotential.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MagneticPotential.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MagneticPotential.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MagneticPotential.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MagneticPotential.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MagneticPotential.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MagneticPotential.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MagneticPotential.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MagneticPotential.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MagneticPotential.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MagneticPotential.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MagneticPotential.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MagneticPotential.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MagneticPotential.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MagneticPotential.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MagneticPotential.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MagneticPotential.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MagneticPotential.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MagneticPotential.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MagneticPotential.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MagneticPotential.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MagneticPotential.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MagneticPotential.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#MagneticPotential.PlotData)                                                                              | Gets the result table.                                                 |
| [`Location`](#MagneticPotential.Location)                                                                              | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MagneticPotential.TimeForMinimumOfMinimumValues)                                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MagneticPotential.TimeForMinimumOfMaximumValues)                                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MagneticPotential.LoadStepForMinimumOfMinimumValues)                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MagneticPotential.LoadStepForMinimumOfMaximumValues)                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MagneticPotential.TimeForMaximumOfMinimumValues)                                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MagneticPotential.TimeForMaximumOfMaximumValues)                                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MagneticPotential.LoadStepForMaximumOfMinimumValues)                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MagneticPotential.LoadStepForMaximumOfMaximumValues)                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MagneticPotential.IsSolved)                                                                              | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MagneticPotential.ScopingMethod)                                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MagneticPotential.SetNumber)                                                                            | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MagneticPotential.CombinationNumber)                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MagneticPotential.SolutionCombinationDriver)                                            | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MagneticPotential.WaterfallPanelShowTextOnMosaic)                                  | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MagneticPotential.CrackFrontNumber)                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MagneticPotential.GlobalIDs)                                                                            | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MagneticPotential.Identifier)                                                                          | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MagneticPotential.IterationNumber)                                                                | Gets the IterationNumber.                                              |
| [`LoadStep`](#MagneticPotential.LoadStep)                                                                              | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MagneticPotential.MaximumOccursOn)                                                                | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MagneticPotential.MinimumOccursOn)                                                                | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MagneticPotential.LoadStepNumber)                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MagneticPotential.SolverComponentIDs)                                                          | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MagneticPotential.Substep)                                                                                | Gets the Substep.                                                      |
| [`Average`](#MagneticPotential.Average)                                                                                | Gets the Average.                                                      |
| [`Maximum`](#MagneticPotential.Maximum)                                                                                | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MagneticPotential.MaximumOfMaximumOverTime)                                              | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MagneticPotential.MaximumOfMinimumOverTime)                                              | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MagneticPotential.Minimum)                                                                                | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MagneticPotential.MinimumOfMaximumOverTime)                                              | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MagneticPotential.MinimumOfMinimumOverTime)                                              | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MagneticPotential.Time)                                                                                      | Gets the Time.                                                         |
| [`DisplayTime`](#MagneticPotential.DisplayTime)                                                                        | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MagneticPotential.DisplayOption)                                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MagneticPotential.DpfEvaluation)                                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MagneticPotential.By)                                                                                          | Gets or sets the By.                                                   |
| [`ItemType`](#MagneticPotential.ItemType)                                                                              | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MagneticPotential.CalculateTimeHistory)                                                      | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MagneticPotential.Suppressed)                                                                          | Gets or sets the Suppressed.                                           |
| [`Children`](#MagneticPotential.Children)                                                                              | Gets the list of children.                                             |
| [`Comments`](#MagneticPotential.Comments)                                                                              | Gets the list of associated comments.                                  |
| [`Figures`](#MagneticPotential.Figures)                                                                                | Gets the list of associated figures.                                   |
| [`Images`](#MagneticPotential.Images)                                                                                  | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MagneticPotential.Properties)                                                                          | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MagneticPotential.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import MagneticPotential
```

## Property detail

### *property* MagneticPotential.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MagneticPotential.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MagneticPotential.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MagneticPotential.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MagneticPotential.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MagneticPotential.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
