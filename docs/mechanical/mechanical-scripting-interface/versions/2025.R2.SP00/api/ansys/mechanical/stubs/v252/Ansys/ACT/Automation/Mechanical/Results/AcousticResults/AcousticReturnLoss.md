# `AcousticReturnLoss`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticReturnLoss"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticReturnLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticReturnLoss.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticReturnLoss.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#AcousticReturnLoss.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#AcousticReturnLoss.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#AcousticReturnLoss.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#AcousticReturnLoss.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#AcousticReturnLoss.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#AcousticReturnLoss.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#AcousticReturnLoss.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#AcousticReturnLoss.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#AcousticReturnLoss.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#AcousticReturnLoss.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#AcousticReturnLoss.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#AcousticReturnLoss.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#AcousticReturnLoss.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#AcousticReturnLoss.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#AcousticReturnLoss.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#AcousticReturnLoss.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#AcousticReturnLoss.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#AcousticReturnLoss.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#AcousticReturnLoss.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#AcousticReturnLoss.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#AcousticReturnLoss.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#AcousticReturnLoss.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#AcousticReturnLoss.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#AcousticReturnLoss.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#AcousticReturnLoss.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#AcousticReturnLoss.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#AcousticReturnLoss.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#AcousticReturnLoss.Average)                                                     | Gets the Average.                                                        |
| [`By`](#AcousticReturnLoss.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AcousticReturnLoss.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AcousticReturnLoss.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#AcousticReturnLoss.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AcousticReturnLoss.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AcousticReturnLoss.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AcousticReturnLoss.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DampedFrequency`](#AcousticReturnLoss.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#AcousticReturnLoss.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#AcousticReturnLoss.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AcousticReturnLoss.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AcousticReturnLoss.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#AcousticReturnLoss.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#AcousticReturnLoss.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`FrequencyRange`](#AcousticReturnLoss.FrequencyRange)                                       | Gets or sets the FrequencyRange.                                         |
| [`GlobalIDs`](#AcousticReturnLoss.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AcousticReturnLoss.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#AcousticReturnLoss.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#AcousticReturnLoss.Images)                                                       | Gets the list of associated images.                                      |
| [`InputPort`](#AcousticReturnLoss.InputPort)                                                 | Gets or sets the InputPort.                                              |
| [`InternalObject`](#AcousticReturnLoss.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AcousticReturnLoss.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#AcousticReturnLoss.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AcousticReturnLoss.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#AcousticReturnLoss.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticReturnLoss.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticReturnLoss.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticReturnLoss.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticReturnLoss.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AcousticReturnLoss.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AcousticReturnLoss.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#AcousticReturnLoss.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#AcousticReturnLoss.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumFrequency`](#AcousticReturnLoss.MaximumFrequency)                                   | Gets or sets the MaximumFrequency.                                       |
| [`MaximumOccursOn`](#AcousticReturnLoss.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AcousticReturnLoss.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AcousticReturnLoss.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AcousticReturnLoss.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#AcousticReturnLoss.MinimumFrequency)                                   | Gets or sets the MinimumFrequency.                                       |
| [`MinimumOccursOn`](#AcousticReturnLoss.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AcousticReturnLoss.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AcousticReturnLoss.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#AcousticReturnLoss.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#AcousticReturnLoss.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#AcousticReturnLoss.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#AcousticReturnLoss.Path)                                                           | Path property.                                                           |
| [`PlotData`](#AcousticReturnLoss.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#AcousticReturnLoss.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AcousticReturnLoss.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#AcousticReturnLoss.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#AcousticReturnLoss.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AcousticReturnLoss.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AcousticReturnLoss.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AcousticReturnLoss.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#AcousticReturnLoss.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#AcousticReturnLoss.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#AcousticReturnLoss.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#AcousticReturnLoss.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#AcousticReturnLoss.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#AcousticReturnLoss.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#AcousticReturnLoss.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticReturnLoss.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticReturnLoss.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticReturnLoss.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticReturnLoss.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AcousticReturnLoss.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#AcousticReturnLoss.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticReturnLoss.Amplitude"></a>

### *property* AcousticReturnLoss.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Average"></a>

### *property* AcousticReturnLoss.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.By"></a>

### *property* AcousticReturnLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CalculateTimeHistory"></a>

### *property* AcousticReturnLoss.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Children"></a>

### *property* AcousticReturnLoss.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CombinationNumber"></a>

### *property* AcousticReturnLoss.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Comments"></a>

### *property* AcousticReturnLoss.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CoordinateSystem"></a>

### *property* AcousticReturnLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CrackFrontNumber"></a>

### *property* AcousticReturnLoss.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DampedFrequency"></a>

### *property* AcousticReturnLoss.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DataModelObjectCategory"></a>

### *property* AcousticReturnLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DisplayOption"></a>

### *property* AcousticReturnLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DisplayTime"></a>

### *property* AcousticReturnLoss.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DpfEvaluation"></a>

### *property* AcousticReturnLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Figures"></a>

### *property* AcousticReturnLoss.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Frequency"></a>

### *property* AcousticReturnLoss.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.FrequencyRange"></a>

### *property* AcousticReturnLoss.FrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GlobalIDs"></a>

### *property* AcousticReturnLoss.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GraphControlsXAxis"></a>

### *property* AcousticReturnLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Identifier"></a>

### *property* AcousticReturnLoss.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Images"></a>

### *property* AcousticReturnLoss.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.InputPort"></a>

### *property* AcousticReturnLoss.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.InternalObject"></a>

### *property* AcousticReturnLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.IsSolved"></a>

### *property* AcousticReturnLoss.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ItemType"></a>

### *property* AcousticReturnLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.IterationNumber"></a>

### *property* AcousticReturnLoss.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStep"></a>

### *property* AcousticReturnLoss.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticReturnLoss.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticReturnLoss.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticReturnLoss.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticReturnLoss.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LoadStepNumber"></a>

### *property* AcousticReturnLoss.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Location"></a>

### *property* AcousticReturnLoss.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.LogarithmicDecrement"></a>

### *property* AcousticReturnLoss.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Maximum"></a>

### *property* AcousticReturnLoss.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MaximumFrequency"></a>

### *property* AcousticReturnLoss.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MaximumOccursOn"></a>

### *property* AcousticReturnLoss.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MaximumOfMaximumOverTime"></a>

### *property* AcousticReturnLoss.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MaximumOfMinimumOverTime"></a>

### *property* AcousticReturnLoss.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Minimum"></a>

### *property* AcousticReturnLoss.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MinimumFrequency"></a>

### *property* AcousticReturnLoss.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MinimumOccursOn"></a>

### *property* AcousticReturnLoss.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MinimumOfMaximumOverTime"></a>

### *property* AcousticReturnLoss.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.MinimumOfMinimumOverTime"></a>

### *property* AcousticReturnLoss.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ModalDampingRatio"></a>

### *property* AcousticReturnLoss.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Mode"></a>

### *property* AcousticReturnLoss.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.NamedSelections"></a>

### *property* AcousticReturnLoss.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Path"></a>

### *property* AcousticReturnLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.PlotData"></a>

### *property* AcousticReturnLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Properties"></a>

### *property* AcousticReturnLoss.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.RPMSelection"></a>

### *property* AcousticReturnLoss.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ReportedFrequency"></a>

### *property* AcousticReturnLoss.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ScopingMethod"></a>

### *property* AcousticReturnLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SetNumber"></a>

### *property* AcousticReturnLoss.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SolutionCombinationDriver"></a>

### *property* AcousticReturnLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SolverComponentIDs"></a>

### *property* AcousticReturnLoss.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Stability"></a>

### *property* AcousticReturnLoss.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Substep"></a>

### *property* AcousticReturnLoss.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Suppressed"></a>

### *property* AcousticReturnLoss.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Surface"></a>

### *property* AcousticReturnLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SurfaceCoating"></a>

### *property* AcousticReturnLoss.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.SweepingPhase"></a>

### *property* AcousticReturnLoss.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Time"></a>

### *property* AcousticReturnLoss.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticReturnLoss.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticReturnLoss.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticReturnLoss.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticReturnLoss.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Total"></a>

### *property* AcousticReturnLoss.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.VisibleProperties"></a>

### *property* AcousticReturnLoss.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticReturnLoss.Activate"></a>

### AcousticReturnLoss.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddAlert"></a>

### AcousticReturnLoss.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddComment"></a>

### AcousticReturnLoss.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddConvergence"></a>

### AcousticReturnLoss.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddFigure"></a>

### AcousticReturnLoss.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.AddImage"></a>

### AcousticReturnLoss.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ClearGeneratedData"></a>

### AcousticReturnLoss.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CopyTo"></a>

### AcousticReturnLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CreateParameter"></a>

### AcousticReturnLoss.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.CreateResultsAtAllSets"></a>

### AcousticReturnLoss.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Delete"></a>

### AcousticReturnLoss.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.Duplicate"></a>

### AcousticReturnLoss.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.DuplicateWithoutResults"></a>

### AcousticReturnLoss.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.EvaluateAllResults"></a>

### AcousticReturnLoss.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ExportAnimation"></a>

### AcousticReturnLoss.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.ExportToTextFile"></a>

### AcousticReturnLoss.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.FetchRemoteResults"></a>

### AcousticReturnLoss.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GetChildren"></a>

### AcousticReturnLoss.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GetParameter"></a>

### AcousticReturnLoss.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GroupAllSimilarChildren"></a>

### AcousticReturnLoss.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.GroupSimilarObjects"></a>

### AcousticReturnLoss.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.PromoteToNamedSelection"></a>

### AcousticReturnLoss.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.PropertyByAPIName"></a>

### AcousticReturnLoss.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.PropertyByName"></a>

### AcousticReturnLoss.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.RemoveParameter"></a>

### AcousticReturnLoss.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.RenameBasedOnDefinition"></a>

### AcousticReturnLoss.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticReturnLoss.RetrieveResult"></a>

### AcousticReturnLoss.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

