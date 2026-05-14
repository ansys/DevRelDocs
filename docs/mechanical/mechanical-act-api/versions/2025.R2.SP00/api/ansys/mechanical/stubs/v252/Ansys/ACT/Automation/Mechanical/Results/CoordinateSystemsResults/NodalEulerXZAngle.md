# `NodalEulerXZAngle`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerXZAngle"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerXZAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalEulerXZAngle.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#NodalEulerXZAngle.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#NodalEulerXZAngle.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#NodalEulerXZAngle.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#NodalEulerXZAngle.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#NodalEulerXZAngle.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#NodalEulerXZAngle.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#NodalEulerXZAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#NodalEulerXZAngle.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#NodalEulerXZAngle.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#NodalEulerXZAngle.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#NodalEulerXZAngle.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#NodalEulerXZAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#NodalEulerXZAngle.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#NodalEulerXZAngle.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#NodalEulerXZAngle.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#NodalEulerXZAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#NodalEulerXZAngle.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#NodalEulerXZAngle.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#NodalEulerXZAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#NodalEulerXZAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#NodalEulerXZAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#NodalEulerXZAngle.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#NodalEulerXZAngle.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#NodalEulerXZAngle.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#NodalEulerXZAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#NodalEulerXZAngle.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#NodalEulerXZAngle.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#NodalEulerXZAngle.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#NodalEulerXZAngle.Average)                                                     | Gets the Average.                                                        |
| [`By`](#NodalEulerXZAngle.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#NodalEulerXZAngle.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#NodalEulerXZAngle.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#NodalEulerXZAngle.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#NodalEulerXZAngle.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#NodalEulerXZAngle.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#NodalEulerXZAngle.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#NodalEulerXZAngle.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#NodalEulerXZAngle.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#NodalEulerXZAngle.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#NodalEulerXZAngle.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#NodalEulerXZAngle.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#NodalEulerXZAngle.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#NodalEulerXZAngle.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#NodalEulerXZAngle.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#NodalEulerXZAngle.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#NodalEulerXZAngle.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#NodalEulerXZAngle.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#NodalEulerXZAngle.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#NodalEulerXZAngle.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#NodalEulerXZAngle.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadMultiplier`](#NodalEulerXZAngle.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#NodalEulerXZAngle.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NodalEulerXZAngle.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#NodalEulerXZAngle.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#NodalEulerXZAngle.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#NodalEulerXZAngle.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#NodalEulerXZAngle.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#NodalEulerXZAngle.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#NodalEulerXZAngle.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#NodalEulerXZAngle.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#NodalEulerXZAngle.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#NodalEulerXZAngle.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#NodalEulerXZAngle.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#NodalEulerXZAngle.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#NodalEulerXZAngle.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#NodalEulerXZAngle.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#NodalEulerXZAngle.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#NodalEulerXZAngle.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#NodalEulerXZAngle.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#NodalEulerXZAngle.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#NodalEulerXZAngle.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#NodalEulerXZAngle.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#NodalEulerXZAngle.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#NodalEulerXZAngle.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#NodalEulerXZAngle.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScaleFactor`](#NodalEulerXZAngle.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#NodalEulerXZAngle.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#NodalEulerXZAngle.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#NodalEulerXZAngle.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#NodalEulerXZAngle.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#NodalEulerXZAngle.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`SubScopeBy`](#NodalEulerXZAngle.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#NodalEulerXZAngle.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#NodalEulerXZAngle.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#NodalEulerXZAngle.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#NodalEulerXZAngle.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#NodalEulerXZAngle.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#NodalEulerXZAngle.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#NodalEulerXZAngle.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#NodalEulerXZAngle.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#NodalEulerXZAngle.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#NodalEulerXZAngle.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#NodalEulerXZAngle.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#NodalEulerXZAngle.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="NodalEulerXZAngle.Amplitude"></a>

### *property* NodalEulerXZAngle.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Average"></a>

### *property* NodalEulerXZAngle.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.By"></a>

### *property* NodalEulerXZAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CalculateTimeHistory"></a>

### *property* NodalEulerXZAngle.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Children"></a>

### *property* NodalEulerXZAngle.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CombinationNumber"></a>

### *property* NodalEulerXZAngle.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Comments"></a>

### *property* NodalEulerXZAngle.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CoordinateSystem"></a>

### *property* NodalEulerXZAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CrackFrontNumber"></a>

### *property* NodalEulerXZAngle.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DataModelObjectCategory"></a>

### *property* NodalEulerXZAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DisplayOption"></a>

### *property* NodalEulerXZAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DisplayTime"></a>

### *property* NodalEulerXZAngle.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DpfEvaluation"></a>

### *property* NodalEulerXZAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Figures"></a>

### *property* NodalEulerXZAngle.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Frequency"></a>

### *property* NodalEulerXZAngle.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GlobalIDs"></a>

### *property* NodalEulerXZAngle.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GraphControlsXAxis"></a>

### *property* NodalEulerXZAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Identifier"></a>

### *property* NodalEulerXZAngle.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Images"></a>

### *property* NodalEulerXZAngle.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.InternalObject"></a>

### *property* NodalEulerXZAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.IsSolved"></a>

### *property* NodalEulerXZAngle.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ItemType"></a>

### *property* NodalEulerXZAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.IterationNumber"></a>

### *property* NodalEulerXZAngle.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadMultiplier"></a>

### *property* NodalEulerXZAngle.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStep"></a>

### *property* NodalEulerXZAngle.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* NodalEulerXZAngle.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* NodalEulerXZAngle.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* NodalEulerXZAngle.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* NodalEulerXZAngle.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.LoadStepNumber"></a>

### *property* NodalEulerXZAngle.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Location"></a>

### *property* NodalEulerXZAngle.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Maximum"></a>

### *property* NodalEulerXZAngle.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MaximumOccursOn"></a>

### *property* NodalEulerXZAngle.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MaximumOfMaximumOverTime"></a>

### *property* NodalEulerXZAngle.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MaximumOfMinimumOverTime"></a>

### *property* NodalEulerXZAngle.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Minimum"></a>

### *property* NodalEulerXZAngle.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MinimumOccursOn"></a>

### *property* NodalEulerXZAngle.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MinimumOfMaximumOverTime"></a>

### *property* NodalEulerXZAngle.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.MinimumOfMinimumOverTime"></a>

### *property* NodalEulerXZAngle.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Mode"></a>

### *property* NodalEulerXZAngle.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.NamedSelections"></a>

### *property* NodalEulerXZAngle.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Path"></a>

### *property* NodalEulerXZAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PhaseIncrement"></a>

### *property* NodalEulerXZAngle.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PlotData"></a>

### *property* NodalEulerXZAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Ply"></a>

### *property* NodalEulerXZAngle.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Position"></a>

### *property* NodalEulerXZAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Properties"></a>

### *property* NodalEulerXZAngle.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.RPMSelection"></a>

### *property* NodalEulerXZAngle.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ScaleFactor"></a>

### *property* NodalEulerXZAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ScaleFactorValue"></a>

### *property* NodalEulerXZAngle.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ScopingMethod"></a>

### *property* NodalEulerXZAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SetNumber"></a>

### *property* NodalEulerXZAngle.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SolutionCombinationDriver"></a>

### *property* NodalEulerXZAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SolverComponentIDs"></a>

### *property* NodalEulerXZAngle.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SubScopeBy"></a>

### *property* NodalEulerXZAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Substep"></a>

### *property* NodalEulerXZAngle.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Suppressed"></a>

### *property* NodalEulerXZAngle.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Surface"></a>

### *property* NodalEulerXZAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SurfaceCoating"></a>

### *property* NodalEulerXZAngle.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.SweepingPhase"></a>

### *property* NodalEulerXZAngle.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Time"></a>

### *property* NodalEulerXZAngle.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.TimeForMaximumOfMaximumValues"></a>

### *property* NodalEulerXZAngle.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.TimeForMaximumOfMinimumValues"></a>

### *property* NodalEulerXZAngle.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.TimeForMinimumOfMaximumValues"></a>

### *property* NodalEulerXZAngle.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.TimeForMinimumOfMinimumValues"></a>

### *property* NodalEulerXZAngle.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Total"></a>

### *property* NodalEulerXZAngle.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.VisibleProperties"></a>

### *property* NodalEulerXZAngle.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalEulerXZAngle.Activate"></a>

### NodalEulerXZAngle.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddAlert"></a>

### NodalEulerXZAngle.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddComment"></a>

### NodalEulerXZAngle.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddConvergence"></a>

### NodalEulerXZAngle.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddFigure"></a>

### NodalEulerXZAngle.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.AddImage"></a>

### NodalEulerXZAngle.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ClearGeneratedData"></a>

### NodalEulerXZAngle.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CopyTo"></a>

### NodalEulerXZAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CreateParameter"></a>

### NodalEulerXZAngle.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.CreateResultsAtAllSets"></a>

### NodalEulerXZAngle.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Delete"></a>

### NodalEulerXZAngle.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.Duplicate"></a>

### NodalEulerXZAngle.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.DuplicateWithoutResults"></a>

### NodalEulerXZAngle.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.EvaluateAllResults"></a>

### NodalEulerXZAngle.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ExportAnimation"></a>

### NodalEulerXZAngle.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.ExportToTextFile"></a>

### NodalEulerXZAngle.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.FetchRemoteResults"></a>

### NodalEulerXZAngle.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GetChildren"></a>

### NodalEulerXZAngle.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GetParameter"></a>

### NodalEulerXZAngle.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GroupAllSimilarChildren"></a>

### NodalEulerXZAngle.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.GroupSimilarObjects"></a>

### NodalEulerXZAngle.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PromoteToNamedSelection"></a>

### NodalEulerXZAngle.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PropertyByAPIName"></a>

### NodalEulerXZAngle.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.PropertyByName"></a>

### NodalEulerXZAngle.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.RemoveParameter"></a>

### NodalEulerXZAngle.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.RenameBasedOnDefinition"></a>

### NodalEulerXZAngle.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NodalEulerXZAngle.RetrieveResult"></a>

### NodalEulerXZAngle.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

