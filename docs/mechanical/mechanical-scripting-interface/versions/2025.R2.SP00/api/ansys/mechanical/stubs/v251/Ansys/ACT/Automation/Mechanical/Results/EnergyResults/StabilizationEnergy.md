# `StabilizationEnergy`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.EnergyResults.StabilizationEnergy"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.EnergyResults.StabilizationEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StabilizationEnergy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#StabilizationEnergy.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#StabilizationEnergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#StabilizationEnergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#StabilizationEnergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#StabilizationEnergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StabilizationEnergy.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#StabilizationEnergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#StabilizationEnergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#StabilizationEnergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#StabilizationEnergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#StabilizationEnergy.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#StabilizationEnergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#StabilizationEnergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#StabilizationEnergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#StabilizationEnergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#StabilizationEnergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#StabilizationEnergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#StabilizationEnergy.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#StabilizationEnergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#StabilizationEnergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StabilizationEnergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#StabilizationEnergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#StabilizationEnergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#StabilizationEnergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#StabilizationEnergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#StabilizationEnergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#StabilizationEnergy.Average)                                                     | Gets the Average.                                                        |
| [`By`](#StabilizationEnergy.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#StabilizationEnergy.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#StabilizationEnergy.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#StabilizationEnergy.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#StabilizationEnergy.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#StabilizationEnergy.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#StabilizationEnergy.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#StabilizationEnergy.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#StabilizationEnergy.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#StabilizationEnergy.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#StabilizationEnergy.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#StabilizationEnergy.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#StabilizationEnergy.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#StabilizationEnergy.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#StabilizationEnergy.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#StabilizationEnergy.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#StabilizationEnergy.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#StabilizationEnergy.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#StabilizationEnergy.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#StabilizationEnergy.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#StabilizationEnergy.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#StabilizationEnergy.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#StabilizationEnergy.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#StabilizationEnergy.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#StabilizationEnergy.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#StabilizationEnergy.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#StabilizationEnergy.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#StabilizationEnergy.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#StabilizationEnergy.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#StabilizationEnergy.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#StabilizationEnergy.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#StabilizationEnergy.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#StabilizationEnergy.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#StabilizationEnergy.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#StabilizationEnergy.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#StabilizationEnergy.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#StabilizationEnergy.Path)                                                           | Path property.                                                           |
| [`PlotData`](#StabilizationEnergy.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#StabilizationEnergy.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#StabilizationEnergy.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#StabilizationEnergy.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#StabilizationEnergy.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#StabilizationEnergy.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#StabilizationEnergy.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#StabilizationEnergy.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#StabilizationEnergy.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#StabilizationEnergy.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#StabilizationEnergy.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#StabilizationEnergy.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#StabilizationEnergy.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#StabilizationEnergy.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#StabilizationEnergy.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#StabilizationEnergy.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#StabilizationEnergy.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#StabilizationEnergy.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="StabilizationEnergy.Average"></a>

### *property* StabilizationEnergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.By"></a>

### *property* StabilizationEnergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.CalculateTimeHistory"></a>

### *property* StabilizationEnergy.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Children"></a>

### *property* StabilizationEnergy.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.CombinationNumber"></a>

### *property* StabilizationEnergy.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Comments"></a>

### *property* StabilizationEnergy.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.CoordinateSystem"></a>

### *property* StabilizationEnergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.CrackFrontNumber"></a>

### *property* StabilizationEnergy.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.DataModelObjectCategory"></a>

### *property* StabilizationEnergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.DisplayOption"></a>

### *property* StabilizationEnergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.DisplayTime"></a>

### *property* StabilizationEnergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.DpfEvaluation"></a>

### *property* StabilizationEnergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Figures"></a>

### *property* StabilizationEnergy.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.GlobalIDs"></a>

### *property* StabilizationEnergy.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.GraphControlsXAxis"></a>

### *property* StabilizationEnergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Identifier"></a>

### *property* StabilizationEnergy.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Images"></a>

### *property* StabilizationEnergy.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.InternalObject"></a>

### *property* StabilizationEnergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.IsSolved"></a>

### *property* StabilizationEnergy.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.ItemType"></a>

### *property* StabilizationEnergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.IterationNumber"></a>

### *property* StabilizationEnergy.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.LoadStep"></a>

### *property* StabilizationEnergy.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.LoadStepForMaximumOfMaximumValues"></a>

### *property* StabilizationEnergy.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.LoadStepForMaximumOfMinimumValues"></a>

### *property* StabilizationEnergy.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.LoadStepForMinimumOfMaximumValues"></a>

### *property* StabilizationEnergy.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.LoadStepForMinimumOfMinimumValues"></a>

### *property* StabilizationEnergy.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.LoadStepNumber"></a>

### *property* StabilizationEnergy.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Location"></a>

### *property* StabilizationEnergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Maximum"></a>

### *property* StabilizationEnergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.MaximumOccursOn"></a>

### *property* StabilizationEnergy.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.MaximumOfMaximumOverTime"></a>

### *property* StabilizationEnergy.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.MaximumOfMinimumOverTime"></a>

### *property* StabilizationEnergy.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Minimum"></a>

### *property* StabilizationEnergy.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.MinimumOccursOn"></a>

### *property* StabilizationEnergy.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.MinimumOfMaximumOverTime"></a>

### *property* StabilizationEnergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.MinimumOfMinimumOverTime"></a>

### *property* StabilizationEnergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.NamedSelections"></a>

### *property* StabilizationEnergy.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Path"></a>

### *property* StabilizationEnergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.PlotData"></a>

### *property* StabilizationEnergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Properties"></a>

### *property* StabilizationEnergy.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.RPMSelection"></a>

### *property* StabilizationEnergy.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.ScopingMethod"></a>

### *property* StabilizationEnergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.SetNumber"></a>

### *property* StabilizationEnergy.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.SolutionCombinationDriver"></a>

### *property* StabilizationEnergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.SolverComponentIDs"></a>

### *property* StabilizationEnergy.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Substep"></a>

### *property* StabilizationEnergy.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Suppressed"></a>

### *property* StabilizationEnergy.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Surface"></a>

### *property* StabilizationEnergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.SurfaceCoating"></a>

### *property* StabilizationEnergy.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Time"></a>

### *property* StabilizationEnergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.TimeForMaximumOfMaximumValues"></a>

### *property* StabilizationEnergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.TimeForMaximumOfMinimumValues"></a>

### *property* StabilizationEnergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.TimeForMinimumOfMaximumValues"></a>

### *property* StabilizationEnergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.TimeForMinimumOfMinimumValues"></a>

### *property* StabilizationEnergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Total"></a>

### *property* StabilizationEnergy.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.VisibleProperties"></a>

### *property* StabilizationEnergy.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StabilizationEnergy.Activate"></a>

### StabilizationEnergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.AddAlert"></a>

### StabilizationEnergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.AddComment"></a>

### StabilizationEnergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.AddConvergence"></a>

### StabilizationEnergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.AddFigure"></a>

### StabilizationEnergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.AddImage"></a>

### StabilizationEnergy.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.ClearGeneratedData"></a>

### StabilizationEnergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.CopyTo"></a>

### StabilizationEnergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.CreateParameter"></a>

### StabilizationEnergy.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.CreateResultsAtAllSets"></a>

### StabilizationEnergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Delete"></a>

### StabilizationEnergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.Duplicate"></a>

### StabilizationEnergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.DuplicateWithoutResults"></a>

### StabilizationEnergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.EvaluateAllResults"></a>

### StabilizationEnergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.ExportAnimation"></a>

### StabilizationEnergy.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.ExportToTextFile"></a>

### StabilizationEnergy.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.FetchRemoteResults"></a>

### StabilizationEnergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.GetChildren"></a>

### StabilizationEnergy.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.GetParameter"></a>

### StabilizationEnergy.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.GroupAllSimilarChildren"></a>

### StabilizationEnergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.GroupSimilarObjects"></a>

### StabilizationEnergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.PromoteToNamedSelection"></a>

### StabilizationEnergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.PropertyByAPIName"></a>

### StabilizationEnergy.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.PropertyByName"></a>

### StabilizationEnergy.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.RemoveParameter"></a>

### StabilizationEnergy.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StabilizationEnergy.RenameBasedOnDefinition"></a>

### StabilizationEnergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

