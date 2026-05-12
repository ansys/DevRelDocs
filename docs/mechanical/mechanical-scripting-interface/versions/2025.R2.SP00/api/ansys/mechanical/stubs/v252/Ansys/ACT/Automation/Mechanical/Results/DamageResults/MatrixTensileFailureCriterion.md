# `MatrixTensileFailureCriterion`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileFailureCriterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileFailureCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MatrixTensileFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#MatrixTensileFailureCriterion.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#MatrixTensileFailureCriterion.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#MatrixTensileFailureCriterion.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#MatrixTensileFailureCriterion.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#MatrixTensileFailureCriterion.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#MatrixTensileFailureCriterion.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#MatrixTensileFailureCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#MatrixTensileFailureCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#MatrixTensileFailureCriterion.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#MatrixTensileFailureCriterion.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#MatrixTensileFailureCriterion.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#MatrixTensileFailureCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#MatrixTensileFailureCriterion.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#MatrixTensileFailureCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#MatrixTensileFailureCriterion.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#MatrixTensileFailureCriterion.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#MatrixTensileFailureCriterion.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#MatrixTensileFailureCriterion.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#MatrixTensileFailureCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#MatrixTensileFailureCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#MatrixTensileFailureCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#MatrixTensileFailureCriterion.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#MatrixTensileFailureCriterion.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#MatrixTensileFailureCriterion.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#MatrixTensileFailureCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#MatrixTensileFailureCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#MatrixTensileFailureCriterion.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#MatrixTensileFailureCriterion.Average)                                                     | Gets the Average.                                                        |
| [`By`](#MatrixTensileFailureCriterion.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#MatrixTensileFailureCriterion.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#MatrixTensileFailureCriterion.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#MatrixTensileFailureCriterion.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#MatrixTensileFailureCriterion.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#MatrixTensileFailureCriterion.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#MatrixTensileFailureCriterion.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DamageResultType`](#MatrixTensileFailureCriterion.DamageResultType)                                   | Gets the DamageResultType.                                               |
| [`DataModelObjectCategory`](#MatrixTensileFailureCriterion.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#MatrixTensileFailureCriterion.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#MatrixTensileFailureCriterion.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#MatrixTensileFailureCriterion.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#MatrixTensileFailureCriterion.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#MatrixTensileFailureCriterion.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#MatrixTensileFailureCriterion.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#MatrixTensileFailureCriterion.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#MatrixTensileFailureCriterion.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#MatrixTensileFailureCriterion.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#MatrixTensileFailureCriterion.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#MatrixTensileFailureCriterion.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#MatrixTensileFailureCriterion.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#MatrixTensileFailureCriterion.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MatrixTensileFailureCriterion.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#MatrixTensileFailureCriterion.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#MatrixTensileFailureCriterion.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#MatrixTensileFailureCriterion.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#MatrixTensileFailureCriterion.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#MatrixTensileFailureCriterion.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#MatrixTensileFailureCriterion.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#MatrixTensileFailureCriterion.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#MatrixTensileFailureCriterion.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#MatrixTensileFailureCriterion.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#MatrixTensileFailureCriterion.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#MatrixTensileFailureCriterion.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#MatrixTensileFailureCriterion.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#MatrixTensileFailureCriterion.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#MatrixTensileFailureCriterion.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#MatrixTensileFailureCriterion.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#MatrixTensileFailureCriterion.Path)                                                           | Path property.                                                           |
| [`Plies`](#MatrixTensileFailureCriterion.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#MatrixTensileFailureCriterion.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#MatrixTensileFailureCriterion.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Properties`](#MatrixTensileFailureCriterion.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#MatrixTensileFailureCriterion.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#MatrixTensileFailureCriterion.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#MatrixTensileFailureCriterion.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#MatrixTensileFailureCriterion.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#MatrixTensileFailureCriterion.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#MatrixTensileFailureCriterion.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#MatrixTensileFailureCriterion.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#MatrixTensileFailureCriterion.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#MatrixTensileFailureCriterion.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#MatrixTensileFailureCriterion.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#MatrixTensileFailureCriterion.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#MatrixTensileFailureCriterion.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#MatrixTensileFailureCriterion.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#MatrixTensileFailureCriterion.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#MatrixTensileFailureCriterion.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#MatrixTensileFailureCriterion.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="MatrixTensileFailureCriterion.Average"></a>

### *property* MatrixTensileFailureCriterion.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.By"></a>

### *property* MatrixTensileFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CalculateTimeHistory"></a>

### *property* MatrixTensileFailureCriterion.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Children"></a>

### *property* MatrixTensileFailureCriterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CombinationNumber"></a>

### *property* MatrixTensileFailureCriterion.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Comments"></a>

### *property* MatrixTensileFailureCriterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CoordinateSystem"></a>

### *property* MatrixTensileFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CrackFrontNumber"></a>

### *property* MatrixTensileFailureCriterion.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DamageResultType"></a>

### *property* MatrixTensileFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DataModelObjectCategory"></a>

### *property* MatrixTensileFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DisplayOption"></a>

### *property* MatrixTensileFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DisplayTime"></a>

### *property* MatrixTensileFailureCriterion.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DpfEvaluation"></a>

### *property* MatrixTensileFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Figures"></a>

### *property* MatrixTensileFailureCriterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GlobalIDs"></a>

### *property* MatrixTensileFailureCriterion.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GraphControlsXAxis"></a>

### *property* MatrixTensileFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Identifier"></a>

### *property* MatrixTensileFailureCriterion.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Images"></a>

### *property* MatrixTensileFailureCriterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.InternalObject"></a>

### *property* MatrixTensileFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.IsSolved"></a>

### *property* MatrixTensileFailureCriterion.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ItemType"></a>

### *property* MatrixTensileFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.IterationNumber"></a>

### *property* MatrixTensileFailureCriterion.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStep"></a>

### *property* MatrixTensileFailureCriterion.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* MatrixTensileFailureCriterion.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* MatrixTensileFailureCriterion.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* MatrixTensileFailureCriterion.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* MatrixTensileFailureCriterion.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepNumber"></a>

### *property* MatrixTensileFailureCriterion.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Location"></a>

### *property* MatrixTensileFailureCriterion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Maximum"></a>

### *property* MatrixTensileFailureCriterion.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MaximumOccursOn"></a>

### *property* MatrixTensileFailureCriterion.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* MatrixTensileFailureCriterion.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* MatrixTensileFailureCriterion.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Minimum"></a>

### *property* MatrixTensileFailureCriterion.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MinimumOccursOn"></a>

### *property* MatrixTensileFailureCriterion.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* MatrixTensileFailureCriterion.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* MatrixTensileFailureCriterion.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Mode"></a>

### *property* MatrixTensileFailureCriterion.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.NamedSelections"></a>

### *property* MatrixTensileFailureCriterion.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Path"></a>

### *property* MatrixTensileFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Plies"></a>

### *property* MatrixTensileFailureCriterion.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PlotData"></a>

### *property* MatrixTensileFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Ply"></a>

### *property* MatrixTensileFailureCriterion.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Properties"></a>

### *property* MatrixTensileFailureCriterion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RPMSelection"></a>

### *property* MatrixTensileFailureCriterion.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ScopingMethod"></a>

### *property* MatrixTensileFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SetNumber"></a>

### *property* MatrixTensileFailureCriterion.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SolutionCombinationDriver"></a>

### *property* MatrixTensileFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SolverComponentIDs"></a>

### *property* MatrixTensileFailureCriterion.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Substep"></a>

### *property* MatrixTensileFailureCriterion.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Suppressed"></a>

### *property* MatrixTensileFailureCriterion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Surface"></a>

### *property* MatrixTensileFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SurfaceCoating"></a>

### *property* MatrixTensileFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Time"></a>

### *property* MatrixTensileFailureCriterion.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* MatrixTensileFailureCriterion.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* MatrixTensileFailureCriterion.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* MatrixTensileFailureCriterion.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* MatrixTensileFailureCriterion.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Total"></a>

### *property* MatrixTensileFailureCriterion.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.VisibleProperties"></a>

### *property* MatrixTensileFailureCriterion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatrixTensileFailureCriterion.Activate"></a>

### MatrixTensileFailureCriterion.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddAlert"></a>

### MatrixTensileFailureCriterion.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddComment"></a>

### MatrixTensileFailureCriterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddConvergence"></a>

### MatrixTensileFailureCriterion.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddFigure"></a>

### MatrixTensileFailureCriterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddImage"></a>

### MatrixTensileFailureCriterion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ClearGeneratedData"></a>

### MatrixTensileFailureCriterion.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CopyTo"></a>

### MatrixTensileFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CreateParameter"></a>

### MatrixTensileFailureCriterion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CreateResultsAtAllSets"></a>

### MatrixTensileFailureCriterion.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Delete"></a>

### MatrixTensileFailureCriterion.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Duplicate"></a>

### MatrixTensileFailureCriterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DuplicateWithoutResults"></a>

### MatrixTensileFailureCriterion.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.EvaluateAllResults"></a>

### MatrixTensileFailureCriterion.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ExportAnimation"></a>

### MatrixTensileFailureCriterion.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ExportToTextFile"></a>

### MatrixTensileFailureCriterion.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.FetchRemoteResults"></a>

### MatrixTensileFailureCriterion.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetChildren"></a>

### MatrixTensileFailureCriterion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetParameter"></a>

### MatrixTensileFailureCriterion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GroupAllSimilarChildren"></a>

### MatrixTensileFailureCriterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GroupSimilarObjects"></a>

### MatrixTensileFailureCriterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PromoteToNamedSelection"></a>

### MatrixTensileFailureCriterion.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PropertyByAPIName"></a>

### MatrixTensileFailureCriterion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PropertyByName"></a>

### MatrixTensileFailureCriterion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RemoveParameter"></a>

### MatrixTensileFailureCriterion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RenameBasedOnDefinition"></a>

### MatrixTensileFailureCriterion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RetrieveResult"></a>

### MatrixTensileFailureCriterion.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

