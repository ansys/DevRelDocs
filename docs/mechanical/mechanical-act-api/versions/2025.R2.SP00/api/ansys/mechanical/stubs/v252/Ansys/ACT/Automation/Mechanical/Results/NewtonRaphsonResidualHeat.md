# `NewtonRaphsonResidualHeat`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualHeat"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualHeat

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NewtonRaphsonResidualHeat.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#NewtonRaphsonResidualHeat.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#NewtonRaphsonResidualHeat.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#NewtonRaphsonResidualHeat.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#NewtonRaphsonResidualHeat.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#NewtonRaphsonResidualHeat.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#NewtonRaphsonResidualHeat.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#NewtonRaphsonResidualHeat.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#NewtonRaphsonResidualHeat.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#NewtonRaphsonResidualHeat.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#NewtonRaphsonResidualHeat.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#NewtonRaphsonResidualHeat.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#NewtonRaphsonResidualHeat.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#NewtonRaphsonResidualHeat.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#NewtonRaphsonResidualHeat.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#NewtonRaphsonResidualHeat.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#NewtonRaphsonResidualHeat.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#NewtonRaphsonResidualHeat.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#NewtonRaphsonResidualHeat.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#NewtonRaphsonResidualHeat.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#NewtonRaphsonResidualHeat.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#NewtonRaphsonResidualHeat.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#NewtonRaphsonResidualHeat.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#NewtonRaphsonResidualHeat.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#NewtonRaphsonResidualHeat.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#NewtonRaphsonResidualHeat.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#NewtonRaphsonResidualHeat.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#NewtonRaphsonResidualHeat.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#NewtonRaphsonResidualHeat.Average)                                                     | Gets the Average.                                                        |
| [`By`](#NewtonRaphsonResidualHeat.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#NewtonRaphsonResidualHeat.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#NewtonRaphsonResidualHeat.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#NewtonRaphsonResidualHeat.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#NewtonRaphsonResidualHeat.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#NewtonRaphsonResidualHeat.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#NewtonRaphsonResidualHeat.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#NewtonRaphsonResidualHeat.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#NewtonRaphsonResidualHeat.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#NewtonRaphsonResidualHeat.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#NewtonRaphsonResidualHeat.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#NewtonRaphsonResidualHeat.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#NewtonRaphsonResidualHeat.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#NewtonRaphsonResidualHeat.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#NewtonRaphsonResidualHeat.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#NewtonRaphsonResidualHeat.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#NewtonRaphsonResidualHeat.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#NewtonRaphsonResidualHeat.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#NewtonRaphsonResidualHeat.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#NewtonRaphsonResidualHeat.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#NewtonRaphsonResidualHeat.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NewtonRaphsonResidualHeat.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#NewtonRaphsonResidualHeat.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#NewtonRaphsonResidualHeat.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#NewtonRaphsonResidualHeat.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#NewtonRaphsonResidualHeat.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#NewtonRaphsonResidualHeat.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#NewtonRaphsonResidualHeat.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#NewtonRaphsonResidualHeat.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#NewtonRaphsonResidualHeat.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#NewtonRaphsonResidualHeat.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#NewtonRaphsonResidualHeat.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#NewtonRaphsonResidualHeat.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#NewtonRaphsonResidualHeat.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#NewtonRaphsonResidualHeat.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#NewtonRaphsonResidualHeat.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#NewtonRaphsonResidualHeat.Path)                                                           | Path property.                                                           |
| [`PlotData`](#NewtonRaphsonResidualHeat.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#NewtonRaphsonResidualHeat.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#NewtonRaphsonResidualHeat.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#NewtonRaphsonResidualHeat.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#NewtonRaphsonResidualHeat.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#NewtonRaphsonResidualHeat.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#NewtonRaphsonResidualHeat.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#NewtonRaphsonResidualHeat.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#NewtonRaphsonResidualHeat.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#NewtonRaphsonResidualHeat.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#NewtonRaphsonResidualHeat.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#NewtonRaphsonResidualHeat.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#NewtonRaphsonResidualHeat.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#NewtonRaphsonResidualHeat.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#NewtonRaphsonResidualHeat.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#NewtonRaphsonResidualHeat.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#NewtonRaphsonResidualHeat.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#NewtonRaphsonResidualHeat.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="NewtonRaphsonResidualHeat.Average"></a>

### *property* NewtonRaphsonResidualHeat.Average *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.By"></a>

### *property* NewtonRaphsonResidualHeat.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CalculateTimeHistory"></a>

### *property* NewtonRaphsonResidualHeat.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Children"></a>

### *property* NewtonRaphsonResidualHeat.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CombinationNumber"></a>

### *property* NewtonRaphsonResidualHeat.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Comments"></a>

### *property* NewtonRaphsonResidualHeat.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CoordinateSystem"></a>

### *property* NewtonRaphsonResidualHeat.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CrackFrontNumber"></a>

### *property* NewtonRaphsonResidualHeat.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DataModelObjectCategory"></a>

### *property* NewtonRaphsonResidualHeat.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DisplayOption"></a>

### *property* NewtonRaphsonResidualHeat.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DisplayTime"></a>

### *property* NewtonRaphsonResidualHeat.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DpfEvaluation"></a>

### *property* NewtonRaphsonResidualHeat.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Figures"></a>

### *property* NewtonRaphsonResidualHeat.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GlobalIDs"></a>

### *property* NewtonRaphsonResidualHeat.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GraphControlsXAxis"></a>

### *property* NewtonRaphsonResidualHeat.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Identifier"></a>

### *property* NewtonRaphsonResidualHeat.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Images"></a>

### *property* NewtonRaphsonResidualHeat.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.InternalObject"></a>

### *property* NewtonRaphsonResidualHeat.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.IsSolved"></a>

### *property* NewtonRaphsonResidualHeat.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ItemType"></a>

### *property* NewtonRaphsonResidualHeat.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.IterationNumber"></a>

### *property* NewtonRaphsonResidualHeat.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStep"></a>

### *property* NewtonRaphsonResidualHeat.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.LoadStepNumber"></a>

### *property* NewtonRaphsonResidualHeat.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Location"></a>

### *property* NewtonRaphsonResidualHeat.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Maximum"></a>

### *property* NewtonRaphsonResidualHeat.Maximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MaximumOccursOn"></a>

### *property* NewtonRaphsonResidualHeat.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MaximumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualHeat.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MaximumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualHeat.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Minimum"></a>

### *property* NewtonRaphsonResidualHeat.Minimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MinimumOccursOn"></a>

### *property* NewtonRaphsonResidualHeat.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MinimumOfMaximumOverTime"></a>

### *property* NewtonRaphsonResidualHeat.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.MinimumOfMinimumOverTime"></a>

### *property* NewtonRaphsonResidualHeat.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.NamedSelections"></a>

### *property* NewtonRaphsonResidualHeat.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Path"></a>

### *property* NewtonRaphsonResidualHeat.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.PlotData"></a>

### *property* NewtonRaphsonResidualHeat.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Properties"></a>

### *property* NewtonRaphsonResidualHeat.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.RPMSelection"></a>

### *property* NewtonRaphsonResidualHeat.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ScopingMethod"></a>

### *property* NewtonRaphsonResidualHeat.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.SetNumber"></a>

### *property* NewtonRaphsonResidualHeat.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.SolutionCombinationDriver"></a>

### *property* NewtonRaphsonResidualHeat.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.SolverComponentIDs"></a>

### *property* NewtonRaphsonResidualHeat.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Substep"></a>

### *property* NewtonRaphsonResidualHeat.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Suppressed"></a>

### *property* NewtonRaphsonResidualHeat.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Surface"></a>

### *property* NewtonRaphsonResidualHeat.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.SurfaceCoating"></a>

### *property* NewtonRaphsonResidualHeat.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Time"></a>

### *property* NewtonRaphsonResidualHeat.Time *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.TimeForMaximumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualHeat.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.TimeForMaximumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualHeat.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.TimeForMinimumOfMaximumValues"></a>

### *property* NewtonRaphsonResidualHeat.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.TimeForMinimumOfMinimumValues"></a>

### *property* NewtonRaphsonResidualHeat.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Total"></a>

### *property* NewtonRaphsonResidualHeat.Total *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.VisibleProperties"></a>

### *property* NewtonRaphsonResidualHeat.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NewtonRaphsonResidualHeat.Activate"></a>

### NewtonRaphsonResidualHeat.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddAlert"></a>

### NewtonRaphsonResidualHeat.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddComment"></a>

### NewtonRaphsonResidualHeat.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddConvergence"></a>

### NewtonRaphsonResidualHeat.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddFigure"></a>

### NewtonRaphsonResidualHeat.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.AddImage"></a>

### NewtonRaphsonResidualHeat.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ClearGeneratedData"></a>

### NewtonRaphsonResidualHeat.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CopyTo"></a>

### NewtonRaphsonResidualHeat.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CreateParameter"></a>

### NewtonRaphsonResidualHeat.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.CreateResultsAtAllSets"></a>

### NewtonRaphsonResidualHeat.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Delete"></a>

### NewtonRaphsonResidualHeat.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.Duplicate"></a>

### NewtonRaphsonResidualHeat.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.DuplicateWithoutResults"></a>

### NewtonRaphsonResidualHeat.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.EvaluateAllResults"></a>

### NewtonRaphsonResidualHeat.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ExportAnimation"></a>

### NewtonRaphsonResidualHeat.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.ExportToTextFile"></a>

### NewtonRaphsonResidualHeat.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.FetchRemoteResults"></a>

### NewtonRaphsonResidualHeat.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GetChildren"></a>

### NewtonRaphsonResidualHeat.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GetParameter"></a>

### NewtonRaphsonResidualHeat.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GroupAllSimilarChildren"></a>

### NewtonRaphsonResidualHeat.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.GroupSimilarObjects"></a>

### NewtonRaphsonResidualHeat.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.PromoteToNamedSelection"></a>

### NewtonRaphsonResidualHeat.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.PropertyByAPIName"></a>

### NewtonRaphsonResidualHeat.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.PropertyByName"></a>

### NewtonRaphsonResidualHeat.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.RemoveParameter"></a>

### NewtonRaphsonResidualHeat.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.RenameBasedOnDefinition"></a>

### NewtonRaphsonResidualHeat.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NewtonRaphsonResidualHeat.RetrieveResult"></a>

### NewtonRaphsonResidualHeat.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

