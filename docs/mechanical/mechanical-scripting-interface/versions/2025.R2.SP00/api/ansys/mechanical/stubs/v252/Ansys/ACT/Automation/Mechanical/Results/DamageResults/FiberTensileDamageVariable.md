# `FiberTensileDamageVariable`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileDamageVariable"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileDamageVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FiberTensileDamageVariable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#FiberTensileDamageVariable.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#FiberTensileDamageVariable.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#FiberTensileDamageVariable.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#FiberTensileDamageVariable.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#FiberTensileDamageVariable.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#FiberTensileDamageVariable.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#FiberTensileDamageVariable.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#FiberTensileDamageVariable.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#FiberTensileDamageVariable.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#FiberTensileDamageVariable.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#FiberTensileDamageVariable.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#FiberTensileDamageVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#FiberTensileDamageVariable.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#FiberTensileDamageVariable.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#FiberTensileDamageVariable.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#FiberTensileDamageVariable.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#FiberTensileDamageVariable.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#FiberTensileDamageVariable.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#FiberTensileDamageVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#FiberTensileDamageVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#FiberTensileDamageVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#FiberTensileDamageVariable.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#FiberTensileDamageVariable.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#FiberTensileDamageVariable.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#FiberTensileDamageVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#FiberTensileDamageVariable.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#FiberTensileDamageVariable.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#FiberTensileDamageVariable.Average)                                                     | Gets the Average.                                                        |
| [`By`](#FiberTensileDamageVariable.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#FiberTensileDamageVariable.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#FiberTensileDamageVariable.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#FiberTensileDamageVariable.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#FiberTensileDamageVariable.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#FiberTensileDamageVariable.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#FiberTensileDamageVariable.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DamageResultType`](#FiberTensileDamageVariable.DamageResultType)                                   | Gets the DamageResultType.                                               |
| [`DataModelObjectCategory`](#FiberTensileDamageVariable.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#FiberTensileDamageVariable.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#FiberTensileDamageVariable.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#FiberTensileDamageVariable.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#FiberTensileDamageVariable.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#FiberTensileDamageVariable.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#FiberTensileDamageVariable.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#FiberTensileDamageVariable.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#FiberTensileDamageVariable.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#FiberTensileDamageVariable.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#FiberTensileDamageVariable.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#FiberTensileDamageVariable.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#FiberTensileDamageVariable.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#FiberTensileDamageVariable.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FiberTensileDamageVariable.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#FiberTensileDamageVariable.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#FiberTensileDamageVariable.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#FiberTensileDamageVariable.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#FiberTensileDamageVariable.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#FiberTensileDamageVariable.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#FiberTensileDamageVariable.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#FiberTensileDamageVariable.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#FiberTensileDamageVariable.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#FiberTensileDamageVariable.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#FiberTensileDamageVariable.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#FiberTensileDamageVariable.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#FiberTensileDamageVariable.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#FiberTensileDamageVariable.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#FiberTensileDamageVariable.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#FiberTensileDamageVariable.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#FiberTensileDamageVariable.Path)                                                           | Path property.                                                           |
| [`Plies`](#FiberTensileDamageVariable.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#FiberTensileDamageVariable.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#FiberTensileDamageVariable.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Properties`](#FiberTensileDamageVariable.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#FiberTensileDamageVariable.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#FiberTensileDamageVariable.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#FiberTensileDamageVariable.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#FiberTensileDamageVariable.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#FiberTensileDamageVariable.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#FiberTensileDamageVariable.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#FiberTensileDamageVariable.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#FiberTensileDamageVariable.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#FiberTensileDamageVariable.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#FiberTensileDamageVariable.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#FiberTensileDamageVariable.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#FiberTensileDamageVariable.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#FiberTensileDamageVariable.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#FiberTensileDamageVariable.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#FiberTensileDamageVariable.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#FiberTensileDamageVariable.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="FiberTensileDamageVariable.Average"></a>

### *property* FiberTensileDamageVariable.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.By"></a>

### *property* FiberTensileDamageVariable.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CalculateTimeHistory"></a>

### *property* FiberTensileDamageVariable.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Children"></a>

### *property* FiberTensileDamageVariable.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CombinationNumber"></a>

### *property* FiberTensileDamageVariable.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Comments"></a>

### *property* FiberTensileDamageVariable.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CoordinateSystem"></a>

### *property* FiberTensileDamageVariable.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CrackFrontNumber"></a>

### *property* FiberTensileDamageVariable.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DamageResultType"></a>

### *property* FiberTensileDamageVariable.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DataModelObjectCategory"></a>

### *property* FiberTensileDamageVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DisplayOption"></a>

### *property* FiberTensileDamageVariable.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DisplayTime"></a>

### *property* FiberTensileDamageVariable.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DpfEvaluation"></a>

### *property* FiberTensileDamageVariable.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Figures"></a>

### *property* FiberTensileDamageVariable.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GlobalIDs"></a>

### *property* FiberTensileDamageVariable.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GraphControlsXAxis"></a>

### *property* FiberTensileDamageVariable.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Identifier"></a>

### *property* FiberTensileDamageVariable.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Images"></a>

### *property* FiberTensileDamageVariable.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.InternalObject"></a>

### *property* FiberTensileDamageVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.IsSolved"></a>

### *property* FiberTensileDamageVariable.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ItemType"></a>

### *property* FiberTensileDamageVariable.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.IterationNumber"></a>

### *property* FiberTensileDamageVariable.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStep"></a>

### *property* FiberTensileDamageVariable.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepForMaximumOfMaximumValues"></a>

### *property* FiberTensileDamageVariable.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepForMaximumOfMinimumValues"></a>

### *property* FiberTensileDamageVariable.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepForMinimumOfMaximumValues"></a>

### *property* FiberTensileDamageVariable.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepForMinimumOfMinimumValues"></a>

### *property* FiberTensileDamageVariable.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepNumber"></a>

### *property* FiberTensileDamageVariable.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Location"></a>

### *property* FiberTensileDamageVariable.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Maximum"></a>

### *property* FiberTensileDamageVariable.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MaximumOccursOn"></a>

### *property* FiberTensileDamageVariable.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MaximumOfMaximumOverTime"></a>

### *property* FiberTensileDamageVariable.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MaximumOfMinimumOverTime"></a>

### *property* FiberTensileDamageVariable.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Minimum"></a>

### *property* FiberTensileDamageVariable.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MinimumOccursOn"></a>

### *property* FiberTensileDamageVariable.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MinimumOfMaximumOverTime"></a>

### *property* FiberTensileDamageVariable.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MinimumOfMinimumOverTime"></a>

### *property* FiberTensileDamageVariable.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Mode"></a>

### *property* FiberTensileDamageVariable.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.NamedSelections"></a>

### *property* FiberTensileDamageVariable.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Path"></a>

### *property* FiberTensileDamageVariable.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Plies"></a>

### *property* FiberTensileDamageVariable.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PlotData"></a>

### *property* FiberTensileDamageVariable.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Ply"></a>

### *property* FiberTensileDamageVariable.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Properties"></a>

### *property* FiberTensileDamageVariable.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RPMSelection"></a>

### *property* FiberTensileDamageVariable.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ScopingMethod"></a>

### *property* FiberTensileDamageVariable.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SetNumber"></a>

### *property* FiberTensileDamageVariable.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SolutionCombinationDriver"></a>

### *property* FiberTensileDamageVariable.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SolverComponentIDs"></a>

### *property* FiberTensileDamageVariable.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Substep"></a>

### *property* FiberTensileDamageVariable.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Suppressed"></a>

### *property* FiberTensileDamageVariable.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Surface"></a>

### *property* FiberTensileDamageVariable.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SurfaceCoating"></a>

### *property* FiberTensileDamageVariable.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Time"></a>

### *property* FiberTensileDamageVariable.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TimeForMaximumOfMaximumValues"></a>

### *property* FiberTensileDamageVariable.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TimeForMaximumOfMinimumValues"></a>

### *property* FiberTensileDamageVariable.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TimeForMinimumOfMaximumValues"></a>

### *property* FiberTensileDamageVariable.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TimeForMinimumOfMinimumValues"></a>

### *property* FiberTensileDamageVariable.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Total"></a>

### *property* FiberTensileDamageVariable.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.VisibleProperties"></a>

### *property* FiberTensileDamageVariable.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FiberTensileDamageVariable.Activate"></a>

### FiberTensileDamageVariable.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddAlert"></a>

### FiberTensileDamageVariable.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddComment"></a>

### FiberTensileDamageVariable.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddConvergence"></a>

### FiberTensileDamageVariable.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddFigure"></a>

### FiberTensileDamageVariable.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddImage"></a>

### FiberTensileDamageVariable.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ClearGeneratedData"></a>

### FiberTensileDamageVariable.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CopyTo"></a>

### FiberTensileDamageVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CreateParameter"></a>

### FiberTensileDamageVariable.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CreateResultsAtAllSets"></a>

### FiberTensileDamageVariable.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Delete"></a>

### FiberTensileDamageVariable.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Duplicate"></a>

### FiberTensileDamageVariable.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DuplicateWithoutResults"></a>

### FiberTensileDamageVariable.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.EvaluateAllResults"></a>

### FiberTensileDamageVariable.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ExportAnimation"></a>

### FiberTensileDamageVariable.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ExportToTextFile"></a>

### FiberTensileDamageVariable.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.FetchRemoteResults"></a>

### FiberTensileDamageVariable.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetChildren"></a>

### FiberTensileDamageVariable.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetParameter"></a>

### FiberTensileDamageVariable.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GroupAllSimilarChildren"></a>

### FiberTensileDamageVariable.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GroupSimilarObjects"></a>

### FiberTensileDamageVariable.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PromoteToNamedSelection"></a>

### FiberTensileDamageVariable.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PropertyByAPIName"></a>

### FiberTensileDamageVariable.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PropertyByName"></a>

### FiberTensileDamageVariable.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RemoveParameter"></a>

### FiberTensileDamageVariable.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RenameBasedOnDefinition"></a>

### FiberTensileDamageVariable.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RetrieveResult"></a>

### FiberTensileDamageVariable.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

