# `VectorBendingMoment`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorBendingMoment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorBendingMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VectorBendingMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VectorBendingMoment.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#VectorBendingMoment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#VectorBendingMoment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#VectorBendingMoment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#VectorBendingMoment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VectorBendingMoment.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#VectorBendingMoment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#VectorBendingMoment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VectorBendingMoment.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#VectorBendingMoment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#VectorBendingMoment.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VectorBendingMoment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#VectorBendingMoment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#VectorBendingMoment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#VectorBendingMoment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#VectorBendingMoment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#VectorBendingMoment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#VectorBendingMoment.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VectorBendingMoment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VectorBendingMoment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VectorBendingMoment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#VectorBendingMoment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#VectorBendingMoment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VectorBendingMoment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VectorBendingMoment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VectorBendingMoment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#VectorBendingMoment.Average)                                                     | Gets the Average.                                                        |
| [`By`](#VectorBendingMoment.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#VectorBendingMoment.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#VectorBendingMoment.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#VectorBendingMoment.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#VectorBendingMoment.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#VectorBendingMoment.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#VectorBendingMoment.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#VectorBendingMoment.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#VectorBendingMoment.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#VectorBendingMoment.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#VectorBendingMoment.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#VectorBendingMoment.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#VectorBendingMoment.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#VectorBendingMoment.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#VectorBendingMoment.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#VectorBendingMoment.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#VectorBendingMoment.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#VectorBendingMoment.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#VectorBendingMoment.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#VectorBendingMoment.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#VectorBendingMoment.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#VectorBendingMoment.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#VectorBendingMoment.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#VectorBendingMoment.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#VectorBendingMoment.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#VectorBendingMoment.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#VectorBendingMoment.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#VectorBendingMoment.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#VectorBendingMoment.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#VectorBendingMoment.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#VectorBendingMoment.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#VectorBendingMoment.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#VectorBendingMoment.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#VectorBendingMoment.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#VectorBendingMoment.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#VectorBendingMoment.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#VectorBendingMoment.Path)                                                           | Path property.                                                           |
| [`PlotData`](#VectorBendingMoment.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#VectorBendingMoment.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#VectorBendingMoment.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#VectorBendingMoment.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#VectorBendingMoment.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#VectorBendingMoment.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#VectorBendingMoment.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#VectorBendingMoment.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#VectorBendingMoment.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#VectorBendingMoment.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#VectorBendingMoment.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#VectorBendingMoment.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#VectorBendingMoment.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#VectorBendingMoment.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#VectorBendingMoment.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#VectorBendingMoment.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#VectorBendingMoment.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#VectorBendingMoment.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="VectorBendingMoment.Average"></a>

### *property* VectorBendingMoment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.By"></a>

### *property* VectorBendingMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.CalculateTimeHistory"></a>

### *property* VectorBendingMoment.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Children"></a>

### *property* VectorBendingMoment.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.CombinationNumber"></a>

### *property* VectorBendingMoment.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Comments"></a>

### *property* VectorBendingMoment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.CoordinateSystem"></a>

### *property* VectorBendingMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.CrackFrontNumber"></a>

### *property* VectorBendingMoment.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.DataModelObjectCategory"></a>

### *property* VectorBendingMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.DisplayOption"></a>

### *property* VectorBendingMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.DisplayTime"></a>

### *property* VectorBendingMoment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.DpfEvaluation"></a>

### *property* VectorBendingMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Figures"></a>

### *property* VectorBendingMoment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.GlobalIDs"></a>

### *property* VectorBendingMoment.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.GraphControlsXAxis"></a>

### *property* VectorBendingMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Identifier"></a>

### *property* VectorBendingMoment.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Images"></a>

### *property* VectorBendingMoment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.InternalObject"></a>

### *property* VectorBendingMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.IsSolved"></a>

### *property* VectorBendingMoment.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.ItemType"></a>

### *property* VectorBendingMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.IterationNumber"></a>

### *property* VectorBendingMoment.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.LoadStep"></a>

### *property* VectorBendingMoment.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* VectorBendingMoment.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* VectorBendingMoment.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* VectorBendingMoment.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* VectorBendingMoment.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.LoadStepNumber"></a>

### *property* VectorBendingMoment.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Location"></a>

### *property* VectorBendingMoment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Maximum"></a>

### *property* VectorBendingMoment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.MaximumOccursOn"></a>

### *property* VectorBendingMoment.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.MaximumOfMaximumOverTime"></a>

### *property* VectorBendingMoment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.MaximumOfMinimumOverTime"></a>

### *property* VectorBendingMoment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Minimum"></a>

### *property* VectorBendingMoment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.MinimumOccursOn"></a>

### *property* VectorBendingMoment.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.MinimumOfMaximumOverTime"></a>

### *property* VectorBendingMoment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.MinimumOfMinimumOverTime"></a>

### *property* VectorBendingMoment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.NamedSelections"></a>

### *property* VectorBendingMoment.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Path"></a>

### *property* VectorBendingMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.PlotData"></a>

### *property* VectorBendingMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Properties"></a>

### *property* VectorBendingMoment.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.RPMSelection"></a>

### *property* VectorBendingMoment.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.ScopingMethod"></a>

### *property* VectorBendingMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.SetNumber"></a>

### *property* VectorBendingMoment.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.SolutionCombinationDriver"></a>

### *property* VectorBendingMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.SolverComponentIDs"></a>

### *property* VectorBendingMoment.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Substep"></a>

### *property* VectorBendingMoment.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Suppressed"></a>

### *property* VectorBendingMoment.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Surface"></a>

### *property* VectorBendingMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.SurfaceCoating"></a>

### *property* VectorBendingMoment.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Time"></a>

### *property* VectorBendingMoment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.TimeForMaximumOfMaximumValues"></a>

### *property* VectorBendingMoment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.TimeForMaximumOfMinimumValues"></a>

### *property* VectorBendingMoment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.TimeForMinimumOfMaximumValues"></a>

### *property* VectorBendingMoment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.TimeForMinimumOfMinimumValues"></a>

### *property* VectorBendingMoment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Total"></a>

### *property* VectorBendingMoment.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.VisibleProperties"></a>

### *property* VectorBendingMoment.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VectorBendingMoment.Activate"></a>

### VectorBendingMoment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.AddAlert"></a>

### VectorBendingMoment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.AddComment"></a>

### VectorBendingMoment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.AddConvergence"></a>

### VectorBendingMoment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.AddFigure"></a>

### VectorBendingMoment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.AddImage"></a>

### VectorBendingMoment.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.ClearGeneratedData"></a>

### VectorBendingMoment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.CopyTo"></a>

### VectorBendingMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.CreateParameter"></a>

### VectorBendingMoment.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.CreateResultsAtAllSets"></a>

### VectorBendingMoment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Delete"></a>

### VectorBendingMoment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.Duplicate"></a>

### VectorBendingMoment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.DuplicateWithoutResults"></a>

### VectorBendingMoment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.EvaluateAllResults"></a>

### VectorBendingMoment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.ExportAnimation"></a>

### VectorBendingMoment.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.ExportToTextFile"></a>

### VectorBendingMoment.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.FetchRemoteResults"></a>

### VectorBendingMoment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.GetChildren"></a>

### VectorBendingMoment.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.GetParameter"></a>

### VectorBendingMoment.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.GroupAllSimilarChildren"></a>

### VectorBendingMoment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.GroupSimilarObjects"></a>

### VectorBendingMoment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.PromoteToNamedSelection"></a>

### VectorBendingMoment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.PropertyByAPIName"></a>

### VectorBendingMoment.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.PropertyByName"></a>

### VectorBendingMoment.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.RemoveParameter"></a>

### VectorBendingMoment.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorBendingMoment.RenameBasedOnDefinition"></a>

### VectorBendingMoment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

