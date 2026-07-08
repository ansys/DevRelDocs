# `AcousticDiffuseSoundTransmissionLoss`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDiffuseSoundTransmissionLoss"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDiffuseSoundTransmissionLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticDiffuseSoundTransmissionLoss.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticDiffuseSoundTransmissionLoss.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#AcousticDiffuseSoundTransmissionLoss.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#AcousticDiffuseSoundTransmissionLoss.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#AcousticDiffuseSoundTransmissionLoss.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#AcousticDiffuseSoundTransmissionLoss.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#AcousticDiffuseSoundTransmissionLoss.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#AcousticDiffuseSoundTransmissionLoss.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#AcousticDiffuseSoundTransmissionLoss.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#AcousticDiffuseSoundTransmissionLoss.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#AcousticDiffuseSoundTransmissionLoss.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#AcousticDiffuseSoundTransmissionLoss.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#AcousticDiffuseSoundTransmissionLoss.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#AcousticDiffuseSoundTransmissionLoss.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#AcousticDiffuseSoundTransmissionLoss.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#AcousticDiffuseSoundTransmissionLoss.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#AcousticDiffuseSoundTransmissionLoss.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#AcousticDiffuseSoundTransmissionLoss.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#AcousticDiffuseSoundTransmissionLoss.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#AcousticDiffuseSoundTransmissionLoss.Average)                                                     | Gets the Average.                                                        |
| [`By`](#AcousticDiffuseSoundTransmissionLoss.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AcousticDiffuseSoundTransmissionLoss.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#AcousticDiffuseSoundTransmissionLoss.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AcousticDiffuseSoundTransmissionLoss.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AcousticDiffuseSoundTransmissionLoss.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DampedFrequency`](#AcousticDiffuseSoundTransmissionLoss.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#AcousticDiffuseSoundTransmissionLoss.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AcousticDiffuseSoundTransmissionLoss.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AcousticDiffuseSoundTransmissionLoss.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#AcousticDiffuseSoundTransmissionLoss.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#AcousticDiffuseSoundTransmissionLoss.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`FrequencyRange`](#AcousticDiffuseSoundTransmissionLoss.FrequencyRange)                                       | Gets or sets the FrequencyRange.                                         |
| [`GlobalIDs`](#AcousticDiffuseSoundTransmissionLoss.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#AcousticDiffuseSoundTransmissionLoss.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#AcousticDiffuseSoundTransmissionLoss.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#AcousticDiffuseSoundTransmissionLoss.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AcousticDiffuseSoundTransmissionLoss.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#AcousticDiffuseSoundTransmissionLoss.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AcousticDiffuseSoundTransmissionLoss.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#AcousticDiffuseSoundTransmissionLoss.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AcousticDiffuseSoundTransmissionLoss.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AcousticDiffuseSoundTransmissionLoss.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#AcousticDiffuseSoundTransmissionLoss.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumFrequency`](#AcousticDiffuseSoundTransmissionLoss.MaximumFrequency)                                   | Gets or sets the MaximumFrequency.                                       |
| [`MaximumOccursOn`](#AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AcousticDiffuseSoundTransmissionLoss.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#AcousticDiffuseSoundTransmissionLoss.MinimumFrequency)                                   | Gets or sets the MinimumFrequency.                                       |
| [`MinimumOccursOn`](#AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#AcousticDiffuseSoundTransmissionLoss.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#AcousticDiffuseSoundTransmissionLoss.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#AcousticDiffuseSoundTransmissionLoss.Path)                                                           | Path property.                                                           |
| [`PlotData`](#AcousticDiffuseSoundTransmissionLoss.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#AcousticDiffuseSoundTransmissionLoss.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AcousticDiffuseSoundTransmissionLoss.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#AcousticDiffuseSoundTransmissionLoss.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#AcousticDiffuseSoundTransmissionLoss.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AcousticDiffuseSoundTransmissionLoss.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#AcousticDiffuseSoundTransmissionLoss.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#AcousticDiffuseSoundTransmissionLoss.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#AcousticDiffuseSoundTransmissionLoss.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#AcousticDiffuseSoundTransmissionLoss.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#AcousticDiffuseSoundTransmissionLoss.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#AcousticDiffuseSoundTransmissionLoss.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#AcousticDiffuseSoundTransmissionLoss.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AcousticDiffuseSoundTransmissionLoss.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#AcousticDiffuseSoundTransmissionLoss.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticDiffuseSoundTransmissionLoss.Amplitude"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Average"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.By"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Children"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CombinationNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Comments"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CoordinateSystem"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DampedFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DisplayOption"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DisplayTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DpfEvaluation"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Figures"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Frequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.FrequencyRange"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.FrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GlobalIDs"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Identifier"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Images"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.InternalObject"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IsSolved"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ItemType"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IterationNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStep"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Location"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Maximum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Minimum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Mode"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.NamedSelections"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Path"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PlotData"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Properties"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RPMSelection"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ReportedFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ScopingMethod"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SetNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Stability"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Substep"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Suppressed"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Surface"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SurfaceCoating"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SweepingPhase"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Time"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Total"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.VisibleProperties"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticDiffuseSoundTransmissionLoss.Activate"></a>

### AcousticDiffuseSoundTransmissionLoss.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddAlert"></a>

### AcousticDiffuseSoundTransmissionLoss.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddComment"></a>

### AcousticDiffuseSoundTransmissionLoss.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddConvergence"></a>

### AcousticDiffuseSoundTransmissionLoss.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddFigure"></a>

### AcousticDiffuseSoundTransmissionLoss.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddImage"></a>

### AcousticDiffuseSoundTransmissionLoss.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData"></a>

### AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CopyTo"></a>

### AcousticDiffuseSoundTransmissionLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CreateParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets"></a>

### AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Delete"></a>

### AcousticDiffuseSoundTransmissionLoss.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Duplicate"></a>

### AcousticDiffuseSoundTransmissionLoss.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults"></a>

### AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults"></a>

### AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ExportAnimation"></a>

### AcousticDiffuseSoundTransmissionLoss.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ExportToTextFile"></a>

### AcousticDiffuseSoundTransmissionLoss.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults"></a>

### AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetChildren"></a>

### AcousticDiffuseSoundTransmissionLoss.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren"></a>

### AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects"></a>

### AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection"></a>

### AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName"></a>

### AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PropertyByName"></a>

### AcousticDiffuseSoundTransmissionLoss.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RemoveParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition"></a>

### AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RetrieveResult"></a>

### AcousticDiffuseSoundTransmissionLoss.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

