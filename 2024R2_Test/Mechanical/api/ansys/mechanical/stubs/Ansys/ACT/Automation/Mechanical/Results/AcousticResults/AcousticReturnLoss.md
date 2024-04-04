# AcousticReturnLoss

### *class* AcousticReturnLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticReturnLoss.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AcousticReturnLoss.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AcousticReturnLoss.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticReturnLoss.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticReturnLoss.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticReturnLoss.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticReturnLoss.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticReturnLoss.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticReturnLoss.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticReturnLoss.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticReturnLoss.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticReturnLoss.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticReturnLoss.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticReturnLoss.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticReturnLoss.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticReturnLoss.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticReturnLoss.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticReturnLoss.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticReturnLoss.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticReturnLoss.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticReturnLoss.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticReturnLoss.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticReturnLoss.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticReturnLoss.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticReturnLoss.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticReturnLoss.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InputPort`](#AcousticReturnLoss.InputPort)                                                                              | Gets or sets the InputPort.                                            |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#AcousticReturnLoss.MaximumFrequency)                                                                | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#AcousticReturnLoss.MinimumFrequency)                                                                | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#AcousticReturnLoss.FrequencyRange)                                                                    | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticReturnLoss.Mode)                                                                                        | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticReturnLoss.ReportedFrequency)                                                              | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticReturnLoss.DampedFrequency)                                                                  | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticReturnLoss.LogarithmicDecrement)                                                        | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticReturnLoss.ModalDampingRatio)                                                              | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticReturnLoss.Stability)                                                                              | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticReturnLoss.SweepingPhase)                                                                      | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticReturnLoss.Frequency)                                                                              | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticReturnLoss.Amplitude)                                                                              | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticReturnLoss.PlotData)                                                                                | Gets the result table.                                                 |
| [`Location`](#AcousticReturnLoss.Location)                                                                                | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticReturnLoss.TimeForMinimumOfMinimumValues)                                      | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticReturnLoss.TimeForMinimumOfMaximumValues)                                      | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticReturnLoss.LoadStepForMinimumOfMinimumValues)                              | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticReturnLoss.LoadStepForMinimumOfMaximumValues)                              | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticReturnLoss.TimeForMaximumOfMinimumValues)                                      | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticReturnLoss.TimeForMaximumOfMaximumValues)                                      | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticReturnLoss.LoadStepForMaximumOfMinimumValues)                              | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticReturnLoss.LoadStepForMaximumOfMaximumValues)                              | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticReturnLoss.IsSolved)                                                                                | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticReturnLoss.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticReturnLoss.SetNumber)                                                                              | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticReturnLoss.CombinationNumber)                                                              | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticReturnLoss.SolutionCombinationDriver)                                              | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticReturnLoss.WaterfallPanelShowTextOnMosaic)                                    | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticReturnLoss.CrackFrontNumber)                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticReturnLoss.GlobalIDs)                                                                              | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticReturnLoss.Identifier)                                                                            | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticReturnLoss.IterationNumber)                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticReturnLoss.LoadStep)                                                                                | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticReturnLoss.MaximumOccursOn)                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticReturnLoss.MinimumOccursOn)                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticReturnLoss.LoadStepNumber)                                                                    | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticReturnLoss.SolverComponentIDs)                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticReturnLoss.Substep)                                                                                  | Gets the Substep.                                                      |
| [`Average`](#AcousticReturnLoss.Average)                                                                                  | Gets the Average.                                                      |
| [`Maximum`](#AcousticReturnLoss.Maximum)                                                                                  | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticReturnLoss.MaximumOfMaximumOverTime)                                                | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticReturnLoss.MaximumOfMinimumOverTime)                                                | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticReturnLoss.Minimum)                                                                                  | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticReturnLoss.MinimumOfMaximumOverTime)                                                | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticReturnLoss.MinimumOfMinimumOverTime)                                                | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticReturnLoss.Time)                                                                                        | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticReturnLoss.DisplayTime)                                                                          | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticReturnLoss.DisplayOption)                                                                      | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticReturnLoss.DpfEvaluation)                                                                      | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticReturnLoss.By)                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticReturnLoss.ItemType)                                                                                | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticReturnLoss.CalculateTimeHistory)                                                        | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticReturnLoss.Suppressed)                                                                            | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticReturnLoss.Children)                                                                                | Gets the list of children.                                             |
| [`Comments`](#AcousticReturnLoss.Comments)                                                                                | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticReturnLoss.Figures)                                                                                  | Gets the list of associated figures.                                   |
| [`Images`](#AcousticReturnLoss.Images)                                                                                    | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticReturnLoss.Properties)                                                                            | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticReturnLoss.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticReturnLoss
```

## Property detail

### *property* AcousticReturnLoss.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticReturnLoss.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticReturnLoss.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticReturnLoss.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
