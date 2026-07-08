# `NodalEulerYZAngle`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerYZAngle"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerYZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalEulerYZAngle.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NodalEulerYZAngle.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#NodalEulerYZAngle.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#NodalEulerYZAngle.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#NodalEulerYZAngle.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#NodalEulerYZAngle.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalEulerYZAngle.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#NodalEulerYZAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#NodalEulerYZAngle.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NodalEulerYZAngle.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#NodalEulerYZAngle.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#NodalEulerYZAngle.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#NodalEulerYZAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#NodalEulerYZAngle.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#NodalEulerYZAngle.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#NodalEulerYZAngle.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#NodalEulerYZAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#NodalEulerYZAngle.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#NodalEulerYZAngle.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NodalEulerYZAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NodalEulerYZAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalEulerYZAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#NodalEulerYZAngle.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#NodalEulerYZAngle.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#NodalEulerYZAngle.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NodalEulerYZAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#NodalEulerYZAngle.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#NodalEulerYZAngle.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#NodalEulerYZAngle.Average)                                                     | Gets the Average.                                                        |
| [`By`](#NodalEulerYZAngle.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#NodalEulerYZAngle.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#NodalEulerYZAngle.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#NodalEulerYZAngle.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#NodalEulerYZAngle.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#NodalEulerYZAngle.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#NodalEulerYZAngle.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#NodalEulerYZAngle.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#NodalEulerYZAngle.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#NodalEulerYZAngle.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#NodalEulerYZAngle.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#NodalEulerYZAngle.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#NodalEulerYZAngle.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#NodalEulerYZAngle.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#NodalEulerYZAngle.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#NodalEulerYZAngle.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#NodalEulerYZAngle.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#NodalEulerYZAngle.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#NodalEulerYZAngle.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#NodalEulerYZAngle.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#NodalEulerYZAngle.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadMultiplier`](#NodalEulerYZAngle.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#NodalEulerYZAngle.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NodalEulerYZAngle.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#NodalEulerYZAngle.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#NodalEulerYZAngle.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#NodalEulerYZAngle.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#NodalEulerYZAngle.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#NodalEulerYZAngle.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#NodalEulerYZAngle.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#NodalEulerYZAngle.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#NodalEulerYZAngle.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#NodalEulerYZAngle.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#NodalEulerYZAngle.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#NodalEulerYZAngle.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#NodalEulerYZAngle.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#NodalEulerYZAngle.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#NodalEulerYZAngle.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#NodalEulerYZAngle.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#NodalEulerYZAngle.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#NodalEulerYZAngle.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#NodalEulerYZAngle.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#NodalEulerYZAngle.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#NodalEulerYZAngle.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#NodalEulerYZAngle.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#NodalEulerYZAngle.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScaleFactor`](#NodalEulerYZAngle.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#NodalEulerYZAngle.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#NodalEulerYZAngle.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#NodalEulerYZAngle.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#NodalEulerYZAngle.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#NodalEulerYZAngle.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`SubScopeBy`](#NodalEulerYZAngle.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#NodalEulerYZAngle.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#NodalEulerYZAngle.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#NodalEulerYZAngle.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#NodalEulerYZAngle.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#NodalEulerYZAngle.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#NodalEulerYZAngle.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#NodalEulerYZAngle.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#NodalEulerYZAngle.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#NodalEulerYZAngle.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#NodalEulerYZAngle.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#NodalEulerYZAngle.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#NodalEulerYZAngle.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="NodalEulerYZAngle.Amplitude"></a>

### *property* NodalEulerYZAngle.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Average"></a>

### *property* NodalEulerYZAngle.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.By"></a>

### *property* NodalEulerYZAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CalculateTimeHistory"></a>

### *property* NodalEulerYZAngle.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Children"></a>

### *property* NodalEulerYZAngle.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CombinationNumber"></a>

### *property* NodalEulerYZAngle.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Comments"></a>

### *property* NodalEulerYZAngle.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CoordinateSystem"></a>

### *property* NodalEulerYZAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CrackFrontNumber"></a>

### *property* NodalEulerYZAngle.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DataModelObjectCategory"></a>

### *property* NodalEulerYZAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DisplayOption"></a>

### *property* NodalEulerYZAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DisplayTime"></a>

### *property* NodalEulerYZAngle.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DpfEvaluation"></a>

### *property* NodalEulerYZAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Figures"></a>

### *property* NodalEulerYZAngle.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Frequency"></a>

### *property* NodalEulerYZAngle.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GlobalIDs"></a>

### *property* NodalEulerYZAngle.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GraphControlsXAxis"></a>

### *property* NodalEulerYZAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Identifier"></a>

### *property* NodalEulerYZAngle.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Images"></a>

### *property* NodalEulerYZAngle.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.InternalObject"></a>

### *property* NodalEulerYZAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.IsSolved"></a>

### *property* NodalEulerYZAngle.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ItemType"></a>

### *property* NodalEulerYZAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.IterationNumber"></a>

### *property* NodalEulerYZAngle.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadMultiplier"></a>

### *property* NodalEulerYZAngle.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStep"></a>

### *property* NodalEulerYZAngle.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* NodalEulerYZAngle.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* NodalEulerYZAngle.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* NodalEulerYZAngle.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* NodalEulerYZAngle.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.LoadStepNumber"></a>

### *property* NodalEulerYZAngle.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Location"></a>

### *property* NodalEulerYZAngle.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Maximum"></a>

### *property* NodalEulerYZAngle.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MaximumOccursOn"></a>

### *property* NodalEulerYZAngle.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MaximumOfMaximumOverTime"></a>

### *property* NodalEulerYZAngle.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MaximumOfMinimumOverTime"></a>

### *property* NodalEulerYZAngle.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Minimum"></a>

### *property* NodalEulerYZAngle.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MinimumOccursOn"></a>

### *property* NodalEulerYZAngle.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MinimumOfMaximumOverTime"></a>

### *property* NodalEulerYZAngle.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.MinimumOfMinimumOverTime"></a>

### *property* NodalEulerYZAngle.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Mode"></a>

### *property* NodalEulerYZAngle.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.NamedSelections"></a>

### *property* NodalEulerYZAngle.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Path"></a>

### *property* NodalEulerYZAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PhaseIncrement"></a>

### *property* NodalEulerYZAngle.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PlotData"></a>

### *property* NodalEulerYZAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Ply"></a>

### *property* NodalEulerYZAngle.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Position"></a>

### *property* NodalEulerYZAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Properties"></a>

### *property* NodalEulerYZAngle.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.RPMSelection"></a>

### *property* NodalEulerYZAngle.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ScaleFactor"></a>

### *property* NodalEulerYZAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ScaleFactorValue"></a>

### *property* NodalEulerYZAngle.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ScopingMethod"></a>

### *property* NodalEulerYZAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SetNumber"></a>

### *property* NodalEulerYZAngle.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SolutionCombinationDriver"></a>

### *property* NodalEulerYZAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SolverComponentIDs"></a>

### *property* NodalEulerYZAngle.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SubScopeBy"></a>

### *property* NodalEulerYZAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Substep"></a>

### *property* NodalEulerYZAngle.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Suppressed"></a>

### *property* NodalEulerYZAngle.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Surface"></a>

### *property* NodalEulerYZAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SurfaceCoating"></a>

### *property* NodalEulerYZAngle.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.SweepingPhase"></a>

### *property* NodalEulerYZAngle.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Time"></a>

### *property* NodalEulerYZAngle.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.TimeForMaximumOfMaximumValues"></a>

### *property* NodalEulerYZAngle.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.TimeForMaximumOfMinimumValues"></a>

### *property* NodalEulerYZAngle.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.TimeForMinimumOfMaximumValues"></a>

### *property* NodalEulerYZAngle.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.TimeForMinimumOfMinimumValues"></a>

### *property* NodalEulerYZAngle.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Total"></a>

### *property* NodalEulerYZAngle.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.VisibleProperties"></a>

### *property* NodalEulerYZAngle.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalEulerYZAngle.Activate"></a>

### NodalEulerYZAngle.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddAlert"></a>

### NodalEulerYZAngle.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddComment"></a>

### NodalEulerYZAngle.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddConvergence"></a>

### NodalEulerYZAngle.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddFigure"></a>

### NodalEulerYZAngle.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.AddImage"></a>

### NodalEulerYZAngle.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ClearGeneratedData"></a>

### NodalEulerYZAngle.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CopyTo"></a>

### NodalEulerYZAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CreateParameter"></a>

### NodalEulerYZAngle.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.CreateResultsAtAllSets"></a>

### NodalEulerYZAngle.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Delete"></a>

### NodalEulerYZAngle.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.Duplicate"></a>

### NodalEulerYZAngle.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.DuplicateWithoutResults"></a>

### NodalEulerYZAngle.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.EvaluateAllResults"></a>

### NodalEulerYZAngle.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ExportAnimation"></a>

### NodalEulerYZAngle.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.ExportToTextFile"></a>

### NodalEulerYZAngle.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.FetchRemoteResults"></a>

### NodalEulerYZAngle.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GetChildren"></a>

### NodalEulerYZAngle.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GetParameter"></a>

### NodalEulerYZAngle.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GroupAllSimilarChildren"></a>

### NodalEulerYZAngle.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.GroupSimilarObjects"></a>

### NodalEulerYZAngle.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PromoteToNamedSelection"></a>

### NodalEulerYZAngle.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PropertyByAPIName"></a>

### NodalEulerYZAngle.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.PropertyByName"></a>

### NodalEulerYZAngle.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.RemoveParameter"></a>

### NodalEulerYZAngle.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerYZAngle.RenameBasedOnDefinition"></a>

### NodalEulerYZAngle.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

