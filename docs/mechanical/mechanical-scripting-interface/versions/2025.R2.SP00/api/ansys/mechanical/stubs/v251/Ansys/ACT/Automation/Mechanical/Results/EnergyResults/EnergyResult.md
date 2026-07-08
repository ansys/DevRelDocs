# `EnergyResult`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.EnergyResults.EnergyResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.EnergyResults.EnergyResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EnergyResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EnergyResult.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#EnergyResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#EnergyResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#EnergyResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#EnergyResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EnergyResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#EnergyResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#EnergyResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EnergyResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#EnergyResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#EnergyResult.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#EnergyResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#EnergyResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#EnergyResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#EnergyResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#EnergyResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#EnergyResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#EnergyResult.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#EnergyResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#EnergyResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EnergyResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#EnergyResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#EnergyResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#EnergyResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EnergyResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#EnergyResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#EnergyResult.Average)                                                     | Gets the Average.                                                        |
| [`By`](#EnergyResult.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#EnergyResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#EnergyResult.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#EnergyResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#EnergyResult.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#EnergyResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#EnergyResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#EnergyResult.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#EnergyResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#EnergyResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#EnergyResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#EnergyResult.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#EnergyResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#EnergyResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#EnergyResult.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#EnergyResult.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#EnergyResult.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#EnergyResult.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#EnergyResult.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#EnergyResult.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#EnergyResult.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#EnergyResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#EnergyResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#EnergyResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#EnergyResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#EnergyResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#EnergyResult.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#EnergyResult.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#EnergyResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#EnergyResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#EnergyResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#EnergyResult.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#EnergyResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#EnergyResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#EnergyResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#EnergyResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#EnergyResult.Path)                                                           | Path property.                                                           |
| [`PlotData`](#EnergyResult.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#EnergyResult.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#EnergyResult.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#EnergyResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#EnergyResult.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#EnergyResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#EnergyResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#EnergyResult.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#EnergyResult.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#EnergyResult.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#EnergyResult.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#EnergyResult.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#EnergyResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#EnergyResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#EnergyResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#EnergyResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#EnergyResult.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#EnergyResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="EnergyResult.Average"></a>

### *property* EnergyResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.By"></a>

### *property* EnergyResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.CalculateTimeHistory"></a>

### *property* EnergyResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Children"></a>

### *property* EnergyResult.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.CombinationNumber"></a>

### *property* EnergyResult.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Comments"></a>

### *property* EnergyResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.CoordinateSystem"></a>

### *property* EnergyResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.CrackFrontNumber"></a>

### *property* EnergyResult.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.DataModelObjectCategory"></a>

### *property* EnergyResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.DisplayOption"></a>

### *property* EnergyResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.DisplayTime"></a>

### *property* EnergyResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.DpfEvaluation"></a>

### *property* EnergyResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Figures"></a>

### *property* EnergyResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.GlobalIDs"></a>

### *property* EnergyResult.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.GraphControlsXAxis"></a>

### *property* EnergyResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Identifier"></a>

### *property* EnergyResult.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Images"></a>

### *property* EnergyResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.InternalObject"></a>

### *property* EnergyResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.IsSolved"></a>

### *property* EnergyResult.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.ItemType"></a>

### *property* EnergyResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.IterationNumber"></a>

### *property* EnergyResult.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.LoadStep"></a>

### *property* EnergyResult.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* EnergyResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* EnergyResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* EnergyResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* EnergyResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.LoadStepNumber"></a>

### *property* EnergyResult.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Location"></a>

### *property* EnergyResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Maximum"></a>

### *property* EnergyResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.MaximumOccursOn"></a>

### *property* EnergyResult.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.MaximumOfMaximumOverTime"></a>

### *property* EnergyResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.MaximumOfMinimumOverTime"></a>

### *property* EnergyResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Minimum"></a>

### *property* EnergyResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.MinimumOccursOn"></a>

### *property* EnergyResult.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.MinimumOfMaximumOverTime"></a>

### *property* EnergyResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.MinimumOfMinimumOverTime"></a>

### *property* EnergyResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.NamedSelections"></a>

### *property* EnergyResult.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Path"></a>

### *property* EnergyResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.PlotData"></a>

### *property* EnergyResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Properties"></a>

### *property* EnergyResult.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.RPMSelection"></a>

### *property* EnergyResult.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.ScopingMethod"></a>

### *property* EnergyResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.SetNumber"></a>

### *property* EnergyResult.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.SolutionCombinationDriver"></a>

### *property* EnergyResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.SolverComponentIDs"></a>

### *property* EnergyResult.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Substep"></a>

### *property* EnergyResult.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Suppressed"></a>

### *property* EnergyResult.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Surface"></a>

### *property* EnergyResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.SurfaceCoating"></a>

### *property* EnergyResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Time"></a>

### *property* EnergyResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.TimeForMaximumOfMaximumValues"></a>

### *property* EnergyResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.TimeForMaximumOfMinimumValues"></a>

### *property* EnergyResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.TimeForMinimumOfMaximumValues"></a>

### *property* EnergyResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.TimeForMinimumOfMinimumValues"></a>

### *property* EnergyResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Total"></a>

### *property* EnergyResult.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.VisibleProperties"></a>

### *property* EnergyResult.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EnergyResult.Activate"></a>

### EnergyResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.AddAlert"></a>

### EnergyResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.AddComment"></a>

### EnergyResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.AddConvergence"></a>

### EnergyResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.AddFigure"></a>

### EnergyResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.AddImage"></a>

### EnergyResult.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.ClearGeneratedData"></a>

### EnergyResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.CopyTo"></a>

### EnergyResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.CreateParameter"></a>

### EnergyResult.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.CreateResultsAtAllSets"></a>

### EnergyResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Delete"></a>

### EnergyResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.Duplicate"></a>

### EnergyResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.DuplicateWithoutResults"></a>

### EnergyResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.EvaluateAllResults"></a>

### EnergyResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.ExportAnimation"></a>

### EnergyResult.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.ExportToTextFile"></a>

### EnergyResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.FetchRemoteResults"></a>

### EnergyResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.GetChildren"></a>

### EnergyResult.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.GetParameter"></a>

### EnergyResult.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.GroupAllSimilarChildren"></a>

### EnergyResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.GroupSimilarObjects"></a>

### EnergyResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.PromoteToNamedSelection"></a>

### EnergyResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.PropertyByAPIName"></a>

### EnergyResult.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.PropertyByName"></a>

### EnergyResult.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.RemoveParameter"></a>

### EnergyResult.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyResult.RenameBasedOnDefinition"></a>

### EnergyResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

