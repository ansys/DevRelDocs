# `ShapeFinderElemental`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ShapeFinderElemental"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ShapeFinderElemental

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ShapeFinderElemental.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#ShapeFinderElemental.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#ShapeFinderElemental.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#ShapeFinderElemental.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#ShapeFinderElemental.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#ShapeFinderElemental.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#ShapeFinderElemental.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#ShapeFinderElemental.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#ShapeFinderElemental.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#ShapeFinderElemental.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#ShapeFinderElemental.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#ShapeFinderElemental.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#ShapeFinderElemental.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#ShapeFinderElemental.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#ShapeFinderElemental.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#ShapeFinderElemental.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#ShapeFinderElemental.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#ShapeFinderElemental.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#ShapeFinderElemental.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#ShapeFinderElemental.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#ShapeFinderElemental.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#ShapeFinderElemental.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#ShapeFinderElemental.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#ShapeFinderElemental.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#ShapeFinderElemental.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#ShapeFinderElemental.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#ShapeFinderElemental.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#ShapeFinderElemental.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#ShapeFinderElemental.Average)                                                     | Gets the Average.                                                        |
| [`By`](#ShapeFinderElemental.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#ShapeFinderElemental.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#ShapeFinderElemental.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#ShapeFinderElemental.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#ShapeFinderElemental.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#ShapeFinderElemental.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#ShapeFinderElemental.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#ShapeFinderElemental.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#ShapeFinderElemental.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#ShapeFinderElemental.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#ShapeFinderElemental.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#ShapeFinderElemental.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#ShapeFinderElemental.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#ShapeFinderElemental.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#ShapeFinderElemental.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#ShapeFinderElemental.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#ShapeFinderElemental.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ShapeFinderElemental.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#ShapeFinderElemental.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#ShapeFinderElemental.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#ShapeFinderElemental.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ShapeFinderElemental.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#ShapeFinderElemental.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#ShapeFinderElemental.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#ShapeFinderElemental.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#ShapeFinderElemental.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ShapeFinderElemental.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#ShapeFinderElemental.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#ShapeFinderElemental.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#ShapeFinderElemental.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#ShapeFinderElemental.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#ShapeFinderElemental.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#ShapeFinderElemental.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#ShapeFinderElemental.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#ShapeFinderElemental.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#ShapeFinderElemental.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#ShapeFinderElemental.Path)                                                           | Path property.                                                           |
| [`PlotData`](#ShapeFinderElemental.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#ShapeFinderElemental.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ShapeFinderElemental.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#ShapeFinderElemental.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#ShapeFinderElemental.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#ShapeFinderElemental.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#ShapeFinderElemental.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#ShapeFinderElemental.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#ShapeFinderElemental.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#ShapeFinderElemental.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#ShapeFinderElemental.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#ShapeFinderElemental.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#ShapeFinderElemental.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#ShapeFinderElemental.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#ShapeFinderElemental.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#ShapeFinderElemental.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#ShapeFinderElemental.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#ShapeFinderElemental.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="ShapeFinderElemental.Average"></a>

### *property* ShapeFinderElemental.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.By"></a>

### *property* ShapeFinderElemental.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CalculateTimeHistory"></a>

### *property* ShapeFinderElemental.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Children"></a>

### *property* ShapeFinderElemental.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CombinationNumber"></a>

### *property* ShapeFinderElemental.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Comments"></a>

### *property* ShapeFinderElemental.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CoordinateSystem"></a>

### *property* ShapeFinderElemental.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CrackFrontNumber"></a>

### *property* ShapeFinderElemental.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DataModelObjectCategory"></a>

### *property* ShapeFinderElemental.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DisplayOption"></a>

### *property* ShapeFinderElemental.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DisplayTime"></a>

### *property* ShapeFinderElemental.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DpfEvaluation"></a>

### *property* ShapeFinderElemental.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Figures"></a>

### *property* ShapeFinderElemental.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GlobalIDs"></a>

### *property* ShapeFinderElemental.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GraphControlsXAxis"></a>

### *property* ShapeFinderElemental.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Identifier"></a>

### *property* ShapeFinderElemental.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Images"></a>

### *property* ShapeFinderElemental.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.InternalObject"></a>

### *property* ShapeFinderElemental.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.IsSolved"></a>

### *property* ShapeFinderElemental.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ItemType"></a>

### *property* ShapeFinderElemental.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.IterationNumber"></a>

### *property* ShapeFinderElemental.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStep"></a>

### *property* ShapeFinderElemental.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShapeFinderElemental.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShapeFinderElemental.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShapeFinderElemental.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShapeFinderElemental.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepNumber"></a>

### *property* ShapeFinderElemental.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Location"></a>

### *property* ShapeFinderElemental.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Maximum"></a>

### *property* ShapeFinderElemental.Maximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MaximumOccursOn"></a>

### *property* ShapeFinderElemental.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MaximumOfMaximumOverTime"></a>

### *property* ShapeFinderElemental.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MaximumOfMinimumOverTime"></a>

### *property* ShapeFinderElemental.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Minimum"></a>

### *property* ShapeFinderElemental.Minimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MinimumOccursOn"></a>

### *property* ShapeFinderElemental.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MinimumOfMaximumOverTime"></a>

### *property* ShapeFinderElemental.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MinimumOfMinimumOverTime"></a>

### *property* ShapeFinderElemental.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.NamedSelections"></a>

### *property* ShapeFinderElemental.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Path"></a>

### *property* ShapeFinderElemental.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.PlotData"></a>

### *property* ShapeFinderElemental.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Properties"></a>

### *property* ShapeFinderElemental.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.RPMSelection"></a>

### *property* ShapeFinderElemental.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ScopingMethod"></a>

### *property* ShapeFinderElemental.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.SetNumber"></a>

### *property* ShapeFinderElemental.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.SolutionCombinationDriver"></a>

### *property* ShapeFinderElemental.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.SolverComponentIDs"></a>

### *property* ShapeFinderElemental.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Substep"></a>

### *property* ShapeFinderElemental.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Suppressed"></a>

### *property* ShapeFinderElemental.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Surface"></a>

### *property* ShapeFinderElemental.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.SurfaceCoating"></a>

### *property* ShapeFinderElemental.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Time"></a>

### *property* ShapeFinderElemental.Time *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.TimeForMaximumOfMaximumValues"></a>

### *property* ShapeFinderElemental.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.TimeForMaximumOfMinimumValues"></a>

### *property* ShapeFinderElemental.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.TimeForMinimumOfMaximumValues"></a>

### *property* ShapeFinderElemental.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.TimeForMinimumOfMinimumValues"></a>

### *property* ShapeFinderElemental.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Total"></a>

### *property* ShapeFinderElemental.Total *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.VisibleProperties"></a>

### *property* ShapeFinderElemental.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShapeFinderElemental.Activate"></a>

### ShapeFinderElemental.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddAlert"></a>

### ShapeFinderElemental.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddComment"></a>

### ShapeFinderElemental.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddConvergence"></a>

### ShapeFinderElemental.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddFigure"></a>

### ShapeFinderElemental.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddImage"></a>

### ShapeFinderElemental.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ClearGeneratedData"></a>

### ShapeFinderElemental.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CopyTo"></a>

### ShapeFinderElemental.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CreateParameter"></a>

### ShapeFinderElemental.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CreateResultsAtAllSets"></a>

### ShapeFinderElemental.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Delete"></a>

### ShapeFinderElemental.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Duplicate"></a>

### ShapeFinderElemental.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DuplicateWithoutResults"></a>

### ShapeFinderElemental.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.EvaluateAllResults"></a>

### ShapeFinderElemental.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ExportAnimation"></a>

### ShapeFinderElemental.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ExportToTextFile"></a>

### ShapeFinderElemental.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.FetchRemoteResults"></a>

### ShapeFinderElemental.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GetChildren"></a>

### ShapeFinderElemental.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GetParameter"></a>

### ShapeFinderElemental.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GroupAllSimilarChildren"></a>

### ShapeFinderElemental.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GroupSimilarObjects"></a>

### ShapeFinderElemental.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.PromoteToNamedSelection"></a>

### ShapeFinderElemental.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.PropertyByAPIName"></a>

### ShapeFinderElemental.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.PropertyByName"></a>

### ShapeFinderElemental.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.RemoveParameter"></a>

### ShapeFinderElemental.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.RenameBasedOnDefinition"></a>

### ShapeFinderElemental.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.RetrieveResult"></a>

### ShapeFinderElemental.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

