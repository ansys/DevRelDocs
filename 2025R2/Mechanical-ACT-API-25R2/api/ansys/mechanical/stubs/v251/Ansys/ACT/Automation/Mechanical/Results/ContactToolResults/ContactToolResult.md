# `ContactToolResult`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactToolResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactToolResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactToolResult.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ContactToolResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ContactToolResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ContactToolResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ContactToolResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactToolResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactToolResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactToolResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactToolResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ContactToolResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ContactToolResult.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactToolResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ContactToolResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ContactToolResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactToolResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ContactToolResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ContactToolResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ContactToolResult.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactToolResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactToolResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactToolResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ContactToolResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ContactToolResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactToolResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactToolResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactToolResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#ContactToolResult.Average)                                                     | Gets the Average.                                                        |
| [`By`](#ContactToolResult.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#ContactToolResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#ContactToolResult.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#ContactToolResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#ContactToolResult.Comments)                                                   | Gets the list of associated comments.                                    |
| [`ContactResultType`](#ContactToolResult.ContactResultType)                                 | Gets or sets the ContactResultType.                                      |
| [`CoordinateSystem`](#ContactToolResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#ContactToolResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#ContactToolResult.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#ContactToolResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#ContactToolResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#ContactToolResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#ContactToolResult.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#ContactToolResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#ContactToolResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#ContactToolResult.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#ContactToolResult.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#ContactToolResult.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ContactToolResult.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#ContactToolResult.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#ContactToolResult.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#ContactToolResult.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ContactToolResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#ContactToolResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#ContactToolResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#ContactToolResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#ContactToolResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ContactToolResult.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#ContactToolResult.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#ContactToolResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#ContactToolResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#ContactToolResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#ContactToolResult.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#ContactToolResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#ContactToolResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#ContactToolResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#ContactToolResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#ContactToolResult.Path)                                                           | Path property.                                                           |
| [`PlotData`](#ContactToolResult.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#ContactToolResult.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ContactToolResult.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#ContactToolResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#ContactToolResult.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#ContactToolResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#ContactToolResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#ContactToolResult.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#ContactToolResult.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#ContactToolResult.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#ContactToolResult.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#ContactToolResult.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#ContactToolResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#ContactToolResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#ContactToolResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#ContactToolResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#ContactToolResult.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#ContactToolResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="ContactToolResult.Average"></a>

### *property* ContactToolResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.By"></a>

### *property* ContactToolResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.CalculateTimeHistory"></a>

### *property* ContactToolResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Children"></a>

### *property* ContactToolResult.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.CombinationNumber"></a>

### *property* ContactToolResult.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Comments"></a>

### *property* ContactToolResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.ContactResultType"></a>

### *property* ContactToolResult.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.CoordinateSystem"></a>

### *property* ContactToolResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.CrackFrontNumber"></a>

### *property* ContactToolResult.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.DataModelObjectCategory"></a>

### *property* ContactToolResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.DisplayOption"></a>

### *property* ContactToolResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.DisplayTime"></a>

### *property* ContactToolResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.DpfEvaluation"></a>

### *property* ContactToolResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Figures"></a>

### *property* ContactToolResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.GlobalIDs"></a>

### *property* ContactToolResult.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.GraphControlsXAxis"></a>

### *property* ContactToolResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Identifier"></a>

### *property* ContactToolResult.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Images"></a>

### *property* ContactToolResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.InternalObject"></a>

### *property* ContactToolResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.IsSolved"></a>

### *property* ContactToolResult.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.ItemType"></a>

### *property* ContactToolResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.IterationNumber"></a>

### *property* ContactToolResult.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.LoadStep"></a>

### *property* ContactToolResult.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* ContactToolResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* ContactToolResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* ContactToolResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* ContactToolResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.LoadStepNumber"></a>

### *property* ContactToolResult.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Location"></a>

### *property* ContactToolResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Maximum"></a>

### *property* ContactToolResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.MaximumOccursOn"></a>

### *property* ContactToolResult.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.MaximumOfMaximumOverTime"></a>

### *property* ContactToolResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.MaximumOfMinimumOverTime"></a>

### *property* ContactToolResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Minimum"></a>

### *property* ContactToolResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.MinimumOccursOn"></a>

### *property* ContactToolResult.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.MinimumOfMaximumOverTime"></a>

### *property* ContactToolResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.MinimumOfMinimumOverTime"></a>

### *property* ContactToolResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.NamedSelections"></a>

### *property* ContactToolResult.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Path"></a>

### *property* ContactToolResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.PlotData"></a>

### *property* ContactToolResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Properties"></a>

### *property* ContactToolResult.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.RPMSelection"></a>

### *property* ContactToolResult.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.ScopingMethod"></a>

### *property* ContactToolResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.SetNumber"></a>

### *property* ContactToolResult.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.SolutionCombinationDriver"></a>

### *property* ContactToolResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.SolverComponentIDs"></a>

### *property* ContactToolResult.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Substep"></a>

### *property* ContactToolResult.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Suppressed"></a>

### *property* ContactToolResult.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Surface"></a>

### *property* ContactToolResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.SurfaceCoating"></a>

### *property* ContactToolResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Time"></a>

### *property* ContactToolResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.TimeForMaximumOfMaximumValues"></a>

### *property* ContactToolResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.TimeForMaximumOfMinimumValues"></a>

### *property* ContactToolResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.TimeForMinimumOfMaximumValues"></a>

### *property* ContactToolResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.TimeForMinimumOfMinimumValues"></a>

### *property* ContactToolResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Total"></a>

### *property* ContactToolResult.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.VisibleProperties"></a>

### *property* ContactToolResult.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactToolResult.Activate"></a>

### ContactToolResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.AddAlert"></a>

### ContactToolResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.AddComment"></a>

### ContactToolResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.AddConvergence"></a>

### ContactToolResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.AddFigure"></a>

### ContactToolResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.AddImage"></a>

### ContactToolResult.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.ClearGeneratedData"></a>

### ContactToolResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.CopyTo"></a>

### ContactToolResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.CreateParameter"></a>

### ContactToolResult.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.CreateResultsAtAllSets"></a>

### ContactToolResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Delete"></a>

### ContactToolResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.Duplicate"></a>

### ContactToolResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.DuplicateWithoutResults"></a>

### ContactToolResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.EvaluateAllResults"></a>

### ContactToolResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.ExportAnimation"></a>

### ContactToolResult.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.ExportToTextFile"></a>

### ContactToolResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.FetchRemoteResults"></a>

### ContactToolResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.GetChildren"></a>

### ContactToolResult.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.GetParameter"></a>

### ContactToolResult.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.GroupAllSimilarChildren"></a>

### ContactToolResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.GroupSimilarObjects"></a>

### ContactToolResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.PromoteToNamedSelection"></a>

### ContactToolResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.PropertyByAPIName"></a>

### ContactToolResult.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.PropertyByName"></a>

### ContactToolResult.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.RemoveParameter"></a>

### ContactToolResult.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResult.RenameBasedOnDefinition"></a>

### ContactToolResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

