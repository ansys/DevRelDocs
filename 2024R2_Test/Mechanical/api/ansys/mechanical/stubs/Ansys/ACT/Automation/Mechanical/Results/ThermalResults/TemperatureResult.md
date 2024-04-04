# TemperatureResult

### *class* TemperatureResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TemperatureResult.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#TemperatureResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#TemperatureResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#TemperatureResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#TemperatureResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#TemperatureResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#TemperatureResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#TemperatureResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#TemperatureResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#TemperatureResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#TemperatureResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#TemperatureResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#TemperatureResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TemperatureResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TemperatureResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TemperatureResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TemperatureResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TemperatureResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TemperatureResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TemperatureResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TemperatureResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TemperatureResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TemperatureResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TemperatureResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#TemperatureResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TemperatureResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#TemperatureResult.Layer)                                                                                       | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#TemperatureResult.ThermalResultType)                                                               | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#TemperatureResult.NormalOrientation)                                                               | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#TemperatureResult.AverageAcrossBodies)                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#TemperatureResult.PlotData)                                                                                 | Gets the result table.                                                 |
| [`Location`](#TemperatureResult.Location)                                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#TemperatureResult.TimeForMinimumOfMinimumValues)                                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TemperatureResult.TimeForMinimumOfMaximumValues)                                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#TemperatureResult.LoadStepForMinimumOfMinimumValues)                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TemperatureResult.LoadStepForMinimumOfMaximumValues)                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#TemperatureResult.TimeForMaximumOfMinimumValues)                                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#TemperatureResult.TimeForMaximumOfMaximumValues)                                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#TemperatureResult.LoadStepForMaximumOfMinimumValues)                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#TemperatureResult.LoadStepForMaximumOfMaximumValues)                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#TemperatureResult.IsSolved)                                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#TemperatureResult.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TemperatureResult.SetNumber)                                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#TemperatureResult.CombinationNumber)                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#TemperatureResult.SolutionCombinationDriver)                                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#TemperatureResult.WaterfallPanelShowTextOnMosaic)                                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#TemperatureResult.CrackFrontNumber)                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#TemperatureResult.GlobalIDs)                                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#TemperatureResult.Identifier)                                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#TemperatureResult.IterationNumber)                                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#TemperatureResult.LoadStep)                                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#TemperatureResult.MaximumOccursOn)                                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#TemperatureResult.MinimumOccursOn)                                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#TemperatureResult.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#TemperatureResult.SolverComponentIDs)                                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TemperatureResult.Substep)                                                                                   | Gets the Substep.                                                      |
| [`Average`](#TemperatureResult.Average)                                                                                   | Gets the Average.                                                      |
| [`Maximum`](#TemperatureResult.Maximum)                                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#TemperatureResult.MaximumOfMaximumOverTime)                                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TemperatureResult.MaximumOfMinimumOverTime)                                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TemperatureResult.Minimum)                                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#TemperatureResult.MinimumOfMaximumOverTime)                                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TemperatureResult.MinimumOfMinimumOverTime)                                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#TemperatureResult.Time)                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#TemperatureResult.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#TemperatureResult.DisplayOption)                                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#TemperatureResult.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#TemperatureResult.By)                                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#TemperatureResult.ItemType)                                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#TemperatureResult.CalculateTimeHistory)                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#TemperatureResult.Suppressed)                                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#TemperatureResult.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#TemperatureResult.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#TemperatureResult.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#TemperatureResult.Images)                                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#TemperatureResult.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#TemperatureResult.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import TemperatureResult
```

## Property detail

### *property* TemperatureResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TemperatureResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### TemperatureResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### TemperatureResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TemperatureResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
