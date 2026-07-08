# `EquivalentRadiatedPower`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPower"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPower

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EquivalentRadiatedPower.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#EquivalentRadiatedPower.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#EquivalentRadiatedPower.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#EquivalentRadiatedPower.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#EquivalentRadiatedPower.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#EquivalentRadiatedPower.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#EquivalentRadiatedPower.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#EquivalentRadiatedPower.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#EquivalentRadiatedPower.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#EquivalentRadiatedPower.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPower.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#EquivalentRadiatedPower.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#EquivalentRadiatedPower.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPower.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#EquivalentRadiatedPower.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#EquivalentRadiatedPower.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#EquivalentRadiatedPower.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#EquivalentRadiatedPower.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#EquivalentRadiatedPower.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#EquivalentRadiatedPower.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPower.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#EquivalentRadiatedPower.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPower.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#EquivalentRadiatedPower.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#EquivalentRadiatedPower.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#EquivalentRadiatedPower.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPower.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#EquivalentRadiatedPower.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#EquivalentRadiatedPower.Average)                                                     | Gets the Average.                                                        |
| [`By`](#EquivalentRadiatedPower.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#EquivalentRadiatedPower.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#EquivalentRadiatedPower.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#EquivalentRadiatedPower.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#EquivalentRadiatedPower.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#EquivalentRadiatedPower.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#EquivalentRadiatedPower.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#EquivalentRadiatedPower.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#EquivalentRadiatedPower.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#EquivalentRadiatedPower.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#EquivalentRadiatedPower.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#EquivalentRadiatedPower.Figures)                                                     | Gets the list of associated figures.                                     |
| [`FrequencyRange`](#EquivalentRadiatedPower.FrequencyRange)                                       | Gets or sets the FrequencyRange.                                         |
| [`GlobalIDs`](#EquivalentRadiatedPower.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#EquivalentRadiatedPower.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#EquivalentRadiatedPower.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#EquivalentRadiatedPower.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#EquivalentRadiatedPower.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#EquivalentRadiatedPower.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#EquivalentRadiatedPower.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#EquivalentRadiatedPower.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#EquivalentRadiatedPower.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPower.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPower.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPower.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPower.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#EquivalentRadiatedPower.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#EquivalentRadiatedPower.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#EquivalentRadiatedPower.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumFrequency`](#EquivalentRadiatedPower.MaximumFrequency)                                   | Gets or sets the MaximumFrequency.                                       |
| [`MaximumOccursOn`](#EquivalentRadiatedPower.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPower.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPower.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#EquivalentRadiatedPower.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#EquivalentRadiatedPower.MinimumFrequency)                                   | Gets or sets the MinimumFrequency.                                       |
| [`MinimumOccursOn`](#EquivalentRadiatedPower.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPower.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPower.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#EquivalentRadiatedPower.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#EquivalentRadiatedPower.Path)                                                           | Path property.                                                           |
| [`PlotData`](#EquivalentRadiatedPower.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#EquivalentRadiatedPower.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#EquivalentRadiatedPower.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#EquivalentRadiatedPower.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#EquivalentRadiatedPower.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPower.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#EquivalentRadiatedPower.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#EquivalentRadiatedPower.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#EquivalentRadiatedPower.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#EquivalentRadiatedPower.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#EquivalentRadiatedPower.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#EquivalentRadiatedPower.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPower.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPower.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPower.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPower.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#EquivalentRadiatedPower.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#EquivalentRadiatedPower.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentRadiatedPower.Average"></a>

### *property* EquivalentRadiatedPower.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.By"></a>

### *property* EquivalentRadiatedPower.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.CalculateTimeHistory"></a>

### *property* EquivalentRadiatedPower.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Children"></a>

### *property* EquivalentRadiatedPower.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.CombinationNumber"></a>

### *property* EquivalentRadiatedPower.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Comments"></a>

### *property* EquivalentRadiatedPower.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.CoordinateSystem"></a>

### *property* EquivalentRadiatedPower.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.CrackFrontNumber"></a>

### *property* EquivalentRadiatedPower.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.DataModelObjectCategory"></a>

### *property* EquivalentRadiatedPower.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.DisplayOption"></a>

### *property* EquivalentRadiatedPower.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.DisplayTime"></a>

### *property* EquivalentRadiatedPower.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.DpfEvaluation"></a>

### *property* EquivalentRadiatedPower.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Figures"></a>

### *property* EquivalentRadiatedPower.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.FrequencyRange"></a>

### *property* EquivalentRadiatedPower.FrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.GlobalIDs"></a>

### *property* EquivalentRadiatedPower.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.GraphControlsXAxis"></a>

### *property* EquivalentRadiatedPower.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Identifier"></a>

### *property* EquivalentRadiatedPower.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Images"></a>

### *property* EquivalentRadiatedPower.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.InternalObject"></a>

### *property* EquivalentRadiatedPower.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.IsSolved"></a>

### *property* EquivalentRadiatedPower.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.ItemType"></a>

### *property* EquivalentRadiatedPower.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.IterationNumber"></a>

### *property* EquivalentRadiatedPower.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.LoadStep"></a>

### *property* EquivalentRadiatedPower.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPower.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPower.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPower.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPower.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.LoadStepNumber"></a>

### *property* EquivalentRadiatedPower.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Location"></a>

### *property* EquivalentRadiatedPower.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Maximum"></a>

### *property* EquivalentRadiatedPower.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.MaximumFrequency"></a>

### *property* EquivalentRadiatedPower.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.MaximumOccursOn"></a>

### *property* EquivalentRadiatedPower.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.MaximumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPower.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.MaximumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPower.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Minimum"></a>

### *property* EquivalentRadiatedPower.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.MinimumFrequency"></a>

### *property* EquivalentRadiatedPower.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.MinimumOccursOn"></a>

### *property* EquivalentRadiatedPower.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.MinimumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPower.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.MinimumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPower.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.NamedSelections"></a>

### *property* EquivalentRadiatedPower.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Path"></a>

### *property* EquivalentRadiatedPower.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.PlotData"></a>

### *property* EquivalentRadiatedPower.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Properties"></a>

### *property* EquivalentRadiatedPower.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.RPMSelection"></a>

### *property* EquivalentRadiatedPower.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.ScopingMethod"></a>

### *property* EquivalentRadiatedPower.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.SetNumber"></a>

### *property* EquivalentRadiatedPower.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.SolutionCombinationDriver"></a>

### *property* EquivalentRadiatedPower.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.SolverComponentIDs"></a>

### *property* EquivalentRadiatedPower.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Substep"></a>

### *property* EquivalentRadiatedPower.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Suppressed"></a>

### *property* EquivalentRadiatedPower.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Surface"></a>

### *property* EquivalentRadiatedPower.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.SurfaceCoating"></a>

### *property* EquivalentRadiatedPower.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Time"></a>

### *property* EquivalentRadiatedPower.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPower.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPower.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPower.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPower.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Total"></a>

### *property* EquivalentRadiatedPower.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.VisibleProperties"></a>

### *property* EquivalentRadiatedPower.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentRadiatedPower.Activate"></a>

### EquivalentRadiatedPower.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.AddAlert"></a>

### EquivalentRadiatedPower.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.AddComment"></a>

### EquivalentRadiatedPower.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.AddConvergence"></a>

### EquivalentRadiatedPower.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.AddFigure"></a>

### EquivalentRadiatedPower.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.AddImage"></a>

### EquivalentRadiatedPower.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.ClearGeneratedData"></a>

### EquivalentRadiatedPower.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.CopyTo"></a>

### EquivalentRadiatedPower.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.CreateParameter"></a>

### EquivalentRadiatedPower.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.CreateResultsAtAllSets"></a>

### EquivalentRadiatedPower.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Delete"></a>

### EquivalentRadiatedPower.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.Duplicate"></a>

### EquivalentRadiatedPower.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.DuplicateWithoutResults"></a>

### EquivalentRadiatedPower.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.EvaluateAllResults"></a>

### EquivalentRadiatedPower.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.ExportAnimation"></a>

### EquivalentRadiatedPower.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.ExportToTextFile"></a>

### EquivalentRadiatedPower.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.FetchRemoteResults"></a>

### EquivalentRadiatedPower.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.GetChildren"></a>

### EquivalentRadiatedPower.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.GetParameter"></a>

### EquivalentRadiatedPower.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.GroupAllSimilarChildren"></a>

### EquivalentRadiatedPower.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.GroupSimilarObjects"></a>

### EquivalentRadiatedPower.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.PromoteToNamedSelection"></a>

### EquivalentRadiatedPower.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.PropertyByAPIName"></a>

### EquivalentRadiatedPower.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.PropertyByName"></a>

### EquivalentRadiatedPower.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.RemoveParameter"></a>

### EquivalentRadiatedPower.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.RenameBasedOnDefinition"></a>

### EquivalentRadiatedPower.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPower.RetrieveResult"></a>

### EquivalentRadiatedPower.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

