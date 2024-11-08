# `MaximumBendingStress`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults.MaximumBendingStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamToolResults.MaximumBendingStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MaximumBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MaximumBendingStress.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#MaximumBendingStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#MaximumBendingStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#MaximumBendingStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#MaximumBendingStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MaximumBendingStress.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MaximumBendingStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#MaximumBendingStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MaximumBendingStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#MaximumBendingStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#MaximumBendingStress.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MaximumBendingStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#MaximumBendingStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MaximumBendingStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#MaximumBendingStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#MaximumBendingStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#MaximumBendingStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#MaximumBendingStress.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MaximumBendingStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MaximumBendingStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaximumBendingStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MaximumBendingStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MaximumBendingStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MaximumBendingStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MaximumBendingStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MaximumBendingStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#MaximumBendingStress.Average)                                                     | Gets the Average.                                                        |
| [`BeamToolStressResultType`](#MaximumBendingStress.BeamToolStressResultType)                   | Gets or sets the BeamToolStressResultType.                               |
| [`By`](#MaximumBendingStress.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#MaximumBendingStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#MaximumBendingStress.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#MaximumBendingStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#MaximumBendingStress.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#MaximumBendingStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#MaximumBendingStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#MaximumBendingStress.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#MaximumBendingStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#MaximumBendingStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#MaximumBendingStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#MaximumBendingStress.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#MaximumBendingStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#MaximumBendingStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#MaximumBendingStress.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#MaximumBendingStress.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#MaximumBendingStress.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#MaximumBendingStress.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#MaximumBendingStress.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#MaximumBendingStress.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#MaximumBendingStress.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MaximumBendingStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#MaximumBendingStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#MaximumBendingStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#MaximumBendingStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#MaximumBendingStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#MaximumBendingStress.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#MaximumBendingStress.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#MaximumBendingStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#MaximumBendingStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#MaximumBendingStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#MaximumBendingStress.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#MaximumBendingStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#MaximumBendingStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#MaximumBendingStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#MaximumBendingStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#MaximumBendingStress.Path)                                                           | Path property.                                                           |
| [`PlotData`](#MaximumBendingStress.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#MaximumBendingStress.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#MaximumBendingStress.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#MaximumBendingStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#MaximumBendingStress.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#MaximumBendingStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#MaximumBendingStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#MaximumBendingStress.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#MaximumBendingStress.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#MaximumBendingStress.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#MaximumBendingStress.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#MaximumBendingStress.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#MaximumBendingStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#MaximumBendingStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#MaximumBendingStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#MaximumBendingStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#MaximumBendingStress.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#MaximumBendingStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="MaximumBendingStress.Average"></a>

### *property* MaximumBendingStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.BeamToolStressResultType"></a>

### *property* MaximumBendingStress.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.By"></a>

### *property* MaximumBendingStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.CalculateTimeHistory"></a>

### *property* MaximumBendingStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Children"></a>

### *property* MaximumBendingStress.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.CombinationNumber"></a>

### *property* MaximumBendingStress.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Comments"></a>

### *property* MaximumBendingStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.CoordinateSystem"></a>

### *property* MaximumBendingStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.CrackFrontNumber"></a>

### *property* MaximumBendingStress.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.DataModelObjectCategory"></a>

### *property* MaximumBendingStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.DisplayOption"></a>

### *property* MaximumBendingStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.DisplayTime"></a>

### *property* MaximumBendingStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.DpfEvaluation"></a>

### *property* MaximumBendingStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Figures"></a>

### *property* MaximumBendingStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.GlobalIDs"></a>

### *property* MaximumBendingStress.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.GraphControlsXAxis"></a>

### *property* MaximumBendingStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Identifier"></a>

### *property* MaximumBendingStress.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Images"></a>

### *property* MaximumBendingStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.InternalObject"></a>

### *property* MaximumBendingStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.IsSolved"></a>

### *property* MaximumBendingStress.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.ItemType"></a>

### *property* MaximumBendingStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.IterationNumber"></a>

### *property* MaximumBendingStress.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.LoadStep"></a>

### *property* MaximumBendingStress.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* MaximumBendingStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* MaximumBendingStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* MaximumBendingStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* MaximumBendingStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.LoadStepNumber"></a>

### *property* MaximumBendingStress.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Location"></a>

### *property* MaximumBendingStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Maximum"></a>

### *property* MaximumBendingStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.MaximumOccursOn"></a>

### *property* MaximumBendingStress.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.MaximumOfMaximumOverTime"></a>

### *property* MaximumBendingStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.MaximumOfMinimumOverTime"></a>

### *property* MaximumBendingStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Minimum"></a>

### *property* MaximumBendingStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.MinimumOccursOn"></a>

### *property* MaximumBendingStress.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.MinimumOfMaximumOverTime"></a>

### *property* MaximumBendingStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.MinimumOfMinimumOverTime"></a>

### *property* MaximumBendingStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.NamedSelections"></a>

### *property* MaximumBendingStress.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Path"></a>

### *property* MaximumBendingStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.PlotData"></a>

### *property* MaximumBendingStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Properties"></a>

### *property* MaximumBendingStress.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.RPMSelection"></a>

### *property* MaximumBendingStress.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.ScopingMethod"></a>

### *property* MaximumBendingStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.SetNumber"></a>

### *property* MaximumBendingStress.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.SolutionCombinationDriver"></a>

### *property* MaximumBendingStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.SolverComponentIDs"></a>

### *property* MaximumBendingStress.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Substep"></a>

### *property* MaximumBendingStress.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Suppressed"></a>

### *property* MaximumBendingStress.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Surface"></a>

### *property* MaximumBendingStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.SurfaceCoating"></a>

### *property* MaximumBendingStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Time"></a>

### *property* MaximumBendingStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.TimeForMaximumOfMaximumValues"></a>

### *property* MaximumBendingStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.TimeForMaximumOfMinimumValues"></a>

### *property* MaximumBendingStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.TimeForMinimumOfMaximumValues"></a>

### *property* MaximumBendingStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.TimeForMinimumOfMinimumValues"></a>

### *property* MaximumBendingStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Total"></a>

### *property* MaximumBendingStress.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.VisibleProperties"></a>

### *property* MaximumBendingStress.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaximumBendingStress.Activate"></a>

### MaximumBendingStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.AddAlert"></a>

### MaximumBendingStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.AddComment"></a>

### MaximumBendingStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.AddConvergence"></a>

### MaximumBendingStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.AddFigure"></a>

### MaximumBendingStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.AddImage"></a>

### MaximumBendingStress.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.ClearGeneratedData"></a>

### MaximumBendingStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.CopyTo"></a>

### MaximumBendingStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.CreateParameter"></a>

### MaximumBendingStress.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.CreateResultsAtAllSets"></a>

### MaximumBendingStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Delete"></a>

### MaximumBendingStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.Duplicate"></a>

### MaximumBendingStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.DuplicateWithoutResults"></a>

### MaximumBendingStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.EvaluateAllResults"></a>

### MaximumBendingStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.ExportAnimation"></a>

### MaximumBendingStress.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.ExportToTextFile"></a>

### MaximumBendingStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.FetchRemoteResults"></a>

### MaximumBendingStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.GetChildren"></a>

### MaximumBendingStress.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.GetParameter"></a>

### MaximumBendingStress.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.GroupAllSimilarChildren"></a>

### MaximumBendingStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.GroupSimilarObjects"></a>

### MaximumBendingStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.PromoteToNamedSelection"></a>

### MaximumBendingStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.PropertyByAPIName"></a>

### MaximumBendingStress.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.PropertyByName"></a>

### MaximumBendingStress.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.RemoveParameter"></a>

### MaximumBendingStress.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumBendingStress.RenameBasedOnDefinition"></a>

### MaximumBendingStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

