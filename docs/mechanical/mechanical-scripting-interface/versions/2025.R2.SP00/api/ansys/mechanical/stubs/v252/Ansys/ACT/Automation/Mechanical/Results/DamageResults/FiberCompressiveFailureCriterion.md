# `FiberCompressiveFailureCriterion`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveFailureCriterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveFailureCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FiberCompressiveFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#FiberCompressiveFailureCriterion.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#FiberCompressiveFailureCriterion.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#FiberCompressiveFailureCriterion.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#FiberCompressiveFailureCriterion.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#FiberCompressiveFailureCriterion.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#FiberCompressiveFailureCriterion.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#FiberCompressiveFailureCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#FiberCompressiveFailureCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#FiberCompressiveFailureCriterion.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#FiberCompressiveFailureCriterion.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#FiberCompressiveFailureCriterion.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#FiberCompressiveFailureCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#FiberCompressiveFailureCriterion.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#FiberCompressiveFailureCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#FiberCompressiveFailureCriterion.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#FiberCompressiveFailureCriterion.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#FiberCompressiveFailureCriterion.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#FiberCompressiveFailureCriterion.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#FiberCompressiveFailureCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#FiberCompressiveFailureCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#FiberCompressiveFailureCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#FiberCompressiveFailureCriterion.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#FiberCompressiveFailureCriterion.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#FiberCompressiveFailureCriterion.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#FiberCompressiveFailureCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#FiberCompressiveFailureCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#FiberCompressiveFailureCriterion.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#FiberCompressiveFailureCriterion.Average)                                                     | Gets the Average.                                                        |
| [`By`](#FiberCompressiveFailureCriterion.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#FiberCompressiveFailureCriterion.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#FiberCompressiveFailureCriterion.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#FiberCompressiveFailureCriterion.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#FiberCompressiveFailureCriterion.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#FiberCompressiveFailureCriterion.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#FiberCompressiveFailureCriterion.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DamageResultType`](#FiberCompressiveFailureCriterion.DamageResultType)                                   | Gets the DamageResultType.                                               |
| [`DataModelObjectCategory`](#FiberCompressiveFailureCriterion.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#FiberCompressiveFailureCriterion.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#FiberCompressiveFailureCriterion.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#FiberCompressiveFailureCriterion.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#FiberCompressiveFailureCriterion.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#FiberCompressiveFailureCriterion.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#FiberCompressiveFailureCriterion.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#FiberCompressiveFailureCriterion.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#FiberCompressiveFailureCriterion.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#FiberCompressiveFailureCriterion.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#FiberCompressiveFailureCriterion.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#FiberCompressiveFailureCriterion.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#FiberCompressiveFailureCriterion.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#FiberCompressiveFailureCriterion.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#FiberCompressiveFailureCriterion.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#FiberCompressiveFailureCriterion.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#FiberCompressiveFailureCriterion.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#FiberCompressiveFailureCriterion.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#FiberCompressiveFailureCriterion.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#FiberCompressiveFailureCriterion.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#FiberCompressiveFailureCriterion.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#FiberCompressiveFailureCriterion.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#FiberCompressiveFailureCriterion.Path)                                                           | Path property.                                                           |
| [`Plies`](#FiberCompressiveFailureCriterion.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#FiberCompressiveFailureCriterion.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#FiberCompressiveFailureCriterion.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Properties`](#FiberCompressiveFailureCriterion.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#FiberCompressiveFailureCriterion.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#FiberCompressiveFailureCriterion.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#FiberCompressiveFailureCriterion.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#FiberCompressiveFailureCriterion.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#FiberCompressiveFailureCriterion.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#FiberCompressiveFailureCriterion.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#FiberCompressiveFailureCriterion.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#FiberCompressiveFailureCriterion.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#FiberCompressiveFailureCriterion.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#FiberCompressiveFailureCriterion.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#FiberCompressiveFailureCriterion.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#FiberCompressiveFailureCriterion.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="FiberCompressiveFailureCriterion.Average"></a>

### *property* FiberCompressiveFailureCriterion.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.By"></a>

### *property* FiberCompressiveFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CalculateTimeHistory"></a>

### *property* FiberCompressiveFailureCriterion.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Children"></a>

### *property* FiberCompressiveFailureCriterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CombinationNumber"></a>

### *property* FiberCompressiveFailureCriterion.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Comments"></a>

### *property* FiberCompressiveFailureCriterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CoordinateSystem"></a>

### *property* FiberCompressiveFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CrackFrontNumber"></a>

### *property* FiberCompressiveFailureCriterion.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DamageResultType"></a>

### *property* FiberCompressiveFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DataModelObjectCategory"></a>

### *property* FiberCompressiveFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DisplayOption"></a>

### *property* FiberCompressiveFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DisplayTime"></a>

### *property* FiberCompressiveFailureCriterion.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DpfEvaluation"></a>

### *property* FiberCompressiveFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Figures"></a>

### *property* FiberCompressiveFailureCriterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GlobalIDs"></a>

### *property* FiberCompressiveFailureCriterion.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GraphControlsXAxis"></a>

### *property* FiberCompressiveFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Identifier"></a>

### *property* FiberCompressiveFailureCriterion.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Images"></a>

### *property* FiberCompressiveFailureCriterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.InternalObject"></a>

### *property* FiberCompressiveFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IsSolved"></a>

### *property* FiberCompressiveFailureCriterion.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ItemType"></a>

### *property* FiberCompressiveFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IterationNumber"></a>

### *property* FiberCompressiveFailureCriterion.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStep"></a>

### *property* FiberCompressiveFailureCriterion.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepNumber"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Location"></a>

### *property* FiberCompressiveFailureCriterion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Maximum"></a>

### *property* FiberCompressiveFailureCriterion.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOccursOn"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Minimum"></a>

### *property* FiberCompressiveFailureCriterion.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOccursOn"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Mode"></a>

### *property* FiberCompressiveFailureCriterion.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.NamedSelections"></a>

### *property* FiberCompressiveFailureCriterion.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Path"></a>

### *property* FiberCompressiveFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Plies"></a>

### *property* FiberCompressiveFailureCriterion.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PlotData"></a>

### *property* FiberCompressiveFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Ply"></a>

### *property* FiberCompressiveFailureCriterion.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Properties"></a>

### *property* FiberCompressiveFailureCriterion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RPMSelection"></a>

### *property* FiberCompressiveFailureCriterion.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ScopingMethod"></a>

### *property* FiberCompressiveFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SetNumber"></a>

### *property* FiberCompressiveFailureCriterion.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SolutionCombinationDriver"></a>

### *property* FiberCompressiveFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SolverComponentIDs"></a>

### *property* FiberCompressiveFailureCriterion.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Substep"></a>

### *property* FiberCompressiveFailureCriterion.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Suppressed"></a>

### *property* FiberCompressiveFailureCriterion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Surface"></a>

### *property* FiberCompressiveFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SurfaceCoating"></a>

### *property* FiberCompressiveFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Time"></a>

### *property* FiberCompressiveFailureCriterion.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Total"></a>

### *property* FiberCompressiveFailureCriterion.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.VisibleProperties"></a>

### *property* FiberCompressiveFailureCriterion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FiberCompressiveFailureCriterion.Activate"></a>

### FiberCompressiveFailureCriterion.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddAlert"></a>

### FiberCompressiveFailureCriterion.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddComment"></a>

### FiberCompressiveFailureCriterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddConvergence"></a>

### FiberCompressiveFailureCriterion.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddFigure"></a>

### FiberCompressiveFailureCriterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddImage"></a>

### FiberCompressiveFailureCriterion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ClearGeneratedData"></a>

### FiberCompressiveFailureCriterion.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CopyTo"></a>

### FiberCompressiveFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CreateParameter"></a>

### FiberCompressiveFailureCriterion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CreateResultsAtAllSets"></a>

### FiberCompressiveFailureCriterion.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Delete"></a>

### FiberCompressiveFailureCriterion.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Duplicate"></a>

### FiberCompressiveFailureCriterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DuplicateWithoutResults"></a>

### FiberCompressiveFailureCriterion.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.EvaluateAllResults"></a>

### FiberCompressiveFailureCriterion.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ExportAnimation"></a>

### FiberCompressiveFailureCriterion.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ExportToTextFile"></a>

### FiberCompressiveFailureCriterion.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.FetchRemoteResults"></a>

### FiberCompressiveFailureCriterion.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetChildren"></a>

### FiberCompressiveFailureCriterion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetParameter"></a>

### FiberCompressiveFailureCriterion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GroupAllSimilarChildren"></a>

### FiberCompressiveFailureCriterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GroupSimilarObjects"></a>

### FiberCompressiveFailureCriterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PromoteToNamedSelection"></a>

### FiberCompressiveFailureCriterion.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PropertyByAPIName"></a>

### FiberCompressiveFailureCriterion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PropertyByName"></a>

### FiberCompressiveFailureCriterion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RemoveParameter"></a>

### FiberCompressiveFailureCriterion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RenameBasedOnDefinition"></a>

### FiberCompressiveFailureCriterion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RetrieveResult"></a>

### FiberCompressiveFailureCriterion.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

