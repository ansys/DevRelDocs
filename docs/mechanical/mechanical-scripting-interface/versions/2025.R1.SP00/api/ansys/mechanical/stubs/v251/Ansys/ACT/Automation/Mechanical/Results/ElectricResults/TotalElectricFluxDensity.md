# `TotalElectricFluxDensity`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFluxDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFluxDensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalElectricFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalElectricFluxDensity.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#TotalElectricFluxDensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#TotalElectricFluxDensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#TotalElectricFluxDensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#TotalElectricFluxDensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalElectricFluxDensity.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalElectricFluxDensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalElectricFluxDensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalElectricFluxDensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#TotalElectricFluxDensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#TotalElectricFluxDensity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalElectricFluxDensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#TotalElectricFluxDensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TotalElectricFluxDensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalElectricFluxDensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#TotalElectricFluxDensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#TotalElectricFluxDensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#TotalElectricFluxDensity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalElectricFluxDensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalElectricFluxDensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalElectricFluxDensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#TotalElectricFluxDensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#TotalElectricFluxDensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalElectricFluxDensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalElectricFluxDensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalElectricFluxDensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#TotalElectricFluxDensity.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#TotalElectricFluxDensity.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#TotalElectricFluxDensity.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#TotalElectricFluxDensity.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#TotalElectricFluxDensity.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#TotalElectricFluxDensity.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#TotalElectricFluxDensity.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#TotalElectricFluxDensity.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#TotalElectricFluxDensity.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#TotalElectricFluxDensity.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#TotalElectricFluxDensity.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#TotalElectricFluxDensity.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#TotalElectricFluxDensity.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#TotalElectricFluxDensity.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`ElectricResultType`](#TotalElectricFluxDensity.ElectricResultType)                               | Gets or sets the ElectricResultType.                                     |
| [`Figures`](#TotalElectricFluxDensity.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#TotalElectricFluxDensity.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#TotalElectricFluxDensity.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#TotalElectricFluxDensity.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#TotalElectricFluxDensity.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#TotalElectricFluxDensity.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#TotalElectricFluxDensity.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#TotalElectricFluxDensity.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#TotalElectricFluxDensity.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#TotalElectricFluxDensity.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#TotalElectricFluxDensity.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#TotalElectricFluxDensity.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#TotalElectricFluxDensity.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#TotalElectricFluxDensity.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#TotalElectricFluxDensity.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#TotalElectricFluxDensity.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#TotalElectricFluxDensity.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#TotalElectricFluxDensity.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#TotalElectricFluxDensity.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#TotalElectricFluxDensity.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#TotalElectricFluxDensity.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#TotalElectricFluxDensity.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#TotalElectricFluxDensity.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#TotalElectricFluxDensity.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#TotalElectricFluxDensity.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#TotalElectricFluxDensity.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#TotalElectricFluxDensity.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#TotalElectricFluxDensity.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#TotalElectricFluxDensity.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#TotalElectricFluxDensity.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#TotalElectricFluxDensity.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#TotalElectricFluxDensity.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#TotalElectricFluxDensity.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#TotalElectricFluxDensity.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#TotalElectricFluxDensity.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#TotalElectricFluxDensity.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#TotalElectricFluxDensity.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#TotalElectricFluxDensity.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#TotalElectricFluxDensity.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#TotalElectricFluxDensity.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#TotalElectricFluxDensity.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#TotalElectricFluxDensity.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#TotalElectricFluxDensity.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#TotalElectricFluxDensity.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="TotalElectricFluxDensity.Amplitude"></a>

### *property* TotalElectricFluxDensity.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Average"></a>

### *property* TotalElectricFluxDensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AverageAcrossBodies"></a>

### *property* TotalElectricFluxDensity.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.By"></a>

### *property* TotalElectricFluxDensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CalculateTimeHistory"></a>

### *property* TotalElectricFluxDensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Children"></a>

### *property* TotalElectricFluxDensity.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CombinationNumber"></a>

### *property* TotalElectricFluxDensity.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Comments"></a>

### *property* TotalElectricFluxDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CoordinateSystem"></a>

### *property* TotalElectricFluxDensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CrackFrontNumber"></a>

### *property* TotalElectricFluxDensity.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DataModelObjectCategory"></a>

### *property* TotalElectricFluxDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DisplayOption"></a>

### *property* TotalElectricFluxDensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DisplayTime"></a>

### *property* TotalElectricFluxDensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DpfEvaluation"></a>

### *property* TotalElectricFluxDensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ElectricResultType"></a>

### *property* TotalElectricFluxDensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Figures"></a>

### *property* TotalElectricFluxDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Frequency"></a>

### *property* TotalElectricFluxDensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GlobalIDs"></a>

### *property* TotalElectricFluxDensity.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GraphControlsXAxis"></a>

### *property* TotalElectricFluxDensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Identifier"></a>

### *property* TotalElectricFluxDensity.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Images"></a>

### *property* TotalElectricFluxDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.InternalObject"></a>

### *property* TotalElectricFluxDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IsSolved"></a>

### *property* TotalElectricFluxDensity.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ItemType"></a>

### *property* TotalElectricFluxDensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.IterationNumber"></a>

### *property* TotalElectricFluxDensity.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStep"></a>

### *property* TotalElectricFluxDensity.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.LoadStepNumber"></a>

### *property* TotalElectricFluxDensity.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Location"></a>

### *property* TotalElectricFluxDensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Maximum"></a>

### *property* TotalElectricFluxDensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOccursOn"></a>

### *property* TotalElectricFluxDensity.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOfMaximumOverTime"></a>

### *property* TotalElectricFluxDensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MaximumOfMinimumOverTime"></a>

### *property* TotalElectricFluxDensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Minimum"></a>

### *property* TotalElectricFluxDensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOccursOn"></a>

### *property* TotalElectricFluxDensity.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOfMaximumOverTime"></a>

### *property* TotalElectricFluxDensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.MinimumOfMinimumOverTime"></a>

### *property* TotalElectricFluxDensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.NamedSelections"></a>

### *property* TotalElectricFluxDensity.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Path"></a>

### *property* TotalElectricFluxDensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PhaseIncrement"></a>

### *property* TotalElectricFluxDensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PlotData"></a>

### *property* TotalElectricFluxDensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Properties"></a>

### *property* TotalElectricFluxDensity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RPMSelection"></a>

### *property* TotalElectricFluxDensity.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ReportedFrequency"></a>

### *property* TotalElectricFluxDensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ScopingMethod"></a>

### *property* TotalElectricFluxDensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SetNumber"></a>

### *property* TotalElectricFluxDensity.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SolutionCombinationDriver"></a>

### *property* TotalElectricFluxDensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SolverComponentIDs"></a>

### *property* TotalElectricFluxDensity.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Substep"></a>

### *property* TotalElectricFluxDensity.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Suppressed"></a>

### *property* TotalElectricFluxDensity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Surface"></a>

### *property* TotalElectricFluxDensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SurfaceCoating"></a>

### *property* TotalElectricFluxDensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.SweepingPhase"></a>

### *property* TotalElectricFluxDensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Time"></a>

### *property* TotalElectricFluxDensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMaximumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMaximumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMinimumOfMaximumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.TimeForMinimumOfMinimumValues"></a>

### *property* TotalElectricFluxDensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Total"></a>

### *property* TotalElectricFluxDensity.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.VisibleProperties"></a>

### *property* TotalElectricFluxDensity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalElectricFluxDensity.Activate"></a>

### TotalElectricFluxDensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddAlert"></a>

### TotalElectricFluxDensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddComment"></a>

### TotalElectricFluxDensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddConvergence"></a>

### TotalElectricFluxDensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddFigure"></a>

### TotalElectricFluxDensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.AddImage"></a>

### TotalElectricFluxDensity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ClearGeneratedData"></a>

### TotalElectricFluxDensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CopyTo"></a>

### TotalElectricFluxDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CreateParameter"></a>

### TotalElectricFluxDensity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.CreateResultsAtAllSets"></a>

### TotalElectricFluxDensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Delete"></a>

### TotalElectricFluxDensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.Duplicate"></a>

### TotalElectricFluxDensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.DuplicateWithoutResults"></a>

### TotalElectricFluxDensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.EvaluateAllResults"></a>

### TotalElectricFluxDensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ExportAnimation"></a>

### TotalElectricFluxDensity.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.ExportToTextFile"></a>

### TotalElectricFluxDensity.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.FetchRemoteResults"></a>

### TotalElectricFluxDensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetChildren"></a>

### TotalElectricFluxDensity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GetParameter"></a>

### TotalElectricFluxDensity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GroupAllSimilarChildren"></a>

### TotalElectricFluxDensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.GroupSimilarObjects"></a>

### TotalElectricFluxDensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PromoteToNamedSelection"></a>

### TotalElectricFluxDensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PropertyByAPIName"></a>

### TotalElectricFluxDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.PropertyByName"></a>

### TotalElectricFluxDensity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RemoveParameter"></a>

### TotalElectricFluxDensity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalElectricFluxDensity.RenameBasedOnDefinition"></a>

### TotalElectricFluxDensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

