# `TotalCurrentDensity`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalCurrentDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalCurrentDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalCurrentDensity.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#TotalCurrentDensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#TotalCurrentDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#TotalCurrentDensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#TotalCurrentDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalCurrentDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalCurrentDensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalCurrentDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalCurrentDensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#TotalCurrentDensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#TotalCurrentDensity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalCurrentDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#TotalCurrentDensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TotalCurrentDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalCurrentDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#TotalCurrentDensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#TotalCurrentDensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#TotalCurrentDensity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalCurrentDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalCurrentDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalCurrentDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#TotalCurrentDensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#TotalCurrentDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalCurrentDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalCurrentDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalCurrentDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#TotalCurrentDensity.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#TotalCurrentDensity.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#TotalCurrentDensity.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#TotalCurrentDensity.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#TotalCurrentDensity.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#TotalCurrentDensity.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#TotalCurrentDensity.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#TotalCurrentDensity.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#TotalCurrentDensity.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#TotalCurrentDensity.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#TotalCurrentDensity.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#TotalCurrentDensity.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#TotalCurrentDensity.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#TotalCurrentDensity.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`ElectricResultType`](#TotalCurrentDensity.ElectricResultType)                               | Gets or sets the ElectricResultType.                                     |
| [`Figures`](#TotalCurrentDensity.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#TotalCurrentDensity.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#TotalCurrentDensity.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#TotalCurrentDensity.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#TotalCurrentDensity.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#TotalCurrentDensity.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#TotalCurrentDensity.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#TotalCurrentDensity.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#TotalCurrentDensity.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#TotalCurrentDensity.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#TotalCurrentDensity.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#TotalCurrentDensity.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#TotalCurrentDensity.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#TotalCurrentDensity.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#TotalCurrentDensity.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#TotalCurrentDensity.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#TotalCurrentDensity.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#TotalCurrentDensity.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#TotalCurrentDensity.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#TotalCurrentDensity.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#TotalCurrentDensity.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#TotalCurrentDensity.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#TotalCurrentDensity.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#TotalCurrentDensity.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#TotalCurrentDensity.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#TotalCurrentDensity.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#TotalCurrentDensity.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#TotalCurrentDensity.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#TotalCurrentDensity.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#TotalCurrentDensity.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#TotalCurrentDensity.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#TotalCurrentDensity.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#TotalCurrentDensity.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#TotalCurrentDensity.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#TotalCurrentDensity.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#TotalCurrentDensity.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#TotalCurrentDensity.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#TotalCurrentDensity.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#TotalCurrentDensity.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#TotalCurrentDensity.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#TotalCurrentDensity.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#TotalCurrentDensity.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#TotalCurrentDensity.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#TotalCurrentDensity.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#TotalCurrentDensity.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#TotalCurrentDensity.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#TotalCurrentDensity.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#TotalCurrentDensity.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="TotalCurrentDensity.Amplitude"></a>

### *property* TotalCurrentDensity.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Average"></a>

### *property* TotalCurrentDensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.AverageAcrossBodies"></a>

### *property* TotalCurrentDensity.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.By"></a>

### *property* TotalCurrentDensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.CalculateTimeHistory"></a>

### *property* TotalCurrentDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Children"></a>

### *property* TotalCurrentDensity.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.CombinationNumber"></a>

### *property* TotalCurrentDensity.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Comments"></a>

### *property* TotalCurrentDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.CoordinateSystem"></a>

### *property* TotalCurrentDensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.CrackFrontNumber"></a>

### *property* TotalCurrentDensity.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.DataModelObjectCategory"></a>

### *property* TotalCurrentDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.DisplayOption"></a>

### *property* TotalCurrentDensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.DisplayTime"></a>

### *property* TotalCurrentDensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.DpfEvaluation"></a>

### *property* TotalCurrentDensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.ElectricResultType"></a>

### *property* TotalCurrentDensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Figures"></a>

### *property* TotalCurrentDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Frequency"></a>

### *property* TotalCurrentDensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.GlobalIDs"></a>

### *property* TotalCurrentDensity.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.GraphControlsXAxis"></a>

### *property* TotalCurrentDensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Identifier"></a>

### *property* TotalCurrentDensity.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Images"></a>

### *property* TotalCurrentDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.InternalObject"></a>

### *property* TotalCurrentDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.IsSolved"></a>

### *property* TotalCurrentDensity.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.ItemType"></a>

### *property* TotalCurrentDensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.IterationNumber"></a>

### *property* TotalCurrentDensity.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.LoadStep"></a>

### *property* TotalCurrentDensity.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalCurrentDensity.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalCurrentDensity.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalCurrentDensity.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalCurrentDensity.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.LoadStepNumber"></a>

### *property* TotalCurrentDensity.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Location"></a>

### *property* TotalCurrentDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Maximum"></a>

### *property* TotalCurrentDensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.MaximumOccursOn"></a>

### *property* TotalCurrentDensity.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.MaximumOfMaximumOverTime"></a>

### *property* TotalCurrentDensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.MaximumOfMinimumOverTime"></a>

### *property* TotalCurrentDensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Minimum"></a>

### *property* TotalCurrentDensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.MinimumOccursOn"></a>

### *property* TotalCurrentDensity.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.MinimumOfMaximumOverTime"></a>

### *property* TotalCurrentDensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.MinimumOfMinimumOverTime"></a>

### *property* TotalCurrentDensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.NamedSelections"></a>

### *property* TotalCurrentDensity.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Path"></a>

### *property* TotalCurrentDensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.PhaseIncrement"></a>

### *property* TotalCurrentDensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.PlotData"></a>

### *property* TotalCurrentDensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Properties"></a>

### *property* TotalCurrentDensity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.RPMSelection"></a>

### *property* TotalCurrentDensity.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.ReportedFrequency"></a>

### *property* TotalCurrentDensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.ScopingMethod"></a>

### *property* TotalCurrentDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.SetNumber"></a>

### *property* TotalCurrentDensity.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.SolutionCombinationDriver"></a>

### *property* TotalCurrentDensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.SolverComponentIDs"></a>

### *property* TotalCurrentDensity.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Substep"></a>

### *property* TotalCurrentDensity.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Suppressed"></a>

### *property* TotalCurrentDensity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Surface"></a>

### *property* TotalCurrentDensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.SurfaceCoating"></a>

### *property* TotalCurrentDensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.SweepingPhase"></a>

### *property* TotalCurrentDensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Time"></a>

### *property* TotalCurrentDensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.TimeForMaximumOfMaximumValues"></a>

### *property* TotalCurrentDensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.TimeForMaximumOfMinimumValues"></a>

### *property* TotalCurrentDensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.TimeForMinimumOfMaximumValues"></a>

### *property* TotalCurrentDensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.TimeForMinimumOfMinimumValues"></a>

### *property* TotalCurrentDensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Total"></a>

### *property* TotalCurrentDensity.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.VisibleProperties"></a>

### *property* TotalCurrentDensity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalCurrentDensity.Activate"></a>

### TotalCurrentDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.AddAlert"></a>

### TotalCurrentDensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.AddComment"></a>

### TotalCurrentDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.AddConvergence"></a>

### TotalCurrentDensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.AddFigure"></a>

### TotalCurrentDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.AddImage"></a>

### TotalCurrentDensity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.ClearGeneratedData"></a>

### TotalCurrentDensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.CopyTo"></a>

### TotalCurrentDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.CreateParameter"></a>

### TotalCurrentDensity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.CreateResultsAtAllSets"></a>

### TotalCurrentDensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Delete"></a>

### TotalCurrentDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.Duplicate"></a>

### TotalCurrentDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.DuplicateWithoutResults"></a>

### TotalCurrentDensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.EvaluateAllResults"></a>

### TotalCurrentDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.ExportAnimation"></a>

### TotalCurrentDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.ExportToTextFile"></a>

### TotalCurrentDensity.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.FetchRemoteResults"></a>

### TotalCurrentDensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.GetChildren"></a>

### TotalCurrentDensity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.GetParameter"></a>

### TotalCurrentDensity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.GroupAllSimilarChildren"></a>

### TotalCurrentDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.GroupSimilarObjects"></a>

### TotalCurrentDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.PromoteToNamedSelection"></a>

### TotalCurrentDensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.PropertyByAPIName"></a>

### TotalCurrentDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.PropertyByName"></a>

### TotalCurrentDensity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.RemoveParameter"></a>

### TotalCurrentDensity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalCurrentDensity.RenameBasedOnDefinition"></a>

### TotalCurrentDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

