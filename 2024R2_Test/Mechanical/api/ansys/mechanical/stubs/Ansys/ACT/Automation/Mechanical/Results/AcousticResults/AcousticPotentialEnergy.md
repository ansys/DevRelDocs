# AcousticPotentialEnergy

### *class* AcousticPotentialEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticPotentialEnergy.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AcousticPotentialEnergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AcousticPotentialEnergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticPotentialEnergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticPotentialEnergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticPotentialEnergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticPotentialEnergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticPotentialEnergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticPotentialEnergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticPotentialEnergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticPotentialEnergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticPotentialEnergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticPotentialEnergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticPotentialEnergy.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticPotentialEnergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticPotentialEnergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticPotentialEnergy.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticPotentialEnergy.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticPotentialEnergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticPotentialEnergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticPotentialEnergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticPotentialEnergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticPotentialEnergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticPotentialEnergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticPotentialEnergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticPotentialEnergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticPotentialEnergy.Mode)                                                                                   | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticPotentialEnergy.ReportedFrequency)                                                         | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticPotentialEnergy.DampedFrequency)                                                             | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticPotentialEnergy.LogarithmicDecrement)                                                   | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticPotentialEnergy.ModalDampingRatio)                                                         | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticPotentialEnergy.Stability)                                                                         | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticPotentialEnergy.SweepingPhase)                                                                 | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticPotentialEnergy.Frequency)                                                                         | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticPotentialEnergy.Amplitude)                                                                         | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticPotentialEnergy.PlotData)                                                                           | Gets the result table.                                                 |
| [`Location`](#AcousticPotentialEnergy.Location)                                                                           | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticPotentialEnergy.TimeForMinimumOfMinimumValues)                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticPotentialEnergy.TimeForMinimumOfMaximumValues)                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticPotentialEnergy.LoadStepForMinimumOfMinimumValues)                         | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticPotentialEnergy.LoadStepForMinimumOfMaximumValues)                         | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticPotentialEnergy.TimeForMaximumOfMinimumValues)                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticPotentialEnergy.TimeForMaximumOfMaximumValues)                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticPotentialEnergy.LoadStepForMaximumOfMinimumValues)                         | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticPotentialEnergy.LoadStepForMaximumOfMaximumValues)                         | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticPotentialEnergy.IsSolved)                                                                           | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticPotentialEnergy.ScopingMethod)                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticPotentialEnergy.SetNumber)                                                                         | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticPotentialEnergy.CombinationNumber)                                                         | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticPotentialEnergy.SolutionCombinationDriver)                                         | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticPotentialEnergy.WaterfallPanelShowTextOnMosaic)                               | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticPotentialEnergy.CrackFrontNumber)                                                           | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticPotentialEnergy.GlobalIDs)                                                                         | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticPotentialEnergy.Identifier)                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticPotentialEnergy.IterationNumber)                                                             | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticPotentialEnergy.LoadStep)                                                                           | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticPotentialEnergy.MaximumOccursOn)                                                             | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticPotentialEnergy.MinimumOccursOn)                                                             | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticPotentialEnergy.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticPotentialEnergy.SolverComponentIDs)                                                       | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticPotentialEnergy.Substep)                                                                             | Gets the Substep.                                                      |
| [`Average`](#AcousticPotentialEnergy.Average)                                                                             | Gets the Average.                                                      |
| [`Maximum`](#AcousticPotentialEnergy.Maximum)                                                                             | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticPotentialEnergy.MaximumOfMaximumOverTime)                                           | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticPotentialEnergy.MaximumOfMinimumOverTime)                                           | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticPotentialEnergy.Minimum)                                                                             | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticPotentialEnergy.MinimumOfMaximumOverTime)                                           | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticPotentialEnergy.MinimumOfMinimumOverTime)                                           | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticPotentialEnergy.Time)                                                                                   | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticPotentialEnergy.DisplayTime)                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticPotentialEnergy.DisplayOption)                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticPotentialEnergy.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticPotentialEnergy.By)                                                                                       | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticPotentialEnergy.ItemType)                                                                           | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticPotentialEnergy.CalculateTimeHistory)                                                   | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticPotentialEnergy.Suppressed)                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticPotentialEnergy.Children)                                                                           | Gets the list of children.                                             |
| [`Comments`](#AcousticPotentialEnergy.Comments)                                                                           | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticPotentialEnergy.Figures)                                                                             | Gets the list of associated figures.                                   |
| [`Images`](#AcousticPotentialEnergy.Images)                                                                               | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticPotentialEnergy.Properties)                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticPotentialEnergy.VisibleProperties)                                                         | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticPotentialEnergy
```

## Property detail

### *property* AcousticPotentialEnergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticPotentialEnergy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticPotentialEnergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticPotentialEnergy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
