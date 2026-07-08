# `EquivalentElasticStrainRST`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrainRST"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrainRST

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EquivalentElasticStrainRST.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#EquivalentElasticStrainRST.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#EquivalentElasticStrainRST.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#EquivalentElasticStrainRST.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#EquivalentElasticStrainRST.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#EquivalentElasticStrainRST.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#EquivalentElasticStrainRST.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#EquivalentElasticStrainRST.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#EquivalentElasticStrainRST.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#EquivalentElasticStrainRST.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#EquivalentElasticStrainRST.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#EquivalentElasticStrainRST.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#EquivalentElasticStrainRST.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#EquivalentElasticStrainRST.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#EquivalentElasticStrainRST.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#EquivalentElasticStrainRST.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#EquivalentElasticStrainRST.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#EquivalentElasticStrainRST.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#EquivalentElasticStrainRST.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#EquivalentElasticStrainRST.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#EquivalentElasticStrainRST.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#EquivalentElasticStrainRST.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#EquivalentElasticStrainRST.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#EquivalentElasticStrainRST.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#EquivalentElasticStrainRST.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#EquivalentElasticStrainRST.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#EquivalentElasticStrainRST.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#EquivalentElasticStrainRST.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#EquivalentElasticStrainRST.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#EquivalentElasticStrainRST.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#EquivalentElasticStrainRST.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#EquivalentElasticStrainRST.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#EquivalentElasticStrainRST.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#EquivalentElasticStrainRST.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#EquivalentElasticStrainRST.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#EquivalentElasticStrainRST.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#EquivalentElasticStrainRST.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#EquivalentElasticStrainRST.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#EquivalentElasticStrainRST.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#EquivalentElasticStrainRST.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#EquivalentElasticStrainRST.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#EquivalentElasticStrainRST.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#EquivalentElasticStrainRST.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#EquivalentElasticStrainRST.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#EquivalentElasticStrainRST.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#EquivalentElasticStrainRST.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#EquivalentElasticStrainRST.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#EquivalentElasticStrainRST.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#EquivalentElasticStrainRST.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#EquivalentElasticStrainRST.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#EquivalentElasticStrainRST.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#EquivalentElasticStrainRST.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#EquivalentElasticStrainRST.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#EquivalentElasticStrainRST.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#EquivalentElasticStrainRST.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#EquivalentElasticStrainRST.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`LoadMultiplier`](#EquivalentElasticStrainRST.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#EquivalentElasticStrainRST.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentElasticStrainRST.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentElasticStrainRST.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentElasticStrainRST.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentElasticStrainRST.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#EquivalentElasticStrainRST.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#EquivalentElasticStrainRST.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#EquivalentElasticStrainRST.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#EquivalentElasticStrainRST.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#EquivalentElasticStrainRST.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#EquivalentElasticStrainRST.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#EquivalentElasticStrainRST.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#EquivalentElasticStrainRST.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#EquivalentElasticStrainRST.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#EquivalentElasticStrainRST.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#EquivalentElasticStrainRST.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#EquivalentElasticStrainRST.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#EquivalentElasticStrainRST.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#EquivalentElasticStrainRST.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#EquivalentElasticStrainRST.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#EquivalentElasticStrainRST.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#EquivalentElasticStrainRST.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#EquivalentElasticStrainRST.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#EquivalentElasticStrainRST.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#EquivalentElasticStrainRST.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#EquivalentElasticStrainRST.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#EquivalentElasticStrainRST.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#EquivalentElasticStrainRST.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#EquivalentElasticStrainRST.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#EquivalentElasticStrainRST.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#EquivalentElasticStrainRST.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#EquivalentElasticStrainRST.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#EquivalentElasticStrainRST.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#EquivalentElasticStrainRST.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#EquivalentElasticStrainRST.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#EquivalentElasticStrainRST.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#EquivalentElasticStrainRST.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#EquivalentElasticStrainRST.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#EquivalentElasticStrainRST.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#EquivalentElasticStrainRST.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#EquivalentElasticStrainRST.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#EquivalentElasticStrainRST.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#EquivalentElasticStrainRST.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#EquivalentElasticStrainRST.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentElasticStrainRST.Amplitude"></a>

### *property* EquivalentElasticStrainRST.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Average"></a>

### *property* EquivalentElasticStrainRST.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AverageAcrossBodies"></a>

### *property* EquivalentElasticStrainRST.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.By"></a>

### *property* EquivalentElasticStrainRST.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CalculateTimeHistory"></a>

### *property* EquivalentElasticStrainRST.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Children"></a>

### *property* EquivalentElasticStrainRST.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CombinationNumber"></a>

### *property* EquivalentElasticStrainRST.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Comments"></a>

### *property* EquivalentElasticStrainRST.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CoordinateSystem"></a>

### *property* EquivalentElasticStrainRST.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CrackFrontNumber"></a>

### *property* EquivalentElasticStrainRST.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CyclicMode"></a>

### *property* EquivalentElasticStrainRST.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DataModelObjectCategory"></a>

### *property* EquivalentElasticStrainRST.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DisplayOption"></a>

### *property* EquivalentElasticStrainRST.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DisplayTime"></a>

### *property* EquivalentElasticStrainRST.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DpfEvaluation"></a>

### *property* EquivalentElasticStrainRST.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.EnvironmentSelection"></a>

### *property* EquivalentElasticStrainRST.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Figures"></a>

### *property* EquivalentElasticStrainRST.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Frequency"></a>

### *property* EquivalentElasticStrainRST.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GlobalIDs"></a>

### *property* EquivalentElasticStrainRST.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GraphControlsXAxis"></a>

### *property* EquivalentElasticStrainRST.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.HarmonicIndex"></a>

### *property* EquivalentElasticStrainRST.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Identifier"></a>

### *property* EquivalentElasticStrainRST.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Images"></a>

### *property* EquivalentElasticStrainRST.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.InternalObject"></a>

### *property* EquivalentElasticStrainRST.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.IsSolved"></a>

### *property* EquivalentElasticStrainRST.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ItemType"></a>

### *property* EquivalentElasticStrainRST.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.IterationNumber"></a>

### *property* EquivalentElasticStrainRST.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.IterationStep"></a>

### *property* EquivalentElasticStrainRST.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadMultiplier"></a>

### *property* EquivalentElasticStrainRST.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStep"></a>

### *property* EquivalentElasticStrainRST.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentElasticStrainRST.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentElasticStrainRST.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentElasticStrainRST.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentElasticStrainRST.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.LoadStepNumber"></a>

### *property* EquivalentElasticStrainRST.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Location"></a>

### *property* EquivalentElasticStrainRST.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Maximum"></a>

### *property* EquivalentElasticStrainRST.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MaximumOccursOn"></a>

### *property* EquivalentElasticStrainRST.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MaximumOfMaximumOverTime"></a>

### *property* EquivalentElasticStrainRST.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MaximumOfMinimumOverTime"></a>

### *property* EquivalentElasticStrainRST.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Minimum"></a>

### *property* EquivalentElasticStrainRST.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MinimumOccursOn"></a>

### *property* EquivalentElasticStrainRST.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MinimumOfMaximumOverTime"></a>

### *property* EquivalentElasticStrainRST.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.MinimumOfMinimumOverTime"></a>

### *property* EquivalentElasticStrainRST.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Mode"></a>

### *property* EquivalentElasticStrainRST.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.NamedSelections"></a>

### *property* EquivalentElasticStrainRST.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Path"></a>

### *property* EquivalentElasticStrainRST.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PhaseIncrement"></a>

### *property* EquivalentElasticStrainRST.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Plies"></a>

### *property* EquivalentElasticStrainRST.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PlotData"></a>

### *property* EquivalentElasticStrainRST.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Ply"></a>

### *property* EquivalentElasticStrainRST.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Position"></a>

### *property* EquivalentElasticStrainRST.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Properties"></a>

### *property* EquivalentElasticStrainRST.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.RPMSelection"></a>

### *property* EquivalentElasticStrainRST.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ReportedFrequency"></a>

### *property* EquivalentElasticStrainRST.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ScopingMethod"></a>

### *property* EquivalentElasticStrainRST.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SetNumber"></a>

### *property* EquivalentElasticStrainRST.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SolutionCombinationDriver"></a>

### *property* EquivalentElasticStrainRST.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SolverComponentIDs"></a>

### *property* EquivalentElasticStrainRST.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.StressStrainType"></a>

### *property* EquivalentElasticStrainRST.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SubScopeBy"></a>

### *property* EquivalentElasticStrainRST.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Substep"></a>

### *property* EquivalentElasticStrainRST.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Suppressed"></a>

### *property* EquivalentElasticStrainRST.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Surface"></a>

### *property* EquivalentElasticStrainRST.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SurfaceCoating"></a>

### *property* EquivalentElasticStrainRST.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.SweepingPhase"></a>

### *property* EquivalentElasticStrainRST.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Time"></a>

### *property* EquivalentElasticStrainRST.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentElasticStrainRST.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentElasticStrainRST.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentElasticStrainRST.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentElasticStrainRST.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Total"></a>

### *property* EquivalentElasticStrainRST.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.VisibleProperties"></a>

### *property* EquivalentElasticStrainRST.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentElasticStrainRST.Activate"></a>

### EquivalentElasticStrainRST.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddAlert"></a>

### EquivalentElasticStrainRST.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddComment"></a>

### EquivalentElasticStrainRST.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddConvergence"></a>

### EquivalentElasticStrainRST.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddFigure"></a>

### EquivalentElasticStrainRST.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.AddImage"></a>

### EquivalentElasticStrainRST.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ClearGeneratedData"></a>

### EquivalentElasticStrainRST.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CopyTo"></a>

### EquivalentElasticStrainRST.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CreateParameter"></a>

### EquivalentElasticStrainRST.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.CreateResultsAtAllSets"></a>

### EquivalentElasticStrainRST.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Delete"></a>

### EquivalentElasticStrainRST.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.Duplicate"></a>

### EquivalentElasticStrainRST.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.DuplicateWithoutResults"></a>

### EquivalentElasticStrainRST.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.EvaluateAllResults"></a>

### EquivalentElasticStrainRST.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ExportAnimation"></a>

### EquivalentElasticStrainRST.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.ExportToTextFile"></a>

### EquivalentElasticStrainRST.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.FetchRemoteResults"></a>

### EquivalentElasticStrainRST.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GetChildren"></a>

### EquivalentElasticStrainRST.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GetParameter"></a>

### EquivalentElasticStrainRST.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GroupAllSimilarChildren"></a>

### EquivalentElasticStrainRST.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.GroupSimilarObjects"></a>

### EquivalentElasticStrainRST.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PromoteToNamedSelection"></a>

### EquivalentElasticStrainRST.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PropertyByAPIName"></a>

### EquivalentElasticStrainRST.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.PropertyByName"></a>

### EquivalentElasticStrainRST.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.RemoveParameter"></a>

### EquivalentElasticStrainRST.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.RenameBasedOnDefinition"></a>

### EquivalentElasticStrainRST.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrainRST.RetrieveResult"></a>

### EquivalentElasticStrainRST.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

