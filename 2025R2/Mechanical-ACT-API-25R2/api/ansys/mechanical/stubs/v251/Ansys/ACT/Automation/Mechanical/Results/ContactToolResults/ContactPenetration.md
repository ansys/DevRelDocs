# `ContactPenetration`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPenetration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPenetration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactPenetration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactPenetration.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ContactPenetration.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ContactPenetration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ContactPenetration.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ContactPenetration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactPenetration.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactPenetration.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactPenetration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactPenetration.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ContactPenetration.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ContactPenetration.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactPenetration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ContactPenetration.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ContactPenetration.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactPenetration.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ContactPenetration.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ContactPenetration.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ContactPenetration.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactPenetration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactPenetration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactPenetration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ContactPenetration.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ContactPenetration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactPenetration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactPenetration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactPenetration.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#ContactPenetration.Average)                                                     | Gets the Average.                                                        |
| [`By`](#ContactPenetration.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#ContactPenetration.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#ContactPenetration.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#ContactPenetration.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#ContactPenetration.Comments)                                                   | Gets the list of associated comments.                                    |
| [`ContactResultType`](#ContactPenetration.ContactResultType)                                 | Gets or sets the ContactResultType.                                      |
| [`CoordinateSystem`](#ContactPenetration.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#ContactPenetration.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#ContactPenetration.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#ContactPenetration.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#ContactPenetration.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#ContactPenetration.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#ContactPenetration.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#ContactPenetration.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#ContactPenetration.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#ContactPenetration.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#ContactPenetration.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#ContactPenetration.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ContactPenetration.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#ContactPenetration.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#ContactPenetration.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#ContactPenetration.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ContactPenetration.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#ContactPenetration.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#ContactPenetration.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#ContactPenetration.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#ContactPenetration.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ContactPenetration.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#ContactPenetration.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#ContactPenetration.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#ContactPenetration.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#ContactPenetration.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#ContactPenetration.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#ContactPenetration.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#ContactPenetration.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#ContactPenetration.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#ContactPenetration.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#ContactPenetration.Path)                                                           | Path property.                                                           |
| [`PlotData`](#ContactPenetration.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#ContactPenetration.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ContactPenetration.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#ContactPenetration.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#ContactPenetration.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#ContactPenetration.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#ContactPenetration.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#ContactPenetration.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#ContactPenetration.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#ContactPenetration.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#ContactPenetration.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#ContactPenetration.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#ContactPenetration.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#ContactPenetration.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#ContactPenetration.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#ContactPenetration.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#ContactPenetration.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#ContactPenetration.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="ContactPenetration.Average"></a>

### *property* ContactPenetration.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.By"></a>

### *property* ContactPenetration.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.CalculateTimeHistory"></a>

### *property* ContactPenetration.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Children"></a>

### *property* ContactPenetration.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.CombinationNumber"></a>

### *property* ContactPenetration.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Comments"></a>

### *property* ContactPenetration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.ContactResultType"></a>

### *property* ContactPenetration.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.CoordinateSystem"></a>

### *property* ContactPenetration.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.CrackFrontNumber"></a>

### *property* ContactPenetration.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.DataModelObjectCategory"></a>

### *property* ContactPenetration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.DisplayOption"></a>

### *property* ContactPenetration.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.DisplayTime"></a>

### *property* ContactPenetration.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.DpfEvaluation"></a>

### *property* ContactPenetration.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Figures"></a>

### *property* ContactPenetration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.GlobalIDs"></a>

### *property* ContactPenetration.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.GraphControlsXAxis"></a>

### *property* ContactPenetration.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Identifier"></a>

### *property* ContactPenetration.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Images"></a>

### *property* ContactPenetration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.InternalObject"></a>

### *property* ContactPenetration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.IsSolved"></a>

### *property* ContactPenetration.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.ItemType"></a>

### *property* ContactPenetration.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.IterationNumber"></a>

### *property* ContactPenetration.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.LoadStep"></a>

### *property* ContactPenetration.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.LoadStepForMaximumOfMaximumValues"></a>

### *property* ContactPenetration.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.LoadStepForMaximumOfMinimumValues"></a>

### *property* ContactPenetration.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.LoadStepForMinimumOfMaximumValues"></a>

### *property* ContactPenetration.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.LoadStepForMinimumOfMinimumValues"></a>

### *property* ContactPenetration.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.LoadStepNumber"></a>

### *property* ContactPenetration.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Location"></a>

### *property* ContactPenetration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Maximum"></a>

### *property* ContactPenetration.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.MaximumOccursOn"></a>

### *property* ContactPenetration.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.MaximumOfMaximumOverTime"></a>

### *property* ContactPenetration.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.MaximumOfMinimumOverTime"></a>

### *property* ContactPenetration.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Minimum"></a>

### *property* ContactPenetration.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.MinimumOccursOn"></a>

### *property* ContactPenetration.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.MinimumOfMaximumOverTime"></a>

### *property* ContactPenetration.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.MinimumOfMinimumOverTime"></a>

### *property* ContactPenetration.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.NamedSelections"></a>

### *property* ContactPenetration.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Path"></a>

### *property* ContactPenetration.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.PlotData"></a>

### *property* ContactPenetration.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Properties"></a>

### *property* ContactPenetration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.RPMSelection"></a>

### *property* ContactPenetration.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.ScopingMethod"></a>

### *property* ContactPenetration.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.SetNumber"></a>

### *property* ContactPenetration.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.SolutionCombinationDriver"></a>

### *property* ContactPenetration.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.SolverComponentIDs"></a>

### *property* ContactPenetration.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Substep"></a>

### *property* ContactPenetration.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Suppressed"></a>

### *property* ContactPenetration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Surface"></a>

### *property* ContactPenetration.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.SurfaceCoating"></a>

### *property* ContactPenetration.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Time"></a>

### *property* ContactPenetration.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.TimeForMaximumOfMaximumValues"></a>

### *property* ContactPenetration.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.TimeForMaximumOfMinimumValues"></a>

### *property* ContactPenetration.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.TimeForMinimumOfMaximumValues"></a>

### *property* ContactPenetration.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.TimeForMinimumOfMinimumValues"></a>

### *property* ContactPenetration.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Total"></a>

### *property* ContactPenetration.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.VisibleProperties"></a>

### *property* ContactPenetration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactPenetration.Activate"></a>

### ContactPenetration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.AddAlert"></a>

### ContactPenetration.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.AddComment"></a>

### ContactPenetration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.AddConvergence"></a>

### ContactPenetration.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.AddFigure"></a>

### ContactPenetration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.AddImage"></a>

### ContactPenetration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.ClearGeneratedData"></a>

### ContactPenetration.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.CopyTo"></a>

### ContactPenetration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.CreateParameter"></a>

### ContactPenetration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.CreateResultsAtAllSets"></a>

### ContactPenetration.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Delete"></a>

### ContactPenetration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.Duplicate"></a>

### ContactPenetration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.DuplicateWithoutResults"></a>

### ContactPenetration.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.EvaluateAllResults"></a>

### ContactPenetration.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.ExportAnimation"></a>

### ContactPenetration.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.ExportToTextFile"></a>

### ContactPenetration.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.FetchRemoteResults"></a>

### ContactPenetration.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.GetChildren"></a>

### ContactPenetration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.GetParameter"></a>

### ContactPenetration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.GroupAllSimilarChildren"></a>

### ContactPenetration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.GroupSimilarObjects"></a>

### ContactPenetration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.PromoteToNamedSelection"></a>

### ContactPenetration.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.PropertyByAPIName"></a>

### ContactPenetration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.PropertyByName"></a>

### ContactPenetration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.RemoveParameter"></a>

### ContactPenetration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetration.RenameBasedOnDefinition"></a>

### ContactPenetration.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

