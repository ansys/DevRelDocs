# AcousticAWeightedSoundPressureLevel

### *class* AcousticAWeightedSoundPressureLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticAWeightedSoundPressureLevel.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AcousticAWeightedSoundPressureLevel.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AcousticAWeightedSoundPressureLevel.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticAWeightedSoundPressureLevel.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticAWeightedSoundPressureLevel.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticAWeightedSoundPressureLevel.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticAWeightedSoundPressureLevel.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticAWeightedSoundPressureLevel.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticAWeightedSoundPressureLevel.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticAWeightedSoundPressureLevel.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticAWeightedSoundPressureLevel.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticAWeightedSoundPressureLevel.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticAWeightedSoundPressureLevel.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticAWeightedSoundPressureLevel.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticAWeightedSoundPressureLevel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticAWeightedSoundPressureLevel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticAWeightedSoundPressureLevel.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticAWeightedSoundPressureLevel.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticAWeightedSoundPressureLevel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticAWeightedSoundPressureLevel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticAWeightedSoundPressureLevel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticAWeightedSoundPressureLevel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticAWeightedSoundPressureLevel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticAWeightedSoundPressureLevel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticAWeightedSoundPressureLevel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticAWeightedSoundPressureLevel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticAWeightedSoundPressureLevel.Mode)                                                                       | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticAWeightedSoundPressureLevel.ReportedFrequency)                                             | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticAWeightedSoundPressureLevel.DampedFrequency)                                                 | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticAWeightedSoundPressureLevel.LogarithmicDecrement)                                       | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticAWeightedSoundPressureLevel.ModalDampingRatio)                                             | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticAWeightedSoundPressureLevel.Stability)                                                             | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticAWeightedSoundPressureLevel.SweepingPhase)                                                     | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticAWeightedSoundPressureLevel.Frequency)                                                             | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticAWeightedSoundPressureLevel.Amplitude)                                                             | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticAWeightedSoundPressureLevel.PlotData)                                                               | Gets the result table.                                                 |
| [`Location`](#AcousticAWeightedSoundPressureLevel.Location)                                                               | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMinimumValues)                     | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMaximumValues)                     | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMinimumValues)             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMaximumValues)             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMinimumValues)                     | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMaximumValues)                     | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMinimumValues)             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMaximumValues)             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticAWeightedSoundPressureLevel.IsSolved)                                                               | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticAWeightedSoundPressureLevel.ScopingMethod)                                                     | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticAWeightedSoundPressureLevel.SetNumber)                                                             | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticAWeightedSoundPressureLevel.CombinationNumber)                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticAWeightedSoundPressureLevel.SolutionCombinationDriver)                             | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticAWeightedSoundPressureLevel.WaterfallPanelShowTextOnMosaic)                   | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticAWeightedSoundPressureLevel.CrackFrontNumber)                                               | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticAWeightedSoundPressureLevel.GlobalIDs)                                                             | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticAWeightedSoundPressureLevel.Identifier)                                                           | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticAWeightedSoundPressureLevel.IterationNumber)                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticAWeightedSoundPressureLevel.LoadStep)                                                               | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticAWeightedSoundPressureLevel.MaximumOccursOn)                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticAWeightedSoundPressureLevel.MinimumOccursOn)                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticAWeightedSoundPressureLevel.LoadStepNumber)                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticAWeightedSoundPressureLevel.SolverComponentIDs)                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticAWeightedSoundPressureLevel.Substep)                                                                 | Gets the Substep.                                                      |
| [`Average`](#AcousticAWeightedSoundPressureLevel.Average)                                                                 | Gets the Average.                                                      |
| [`Maximum`](#AcousticAWeightedSoundPressureLevel.Maximum)                                                                 | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticAWeightedSoundPressureLevel.MaximumOfMaximumOverTime)                               | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticAWeightedSoundPressureLevel.MaximumOfMinimumOverTime)                               | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticAWeightedSoundPressureLevel.Minimum)                                                                 | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticAWeightedSoundPressureLevel.MinimumOfMaximumOverTime)                               | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticAWeightedSoundPressureLevel.MinimumOfMinimumOverTime)                               | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticAWeightedSoundPressureLevel.Time)                                                                       | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticAWeightedSoundPressureLevel.DisplayTime)                                                         | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticAWeightedSoundPressureLevel.DisplayOption)                                                     | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticAWeightedSoundPressureLevel.DpfEvaluation)                                                     | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticAWeightedSoundPressureLevel.By)                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticAWeightedSoundPressureLevel.ItemType)                                                               | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticAWeightedSoundPressureLevel.CalculateTimeHistory)                                       | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticAWeightedSoundPressureLevel.Suppressed)                                                           | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticAWeightedSoundPressureLevel.Children)                                                               | Gets the list of children.                                             |
| [`Comments`](#AcousticAWeightedSoundPressureLevel.Comments)                                                               | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticAWeightedSoundPressureLevel.Figures)                                                                 | Gets the list of associated figures.                                   |
| [`Images`](#AcousticAWeightedSoundPressureLevel.Images)                                                                   | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticAWeightedSoundPressureLevel.Properties)                                                           | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticAWeightedSoundPressureLevel.VisibleProperties)                                             | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticAWeightedSoundPressureLevel
```

## Property detail

### *property* AcousticAWeightedSoundPressureLevel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticAWeightedSoundPressureLevel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticAWeightedSoundPressureLevel.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticAWeightedSoundPressureLevel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
