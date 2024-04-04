# FluidHeatTransportRate

### *class* FluidHeatTransportRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluidHeatTransportRate.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FluidHeatTransportRate.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FluidHeatTransportRate.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FluidHeatTransportRate.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FluidHeatTransportRate.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FluidHeatTransportRate.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FluidHeatTransportRate.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FluidHeatTransportRate.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FluidHeatTransportRate.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FluidHeatTransportRate.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FluidHeatTransportRate.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FluidHeatTransportRate.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FluidHeatTransportRate.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FluidHeatTransportRate.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluidHeatTransportRate.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluidHeatTransportRate.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidHeatTransportRate.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FluidHeatTransportRate.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FluidHeatTransportRate.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluidHeatTransportRate.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluidHeatTransportRate.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidHeatTransportRate.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluidHeatTransportRate.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluidHeatTransportRate.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FluidHeatTransportRate.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluidHeatTransportRate.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#FluidHeatTransportRate.Layer)                                                                                  | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#FluidHeatTransportRate.ThermalResultType)                                                          | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#FluidHeatTransportRate.NormalOrientation)                                                          | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#FluidHeatTransportRate.AverageAcrossBodies)                                                      | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FluidHeatTransportRate.PlotData)                                                                            | Gets the result table.                                                 |
| [`Location`](#FluidHeatTransportRate.Location)                                                                            | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FluidHeatTransportRate.TimeForMinimumOfMinimumValues)                                  | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FluidHeatTransportRate.TimeForMinimumOfMaximumValues)                                  | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FluidHeatTransportRate.LoadStepForMinimumOfMinimumValues)                          | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FluidHeatTransportRate.LoadStepForMinimumOfMaximumValues)                          | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FluidHeatTransportRate.TimeForMaximumOfMinimumValues)                                  | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FluidHeatTransportRate.TimeForMaximumOfMaximumValues)                                  | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FluidHeatTransportRate.LoadStepForMaximumOfMinimumValues)                          | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FluidHeatTransportRate.LoadStepForMaximumOfMaximumValues)                          | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FluidHeatTransportRate.IsSolved)                                                                            | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FluidHeatTransportRate.ScopingMethod)                                                                  | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FluidHeatTransportRate.SetNumber)                                                                          | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FluidHeatTransportRate.CombinationNumber)                                                          | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FluidHeatTransportRate.SolutionCombinationDriver)                                          | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FluidHeatTransportRate.WaterfallPanelShowTextOnMosaic)                                | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FluidHeatTransportRate.CrackFrontNumber)                                                            | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FluidHeatTransportRate.GlobalIDs)                                                                          | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FluidHeatTransportRate.Identifier)                                                                        | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FluidHeatTransportRate.IterationNumber)                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#FluidHeatTransportRate.LoadStep)                                                                            | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FluidHeatTransportRate.MaximumOccursOn)                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FluidHeatTransportRate.MinimumOccursOn)                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FluidHeatTransportRate.LoadStepNumber)                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FluidHeatTransportRate.SolverComponentIDs)                                                        | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FluidHeatTransportRate.Substep)                                                                              | Gets the Substep.                                                      |
| [`Average`](#FluidHeatTransportRate.Average)                                                                              | Gets the Average.                                                      |
| [`Maximum`](#FluidHeatTransportRate.Maximum)                                                                              | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FluidHeatTransportRate.MaximumOfMaximumOverTime)                                            | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FluidHeatTransportRate.MaximumOfMinimumOverTime)                                            | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FluidHeatTransportRate.Minimum)                                                                              | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FluidHeatTransportRate.MinimumOfMaximumOverTime)                                            | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FluidHeatTransportRate.MinimumOfMinimumOverTime)                                            | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FluidHeatTransportRate.Time)                                                                                    | Gets the Time.                                                         |
| [`DisplayTime`](#FluidHeatTransportRate.DisplayTime)                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FluidHeatTransportRate.DisplayOption)                                                                  | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FluidHeatTransportRate.DpfEvaluation)                                                                  | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FluidHeatTransportRate.By)                                                                                        | Gets or sets the By.                                                   |
| [`ItemType`](#FluidHeatTransportRate.ItemType)                                                                            | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FluidHeatTransportRate.CalculateTimeHistory)                                                    | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FluidHeatTransportRate.Suppressed)                                                                        | Gets or sets the Suppressed.                                           |
| [`Children`](#FluidHeatTransportRate.Children)                                                                            | Gets the list of children.                                             |
| [`Comments`](#FluidHeatTransportRate.Comments)                                                                            | Gets the list of associated comments.                                  |
| [`Figures`](#FluidHeatTransportRate.Figures)                                                                              | Gets the list of associated figures.                                   |
| [`Images`](#FluidHeatTransportRate.Images)                                                                                | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FluidHeatTransportRate.Properties)                                                                        | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FluidHeatTransportRate.VisibleProperties)                                                          | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import FluidHeatTransportRate
```

## Property detail

### *property* FluidHeatTransportRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FluidHeatTransportRate.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FluidHeatTransportRate.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FluidHeatTransportRate.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
