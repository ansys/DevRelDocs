# FatigueDamage

### *class* FatigueDamage

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueDamage.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FatigueDamage.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FatigueDamage.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FatigueDamage.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FatigueDamage.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FatigueDamage.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FatigueDamage.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FatigueDamage.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FatigueDamage.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FatigueDamage.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FatigueDamage.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FatigueDamage.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FatigueDamage.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueDamage.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueDamage.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FatigueDamage.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueDamage.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueDamage.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueDamage.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueDamage.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueDamage.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueDamage.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueDamage.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueDamage.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FatigueDamage.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueDamage.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#FatigueDamage.Method)                                                                                         | Gets the Method.                                                       |
| [`DesignLife`](#FatigueDamage.DesignLife)                                                                                 | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#FatigueDamage.AverageAcrossBodies)                                                               | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FatigueDamage.PlotData)                                                                                     | Gets the result table.                                                 |
| [`Location`](#FatigueDamage.Location)                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FatigueDamage.TimeForMinimumOfMinimumValues)                                           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueDamage.TimeForMinimumOfMaximumValues)                                           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueDamage.LoadStepForMinimumOfMinimumValues)                                   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueDamage.LoadStepForMinimumOfMaximumValues)                                   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FatigueDamage.TimeForMaximumOfMinimumValues)                                           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FatigueDamage.TimeForMaximumOfMaximumValues)                                           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueDamage.LoadStepForMaximumOfMinimumValues)                                   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueDamage.LoadStepForMaximumOfMaximumValues)                                   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FatigueDamage.IsSolved)                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FatigueDamage.ScopingMethod)                                                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueDamage.SetNumber)                                                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FatigueDamage.CombinationNumber)                                                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FatigueDamage.SolutionCombinationDriver)                                                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FatigueDamage.WaterfallPanelShowTextOnMosaic)                                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FatigueDamage.CrackFrontNumber)                                                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FatigueDamage.GlobalIDs)                                                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FatigueDamage.Identifier)                                                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FatigueDamage.IterationNumber)                                                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueDamage.LoadStep)                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FatigueDamage.MaximumOccursOn)                                                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FatigueDamage.MinimumOccursOn)                                                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FatigueDamage.LoadStepNumber)                                                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FatigueDamage.SolverComponentIDs)                                                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueDamage.Substep)                                                                                       | Gets the Substep.                                                      |
| [`Average`](#FatigueDamage.Average)                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#FatigueDamage.Maximum)                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FatigueDamage.MaximumOfMaximumOverTime)                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueDamage.MaximumOfMinimumOverTime)                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FatigueDamage.Minimum)                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FatigueDamage.MinimumOfMaximumOverTime)                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueDamage.MinimumOfMinimumOverTime)                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FatigueDamage.Time)                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#FatigueDamage.DisplayTime)                                                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FatigueDamage.DisplayOption)                                                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FatigueDamage.DpfEvaluation)                                                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FatigueDamage.By)                                                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#FatigueDamage.ItemType)                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FatigueDamage.CalculateTimeHistory)                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FatigueDamage.Suppressed)                                                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#FatigueDamage.Children)                                                                                     | Gets the list of children.                                             |
| [`Comments`](#FatigueDamage.Comments)                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#FatigueDamage.Figures)                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#FatigueDamage.Images)                                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FatigueDamage.Properties)                                                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FatigueDamage.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueDamage
```

## Property detail

### *property* FatigueDamage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FatigueDamage.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FatigueDamage.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FatigueDamage.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FatigueDamage.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FatigueDamage.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
