# `BoltWorkingLoad`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltWorkingLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltWorkingLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltWorkingLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BoltWorkingLoad.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#BoltWorkingLoad.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#BoltWorkingLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#BoltWorkingLoad.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#BoltWorkingLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BoltWorkingLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#BoltWorkingLoad.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#BoltWorkingLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BoltWorkingLoad.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#BoltWorkingLoad.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#BoltWorkingLoad.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#BoltWorkingLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#BoltWorkingLoad.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#BoltWorkingLoad.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#BoltWorkingLoad.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#BoltWorkingLoad.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#BoltWorkingLoad.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#BoltWorkingLoad.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BoltWorkingLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BoltWorkingLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BoltWorkingLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#BoltWorkingLoad.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#BoltWorkingLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BoltWorkingLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BoltWorkingLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#BoltWorkingLoad.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#BoltWorkingLoad.Average)                                                     | Gets the Average.                                                        |
| [`BoltResultType`](#BoltWorkingLoad.BoltResultType)                                       | Gets or sets the BoltResultType.                                         |
| [`By`](#BoltWorkingLoad.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#BoltWorkingLoad.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#BoltWorkingLoad.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#BoltWorkingLoad.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#BoltWorkingLoad.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#BoltWorkingLoad.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#BoltWorkingLoad.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#BoltWorkingLoad.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#BoltWorkingLoad.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#BoltWorkingLoad.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#BoltWorkingLoad.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#BoltWorkingLoad.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#BoltWorkingLoad.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#BoltWorkingLoad.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#BoltWorkingLoad.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#BoltWorkingLoad.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#BoltWorkingLoad.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#BoltWorkingLoad.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#BoltWorkingLoad.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#BoltWorkingLoad.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#BoltWorkingLoad.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#BoltWorkingLoad.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#BoltWorkingLoad.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#BoltWorkingLoad.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#BoltWorkingLoad.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#BoltWorkingLoad.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#BoltWorkingLoad.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#BoltWorkingLoad.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#BoltWorkingLoad.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#BoltWorkingLoad.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#BoltWorkingLoad.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#BoltWorkingLoad.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#BoltWorkingLoad.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#BoltWorkingLoad.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#BoltWorkingLoad.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#BoltWorkingLoad.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#BoltWorkingLoad.Path)                                                           | Path property.                                                           |
| [`PlotData`](#BoltWorkingLoad.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#BoltWorkingLoad.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#BoltWorkingLoad.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#BoltWorkingLoad.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#BoltWorkingLoad.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#BoltWorkingLoad.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#BoltWorkingLoad.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#BoltWorkingLoad.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#BoltWorkingLoad.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#BoltWorkingLoad.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#BoltWorkingLoad.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#BoltWorkingLoad.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#BoltWorkingLoad.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#BoltWorkingLoad.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#BoltWorkingLoad.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#BoltWorkingLoad.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#BoltWorkingLoad.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#BoltWorkingLoad.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="BoltWorkingLoad.Average"></a>

### *property* BoltWorkingLoad.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.BoltResultType"></a>

### *property* BoltWorkingLoad.BoltResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoltResultType.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.By"></a>

### *property* BoltWorkingLoad.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CalculateTimeHistory"></a>

### *property* BoltWorkingLoad.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Children"></a>

### *property* BoltWorkingLoad.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CombinationNumber"></a>

### *property* BoltWorkingLoad.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Comments"></a>

### *property* BoltWorkingLoad.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CoordinateSystem"></a>

### *property* BoltWorkingLoad.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CrackFrontNumber"></a>

### *property* BoltWorkingLoad.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DataModelObjectCategory"></a>

### *property* BoltWorkingLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DisplayOption"></a>

### *property* BoltWorkingLoad.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DisplayTime"></a>

### *property* BoltWorkingLoad.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DpfEvaluation"></a>

### *property* BoltWorkingLoad.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Figures"></a>

### *property* BoltWorkingLoad.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GlobalIDs"></a>

### *property* BoltWorkingLoad.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GraphControlsXAxis"></a>

### *property* BoltWorkingLoad.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Identifier"></a>

### *property* BoltWorkingLoad.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Images"></a>

### *property* BoltWorkingLoad.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.InternalObject"></a>

### *property* BoltWorkingLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.IsSolved"></a>

### *property* BoltWorkingLoad.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ItemType"></a>

### *property* BoltWorkingLoad.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.IterationNumber"></a>

### *property* BoltWorkingLoad.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStep"></a>

### *property* BoltWorkingLoad.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepForMaximumOfMaximumValues"></a>

### *property* BoltWorkingLoad.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepForMaximumOfMinimumValues"></a>

### *property* BoltWorkingLoad.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepForMinimumOfMaximumValues"></a>

### *property* BoltWorkingLoad.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepForMinimumOfMinimumValues"></a>

### *property* BoltWorkingLoad.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.LoadStepNumber"></a>

### *property* BoltWorkingLoad.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Location"></a>

### *property* BoltWorkingLoad.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Maximum"></a>

### *property* BoltWorkingLoad.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MaximumOccursOn"></a>

### *property* BoltWorkingLoad.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MaximumOfMaximumOverTime"></a>

### *property* BoltWorkingLoad.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MaximumOfMinimumOverTime"></a>

### *property* BoltWorkingLoad.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Minimum"></a>

### *property* BoltWorkingLoad.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MinimumOccursOn"></a>

### *property* BoltWorkingLoad.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MinimumOfMaximumOverTime"></a>

### *property* BoltWorkingLoad.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.MinimumOfMinimumOverTime"></a>

### *property* BoltWorkingLoad.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.NamedSelections"></a>

### *property* BoltWorkingLoad.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Path"></a>

### *property* BoltWorkingLoad.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.PlotData"></a>

### *property* BoltWorkingLoad.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Properties"></a>

### *property* BoltWorkingLoad.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.RPMSelection"></a>

### *property* BoltWorkingLoad.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ScopingMethod"></a>

### *property* BoltWorkingLoad.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.SetNumber"></a>

### *property* BoltWorkingLoad.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.SolutionCombinationDriver"></a>

### *property* BoltWorkingLoad.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.SolverComponentIDs"></a>

### *property* BoltWorkingLoad.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Substep"></a>

### *property* BoltWorkingLoad.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Suppressed"></a>

### *property* BoltWorkingLoad.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Surface"></a>

### *property* BoltWorkingLoad.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.SurfaceCoating"></a>

### *property* BoltWorkingLoad.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Time"></a>

### *property* BoltWorkingLoad.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.TimeForMaximumOfMaximumValues"></a>

### *property* BoltWorkingLoad.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.TimeForMaximumOfMinimumValues"></a>

### *property* BoltWorkingLoad.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.TimeForMinimumOfMaximumValues"></a>

### *property* BoltWorkingLoad.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.TimeForMinimumOfMinimumValues"></a>

### *property* BoltWorkingLoad.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Total"></a>

### *property* BoltWorkingLoad.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.VisibleProperties"></a>

### *property* BoltWorkingLoad.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltWorkingLoad.Activate"></a>

### BoltWorkingLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddAlert"></a>

### BoltWorkingLoad.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddComment"></a>

### BoltWorkingLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddConvergence"></a>

### BoltWorkingLoad.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddFigure"></a>

### BoltWorkingLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.AddImage"></a>

### BoltWorkingLoad.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ClearGeneratedData"></a>

### BoltWorkingLoad.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CopyTo"></a>

### BoltWorkingLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CreateParameter"></a>

### BoltWorkingLoad.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.CreateResultsAtAllSets"></a>

### BoltWorkingLoad.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Delete"></a>

### BoltWorkingLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.Duplicate"></a>

### BoltWorkingLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.DuplicateWithoutResults"></a>

### BoltWorkingLoad.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.EvaluateAllResults"></a>

### BoltWorkingLoad.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ExportAnimation"></a>

### BoltWorkingLoad.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.ExportToTextFile"></a>

### BoltWorkingLoad.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.FetchRemoteResults"></a>

### BoltWorkingLoad.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GetChildren"></a>

### BoltWorkingLoad.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GetParameter"></a>

### BoltWorkingLoad.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GroupAllSimilarChildren"></a>

### BoltWorkingLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.GroupSimilarObjects"></a>

### BoltWorkingLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.PromoteToNamedSelection"></a>

### BoltWorkingLoad.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.PropertyByAPIName"></a>

### BoltWorkingLoad.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.PropertyByName"></a>

### BoltWorkingLoad.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.RemoveParameter"></a>

### BoltWorkingLoad.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltWorkingLoad.RenameBasedOnDefinition"></a>

### BoltWorkingLoad.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

