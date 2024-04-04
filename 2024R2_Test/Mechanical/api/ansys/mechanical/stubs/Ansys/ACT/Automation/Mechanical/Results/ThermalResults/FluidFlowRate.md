# FluidFlowRate

### *class* FluidFlowRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluidFlowRate.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FluidFlowRate.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#FluidFlowRate.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FluidFlowRate.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FluidFlowRate.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FluidFlowRate.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FluidFlowRate.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FluidFlowRate.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FluidFlowRate.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FluidFlowRate.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FluidFlowRate.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FluidFlowRate.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FluidFlowRate.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FluidFlowRate.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluidFlowRate.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluidFlowRate.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidFlowRate.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FluidFlowRate.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FluidFlowRate.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluidFlowRate.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluidFlowRate.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidFlowRate.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluidFlowRate.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluidFlowRate.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FluidFlowRate.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluidFlowRate.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#FluidFlowRate.Layer)                                                                                           | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#FluidFlowRate.ThermalResultType)                                                                   | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#FluidFlowRate.NormalOrientation)                                                                   | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#FluidFlowRate.AverageAcrossBodies)                                                               | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FluidFlowRate.PlotData)                                                                                     | Gets the result table.                                                 |
| [`Location`](#FluidFlowRate.Location)                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FluidFlowRate.TimeForMinimumOfMinimumValues)                                           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FluidFlowRate.TimeForMinimumOfMaximumValues)                                           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FluidFlowRate.LoadStepForMinimumOfMinimumValues)                                   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FluidFlowRate.LoadStepForMinimumOfMaximumValues)                                   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FluidFlowRate.TimeForMaximumOfMinimumValues)                                           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FluidFlowRate.TimeForMaximumOfMaximumValues)                                           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FluidFlowRate.LoadStepForMaximumOfMinimumValues)                                   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FluidFlowRate.LoadStepForMaximumOfMaximumValues)                                   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FluidFlowRate.IsSolved)                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FluidFlowRate.ScopingMethod)                                                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FluidFlowRate.SetNumber)                                                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FluidFlowRate.CombinationNumber)                                                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FluidFlowRate.SolutionCombinationDriver)                                                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FluidFlowRate.WaterfallPanelShowTextOnMosaic)                                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FluidFlowRate.CrackFrontNumber)                                                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FluidFlowRate.GlobalIDs)                                                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FluidFlowRate.Identifier)                                                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FluidFlowRate.IterationNumber)                                                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#FluidFlowRate.LoadStep)                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FluidFlowRate.MaximumOccursOn)                                                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FluidFlowRate.MinimumOccursOn)                                                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FluidFlowRate.LoadStepNumber)                                                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FluidFlowRate.SolverComponentIDs)                                                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FluidFlowRate.Substep)                                                                                       | Gets the Substep.                                                      |
| [`Average`](#FluidFlowRate.Average)                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#FluidFlowRate.Maximum)                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FluidFlowRate.MaximumOfMaximumOverTime)                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FluidFlowRate.MaximumOfMinimumOverTime)                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FluidFlowRate.Minimum)                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FluidFlowRate.MinimumOfMaximumOverTime)                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FluidFlowRate.MinimumOfMinimumOverTime)                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FluidFlowRate.Time)                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#FluidFlowRate.DisplayTime)                                                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FluidFlowRate.DisplayOption)                                                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FluidFlowRate.DpfEvaluation)                                                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FluidFlowRate.By)                                                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#FluidFlowRate.ItemType)                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FluidFlowRate.CalculateTimeHistory)                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FluidFlowRate.Suppressed)                                                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#FluidFlowRate.Children)                                                                                     | Gets the list of children.                                             |
| [`Comments`](#FluidFlowRate.Comments)                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#FluidFlowRate.Figures)                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#FluidFlowRate.Images)                                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FluidFlowRate.Properties)                                                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FluidFlowRate.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import FluidFlowRate
```

## Property detail

### *property* FluidFlowRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FluidFlowRate.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FluidFlowRate.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FluidFlowRate.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
