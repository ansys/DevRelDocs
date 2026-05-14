# `ElementalEulerXYAngle`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerXYAngle"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerXYAngle

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementalEulerXYAngle.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElementalEulerXYAngle.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ElementalEulerXYAngle.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ElementalEulerXYAngle.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ElementalEulerXYAngle.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ElementalEulerXYAngle.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementalEulerXYAngle.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ElementalEulerXYAngle.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ElementalEulerXYAngle.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElementalEulerXYAngle.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ElementalEulerXYAngle.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ElementalEulerXYAngle.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElementalEulerXYAngle.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ElementalEulerXYAngle.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ElementalEulerXYAngle.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ElementalEulerXYAngle.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ElementalEulerXYAngle.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ElementalEulerXYAngle.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ElementalEulerXYAngle.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElementalEulerXYAngle.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElementalEulerXYAngle.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementalEulerXYAngle.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ElementalEulerXYAngle.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ElementalEulerXYAngle.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElementalEulerXYAngle.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElementalEulerXYAngle.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ElementalEulerXYAngle.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#ElementalEulerXYAngle.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#ElementalEulerXYAngle.Average)                                                     | Gets the Average.                                                        |
| [`By`](#ElementalEulerXYAngle.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#ElementalEulerXYAngle.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#ElementalEulerXYAngle.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#ElementalEulerXYAngle.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#ElementalEulerXYAngle.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#ElementalEulerXYAngle.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#ElementalEulerXYAngle.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#ElementalEulerXYAngle.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#ElementalEulerXYAngle.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#ElementalEulerXYAngle.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#ElementalEulerXYAngle.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#ElementalEulerXYAngle.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#ElementalEulerXYAngle.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#ElementalEulerXYAngle.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#ElementalEulerXYAngle.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#ElementalEulerXYAngle.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#ElementalEulerXYAngle.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#ElementalEulerXYAngle.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ElementalEulerXYAngle.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#ElementalEulerXYAngle.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#ElementalEulerXYAngle.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadMultiplier`](#ElementalEulerXYAngle.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#ElementalEulerXYAngle.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ElementalEulerXYAngle.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#ElementalEulerXYAngle.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#ElementalEulerXYAngle.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#ElementalEulerXYAngle.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#ElementalEulerXYAngle.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ElementalEulerXYAngle.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#ElementalEulerXYAngle.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#ElementalEulerXYAngle.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#ElementalEulerXYAngle.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#ElementalEulerXYAngle.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#ElementalEulerXYAngle.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#ElementalEulerXYAngle.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#ElementalEulerXYAngle.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#ElementalEulerXYAngle.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#ElementalEulerXYAngle.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#ElementalEulerXYAngle.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#ElementalEulerXYAngle.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#ElementalEulerXYAngle.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#ElementalEulerXYAngle.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#ElementalEulerXYAngle.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#ElementalEulerXYAngle.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#ElementalEulerXYAngle.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ElementalEulerXYAngle.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScaleFactor`](#ElementalEulerXYAngle.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#ElementalEulerXYAngle.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#ElementalEulerXYAngle.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#ElementalEulerXYAngle.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#ElementalEulerXYAngle.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#ElementalEulerXYAngle.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`SubScopeBy`](#ElementalEulerXYAngle.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#ElementalEulerXYAngle.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#ElementalEulerXYAngle.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#ElementalEulerXYAngle.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#ElementalEulerXYAngle.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#ElementalEulerXYAngle.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#ElementalEulerXYAngle.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#ElementalEulerXYAngle.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#ElementalEulerXYAngle.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#ElementalEulerXYAngle.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#ElementalEulerXYAngle.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#ElementalEulerXYAngle.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#ElementalEulerXYAngle.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="ElementalEulerXYAngle.Amplitude"></a>

### *property* ElementalEulerXYAngle.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Average"></a>

### *property* ElementalEulerXYAngle.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.By"></a>

### *property* ElementalEulerXYAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CalculateTimeHistory"></a>

### *property* ElementalEulerXYAngle.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Children"></a>

### *property* ElementalEulerXYAngle.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CombinationNumber"></a>

### *property* ElementalEulerXYAngle.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Comments"></a>

### *property* ElementalEulerXYAngle.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CoordinateSystem"></a>

### *property* ElementalEulerXYAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CrackFrontNumber"></a>

### *property* ElementalEulerXYAngle.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DataModelObjectCategory"></a>

### *property* ElementalEulerXYAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DisplayOption"></a>

### *property* ElementalEulerXYAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DisplayTime"></a>

### *property* ElementalEulerXYAngle.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DpfEvaluation"></a>

### *property* ElementalEulerXYAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Figures"></a>

### *property* ElementalEulerXYAngle.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Frequency"></a>

### *property* ElementalEulerXYAngle.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GlobalIDs"></a>

### *property* ElementalEulerXYAngle.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GraphControlsXAxis"></a>

### *property* ElementalEulerXYAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Identifier"></a>

### *property* ElementalEulerXYAngle.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Images"></a>

### *property* ElementalEulerXYAngle.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.InternalObject"></a>

### *property* ElementalEulerXYAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.IsSolved"></a>

### *property* ElementalEulerXYAngle.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ItemType"></a>

### *property* ElementalEulerXYAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.IterationNumber"></a>

### *property* ElementalEulerXYAngle.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadMultiplier"></a>

### *property* ElementalEulerXYAngle.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStep"></a>

### *property* ElementalEulerXYAngle.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElementalEulerXYAngle.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElementalEulerXYAngle.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElementalEulerXYAngle.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElementalEulerXYAngle.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepNumber"></a>

### *property* ElementalEulerXYAngle.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Location"></a>

### *property* ElementalEulerXYAngle.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Maximum"></a>

### *property* ElementalEulerXYAngle.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MaximumOccursOn"></a>

### *property* ElementalEulerXYAngle.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MaximumOfMaximumOverTime"></a>

### *property* ElementalEulerXYAngle.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MaximumOfMinimumOverTime"></a>

### *property* ElementalEulerXYAngle.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Minimum"></a>

### *property* ElementalEulerXYAngle.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MinimumOccursOn"></a>

### *property* ElementalEulerXYAngle.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MinimumOfMaximumOverTime"></a>

### *property* ElementalEulerXYAngle.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MinimumOfMinimumOverTime"></a>

### *property* ElementalEulerXYAngle.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Mode"></a>

### *property* ElementalEulerXYAngle.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.NamedSelections"></a>

### *property* ElementalEulerXYAngle.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Path"></a>

### *property* ElementalEulerXYAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PhaseIncrement"></a>

### *property* ElementalEulerXYAngle.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PlotData"></a>

### *property* ElementalEulerXYAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Ply"></a>

### *property* ElementalEulerXYAngle.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Position"></a>

### *property* ElementalEulerXYAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Properties"></a>

### *property* ElementalEulerXYAngle.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RPMSelection"></a>

### *property* ElementalEulerXYAngle.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ScaleFactor"></a>

### *property* ElementalEulerXYAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ScaleFactorValue"></a>

### *property* ElementalEulerXYAngle.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ScopingMethod"></a>

### *property* ElementalEulerXYAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SetNumber"></a>

### *property* ElementalEulerXYAngle.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SolutionCombinationDriver"></a>

### *property* ElementalEulerXYAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SolverComponentIDs"></a>

### *property* ElementalEulerXYAngle.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SubScopeBy"></a>

### *property* ElementalEulerXYAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Substep"></a>

### *property* ElementalEulerXYAngle.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Suppressed"></a>

### *property* ElementalEulerXYAngle.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Surface"></a>

### *property* ElementalEulerXYAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SurfaceCoating"></a>

### *property* ElementalEulerXYAngle.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SweepingPhase"></a>

### *property* ElementalEulerXYAngle.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Time"></a>

### *property* ElementalEulerXYAngle.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TimeForMaximumOfMaximumValues"></a>

### *property* ElementalEulerXYAngle.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TimeForMaximumOfMinimumValues"></a>

### *property* ElementalEulerXYAngle.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TimeForMinimumOfMaximumValues"></a>

### *property* ElementalEulerXYAngle.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TimeForMinimumOfMinimumValues"></a>

### *property* ElementalEulerXYAngle.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Total"></a>

### *property* ElementalEulerXYAngle.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.VisibleProperties"></a>

### *property* ElementalEulerXYAngle.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementalEulerXYAngle.Activate"></a>

### ElementalEulerXYAngle.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddAlert"></a>

### ElementalEulerXYAngle.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddComment"></a>

### ElementalEulerXYAngle.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddConvergence"></a>

### ElementalEulerXYAngle.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddFigure"></a>

### ElementalEulerXYAngle.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddImage"></a>

### ElementalEulerXYAngle.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ClearGeneratedData"></a>

### ElementalEulerXYAngle.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CopyTo"></a>

### ElementalEulerXYAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CreateParameter"></a>

### ElementalEulerXYAngle.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CreateResultsAtAllSets"></a>

### ElementalEulerXYAngle.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Delete"></a>

### ElementalEulerXYAngle.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Duplicate"></a>

### ElementalEulerXYAngle.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DuplicateWithoutResults"></a>

### ElementalEulerXYAngle.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.EvaluateAllResults"></a>

### ElementalEulerXYAngle.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ExportAnimation"></a>

### ElementalEulerXYAngle.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ExportToTextFile"></a>

### ElementalEulerXYAngle.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.FetchRemoteResults"></a>

### ElementalEulerXYAngle.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetChildren"></a>

### ElementalEulerXYAngle.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetParameter"></a>

### ElementalEulerXYAngle.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GroupAllSimilarChildren"></a>

### ElementalEulerXYAngle.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GroupSimilarObjects"></a>

### ElementalEulerXYAngle.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PromoteToNamedSelection"></a>

### ElementalEulerXYAngle.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PropertyByAPIName"></a>

### ElementalEulerXYAngle.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PropertyByName"></a>

### ElementalEulerXYAngle.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RemoveParameter"></a>

### ElementalEulerXYAngle.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RenameBasedOnDefinition"></a>

### ElementalEulerXYAngle.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

