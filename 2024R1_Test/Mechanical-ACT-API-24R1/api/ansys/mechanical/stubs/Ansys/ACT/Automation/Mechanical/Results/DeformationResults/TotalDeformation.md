# TotalDeformation

<a id="TotalDeformation"></a>

### *class* TotalDeformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TotalDeformation.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#TotalDeformation.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#TotalDeformation.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#TotalDeformation.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#TotalDeformation.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#TotalDeformation.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#TotalDeformation.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#TotalDeformation.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#TotalDeformation.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#TotalDeformation.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#TotalDeformation.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#TotalDeformation.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#TotalDeformation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TotalDeformation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TotalDeformation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TotalDeformation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalDeformation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TotalDeformation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TotalDeformation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TotalDeformation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TotalDeformation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalDeformation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TotalDeformation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TotalDeformation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#TotalDeformation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TotalDeformation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#TotalDeformation.Mode)                                                                                          | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#TotalDeformation.ReportedFrequency)                                                                | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#TotalDeformation.DampedFrequency)                                                                    | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#TotalDeformation.EnvironmentSelection)                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#TotalDeformation.LogarithmicDecrement)                                                          | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#TotalDeformation.ModalDampingRatio)                                                                | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#TotalDeformation.HarmonicIndex)                                                                        | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#TotalDeformation.CyclicMode)                                                                              | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#TotalDeformation.IterationStep)                                                                        | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#TotalDeformation.LoadMultiplier)                                                                      | Gets the LoadMultiplier.                                               |
| [`Probability`](#TotalDeformation.Probability)                                                                            | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#TotalDeformation.ScaleFactorValue)                                                                  | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#TotalDeformation.Stability)                                                                                | Gets the Stability.                                                    |
| [`CyclicPhase`](#TotalDeformation.CyclicPhase)                                                                            | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#TotalDeformation.SweepingPhase)                                                                        | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#TotalDeformation.PhaseIncrement)                                                                      | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#TotalDeformation.Frequency)                                                                                | Gets or sets the Frequency.                                            |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                                      |
| [`Reference`](#TotalDeformation.Reference)                                                                                | Gets the Reference.                                                    |
| [`ScaleFactor`](#TotalDeformation.ScaleFactor)                                                                            | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#TotalDeformation.AccelerationInG)                                                                    | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#TotalDeformation.Amplitude)                                                                                | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#TotalDeformation.AllowPhaseSweep)                                                                    | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#TotalDeformation.PlotData)                                                                                  | Gets the result table.                                                 |
| [`Location`](#TotalDeformation.Location)                                                                                  | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#TotalDeformation.TimeForMinimumOfMinimumValues)                                        | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalDeformation.TimeForMinimumOfMaximumValues)                                        | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#TotalDeformation.LoadStepForMinimumOfMinimumValues)                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalDeformation.LoadStepForMinimumOfMaximumValues)                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#TotalDeformation.TimeForMaximumOfMinimumValues)                                        | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#TotalDeformation.TimeForMaximumOfMaximumValues)                                        | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#TotalDeformation.LoadStepForMaximumOfMinimumValues)                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#TotalDeformation.LoadStepForMaximumOfMaximumValues)                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#TotalDeformation.IsSolved)                                                                                  | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#TotalDeformation.ScopingMethod)                                                                        | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalDeformation.SetNumber)                                                                                | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#TotalDeformation.CombinationNumber)                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#TotalDeformation.SolutionCombinationDriver)                                                | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#TotalDeformation.WaterfallPanelShowTextOnMosaic)                                      | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#TotalDeformation.CrackFrontNumber)                                                                  | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#TotalDeformation.GlobalIDs)                                                                                | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#TotalDeformation.Identifier)                                                                              | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#TotalDeformation.IterationNumber)                                                                    | Gets the IterationNumber.                                              |
| [`LoadStep`](#TotalDeformation.LoadStep)                                                                                  | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#TotalDeformation.MaximumOccursOn)                                                                    | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#TotalDeformation.MinimumOccursOn)                                                                    | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#TotalDeformation.LoadStepNumber)                                                                      | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#TotalDeformation.SolverComponentIDs)                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TotalDeformation.Substep)                                                                                    | Gets the Substep.                                                      |
| [`Average`](#TotalDeformation.Average)                                                                                    | Gets the Average.                                                      |
| [`Maximum`](#TotalDeformation.Maximum)                                                                                    | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#TotalDeformation.MaximumOfMaximumOverTime)                                                  | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalDeformation.MaximumOfMinimumOverTime)                                                  | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalDeformation.Minimum)                                                                                    | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#TotalDeformation.MinimumOfMaximumOverTime)                                                  | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalDeformation.MinimumOfMinimumOverTime)                                                  | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#TotalDeformation.Time)                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#TotalDeformation.DisplayTime)                                                                            | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#TotalDeformation.DisplayOption)                                                                        | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#TotalDeformation.DpfEvaluation)                                                                        | Gets or sets the DpfEvaluation.                                        |
| [`By`](#TotalDeformation.By)                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#TotalDeformation.ItemType)                                                                                  | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#TotalDeformation.CalculateTimeHistory)                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#TotalDeformation.Suppressed)                                                                              | Gets or sets the Suppressed.                                           |
| [`Children`](#TotalDeformation.Children)                                                                                  | Gets the list of children.                                             |
| [`Comments`](#TotalDeformation.Comments)                                                                                  | Gets the list of associated comments.                                  |
| [`Figures`](#TotalDeformation.Figures)                                                                                    | Gets the list of associated figures.                                   |
| [`Images`](#TotalDeformation.Images)                                                                                      | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#TotalDeformation.Properties)                                                                              | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#TotalDeformation.VisibleProperties)                                                                | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.DeformationResults import TotalDeformation
```

<a id="property-detail"></a>

## Property detail

<a id="TotalDeformation.InternalObject"></a>

### *property* TotalDeformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DataModelObjectCategory"></a>

### *property* TotalDeformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Mode"></a>

### *property* TotalDeformation.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ReportedFrequency"></a>

### *property* TotalDeformation.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DampedFrequency"></a>

### *property* TotalDeformation.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.EnvironmentSelection"></a>

### *property* TotalDeformation.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LogarithmicDecrement"></a>

### *property* TotalDeformation.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ModalDampingRatio"></a>

### *property* TotalDeformation.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.HarmonicIndex"></a>

### *property* TotalDeformation.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CyclicMode"></a>

### *property* TotalDeformation.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IterationStep"></a>

### *property* TotalDeformation.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadMultiplier"></a>

### *property* TotalDeformation.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Probability"></a>

### *property* TotalDeformation.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScaleFactorValue"></a>

### *property* TotalDeformation.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Stability"></a>

### *property* TotalDeformation.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CyclicPhase"></a>

### *property* TotalDeformation.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SweepingPhase"></a>

### *property* TotalDeformation.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PhaseIncrement"></a>

### *property* TotalDeformation.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Frequency"></a>

### *property* TotalDeformation.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DeformationType"></a>

### *property* TotalDeformation.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Reference"></a>

### *property* TotalDeformation.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScaleFactor"></a>

### *property* TotalDeformation.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AccelerationInG"></a>

### *property* TotalDeformation.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Amplitude"></a>

### *property* TotalDeformation.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AllowPhaseSweep"></a>

### *property* TotalDeformation.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PlotData"></a>

### *property* TotalDeformation.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Location"></a>

### *property* TotalDeformation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMinimumOfMinimumValues"></a>

### *property* TotalDeformation.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMinimumOfMaximumValues"></a>

### *property* TotalDeformation.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalDeformation.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalDeformation.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMaximumOfMinimumValues"></a>

### *property* TotalDeformation.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMaximumOfMaximumValues"></a>

### *property* TotalDeformation.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalDeformation.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalDeformation.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IsSolved"></a>

### *property* TotalDeformation.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CoordinateSystem"></a>

### *property* TotalDeformation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScopingMethod"></a>

### *property* TotalDeformation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SetNumber"></a>

### *property* TotalDeformation.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CombinationNumber"></a>

### *property* TotalDeformation.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SolutionCombinationDriver"></a>

### *property* TotalDeformation.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Path"></a>

### *property* TotalDeformation.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Surface"></a>

### *property* TotalDeformation.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.NamedSelections"></a>

### *property* TotalDeformation.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.WaterfallPanelShowTextOnMosaic"></a>

### *property* TotalDeformation.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CrackFrontNumber"></a>

### *property* TotalDeformation.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GlobalIDs"></a>

### *property* TotalDeformation.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Identifier"></a>

### *property* TotalDeformation.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IterationNumber"></a>

### *property* TotalDeformation.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStep"></a>

### *property* TotalDeformation.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOccursOn"></a>

### *property* TotalDeformation.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOccursOn"></a>

### *property* TotalDeformation.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepNumber"></a>

### *property* TotalDeformation.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SolverComponentIDs"></a>

### *property* TotalDeformation.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Substep"></a>

### *property* TotalDeformation.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Average"></a>

### *property* TotalDeformation.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Maximum"></a>

### *property* TotalDeformation.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOfMaximumOverTime"></a>

### *property* TotalDeformation.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOfMinimumOverTime"></a>

### *property* TotalDeformation.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Minimum"></a>

### *property* TotalDeformation.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOfMaximumOverTime"></a>

### *property* TotalDeformation.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOfMinimumOverTime"></a>

### *property* TotalDeformation.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Time"></a>

### *property* TotalDeformation.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DisplayTime"></a>

### *property* TotalDeformation.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GraphControlsXAxis"></a>

### *property* TotalDeformation.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DisplayOption"></a>

### *property* TotalDeformation.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DpfEvaluation"></a>

### *property* TotalDeformation.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.By"></a>

### *property* TotalDeformation.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ItemType"></a>

### *property* TotalDeformation.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CalculateTimeHistory"></a>

### *property* TotalDeformation.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Suppressed"></a>

### *property* TotalDeformation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Children"></a>

### *property* TotalDeformation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Comments"></a>

### *property* TotalDeformation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Figures"></a>

### *property* TotalDeformation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Images"></a>

### *property* TotalDeformation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TotalDeformation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Properties"></a>

### *property* TotalDeformation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.VisibleProperties"></a>

### *property* TotalDeformation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalDeformation.ClearGeneratedData"></a>

### TotalDeformation.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.EvaluateAllResults"></a>

### TotalDeformation.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.FetchRemoteResults"></a>

### TotalDeformation.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ExportToTextFile"></a>

### TotalDeformation.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ExportAnimation"></a>

### TotalDeformation.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DuplicateWithoutResults"></a>

### TotalDeformation.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CreateResultsAtAllSets"></a>

### TotalDeformation.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PromoteToNamedSelection"></a>

### TotalDeformation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CreateParameter"></a>

### TotalDeformation.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddAlert"></a>

### TotalDeformation.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddConvergence"></a>

### TotalDeformation.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.RenameBasedOnDefinition"></a>

### TotalDeformation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Delete"></a>

### TotalDeformation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GetChildren"></a>

### TotalDeformation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TotalDeformation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddComment"></a>

### TotalDeformation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddFigure"></a>

### TotalDeformation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddImage"></a>

### TotalDeformation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Activate"></a>

### TotalDeformation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CopyTo"></a>

### TotalDeformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Duplicate"></a>

### TotalDeformation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GroupAllSimilarChildren"></a>

### TotalDeformation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GroupSimilarObjects"></a>

### TotalDeformation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PropertyByName"></a>

### TotalDeformation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PropertyByAPIName"></a>

### TotalDeformation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GetParameter"></a>

### TotalDeformation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.RemoveParameter"></a>

### TotalDeformation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
