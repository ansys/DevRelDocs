# `NewtonRaphsonResidualMoment`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualMoment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualMoment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NewtonRaphsonResidualMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NewtonRaphsonResidualMoment.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#NewtonRaphsonResidualMoment.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#NewtonRaphsonResidualMoment.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#NewtonRaphsonResidualMoment.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#NewtonRaphsonResidualMoment.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NewtonRaphsonResidualMoment.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#NewtonRaphsonResidualMoment.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#NewtonRaphsonResidualMoment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NewtonRaphsonResidualMoment.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#NewtonRaphsonResidualMoment.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#NewtonRaphsonResidualMoment.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#NewtonRaphsonResidualMoment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#NewtonRaphsonResidualMoment.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#NewtonRaphsonResidualMoment.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#NewtonRaphsonResidualMoment.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#NewtonRaphsonResidualMoment.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#NewtonRaphsonResidualMoment.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#NewtonRaphsonResidualMoment.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NewtonRaphsonResidualMoment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NewtonRaphsonResidualMoment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NewtonRaphsonResidualMoment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#NewtonRaphsonResidualMoment.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#NewtonRaphsonResidualMoment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#NewtonRaphsonResidualMoment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NewtonRaphsonResidualMoment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#NewtonRaphsonResidualMoment.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#NewtonRaphsonResidualMoment.Average)                                                     | Gets the Average.                                                        |
| [`By`](#NewtonRaphsonResidualMoment.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#NewtonRaphsonResidualMoment.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#NewtonRaphsonResidualMoment.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#NewtonRaphsonResidualMoment.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#NewtonRaphsonResidualMoment.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#NewtonRaphsonResidualMoment.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#NewtonRaphsonResidualMoment.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#NewtonRaphsonResidualMoment.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#NewtonRaphsonResidualMoment.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#NewtonRaphsonResidualMoment.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#NewtonRaphsonResidualMoment.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#NewtonRaphsonResidualMoment.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#NewtonRaphsonResidualMoment.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#NewtonRaphsonResidualMoment.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#NewtonRaphsonResidualMoment.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#NewtonRaphsonResidualMoment.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#NewtonRaphsonResidualMoment.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#NewtonRaphsonResidualMoment.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#NewtonRaphsonResidualMoment.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#NewtonRaphsonResidualMoment.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#NewtonRaphsonResidualMoment.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NewtonRaphsonResidualMoment.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#NewtonRaphsonResidualMoment.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#NewtonRaphsonResidualMoment.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#NewtonRaphsonResidualMoment.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#NewtonRaphsonResidualMoment.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#NewtonRaphsonResidualMoment.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#NewtonRaphsonResidualMoment.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#NewtonRaphsonResidualMoment.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#NewtonRaphsonResidualMoment.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#NewtonRaphsonResidualMoment.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#NewtonRaphsonResidualMoment.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#NewtonRaphsonResidualMoment.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#NewtonRaphsonResidualMoment.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#NewtonRaphsonResidualMoment.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#NewtonRaphsonResidualMoment.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#NewtonRaphsonResidualMoment.Path)                                                           | Path property.                                                           |
| [`PlotData`](#NewtonRaphsonResidualMoment.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#NewtonRaphsonResidualMoment.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#NewtonRaphsonResidualMoment.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#NewtonRaphsonResidualMoment.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#NewtonRaphsonResidualMoment.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#NewtonRaphsonResidualMoment.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#NewtonRaphsonResidualMoment.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#NewtonRaphsonResidualMoment.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#NewtonRaphsonResidualMoment.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#NewtonRaphsonResidualMoment.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#NewtonRaphsonResidualMoment.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#NewtonRaphsonResidualMoment.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#NewtonRaphsonResidualMoment.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#NewtonRaphsonResidualMoment.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#NewtonRaphsonResidualMoment.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#NewtonRaphsonResidualMoment.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#NewtonRaphsonResidualMoment.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#NewtonRaphsonResidualMoment.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="NewtonRaphsonResidualMoment.Average"></a>

### *property* NewtonRaphsonResidualMoment.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.By"></a>

### *property* NewtonRaphsonResidualMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CalculateTimeHistory"></a>

### *property* NewtonRaphsonResidualMoment.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Children"></a>

### *property* NewtonRaphsonResidualMoment.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CombinationNumber"></a>

### *property* NewtonRaphsonResidualMoment.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Comments"></a>

### *property* NewtonRaphsonResidualMoment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CoordinateSystem"></a>

### *property* NewtonRaphsonResidualMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CrackFrontNumber"></a>

### *property* NewtonRaphsonResidualMoment.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DataModelObjectCategory"></a>

### *property* NewtonRaphsonResidualMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DisplayOption"></a>

### *property* NewtonRaphsonResidualMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DisplayTime"></a>

### *property* NewtonRaphsonResidualMoment.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DpfEvaluation"></a>

### *property* NewtonRaphsonResidualMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Figures"></a>

### *property* NewtonRaphsonResidualMoment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GlobalIDs"></a>

### *property* NewtonRaphsonResidualMoment.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GraphControlsXAxis"></a>

### *property* NewtonRaphsonResidualMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Identifier"></a>

### *property* NewtonRaphsonResidualMoment.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Images"></a>

### *property* NewtonRaphsonResidualMoment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.InternalObject"></a>

### *property* NewtonRaphsonResidualMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.IsSolved"></a>

### *property* NewtonRaphsonResidualMoment.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ItemType"></a>

### *property* NewtonRaphsonResidualMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.IterationNumber"></a>

### *property* NewtonRaphsonResidualMoment.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStep"></a>

### *property* NewtonRaphsonResidualMoment.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.LoadStepNumber"></a>

### *property* NewtonRaphsonResidualMoment.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Location"></a>

### *property* NewtonRaphsonResidualMoment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Maximum"></a>

### *property* NewtonRaphsonResidualMoment.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MaximumOccursOn"></a>

### *property* NewtonRaphsonResidualMoment.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MaximumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualMoment.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MaximumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualMoment.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Minimum"></a>

### *property* NewtonRaphsonResidualMoment.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MinimumOccursOn"></a>

### *property* NewtonRaphsonResidualMoment.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MinimumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualMoment.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.MinimumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualMoment.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.NamedSelections"></a>

### *property* NewtonRaphsonResidualMoment.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Path"></a>

### *property* NewtonRaphsonResidualMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PlotData"></a>

### *property* NewtonRaphsonResidualMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Properties"></a>

### *property* NewtonRaphsonResidualMoment.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RPMSelection"></a>

### *property* NewtonRaphsonResidualMoment.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ScopingMethod"></a>

### *property* NewtonRaphsonResidualMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SetNumber"></a>

### *property* NewtonRaphsonResidualMoment.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SolutionCombinationDriver"></a>

### *property* NewtonRaphsonResidualMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SolverComponentIDs"></a>

### *property* NewtonRaphsonResidualMoment.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Substep"></a>

### *property* NewtonRaphsonResidualMoment.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Suppressed"></a>

### *property* NewtonRaphsonResidualMoment.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Surface"></a>

### *property* NewtonRaphsonResidualMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.SurfaceCoating"></a>

### *property* NewtonRaphsonResidualMoment.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Time"></a>

### *property* NewtonRaphsonResidualMoment.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TimeForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualMoment.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TimeForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualMoment.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TimeForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualMoment.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.TimeForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualMoment.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Total"></a>

### *property* NewtonRaphsonResidualMoment.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.VisibleProperties"></a>

### *property* NewtonRaphsonResidualMoment.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NewtonRaphsonResidualMoment.Activate"></a>

### NewtonRaphsonResidualMoment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddAlert"></a>

### NewtonRaphsonResidualMoment.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddComment"></a>

### NewtonRaphsonResidualMoment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddConvergence"></a>

### NewtonRaphsonResidualMoment.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddFigure"></a>

### NewtonRaphsonResidualMoment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.AddImage"></a>

### NewtonRaphsonResidualMoment.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ClearGeneratedData"></a>

### NewtonRaphsonResidualMoment.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CopyTo"></a>

### NewtonRaphsonResidualMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CreateParameter"></a>

### NewtonRaphsonResidualMoment.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.CreateResultsAtAllSets"></a>

### NewtonRaphsonResidualMoment.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Delete"></a>

### NewtonRaphsonResidualMoment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.Duplicate"></a>

### NewtonRaphsonResidualMoment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.DuplicateWithoutResults"></a>

### NewtonRaphsonResidualMoment.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.EvaluateAllResults"></a>

### NewtonRaphsonResidualMoment.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ExportAnimation"></a>

### NewtonRaphsonResidualMoment.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.ExportToTextFile"></a>

### NewtonRaphsonResidualMoment.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.FetchRemoteResults"></a>

### NewtonRaphsonResidualMoment.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetChildren"></a>

### NewtonRaphsonResidualMoment.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GetParameter"></a>

### NewtonRaphsonResidualMoment.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GroupAllSimilarChildren"></a>

### NewtonRaphsonResidualMoment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.GroupSimilarObjects"></a>

### NewtonRaphsonResidualMoment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PromoteToNamedSelection"></a>

### NewtonRaphsonResidualMoment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PropertyByAPIName"></a>

### NewtonRaphsonResidualMoment.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.PropertyByName"></a>

### NewtonRaphsonResidualMoment.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RemoveParameter"></a>

### NewtonRaphsonResidualMoment.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualMoment.RenameBasedOnDefinition"></a>

### NewtonRaphsonResidualMoment.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

