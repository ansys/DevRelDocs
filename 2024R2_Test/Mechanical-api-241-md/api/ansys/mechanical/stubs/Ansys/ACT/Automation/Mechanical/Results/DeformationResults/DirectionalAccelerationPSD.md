<a id="directionalaccelerationpsd"></a>

# DirectionalAccelerationPSD

<a id="DirectionalAccelerationPSD"></a>

### *class* DirectionalAccelerationPSD

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalAccelerationPSD.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ClearGeneratedData`](#DirectionalAccelerationPSD.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#DirectionalAccelerationPSD.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalAccelerationPSD.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalAccelerationPSD.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalAccelerationPSD.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalAccelerationPSD.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalAccelerationPSD.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalAccelerationPSD.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalAccelerationPSD.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalAccelerationPSD.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalAccelerationPSD.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalAccelerationPSD.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalAccelerationPSD.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalAccelerationPSD.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalAccelerationPSD.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalAccelerationPSD.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalAccelerationPSD.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalAccelerationPSD.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalAccelerationPSD.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalAccelerationPSD.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalAccelerationPSD.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalAccelerationPSD.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalAccelerationPSD.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalAccelerationPSD.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalAccelerationPSD.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`NormalOrientation`](#DirectionalAccelerationPSD.NormalOrientation)                                                      | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#DirectionalAccelerationPSD.Mode)                                                                                | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#DirectionalAccelerationPSD.ReportedFrequency)                                                      | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#DirectionalAccelerationPSD.DampedFrequency)                                                          | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#DirectionalAccelerationPSD.EnvironmentSelection)                                                | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#DirectionalAccelerationPSD.LogarithmicDecrement)                                                | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#DirectionalAccelerationPSD.ModalDampingRatio)                                                      | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#DirectionalAccelerationPSD.HarmonicIndex)                                                              | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#DirectionalAccelerationPSD.CyclicMode)                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#DirectionalAccelerationPSD.IterationStep)                                                              | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#DirectionalAccelerationPSD.LoadMultiplier)                                                            | Gets the LoadMultiplier.                                               |
| [`Probability`](#DirectionalAccelerationPSD.Probability)                                                                  | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#DirectionalAccelerationPSD.ScaleFactorValue)                                                        | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#DirectionalAccelerationPSD.Stability)                                                                      | Gets the Stability.                                                    |
| [`CyclicPhase`](#DirectionalAccelerationPSD.CyclicPhase)                                                                  | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#DirectionalAccelerationPSD.SweepingPhase)                                                              | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalAccelerationPSD.PhaseIncrement)                                                            | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalAccelerationPSD.Frequency)                                                                      | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#DirectionalAccelerationPSD.Reference)                                                                      | Gets the Reference.                                                    |
| [`ScaleFactor`](#DirectionalAccelerationPSD.ScaleFactor)                                                                  | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#DirectionalAccelerationPSD.AccelerationInG)                                                          | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#DirectionalAccelerationPSD.Amplitude)                                                                      | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#DirectionalAccelerationPSD.AllowPhaseSweep)                                                          | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#DirectionalAccelerationPSD.PlotData)                                                                        | Gets the result table.                                                 |
| [`Location`](#DirectionalAccelerationPSD.Location)                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalAccelerationPSD.TimeForMinimumOfMinimumValues)                              | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalAccelerationPSD.TimeForMinimumOfMaximumValues)                              | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalAccelerationPSD.LoadStepForMinimumOfMinimumValues)                      | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalAccelerationPSD.LoadStepForMinimumOfMaximumValues)                      | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalAccelerationPSD.TimeForMaximumOfMinimumValues)                              | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalAccelerationPSD.TimeForMaximumOfMaximumValues)                              | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalAccelerationPSD.LoadStepForMaximumOfMinimumValues)                      | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalAccelerationPSD.LoadStepForMaximumOfMaximumValues)                      | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalAccelerationPSD.IsSolved)                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalAccelerationPSD.ScopingMethod)                                                              | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalAccelerationPSD.SetNumber)                                                                      | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalAccelerationPSD.CombinationNumber)                                                      | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalAccelerationPSD.SolutionCombinationDriver)                                      | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalAccelerationPSD.WaterfallPanelShowTextOnMosaic)                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalAccelerationPSD.CrackFrontNumber)                                                        | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalAccelerationPSD.GlobalIDs)                                                                      | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalAccelerationPSD.Identifier)                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalAccelerationPSD.IterationNumber)                                                          | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalAccelerationPSD.LoadStep)                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalAccelerationPSD.MaximumOccursOn)                                                          | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalAccelerationPSD.MinimumOccursOn)                                                          | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalAccelerationPSD.LoadStepNumber)                                                            | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalAccelerationPSD.SolverComponentIDs)                                                    | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalAccelerationPSD.Substep)                                                                          | Gets the Substep.                                                      |
| [`Average`](#DirectionalAccelerationPSD.Average)                                                                          | Gets the Average.                                                      |
| [`Maximum`](#DirectionalAccelerationPSD.Maximum)                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalAccelerationPSD.MaximumOfMaximumOverTime)                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalAccelerationPSD.MaximumOfMinimumOverTime)                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalAccelerationPSD.Minimum)                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalAccelerationPSD.MinimumOfMaximumOverTime)                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalAccelerationPSD.MinimumOfMinimumOverTime)                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalAccelerationPSD.Time)                                                                                | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalAccelerationPSD.DisplayTime)                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalAccelerationPSD.DisplayOption)                                                              | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalAccelerationPSD.DpfEvaluation)                                                              | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalAccelerationPSD.By)                                                                                    | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalAccelerationPSD.ItemType)                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalAccelerationPSD.CalculateTimeHistory)                                                | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalAccelerationPSD.Suppressed)                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalAccelerationPSD.Children)                                                                        | Gets the list of children.                                             |
| [`Comments`](#DirectionalAccelerationPSD.Comments)                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalAccelerationPSD.Figures)                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalAccelerationPSD.Images)                                                                            | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalAccelerationPSD.Properties)                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalAccelerationPSD.VisibleProperties)                                                      | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalAccelerationPSD
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalAccelerationPSD.InternalObject"></a>

### *property* DirectionalAccelerationPSD.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.NormalOrientation"></a>

### *property* DirectionalAccelerationPSD.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DataModelObjectCategory"></a>

### *property* DirectionalAccelerationPSD.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Mode"></a>

### *property* DirectionalAccelerationPSD.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ReportedFrequency"></a>

### *property* DirectionalAccelerationPSD.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DampedFrequency"></a>

### *property* DirectionalAccelerationPSD.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.EnvironmentSelection"></a>

### *property* DirectionalAccelerationPSD.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LogarithmicDecrement"></a>

### *property* DirectionalAccelerationPSD.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ModalDampingRatio"></a>

### *property* DirectionalAccelerationPSD.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.HarmonicIndex"></a>

### *property* DirectionalAccelerationPSD.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CyclicMode"></a>

### *property* DirectionalAccelerationPSD.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.IterationStep"></a>

### *property* DirectionalAccelerationPSD.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadMultiplier"></a>

### *property* DirectionalAccelerationPSD.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Probability"></a>

### *property* DirectionalAccelerationPSD.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ScaleFactorValue"></a>

### *property* DirectionalAccelerationPSD.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Stability"></a>

### *property* DirectionalAccelerationPSD.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CyclicPhase"></a>

### *property* DirectionalAccelerationPSD.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.SweepingPhase"></a>

### *property* DirectionalAccelerationPSD.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PhaseIncrement"></a>

### *property* DirectionalAccelerationPSD.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Frequency"></a>

### *property* DirectionalAccelerationPSD.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DeformationType"></a>

### *property* DirectionalAccelerationPSD.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Reference"></a>

### *property* DirectionalAccelerationPSD.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ScaleFactor"></a>

### *property* DirectionalAccelerationPSD.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AccelerationInG"></a>

### *property* DirectionalAccelerationPSD.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Amplitude"></a>

### *property* DirectionalAccelerationPSD.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AllowPhaseSweep"></a>

### *property* DirectionalAccelerationPSD.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PlotData"></a>

### *property* DirectionalAccelerationPSD.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Location"></a>

### *property* DirectionalAccelerationPSD.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalAccelerationPSD.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalAccelerationPSD.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalAccelerationPSD.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalAccelerationPSD.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalAccelerationPSD.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalAccelerationPSD.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalAccelerationPSD.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalAccelerationPSD.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.IsSolved"></a>

### *property* DirectionalAccelerationPSD.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CoordinateSystem"></a>

### *property* DirectionalAccelerationPSD.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ScopingMethod"></a>

### *property* DirectionalAccelerationPSD.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.SetNumber"></a>

### *property* DirectionalAccelerationPSD.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CombinationNumber"></a>

### *property* DirectionalAccelerationPSD.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.SolutionCombinationDriver"></a>

### *property* DirectionalAccelerationPSD.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Path"></a>

### *property* DirectionalAccelerationPSD.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Surface"></a>

### *property* DirectionalAccelerationPSD.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.NamedSelections"></a>

### *property* DirectionalAccelerationPSD.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalAccelerationPSD.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CrackFrontNumber"></a>

### *property* DirectionalAccelerationPSD.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GlobalIDs"></a>

### *property* DirectionalAccelerationPSD.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Identifier"></a>

### *property* DirectionalAccelerationPSD.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.IterationNumber"></a>

### *property* DirectionalAccelerationPSD.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStep"></a>

### *property* DirectionalAccelerationPSD.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MaximumOccursOn"></a>

### *property* DirectionalAccelerationPSD.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MinimumOccursOn"></a>

### *property* DirectionalAccelerationPSD.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.LoadStepNumber"></a>

### *property* DirectionalAccelerationPSD.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.SolverComponentIDs"></a>

### *property* DirectionalAccelerationPSD.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Substep"></a>

### *property* DirectionalAccelerationPSD.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Average"></a>

### *property* DirectionalAccelerationPSD.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Maximum"></a>

### *property* DirectionalAccelerationPSD.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MaximumOfMaximumOverTime"></a>

### *property* DirectionalAccelerationPSD.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MaximumOfMinimumOverTime"></a>

### *property* DirectionalAccelerationPSD.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Minimum"></a>

### *property* DirectionalAccelerationPSD.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MinimumOfMaximumOverTime"></a>

### *property* DirectionalAccelerationPSD.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.MinimumOfMinimumOverTime"></a>

### *property* DirectionalAccelerationPSD.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Time"></a>

### *property* DirectionalAccelerationPSD.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DisplayTime"></a>

### *property* DirectionalAccelerationPSD.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GraphControlsXAxis"></a>

### *property* DirectionalAccelerationPSD.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DisplayOption"></a>

### *property* DirectionalAccelerationPSD.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DpfEvaluation"></a>

### *property* DirectionalAccelerationPSD.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.By"></a>

### *property* DirectionalAccelerationPSD.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ItemType"></a>

### *property* DirectionalAccelerationPSD.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CalculateTimeHistory"></a>

### *property* DirectionalAccelerationPSD.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Suppressed"></a>

### *property* DirectionalAccelerationPSD.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Children"></a>

### *property* DirectionalAccelerationPSD.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Comments"></a>

### *property* DirectionalAccelerationPSD.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Figures"></a>

### *property* DirectionalAccelerationPSD.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Images"></a>

### *property* DirectionalAccelerationPSD.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalAccelerationPSD.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Properties"></a>

### *property* DirectionalAccelerationPSD.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.VisibleProperties"></a>

### *property* DirectionalAccelerationPSD.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalAccelerationPSD.ClearGeneratedData"></a>

### DirectionalAccelerationPSD.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.EvaluateAllResults"></a>

### DirectionalAccelerationPSD.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.FetchRemoteResults"></a>

### DirectionalAccelerationPSD.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ExportToTextFile"></a>

### DirectionalAccelerationPSD.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.ExportAnimation"></a>

### DirectionalAccelerationPSD.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.DuplicateWithoutResults"></a>

### DirectionalAccelerationPSD.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CreateResultsAtAllSets"></a>

### DirectionalAccelerationPSD.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PromoteToNamedSelection"></a>

### DirectionalAccelerationPSD.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CreateParameter"></a>

### DirectionalAccelerationPSD.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddAlert"></a>

### DirectionalAccelerationPSD.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddConvergence"></a>

### DirectionalAccelerationPSD.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.RenameBasedOnDefinition"></a>

### DirectionalAccelerationPSD.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Delete"></a>

### DirectionalAccelerationPSD.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GetChildren"></a>

### DirectionalAccelerationPSD.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalAccelerationPSD.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddComment"></a>

### DirectionalAccelerationPSD.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddFigure"></a>

### DirectionalAccelerationPSD.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.AddImage"></a>

### DirectionalAccelerationPSD.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Activate"></a>

### DirectionalAccelerationPSD.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.CopyTo"></a>

### DirectionalAccelerationPSD.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.Duplicate"></a>

### DirectionalAccelerationPSD.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GroupAllSimilarChildren"></a>

### DirectionalAccelerationPSD.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GroupSimilarObjects"></a>

### DirectionalAccelerationPSD.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PropertyByName"></a>

### DirectionalAccelerationPSD.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.PropertyByAPIName"></a>

### DirectionalAccelerationPSD.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.GetParameter"></a>

### DirectionalAccelerationPSD.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationPSD.RemoveParameter"></a>

### DirectionalAccelerationPSD.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
