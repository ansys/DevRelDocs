# ShearGasketPressure

### *class* ShearGasketPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ShearGasketPressure.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#ShearGasketPressure.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#ShearGasketPressure.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ShearGasketPressure.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ShearGasketPressure.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ShearGasketPressure.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ShearGasketPressure.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ShearGasketPressure.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ShearGasketPressure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ShearGasketPressure.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ShearGasketPressure.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ShearGasketPressure.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ShearGasketPressure.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ShearGasketPressure.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ShearGasketPressure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ShearGasketPressure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ShearGasketPressure.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ShearGasketPressure.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ShearGasketPressure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ShearGasketPressure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ShearGasketPressure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ShearGasketPressure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ShearGasketPressure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ShearGasketPressure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ShearGasketPressure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ShearGasketPressure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ShearOrientation`](#ShearGasketPressure.ShearOrientation)                                                               | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`GasketResultType`](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType)                      | Gets or sets the GasketResultType.                                     |
| [`PlotData`](#ShearGasketPressure.PlotData)                                                                               | Gets the result table.                                                 |
| [`Location`](#ShearGasketPressure.Location)                                                                               | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ShearGasketPressure.TimeForMinimumOfMinimumValues)                                     | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ShearGasketPressure.TimeForMinimumOfMaximumValues)                                     | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ShearGasketPressure.LoadStepForMinimumOfMinimumValues)                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ShearGasketPressure.LoadStepForMinimumOfMaximumValues)                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ShearGasketPressure.TimeForMaximumOfMinimumValues)                                     | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ShearGasketPressure.TimeForMaximumOfMaximumValues)                                     | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ShearGasketPressure.LoadStepForMaximumOfMinimumValues)                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ShearGasketPressure.LoadStepForMaximumOfMaximumValues)                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ShearGasketPressure.IsSolved)                                                                               | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ShearGasketPressure.ScopingMethod)                                                                     | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ShearGasketPressure.SetNumber)                                                                             | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ShearGasketPressure.CombinationNumber)                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ShearGasketPressure.SolutionCombinationDriver)                                             | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ShearGasketPressure.WaterfallPanelShowTextOnMosaic)                                   | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ShearGasketPressure.CrackFrontNumber)                                                               | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ShearGasketPressure.GlobalIDs)                                                                             | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ShearGasketPressure.Identifier)                                                                           | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ShearGasketPressure.IterationNumber)                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#ShearGasketPressure.LoadStep)                                                                               | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ShearGasketPressure.MaximumOccursOn)                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ShearGasketPressure.MinimumOccursOn)                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ShearGasketPressure.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ShearGasketPressure.SolverComponentIDs)                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ShearGasketPressure.Substep)                                                                                 | Gets the Substep.                                                      |
| [`Average`](#ShearGasketPressure.Average)                                                                                 | Gets the Average.                                                      |
| [`Maximum`](#ShearGasketPressure.Maximum)                                                                                 | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ShearGasketPressure.MaximumOfMaximumOverTime)                                               | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ShearGasketPressure.MaximumOfMinimumOverTime)                                               | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ShearGasketPressure.Minimum)                                                                                 | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ShearGasketPressure.MinimumOfMaximumOverTime)                                               | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ShearGasketPressure.MinimumOfMinimumOverTime)                                               | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ShearGasketPressure.Time)                                                                                       | Gets the Time.                                                         |
| [`DisplayTime`](#ShearGasketPressure.DisplayTime)                                                                         | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ShearGasketPressure.DisplayOption)                                                                     | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ShearGasketPressure.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ShearGasketPressure.By)                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#ShearGasketPressure.ItemType)                                                                               | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ShearGasketPressure.CalculateTimeHistory)                                                       | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ShearGasketPressure.Suppressed)                                                                           | Gets or sets the Suppressed.                                           |
| [`Children`](#ShearGasketPressure.Children)                                                                               | Gets the list of children.                                             |
| [`Comments`](#ShearGasketPressure.Comments)                                                                               | Gets the list of associated comments.                                  |
| [`Figures`](#ShearGasketPressure.Figures)                                                                                 | Gets the list of associated figures.                                   |
| [`Images`](#ShearGasketPressure.Images)                                                                                   | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ShearGasketPressure.Properties)                                                                           | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ShearGasketPressure.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.GasketResults import ShearGasketPressure
```

## Property detail

### *property* ShearGasketPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ShearGasketPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ShearGasketPressure.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ShearGasketPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
