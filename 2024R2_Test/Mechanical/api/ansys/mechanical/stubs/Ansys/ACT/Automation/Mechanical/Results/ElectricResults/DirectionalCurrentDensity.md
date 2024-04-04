# DirectionalCurrentDensity

### *class* DirectionalCurrentDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalCurrentDensity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#DirectionalCurrentDensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#DirectionalCurrentDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalCurrentDensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalCurrentDensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalCurrentDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalCurrentDensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalCurrentDensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalCurrentDensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalCurrentDensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalCurrentDensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalCurrentDensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalCurrentDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalCurrentDensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalCurrentDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalCurrentDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalCurrentDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalCurrentDensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalCurrentDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalCurrentDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalCurrentDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalCurrentDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalCurrentDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalCurrentDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalCurrentDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalCurrentDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`NormalOrientation`](#DirectionalCurrentDensity.NormalOrientation)                                                       | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#DirectionalCurrentDensity.ReportedFrequency)                                                       | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#DirectionalCurrentDensity.SweepingPhase)                                                               | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalCurrentDensity.PhaseIncrement)                                                             | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalCurrentDensity.Frequency)                                                                       | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#DirectionalCurrentDensity.ElectricResultType)                                                     | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#DirectionalCurrentDensity.Amplitude)                                                                       | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#DirectionalCurrentDensity.AverageAcrossBodies)                                                   | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalCurrentDensity.PlotData)                                                                         | Gets the result table.                                                 |
| [`Location`](#DirectionalCurrentDensity.Location)                                                                         | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalCurrentDensity.TimeForMinimumOfMinimumValues)                               | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalCurrentDensity.TimeForMinimumOfMaximumValues)                               | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalCurrentDensity.LoadStepForMinimumOfMinimumValues)                       | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalCurrentDensity.LoadStepForMinimumOfMaximumValues)                       | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalCurrentDensity.TimeForMaximumOfMinimumValues)                               | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalCurrentDensity.TimeForMaximumOfMaximumValues)                               | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalCurrentDensity.LoadStepForMaximumOfMinimumValues)                       | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalCurrentDensity.LoadStepForMaximumOfMaximumValues)                       | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalCurrentDensity.IsSolved)                                                                         | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalCurrentDensity.ScopingMethod)                                                               | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalCurrentDensity.SetNumber)                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalCurrentDensity.CombinationNumber)                                                       | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalCurrentDensity.SolutionCombinationDriver)                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalCurrentDensity.WaterfallPanelShowTextOnMosaic)                             | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalCurrentDensity.CrackFrontNumber)                                                         | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalCurrentDensity.GlobalIDs)                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalCurrentDensity.Identifier)                                                                     | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalCurrentDensity.IterationNumber)                                                           | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalCurrentDensity.LoadStep)                                                                         | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalCurrentDensity.MaximumOccursOn)                                                           | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalCurrentDensity.MinimumOccursOn)                                                           | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalCurrentDensity.LoadStepNumber)                                                             | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalCurrentDensity.SolverComponentIDs)                                                     | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalCurrentDensity.Substep)                                                                           | Gets the Substep.                                                      |
| [`Average`](#DirectionalCurrentDensity.Average)                                                                           | Gets the Average.                                                      |
| [`Maximum`](#DirectionalCurrentDensity.Maximum)                                                                           | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalCurrentDensity.MaximumOfMaximumOverTime)                                         | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalCurrentDensity.MaximumOfMinimumOverTime)                                         | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalCurrentDensity.Minimum)                                                                           | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalCurrentDensity.MinimumOfMaximumOverTime)                                         | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalCurrentDensity.MinimumOfMinimumOverTime)                                         | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalCurrentDensity.Time)                                                                                 | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalCurrentDensity.DisplayTime)                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalCurrentDensity.DisplayOption)                                                               | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalCurrentDensity.DpfEvaluation)                                                               | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalCurrentDensity.By)                                                                                     | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalCurrentDensity.ItemType)                                                                         | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalCurrentDensity.CalculateTimeHistory)                                                 | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalCurrentDensity.Suppressed)                                                                     | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalCurrentDensity.Children)                                                                         | Gets the list of children.                                             |
| [`Comments`](#DirectionalCurrentDensity.Comments)                                                                         | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalCurrentDensity.Figures)                                                                           | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalCurrentDensity.Images)                                                                             | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalCurrentDensity.Properties)                                                                     | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalCurrentDensity.VisibleProperties)                                                       | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import DirectionalCurrentDensity
```

## Property detail

### *property* DirectionalCurrentDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DirectionalCurrentDensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DirectionalCurrentDensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DirectionalCurrentDensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
