# `NormalGasketPressure`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NormalGasketPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#NormalGasketPressure.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#NormalGasketPressure.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#NormalGasketPressure.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#NormalGasketPressure.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#NormalGasketPressure.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#NormalGasketPressure.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#NormalGasketPressure.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#NormalGasketPressure.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#NormalGasketPressure.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#NormalGasketPressure.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#NormalGasketPressure.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#NormalGasketPressure.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#NormalGasketPressure.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#NormalGasketPressure.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#NormalGasketPressure.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#NormalGasketPressure.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#NormalGasketPressure.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#NormalGasketPressure.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#NormalGasketPressure.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#NormalGasketPressure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#NormalGasketPressure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#NormalGasketPressure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#NormalGasketPressure.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#NormalGasketPressure.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#NormalGasketPressure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#NormalGasketPressure.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#NormalGasketPressure.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#NormalGasketPressure.Average)                                                     | Gets the Average.                                                        |
| [`By`](#NormalGasketPressure.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#NormalGasketPressure.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#NormalGasketPressure.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#NormalGasketPressure.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#NormalGasketPressure.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#NormalGasketPressure.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#NormalGasketPressure.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#NormalGasketPressure.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#NormalGasketPressure.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#NormalGasketPressure.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#NormalGasketPressure.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#NormalGasketPressure.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GasketResultType`](#NormalGasketPressure.GasketResultType)                                   | Gets or sets the GasketResultType.                                       |
| [`GlobalIDs`](#NormalGasketPressure.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#NormalGasketPressure.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#NormalGasketPressure.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#NormalGasketPressure.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#NormalGasketPressure.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#NormalGasketPressure.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#NormalGasketPressure.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#NormalGasketPressure.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#NormalGasketPressure.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NormalGasketPressure.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#NormalGasketPressure.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#NormalGasketPressure.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#NormalGasketPressure.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#NormalGasketPressure.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#NormalGasketPressure.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#NormalGasketPressure.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#NormalGasketPressure.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#NormalGasketPressure.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#NormalGasketPressure.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#NormalGasketPressure.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#NormalGasketPressure.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#NormalGasketPressure.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#NormalGasketPressure.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#NormalGasketPressure.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#NormalGasketPressure.Path)                                                           | Path property.                                                           |
| [`PlotData`](#NormalGasketPressure.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#NormalGasketPressure.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#NormalGasketPressure.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#NormalGasketPressure.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#NormalGasketPressure.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#NormalGasketPressure.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#NormalGasketPressure.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#NormalGasketPressure.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#NormalGasketPressure.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#NormalGasketPressure.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#NormalGasketPressure.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#NormalGasketPressure.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#NormalGasketPressure.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#NormalGasketPressure.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#NormalGasketPressure.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#NormalGasketPressure.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#NormalGasketPressure.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#NormalGasketPressure.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="NormalGasketPressure.Average"></a>

### *property* NormalGasketPressure.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.By"></a>

### *property* NormalGasketPressure.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.CalculateTimeHistory"></a>

### *property* NormalGasketPressure.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Children"></a>

### *property* NormalGasketPressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.CombinationNumber"></a>

### *property* NormalGasketPressure.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Comments"></a>

### *property* NormalGasketPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.CoordinateSystem"></a>

### *property* NormalGasketPressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.CrackFrontNumber"></a>

### *property* NormalGasketPressure.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.DataModelObjectCategory"></a>

### *property* NormalGasketPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.DisplayOption"></a>

### *property* NormalGasketPressure.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.DisplayTime"></a>

### *property* NormalGasketPressure.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.DpfEvaluation"></a>

### *property* NormalGasketPressure.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Figures"></a>

### *property* NormalGasketPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.GasketResultType"></a>

### *property* NormalGasketPressure.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.GlobalIDs"></a>

### *property* NormalGasketPressure.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.GraphControlsXAxis"></a>

### *property* NormalGasketPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Identifier"></a>

### *property* NormalGasketPressure.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Images"></a>

### *property* NormalGasketPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.InternalObject"></a>

### *property* NormalGasketPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.IsSolved"></a>

### *property* NormalGasketPressure.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.ItemType"></a>

### *property* NormalGasketPressure.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.IterationNumber"></a>

### *property* NormalGasketPressure.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.LoadStep"></a>

### *property* NormalGasketPressure.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.LoadStepForMaximumOfMaximumValues"></a>

### *property* NormalGasketPressure.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.LoadStepForMaximumOfMinimumValues"></a>

### *property* NormalGasketPressure.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.LoadStepForMinimumOfMaximumValues"></a>

### *property* NormalGasketPressure.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.LoadStepForMinimumOfMinimumValues"></a>

### *property* NormalGasketPressure.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.LoadStepNumber"></a>

### *property* NormalGasketPressure.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Location"></a>

### *property* NormalGasketPressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Maximum"></a>

### *property* NormalGasketPressure.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.MaximumOccursOn"></a>

### *property* NormalGasketPressure.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.MaximumOfMaximumOverTime"></a>

### *property* NormalGasketPressure.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.MaximumOfMinimumOverTime"></a>

### *property* NormalGasketPressure.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Minimum"></a>

### *property* NormalGasketPressure.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.MinimumOccursOn"></a>

### *property* NormalGasketPressure.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.MinimumOfMaximumOverTime"></a>

### *property* NormalGasketPressure.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.MinimumOfMinimumOverTime"></a>

### *property* NormalGasketPressure.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.NamedSelections"></a>

### *property* NormalGasketPressure.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Path"></a>

### *property* NormalGasketPressure.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.PlotData"></a>

### *property* NormalGasketPressure.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Properties"></a>

### *property* NormalGasketPressure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.RPMSelection"></a>

### *property* NormalGasketPressure.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.ScopingMethod"></a>

### *property* NormalGasketPressure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.SetNumber"></a>

### *property* NormalGasketPressure.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.SolutionCombinationDriver"></a>

### *property* NormalGasketPressure.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.SolverComponentIDs"></a>

### *property* NormalGasketPressure.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Substep"></a>

### *property* NormalGasketPressure.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Suppressed"></a>

### *property* NormalGasketPressure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Surface"></a>

### *property* NormalGasketPressure.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.SurfaceCoating"></a>

### *property* NormalGasketPressure.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Time"></a>

### *property* NormalGasketPressure.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.TimeForMaximumOfMaximumValues"></a>

### *property* NormalGasketPressure.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.TimeForMaximumOfMinimumValues"></a>

### *property* NormalGasketPressure.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.TimeForMinimumOfMaximumValues"></a>

### *property* NormalGasketPressure.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.TimeForMinimumOfMinimumValues"></a>

### *property* NormalGasketPressure.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Total"></a>

### *property* NormalGasketPressure.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.VisibleProperties"></a>

### *property* NormalGasketPressure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NormalGasketPressure.Activate"></a>

### NormalGasketPressure.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.AddAlert"></a>

### NormalGasketPressure.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.AddComment"></a>

### NormalGasketPressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.AddConvergence"></a>

### NormalGasketPressure.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.AddFigure"></a>

### NormalGasketPressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.AddImage"></a>

### NormalGasketPressure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.ClearGeneratedData"></a>

### NormalGasketPressure.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.CopyTo"></a>

### NormalGasketPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.CreateParameter"></a>

### NormalGasketPressure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.CreateResultsAtAllSets"></a>

### NormalGasketPressure.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Delete"></a>

### NormalGasketPressure.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.Duplicate"></a>

### NormalGasketPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.DuplicateWithoutResults"></a>

### NormalGasketPressure.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.EvaluateAllResults"></a>

### NormalGasketPressure.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.ExportAnimation"></a>

### NormalGasketPressure.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.ExportToTextFile"></a>

### NormalGasketPressure.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.FetchRemoteResults"></a>

### NormalGasketPressure.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.GetChildren"></a>

### NormalGasketPressure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.GetParameter"></a>

### NormalGasketPressure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.GroupAllSimilarChildren"></a>

### NormalGasketPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.GroupSimilarObjects"></a>

### NormalGasketPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.PromoteToNamedSelection"></a>

### NormalGasketPressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.PropertyByAPIName"></a>

### NormalGasketPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.PropertyByName"></a>

### NormalGasketPressure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.RemoveParameter"></a>

### NormalGasketPressure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.RenameBasedOnDefinition"></a>

### NormalGasketPressure.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketPressure.RetrieveResult"></a>

### NormalGasketPressure.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

