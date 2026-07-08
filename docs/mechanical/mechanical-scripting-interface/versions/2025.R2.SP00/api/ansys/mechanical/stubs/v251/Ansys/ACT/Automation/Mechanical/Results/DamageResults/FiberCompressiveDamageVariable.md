# `FiberCompressiveDamageVariable`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveDamageVariable"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveDamageVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FiberCompressiveDamageVariable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FiberCompressiveDamageVariable.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#FiberCompressiveDamageVariable.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#FiberCompressiveDamageVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#FiberCompressiveDamageVariable.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#FiberCompressiveDamageVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FiberCompressiveDamageVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FiberCompressiveDamageVariable.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FiberCompressiveDamageVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FiberCompressiveDamageVariable.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#FiberCompressiveDamageVariable.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#FiberCompressiveDamageVariable.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FiberCompressiveDamageVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#FiberCompressiveDamageVariable.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FiberCompressiveDamageVariable.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FiberCompressiveDamageVariable.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#FiberCompressiveDamageVariable.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#FiberCompressiveDamageVariable.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#FiberCompressiveDamageVariable.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FiberCompressiveDamageVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FiberCompressiveDamageVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FiberCompressiveDamageVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FiberCompressiveDamageVariable.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FiberCompressiveDamageVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FiberCompressiveDamageVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FiberCompressiveDamageVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FiberCompressiveDamageVariable.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#FiberCompressiveDamageVariable.Average)                                                     | Gets the Average.                                                        |
| [`By`](#FiberCompressiveDamageVariable.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#FiberCompressiveDamageVariable.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#FiberCompressiveDamageVariable.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#FiberCompressiveDamageVariable.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#FiberCompressiveDamageVariable.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#FiberCompressiveDamageVariable.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#FiberCompressiveDamageVariable.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DamageResultType`](#FiberCompressiveDamageVariable.DamageResultType)                                   | Gets the DamageResultType.                                               |
| [`DataModelObjectCategory`](#FiberCompressiveDamageVariable.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#FiberCompressiveDamageVariable.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#FiberCompressiveDamageVariable.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#FiberCompressiveDamageVariable.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#FiberCompressiveDamageVariable.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#FiberCompressiveDamageVariable.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#FiberCompressiveDamageVariable.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#FiberCompressiveDamageVariable.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#FiberCompressiveDamageVariable.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#FiberCompressiveDamageVariable.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#FiberCompressiveDamageVariable.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#FiberCompressiveDamageVariable.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#FiberCompressiveDamageVariable.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#FiberCompressiveDamageVariable.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FiberCompressiveDamageVariable.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#FiberCompressiveDamageVariable.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#FiberCompressiveDamageVariable.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#FiberCompressiveDamageVariable.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#FiberCompressiveDamageVariable.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#FiberCompressiveDamageVariable.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#FiberCompressiveDamageVariable.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#FiberCompressiveDamageVariable.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#FiberCompressiveDamageVariable.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#FiberCompressiveDamageVariable.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#FiberCompressiveDamageVariable.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#FiberCompressiveDamageVariable.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#FiberCompressiveDamageVariable.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#FiberCompressiveDamageVariable.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#FiberCompressiveDamageVariable.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#FiberCompressiveDamageVariable.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#FiberCompressiveDamageVariable.Path)                                                           | Path property.                                                           |
| [`Plies`](#FiberCompressiveDamageVariable.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#FiberCompressiveDamageVariable.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#FiberCompressiveDamageVariable.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Properties`](#FiberCompressiveDamageVariable.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#FiberCompressiveDamageVariable.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#FiberCompressiveDamageVariable.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#FiberCompressiveDamageVariable.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#FiberCompressiveDamageVariable.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#FiberCompressiveDamageVariable.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#FiberCompressiveDamageVariable.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#FiberCompressiveDamageVariable.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#FiberCompressiveDamageVariable.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#FiberCompressiveDamageVariable.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#FiberCompressiveDamageVariable.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#FiberCompressiveDamageVariable.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#FiberCompressiveDamageVariable.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#FiberCompressiveDamageVariable.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#FiberCompressiveDamageVariable.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#FiberCompressiveDamageVariable.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#FiberCompressiveDamageVariable.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="FiberCompressiveDamageVariable.Average"></a>

### *property* FiberCompressiveDamageVariable.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.By"></a>

### *property* FiberCompressiveDamageVariable.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.CalculateTimeHistory"></a>

### *property* FiberCompressiveDamageVariable.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Children"></a>

### *property* FiberCompressiveDamageVariable.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.CombinationNumber"></a>

### *property* FiberCompressiveDamageVariable.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Comments"></a>

### *property* FiberCompressiveDamageVariable.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.CoordinateSystem"></a>

### *property* FiberCompressiveDamageVariable.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.CrackFrontNumber"></a>

### *property* FiberCompressiveDamageVariable.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.DamageResultType"></a>

### *property* FiberCompressiveDamageVariable.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.DataModelObjectCategory"></a>

### *property* FiberCompressiveDamageVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.DisplayOption"></a>

### *property* FiberCompressiveDamageVariable.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.DisplayTime"></a>

### *property* FiberCompressiveDamageVariable.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.DpfEvaluation"></a>

### *property* FiberCompressiveDamageVariable.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Figures"></a>

### *property* FiberCompressiveDamageVariable.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.GlobalIDs"></a>

### *property* FiberCompressiveDamageVariable.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.GraphControlsXAxis"></a>

### *property* FiberCompressiveDamageVariable.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Identifier"></a>

### *property* FiberCompressiveDamageVariable.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Images"></a>

### *property* FiberCompressiveDamageVariable.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.InternalObject"></a>

### *property* FiberCompressiveDamageVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.IsSolved"></a>

### *property* FiberCompressiveDamageVariable.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.ItemType"></a>

### *property* FiberCompressiveDamageVariable.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.IterationNumber"></a>

### *property* FiberCompressiveDamageVariable.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.LoadStep"></a>

### *property* FiberCompressiveDamageVariable.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.LoadStepForMaximumOfMaximumValues"></a>

### *property* FiberCompressiveDamageVariable.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.LoadStepForMaximumOfMinimumValues"></a>

### *property* FiberCompressiveDamageVariable.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.LoadStepForMinimumOfMaximumValues"></a>

### *property* FiberCompressiveDamageVariable.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.LoadStepForMinimumOfMinimumValues"></a>

### *property* FiberCompressiveDamageVariable.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.LoadStepNumber"></a>

### *property* FiberCompressiveDamageVariable.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Location"></a>

### *property* FiberCompressiveDamageVariable.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Maximum"></a>

### *property* FiberCompressiveDamageVariable.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.MaximumOccursOn"></a>

### *property* FiberCompressiveDamageVariable.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.MaximumOfMaximumOverTime"></a>

### *property* FiberCompressiveDamageVariable.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.MaximumOfMinimumOverTime"></a>

### *property* FiberCompressiveDamageVariable.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Minimum"></a>

### *property* FiberCompressiveDamageVariable.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.MinimumOccursOn"></a>

### *property* FiberCompressiveDamageVariable.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.MinimumOfMaximumOverTime"></a>

### *property* FiberCompressiveDamageVariable.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.MinimumOfMinimumOverTime"></a>

### *property* FiberCompressiveDamageVariable.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Mode"></a>

### *property* FiberCompressiveDamageVariable.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.NamedSelections"></a>

### *property* FiberCompressiveDamageVariable.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Path"></a>

### *property* FiberCompressiveDamageVariable.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Plies"></a>

### *property* FiberCompressiveDamageVariable.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.PlotData"></a>

### *property* FiberCompressiveDamageVariable.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Ply"></a>

### *property* FiberCompressiveDamageVariable.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Properties"></a>

### *property* FiberCompressiveDamageVariable.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.RPMSelection"></a>

### *property* FiberCompressiveDamageVariable.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.ScopingMethod"></a>

### *property* FiberCompressiveDamageVariable.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.SetNumber"></a>

### *property* FiberCompressiveDamageVariable.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.SolutionCombinationDriver"></a>

### *property* FiberCompressiveDamageVariable.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.SolverComponentIDs"></a>

### *property* FiberCompressiveDamageVariable.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Substep"></a>

### *property* FiberCompressiveDamageVariable.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Suppressed"></a>

### *property* FiberCompressiveDamageVariable.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Surface"></a>

### *property* FiberCompressiveDamageVariable.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.SurfaceCoating"></a>

### *property* FiberCompressiveDamageVariable.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Time"></a>

### *property* FiberCompressiveDamageVariable.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.TimeForMaximumOfMaximumValues"></a>

### *property* FiberCompressiveDamageVariable.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.TimeForMaximumOfMinimumValues"></a>

### *property* FiberCompressiveDamageVariable.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.TimeForMinimumOfMaximumValues"></a>

### *property* FiberCompressiveDamageVariable.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.TimeForMinimumOfMinimumValues"></a>

### *property* FiberCompressiveDamageVariable.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Total"></a>

### *property* FiberCompressiveDamageVariable.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.VisibleProperties"></a>

### *property* FiberCompressiveDamageVariable.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FiberCompressiveDamageVariable.Activate"></a>

### FiberCompressiveDamageVariable.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.AddAlert"></a>

### FiberCompressiveDamageVariable.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.AddComment"></a>

### FiberCompressiveDamageVariable.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.AddConvergence"></a>

### FiberCompressiveDamageVariable.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.AddFigure"></a>

### FiberCompressiveDamageVariable.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.AddImage"></a>

### FiberCompressiveDamageVariable.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.ClearGeneratedData"></a>

### FiberCompressiveDamageVariable.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.CopyTo"></a>

### FiberCompressiveDamageVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.CreateParameter"></a>

### FiberCompressiveDamageVariable.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.CreateResultsAtAllSets"></a>

### FiberCompressiveDamageVariable.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Delete"></a>

### FiberCompressiveDamageVariable.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.Duplicate"></a>

### FiberCompressiveDamageVariable.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.DuplicateWithoutResults"></a>

### FiberCompressiveDamageVariable.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.EvaluateAllResults"></a>

### FiberCompressiveDamageVariable.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.ExportAnimation"></a>

### FiberCompressiveDamageVariable.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.ExportToTextFile"></a>

### FiberCompressiveDamageVariable.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.FetchRemoteResults"></a>

### FiberCompressiveDamageVariable.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.GetChildren"></a>

### FiberCompressiveDamageVariable.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.GetParameter"></a>

### FiberCompressiveDamageVariable.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.GroupAllSimilarChildren"></a>

### FiberCompressiveDamageVariable.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.GroupSimilarObjects"></a>

### FiberCompressiveDamageVariable.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.PromoteToNamedSelection"></a>

### FiberCompressiveDamageVariable.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.PropertyByAPIName"></a>

### FiberCompressiveDamageVariable.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.PropertyByName"></a>

### FiberCompressiveDamageVariable.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.RemoveParameter"></a>

### FiberCompressiveDamageVariable.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveDamageVariable.RenameBasedOnDefinition"></a>

### FiberCompressiveDamageVariable.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

