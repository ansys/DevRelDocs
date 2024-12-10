# `AcousticDirectionalVelocityResult`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDirectionalVelocityResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDirectionalVelocityResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticDirectionalVelocityResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticDirectionalVelocityResult.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#AcousticDirectionalVelocityResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#AcousticDirectionalVelocityResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#AcousticDirectionalVelocityResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#AcousticDirectionalVelocityResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticDirectionalVelocityResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#AcousticDirectionalVelocityResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#AcousticDirectionalVelocityResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticDirectionalVelocityResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#AcousticDirectionalVelocityResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#AcousticDirectionalVelocityResult.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticDirectionalVelocityResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#AcousticDirectionalVelocityResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#AcousticDirectionalVelocityResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#AcousticDirectionalVelocityResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#AcousticDirectionalVelocityResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#AcousticDirectionalVelocityResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#AcousticDirectionalVelocityResult.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticDirectionalVelocityResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticDirectionalVelocityResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticDirectionalVelocityResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticDirectionalVelocityResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticDirectionalVelocityResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticDirectionalVelocityResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticDirectionalVelocityResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AcousticDirectionalVelocityResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#AcousticDirectionalVelocityResult.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#AcousticDirectionalVelocityResult.Average)                                                     | Gets the Average.                                                        |
| [`By`](#AcousticDirectionalVelocityResult.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AcousticDirectionalVelocityResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AcousticDirectionalVelocityResult.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#AcousticDirectionalVelocityResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AcousticDirectionalVelocityResult.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AcousticDirectionalVelocityResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AcousticDirectionalVelocityResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DampedFrequency`](#AcousticDirectionalVelocityResult.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#AcousticDirectionalVelocityResult.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#AcousticDirectionalVelocityResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AcousticDirectionalVelocityResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AcousticDirectionalVelocityResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#AcousticDirectionalVelocityResult.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#AcousticDirectionalVelocityResult.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#AcousticDirectionalVelocityResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AcousticDirectionalVelocityResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#AcousticDirectionalVelocityResult.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#AcousticDirectionalVelocityResult.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#AcousticDirectionalVelocityResult.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AcousticDirectionalVelocityResult.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#AcousticDirectionalVelocityResult.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AcousticDirectionalVelocityResult.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#AcousticDirectionalVelocityResult.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticDirectionalVelocityResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticDirectionalVelocityResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticDirectionalVelocityResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticDirectionalVelocityResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AcousticDirectionalVelocityResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AcousticDirectionalVelocityResult.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#AcousticDirectionalVelocityResult.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#AcousticDirectionalVelocityResult.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#AcousticDirectionalVelocityResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AcousticDirectionalVelocityResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AcousticDirectionalVelocityResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AcousticDirectionalVelocityResult.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#AcousticDirectionalVelocityResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AcousticDirectionalVelocityResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AcousticDirectionalVelocityResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#AcousticDirectionalVelocityResult.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#AcousticDirectionalVelocityResult.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#AcousticDirectionalVelocityResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#AcousticDirectionalVelocityResult.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#AcousticDirectionalVelocityResult.Path)                                                           | Path property.                                                           |
| [`PlotData`](#AcousticDirectionalVelocityResult.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#AcousticDirectionalVelocityResult.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AcousticDirectionalVelocityResult.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#AcousticDirectionalVelocityResult.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#AcousticDirectionalVelocityResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AcousticDirectionalVelocityResult.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AcousticDirectionalVelocityResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AcousticDirectionalVelocityResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#AcousticDirectionalVelocityResult.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#AcousticDirectionalVelocityResult.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#AcousticDirectionalVelocityResult.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#AcousticDirectionalVelocityResult.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#AcousticDirectionalVelocityResult.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#AcousticDirectionalVelocityResult.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#AcousticDirectionalVelocityResult.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticDirectionalVelocityResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticDirectionalVelocityResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticDirectionalVelocityResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticDirectionalVelocityResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AcousticDirectionalVelocityResult.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#AcousticDirectionalVelocityResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticDirectionalVelocityResult.Amplitude"></a>

### *property* AcousticDirectionalVelocityResult.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Average"></a>

### *property* AcousticDirectionalVelocityResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.By"></a>

### *property* AcousticDirectionalVelocityResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.CalculateTimeHistory"></a>

### *property* AcousticDirectionalVelocityResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Children"></a>

### *property* AcousticDirectionalVelocityResult.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.CombinationNumber"></a>

### *property* AcousticDirectionalVelocityResult.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Comments"></a>

### *property* AcousticDirectionalVelocityResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.CoordinateSystem"></a>

### *property* AcousticDirectionalVelocityResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.CrackFrontNumber"></a>

### *property* AcousticDirectionalVelocityResult.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.DampedFrequency"></a>

### *property* AcousticDirectionalVelocityResult.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.DataModelObjectCategory"></a>

### *property* AcousticDirectionalVelocityResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.DisplayOption"></a>

### *property* AcousticDirectionalVelocityResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.DisplayTime"></a>

### *property* AcousticDirectionalVelocityResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.DpfEvaluation"></a>

### *property* AcousticDirectionalVelocityResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Figures"></a>

### *property* AcousticDirectionalVelocityResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Frequency"></a>

### *property* AcousticDirectionalVelocityResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.GlobalIDs"></a>

### *property* AcousticDirectionalVelocityResult.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.GraphControlsXAxis"></a>

### *property* AcousticDirectionalVelocityResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Identifier"></a>

### *property* AcousticDirectionalVelocityResult.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Images"></a>

### *property* AcousticDirectionalVelocityResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.InternalObject"></a>

### *property* AcousticDirectionalVelocityResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.IsSolved"></a>

### *property* AcousticDirectionalVelocityResult.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.ItemType"></a>

### *property* AcousticDirectionalVelocityResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.IterationNumber"></a>

### *property* AcousticDirectionalVelocityResult.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.LoadStep"></a>

### *property* AcousticDirectionalVelocityResult.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticDirectionalVelocityResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticDirectionalVelocityResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticDirectionalVelocityResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticDirectionalVelocityResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.LoadStepNumber"></a>

### *property* AcousticDirectionalVelocityResult.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Location"></a>

### *property* AcousticDirectionalVelocityResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.LogarithmicDecrement"></a>

### *property* AcousticDirectionalVelocityResult.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Maximum"></a>

### *property* AcousticDirectionalVelocityResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.MaximumOccursOn"></a>

### *property* AcousticDirectionalVelocityResult.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.MaximumOfMaximumOverTime"></a>

### *property* AcousticDirectionalVelocityResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.MaximumOfMinimumOverTime"></a>

### *property* AcousticDirectionalVelocityResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Minimum"></a>

### *property* AcousticDirectionalVelocityResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.MinimumOccursOn"></a>

### *property* AcousticDirectionalVelocityResult.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.MinimumOfMaximumOverTime"></a>

### *property* AcousticDirectionalVelocityResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.MinimumOfMinimumOverTime"></a>

### *property* AcousticDirectionalVelocityResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.ModalDampingRatio"></a>

### *property* AcousticDirectionalVelocityResult.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Mode"></a>

### *property* AcousticDirectionalVelocityResult.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.NamedSelections"></a>

### *property* AcousticDirectionalVelocityResult.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.NormalOrientation"></a>

### *property* AcousticDirectionalVelocityResult.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Path"></a>

### *property* AcousticDirectionalVelocityResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.PlotData"></a>

### *property* AcousticDirectionalVelocityResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Properties"></a>

### *property* AcousticDirectionalVelocityResult.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.RPMSelection"></a>

### *property* AcousticDirectionalVelocityResult.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.ReportedFrequency"></a>

### *property* AcousticDirectionalVelocityResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.ScopingMethod"></a>

### *property* AcousticDirectionalVelocityResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.SetNumber"></a>

### *property* AcousticDirectionalVelocityResult.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.SolutionCombinationDriver"></a>

### *property* AcousticDirectionalVelocityResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.SolverComponentIDs"></a>

### *property* AcousticDirectionalVelocityResult.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Stability"></a>

### *property* AcousticDirectionalVelocityResult.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Substep"></a>

### *property* AcousticDirectionalVelocityResult.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Suppressed"></a>

### *property* AcousticDirectionalVelocityResult.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Surface"></a>

### *property* AcousticDirectionalVelocityResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.SurfaceCoating"></a>

### *property* AcousticDirectionalVelocityResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.SweepingPhase"></a>

### *property* AcousticDirectionalVelocityResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Time"></a>

### *property* AcousticDirectionalVelocityResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticDirectionalVelocityResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticDirectionalVelocityResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticDirectionalVelocityResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticDirectionalVelocityResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Total"></a>

### *property* AcousticDirectionalVelocityResult.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.VisibleProperties"></a>

### *property* AcousticDirectionalVelocityResult.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticDirectionalVelocityResult.Activate"></a>

### AcousticDirectionalVelocityResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.AddAlert"></a>

### AcousticDirectionalVelocityResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.AddComment"></a>

### AcousticDirectionalVelocityResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.AddConvergence"></a>

### AcousticDirectionalVelocityResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.AddFigure"></a>

### AcousticDirectionalVelocityResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.AddImage"></a>

### AcousticDirectionalVelocityResult.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.ClearGeneratedData"></a>

### AcousticDirectionalVelocityResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.CopyTo"></a>

### AcousticDirectionalVelocityResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.CreateParameter"></a>

### AcousticDirectionalVelocityResult.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.CreateResultsAtAllSets"></a>

### AcousticDirectionalVelocityResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Delete"></a>

### AcousticDirectionalVelocityResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.Duplicate"></a>

### AcousticDirectionalVelocityResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.DuplicateWithoutResults"></a>

### AcousticDirectionalVelocityResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.EvaluateAllResults"></a>

### AcousticDirectionalVelocityResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.ExportAnimation"></a>

### AcousticDirectionalVelocityResult.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.ExportToTextFile"></a>

### AcousticDirectionalVelocityResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.FetchRemoteResults"></a>

### AcousticDirectionalVelocityResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.GetChildren"></a>

### AcousticDirectionalVelocityResult.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.GetParameter"></a>

### AcousticDirectionalVelocityResult.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.GroupAllSimilarChildren"></a>

### AcousticDirectionalVelocityResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.GroupSimilarObjects"></a>

### AcousticDirectionalVelocityResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.PromoteToNamedSelection"></a>

### AcousticDirectionalVelocityResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.PropertyByAPIName"></a>

### AcousticDirectionalVelocityResult.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.PropertyByName"></a>

### AcousticDirectionalVelocityResult.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.RemoveParameter"></a>

### AcousticDirectionalVelocityResult.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDirectionalVelocityResult.RenameBasedOnDefinition"></a>

### AcousticDirectionalVelocityResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

