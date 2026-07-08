# `AcousticFrequencyBandAWeightedSPL`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFrequencyBandAWeightedSPL"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFrequencyBandAWeightedSPL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFrequencyBandAWeightedSPL.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticFrequencyBandAWeightedSPL.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#AcousticFrequencyBandAWeightedSPL.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#AcousticFrequencyBandAWeightedSPL.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#AcousticFrequencyBandAWeightedSPL.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#AcousticFrequencyBandAWeightedSPL.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#AcousticFrequencyBandAWeightedSPL.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#AcousticFrequencyBandAWeightedSPL.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#AcousticFrequencyBandAWeightedSPL.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#AcousticFrequencyBandAWeightedSPL.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#AcousticFrequencyBandAWeightedSPL.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#AcousticFrequencyBandAWeightedSPL.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#AcousticFrequencyBandAWeightedSPL.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#AcousticFrequencyBandAWeightedSPL.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#AcousticFrequencyBandAWeightedSPL.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#AcousticFrequencyBandAWeightedSPL.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#AcousticFrequencyBandAWeightedSPL.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#AcousticFrequencyBandAWeightedSPL.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#AcousticFrequencyBandAWeightedSPL.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#AcousticFrequencyBandAWeightedSPL.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#AcousticFrequencyBandAWeightedSPL.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#AcousticFrequencyBandAWeightedSPL.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#AcousticFrequencyBandAWeightedSPL.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#AcousticFrequencyBandAWeightedSPL.Average)                                                     | Gets the Average.                                                        |
| [`By`](#AcousticFrequencyBandAWeightedSPL.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AcousticFrequencyBandAWeightedSPL.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#AcousticFrequencyBandAWeightedSPL.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AcousticFrequencyBandAWeightedSPL.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AcousticFrequencyBandAWeightedSPL.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AcousticFrequencyBandAWeightedSPL.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DampedFrequency`](#AcousticFrequencyBandAWeightedSPL.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#AcousticFrequencyBandAWeightedSPL.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AcousticFrequencyBandAWeightedSPL.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AcousticFrequencyBandAWeightedSPL.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#AcousticFrequencyBandAWeightedSPL.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#AcousticFrequencyBandAWeightedSPL.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#AcousticFrequencyBandAWeightedSPL.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#AcousticFrequencyBandAWeightedSPL.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#AcousticFrequencyBandAWeightedSPL.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#AcousticFrequencyBandAWeightedSPL.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AcousticFrequencyBandAWeightedSPL.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#AcousticFrequencyBandAWeightedSPL.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AcousticFrequencyBandAWeightedSPL.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#AcousticFrequencyBandAWeightedSPL.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AcousticFrequencyBandAWeightedSPL.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AcousticFrequencyBandAWeightedSPL.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#AcousticFrequencyBandAWeightedSPL.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#AcousticFrequencyBandAWeightedSPL.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AcousticFrequencyBandAWeightedSPL.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#AcousticFrequencyBandAWeightedSPL.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#AcousticFrequencyBandAWeightedSPL.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#AcousticFrequencyBandAWeightedSPL.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#AcousticFrequencyBandAWeightedSPL.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#AcousticFrequencyBandAWeightedSPL.Path)                                                           | Path property.                                                           |
| [`PlotData`](#AcousticFrequencyBandAWeightedSPL.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#AcousticFrequencyBandAWeightedSPL.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AcousticFrequencyBandAWeightedSPL.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#AcousticFrequencyBandAWeightedSPL.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#AcousticFrequencyBandAWeightedSPL.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AcousticFrequencyBandAWeightedSPL.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AcousticFrequencyBandAWeightedSPL.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#AcousticFrequencyBandAWeightedSPL.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#AcousticFrequencyBandAWeightedSPL.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#AcousticFrequencyBandAWeightedSPL.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#AcousticFrequencyBandAWeightedSPL.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#AcousticFrequencyBandAWeightedSPL.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#AcousticFrequencyBandAWeightedSPL.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#AcousticFrequencyBandAWeightedSPL.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AcousticFrequencyBandAWeightedSPL.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#AcousticFrequencyBandAWeightedSPL.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFrequencyBandAWeightedSPL.Amplitude"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Average"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.By"></a>

### *property* AcousticFrequencyBandAWeightedSPL.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Children"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CombinationNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Comments"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CoordinateSystem"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CrackFrontNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DampedFrequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DisplayOption"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DisplayTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DpfEvaluation"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Figures"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Frequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GlobalIDs"></a>

### *property* AcousticFrequencyBandAWeightedSPL.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis"></a>

### *property* AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Identifier"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Images"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.InternalObject"></a>

### *property* AcousticFrequencyBandAWeightedSPL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.IsSolved"></a>

### *property* AcousticFrequencyBandAWeightedSPL.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ItemType"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.IterationNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStep"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Location"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Maximum"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOccursOn"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Minimum"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOccursOn"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ModalDampingRatio"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Mode"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.NamedSelections"></a>

### *property* AcousticFrequencyBandAWeightedSPL.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Path"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PlotData"></a>

### *property* AcousticFrequencyBandAWeightedSPL.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Properties"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.RPMSelection"></a>

### *property* AcousticFrequencyBandAWeightedSPL.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ReportedFrequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ScopingMethod"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SetNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SolverComponentIDs"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Stability"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Substep"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Suppressed"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Surface"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SurfaceCoating"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SweepingPhase"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Time"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Total"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.VisibleProperties"></a>

### *property* AcousticFrequencyBandAWeightedSPL.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFrequencyBandAWeightedSPL.Activate"></a>

### AcousticFrequencyBandAWeightedSPL.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddAlert"></a>

### AcousticFrequencyBandAWeightedSPL.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddComment"></a>

### AcousticFrequencyBandAWeightedSPL.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddConvergence"></a>

### AcousticFrequencyBandAWeightedSPL.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddFigure"></a>

### AcousticFrequencyBandAWeightedSPL.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddImage"></a>

### AcousticFrequencyBandAWeightedSPL.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ClearGeneratedData"></a>

### AcousticFrequencyBandAWeightedSPL.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CopyTo"></a>

### AcousticFrequencyBandAWeightedSPL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CreateParameter"></a>

### AcousticFrequencyBandAWeightedSPL.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets"></a>

### AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Delete"></a>

### AcousticFrequencyBandAWeightedSPL.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Duplicate"></a>

### AcousticFrequencyBandAWeightedSPL.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults"></a>

### AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.EvaluateAllResults"></a>

### AcousticFrequencyBandAWeightedSPL.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ExportAnimation"></a>

### AcousticFrequencyBandAWeightedSPL.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ExportToTextFile"></a>

### AcousticFrequencyBandAWeightedSPL.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.FetchRemoteResults"></a>

### AcousticFrequencyBandAWeightedSPL.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GetChildren"></a>

### AcousticFrequencyBandAWeightedSPL.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GetParameter"></a>

### AcousticFrequencyBandAWeightedSPL.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren"></a>

### AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects"></a>

### AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection"></a>

### AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PropertyByAPIName"></a>

### AcousticFrequencyBandAWeightedSPL.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PropertyByName"></a>

### AcousticFrequencyBandAWeightedSPL.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.RemoveParameter"></a>

### AcousticFrequencyBandAWeightedSPL.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition"></a>

### AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.RetrieveResult"></a>

### AcousticFrequencyBandAWeightedSPL.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

