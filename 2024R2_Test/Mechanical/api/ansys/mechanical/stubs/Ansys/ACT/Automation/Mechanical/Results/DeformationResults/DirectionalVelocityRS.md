<a id="directionalvelocityrs"></a>

# DirectionalVelocityRS

<a id="DirectionalVelocityRS"></a>

### *class* DirectionalVelocityRS

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalVelocityRS.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalVelocityRS.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalVelocityRS.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalVelocityRS.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalVelocityRS.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalVelocityRS.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalVelocityRS.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalVelocityRS.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalVelocityRS.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalVelocityRS.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalVelocityRS.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalVelocityRS.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalVelocityRS.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalVelocityRS.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalVelocityRS.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalVelocityRS.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalVelocityRS.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalVelocityRS.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalVelocityRS.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalVelocityRS.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalVelocityRS.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalVelocityRS.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalVelocityRS.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalVelocityRS.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalVelocityRS.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalVelocityRS.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#DirectionalVelocityRS.NormalOrientation)                                                           | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#DirectionalVelocityRS.Mode)                                                                                     | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#DirectionalVelocityRS.ReportedFrequency)                                                           | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#DirectionalVelocityRS.DampedFrequency)                                                               | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#DirectionalVelocityRS.EnvironmentSelection)                                                     | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#DirectionalVelocityRS.LogarithmicDecrement)                                                     | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#DirectionalVelocityRS.ModalDampingRatio)                                                           | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#DirectionalVelocityRS.HarmonicIndex)                                                                   | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#DirectionalVelocityRS.CyclicMode)                                                                         | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#DirectionalVelocityRS.IterationStep)                                                                   | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#DirectionalVelocityRS.LoadMultiplier)                                                                 | Gets the LoadMultiplier.                                               |
| [`Probability`](#DirectionalVelocityRS.Probability)                                                                       | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#DirectionalVelocityRS.ScaleFactorValue)                                                             | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#DirectionalVelocityRS.Stability)                                                                           | Gets the Stability.                                                    |
| [`CyclicPhase`](#DirectionalVelocityRS.CyclicPhase)                                                                       | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#DirectionalVelocityRS.SweepingPhase)                                                                   | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalVelocityRS.PhaseIncrement)                                                                 | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalVelocityRS.Frequency)                                                                           | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#DirectionalVelocityRS.Reference)                                                                           | Gets the Reference.                                                    |
| [`ScaleFactor`](#DirectionalVelocityRS.ScaleFactor)                                                                       | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#DirectionalVelocityRS.AccelerationInG)                                                               | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#DirectionalVelocityRS.Amplitude)                                                                           | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#DirectionalVelocityRS.AllowPhaseSweep)                                                               | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#DirectionalVelocityRS.PlotData)                                                                             | Gets the result table.                                                 |
| [`Location`](#DirectionalVelocityRS.Location)                                                                             | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalVelocityRS.TimeForMinimumOfMinimumValues)                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalVelocityRS.TimeForMinimumOfMaximumValues)                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalVelocityRS.LoadStepForMinimumOfMinimumValues)                           | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalVelocityRS.LoadStepForMinimumOfMaximumValues)                           | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalVelocityRS.TimeForMaximumOfMinimumValues)                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalVelocityRS.TimeForMaximumOfMaximumValues)                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalVelocityRS.LoadStepForMaximumOfMinimumValues)                           | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalVelocityRS.LoadStepForMaximumOfMaximumValues)                           | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalVelocityRS.IsSolved)                                                                             | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalVelocityRS.ScopingMethod)                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalVelocityRS.SetNumber)                                                                           | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalVelocityRS.CombinationNumber)                                                           | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalVelocityRS.SolutionCombinationDriver)                                           | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalVelocityRS.WaterfallPanelShowTextOnMosaic)                                 | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalVelocityRS.CrackFrontNumber)                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalVelocityRS.GlobalIDs)                                                                           | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalVelocityRS.Identifier)                                                                         | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalVelocityRS.IterationNumber)                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalVelocityRS.LoadStep)                                                                             | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalVelocityRS.MaximumOccursOn)                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalVelocityRS.MinimumOccursOn)                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalVelocityRS.LoadStepNumber)                                                                 | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalVelocityRS.SolverComponentIDs)                                                         | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalVelocityRS.Substep)                                                                               | Gets the Substep.                                                      |
| [`Average`](#DirectionalVelocityRS.Average)                                                                               | Gets the Average.                                                      |
| [`Maximum`](#DirectionalVelocityRS.Maximum)                                                                               | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalVelocityRS.MaximumOfMaximumOverTime)                                             | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalVelocityRS.MaximumOfMinimumOverTime)                                             | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalVelocityRS.Minimum)                                                                               | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalVelocityRS.MinimumOfMaximumOverTime)                                             | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalVelocityRS.MinimumOfMinimumOverTime)                                             | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalVelocityRS.Time)                                                                                     | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalVelocityRS.DisplayTime)                                                                       | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalVelocityRS.DisplayOption)                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalVelocityRS.DpfEvaluation)                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalVelocityRS.By)                                                                                         | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalVelocityRS.ItemType)                                                                             | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalVelocityRS.CalculateTimeHistory)                                                     | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalVelocityRS.Suppressed)                                                                         | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalVelocityRS.Children)                                                                             | Gets the list of children.                                             |
| [`Comments`](#DirectionalVelocityRS.Comments)                                                                             | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalVelocityRS.Figures)                                                                               | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalVelocityRS.Images)                                                                                 | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalVelocityRS.Properties)                                                                         | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalVelocityRS.VisibleProperties)                                                           | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import DirectionalVelocityRS
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalVelocityRS.InternalObject"></a>

### *property* DirectionalVelocityRS.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.NormalOrientation"></a>

### *property* DirectionalVelocityRS.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.DataModelObjectCategory"></a>

### *property* DirectionalVelocityRS.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Mode"></a>

### *property* DirectionalVelocityRS.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.ReportedFrequency"></a>

### *property* DirectionalVelocityRS.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.DampedFrequency"></a>

### *property* DirectionalVelocityRS.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.EnvironmentSelection"></a>

### *property* DirectionalVelocityRS.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.LogarithmicDecrement"></a>

### *property* DirectionalVelocityRS.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.ModalDampingRatio"></a>

### *property* DirectionalVelocityRS.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.HarmonicIndex"></a>

### *property* DirectionalVelocityRS.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CyclicMode"></a>

### *property* DirectionalVelocityRS.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.IterationStep"></a>

### *property* DirectionalVelocityRS.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.LoadMultiplier"></a>

### *property* DirectionalVelocityRS.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Probability"></a>

### *property* DirectionalVelocityRS.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.ScaleFactorValue"></a>

### *property* DirectionalVelocityRS.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Stability"></a>

### *property* DirectionalVelocityRS.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CyclicPhase"></a>

### *property* DirectionalVelocityRS.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.SweepingPhase"></a>

### *property* DirectionalVelocityRS.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.PhaseIncrement"></a>

### *property* DirectionalVelocityRS.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Frequency"></a>

### *property* DirectionalVelocityRS.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.DeformationType"></a>

### *property* DirectionalVelocityRS.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Reference"></a>

### *property* DirectionalVelocityRS.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.ScaleFactor"></a>

### *property* DirectionalVelocityRS.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.AccelerationInG"></a>

### *property* DirectionalVelocityRS.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Amplitude"></a>

### *property* DirectionalVelocityRS.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.AllowPhaseSweep"></a>

### *property* DirectionalVelocityRS.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.PlotData"></a>

### *property* DirectionalVelocityRS.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Location"></a>

### *property* DirectionalVelocityRS.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalVelocityRS.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalVelocityRS.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalVelocityRS.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalVelocityRS.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalVelocityRS.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalVelocityRS.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalVelocityRS.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalVelocityRS.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.IsSolved"></a>

### *property* DirectionalVelocityRS.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CoordinateSystem"></a>

### *property* DirectionalVelocityRS.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.ScopingMethod"></a>

### *property* DirectionalVelocityRS.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.SetNumber"></a>

### *property* DirectionalVelocityRS.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CombinationNumber"></a>

### *property* DirectionalVelocityRS.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.SolutionCombinationDriver"></a>

### *property* DirectionalVelocityRS.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Path"></a>

### *property* DirectionalVelocityRS.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Surface"></a>

### *property* DirectionalVelocityRS.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.NamedSelections"></a>

### *property* DirectionalVelocityRS.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalVelocityRS.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CrackFrontNumber"></a>

### *property* DirectionalVelocityRS.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.GlobalIDs"></a>

### *property* DirectionalVelocityRS.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Identifier"></a>

### *property* DirectionalVelocityRS.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.IterationNumber"></a>

### *property* DirectionalVelocityRS.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.LoadStep"></a>

### *property* DirectionalVelocityRS.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.MaximumOccursOn"></a>

### *property* DirectionalVelocityRS.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.MinimumOccursOn"></a>

### *property* DirectionalVelocityRS.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.LoadStepNumber"></a>

### *property* DirectionalVelocityRS.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.SolverComponentIDs"></a>

### *property* DirectionalVelocityRS.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Substep"></a>

### *property* DirectionalVelocityRS.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Average"></a>

### *property* DirectionalVelocityRS.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Maximum"></a>

### *property* DirectionalVelocityRS.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.MaximumOfMaximumOverTime"></a>

### *property* DirectionalVelocityRS.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.MaximumOfMinimumOverTime"></a>

### *property* DirectionalVelocityRS.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Minimum"></a>

### *property* DirectionalVelocityRS.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.MinimumOfMaximumOverTime"></a>

### *property* DirectionalVelocityRS.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.MinimumOfMinimumOverTime"></a>

### *property* DirectionalVelocityRS.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Time"></a>

### *property* DirectionalVelocityRS.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.DisplayTime"></a>

### *property* DirectionalVelocityRS.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.GraphControlsXAxis"></a>

### *property* DirectionalVelocityRS.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.DisplayOption"></a>

### *property* DirectionalVelocityRS.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.DpfEvaluation"></a>

### *property* DirectionalVelocityRS.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.By"></a>

### *property* DirectionalVelocityRS.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.ItemType"></a>

### *property* DirectionalVelocityRS.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CalculateTimeHistory"></a>

### *property* DirectionalVelocityRS.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Suppressed"></a>

### *property* DirectionalVelocityRS.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Children"></a>

### *property* DirectionalVelocityRS.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Comments"></a>

### *property* DirectionalVelocityRS.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Figures"></a>

### *property* DirectionalVelocityRS.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Images"></a>

### *property* DirectionalVelocityRS.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalVelocityRS.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Properties"></a>

### *property* DirectionalVelocityRS.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.VisibleProperties"></a>

### *property* DirectionalVelocityRS.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalVelocityRS.ClearGeneratedData"></a>

### DirectionalVelocityRS.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.EvaluateAllResults"></a>

### DirectionalVelocityRS.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.FetchRemoteResults"></a>

### DirectionalVelocityRS.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.ExportToTextFile"></a>

### DirectionalVelocityRS.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.ExportAnimation"></a>

### DirectionalVelocityRS.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.DuplicateWithoutResults"></a>

### DirectionalVelocityRS.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CreateResultsAtAllSets"></a>

### DirectionalVelocityRS.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.PromoteToNamedSelection"></a>

### DirectionalVelocityRS.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CreateParameter"></a>

### DirectionalVelocityRS.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.AddAlert"></a>

### DirectionalVelocityRS.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.AddConvergence"></a>

### DirectionalVelocityRS.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.RenameBasedOnDefinition"></a>

### DirectionalVelocityRS.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Delete"></a>

### DirectionalVelocityRS.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.GetChildren"></a>

### DirectionalVelocityRS.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalVelocityRS.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.AddComment"></a>

### DirectionalVelocityRS.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.AddFigure"></a>

### DirectionalVelocityRS.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.AddImage"></a>

### DirectionalVelocityRS.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Activate"></a>

### DirectionalVelocityRS.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.CopyTo"></a>

### DirectionalVelocityRS.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.Duplicate"></a>

### DirectionalVelocityRS.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.GroupAllSimilarChildren"></a>

### DirectionalVelocityRS.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.GroupSimilarObjects"></a>

### DirectionalVelocityRS.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.PropertyByName"></a>

### DirectionalVelocityRS.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.PropertyByAPIName"></a>

### DirectionalVelocityRS.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.GetParameter"></a>

### DirectionalVelocityRS.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityRS.RemoveParameter"></a>

### DirectionalVelocityRS.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
