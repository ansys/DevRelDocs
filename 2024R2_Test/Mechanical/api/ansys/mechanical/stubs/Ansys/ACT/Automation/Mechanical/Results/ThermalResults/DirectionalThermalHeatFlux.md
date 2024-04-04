# DirectionalThermalHeatFlux

### *class* DirectionalThermalHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalThermalHeatFlux.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#DirectionalThermalHeatFlux.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#DirectionalThermalHeatFlux.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalThermalHeatFlux.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalThermalHeatFlux.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalThermalHeatFlux.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalThermalHeatFlux.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalThermalHeatFlux.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalThermalHeatFlux.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalThermalHeatFlux.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalThermalHeatFlux.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalThermalHeatFlux.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalThermalHeatFlux.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalThermalHeatFlux.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalThermalHeatFlux.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalThermalHeatFlux.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalThermalHeatFlux.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalThermalHeatFlux.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalThermalHeatFlux.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalThermalHeatFlux.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalThermalHeatFlux.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalThermalHeatFlux.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalThermalHeatFlux.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalThermalHeatFlux.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalThermalHeatFlux.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalThermalHeatFlux.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Layer`](#DirectionalThermalHeatFlux.Layer)                                                                              | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#DirectionalThermalHeatFlux.ThermalResultType)                                                      | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#DirectionalThermalHeatFlux.NormalOrientation)                                                      | Gets or sets the NormalOrientation.                                    |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#DirectionalThermalHeatFlux.AverageAcrossBodies)                                                  | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalThermalHeatFlux.PlotData)                                                                        | Gets the result table.                                                 |
| [`Location`](#DirectionalThermalHeatFlux.Location)                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalThermalHeatFlux.TimeForMinimumOfMinimumValues)                              | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalThermalHeatFlux.TimeForMinimumOfMaximumValues)                              | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalThermalHeatFlux.LoadStepForMinimumOfMinimumValues)                      | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalThermalHeatFlux.LoadStepForMinimumOfMaximumValues)                      | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalThermalHeatFlux.TimeForMaximumOfMinimumValues)                              | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalThermalHeatFlux.TimeForMaximumOfMaximumValues)                              | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalThermalHeatFlux.LoadStepForMaximumOfMinimumValues)                      | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalThermalHeatFlux.LoadStepForMaximumOfMaximumValues)                      | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalThermalHeatFlux.IsSolved)                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalThermalHeatFlux.ScopingMethod)                                                              | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalThermalHeatFlux.SetNumber)                                                                      | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalThermalHeatFlux.CombinationNumber)                                                      | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalThermalHeatFlux.SolutionCombinationDriver)                                      | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalThermalHeatFlux.WaterfallPanelShowTextOnMosaic)                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalThermalHeatFlux.CrackFrontNumber)                                                        | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalThermalHeatFlux.GlobalIDs)                                                                      | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalThermalHeatFlux.Identifier)                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalThermalHeatFlux.IterationNumber)                                                          | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalThermalHeatFlux.LoadStep)                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalThermalHeatFlux.MaximumOccursOn)                                                          | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalThermalHeatFlux.MinimumOccursOn)                                                          | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalThermalHeatFlux.LoadStepNumber)                                                            | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalThermalHeatFlux.SolverComponentIDs)                                                    | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalThermalHeatFlux.Substep)                                                                          | Gets the Substep.                                                      |
| [`Average`](#DirectionalThermalHeatFlux.Average)                                                                          | Gets the Average.                                                      |
| [`Maximum`](#DirectionalThermalHeatFlux.Maximum)                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalThermalHeatFlux.MaximumOfMaximumOverTime)                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalThermalHeatFlux.MaximumOfMinimumOverTime)                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalThermalHeatFlux.Minimum)                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalThermalHeatFlux.MinimumOfMaximumOverTime)                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalThermalHeatFlux.MinimumOfMinimumOverTime)                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalThermalHeatFlux.Time)                                                                                | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalThermalHeatFlux.DisplayTime)                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalThermalHeatFlux.DisplayOption)                                                              | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalThermalHeatFlux.DpfEvaluation)                                                              | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalThermalHeatFlux.By)                                                                                    | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalThermalHeatFlux.ItemType)                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalThermalHeatFlux.CalculateTimeHistory)                                                | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalThermalHeatFlux.Suppressed)                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalThermalHeatFlux.Children)                                                                        | Gets the list of children.                                             |
| [`Comments`](#DirectionalThermalHeatFlux.Comments)                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalThermalHeatFlux.Figures)                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalThermalHeatFlux.Images)                                                                            | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalThermalHeatFlux.Properties)                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalThermalHeatFlux.VisibleProperties)                                                      | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ThermalResults import DirectionalThermalHeatFlux
```

## Property detail

### *property* DirectionalThermalHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalThermalHeatFlux.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DirectionalThermalHeatFlux.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DirectionalThermalHeatFlux.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
