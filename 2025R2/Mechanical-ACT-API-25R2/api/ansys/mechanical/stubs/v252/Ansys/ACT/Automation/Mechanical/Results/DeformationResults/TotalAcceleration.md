# `TotalAcceleration`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#TotalAcceleration.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#TotalAcceleration.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#TotalAcceleration.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#TotalAcceleration.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#TotalAcceleration.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#TotalAcceleration.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#TotalAcceleration.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#TotalAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#TotalAcceleration.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#TotalAcceleration.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#TotalAcceleration.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#TotalAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#TotalAcceleration.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#TotalAcceleration.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#TotalAcceleration.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#TotalAcceleration.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#TotalAcceleration.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#TotalAcceleration.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#TotalAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#TotalAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#TotalAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#TotalAcceleration.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#TotalAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#TotalAcceleration.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#TotalAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#TotalAcceleration.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#TotalAcceleration.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationInG`](#TotalAcceleration.AccelerationInG)                                     | Gets or sets the AccelerationInG.                                        |
| [`AllowPhaseSweep`](#TotalAcceleration.AllowPhaseSweep)                                     | Gets or sets the AllowPhaseSweep.                                        |
| [`Amplitude`](#TotalAcceleration.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#TotalAcceleration.Average)                                                     | Gets the Average.                                                        |
| [`By`](#TotalAcceleration.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#TotalAcceleration.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#TotalAcceleration.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#TotalAcceleration.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#TotalAcceleration.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#TotalAcceleration.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#TotalAcceleration.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#TotalAcceleration.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`CyclicPhase`](#TotalAcceleration.CyclicPhase)                                             | Gets or sets the CyclicPhase.                                            |
| [`DampedFrequency`](#TotalAcceleration.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#TotalAcceleration.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#TotalAcceleration.DeformationType)                                     | Gets or sets the DeformationType.                                        |
| [`DisplayOption`](#TotalAcceleration.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#TotalAcceleration.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#TotalAcceleration.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#TotalAcceleration.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#TotalAcceleration.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#TotalAcceleration.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#TotalAcceleration.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#TotalAcceleration.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#TotalAcceleration.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#TotalAcceleration.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#TotalAcceleration.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#TotalAcceleration.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#TotalAcceleration.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#TotalAcceleration.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#TotalAcceleration.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#TotalAcceleration.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`LoadMultiplier`](#TotalAcceleration.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#TotalAcceleration.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#TotalAcceleration.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#TotalAcceleration.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#TotalAcceleration.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#TotalAcceleration.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#TotalAcceleration.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#TotalAcceleration.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#TotalAcceleration.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#TotalAcceleration.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#TotalAcceleration.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#TotalAcceleration.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#TotalAcceleration.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#TotalAcceleration.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#TotalAcceleration.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#TotalAcceleration.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#TotalAcceleration.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#TotalAcceleration.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#TotalAcceleration.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#TotalAcceleration.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#TotalAcceleration.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#TotalAcceleration.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#TotalAcceleration.PlotData)                                                   | Gets the result table.                                                   |
| [`Probability`](#TotalAcceleration.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#TotalAcceleration.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#TotalAcceleration.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`Reference`](#TotalAcceleration.Reference)                                                 | Gets the Reference.                                                      |
| [`ReportedFrequency`](#TotalAcceleration.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#TotalAcceleration.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#TotalAcceleration.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#TotalAcceleration.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#TotalAcceleration.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#TotalAcceleration.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#TotalAcceleration.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#TotalAcceleration.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#TotalAcceleration.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#TotalAcceleration.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#TotalAcceleration.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#TotalAcceleration.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#TotalAcceleration.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#TotalAcceleration.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#TotalAcceleration.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#TotalAcceleration.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#TotalAcceleration.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#TotalAcceleration.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#TotalAcceleration.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#TotalAcceleration.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="TotalAcceleration.AccelerationInG"></a>

### *property* TotalAcceleration.AccelerationInG *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.AllowPhaseSweep"></a>

### *property* TotalAcceleration.AllowPhaseSweep *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Amplitude"></a>

### *property* TotalAcceleration.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Average"></a>

### *property* TotalAcceleration.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.By"></a>

### *property* TotalAcceleration.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CalculateTimeHistory"></a>

### *property* TotalAcceleration.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Children"></a>

### *property* TotalAcceleration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CombinationNumber"></a>

### *property* TotalAcceleration.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Comments"></a>

### *property* TotalAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CoordinateSystem"></a>

### *property* TotalAcceleration.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CrackFrontNumber"></a>

### *property* TotalAcceleration.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CyclicMode"></a>

### *property* TotalAcceleration.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CyclicPhase"></a>

### *property* TotalAcceleration.CyclicPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.DampedFrequency"></a>

### *property* TotalAcceleration.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.DataModelObjectCategory"></a>

### *property* TotalAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.DeformationType"></a>

### *property* TotalAcceleration.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.DisplayOption"></a>

### *property* TotalAcceleration.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.DisplayTime"></a>

### *property* TotalAcceleration.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.DpfEvaluation"></a>

### *property* TotalAcceleration.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.EnvironmentSelection"></a>

### *property* TotalAcceleration.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Figures"></a>

### *property* TotalAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Frequency"></a>

### *property* TotalAcceleration.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.GlobalIDs"></a>

### *property* TotalAcceleration.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.GraphControlsXAxis"></a>

### *property* TotalAcceleration.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.HarmonicIndex"></a>

### *property* TotalAcceleration.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Identifier"></a>

### *property* TotalAcceleration.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Images"></a>

### *property* TotalAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.InternalObject"></a>

### *property* TotalAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.IsSolved"></a>

### *property* TotalAcceleration.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ItemType"></a>

### *property* TotalAcceleration.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.IterationNumber"></a>

### *property* TotalAcceleration.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.IterationStep"></a>

### *property* TotalAcceleration.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.LoadMultiplier"></a>

### *property* TotalAcceleration.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.LoadStep"></a>

### *property* TotalAcceleration.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalAcceleration.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalAcceleration.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalAcceleration.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalAcceleration.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.LoadStepNumber"></a>

### *property* TotalAcceleration.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Location"></a>

### *property* TotalAcceleration.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.LogarithmicDecrement"></a>

### *property* TotalAcceleration.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Maximum"></a>

### *property* TotalAcceleration.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.MaximumOccursOn"></a>

### *property* TotalAcceleration.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.MaximumOfMaximumOverTime"></a>

### *property* TotalAcceleration.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.MaximumOfMinimumOverTime"></a>

### *property* TotalAcceleration.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Minimum"></a>

### *property* TotalAcceleration.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.MinimumOccursOn"></a>

### *property* TotalAcceleration.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.MinimumOfMaximumOverTime"></a>

### *property* TotalAcceleration.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.MinimumOfMinimumOverTime"></a>

### *property* TotalAcceleration.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ModalDampingRatio"></a>

### *property* TotalAcceleration.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Mode"></a>

### *property* TotalAcceleration.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.NamedSelections"></a>

### *property* TotalAcceleration.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Path"></a>

### *property* TotalAcceleration.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.PhaseIncrement"></a>

### *property* TotalAcceleration.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.PlotData"></a>

### *property* TotalAcceleration.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Probability"></a>

### *property* TotalAcceleration.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Properties"></a>

### *property* TotalAcceleration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.RPMSelection"></a>

### *property* TotalAcceleration.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Reference"></a>

### *property* TotalAcceleration.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ReportedFrequency"></a>

### *property* TotalAcceleration.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ScaleFactor"></a>

### *property* TotalAcceleration.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ScaleFactorValue"></a>

### *property* TotalAcceleration.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ScopingMethod"></a>

### *property* TotalAcceleration.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.SetNumber"></a>

### *property* TotalAcceleration.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.SolutionCombinationDriver"></a>

### *property* TotalAcceleration.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.SolverComponentIDs"></a>

### *property* TotalAcceleration.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Stability"></a>

### *property* TotalAcceleration.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Substep"></a>

### *property* TotalAcceleration.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Suppressed"></a>

### *property* TotalAcceleration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Surface"></a>

### *property* TotalAcceleration.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.SurfaceCoating"></a>

### *property* TotalAcceleration.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.SweepingPhase"></a>

### *property* TotalAcceleration.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Time"></a>

### *property* TotalAcceleration.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.TimeForMaximumOfMaximumValues"></a>

### *property* TotalAcceleration.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.TimeForMaximumOfMinimumValues"></a>

### *property* TotalAcceleration.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.TimeForMinimumOfMaximumValues"></a>

### *property* TotalAcceleration.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.TimeForMinimumOfMinimumValues"></a>

### *property* TotalAcceleration.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Total"></a>

### *property* TotalAcceleration.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.VisibleProperties"></a>

### *property* TotalAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalAcceleration.Activate"></a>

### TotalAcceleration.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.AddAlert"></a>

### TotalAcceleration.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.AddComment"></a>

### TotalAcceleration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.AddConvergence"></a>

### TotalAcceleration.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.AddFigure"></a>

### TotalAcceleration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.AddImage"></a>

### TotalAcceleration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ClearGeneratedData"></a>

### TotalAcceleration.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CopyTo"></a>

### TotalAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CreateParameter"></a>

### TotalAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.CreateResultsAtAllSets"></a>

### TotalAcceleration.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Delete"></a>

### TotalAcceleration.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.Duplicate"></a>

### TotalAcceleration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.DuplicateWithoutResults"></a>

### TotalAcceleration.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.EvaluateAllResults"></a>

### TotalAcceleration.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ExportAnimation"></a>

### TotalAcceleration.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.ExportToTextFile"></a>

### TotalAcceleration.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.FetchRemoteResults"></a>

### TotalAcceleration.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.GetChildren"></a>

### TotalAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.GetParameter"></a>

### TotalAcceleration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.GroupAllSimilarChildren"></a>

### TotalAcceleration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.GroupSimilarObjects"></a>

### TotalAcceleration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.PromoteToNamedSelection"></a>

### TotalAcceleration.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.PropertyByAPIName"></a>

### TotalAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.PropertyByName"></a>

### TotalAcceleration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.RemoveParameter"></a>

### TotalAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.RenameBasedOnDefinition"></a>

### TotalAcceleration.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TotalAcceleration.RetrieveResult"></a>

### TotalAcceleration.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

