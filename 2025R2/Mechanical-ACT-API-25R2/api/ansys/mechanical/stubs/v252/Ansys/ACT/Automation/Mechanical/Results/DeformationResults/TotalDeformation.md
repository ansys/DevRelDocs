# `TotalDeformation`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalDeformation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalDeformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalDeformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#TotalDeformation.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#TotalDeformation.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#TotalDeformation.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#TotalDeformation.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#TotalDeformation.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#TotalDeformation.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#TotalDeformation.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#TotalDeformation.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#TotalDeformation.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#TotalDeformation.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#TotalDeformation.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#TotalDeformation.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#TotalDeformation.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#TotalDeformation.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#TotalDeformation.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#TotalDeformation.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#TotalDeformation.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#TotalDeformation.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#TotalDeformation.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#TotalDeformation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#TotalDeformation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#TotalDeformation.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#TotalDeformation.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#TotalDeformation.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#TotalDeformation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#TotalDeformation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#TotalDeformation.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationInG`](#TotalDeformation.AccelerationInG)                                     | Gets or sets the AccelerationInG.                                        |
| [`AllowPhaseSweep`](#TotalDeformation.AllowPhaseSweep)                                     | Gets or sets the AllowPhaseSweep.                                        |
| [`Amplitude`](#TotalDeformation.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#TotalDeformation.Average)                                                     | Gets the Average.                                                        |
| [`By`](#TotalDeformation.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#TotalDeformation.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#TotalDeformation.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#TotalDeformation.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#TotalDeformation.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#TotalDeformation.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#TotalDeformation.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#TotalDeformation.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`CyclicPhase`](#TotalDeformation.CyclicPhase)                                             | Gets or sets the CyclicPhase.                                            |
| [`DampedFrequency`](#TotalDeformation.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#TotalDeformation.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#TotalDeformation.DeformationType)                                     | Gets or sets the DeformationType.                                        |
| [`DisplayOption`](#TotalDeformation.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#TotalDeformation.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#TotalDeformation.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#TotalDeformation.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#TotalDeformation.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#TotalDeformation.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#TotalDeformation.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#TotalDeformation.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#TotalDeformation.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#TotalDeformation.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#TotalDeformation.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#TotalDeformation.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#TotalDeformation.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#TotalDeformation.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#TotalDeformation.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#TotalDeformation.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`LoadMultiplier`](#TotalDeformation.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#TotalDeformation.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#TotalDeformation.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#TotalDeformation.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#TotalDeformation.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#TotalDeformation.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#TotalDeformation.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#TotalDeformation.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#TotalDeformation.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#TotalDeformation.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#TotalDeformation.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#TotalDeformation.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#TotalDeformation.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#TotalDeformation.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#TotalDeformation.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#TotalDeformation.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#TotalDeformation.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#TotalDeformation.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#TotalDeformation.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#TotalDeformation.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#TotalDeformation.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#TotalDeformation.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#TotalDeformation.PlotData)                                                   | Gets the result table.                                                   |
| [`Probability`](#TotalDeformation.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#TotalDeformation.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#TotalDeformation.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`Reference`](#TotalDeformation.Reference)                                                 | Gets the Reference.                                                      |
| [`ReportedFrequency`](#TotalDeformation.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#TotalDeformation.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#TotalDeformation.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#TotalDeformation.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#TotalDeformation.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#TotalDeformation.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#TotalDeformation.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#TotalDeformation.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#TotalDeformation.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#TotalDeformation.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#TotalDeformation.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#TotalDeformation.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#TotalDeformation.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#TotalDeformation.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#TotalDeformation.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#TotalDeformation.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#TotalDeformation.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#TotalDeformation.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#TotalDeformation.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#TotalDeformation.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="TotalDeformation.AccelerationInG"></a>

### *property* TotalDeformation.AccelerationInG *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AllowPhaseSweep"></a>

### *property* TotalDeformation.AllowPhaseSweep *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Amplitude"></a>

### *property* TotalDeformation.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Average"></a>

### *property* TotalDeformation.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.By"></a>

### *property* TotalDeformation.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CalculateTimeHistory"></a>

### *property* TotalDeformation.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Children"></a>

### *property* TotalDeformation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CombinationNumber"></a>

### *property* TotalDeformation.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Comments"></a>

### *property* TotalDeformation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CoordinateSystem"></a>

### *property* TotalDeformation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CrackFrontNumber"></a>

### *property* TotalDeformation.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CyclicMode"></a>

### *property* TotalDeformation.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CyclicPhase"></a>

### *property* TotalDeformation.CyclicPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DampedFrequency"></a>

### *property* TotalDeformation.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DataModelObjectCategory"></a>

### *property* TotalDeformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DeformationType"></a>

### *property* TotalDeformation.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DisplayOption"></a>

### *property* TotalDeformation.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DisplayTime"></a>

### *property* TotalDeformation.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DpfEvaluation"></a>

### *property* TotalDeformation.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.EnvironmentSelection"></a>

### *property* TotalDeformation.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Figures"></a>

### *property* TotalDeformation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Frequency"></a>

### *property* TotalDeformation.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GlobalIDs"></a>

### *property* TotalDeformation.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GraphControlsXAxis"></a>

### *property* TotalDeformation.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.HarmonicIndex"></a>

### *property* TotalDeformation.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Identifier"></a>

### *property* TotalDeformation.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Images"></a>

### *property* TotalDeformation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.InternalObject"></a>

### *property* TotalDeformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IsSolved"></a>

### *property* TotalDeformation.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ItemType"></a>

### *property* TotalDeformation.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IterationNumber"></a>

### *property* TotalDeformation.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.IterationStep"></a>

### *property* TotalDeformation.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadMultiplier"></a>

### *property* TotalDeformation.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStep"></a>

### *property* TotalDeformation.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalDeformation.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalDeformation.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalDeformation.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalDeformation.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LoadStepNumber"></a>

### *property* TotalDeformation.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Location"></a>

### *property* TotalDeformation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.LogarithmicDecrement"></a>

### *property* TotalDeformation.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Maximum"></a>

### *property* TotalDeformation.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOccursOn"></a>

### *property* TotalDeformation.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOfMaximumOverTime"></a>

### *property* TotalDeformation.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MaximumOfMinimumOverTime"></a>

### *property* TotalDeformation.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Minimum"></a>

### *property* TotalDeformation.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOccursOn"></a>

### *property* TotalDeformation.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOfMaximumOverTime"></a>

### *property* TotalDeformation.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.MinimumOfMinimumOverTime"></a>

### *property* TotalDeformation.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ModalDampingRatio"></a>

### *property* TotalDeformation.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Mode"></a>

### *property* TotalDeformation.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.NamedSelections"></a>

### *property* TotalDeformation.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Path"></a>

### *property* TotalDeformation.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PhaseIncrement"></a>

### *property* TotalDeformation.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PlotData"></a>

### *property* TotalDeformation.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Probability"></a>

### *property* TotalDeformation.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Properties"></a>

### *property* TotalDeformation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.RPMSelection"></a>

### *property* TotalDeformation.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Reference"></a>

### *property* TotalDeformation.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ReportedFrequency"></a>

### *property* TotalDeformation.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScaleFactor"></a>

### *property* TotalDeformation.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScaleFactorValue"></a>

### *property* TotalDeformation.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ScopingMethod"></a>

### *property* TotalDeformation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SetNumber"></a>

### *property* TotalDeformation.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SolutionCombinationDriver"></a>

### *property* TotalDeformation.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SolverComponentIDs"></a>

### *property* TotalDeformation.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Stability"></a>

### *property* TotalDeformation.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Substep"></a>

### *property* TotalDeformation.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Suppressed"></a>

### *property* TotalDeformation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Surface"></a>

### *property* TotalDeformation.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SurfaceCoating"></a>

### *property* TotalDeformation.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.SweepingPhase"></a>

### *property* TotalDeformation.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Time"></a>

### *property* TotalDeformation.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMaximumOfMaximumValues"></a>

### *property* TotalDeformation.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMaximumOfMinimumValues"></a>

### *property* TotalDeformation.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMinimumOfMaximumValues"></a>

### *property* TotalDeformation.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.TimeForMinimumOfMinimumValues"></a>

### *property* TotalDeformation.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Total"></a>

### *property* TotalDeformation.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.VisibleProperties"></a>

### *property* TotalDeformation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalDeformation.Activate"></a>

### TotalDeformation.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddAlert"></a>

### TotalDeformation.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddComment"></a>

### TotalDeformation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddConvergence"></a>

### TotalDeformation.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddFigure"></a>

### TotalDeformation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.AddImage"></a>

### TotalDeformation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ClearGeneratedData"></a>

### TotalDeformation.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CopyTo"></a>

### TotalDeformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CreateParameter"></a>

### TotalDeformation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.CreateResultsAtAllSets"></a>

### TotalDeformation.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Delete"></a>

### TotalDeformation.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.Duplicate"></a>

### TotalDeformation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.DuplicateWithoutResults"></a>

### TotalDeformation.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.EvaluateAllResults"></a>

### TotalDeformation.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ExportAnimation"></a>

### TotalDeformation.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.ExportToTextFile"></a>

### TotalDeformation.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.FetchRemoteResults"></a>

### TotalDeformation.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GetChildren"></a>

### TotalDeformation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GetParameter"></a>

### TotalDeformation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GroupAllSimilarChildren"></a>

### TotalDeformation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.GroupSimilarObjects"></a>

### TotalDeformation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PromoteToNamedSelection"></a>

### TotalDeformation.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PropertyByAPIName"></a>

### TotalDeformation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.PropertyByName"></a>

### TotalDeformation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.RemoveParameter"></a>

### TotalDeformation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.RenameBasedOnDefinition"></a>

### TotalDeformation.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TotalDeformation.RetrieveResult"></a>

### TotalDeformation.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

