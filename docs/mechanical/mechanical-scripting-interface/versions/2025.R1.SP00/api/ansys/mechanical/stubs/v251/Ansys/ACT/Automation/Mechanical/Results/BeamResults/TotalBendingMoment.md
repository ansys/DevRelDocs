# `TotalBendingMoment`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalBendingMoment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalBendingMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalBendingMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalBendingMoment.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#TotalBendingMoment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#TotalBendingMoment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#TotalBendingMoment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#TotalBendingMoment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalBendingMoment.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalBendingMoment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalBendingMoment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalBendingMoment.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#TotalBendingMoment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#TotalBendingMoment.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalBendingMoment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#TotalBendingMoment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TotalBendingMoment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalBendingMoment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#TotalBendingMoment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#TotalBendingMoment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#TotalBendingMoment.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalBendingMoment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalBendingMoment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalBendingMoment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#TotalBendingMoment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#TotalBendingMoment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalBendingMoment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalBendingMoment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalBendingMoment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#TotalBendingMoment.Average)                                                     | Gets the Average.                                                        |
| [`BeamResultType`](#TotalBendingMoment.BeamResultType)                                       | Gets or sets the BeamResultType.                                         |
| [`By`](#TotalBendingMoment.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#TotalBendingMoment.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#TotalBendingMoment.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#TotalBendingMoment.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#TotalBendingMoment.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#TotalBendingMoment.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#TotalBendingMoment.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#TotalBendingMoment.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#TotalBendingMoment.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#TotalBendingMoment.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#TotalBendingMoment.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#TotalBendingMoment.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#TotalBendingMoment.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#TotalBendingMoment.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#TotalBendingMoment.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#TotalBendingMoment.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#TotalBendingMoment.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#TotalBendingMoment.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#TotalBendingMoment.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#TotalBendingMoment.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#TotalBendingMoment.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#TotalBendingMoment.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#TotalBendingMoment.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#TotalBendingMoment.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#TotalBendingMoment.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#TotalBendingMoment.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#TotalBendingMoment.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#TotalBendingMoment.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#TotalBendingMoment.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#TotalBendingMoment.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#TotalBendingMoment.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#TotalBendingMoment.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#TotalBendingMoment.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#TotalBendingMoment.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#TotalBendingMoment.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#TotalBendingMoment.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#TotalBendingMoment.Path)                                                           | Path property.                                                           |
| [`PlotData`](#TotalBendingMoment.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#TotalBendingMoment.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#TotalBendingMoment.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#TotalBendingMoment.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#TotalBendingMoment.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#TotalBendingMoment.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#TotalBendingMoment.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#TotalBendingMoment.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#TotalBendingMoment.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#TotalBendingMoment.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#TotalBendingMoment.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#TotalBendingMoment.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#TotalBendingMoment.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#TotalBendingMoment.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#TotalBendingMoment.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#TotalBendingMoment.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#TotalBendingMoment.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#TotalBendingMoment.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="TotalBendingMoment.Average"></a>

### *property* TotalBendingMoment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.BeamResultType"></a>

### *property* TotalBendingMoment.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.By"></a>

### *property* TotalBendingMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.CalculateTimeHistory"></a>

### *property* TotalBendingMoment.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Children"></a>

### *property* TotalBendingMoment.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.CombinationNumber"></a>

### *property* TotalBendingMoment.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Comments"></a>

### *property* TotalBendingMoment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.CoordinateSystem"></a>

### *property* TotalBendingMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.CrackFrontNumber"></a>

### *property* TotalBendingMoment.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.DataModelObjectCategory"></a>

### *property* TotalBendingMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.DisplayOption"></a>

### *property* TotalBendingMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.DisplayTime"></a>

### *property* TotalBendingMoment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.DpfEvaluation"></a>

### *property* TotalBendingMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Figures"></a>

### *property* TotalBendingMoment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.GlobalIDs"></a>

### *property* TotalBendingMoment.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.GraphControlsXAxis"></a>

### *property* TotalBendingMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Identifier"></a>

### *property* TotalBendingMoment.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Images"></a>

### *property* TotalBendingMoment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.InternalObject"></a>

### *property* TotalBendingMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.IsSolved"></a>

### *property* TotalBendingMoment.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.ItemType"></a>

### *property* TotalBendingMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.IterationNumber"></a>

### *property* TotalBendingMoment.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.LoadStep"></a>

### *property* TotalBendingMoment.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalBendingMoment.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalBendingMoment.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalBendingMoment.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalBendingMoment.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.LoadStepNumber"></a>

### *property* TotalBendingMoment.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Location"></a>

### *property* TotalBendingMoment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Maximum"></a>

### *property* TotalBendingMoment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.MaximumOccursOn"></a>

### *property* TotalBendingMoment.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.MaximumOfMaximumOverTime"></a>

### *property* TotalBendingMoment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.MaximumOfMinimumOverTime"></a>

### *property* TotalBendingMoment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Minimum"></a>

### *property* TotalBendingMoment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.MinimumOccursOn"></a>

### *property* TotalBendingMoment.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.MinimumOfMaximumOverTime"></a>

### *property* TotalBendingMoment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.MinimumOfMinimumOverTime"></a>

### *property* TotalBendingMoment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.NamedSelections"></a>

### *property* TotalBendingMoment.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Path"></a>

### *property* TotalBendingMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.PlotData"></a>

### *property* TotalBendingMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Properties"></a>

### *property* TotalBendingMoment.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.RPMSelection"></a>

### *property* TotalBendingMoment.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.ScopingMethod"></a>

### *property* TotalBendingMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.SetNumber"></a>

### *property* TotalBendingMoment.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.SolutionCombinationDriver"></a>

### *property* TotalBendingMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.SolverComponentIDs"></a>

### *property* TotalBendingMoment.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Substep"></a>

### *property* TotalBendingMoment.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Suppressed"></a>

### *property* TotalBendingMoment.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Surface"></a>

### *property* TotalBendingMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.SurfaceCoating"></a>

### *property* TotalBendingMoment.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Time"></a>

### *property* TotalBendingMoment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.TimeForMaximumOfMaximumValues"></a>

### *property* TotalBendingMoment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.TimeForMaximumOfMinimumValues"></a>

### *property* TotalBendingMoment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.TimeForMinimumOfMaximumValues"></a>

### *property* TotalBendingMoment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.TimeForMinimumOfMinimumValues"></a>

### *property* TotalBendingMoment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Total"></a>

### *property* TotalBendingMoment.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.VisibleProperties"></a>

### *property* TotalBendingMoment.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalBendingMoment.Activate"></a>

### TotalBendingMoment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.AddAlert"></a>

### TotalBendingMoment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.AddComment"></a>

### TotalBendingMoment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.AddConvergence"></a>

### TotalBendingMoment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.AddFigure"></a>

### TotalBendingMoment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.AddImage"></a>

### TotalBendingMoment.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.ClearGeneratedData"></a>

### TotalBendingMoment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.CopyTo"></a>

### TotalBendingMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.CreateParameter"></a>

### TotalBendingMoment.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.CreateResultsAtAllSets"></a>

### TotalBendingMoment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Delete"></a>

### TotalBendingMoment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.Duplicate"></a>

### TotalBendingMoment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.DuplicateWithoutResults"></a>

### TotalBendingMoment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.EvaluateAllResults"></a>

### TotalBendingMoment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.ExportAnimation"></a>

### TotalBendingMoment.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.ExportToTextFile"></a>

### TotalBendingMoment.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.FetchRemoteResults"></a>

### TotalBendingMoment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.GetChildren"></a>

### TotalBendingMoment.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.GetParameter"></a>

### TotalBendingMoment.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.GroupAllSimilarChildren"></a>

### TotalBendingMoment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.GroupSimilarObjects"></a>

### TotalBendingMoment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.PromoteToNamedSelection"></a>

### TotalBendingMoment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.PropertyByAPIName"></a>

### TotalBendingMoment.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.PropertyByName"></a>

### TotalBendingMoment.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.RemoveParameter"></a>

### TotalBendingMoment.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalBendingMoment.RenameBasedOnDefinition"></a>

### TotalBendingMoment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

