# AcousticTransmissionLoss

### *class* AcousticTransmissionLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticTransmissionLoss.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AcousticTransmissionLoss.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AcousticTransmissionLoss.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticTransmissionLoss.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticTransmissionLoss.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticTransmissionLoss.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticTransmissionLoss.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticTransmissionLoss.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticTransmissionLoss.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticTransmissionLoss.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticTransmissionLoss.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticTransmissionLoss.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticTransmissionLoss.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticTransmissionLoss.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticTransmissionLoss.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticTransmissionLoss.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticTransmissionLoss.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticTransmissionLoss.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticTransmissionLoss.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticTransmissionLoss.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticTransmissionLoss.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticTransmissionLoss.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticTransmissionLoss.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticTransmissionLoss.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticTransmissionLoss.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticTransmissionLoss.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InputPort`](#AcousticTransmissionLoss.InputPort)                                                                        | Gets or sets the InputPort.                                            |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`OutputPort`](#AcousticTransmissionLoss.OutputPort)                                                                      | Gets or sets the OutputPort.                                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#AcousticTransmissionLoss.MaximumFrequency)                                                          | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#AcousticTransmissionLoss.MinimumFrequency)                                                          | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#AcousticTransmissionLoss.FrequencyRange)                                                              | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticTransmissionLoss.Mode)                                                                                  | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticTransmissionLoss.ReportedFrequency)                                                        | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticTransmissionLoss.DampedFrequency)                                                            | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticTransmissionLoss.LogarithmicDecrement)                                                  | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticTransmissionLoss.ModalDampingRatio)                                                        | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticTransmissionLoss.Stability)                                                                        | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticTransmissionLoss.SweepingPhase)                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticTransmissionLoss.Frequency)                                                                        | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticTransmissionLoss.Amplitude)                                                                        | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticTransmissionLoss.PlotData)                                                                          | Gets the result table.                                                 |
| [`Location`](#AcousticTransmissionLoss.Location)                                                                          | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticTransmissionLoss.TimeForMinimumOfMinimumValues)                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticTransmissionLoss.TimeForMinimumOfMaximumValues)                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticTransmissionLoss.LoadStepForMinimumOfMinimumValues)                        | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticTransmissionLoss.LoadStepForMinimumOfMaximumValues)                        | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticTransmissionLoss.TimeForMaximumOfMinimumValues)                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticTransmissionLoss.TimeForMaximumOfMaximumValues)                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticTransmissionLoss.LoadStepForMaximumOfMinimumValues)                        | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticTransmissionLoss.LoadStepForMaximumOfMaximumValues)                        | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticTransmissionLoss.IsSolved)                                                                          | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticTransmissionLoss.ScopingMethod)                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticTransmissionLoss.SetNumber)                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticTransmissionLoss.CombinationNumber)                                                        | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticTransmissionLoss.SolutionCombinationDriver)                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticTransmissionLoss.WaterfallPanelShowTextOnMosaic)                              | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticTransmissionLoss.CrackFrontNumber)                                                          | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticTransmissionLoss.GlobalIDs)                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticTransmissionLoss.Identifier)                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticTransmissionLoss.IterationNumber)                                                            | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticTransmissionLoss.LoadStep)                                                                          | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticTransmissionLoss.MaximumOccursOn)                                                            | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticTransmissionLoss.MinimumOccursOn)                                                            | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticTransmissionLoss.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticTransmissionLoss.SolverComponentIDs)                                                      | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticTransmissionLoss.Substep)                                                                            | Gets the Substep.                                                      |
| [`Average`](#AcousticTransmissionLoss.Average)                                                                            | Gets the Average.                                                      |
| [`Maximum`](#AcousticTransmissionLoss.Maximum)                                                                            | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticTransmissionLoss.MaximumOfMaximumOverTime)                                          | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticTransmissionLoss.MaximumOfMinimumOverTime)                                          | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticTransmissionLoss.Minimum)                                                                            | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticTransmissionLoss.MinimumOfMaximumOverTime)                                          | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticTransmissionLoss.MinimumOfMinimumOverTime)                                          | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticTransmissionLoss.Time)                                                                                  | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticTransmissionLoss.DisplayTime)                                                                    | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticTransmissionLoss.DisplayOption)                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticTransmissionLoss.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticTransmissionLoss.By)                                                                                      | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticTransmissionLoss.ItemType)                                                                          | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticTransmissionLoss.CalculateTimeHistory)                                                  | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticTransmissionLoss.Suppressed)                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticTransmissionLoss.Children)                                                                          | Gets the list of children.                                             |
| [`Comments`](#AcousticTransmissionLoss.Comments)                                                                          | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticTransmissionLoss.Figures)                                                                            | Gets the list of associated figures.                                   |
| [`Images`](#AcousticTransmissionLoss.Images)                                                                              | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticTransmissionLoss.Properties)                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticTransmissionLoss.VisibleProperties)                                                        | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticTransmissionLoss
```

## Property detail

### *property* AcousticTransmissionLoss.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.OutputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputPort.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticTransmissionLoss.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticTransmissionLoss.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticTransmissionLoss.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
