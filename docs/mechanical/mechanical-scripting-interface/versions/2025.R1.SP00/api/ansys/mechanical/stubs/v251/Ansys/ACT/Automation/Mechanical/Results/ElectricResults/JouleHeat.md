# `JouleHeat`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.JouleHeat"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectricResults.JouleHeat

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a JouleHeat.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#JouleHeat.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#JouleHeat.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#JouleHeat.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#JouleHeat.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#JouleHeat.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#JouleHeat.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#JouleHeat.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#JouleHeat.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#JouleHeat.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#JouleHeat.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#JouleHeat.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#JouleHeat.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#JouleHeat.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#JouleHeat.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#JouleHeat.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#JouleHeat.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#JouleHeat.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#JouleHeat.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#JouleHeat.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#JouleHeat.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#JouleHeat.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#JouleHeat.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#JouleHeat.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#JouleHeat.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#JouleHeat.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#JouleHeat.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#JouleHeat.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#JouleHeat.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#JouleHeat.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#JouleHeat.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#JouleHeat.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#JouleHeat.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#JouleHeat.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#JouleHeat.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#JouleHeat.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#JouleHeat.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#JouleHeat.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#JouleHeat.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#JouleHeat.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#JouleHeat.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`ElectricResultType`](#JouleHeat.ElectricResultType)                               | Gets or sets the ElectricResultType.                                     |
| [`Figures`](#JouleHeat.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#JouleHeat.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#JouleHeat.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#JouleHeat.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#JouleHeat.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#JouleHeat.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#JouleHeat.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#JouleHeat.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#JouleHeat.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#JouleHeat.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#JouleHeat.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#JouleHeat.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#JouleHeat.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#JouleHeat.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#JouleHeat.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#JouleHeat.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#JouleHeat.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#JouleHeat.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#JouleHeat.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#JouleHeat.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#JouleHeat.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#JouleHeat.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#JouleHeat.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#JouleHeat.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#JouleHeat.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#JouleHeat.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#JouleHeat.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#JouleHeat.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#JouleHeat.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#JouleHeat.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#JouleHeat.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#JouleHeat.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#JouleHeat.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#JouleHeat.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#JouleHeat.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#JouleHeat.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#JouleHeat.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#JouleHeat.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#JouleHeat.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#JouleHeat.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#JouleHeat.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#JouleHeat.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#JouleHeat.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#JouleHeat.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#JouleHeat.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#JouleHeat.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#JouleHeat.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#JouleHeat.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="JouleHeat.Amplitude"></a>

### *property* JouleHeat.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Average"></a>

### *property* JouleHeat.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.AverageAcrossBodies"></a>

### *property* JouleHeat.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.By"></a>

### *property* JouleHeat.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.CalculateTimeHistory"></a>

### *property* JouleHeat.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Children"></a>

### *property* JouleHeat.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.CombinationNumber"></a>

### *property* JouleHeat.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Comments"></a>

### *property* JouleHeat.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.CoordinateSystem"></a>

### *property* JouleHeat.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.CrackFrontNumber"></a>

### *property* JouleHeat.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.DataModelObjectCategory"></a>

### *property* JouleHeat.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.DisplayOption"></a>

### *property* JouleHeat.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.DisplayTime"></a>

### *property* JouleHeat.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.DpfEvaluation"></a>

### *property* JouleHeat.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.ElectricResultType"></a>

### *property* JouleHeat.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Figures"></a>

### *property* JouleHeat.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Frequency"></a>

### *property* JouleHeat.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.GlobalIDs"></a>

### *property* JouleHeat.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.GraphControlsXAxis"></a>

### *property* JouleHeat.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Identifier"></a>

### *property* JouleHeat.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Images"></a>

### *property* JouleHeat.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.InternalObject"></a>

### *property* JouleHeat.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.IsSolved"></a>

### *property* JouleHeat.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.ItemType"></a>

### *property* JouleHeat.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.IterationNumber"></a>

### *property* JouleHeat.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.LoadStep"></a>

### *property* JouleHeat.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.LoadStepForMaximumOfMaximumValues"></a>

### *property* JouleHeat.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.LoadStepForMaximumOfMinimumValues"></a>

### *property* JouleHeat.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.LoadStepForMinimumOfMaximumValues"></a>

### *property* JouleHeat.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.LoadStepForMinimumOfMinimumValues"></a>

### *property* JouleHeat.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.LoadStepNumber"></a>

### *property* JouleHeat.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Location"></a>

### *property* JouleHeat.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Maximum"></a>

### *property* JouleHeat.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.MaximumOccursOn"></a>

### *property* JouleHeat.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.MaximumOfMaximumOverTime"></a>

### *property* JouleHeat.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.MaximumOfMinimumOverTime"></a>

### *property* JouleHeat.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Minimum"></a>

### *property* JouleHeat.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.MinimumOccursOn"></a>

### *property* JouleHeat.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.MinimumOfMaximumOverTime"></a>

### *property* JouleHeat.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.MinimumOfMinimumOverTime"></a>

### *property* JouleHeat.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.NamedSelections"></a>

### *property* JouleHeat.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Path"></a>

### *property* JouleHeat.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.PhaseIncrement"></a>

### *property* JouleHeat.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.PlotData"></a>

### *property* JouleHeat.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Properties"></a>

### *property* JouleHeat.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.RPMSelection"></a>

### *property* JouleHeat.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.ReportedFrequency"></a>

### *property* JouleHeat.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.ScopingMethod"></a>

### *property* JouleHeat.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.SetNumber"></a>

### *property* JouleHeat.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.SolutionCombinationDriver"></a>

### *property* JouleHeat.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.SolverComponentIDs"></a>

### *property* JouleHeat.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Substep"></a>

### *property* JouleHeat.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Suppressed"></a>

### *property* JouleHeat.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Surface"></a>

### *property* JouleHeat.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.SurfaceCoating"></a>

### *property* JouleHeat.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.SweepingPhase"></a>

### *property* JouleHeat.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Time"></a>

### *property* JouleHeat.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.TimeForMaximumOfMaximumValues"></a>

### *property* JouleHeat.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.TimeForMaximumOfMinimumValues"></a>

### *property* JouleHeat.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.TimeForMinimumOfMaximumValues"></a>

### *property* JouleHeat.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.TimeForMinimumOfMinimumValues"></a>

### *property* JouleHeat.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Total"></a>

### *property* JouleHeat.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.VisibleProperties"></a>

### *property* JouleHeat.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="JouleHeat.Activate"></a>

### JouleHeat.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.AddAlert"></a>

### JouleHeat.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.AddComment"></a>

### JouleHeat.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.AddConvergence"></a>

### JouleHeat.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.AddFigure"></a>

### JouleHeat.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.AddImage"></a>

### JouleHeat.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.ClearGeneratedData"></a>

### JouleHeat.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.CopyTo"></a>

### JouleHeat.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.CreateParameter"></a>

### JouleHeat.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.CreateResultsAtAllSets"></a>

### JouleHeat.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Delete"></a>

### JouleHeat.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.Duplicate"></a>

### JouleHeat.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.DuplicateWithoutResults"></a>

### JouleHeat.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.EvaluateAllResults"></a>

### JouleHeat.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.ExportAnimation"></a>

### JouleHeat.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.ExportToTextFile"></a>

### JouleHeat.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.FetchRemoteResults"></a>

### JouleHeat.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.GetChildren"></a>

### JouleHeat.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.GetParameter"></a>

### JouleHeat.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.GroupAllSimilarChildren"></a>

### JouleHeat.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.GroupSimilarObjects"></a>

### JouleHeat.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.PromoteToNamedSelection"></a>

### JouleHeat.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.PropertyByAPIName"></a>

### JouleHeat.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.PropertyByName"></a>

### JouleHeat.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.RemoveParameter"></a>

### JouleHeat.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="JouleHeat.RenameBasedOnDefinition"></a>

### JouleHeat.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

