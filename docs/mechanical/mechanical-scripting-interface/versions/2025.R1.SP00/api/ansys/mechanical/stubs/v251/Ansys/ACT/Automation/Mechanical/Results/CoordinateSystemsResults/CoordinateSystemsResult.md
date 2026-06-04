# `CoordinateSystemsResult`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.CoordinateSystemsResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.CoordinateSystemsResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CoordinateSystemsResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CoordinateSystemsResult.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#CoordinateSystemsResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#CoordinateSystemsResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#CoordinateSystemsResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#CoordinateSystemsResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CoordinateSystemsResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#CoordinateSystemsResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#CoordinateSystemsResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CoordinateSystemsResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#CoordinateSystemsResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#CoordinateSystemsResult.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CoordinateSystemsResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#CoordinateSystemsResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#CoordinateSystemsResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#CoordinateSystemsResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#CoordinateSystemsResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#CoordinateSystemsResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#CoordinateSystemsResult.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CoordinateSystemsResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CoordinateSystemsResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CoordinateSystemsResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#CoordinateSystemsResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#CoordinateSystemsResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CoordinateSystemsResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CoordinateSystemsResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#CoordinateSystemsResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#CoordinateSystemsResult.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#CoordinateSystemsResult.Average)                                                     | Gets the Average.                                                        |
| [`By`](#CoordinateSystemsResult.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#CoordinateSystemsResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#CoordinateSystemsResult.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#CoordinateSystemsResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#CoordinateSystemsResult.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#CoordinateSystemsResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#CoordinateSystemsResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#CoordinateSystemsResult.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#CoordinateSystemsResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#CoordinateSystemsResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#CoordinateSystemsResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#CoordinateSystemsResult.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#CoordinateSystemsResult.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#CoordinateSystemsResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#CoordinateSystemsResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#CoordinateSystemsResult.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#CoordinateSystemsResult.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#CoordinateSystemsResult.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#CoordinateSystemsResult.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#CoordinateSystemsResult.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#CoordinateSystemsResult.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadMultiplier`](#CoordinateSystemsResult.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#CoordinateSystemsResult.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#CoordinateSystemsResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#CoordinateSystemsResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#CoordinateSystemsResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#CoordinateSystemsResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#CoordinateSystemsResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#CoordinateSystemsResult.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#CoordinateSystemsResult.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#CoordinateSystemsResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#CoordinateSystemsResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#CoordinateSystemsResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#CoordinateSystemsResult.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#CoordinateSystemsResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#CoordinateSystemsResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#CoordinateSystemsResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#CoordinateSystemsResult.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#CoordinateSystemsResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#CoordinateSystemsResult.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#CoordinateSystemsResult.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#CoordinateSystemsResult.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#CoordinateSystemsResult.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#CoordinateSystemsResult.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#CoordinateSystemsResult.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#CoordinateSystemsResult.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScaleFactor`](#CoordinateSystemsResult.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#CoordinateSystemsResult.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#CoordinateSystemsResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#CoordinateSystemsResult.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#CoordinateSystemsResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#CoordinateSystemsResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`SubScopeBy`](#CoordinateSystemsResult.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#CoordinateSystemsResult.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#CoordinateSystemsResult.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#CoordinateSystemsResult.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#CoordinateSystemsResult.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#CoordinateSystemsResult.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#CoordinateSystemsResult.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#CoordinateSystemsResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#CoordinateSystemsResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#CoordinateSystemsResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#CoordinateSystemsResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#CoordinateSystemsResult.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#CoordinateSystemsResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="CoordinateSystemsResult.Amplitude"></a>

### *property* CoordinateSystemsResult.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Average"></a>

### *property* CoordinateSystemsResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.By"></a>

### *property* CoordinateSystemsResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CalculateTimeHistory"></a>

### *property* CoordinateSystemsResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Children"></a>

### *property* CoordinateSystemsResult.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CombinationNumber"></a>

### *property* CoordinateSystemsResult.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Comments"></a>

### *property* CoordinateSystemsResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CoordinateSystem"></a>

### *property* CoordinateSystemsResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CrackFrontNumber"></a>

### *property* CoordinateSystemsResult.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DataModelObjectCategory"></a>

### *property* CoordinateSystemsResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DisplayOption"></a>

### *property* CoordinateSystemsResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DisplayTime"></a>

### *property* CoordinateSystemsResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DpfEvaluation"></a>

### *property* CoordinateSystemsResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Figures"></a>

### *property* CoordinateSystemsResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Frequency"></a>

### *property* CoordinateSystemsResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GlobalIDs"></a>

### *property* CoordinateSystemsResult.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GraphControlsXAxis"></a>

### *property* CoordinateSystemsResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Identifier"></a>

### *property* CoordinateSystemsResult.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Images"></a>

### *property* CoordinateSystemsResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.InternalObject"></a>

### *property* CoordinateSystemsResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.IsSolved"></a>

### *property* CoordinateSystemsResult.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ItemType"></a>

### *property* CoordinateSystemsResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.IterationNumber"></a>

### *property* CoordinateSystemsResult.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadMultiplier"></a>

### *property* CoordinateSystemsResult.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStep"></a>

### *property* CoordinateSystemsResult.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* CoordinateSystemsResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* CoordinateSystemsResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* CoordinateSystemsResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* CoordinateSystemsResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.LoadStepNumber"></a>

### *property* CoordinateSystemsResult.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Location"></a>

### *property* CoordinateSystemsResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Maximum"></a>

### *property* CoordinateSystemsResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MaximumOccursOn"></a>

### *property* CoordinateSystemsResult.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MaximumOfMaximumOverTime"></a>

### *property* CoordinateSystemsResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MaximumOfMinimumOverTime"></a>

### *property* CoordinateSystemsResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Minimum"></a>

### *property* CoordinateSystemsResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MinimumOccursOn"></a>

### *property* CoordinateSystemsResult.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MinimumOfMaximumOverTime"></a>

### *property* CoordinateSystemsResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.MinimumOfMinimumOverTime"></a>

### *property* CoordinateSystemsResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Mode"></a>

### *property* CoordinateSystemsResult.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.NamedSelections"></a>

### *property* CoordinateSystemsResult.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Path"></a>

### *property* CoordinateSystemsResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PhaseIncrement"></a>

### *property* CoordinateSystemsResult.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PlotData"></a>

### *property* CoordinateSystemsResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Ply"></a>

### *property* CoordinateSystemsResult.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Position"></a>

### *property* CoordinateSystemsResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Properties"></a>

### *property* CoordinateSystemsResult.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.RPMSelection"></a>

### *property* CoordinateSystemsResult.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ScaleFactor"></a>

### *property* CoordinateSystemsResult.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ScaleFactorValue"></a>

### *property* CoordinateSystemsResult.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ScopingMethod"></a>

### *property* CoordinateSystemsResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SetNumber"></a>

### *property* CoordinateSystemsResult.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SolutionCombinationDriver"></a>

### *property* CoordinateSystemsResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SolverComponentIDs"></a>

### *property* CoordinateSystemsResult.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SubScopeBy"></a>

### *property* CoordinateSystemsResult.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Substep"></a>

### *property* CoordinateSystemsResult.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Suppressed"></a>

### *property* CoordinateSystemsResult.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Surface"></a>

### *property* CoordinateSystemsResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SurfaceCoating"></a>

### *property* CoordinateSystemsResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.SweepingPhase"></a>

### *property* CoordinateSystemsResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Time"></a>

### *property* CoordinateSystemsResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.TimeForMaximumOfMaximumValues"></a>

### *property* CoordinateSystemsResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.TimeForMaximumOfMinimumValues"></a>

### *property* CoordinateSystemsResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.TimeForMinimumOfMaximumValues"></a>

### *property* CoordinateSystemsResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.TimeForMinimumOfMinimumValues"></a>

### *property* CoordinateSystemsResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Total"></a>

### *property* CoordinateSystemsResult.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.VisibleProperties"></a>

### *property* CoordinateSystemsResult.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoordinateSystemsResult.Activate"></a>

### CoordinateSystemsResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddAlert"></a>

### CoordinateSystemsResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddComment"></a>

### CoordinateSystemsResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddConvergence"></a>

### CoordinateSystemsResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddFigure"></a>

### CoordinateSystemsResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.AddImage"></a>

### CoordinateSystemsResult.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ClearGeneratedData"></a>

### CoordinateSystemsResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CopyTo"></a>

### CoordinateSystemsResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CreateParameter"></a>

### CoordinateSystemsResult.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.CreateResultsAtAllSets"></a>

### CoordinateSystemsResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Delete"></a>

### CoordinateSystemsResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.Duplicate"></a>

### CoordinateSystemsResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.DuplicateWithoutResults"></a>

### CoordinateSystemsResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.EvaluateAllResults"></a>

### CoordinateSystemsResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ExportAnimation"></a>

### CoordinateSystemsResult.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.ExportToTextFile"></a>

### CoordinateSystemsResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.FetchRemoteResults"></a>

### CoordinateSystemsResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GetChildren"></a>

### CoordinateSystemsResult.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GetParameter"></a>

### CoordinateSystemsResult.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GroupAllSimilarChildren"></a>

### CoordinateSystemsResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.GroupSimilarObjects"></a>

### CoordinateSystemsResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PromoteToNamedSelection"></a>

### CoordinateSystemsResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PropertyByAPIName"></a>

### CoordinateSystemsResult.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.PropertyByName"></a>

### CoordinateSystemsResult.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.RemoveParameter"></a>

### CoordinateSystemsResult.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoordinateSystemsResult.RenameBasedOnDefinition"></a>

### CoordinateSystemsResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

