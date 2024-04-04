# TotalElectrostaticForce

### *class* TotalElectrostaticForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalElectrostaticForce.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#TotalElectrostaticForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#TotalElectrostaticForce.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#TotalElectrostaticForce.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#TotalElectrostaticForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#TotalElectrostaticForce.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#TotalElectrostaticForce.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#TotalElectrostaticForce.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#TotalElectrostaticForce.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#TotalElectrostaticForce.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#TotalElectrostaticForce.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#TotalElectrostaticForce.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#TotalElectrostaticForce.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TotalElectrostaticForce.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TotalElectrostaticForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TotalElectrostaticForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalElectrostaticForce.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TotalElectrostaticForce.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TotalElectrostaticForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TotalElectrostaticForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TotalElectrostaticForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalElectrostaticForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TotalElectrostaticForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TotalElectrostaticForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#TotalElectrostaticForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TotalElectrostaticForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Total`](#TotalElectrostaticForce.Total)                                                                                 | Gets the Total.                                                        |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ReportedFrequency`](#TotalElectrostaticForce.ReportedFrequency)                                                         | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#TotalElectrostaticForce.SweepingPhase)                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#TotalElectrostaticForce.PhaseIncrement)                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#TotalElectrostaticForce.Frequency)                                                                         | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#TotalElectrostaticForce.ElectricResultType)                                                       | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#TotalElectrostaticForce.Amplitude)                                                                         | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#TotalElectrostaticForce.AverageAcrossBodies)                                                     | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#TotalElectrostaticForce.PlotData)                                                                           | Gets the result table.                                                 |
| [`Location`](#TotalElectrostaticForce.Location)                                                                           | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#TotalElectrostaticForce.TimeForMinimumOfMinimumValues)                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalElectrostaticForce.TimeForMinimumOfMaximumValues)                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#TotalElectrostaticForce.LoadStepForMinimumOfMinimumValues)                         | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalElectrostaticForce.LoadStepForMinimumOfMaximumValues)                         | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#TotalElectrostaticForce.TimeForMaximumOfMinimumValues)                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#TotalElectrostaticForce.TimeForMaximumOfMaximumValues)                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#TotalElectrostaticForce.LoadStepForMaximumOfMinimumValues)                         | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#TotalElectrostaticForce.LoadStepForMaximumOfMaximumValues)                         | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#TotalElectrostaticForce.IsSolved)                                                                           | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#TotalElectrostaticForce.ScopingMethod)                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalElectrostaticForce.SetNumber)                                                                         | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#TotalElectrostaticForce.CombinationNumber)                                                         | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#TotalElectrostaticForce.SolutionCombinationDriver)                                         | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#TotalElectrostaticForce.WaterfallPanelShowTextOnMosaic)                               | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#TotalElectrostaticForce.CrackFrontNumber)                                                           | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#TotalElectrostaticForce.GlobalIDs)                                                                         | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#TotalElectrostaticForce.Identifier)                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#TotalElectrostaticForce.IterationNumber)                                                             | Gets the IterationNumber.                                              |
| [`LoadStep`](#TotalElectrostaticForce.LoadStep)                                                                           | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#TotalElectrostaticForce.MaximumOccursOn)                                                             | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#TotalElectrostaticForce.MinimumOccursOn)                                                             | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#TotalElectrostaticForce.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#TotalElectrostaticForce.SolverComponentIDs)                                                       | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TotalElectrostaticForce.Substep)                                                                             | Gets the Substep.                                                      |
| [`Average`](#TotalElectrostaticForce.Average)                                                                             | Gets the Average.                                                      |
| [`Maximum`](#TotalElectrostaticForce.Maximum)                                                                             | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#TotalElectrostaticForce.MaximumOfMaximumOverTime)                                           | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalElectrostaticForce.MaximumOfMinimumOverTime)                                           | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalElectrostaticForce.Minimum)                                                                             | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#TotalElectrostaticForce.MinimumOfMaximumOverTime)                                           | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalElectrostaticForce.MinimumOfMinimumOverTime)                                           | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#TotalElectrostaticForce.Time)                                                                                   | Gets the Time.                                                         |
| [`DisplayTime`](#TotalElectrostaticForce.DisplayTime)                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#TotalElectrostaticForce.DisplayOption)                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#TotalElectrostaticForce.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#TotalElectrostaticForce.By)                                                                                       | Gets or sets the By.                                                   |
| [`ItemType`](#TotalElectrostaticForce.ItemType)                                                                           | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#TotalElectrostaticForce.CalculateTimeHistory)                                                   | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#TotalElectrostaticForce.Suppressed)                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#TotalElectrostaticForce.Children)                                                                           | Gets the list of children.                                             |
| [`Comments`](#TotalElectrostaticForce.Comments)                                                                           | Gets the list of associated comments.                                  |
| [`Figures`](#TotalElectrostaticForce.Figures)                                                                             | Gets the list of associated figures.                                   |
| [`Images`](#TotalElectrostaticForce.Images)                                                                               | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#TotalElectrostaticForce.Properties)                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#TotalElectrostaticForce.VisibleProperties)                                                         | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import TotalElectrostaticForce
```

## Property detail

### *property* TotalElectrostaticForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TotalElectrostaticForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TotalElectrostaticForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TotalElectrostaticForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
