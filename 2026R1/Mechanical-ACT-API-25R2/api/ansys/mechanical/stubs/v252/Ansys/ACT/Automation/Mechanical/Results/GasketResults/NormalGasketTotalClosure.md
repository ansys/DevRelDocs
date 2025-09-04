# `NormalGasketTotalClosure`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketTotalClosure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketTotalClosure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NormalGasketTotalClosure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#NormalGasketTotalClosure.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#NormalGasketTotalClosure.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#NormalGasketTotalClosure.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#NormalGasketTotalClosure.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#NormalGasketTotalClosure.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#NormalGasketTotalClosure.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#NormalGasketTotalClosure.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#NormalGasketTotalClosure.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#NormalGasketTotalClosure.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#NormalGasketTotalClosure.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#NormalGasketTotalClosure.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#NormalGasketTotalClosure.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#NormalGasketTotalClosure.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#NormalGasketTotalClosure.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#NormalGasketTotalClosure.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#NormalGasketTotalClosure.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#NormalGasketTotalClosure.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#NormalGasketTotalClosure.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#NormalGasketTotalClosure.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#NormalGasketTotalClosure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#NormalGasketTotalClosure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#NormalGasketTotalClosure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#NormalGasketTotalClosure.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#NormalGasketTotalClosure.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#NormalGasketTotalClosure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#NormalGasketTotalClosure.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#NormalGasketTotalClosure.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#NormalGasketTotalClosure.Average)                                                     | Gets the Average.                                                        |
| [`By`](#NormalGasketTotalClosure.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#NormalGasketTotalClosure.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#NormalGasketTotalClosure.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#NormalGasketTotalClosure.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#NormalGasketTotalClosure.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#NormalGasketTotalClosure.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#NormalGasketTotalClosure.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#NormalGasketTotalClosure.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#NormalGasketTotalClosure.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#NormalGasketTotalClosure.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#NormalGasketTotalClosure.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#NormalGasketTotalClosure.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GasketResultType`](#NormalGasketTotalClosure.GasketResultType)                                   | Gets or sets the GasketResultType.                                       |
| [`GlobalIDs`](#NormalGasketTotalClosure.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#NormalGasketTotalClosure.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#NormalGasketTotalClosure.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#NormalGasketTotalClosure.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#NormalGasketTotalClosure.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#NormalGasketTotalClosure.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#NormalGasketTotalClosure.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#NormalGasketTotalClosure.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#NormalGasketTotalClosure.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NormalGasketTotalClosure.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#NormalGasketTotalClosure.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#NormalGasketTotalClosure.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#NormalGasketTotalClosure.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#NormalGasketTotalClosure.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#NormalGasketTotalClosure.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#NormalGasketTotalClosure.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#NormalGasketTotalClosure.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#NormalGasketTotalClosure.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#NormalGasketTotalClosure.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#NormalGasketTotalClosure.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#NormalGasketTotalClosure.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#NormalGasketTotalClosure.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#NormalGasketTotalClosure.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#NormalGasketTotalClosure.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#NormalGasketTotalClosure.Path)                                                           | Path property.                                                           |
| [`PlotData`](#NormalGasketTotalClosure.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#NormalGasketTotalClosure.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#NormalGasketTotalClosure.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#NormalGasketTotalClosure.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#NormalGasketTotalClosure.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#NormalGasketTotalClosure.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#NormalGasketTotalClosure.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#NormalGasketTotalClosure.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#NormalGasketTotalClosure.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#NormalGasketTotalClosure.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#NormalGasketTotalClosure.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#NormalGasketTotalClosure.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#NormalGasketTotalClosure.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#NormalGasketTotalClosure.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#NormalGasketTotalClosure.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#NormalGasketTotalClosure.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#NormalGasketTotalClosure.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#NormalGasketTotalClosure.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="NormalGasketTotalClosure.Average"></a>

### *property* NormalGasketTotalClosure.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.By"></a>

### *property* NormalGasketTotalClosure.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CalculateTimeHistory"></a>

### *property* NormalGasketTotalClosure.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Children"></a>

### *property* NormalGasketTotalClosure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CombinationNumber"></a>

### *property* NormalGasketTotalClosure.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Comments"></a>

### *property* NormalGasketTotalClosure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CoordinateSystem"></a>

### *property* NormalGasketTotalClosure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CrackFrontNumber"></a>

### *property* NormalGasketTotalClosure.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DataModelObjectCategory"></a>

### *property* NormalGasketTotalClosure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DisplayOption"></a>

### *property* NormalGasketTotalClosure.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DisplayTime"></a>

### *property* NormalGasketTotalClosure.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DpfEvaluation"></a>

### *property* NormalGasketTotalClosure.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Figures"></a>

### *property* NormalGasketTotalClosure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GasketResultType"></a>

### *property* NormalGasketTotalClosure.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GlobalIDs"></a>

### *property* NormalGasketTotalClosure.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GraphControlsXAxis"></a>

### *property* NormalGasketTotalClosure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Identifier"></a>

### *property* NormalGasketTotalClosure.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Images"></a>

### *property* NormalGasketTotalClosure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.InternalObject"></a>

### *property* NormalGasketTotalClosure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.IsSolved"></a>

### *property* NormalGasketTotalClosure.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ItemType"></a>

### *property* NormalGasketTotalClosure.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.IterationNumber"></a>

### *property* NormalGasketTotalClosure.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStep"></a>

### *property* NormalGasketTotalClosure.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepForMaximumOfMaximumValues"></a>

### *property* NormalGasketTotalClosure.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepForMaximumOfMinimumValues"></a>

### *property* NormalGasketTotalClosure.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepForMinimumOfMaximumValues"></a>

### *property* NormalGasketTotalClosure.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepForMinimumOfMinimumValues"></a>

### *property* NormalGasketTotalClosure.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepNumber"></a>

### *property* NormalGasketTotalClosure.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Location"></a>

### *property* NormalGasketTotalClosure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Maximum"></a>

### *property* NormalGasketTotalClosure.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MaximumOccursOn"></a>

### *property* NormalGasketTotalClosure.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MaximumOfMaximumOverTime"></a>

### *property* NormalGasketTotalClosure.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MaximumOfMinimumOverTime"></a>

### *property* NormalGasketTotalClosure.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Minimum"></a>

### *property* NormalGasketTotalClosure.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MinimumOccursOn"></a>

### *property* NormalGasketTotalClosure.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MinimumOfMaximumOverTime"></a>

### *property* NormalGasketTotalClosure.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MinimumOfMinimumOverTime"></a>

### *property* NormalGasketTotalClosure.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.NamedSelections"></a>

### *property* NormalGasketTotalClosure.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Path"></a>

### *property* NormalGasketTotalClosure.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PlotData"></a>

### *property* NormalGasketTotalClosure.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Properties"></a>

### *property* NormalGasketTotalClosure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RPMSelection"></a>

### *property* NormalGasketTotalClosure.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ScopingMethod"></a>

### *property* NormalGasketTotalClosure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SetNumber"></a>

### *property* NormalGasketTotalClosure.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SolutionCombinationDriver"></a>

### *property* NormalGasketTotalClosure.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SolverComponentIDs"></a>

### *property* NormalGasketTotalClosure.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Substep"></a>

### *property* NormalGasketTotalClosure.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Suppressed"></a>

### *property* NormalGasketTotalClosure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Surface"></a>

### *property* NormalGasketTotalClosure.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SurfaceCoating"></a>

### *property* NormalGasketTotalClosure.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Time"></a>

### *property* NormalGasketTotalClosure.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TimeForMaximumOfMaximumValues"></a>

### *property* NormalGasketTotalClosure.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TimeForMaximumOfMinimumValues"></a>

### *property* NormalGasketTotalClosure.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TimeForMinimumOfMaximumValues"></a>

### *property* NormalGasketTotalClosure.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TimeForMinimumOfMinimumValues"></a>

### *property* NormalGasketTotalClosure.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Total"></a>

### *property* NormalGasketTotalClosure.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.VisibleProperties"></a>

### *property* NormalGasketTotalClosure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NormalGasketTotalClosure.Activate"></a>

### NormalGasketTotalClosure.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddAlert"></a>

### NormalGasketTotalClosure.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddComment"></a>

### NormalGasketTotalClosure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddConvergence"></a>

### NormalGasketTotalClosure.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddFigure"></a>

### NormalGasketTotalClosure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddImage"></a>

### NormalGasketTotalClosure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ClearGeneratedData"></a>

### NormalGasketTotalClosure.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CopyTo"></a>

### NormalGasketTotalClosure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CreateParameter"></a>

### NormalGasketTotalClosure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CreateResultsAtAllSets"></a>

### NormalGasketTotalClosure.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Delete"></a>

### NormalGasketTotalClosure.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Duplicate"></a>

### NormalGasketTotalClosure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DuplicateWithoutResults"></a>

### NormalGasketTotalClosure.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.EvaluateAllResults"></a>

### NormalGasketTotalClosure.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ExportAnimation"></a>

### NormalGasketTotalClosure.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ExportToTextFile"></a>

### NormalGasketTotalClosure.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.FetchRemoteResults"></a>

### NormalGasketTotalClosure.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetChildren"></a>

### NormalGasketTotalClosure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetParameter"></a>

### NormalGasketTotalClosure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GroupAllSimilarChildren"></a>

### NormalGasketTotalClosure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GroupSimilarObjects"></a>

### NormalGasketTotalClosure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PromoteToNamedSelection"></a>

### NormalGasketTotalClosure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PropertyByAPIName"></a>

### NormalGasketTotalClosure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PropertyByName"></a>

### NormalGasketTotalClosure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RemoveParameter"></a>

### NormalGasketTotalClosure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RenameBasedOnDefinition"></a>

### NormalGasketTotalClosure.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RetrieveResult"></a>

### NormalGasketTotalClosure.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

