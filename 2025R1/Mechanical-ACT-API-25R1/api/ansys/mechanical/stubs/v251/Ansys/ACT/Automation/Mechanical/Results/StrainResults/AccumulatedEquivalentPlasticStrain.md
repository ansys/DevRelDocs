# `AccumulatedEquivalentPlasticStrain`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StrainResults.AccumulatedEquivalentPlasticStrain"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.AccumulatedEquivalentPlasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AccumulatedEquivalentPlasticStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AccumulatedEquivalentPlasticStrain.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#AccumulatedEquivalentPlasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#AccumulatedEquivalentPlasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#AccumulatedEquivalentPlasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#AccumulatedEquivalentPlasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AccumulatedEquivalentPlasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#AccumulatedEquivalentPlasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#AccumulatedEquivalentPlasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AccumulatedEquivalentPlasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#AccumulatedEquivalentPlasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#AccumulatedEquivalentPlasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AccumulatedEquivalentPlasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#AccumulatedEquivalentPlasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#AccumulatedEquivalentPlasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#AccumulatedEquivalentPlasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#AccumulatedEquivalentPlasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#AccumulatedEquivalentPlasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#AccumulatedEquivalentPlasticStrain.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AccumulatedEquivalentPlasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AccumulatedEquivalentPlasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AccumulatedEquivalentPlasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AccumulatedEquivalentPlasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AccumulatedEquivalentPlasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AccumulatedEquivalentPlasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AccumulatedEquivalentPlasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#AccumulatedEquivalentPlasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#AccumulatedEquivalentPlasticStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#AccumulatedEquivalentPlasticStrain.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#AccumulatedEquivalentPlasticStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#AccumulatedEquivalentPlasticStrain.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AccumulatedEquivalentPlasticStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AccumulatedEquivalentPlasticStrain.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#AccumulatedEquivalentPlasticStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AccumulatedEquivalentPlasticStrain.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AccumulatedEquivalentPlasticStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AccumulatedEquivalentPlasticStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#AccumulatedEquivalentPlasticStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#AccumulatedEquivalentPlasticStrain.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#AccumulatedEquivalentPlasticStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AccumulatedEquivalentPlasticStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AccumulatedEquivalentPlasticStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#AccumulatedEquivalentPlasticStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#AccumulatedEquivalentPlasticStrain.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#AccumulatedEquivalentPlasticStrain.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#AccumulatedEquivalentPlasticStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AccumulatedEquivalentPlasticStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#AccumulatedEquivalentPlasticStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#AccumulatedEquivalentPlasticStrain.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#AccumulatedEquivalentPlasticStrain.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#AccumulatedEquivalentPlasticStrain.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AccumulatedEquivalentPlasticStrain.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#AccumulatedEquivalentPlasticStrain.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AccumulatedEquivalentPlasticStrain.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#AccumulatedEquivalentPlasticStrain.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`LoadMultiplier`](#AccumulatedEquivalentPlasticStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#AccumulatedEquivalentPlasticStrain.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AccumulatedEquivalentPlasticStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AccumulatedEquivalentPlasticStrain.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#AccumulatedEquivalentPlasticStrain.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#AccumulatedEquivalentPlasticStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AccumulatedEquivalentPlasticStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AccumulatedEquivalentPlasticStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AccumulatedEquivalentPlasticStrain.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#AccumulatedEquivalentPlasticStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AccumulatedEquivalentPlasticStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AccumulatedEquivalentPlasticStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#AccumulatedEquivalentPlasticStrain.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#AccumulatedEquivalentPlasticStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#AccumulatedEquivalentPlasticStrain.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#AccumulatedEquivalentPlasticStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#AccumulatedEquivalentPlasticStrain.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#AccumulatedEquivalentPlasticStrain.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#AccumulatedEquivalentPlasticStrain.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#AccumulatedEquivalentPlasticStrain.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#AccumulatedEquivalentPlasticStrain.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AccumulatedEquivalentPlasticStrain.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#AccumulatedEquivalentPlasticStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#AccumulatedEquivalentPlasticStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AccumulatedEquivalentPlasticStrain.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AccumulatedEquivalentPlasticStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AccumulatedEquivalentPlasticStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#AccumulatedEquivalentPlasticStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#AccumulatedEquivalentPlasticStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#AccumulatedEquivalentPlasticStrain.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#AccumulatedEquivalentPlasticStrain.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#AccumulatedEquivalentPlasticStrain.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#AccumulatedEquivalentPlasticStrain.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#AccumulatedEquivalentPlasticStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#AccumulatedEquivalentPlasticStrain.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AccumulatedEquivalentPlasticStrain.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#AccumulatedEquivalentPlasticStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="AccumulatedEquivalentPlasticStrain.Amplitude"></a>

### *property* AccumulatedEquivalentPlasticStrain.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Average"></a>

### *property* AccumulatedEquivalentPlasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.AverageAcrossBodies"></a>

### *property* AccumulatedEquivalentPlasticStrain.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.By"></a>

### *property* AccumulatedEquivalentPlasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.CalculateTimeHistory"></a>

### *property* AccumulatedEquivalentPlasticStrain.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Children"></a>

### *property* AccumulatedEquivalentPlasticStrain.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.CombinationNumber"></a>

### *property* AccumulatedEquivalentPlasticStrain.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Comments"></a>

### *property* AccumulatedEquivalentPlasticStrain.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.CoordinateSystem"></a>

### *property* AccumulatedEquivalentPlasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.CrackFrontNumber"></a>

### *property* AccumulatedEquivalentPlasticStrain.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.CyclicMode"></a>

### *property* AccumulatedEquivalentPlasticStrain.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.DataModelObjectCategory"></a>

### *property* AccumulatedEquivalentPlasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.DisplayOption"></a>

### *property* AccumulatedEquivalentPlasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.DisplayTime"></a>

### *property* AccumulatedEquivalentPlasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.DpfEvaluation"></a>

### *property* AccumulatedEquivalentPlasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.EnvironmentSelection"></a>

### *property* AccumulatedEquivalentPlasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Figures"></a>

### *property* AccumulatedEquivalentPlasticStrain.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Frequency"></a>

### *property* AccumulatedEquivalentPlasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.GlobalIDs"></a>

### *property* AccumulatedEquivalentPlasticStrain.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.GraphControlsXAxis"></a>

### *property* AccumulatedEquivalentPlasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.HarmonicIndex"></a>

### *property* AccumulatedEquivalentPlasticStrain.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Identifier"></a>

### *property* AccumulatedEquivalentPlasticStrain.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Images"></a>

### *property* AccumulatedEquivalentPlasticStrain.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.InternalObject"></a>

### *property* AccumulatedEquivalentPlasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.IsSolved"></a>

### *property* AccumulatedEquivalentPlasticStrain.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.ItemType"></a>

### *property* AccumulatedEquivalentPlasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.IterationNumber"></a>

### *property* AccumulatedEquivalentPlasticStrain.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.IterationStep"></a>

### *property* AccumulatedEquivalentPlasticStrain.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.LoadMultiplier"></a>

### *property* AccumulatedEquivalentPlasticStrain.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.LoadStep"></a>

### *property* AccumulatedEquivalentPlasticStrain.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.LoadStepNumber"></a>

### *property* AccumulatedEquivalentPlasticStrain.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Location"></a>

### *property* AccumulatedEquivalentPlasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Maximum"></a>

### *property* AccumulatedEquivalentPlasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.MaximumOccursOn"></a>

### *property* AccumulatedEquivalentPlasticStrain.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.MaximumOfMaximumOverTime"></a>

### *property* AccumulatedEquivalentPlasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.MaximumOfMinimumOverTime"></a>

### *property* AccumulatedEquivalentPlasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Minimum"></a>

### *property* AccumulatedEquivalentPlasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.MinimumOccursOn"></a>

### *property* AccumulatedEquivalentPlasticStrain.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.MinimumOfMaximumOverTime"></a>

### *property* AccumulatedEquivalentPlasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.MinimumOfMinimumOverTime"></a>

### *property* AccumulatedEquivalentPlasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Mode"></a>

### *property* AccumulatedEquivalentPlasticStrain.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.NamedSelections"></a>

### *property* AccumulatedEquivalentPlasticStrain.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Path"></a>

### *property* AccumulatedEquivalentPlasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.PhaseIncrement"></a>

### *property* AccumulatedEquivalentPlasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Plies"></a>

### *property* AccumulatedEquivalentPlasticStrain.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.PlotData"></a>

### *property* AccumulatedEquivalentPlasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Ply"></a>

### *property* AccumulatedEquivalentPlasticStrain.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Position"></a>

### *property* AccumulatedEquivalentPlasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Properties"></a>

### *property* AccumulatedEquivalentPlasticStrain.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.RPMSelection"></a>

### *property* AccumulatedEquivalentPlasticStrain.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.ReportedFrequency"></a>

### *property* AccumulatedEquivalentPlasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.ScopingMethod"></a>

### *property* AccumulatedEquivalentPlasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.SetNumber"></a>

### *property* AccumulatedEquivalentPlasticStrain.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.SolutionCombinationDriver"></a>

### *property* AccumulatedEquivalentPlasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.SolverComponentIDs"></a>

### *property* AccumulatedEquivalentPlasticStrain.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.StressStrainType"></a>

### *property* AccumulatedEquivalentPlasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.SubScopeBy"></a>

### *property* AccumulatedEquivalentPlasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Substep"></a>

### *property* AccumulatedEquivalentPlasticStrain.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Suppressed"></a>

### *property* AccumulatedEquivalentPlasticStrain.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Surface"></a>

### *property* AccumulatedEquivalentPlasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.SurfaceCoating"></a>

### *property* AccumulatedEquivalentPlasticStrain.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.SweepingPhase"></a>

### *property* AccumulatedEquivalentPlasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Time"></a>

### *property* AccumulatedEquivalentPlasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMaximumValues"></a>

### *property* AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMinimumValues"></a>

### *property* AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMaximumValues"></a>

### *property* AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMinimumValues"></a>

### *property* AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Total"></a>

### *property* AccumulatedEquivalentPlasticStrain.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.VisibleProperties"></a>

### *property* AccumulatedEquivalentPlasticStrain.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AccumulatedEquivalentPlasticStrain.Activate"></a>

### AccumulatedEquivalentPlasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.AddAlert"></a>

### AccumulatedEquivalentPlasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.AddComment"></a>

### AccumulatedEquivalentPlasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.AddConvergence"></a>

### AccumulatedEquivalentPlasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.AddFigure"></a>

### AccumulatedEquivalentPlasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.AddImage"></a>

### AccumulatedEquivalentPlasticStrain.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.ClearGeneratedData"></a>

### AccumulatedEquivalentPlasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.CopyTo"></a>

### AccumulatedEquivalentPlasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.CreateParameter"></a>

### AccumulatedEquivalentPlasticStrain.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.CreateResultsAtAllSets"></a>

### AccumulatedEquivalentPlasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Delete"></a>

### AccumulatedEquivalentPlasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.Duplicate"></a>

### AccumulatedEquivalentPlasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.DuplicateWithoutResults"></a>

### AccumulatedEquivalentPlasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.EvaluateAllResults"></a>

### AccumulatedEquivalentPlasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.ExportAnimation"></a>

### AccumulatedEquivalentPlasticStrain.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.ExportToTextFile"></a>

### AccumulatedEquivalentPlasticStrain.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.FetchRemoteResults"></a>

### AccumulatedEquivalentPlasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.GetChildren"></a>

### AccumulatedEquivalentPlasticStrain.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.GetParameter"></a>

### AccumulatedEquivalentPlasticStrain.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.GroupAllSimilarChildren"></a>

### AccumulatedEquivalentPlasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.GroupSimilarObjects"></a>

### AccumulatedEquivalentPlasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.PromoteToNamedSelection"></a>

### AccumulatedEquivalentPlasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.PropertyByAPIName"></a>

### AccumulatedEquivalentPlasticStrain.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.PropertyByName"></a>

### AccumulatedEquivalentPlasticStrain.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.RemoveParameter"></a>

### AccumulatedEquivalentPlasticStrain.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AccumulatedEquivalentPlasticStrain.RenameBasedOnDefinition"></a>

### AccumulatedEquivalentPlasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

