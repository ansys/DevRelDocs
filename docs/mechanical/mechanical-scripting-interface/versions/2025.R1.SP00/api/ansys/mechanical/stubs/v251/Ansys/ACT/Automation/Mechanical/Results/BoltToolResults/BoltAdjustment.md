# `BoltAdjustment`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltAdjustment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltAdjustment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltAdjustment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BoltAdjustment.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#BoltAdjustment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#BoltAdjustment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#BoltAdjustment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#BoltAdjustment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BoltAdjustment.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#BoltAdjustment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#BoltAdjustment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BoltAdjustment.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#BoltAdjustment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#BoltAdjustment.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#BoltAdjustment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#BoltAdjustment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#BoltAdjustment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#BoltAdjustment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#BoltAdjustment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#BoltAdjustment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#BoltAdjustment.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BoltAdjustment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BoltAdjustment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BoltAdjustment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#BoltAdjustment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#BoltAdjustment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BoltAdjustment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BoltAdjustment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#BoltAdjustment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#BoltAdjustment.Average)                                                     | Gets the Average.                                                        |
| [`BoltResultType`](#BoltAdjustment.BoltResultType)                                       | Gets or sets the BoltResultType.                                         |
| [`By`](#BoltAdjustment.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#BoltAdjustment.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#BoltAdjustment.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#BoltAdjustment.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#BoltAdjustment.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#BoltAdjustment.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#BoltAdjustment.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#BoltAdjustment.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#BoltAdjustment.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#BoltAdjustment.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#BoltAdjustment.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#BoltAdjustment.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#BoltAdjustment.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#BoltAdjustment.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#BoltAdjustment.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#BoltAdjustment.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#BoltAdjustment.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#BoltAdjustment.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#BoltAdjustment.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#BoltAdjustment.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#BoltAdjustment.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#BoltAdjustment.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#BoltAdjustment.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#BoltAdjustment.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#BoltAdjustment.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#BoltAdjustment.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#BoltAdjustment.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#BoltAdjustment.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#BoltAdjustment.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#BoltAdjustment.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#BoltAdjustment.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#BoltAdjustment.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#BoltAdjustment.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#BoltAdjustment.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#BoltAdjustment.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#BoltAdjustment.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#BoltAdjustment.Path)                                                           | Path property.                                                           |
| [`PlotData`](#BoltAdjustment.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#BoltAdjustment.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#BoltAdjustment.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#BoltAdjustment.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#BoltAdjustment.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#BoltAdjustment.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#BoltAdjustment.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#BoltAdjustment.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#BoltAdjustment.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#BoltAdjustment.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#BoltAdjustment.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#BoltAdjustment.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#BoltAdjustment.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#BoltAdjustment.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#BoltAdjustment.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#BoltAdjustment.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#BoltAdjustment.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#BoltAdjustment.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="BoltAdjustment.Average"></a>

### *property* BoltAdjustment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.BoltResultType"></a>

### *property* BoltAdjustment.BoltResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoltResultType.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.By"></a>

### *property* BoltAdjustment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CalculateTimeHistory"></a>

### *property* BoltAdjustment.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Children"></a>

### *property* BoltAdjustment.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CombinationNumber"></a>

### *property* BoltAdjustment.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Comments"></a>

### *property* BoltAdjustment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CoordinateSystem"></a>

### *property* BoltAdjustment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CrackFrontNumber"></a>

### *property* BoltAdjustment.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DataModelObjectCategory"></a>

### *property* BoltAdjustment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DisplayOption"></a>

### *property* BoltAdjustment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DisplayTime"></a>

### *property* BoltAdjustment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DpfEvaluation"></a>

### *property* BoltAdjustment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Figures"></a>

### *property* BoltAdjustment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GlobalIDs"></a>

### *property* BoltAdjustment.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GraphControlsXAxis"></a>

### *property* BoltAdjustment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Identifier"></a>

### *property* BoltAdjustment.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Images"></a>

### *property* BoltAdjustment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.InternalObject"></a>

### *property* BoltAdjustment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.IsSolved"></a>

### *property* BoltAdjustment.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ItemType"></a>

### *property* BoltAdjustment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.IterationNumber"></a>

### *property* BoltAdjustment.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStep"></a>

### *property* BoltAdjustment.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepForMaximumOfMaximumValues"></a>

### *property* BoltAdjustment.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepForMaximumOfMinimumValues"></a>

### *property* BoltAdjustment.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepForMinimumOfMaximumValues"></a>

### *property* BoltAdjustment.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepForMinimumOfMinimumValues"></a>

### *property* BoltAdjustment.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.LoadStepNumber"></a>

### *property* BoltAdjustment.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Location"></a>

### *property* BoltAdjustment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Maximum"></a>

### *property* BoltAdjustment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MaximumOccursOn"></a>

### *property* BoltAdjustment.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MaximumOfMaximumOverTime"></a>

### *property* BoltAdjustment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MaximumOfMinimumOverTime"></a>

### *property* BoltAdjustment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Minimum"></a>

### *property* BoltAdjustment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MinimumOccursOn"></a>

### *property* BoltAdjustment.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MinimumOfMaximumOverTime"></a>

### *property* BoltAdjustment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.MinimumOfMinimumOverTime"></a>

### *property* BoltAdjustment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.NamedSelections"></a>

### *property* BoltAdjustment.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Path"></a>

### *property* BoltAdjustment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.PlotData"></a>

### *property* BoltAdjustment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Properties"></a>

### *property* BoltAdjustment.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.RPMSelection"></a>

### *property* BoltAdjustment.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ScopingMethod"></a>

### *property* BoltAdjustment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.SetNumber"></a>

### *property* BoltAdjustment.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.SolutionCombinationDriver"></a>

### *property* BoltAdjustment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.SolverComponentIDs"></a>

### *property* BoltAdjustment.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Substep"></a>

### *property* BoltAdjustment.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Suppressed"></a>

### *property* BoltAdjustment.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Surface"></a>

### *property* BoltAdjustment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.SurfaceCoating"></a>

### *property* BoltAdjustment.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Time"></a>

### *property* BoltAdjustment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.TimeForMaximumOfMaximumValues"></a>

### *property* BoltAdjustment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.TimeForMaximumOfMinimumValues"></a>

### *property* BoltAdjustment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.TimeForMinimumOfMaximumValues"></a>

### *property* BoltAdjustment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.TimeForMinimumOfMinimumValues"></a>

### *property* BoltAdjustment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Total"></a>

### *property* BoltAdjustment.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.VisibleProperties"></a>

### *property* BoltAdjustment.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltAdjustment.Activate"></a>

### BoltAdjustment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddAlert"></a>

### BoltAdjustment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddComment"></a>

### BoltAdjustment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddConvergence"></a>

### BoltAdjustment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddFigure"></a>

### BoltAdjustment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.AddImage"></a>

### BoltAdjustment.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ClearGeneratedData"></a>

### BoltAdjustment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CopyTo"></a>

### BoltAdjustment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CreateParameter"></a>

### BoltAdjustment.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.CreateResultsAtAllSets"></a>

### BoltAdjustment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Delete"></a>

### BoltAdjustment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.Duplicate"></a>

### BoltAdjustment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.DuplicateWithoutResults"></a>

### BoltAdjustment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.EvaluateAllResults"></a>

### BoltAdjustment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ExportAnimation"></a>

### BoltAdjustment.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.ExportToTextFile"></a>

### BoltAdjustment.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.FetchRemoteResults"></a>

### BoltAdjustment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GetChildren"></a>

### BoltAdjustment.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GetParameter"></a>

### BoltAdjustment.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GroupAllSimilarChildren"></a>

### BoltAdjustment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.GroupSimilarObjects"></a>

### BoltAdjustment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.PromoteToNamedSelection"></a>

### BoltAdjustment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.PropertyByAPIName"></a>

### BoltAdjustment.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.PropertyByName"></a>

### BoltAdjustment.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.RemoveParameter"></a>

### BoltAdjustment.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltAdjustment.RenameBasedOnDefinition"></a>

### BoltAdjustment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

