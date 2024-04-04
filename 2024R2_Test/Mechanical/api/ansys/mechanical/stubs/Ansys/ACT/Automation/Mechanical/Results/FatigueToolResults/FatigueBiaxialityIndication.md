# FatigueBiaxialityIndication

### *class* FatigueBiaxialityIndication

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueBiaxialityIndication.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FatigueBiaxialityIndication.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FatigueBiaxialityIndication.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FatigueBiaxialityIndication.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FatigueBiaxialityIndication.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FatigueBiaxialityIndication.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FatigueBiaxialityIndication.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FatigueBiaxialityIndication.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FatigueBiaxialityIndication.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FatigueBiaxialityIndication.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FatigueBiaxialityIndication.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FatigueBiaxialityIndication.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FatigueBiaxialityIndication.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueBiaxialityIndication.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueBiaxialityIndication.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FatigueBiaxialityIndication.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueBiaxialityIndication.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueBiaxialityIndication.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueBiaxialityIndication.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueBiaxialityIndication.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueBiaxialityIndication.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueBiaxialityIndication.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueBiaxialityIndication.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueBiaxialityIndication.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FatigueBiaxialityIndication.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueBiaxialityIndication.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#FatigueBiaxialityIndication.Method)                                                                           | Gets the Method.                                                       |
| [`DesignLife`](#FatigueBiaxialityIndication.DesignLife)                                                                   | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#FatigueBiaxialityIndication.AverageAcrossBodies)                                                 | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FatigueBiaxialityIndication.PlotData)                                                                       | Gets the result table.                                                 |
| [`Location`](#FatigueBiaxialityIndication.Location)                                                                       | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FatigueBiaxialityIndication.TimeForMinimumOfMinimumValues)                             | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueBiaxialityIndication.TimeForMinimumOfMaximumValues)                             | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueBiaxialityIndication.LoadStepForMinimumOfMinimumValues)                     | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueBiaxialityIndication.LoadStepForMinimumOfMaximumValues)                     | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FatigueBiaxialityIndication.TimeForMaximumOfMinimumValues)                             | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FatigueBiaxialityIndication.TimeForMaximumOfMaximumValues)                             | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueBiaxialityIndication.LoadStepForMaximumOfMinimumValues)                     | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueBiaxialityIndication.LoadStepForMaximumOfMaximumValues)                     | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FatigueBiaxialityIndication.IsSolved)                                                                       | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FatigueBiaxialityIndication.ScopingMethod)                                                             | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueBiaxialityIndication.SetNumber)                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FatigueBiaxialityIndication.CombinationNumber)                                                     | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FatigueBiaxialityIndication.SolutionCombinationDriver)                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FatigueBiaxialityIndication.WaterfallPanelShowTextOnMosaic)                           | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FatigueBiaxialityIndication.CrackFrontNumber)                                                       | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FatigueBiaxialityIndication.GlobalIDs)                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FatigueBiaxialityIndication.Identifier)                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FatigueBiaxialityIndication.IterationNumber)                                                         | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueBiaxialityIndication.LoadStep)                                                                       | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FatigueBiaxialityIndication.MaximumOccursOn)                                                         | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FatigueBiaxialityIndication.MinimumOccursOn)                                                         | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FatigueBiaxialityIndication.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FatigueBiaxialityIndication.SolverComponentIDs)                                                   | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueBiaxialityIndication.Substep)                                                                         | Gets the Substep.                                                      |
| [`Average`](#FatigueBiaxialityIndication.Average)                                                                         | Gets the Average.                                                      |
| [`Maximum`](#FatigueBiaxialityIndication.Maximum)                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FatigueBiaxialityIndication.MaximumOfMaximumOverTime)                                       | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueBiaxialityIndication.MaximumOfMinimumOverTime)                                       | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FatigueBiaxialityIndication.Minimum)                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FatigueBiaxialityIndication.MinimumOfMaximumOverTime)                                       | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueBiaxialityIndication.MinimumOfMinimumOverTime)                                       | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FatigueBiaxialityIndication.Time)                                                                               | Gets the Time.                                                         |
| [`DisplayTime`](#FatigueBiaxialityIndication.DisplayTime)                                                                 | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FatigueBiaxialityIndication.DisplayOption)                                                             | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FatigueBiaxialityIndication.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FatigueBiaxialityIndication.By)                                                                                   | Gets or sets the By.                                                   |
| [`ItemType`](#FatigueBiaxialityIndication.ItemType)                                                                       | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FatigueBiaxialityIndication.CalculateTimeHistory)                                               | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FatigueBiaxialityIndication.Suppressed)                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#FatigueBiaxialityIndication.Children)                                                                       | Gets the list of children.                                             |
| [`Comments`](#FatigueBiaxialityIndication.Comments)                                                                       | Gets the list of associated comments.                                  |
| [`Figures`](#FatigueBiaxialityIndication.Figures)                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#FatigueBiaxialityIndication.Images)                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FatigueBiaxialityIndication.Properties)                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FatigueBiaxialityIndication.VisibleProperties)                                                     | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueBiaxialityIndication
```

## Property detail

### *property* FatigueBiaxialityIndication.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FatigueBiaxialityIndication.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FatigueBiaxialityIndication.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FatigueBiaxialityIndication.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
