# `AcousticAWeightedSoundPressureLevel`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAWeightedSoundPressureLevel"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAWeightedSoundPressureLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticAWeightedSoundPressureLevel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticAWeightedSoundPressureLevel.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#AcousticAWeightedSoundPressureLevel.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#AcousticAWeightedSoundPressureLevel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#AcousticAWeightedSoundPressureLevel.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#AcousticAWeightedSoundPressureLevel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticAWeightedSoundPressureLevel.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#AcousticAWeightedSoundPressureLevel.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#AcousticAWeightedSoundPressureLevel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticAWeightedSoundPressureLevel.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#AcousticAWeightedSoundPressureLevel.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#AcousticAWeightedSoundPressureLevel.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticAWeightedSoundPressureLevel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#AcousticAWeightedSoundPressureLevel.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#AcousticAWeightedSoundPressureLevel.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#AcousticAWeightedSoundPressureLevel.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#AcousticAWeightedSoundPressureLevel.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#AcousticAWeightedSoundPressureLevel.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#AcousticAWeightedSoundPressureLevel.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticAWeightedSoundPressureLevel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticAWeightedSoundPressureLevel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticAWeightedSoundPressureLevel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticAWeightedSoundPressureLevel.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticAWeightedSoundPressureLevel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticAWeightedSoundPressureLevel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticAWeightedSoundPressureLevel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AcousticAWeightedSoundPressureLevel.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#AcousticAWeightedSoundPressureLevel.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#AcousticAWeightedSoundPressureLevel.Average)                                                     | Gets the Average.                                                        |
| [`By`](#AcousticAWeightedSoundPressureLevel.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AcousticAWeightedSoundPressureLevel.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AcousticAWeightedSoundPressureLevel.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#AcousticAWeightedSoundPressureLevel.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AcousticAWeightedSoundPressureLevel.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AcousticAWeightedSoundPressureLevel.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AcousticAWeightedSoundPressureLevel.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DampedFrequency`](#AcousticAWeightedSoundPressureLevel.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#AcousticAWeightedSoundPressureLevel.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#AcousticAWeightedSoundPressureLevel.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AcousticAWeightedSoundPressureLevel.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AcousticAWeightedSoundPressureLevel.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#AcousticAWeightedSoundPressureLevel.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#AcousticAWeightedSoundPressureLevel.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#AcousticAWeightedSoundPressureLevel.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AcousticAWeightedSoundPressureLevel.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#AcousticAWeightedSoundPressureLevel.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#AcousticAWeightedSoundPressureLevel.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#AcousticAWeightedSoundPressureLevel.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AcousticAWeightedSoundPressureLevel.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#AcousticAWeightedSoundPressureLevel.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AcousticAWeightedSoundPressureLevel.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#AcousticAWeightedSoundPressureLevel.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AcousticAWeightedSoundPressureLevel.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AcousticAWeightedSoundPressureLevel.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#AcousticAWeightedSoundPressureLevel.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#AcousticAWeightedSoundPressureLevel.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#AcousticAWeightedSoundPressureLevel.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AcousticAWeightedSoundPressureLevel.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AcousticAWeightedSoundPressureLevel.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AcousticAWeightedSoundPressureLevel.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#AcousticAWeightedSoundPressureLevel.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AcousticAWeightedSoundPressureLevel.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AcousticAWeightedSoundPressureLevel.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#AcousticAWeightedSoundPressureLevel.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#AcousticAWeightedSoundPressureLevel.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#AcousticAWeightedSoundPressureLevel.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#AcousticAWeightedSoundPressureLevel.Path)                                                           | Path property.                                                           |
| [`PlotData`](#AcousticAWeightedSoundPressureLevel.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#AcousticAWeightedSoundPressureLevel.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AcousticAWeightedSoundPressureLevel.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#AcousticAWeightedSoundPressureLevel.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#AcousticAWeightedSoundPressureLevel.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AcousticAWeightedSoundPressureLevel.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AcousticAWeightedSoundPressureLevel.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AcousticAWeightedSoundPressureLevel.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#AcousticAWeightedSoundPressureLevel.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#AcousticAWeightedSoundPressureLevel.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#AcousticAWeightedSoundPressureLevel.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#AcousticAWeightedSoundPressureLevel.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#AcousticAWeightedSoundPressureLevel.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#AcousticAWeightedSoundPressureLevel.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#AcousticAWeightedSoundPressureLevel.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AcousticAWeightedSoundPressureLevel.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#AcousticAWeightedSoundPressureLevel.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticAWeightedSoundPressureLevel.Amplitude"></a>

### *property* AcousticAWeightedSoundPressureLevel.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Average"></a>

### *property* AcousticAWeightedSoundPressureLevel.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.By"></a>

### *property* AcousticAWeightedSoundPressureLevel.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CalculateTimeHistory"></a>

### *property* AcousticAWeightedSoundPressureLevel.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Children"></a>

### *property* AcousticAWeightedSoundPressureLevel.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CombinationNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Comments"></a>

### *property* AcousticAWeightedSoundPressureLevel.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CoordinateSystem"></a>

### *property* AcousticAWeightedSoundPressureLevel.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CrackFrontNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DampedFrequency"></a>

### *property* AcousticAWeightedSoundPressureLevel.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DataModelObjectCategory"></a>

### *property* AcousticAWeightedSoundPressureLevel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DisplayOption"></a>

### *property* AcousticAWeightedSoundPressureLevel.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DisplayTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DpfEvaluation"></a>

### *property* AcousticAWeightedSoundPressureLevel.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Figures"></a>

### *property* AcousticAWeightedSoundPressureLevel.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Frequency"></a>

### *property* AcousticAWeightedSoundPressureLevel.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GlobalIDs"></a>

### *property* AcousticAWeightedSoundPressureLevel.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GraphControlsXAxis"></a>

### *property* AcousticAWeightedSoundPressureLevel.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Identifier"></a>

### *property* AcousticAWeightedSoundPressureLevel.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Images"></a>

### *property* AcousticAWeightedSoundPressureLevel.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.InternalObject"></a>

### *property* AcousticAWeightedSoundPressureLevel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.IsSolved"></a>

### *property* AcousticAWeightedSoundPressureLevel.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ItemType"></a>

### *property* AcousticAWeightedSoundPressureLevel.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.IterationNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStep"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Location"></a>

### *property* AcousticAWeightedSoundPressureLevel.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LogarithmicDecrement"></a>

### *property* AcousticAWeightedSoundPressureLevel.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Maximum"></a>

### *property* AcousticAWeightedSoundPressureLevel.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MaximumOccursOn"></a>

### *property* AcousticAWeightedSoundPressureLevel.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MaximumOfMaximumOverTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MaximumOfMinimumOverTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Minimum"></a>

### *property* AcousticAWeightedSoundPressureLevel.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MinimumOccursOn"></a>

### *property* AcousticAWeightedSoundPressureLevel.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MinimumOfMaximumOverTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MinimumOfMinimumOverTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ModalDampingRatio"></a>

### *property* AcousticAWeightedSoundPressureLevel.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Mode"></a>

### *property* AcousticAWeightedSoundPressureLevel.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.NamedSelections"></a>

### *property* AcousticAWeightedSoundPressureLevel.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Path"></a>

### *property* AcousticAWeightedSoundPressureLevel.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PlotData"></a>

### *property* AcousticAWeightedSoundPressureLevel.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Properties"></a>

### *property* AcousticAWeightedSoundPressureLevel.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RPMSelection"></a>

### *property* AcousticAWeightedSoundPressureLevel.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ReportedFrequency"></a>

### *property* AcousticAWeightedSoundPressureLevel.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ScopingMethod"></a>

### *property* AcousticAWeightedSoundPressureLevel.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SetNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SolutionCombinationDriver"></a>

### *property* AcousticAWeightedSoundPressureLevel.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SolverComponentIDs"></a>

### *property* AcousticAWeightedSoundPressureLevel.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Stability"></a>

### *property* AcousticAWeightedSoundPressureLevel.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Substep"></a>

### *property* AcousticAWeightedSoundPressureLevel.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Suppressed"></a>

### *property* AcousticAWeightedSoundPressureLevel.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Surface"></a>

### *property* AcousticAWeightedSoundPressureLevel.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SurfaceCoating"></a>

### *property* AcousticAWeightedSoundPressureLevel.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SweepingPhase"></a>

### *property* AcousticAWeightedSoundPressureLevel.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Time"></a>

### *property* AcousticAWeightedSoundPressureLevel.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Total"></a>

### *property* AcousticAWeightedSoundPressureLevel.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.VisibleProperties"></a>

### *property* AcousticAWeightedSoundPressureLevel.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAWeightedSoundPressureLevel.Activate"></a>

### AcousticAWeightedSoundPressureLevel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddAlert"></a>

### AcousticAWeightedSoundPressureLevel.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddComment"></a>

### AcousticAWeightedSoundPressureLevel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddConvergence"></a>

### AcousticAWeightedSoundPressureLevel.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddFigure"></a>

### AcousticAWeightedSoundPressureLevel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddImage"></a>

### AcousticAWeightedSoundPressureLevel.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ClearGeneratedData"></a>

### AcousticAWeightedSoundPressureLevel.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CopyTo"></a>

### AcousticAWeightedSoundPressureLevel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CreateParameter"></a>

### AcousticAWeightedSoundPressureLevel.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CreateResultsAtAllSets"></a>

### AcousticAWeightedSoundPressureLevel.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Delete"></a>

### AcousticAWeightedSoundPressureLevel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Duplicate"></a>

### AcousticAWeightedSoundPressureLevel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DuplicateWithoutResults"></a>

### AcousticAWeightedSoundPressureLevel.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.EvaluateAllResults"></a>

### AcousticAWeightedSoundPressureLevel.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ExportAnimation"></a>

### AcousticAWeightedSoundPressureLevel.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ExportToTextFile"></a>

### AcousticAWeightedSoundPressureLevel.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.FetchRemoteResults"></a>

### AcousticAWeightedSoundPressureLevel.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetChildren"></a>

### AcousticAWeightedSoundPressureLevel.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetParameter"></a>

### AcousticAWeightedSoundPressureLevel.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GroupAllSimilarChildren"></a>

### AcousticAWeightedSoundPressureLevel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GroupSimilarObjects"></a>

### AcousticAWeightedSoundPressureLevel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PromoteToNamedSelection"></a>

### AcousticAWeightedSoundPressureLevel.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PropertyByAPIName"></a>

### AcousticAWeightedSoundPressureLevel.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PropertyByName"></a>

### AcousticAWeightedSoundPressureLevel.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RemoveParameter"></a>

### AcousticAWeightedSoundPressureLevel.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RenameBasedOnDefinition"></a>

### AcousticAWeightedSoundPressureLevel.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

