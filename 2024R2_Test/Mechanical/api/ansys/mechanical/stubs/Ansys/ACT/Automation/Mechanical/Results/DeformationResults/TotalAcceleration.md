# TotalAcceleration

### *class* TotalAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalAcceleration.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#TotalAcceleration.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#TotalAcceleration.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#TotalAcceleration.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#TotalAcceleration.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#TotalAcceleration.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#TotalAcceleration.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#TotalAcceleration.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#TotalAcceleration.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#TotalAcceleration.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#TotalAcceleration.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#TotalAcceleration.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#TotalAcceleration.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TotalAcceleration.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TotalAcceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TotalAcceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalAcceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TotalAcceleration.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TotalAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TotalAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TotalAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TotalAcceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TotalAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#TotalAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TotalAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#TotalAcceleration.Mode)                                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#TotalAcceleration.ReportedFrequency)                                                               | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#TotalAcceleration.DampedFrequency)                                                                   | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#TotalAcceleration.EnvironmentSelection)                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#TotalAcceleration.LogarithmicDecrement)                                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#TotalAcceleration.ModalDampingRatio)                                                               | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#TotalAcceleration.HarmonicIndex)                                                                       | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#TotalAcceleration.CyclicMode)                                                                             | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#TotalAcceleration.IterationStep)                                                                       | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#TotalAcceleration.LoadMultiplier)                                                                     | Gets the LoadMultiplier.                                               |
| [`Probability`](#TotalAcceleration.Probability)                                                                           | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#TotalAcceleration.ScaleFactorValue)                                                                 | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#TotalAcceleration.Stability)                                                                               | Gets the Stability.                                                    |
| [`CyclicPhase`](#TotalAcceleration.CyclicPhase)                                                                           | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#TotalAcceleration.SweepingPhase)                                                                       | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#TotalAcceleration.PhaseIncrement)                                                                     | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#TotalAcceleration.Frequency)                                                                               | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#TotalAcceleration.Reference)                                                                               | Gets the Reference.                                                    |
| [`ScaleFactor`](#TotalAcceleration.ScaleFactor)                                                                           | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#TotalAcceleration.AccelerationInG)                                                                   | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#TotalAcceleration.Amplitude)                                                                               | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#TotalAcceleration.AllowPhaseSweep)                                                                   | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#TotalAcceleration.PlotData)                                                                                 | Gets the result table.                                                 |
| [`Location`](#TotalAcceleration.Location)                                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#TotalAcceleration.TimeForMinimumOfMinimumValues)                                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalAcceleration.TimeForMinimumOfMaximumValues)                                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#TotalAcceleration.LoadStepForMinimumOfMinimumValues)                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalAcceleration.LoadStepForMinimumOfMaximumValues)                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#TotalAcceleration.TimeForMaximumOfMinimumValues)                                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#TotalAcceleration.TimeForMaximumOfMaximumValues)                                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#TotalAcceleration.LoadStepForMaximumOfMinimumValues)                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#TotalAcceleration.LoadStepForMaximumOfMaximumValues)                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#TotalAcceleration.IsSolved)                                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#TotalAcceleration.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalAcceleration.SetNumber)                                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#TotalAcceleration.CombinationNumber)                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#TotalAcceleration.SolutionCombinationDriver)                                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#TotalAcceleration.WaterfallPanelShowTextOnMosaic)                                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#TotalAcceleration.CrackFrontNumber)                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#TotalAcceleration.GlobalIDs)                                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#TotalAcceleration.Identifier)                                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#TotalAcceleration.IterationNumber)                                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#TotalAcceleration.LoadStep)                                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#TotalAcceleration.MaximumOccursOn)                                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#TotalAcceleration.MinimumOccursOn)                                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#TotalAcceleration.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#TotalAcceleration.SolverComponentIDs)                                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TotalAcceleration.Substep)                                                                                   | Gets the Substep.                                                      |
| [`Average`](#TotalAcceleration.Average)                                                                                   | Gets the Average.                                                      |
| [`Maximum`](#TotalAcceleration.Maximum)                                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#TotalAcceleration.MaximumOfMaximumOverTime)                                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalAcceleration.MaximumOfMinimumOverTime)                                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalAcceleration.Minimum)                                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#TotalAcceleration.MinimumOfMaximumOverTime)                                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalAcceleration.MinimumOfMinimumOverTime)                                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#TotalAcceleration.Time)                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#TotalAcceleration.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#TotalAcceleration.DisplayOption)                                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#TotalAcceleration.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#TotalAcceleration.By)                                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#TotalAcceleration.ItemType)                                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#TotalAcceleration.CalculateTimeHistory)                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#TotalAcceleration.Suppressed)                                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#TotalAcceleration.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#TotalAcceleration.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#TotalAcceleration.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#TotalAcceleration.Images)                                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#TotalAcceleration.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#TotalAcceleration.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import TotalAcceleration
```

## Property detail

### *property* TotalAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TotalAcceleration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TotalAcceleration.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TotalAcceleration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
