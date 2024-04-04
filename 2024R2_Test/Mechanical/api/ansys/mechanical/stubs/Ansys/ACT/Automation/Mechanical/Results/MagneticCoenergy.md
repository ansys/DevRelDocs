# MagneticCoenergy

### *class* MagneticCoenergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MagneticCoenergy.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MagneticCoenergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MagneticCoenergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MagneticCoenergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MagneticCoenergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MagneticCoenergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MagneticCoenergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MagneticCoenergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MagneticCoenergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MagneticCoenergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MagneticCoenergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MagneticCoenergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MagneticCoenergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MagneticCoenergy.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MagneticCoenergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MagneticCoenergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MagneticCoenergy.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MagneticCoenergy.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MagneticCoenergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MagneticCoenergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MagneticCoenergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MagneticCoenergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MagneticCoenergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MagneticCoenergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MagneticCoenergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MagneticCoenergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#MagneticCoenergy.PlotData)                                                                               | Gets the result table.                                                 |
| [`Location`](#MagneticCoenergy.Location)                                                                               | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MagneticCoenergy.TimeForMinimumOfMinimumValues)                                     | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MagneticCoenergy.TimeForMinimumOfMaximumValues)                                     | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MagneticCoenergy.LoadStepForMinimumOfMinimumValues)                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MagneticCoenergy.LoadStepForMinimumOfMaximumValues)                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MagneticCoenergy.TimeForMaximumOfMinimumValues)                                     | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MagneticCoenergy.TimeForMaximumOfMaximumValues)                                     | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MagneticCoenergy.LoadStepForMaximumOfMinimumValues)                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MagneticCoenergy.LoadStepForMaximumOfMaximumValues)                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MagneticCoenergy.IsSolved)                                                                               | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MagneticCoenergy.ScopingMethod)                                                                     | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MagneticCoenergy.SetNumber)                                                                             | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MagneticCoenergy.CombinationNumber)                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MagneticCoenergy.SolutionCombinationDriver)                                             | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MagneticCoenergy.WaterfallPanelShowTextOnMosaic)                                   | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MagneticCoenergy.CrackFrontNumber)                                                               | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MagneticCoenergy.GlobalIDs)                                                                             | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MagneticCoenergy.Identifier)                                                                           | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MagneticCoenergy.IterationNumber)                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#MagneticCoenergy.LoadStep)                                                                               | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MagneticCoenergy.MaximumOccursOn)                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MagneticCoenergy.MinimumOccursOn)                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MagneticCoenergy.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MagneticCoenergy.SolverComponentIDs)                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MagneticCoenergy.Substep)                                                                                 | Gets the Substep.                                                      |
| [`Average`](#MagneticCoenergy.Average)                                                                                 | Gets the Average.                                                      |
| [`Maximum`](#MagneticCoenergy.Maximum)                                                                                 | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MagneticCoenergy.MaximumOfMaximumOverTime)                                               | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MagneticCoenergy.MaximumOfMinimumOverTime)                                               | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MagneticCoenergy.Minimum)                                                                                 | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MagneticCoenergy.MinimumOfMaximumOverTime)                                               | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MagneticCoenergy.MinimumOfMinimumOverTime)                                               | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MagneticCoenergy.Time)                                                                                       | Gets the Time.                                                         |
| [`DisplayTime`](#MagneticCoenergy.DisplayTime)                                                                         | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MagneticCoenergy.DisplayOption)                                                                     | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MagneticCoenergy.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MagneticCoenergy.By)                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#MagneticCoenergy.ItemType)                                                                               | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MagneticCoenergy.CalculateTimeHistory)                                                       | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MagneticCoenergy.Suppressed)                                                                           | Gets or sets the Suppressed.                                           |
| [`Children`](#MagneticCoenergy.Children)                                                                               | Gets the list of children.                                             |
| [`Comments`](#MagneticCoenergy.Comments)                                                                               | Gets the list of associated comments.                                  |
| [`Figures`](#MagneticCoenergy.Figures)                                                                                 | Gets the list of associated figures.                                   |
| [`Images`](#MagneticCoenergy.Images)                                                                                   | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MagneticCoenergy.Properties)                                                                           | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MagneticCoenergy.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results import MagneticCoenergy
```

## Property detail

### *property* MagneticCoenergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MagneticCoenergy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MagneticCoenergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MagneticCoenergy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
