# AcousticFrequencyBandAWeightedSPL

### *class* AcousticFrequencyBandAWeightedSPL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFrequencyBandAWeightedSPL.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AcousticFrequencyBandAWeightedSPL.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AcousticFrequencyBandAWeightedSPL.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticFrequencyBandAWeightedSPL.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticFrequencyBandAWeightedSPL.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticFrequencyBandAWeightedSPL.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticFrequencyBandAWeightedSPL.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticFrequencyBandAWeightedSPL.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticFrequencyBandAWeightedSPL.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticFrequencyBandAWeightedSPL.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFrequencyBandAWeightedSPL.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFrequencyBandAWeightedSPL.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFrequencyBandAWeightedSPL.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFrequencyBandAWeightedSPL.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFrequencyBandAWeightedSPL.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFrequencyBandAWeightedSPL.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFrequencyBandAWeightedSPL.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFrequencyBandAWeightedSPL.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticFrequencyBandAWeightedSPL.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFrequencyBandAWeightedSPL.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticFrequencyBandAWeightedSPL.Mode)                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticFrequencyBandAWeightedSPL.ReportedFrequency)                                               | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticFrequencyBandAWeightedSPL.DampedFrequency)                                                   | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement)                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticFrequencyBandAWeightedSPL.ModalDampingRatio)                                               | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticFrequencyBandAWeightedSPL.Stability)                                                               | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticFrequencyBandAWeightedSPL.SweepingPhase)                                                       | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticFrequencyBandAWeightedSPL.Frequency)                                                               | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticFrequencyBandAWeightedSPL.Amplitude)                                                               | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticFrequencyBandAWeightedSPL.PlotData)                                                                 | Gets the result table.                                                 |
| [`Location`](#AcousticFrequencyBandAWeightedSPL.Location)                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues)                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues)                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues)               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues)               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues)                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues)                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues)               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues)               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticFrequencyBandAWeightedSPL.IsSolved)                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticFrequencyBandAWeightedSPL.ScopingMethod)                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticFrequencyBandAWeightedSPL.SetNumber)                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticFrequencyBandAWeightedSPL.CombinationNumber)                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver)                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticFrequencyBandAWeightedSPL.WaterfallPanelShowTextOnMosaic)                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticFrequencyBandAWeightedSPL.CrackFrontNumber)                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticFrequencyBandAWeightedSPL.GlobalIDs)                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticFrequencyBandAWeightedSPL.Identifier)                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticFrequencyBandAWeightedSPL.IterationNumber)                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticFrequencyBandAWeightedSPL.LoadStep)                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticFrequencyBandAWeightedSPL.MaximumOccursOn)                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticFrequencyBandAWeightedSPL.MinimumOccursOn)                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticFrequencyBandAWeightedSPL.LoadStepNumber)                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticFrequencyBandAWeightedSPL.SolverComponentIDs)                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticFrequencyBandAWeightedSPL.Substep)                                                                   | Gets the Substep.                                                      |
| [`Average`](#AcousticFrequencyBandAWeightedSPL.Average)                                                                   | Gets the Average.                                                      |
| [`Maximum`](#AcousticFrequencyBandAWeightedSPL.Maximum)                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime)                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime)                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticFrequencyBandAWeightedSPL.Minimum)                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime)                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime)                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticFrequencyBandAWeightedSPL.Time)                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticFrequencyBandAWeightedSPL.DisplayTime)                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticFrequencyBandAWeightedSPL.DisplayOption)                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticFrequencyBandAWeightedSPL.DpfEvaluation)                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticFrequencyBandAWeightedSPL.By)                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticFrequencyBandAWeightedSPL.ItemType)                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory)                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticFrequencyBandAWeightedSPL.Suppressed)                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticFrequencyBandAWeightedSPL.Children)                                                                 | Gets the list of children.                                             |
| [`Comments`](#AcousticFrequencyBandAWeightedSPL.Comments)                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticFrequencyBandAWeightedSPL.Figures)                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#AcousticFrequencyBandAWeightedSPL.Images)                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticFrequencyBandAWeightedSPL.Properties)                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticFrequencyBandAWeightedSPL.VisibleProperties)                                               | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFrequencyBandAWeightedSPL
```

## Property detail

### *property* AcousticFrequencyBandAWeightedSPL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticFrequencyBandAWeightedSPL.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticFrequencyBandAWeightedSPL.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticFrequencyBandAWeightedSPL.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
