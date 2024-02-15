# AcousticDiffuseSoundTransmissionLoss

### *class* AcousticDiffuseSoundTransmissionLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticDiffuseSoundTransmissionLoss.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticDiffuseSoundTransmissionLoss.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticDiffuseSoundTransmissionLoss.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticDiffuseSoundTransmissionLoss.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticDiffuseSoundTransmissionLoss.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticDiffuseSoundTransmissionLoss.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticDiffuseSoundTransmissionLoss.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticDiffuseSoundTransmissionLoss.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticDiffuseSoundTransmissionLoss.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticDiffuseSoundTransmissionLoss.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticDiffuseSoundTransmissionLoss.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticDiffuseSoundTransmissionLoss.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticDiffuseSoundTransmissionLoss.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticDiffuseSoundTransmissionLoss.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticDiffuseSoundTransmissionLoss.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticDiffuseSoundTransmissionLoss.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`MaximumFrequency`](#AcousticDiffuseSoundTransmissionLoss.MaximumFrequency)                                              | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#AcousticDiffuseSoundTransmissionLoss.MinimumFrequency)                                              | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#AcousticDiffuseSoundTransmissionLoss.FrequencyRange)                                                  | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticDiffuseSoundTransmissionLoss.Mode)                                                                      | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticDiffuseSoundTransmissionLoss.ReportedFrequency)                                            | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticDiffuseSoundTransmissionLoss.DampedFrequency)                                                | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement)                                      | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio)                                            | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticDiffuseSoundTransmissionLoss.Stability)                                                            | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticDiffuseSoundTransmissionLoss.SweepingPhase)                                                    | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticDiffuseSoundTransmissionLoss.Frequency)                                                            | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticDiffuseSoundTransmissionLoss.Amplitude)                                                            | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticDiffuseSoundTransmissionLoss.PlotData)                                                              | Gets the result table.                                                 |
| [`Location`](#AcousticDiffuseSoundTransmissionLoss.Location)                                                              | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues)                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues)                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues)            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues)            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues)                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues)                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues)            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues)            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticDiffuseSoundTransmissionLoss.IsSolved)                                                              | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticDiffuseSoundTransmissionLoss.ScopingMethod)                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticDiffuseSoundTransmissionLoss.SetNumber)                                                            | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticDiffuseSoundTransmissionLoss.CombinationNumber)                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver)                            | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticDiffuseSoundTransmissionLoss.WaterfallPanelShowTextOnMosaic)                  | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber)                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticDiffuseSoundTransmissionLoss.GlobalIDs)                                                            | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticDiffuseSoundTransmissionLoss.Identifier)                                                          | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticDiffuseSoundTransmissionLoss.IterationNumber)                                                | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticDiffuseSoundTransmissionLoss.LoadStep)                                                              | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn)                                                | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn)                                                | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticDiffuseSoundTransmissionLoss.LoadStepNumber)                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs)                                          | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticDiffuseSoundTransmissionLoss.Substep)                                                                | Gets the Substep.                                                      |
| [`Average`](#AcousticDiffuseSoundTransmissionLoss.Average)                                                                | Gets the Average.                                                      |
| [`Maximum`](#AcousticDiffuseSoundTransmissionLoss.Maximum)                                                                | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime)                              | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime)                              | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticDiffuseSoundTransmissionLoss.Minimum)                                                                | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime)                              | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime)                              | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticDiffuseSoundTransmissionLoss.Time)                                                                      | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticDiffuseSoundTransmissionLoss.DisplayTime)                                                        | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticDiffuseSoundTransmissionLoss.DisplayOption)                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticDiffuseSoundTransmissionLoss.DpfEvaluation)                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticDiffuseSoundTransmissionLoss.By)                                                                          | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticDiffuseSoundTransmissionLoss.ItemType)                                                              | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory)                                      | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticDiffuseSoundTransmissionLoss.Suppressed)                                                          | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticDiffuseSoundTransmissionLoss.Children)                                                              | Gets the list of children.                                             |
| [`Comments`](#AcousticDiffuseSoundTransmissionLoss.Comments)                                                              | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticDiffuseSoundTransmissionLoss.Figures)                                                                | Gets the list of associated figures.                                   |
| [`Images`](#AcousticDiffuseSoundTransmissionLoss.Images)                                                                  | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticDiffuseSoundTransmissionLoss.Properties)                                                          | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticDiffuseSoundTransmissionLoss.VisibleProperties)                                            | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticDiffuseSoundTransmissionLoss
```

## Property detail

### *property* AcousticDiffuseSoundTransmissionLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDiffuseSoundTransmissionLoss.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticDiffuseSoundTransmissionLoss.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
