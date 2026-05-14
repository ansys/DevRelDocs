# `AcousticTotalVelocityResult`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticTotalVelocityResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticTotalVelocityResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticTotalVelocityResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticTotalVelocityResult.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#AcousticTotalVelocityResult.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#AcousticTotalVelocityResult.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#AcousticTotalVelocityResult.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#AcousticTotalVelocityResult.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#AcousticTotalVelocityResult.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#AcousticTotalVelocityResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#AcousticTotalVelocityResult.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#AcousticTotalVelocityResult.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#AcousticTotalVelocityResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#AcousticTotalVelocityResult.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#AcousticTotalVelocityResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#AcousticTotalVelocityResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#AcousticTotalVelocityResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#AcousticTotalVelocityResult.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#AcousticTotalVelocityResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#AcousticTotalVelocityResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#AcousticTotalVelocityResult.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#AcousticTotalVelocityResult.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#AcousticTotalVelocityResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#AcousticTotalVelocityResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#AcousticTotalVelocityResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#AcousticTotalVelocityResult.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#AcousticTotalVelocityResult.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#AcousticTotalVelocityResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#AcousticTotalVelocityResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#AcousticTotalVelocityResult.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#AcousticTotalVelocityResult.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#AcousticTotalVelocityResult.Average)                                                     | Gets the Average.                                                        |
| [`By`](#AcousticTotalVelocityResult.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AcousticTotalVelocityResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AcousticTotalVelocityResult.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#AcousticTotalVelocityResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AcousticTotalVelocityResult.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AcousticTotalVelocityResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AcousticTotalVelocityResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DampedFrequency`](#AcousticTotalVelocityResult.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#AcousticTotalVelocityResult.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#AcousticTotalVelocityResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AcousticTotalVelocityResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AcousticTotalVelocityResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#AcousticTotalVelocityResult.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#AcousticTotalVelocityResult.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#AcousticTotalVelocityResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AcousticTotalVelocityResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#AcousticTotalVelocityResult.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#AcousticTotalVelocityResult.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#AcousticTotalVelocityResult.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AcousticTotalVelocityResult.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#AcousticTotalVelocityResult.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AcousticTotalVelocityResult.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#AcousticTotalVelocityResult.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticTotalVelocityResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticTotalVelocityResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticTotalVelocityResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticTotalVelocityResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AcousticTotalVelocityResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AcousticTotalVelocityResult.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#AcousticTotalVelocityResult.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#AcousticTotalVelocityResult.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#AcousticTotalVelocityResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AcousticTotalVelocityResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AcousticTotalVelocityResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AcousticTotalVelocityResult.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#AcousticTotalVelocityResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AcousticTotalVelocityResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AcousticTotalVelocityResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#AcousticTotalVelocityResult.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#AcousticTotalVelocityResult.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#AcousticTotalVelocityResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#AcousticTotalVelocityResult.Path)                                                           | Path property.                                                           |
| [`PlotData`](#AcousticTotalVelocityResult.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#AcousticTotalVelocityResult.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AcousticTotalVelocityResult.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#AcousticTotalVelocityResult.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#AcousticTotalVelocityResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AcousticTotalVelocityResult.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AcousticTotalVelocityResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AcousticTotalVelocityResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#AcousticTotalVelocityResult.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#AcousticTotalVelocityResult.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#AcousticTotalVelocityResult.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#AcousticTotalVelocityResult.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#AcousticTotalVelocityResult.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#AcousticTotalVelocityResult.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#AcousticTotalVelocityResult.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticTotalVelocityResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticTotalVelocityResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticTotalVelocityResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticTotalVelocityResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AcousticTotalVelocityResult.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#AcousticTotalVelocityResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticTotalVelocityResult.Amplitude"></a>

### *property* AcousticTotalVelocityResult.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Average"></a>

### *property* AcousticTotalVelocityResult.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.By"></a>

### *property* AcousticTotalVelocityResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CalculateTimeHistory"></a>

### *property* AcousticTotalVelocityResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Children"></a>

### *property* AcousticTotalVelocityResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CombinationNumber"></a>

### *property* AcousticTotalVelocityResult.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Comments"></a>

### *property* AcousticTotalVelocityResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CoordinateSystem"></a>

### *property* AcousticTotalVelocityResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CrackFrontNumber"></a>

### *property* AcousticTotalVelocityResult.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DampedFrequency"></a>

### *property* AcousticTotalVelocityResult.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DataModelObjectCategory"></a>

### *property* AcousticTotalVelocityResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DisplayOption"></a>

### *property* AcousticTotalVelocityResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DisplayTime"></a>

### *property* AcousticTotalVelocityResult.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DpfEvaluation"></a>

### *property* AcousticTotalVelocityResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Figures"></a>

### *property* AcousticTotalVelocityResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Frequency"></a>

### *property* AcousticTotalVelocityResult.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GlobalIDs"></a>

### *property* AcousticTotalVelocityResult.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GraphControlsXAxis"></a>

### *property* AcousticTotalVelocityResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Identifier"></a>

### *property* AcousticTotalVelocityResult.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Images"></a>

### *property* AcousticTotalVelocityResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.InternalObject"></a>

### *property* AcousticTotalVelocityResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.IsSolved"></a>

### *property* AcousticTotalVelocityResult.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ItemType"></a>

### *property* AcousticTotalVelocityResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.IterationNumber"></a>

### *property* AcousticTotalVelocityResult.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStep"></a>

### *property* AcousticTotalVelocityResult.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticTotalVelocityResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticTotalVelocityResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticTotalVelocityResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticTotalVelocityResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepNumber"></a>

### *property* AcousticTotalVelocityResult.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Location"></a>

### *property* AcousticTotalVelocityResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LogarithmicDecrement"></a>

### *property* AcousticTotalVelocityResult.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Maximum"></a>

### *property* AcousticTotalVelocityResult.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MaximumOccursOn"></a>

### *property* AcousticTotalVelocityResult.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MaximumOfMaximumOverTime"></a>

### *property* AcousticTotalVelocityResult.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MaximumOfMinimumOverTime"></a>

### *property* AcousticTotalVelocityResult.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Minimum"></a>

### *property* AcousticTotalVelocityResult.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MinimumOccursOn"></a>

### *property* AcousticTotalVelocityResult.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MinimumOfMaximumOverTime"></a>

### *property* AcousticTotalVelocityResult.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MinimumOfMinimumOverTime"></a>

### *property* AcousticTotalVelocityResult.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ModalDampingRatio"></a>

### *property* AcousticTotalVelocityResult.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Mode"></a>

### *property* AcousticTotalVelocityResult.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.NamedSelections"></a>

### *property* AcousticTotalVelocityResult.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Path"></a>

### *property* AcousticTotalVelocityResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.PlotData"></a>

### *property* AcousticTotalVelocityResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Properties"></a>

### *property* AcousticTotalVelocityResult.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.RPMSelection"></a>

### *property* AcousticTotalVelocityResult.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ReportedFrequency"></a>

### *property* AcousticTotalVelocityResult.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ScopingMethod"></a>

### *property* AcousticTotalVelocityResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SetNumber"></a>

### *property* AcousticTotalVelocityResult.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SolutionCombinationDriver"></a>

### *property* AcousticTotalVelocityResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SolverComponentIDs"></a>

### *property* AcousticTotalVelocityResult.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Stability"></a>

### *property* AcousticTotalVelocityResult.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Substep"></a>

### *property* AcousticTotalVelocityResult.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Suppressed"></a>

### *property* AcousticTotalVelocityResult.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Surface"></a>

### *property* AcousticTotalVelocityResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SurfaceCoating"></a>

### *property* AcousticTotalVelocityResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SweepingPhase"></a>

### *property* AcousticTotalVelocityResult.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Time"></a>

### *property* AcousticTotalVelocityResult.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticTotalVelocityResult.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticTotalVelocityResult.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticTotalVelocityResult.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticTotalVelocityResult.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Total"></a>

### *property* AcousticTotalVelocityResult.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.VisibleProperties"></a>

### *property* AcousticTotalVelocityResult.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticTotalVelocityResult.Activate"></a>

### AcousticTotalVelocityResult.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddAlert"></a>

### AcousticTotalVelocityResult.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddComment"></a>

### AcousticTotalVelocityResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddConvergence"></a>

### AcousticTotalVelocityResult.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddFigure"></a>

### AcousticTotalVelocityResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddImage"></a>

### AcousticTotalVelocityResult.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ClearGeneratedData"></a>

### AcousticTotalVelocityResult.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CopyTo"></a>

### AcousticTotalVelocityResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CreateParameter"></a>

### AcousticTotalVelocityResult.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CreateResultsAtAllSets"></a>

### AcousticTotalVelocityResult.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Delete"></a>

### AcousticTotalVelocityResult.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Duplicate"></a>

### AcousticTotalVelocityResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DuplicateWithoutResults"></a>

### AcousticTotalVelocityResult.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.EvaluateAllResults"></a>

### AcousticTotalVelocityResult.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ExportAnimation"></a>

### AcousticTotalVelocityResult.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ExportToTextFile"></a>

### AcousticTotalVelocityResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.FetchRemoteResults"></a>

### AcousticTotalVelocityResult.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GetChildren"></a>

### AcousticTotalVelocityResult.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GetParameter"></a>

### AcousticTotalVelocityResult.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GroupAllSimilarChildren"></a>

### AcousticTotalVelocityResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GroupSimilarObjects"></a>

### AcousticTotalVelocityResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.PromoteToNamedSelection"></a>

### AcousticTotalVelocityResult.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.PropertyByAPIName"></a>

### AcousticTotalVelocityResult.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.PropertyByName"></a>

### AcousticTotalVelocityResult.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.RemoveParameter"></a>

### AcousticTotalVelocityResult.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.RenameBasedOnDefinition"></a>

### AcousticTotalVelocityResult.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.RetrieveResult"></a>

### AcousticTotalVelocityResult.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

