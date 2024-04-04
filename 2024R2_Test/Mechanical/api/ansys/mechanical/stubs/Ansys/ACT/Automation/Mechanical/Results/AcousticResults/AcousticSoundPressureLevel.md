# AcousticSoundPressureLevel

### *class* AcousticSoundPressureLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticSoundPressureLevel.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AcousticSoundPressureLevel.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AcousticSoundPressureLevel.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticSoundPressureLevel.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticSoundPressureLevel.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticSoundPressureLevel.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticSoundPressureLevel.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticSoundPressureLevel.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticSoundPressureLevel.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticSoundPressureLevel.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticSoundPressureLevel.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticSoundPressureLevel.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticSoundPressureLevel.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticSoundPressureLevel.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticSoundPressureLevel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticSoundPressureLevel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticSoundPressureLevel.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticSoundPressureLevel.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticSoundPressureLevel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticSoundPressureLevel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticSoundPressureLevel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticSoundPressureLevel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticSoundPressureLevel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticSoundPressureLevel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticSoundPressureLevel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticSoundPressureLevel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticSoundPressureLevel.Mode)                                                                                | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticSoundPressureLevel.ReportedFrequency)                                                      | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticSoundPressureLevel.DampedFrequency)                                                          | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticSoundPressureLevel.LogarithmicDecrement)                                                | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticSoundPressureLevel.ModalDampingRatio)                                                      | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticSoundPressureLevel.Stability)                                                                      | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticSoundPressureLevel.SweepingPhase)                                                              | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticSoundPressureLevel.Frequency)                                                                      | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticSoundPressureLevel.Amplitude)                                                                      | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticSoundPressureLevel.PlotData)                                                                        | Gets the result table.                                                 |
| [`Location`](#AcousticSoundPressureLevel.Location)                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticSoundPressureLevel.TimeForMinimumOfMinimumValues)                              | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticSoundPressureLevel.TimeForMinimumOfMaximumValues)                              | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticSoundPressureLevel.LoadStepForMinimumOfMinimumValues)                      | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticSoundPressureLevel.LoadStepForMinimumOfMaximumValues)                      | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticSoundPressureLevel.TimeForMaximumOfMinimumValues)                              | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticSoundPressureLevel.TimeForMaximumOfMaximumValues)                              | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticSoundPressureLevel.LoadStepForMaximumOfMinimumValues)                      | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticSoundPressureLevel.LoadStepForMaximumOfMaximumValues)                      | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticSoundPressureLevel.IsSolved)                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticSoundPressureLevel.ScopingMethod)                                                              | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticSoundPressureLevel.SetNumber)                                                                      | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticSoundPressureLevel.CombinationNumber)                                                      | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticSoundPressureLevel.SolutionCombinationDriver)                                      | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticSoundPressureLevel.WaterfallPanelShowTextOnMosaic)                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticSoundPressureLevel.CrackFrontNumber)                                                        | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticSoundPressureLevel.GlobalIDs)                                                                      | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticSoundPressureLevel.Identifier)                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticSoundPressureLevel.IterationNumber)                                                          | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticSoundPressureLevel.LoadStep)                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticSoundPressureLevel.MaximumOccursOn)                                                          | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticSoundPressureLevel.MinimumOccursOn)                                                          | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticSoundPressureLevel.LoadStepNumber)                                                            | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticSoundPressureLevel.SolverComponentIDs)                                                    | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticSoundPressureLevel.Substep)                                                                          | Gets the Substep.                                                      |
| [`Average`](#AcousticSoundPressureLevel.Average)                                                                          | Gets the Average.                                                      |
| [`Maximum`](#AcousticSoundPressureLevel.Maximum)                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticSoundPressureLevel.MaximumOfMaximumOverTime)                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticSoundPressureLevel.MaximumOfMinimumOverTime)                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticSoundPressureLevel.Minimum)                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticSoundPressureLevel.MinimumOfMaximumOverTime)                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticSoundPressureLevel.MinimumOfMinimumOverTime)                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticSoundPressureLevel.Time)                                                                                | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticSoundPressureLevel.DisplayTime)                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticSoundPressureLevel.DisplayOption)                                                              | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticSoundPressureLevel.DpfEvaluation)                                                              | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticSoundPressureLevel.By)                                                                                    | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticSoundPressureLevel.ItemType)                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticSoundPressureLevel.CalculateTimeHistory)                                                | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticSoundPressureLevel.Suppressed)                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticSoundPressureLevel.Children)                                                                        | Gets the list of children.                                             |
| [`Comments`](#AcousticSoundPressureLevel.Comments)                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticSoundPressureLevel.Figures)                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#AcousticSoundPressureLevel.Images)                                                                            | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticSoundPressureLevel.Properties)                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticSoundPressureLevel.VisibleProperties)                                                      | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticSoundPressureLevel
```

## Property detail

### *property* AcousticSoundPressureLevel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticSoundPressureLevel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticSoundPressureLevel.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticSoundPressureLevel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
