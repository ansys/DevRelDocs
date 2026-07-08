# `VectorTorsionalMoment`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorTorsionalMoment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorTorsionalMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VectorTorsionalMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VectorTorsionalMoment.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#VectorTorsionalMoment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#VectorTorsionalMoment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#VectorTorsionalMoment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#VectorTorsionalMoment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VectorTorsionalMoment.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#VectorTorsionalMoment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#VectorTorsionalMoment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VectorTorsionalMoment.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#VectorTorsionalMoment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#VectorTorsionalMoment.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VectorTorsionalMoment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#VectorTorsionalMoment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#VectorTorsionalMoment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#VectorTorsionalMoment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#VectorTorsionalMoment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#VectorTorsionalMoment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#VectorTorsionalMoment.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VectorTorsionalMoment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VectorTorsionalMoment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VectorTorsionalMoment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#VectorTorsionalMoment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#VectorTorsionalMoment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VectorTorsionalMoment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VectorTorsionalMoment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VectorTorsionalMoment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#VectorTorsionalMoment.Average)                                                     | Gets the Average.                                                        |
| [`By`](#VectorTorsionalMoment.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#VectorTorsionalMoment.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#VectorTorsionalMoment.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#VectorTorsionalMoment.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#VectorTorsionalMoment.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#VectorTorsionalMoment.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#VectorTorsionalMoment.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#VectorTorsionalMoment.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#VectorTorsionalMoment.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#VectorTorsionalMoment.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#VectorTorsionalMoment.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#VectorTorsionalMoment.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#VectorTorsionalMoment.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#VectorTorsionalMoment.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#VectorTorsionalMoment.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#VectorTorsionalMoment.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#VectorTorsionalMoment.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#VectorTorsionalMoment.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#VectorTorsionalMoment.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#VectorTorsionalMoment.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#VectorTorsionalMoment.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#VectorTorsionalMoment.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#VectorTorsionalMoment.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#VectorTorsionalMoment.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#VectorTorsionalMoment.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#VectorTorsionalMoment.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#VectorTorsionalMoment.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#VectorTorsionalMoment.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#VectorTorsionalMoment.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#VectorTorsionalMoment.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#VectorTorsionalMoment.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#VectorTorsionalMoment.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#VectorTorsionalMoment.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#VectorTorsionalMoment.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#VectorTorsionalMoment.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#VectorTorsionalMoment.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#VectorTorsionalMoment.Path)                                                           | Path property.                                                           |
| [`PlotData`](#VectorTorsionalMoment.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#VectorTorsionalMoment.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#VectorTorsionalMoment.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#VectorTorsionalMoment.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#VectorTorsionalMoment.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#VectorTorsionalMoment.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#VectorTorsionalMoment.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#VectorTorsionalMoment.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#VectorTorsionalMoment.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#VectorTorsionalMoment.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#VectorTorsionalMoment.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#VectorTorsionalMoment.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#VectorTorsionalMoment.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#VectorTorsionalMoment.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#VectorTorsionalMoment.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#VectorTorsionalMoment.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#VectorTorsionalMoment.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#VectorTorsionalMoment.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="VectorTorsionalMoment.Average"></a>

### *property* VectorTorsionalMoment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.By"></a>

### *property* VectorTorsionalMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.CalculateTimeHistory"></a>

### *property* VectorTorsionalMoment.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Children"></a>

### *property* VectorTorsionalMoment.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.CombinationNumber"></a>

### *property* VectorTorsionalMoment.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Comments"></a>

### *property* VectorTorsionalMoment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.CoordinateSystem"></a>

### *property* VectorTorsionalMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.CrackFrontNumber"></a>

### *property* VectorTorsionalMoment.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.DataModelObjectCategory"></a>

### *property* VectorTorsionalMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.DisplayOption"></a>

### *property* VectorTorsionalMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.DisplayTime"></a>

### *property* VectorTorsionalMoment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.DpfEvaluation"></a>

### *property* VectorTorsionalMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Figures"></a>

### *property* VectorTorsionalMoment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.GlobalIDs"></a>

### *property* VectorTorsionalMoment.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.GraphControlsXAxis"></a>

### *property* VectorTorsionalMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Identifier"></a>

### *property* VectorTorsionalMoment.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Images"></a>

### *property* VectorTorsionalMoment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.InternalObject"></a>

### *property* VectorTorsionalMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.IsSolved"></a>

### *property* VectorTorsionalMoment.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.ItemType"></a>

### *property* VectorTorsionalMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.IterationNumber"></a>

### *property* VectorTorsionalMoment.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.LoadStep"></a>

### *property* VectorTorsionalMoment.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* VectorTorsionalMoment.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* VectorTorsionalMoment.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* VectorTorsionalMoment.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* VectorTorsionalMoment.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.LoadStepNumber"></a>

### *property* VectorTorsionalMoment.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Location"></a>

### *property* VectorTorsionalMoment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Maximum"></a>

### *property* VectorTorsionalMoment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.MaximumOccursOn"></a>

### *property* VectorTorsionalMoment.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.MaximumOfMaximumOverTime"></a>

### *property* VectorTorsionalMoment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.MaximumOfMinimumOverTime"></a>

### *property* VectorTorsionalMoment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Minimum"></a>

### *property* VectorTorsionalMoment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.MinimumOccursOn"></a>

### *property* VectorTorsionalMoment.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.MinimumOfMaximumOverTime"></a>

### *property* VectorTorsionalMoment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.MinimumOfMinimumOverTime"></a>

### *property* VectorTorsionalMoment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.NamedSelections"></a>

### *property* VectorTorsionalMoment.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Path"></a>

### *property* VectorTorsionalMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.PlotData"></a>

### *property* VectorTorsionalMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Properties"></a>

### *property* VectorTorsionalMoment.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.RPMSelection"></a>

### *property* VectorTorsionalMoment.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.ScopingMethod"></a>

### *property* VectorTorsionalMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.SetNumber"></a>

### *property* VectorTorsionalMoment.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.SolutionCombinationDriver"></a>

### *property* VectorTorsionalMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.SolverComponentIDs"></a>

### *property* VectorTorsionalMoment.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Substep"></a>

### *property* VectorTorsionalMoment.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Suppressed"></a>

### *property* VectorTorsionalMoment.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Surface"></a>

### *property* VectorTorsionalMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.SurfaceCoating"></a>

### *property* VectorTorsionalMoment.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Time"></a>

### *property* VectorTorsionalMoment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.TimeForMaximumOfMaximumValues"></a>

### *property* VectorTorsionalMoment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.TimeForMaximumOfMinimumValues"></a>

### *property* VectorTorsionalMoment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.TimeForMinimumOfMaximumValues"></a>

### *property* VectorTorsionalMoment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.TimeForMinimumOfMinimumValues"></a>

### *property* VectorTorsionalMoment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Total"></a>

### *property* VectorTorsionalMoment.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.VisibleProperties"></a>

### *property* VectorTorsionalMoment.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VectorTorsionalMoment.Activate"></a>

### VectorTorsionalMoment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.AddAlert"></a>

### VectorTorsionalMoment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.AddComment"></a>

### VectorTorsionalMoment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.AddConvergence"></a>

### VectorTorsionalMoment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.AddFigure"></a>

### VectorTorsionalMoment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.AddImage"></a>

### VectorTorsionalMoment.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.ClearGeneratedData"></a>

### VectorTorsionalMoment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.CopyTo"></a>

### VectorTorsionalMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.CreateParameter"></a>

### VectorTorsionalMoment.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.CreateResultsAtAllSets"></a>

### VectorTorsionalMoment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Delete"></a>

### VectorTorsionalMoment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.Duplicate"></a>

### VectorTorsionalMoment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.DuplicateWithoutResults"></a>

### VectorTorsionalMoment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.EvaluateAllResults"></a>

### VectorTorsionalMoment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.ExportAnimation"></a>

### VectorTorsionalMoment.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.ExportToTextFile"></a>

### VectorTorsionalMoment.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.FetchRemoteResults"></a>

### VectorTorsionalMoment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.GetChildren"></a>

### VectorTorsionalMoment.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.GetParameter"></a>

### VectorTorsionalMoment.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.GroupAllSimilarChildren"></a>

### VectorTorsionalMoment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.GroupSimilarObjects"></a>

### VectorTorsionalMoment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.PromoteToNamedSelection"></a>

### VectorTorsionalMoment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.PropertyByAPIName"></a>

### VectorTorsionalMoment.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.PropertyByName"></a>

### VectorTorsionalMoment.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.RemoveParameter"></a>

### VectorTorsionalMoment.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorTorsionalMoment.RenameBasedOnDefinition"></a>

### VectorTorsionalMoment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

