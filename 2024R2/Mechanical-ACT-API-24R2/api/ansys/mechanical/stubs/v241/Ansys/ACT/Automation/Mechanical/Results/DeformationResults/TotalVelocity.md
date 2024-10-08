# `TotalVelocity`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalVelocity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalVelocity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalVelocity.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#TotalVelocity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#TotalVelocity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#TotalVelocity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#TotalVelocity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalVelocity.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalVelocity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalVelocity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalVelocity.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#TotalVelocity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#TotalVelocity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalVelocity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#TotalVelocity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TotalVelocity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalVelocity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#TotalVelocity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#TotalVelocity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#TotalVelocity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalVelocity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalVelocity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalVelocity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#TotalVelocity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#TotalVelocity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalVelocity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalVelocity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalVelocity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`AccelerationInG`](#TotalVelocity.AccelerationInG)                                     | Gets or sets the AccelerationInG.                                      |
| [`AllowPhaseSweep`](#TotalVelocity.AllowPhaseSweep)                                     | Gets or sets the AllowPhaseSweep.                                      |
| [`Amplitude`](#TotalVelocity.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`Average`](#TotalVelocity.Average)                                                     | Gets the Average.                                                      |
| [`By`](#TotalVelocity.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#TotalVelocity.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#TotalVelocity.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#TotalVelocity.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#TotalVelocity.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#TotalVelocity.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#TotalVelocity.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`CyclicMode`](#TotalVelocity.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`CyclicPhase`](#TotalVelocity.CyclicPhase)                                             | Gets or sets the CyclicPhase.                                          |
| [`DampedFrequency`](#TotalVelocity.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`DataModelObjectCategory`](#TotalVelocity.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DeformationType`](#TotalVelocity.DeformationType)                                     | Gets or sets the DeformationType.                                      |
| [`DisplayOption`](#TotalVelocity.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#TotalVelocity.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#TotalVelocity.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`EnvironmentSelection`](#TotalVelocity.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`Figures`](#TotalVelocity.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Frequency`](#TotalVelocity.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`GlobalIDs`](#TotalVelocity.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#TotalVelocity.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`HarmonicIndex`](#TotalVelocity.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`Identifier`](#TotalVelocity.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#TotalVelocity.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#TotalVelocity.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#TotalVelocity.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#TotalVelocity.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#TotalVelocity.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`IterationStep`](#TotalVelocity.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#TotalVelocity.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#TotalVelocity.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#TotalVelocity.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#TotalVelocity.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TotalVelocity.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#TotalVelocity.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#TotalVelocity.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#TotalVelocity.Location)                                                   | Gets or sets the Location.                                             |
| [`LogarithmicDecrement`](#TotalVelocity.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`Maximum`](#TotalVelocity.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#TotalVelocity.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#TotalVelocity.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TotalVelocity.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TotalVelocity.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#TotalVelocity.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#TotalVelocity.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TotalVelocity.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`ModalDampingRatio`](#TotalVelocity.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`Mode`](#TotalVelocity.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#TotalVelocity.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#TotalVelocity.Path)                                                           | Path property.                                                         |
| [`PhaseIncrement`](#TotalVelocity.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`PlotData`](#TotalVelocity.PlotData)                                                   | Gets the result table.                                                 |
| [`Probability`](#TotalVelocity.Probability)                                             | Gets the Probability.                                                  |
| [`Properties`](#TotalVelocity.Properties)                                               | Gets the list of properties for this object.                           |
| [`Reference`](#TotalVelocity.Reference)                                                 | Gets the Reference.                                                    |
| [`ReportedFrequency`](#TotalVelocity.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`ScaleFactor`](#TotalVelocity.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`ScaleFactorValue`](#TotalVelocity.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                     |
| [`ScopingMethod`](#TotalVelocity.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TotalVelocity.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#TotalVelocity.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#TotalVelocity.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Stability`](#TotalVelocity.Stability)                                                 | Gets the Stability.                                                    |
| [`Substep`](#TotalVelocity.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#TotalVelocity.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#TotalVelocity.Surface)                                                     | Surface property.                                                      |
| [`SweepingPhase`](#TotalVelocity.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Time`](#TotalVelocity.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#TotalVelocity.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#TotalVelocity.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TotalVelocity.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#TotalVelocity.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#TotalVelocity.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#TotalVelocity.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="TotalVelocity.AccelerationInG"></a>

### *property* TotalVelocity.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.AllowPhaseSweep"></a>

### *property* TotalVelocity.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Amplitude"></a>

### *property* TotalVelocity.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Average"></a>

### *property* TotalVelocity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.By"></a>

### *property* TotalVelocity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CalculateTimeHistory"></a>

### *property* TotalVelocity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Children"></a>

### *property* TotalVelocity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CombinationNumber"></a>

### *property* TotalVelocity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Comments"></a>

### *property* TotalVelocity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CoordinateSystem"></a>

### *property* TotalVelocity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CrackFrontNumber"></a>

### *property* TotalVelocity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CyclicMode"></a>

### *property* TotalVelocity.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CyclicPhase"></a>

### *property* TotalVelocity.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.DampedFrequency"></a>

### *property* TotalVelocity.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.DataModelObjectCategory"></a>

### *property* TotalVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.DeformationType"></a>

### *property* TotalVelocity.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.DisplayOption"></a>

### *property* TotalVelocity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.DisplayTime"></a>

### *property* TotalVelocity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.DpfEvaluation"></a>

### *property* TotalVelocity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.EnvironmentSelection"></a>

### *property* TotalVelocity.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Figures"></a>

### *property* TotalVelocity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Frequency"></a>

### *property* TotalVelocity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.GlobalIDs"></a>

### *property* TotalVelocity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.GraphControlsXAxis"></a>

### *property* TotalVelocity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.HarmonicIndex"></a>

### *property* TotalVelocity.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Identifier"></a>

### *property* TotalVelocity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Images"></a>

### *property* TotalVelocity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.InternalObject"></a>

### *property* TotalVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.IsSolved"></a>

### *property* TotalVelocity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ItemType"></a>

### *property* TotalVelocity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.IterationNumber"></a>

### *property* TotalVelocity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.IterationStep"></a>

### *property* TotalVelocity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.LoadMultiplier"></a>

### *property* TotalVelocity.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.LoadStep"></a>

### *property* TotalVelocity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalVelocity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalVelocity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalVelocity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalVelocity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.LoadStepNumber"></a>

### *property* TotalVelocity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Location"></a>

### *property* TotalVelocity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.LogarithmicDecrement"></a>

### *property* TotalVelocity.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Maximum"></a>

### *property* TotalVelocity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.MaximumOccursOn"></a>

### *property* TotalVelocity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.MaximumOfMaximumOverTime"></a>

### *property* TotalVelocity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.MaximumOfMinimumOverTime"></a>

### *property* TotalVelocity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Minimum"></a>

### *property* TotalVelocity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.MinimumOccursOn"></a>

### *property* TotalVelocity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.MinimumOfMaximumOverTime"></a>

### *property* TotalVelocity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.MinimumOfMinimumOverTime"></a>

### *property* TotalVelocity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ModalDampingRatio"></a>

### *property* TotalVelocity.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Mode"></a>

### *property* TotalVelocity.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.NamedSelections"></a>

### *property* TotalVelocity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Path"></a>

### *property* TotalVelocity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.PhaseIncrement"></a>

### *property* TotalVelocity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.PlotData"></a>

### *property* TotalVelocity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Probability"></a>

### *property* TotalVelocity.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Properties"></a>

### *property* TotalVelocity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Reference"></a>

### *property* TotalVelocity.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ReportedFrequency"></a>

### *property* TotalVelocity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ScaleFactor"></a>

### *property* TotalVelocity.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ScaleFactorValue"></a>

### *property* TotalVelocity.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ScopingMethod"></a>

### *property* TotalVelocity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.SetNumber"></a>

### *property* TotalVelocity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.SolutionCombinationDriver"></a>

### *property* TotalVelocity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.SolverComponentIDs"></a>

### *property* TotalVelocity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Stability"></a>

### *property* TotalVelocity.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Substep"></a>

### *property* TotalVelocity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Suppressed"></a>

### *property* TotalVelocity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Surface"></a>

### *property* TotalVelocity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.SweepingPhase"></a>

### *property* TotalVelocity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Time"></a>

### *property* TotalVelocity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.TimeForMaximumOfMaximumValues"></a>

### *property* TotalVelocity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.TimeForMaximumOfMinimumValues"></a>

### *property* TotalVelocity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.TimeForMinimumOfMaximumValues"></a>

### *property* TotalVelocity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.TimeForMinimumOfMinimumValues"></a>

### *property* TotalVelocity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.VisibleProperties"></a>

### *property* TotalVelocity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.WaterfallPanelShowTextOnMosaic"></a>

### *property* TotalVelocity.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalVelocity.Activate"></a>

### TotalVelocity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.AddAlert"></a>

### TotalVelocity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.AddComment"></a>

### TotalVelocity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.AddConvergence"></a>

### TotalVelocity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.AddFigure"></a>

### TotalVelocity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.AddImage"></a>

### TotalVelocity.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ClearGeneratedData"></a>

### TotalVelocity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CopyTo"></a>

### TotalVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CreateParameter"></a>

### TotalVelocity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.CreateResultsAtAllSets"></a>

### TotalVelocity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Delete"></a>

### TotalVelocity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.Duplicate"></a>

### TotalVelocity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.DuplicateWithoutResults"></a>

### TotalVelocity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.EvaluateAllResults"></a>

### TotalVelocity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ExportAnimation"></a>

### TotalVelocity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.ExportToTextFile"></a>

### TotalVelocity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.FetchRemoteResults"></a>

### TotalVelocity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.GetChildren"></a>

### TotalVelocity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.GetParameter"></a>

### TotalVelocity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.GroupAllSimilarChildren"></a>

### TotalVelocity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.GroupSimilarObjects"></a>

### TotalVelocity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.PromoteToNamedSelection"></a>

### TotalVelocity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.PropertyByAPIName"></a>

### TotalVelocity.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.PropertyByName"></a>

### TotalVelocity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.RemoveParameter"></a>

### TotalVelocity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalVelocity.RenameBasedOnDefinition"></a>

### TotalVelocity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

