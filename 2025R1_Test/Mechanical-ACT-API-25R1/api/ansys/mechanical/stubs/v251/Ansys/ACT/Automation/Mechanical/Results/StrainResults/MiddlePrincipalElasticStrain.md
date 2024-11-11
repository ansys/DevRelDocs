# `MiddlePrincipalElasticStrain`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalElasticStrain"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MiddlePrincipalElasticStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MiddlePrincipalElasticStrain.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#MiddlePrincipalElasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#MiddlePrincipalElasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#MiddlePrincipalElasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#MiddlePrincipalElasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MiddlePrincipalElasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MiddlePrincipalElasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#MiddlePrincipalElasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MiddlePrincipalElasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#MiddlePrincipalElasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#MiddlePrincipalElasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MiddlePrincipalElasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#MiddlePrincipalElasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MiddlePrincipalElasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#MiddlePrincipalElasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#MiddlePrincipalElasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#MiddlePrincipalElasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#MiddlePrincipalElasticStrain.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MiddlePrincipalElasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MiddlePrincipalElasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MiddlePrincipalElasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MiddlePrincipalElasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MiddlePrincipalElasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MiddlePrincipalElasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MiddlePrincipalElasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MiddlePrincipalElasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#MiddlePrincipalElasticStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#MiddlePrincipalElasticStrain.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#MiddlePrincipalElasticStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#MiddlePrincipalElasticStrain.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#MiddlePrincipalElasticStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#MiddlePrincipalElasticStrain.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#MiddlePrincipalElasticStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#MiddlePrincipalElasticStrain.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#MiddlePrincipalElasticStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#MiddlePrincipalElasticStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#MiddlePrincipalElasticStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#MiddlePrincipalElasticStrain.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#MiddlePrincipalElasticStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#MiddlePrincipalElasticStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#MiddlePrincipalElasticStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#MiddlePrincipalElasticStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#MiddlePrincipalElasticStrain.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#MiddlePrincipalElasticStrain.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#MiddlePrincipalElasticStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#MiddlePrincipalElasticStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#MiddlePrincipalElasticStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#MiddlePrincipalElasticStrain.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#MiddlePrincipalElasticStrain.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#MiddlePrincipalElasticStrain.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#MiddlePrincipalElasticStrain.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#MiddlePrincipalElasticStrain.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#MiddlePrincipalElasticStrain.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#MiddlePrincipalElasticStrain.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`LoadMultiplier`](#MiddlePrincipalElasticStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#MiddlePrincipalElasticStrain.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MiddlePrincipalElasticStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#MiddlePrincipalElasticStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#MiddlePrincipalElasticStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#MiddlePrincipalElasticStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#MiddlePrincipalElasticStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#MiddlePrincipalElasticStrain.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#MiddlePrincipalElasticStrain.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#MiddlePrincipalElasticStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#MiddlePrincipalElasticStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#MiddlePrincipalElasticStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#MiddlePrincipalElasticStrain.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#MiddlePrincipalElasticStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#MiddlePrincipalElasticStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#MiddlePrincipalElasticStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#MiddlePrincipalElasticStrain.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#MiddlePrincipalElasticStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#MiddlePrincipalElasticStrain.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#MiddlePrincipalElasticStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#MiddlePrincipalElasticStrain.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#MiddlePrincipalElasticStrain.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#MiddlePrincipalElasticStrain.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#MiddlePrincipalElasticStrain.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#MiddlePrincipalElasticStrain.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#MiddlePrincipalElasticStrain.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#MiddlePrincipalElasticStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#MiddlePrincipalElasticStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#MiddlePrincipalElasticStrain.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#MiddlePrincipalElasticStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#MiddlePrincipalElasticStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#MiddlePrincipalElasticStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#MiddlePrincipalElasticStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#MiddlePrincipalElasticStrain.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#MiddlePrincipalElasticStrain.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#MiddlePrincipalElasticStrain.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#MiddlePrincipalElasticStrain.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#MiddlePrincipalElasticStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#MiddlePrincipalElasticStrain.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#MiddlePrincipalElasticStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#MiddlePrincipalElasticStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#MiddlePrincipalElasticStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#MiddlePrincipalElasticStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#MiddlePrincipalElasticStrain.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#MiddlePrincipalElasticStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="MiddlePrincipalElasticStrain.Amplitude"></a>

### *property* MiddlePrincipalElasticStrain.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Average"></a>

### *property* MiddlePrincipalElasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AverageAcrossBodies"></a>

### *property* MiddlePrincipalElasticStrain.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.By"></a>

### *property* MiddlePrincipalElasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CalculateTimeHistory"></a>

### *property* MiddlePrincipalElasticStrain.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Children"></a>

### *property* MiddlePrincipalElasticStrain.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CombinationNumber"></a>

### *property* MiddlePrincipalElasticStrain.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Comments"></a>

### *property* MiddlePrincipalElasticStrain.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CoordinateSystem"></a>

### *property* MiddlePrincipalElasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CrackFrontNumber"></a>

### *property* MiddlePrincipalElasticStrain.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CyclicMode"></a>

### *property* MiddlePrincipalElasticStrain.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DataModelObjectCategory"></a>

### *property* MiddlePrincipalElasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DisplayOption"></a>

### *property* MiddlePrincipalElasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DisplayTime"></a>

### *property* MiddlePrincipalElasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DpfEvaluation"></a>

### *property* MiddlePrincipalElasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.EnvironmentSelection"></a>

### *property* MiddlePrincipalElasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Figures"></a>

### *property* MiddlePrincipalElasticStrain.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Frequency"></a>

### *property* MiddlePrincipalElasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GlobalIDs"></a>

### *property* MiddlePrincipalElasticStrain.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GraphControlsXAxis"></a>

### *property* MiddlePrincipalElasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.HarmonicIndex"></a>

### *property* MiddlePrincipalElasticStrain.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Identifier"></a>

### *property* MiddlePrincipalElasticStrain.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Images"></a>

### *property* MiddlePrincipalElasticStrain.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.InternalObject"></a>

### *property* MiddlePrincipalElasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.IsSolved"></a>

### *property* MiddlePrincipalElasticStrain.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ItemType"></a>

### *property* MiddlePrincipalElasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.IterationNumber"></a>

### *property* MiddlePrincipalElasticStrain.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.IterationStep"></a>

### *property* MiddlePrincipalElasticStrain.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadMultiplier"></a>

### *property* MiddlePrincipalElasticStrain.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStep"></a>

### *property* MiddlePrincipalElasticStrain.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.LoadStepNumber"></a>

### *property* MiddlePrincipalElasticStrain.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Location"></a>

### *property* MiddlePrincipalElasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Maximum"></a>

### *property* MiddlePrincipalElasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MaximumOccursOn"></a>

### *property* MiddlePrincipalElasticStrain.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MaximumOfMaximumOverTime"></a>

### *property* MiddlePrincipalElasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MaximumOfMinimumOverTime"></a>

### *property* MiddlePrincipalElasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Minimum"></a>

### *property* MiddlePrincipalElasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MinimumOccursOn"></a>

### *property* MiddlePrincipalElasticStrain.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MinimumOfMaximumOverTime"></a>

### *property* MiddlePrincipalElasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.MinimumOfMinimumOverTime"></a>

### *property* MiddlePrincipalElasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Mode"></a>

### *property* MiddlePrincipalElasticStrain.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.NamedSelections"></a>

### *property* MiddlePrincipalElasticStrain.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Path"></a>

### *property* MiddlePrincipalElasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PhaseIncrement"></a>

### *property* MiddlePrincipalElasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Plies"></a>

### *property* MiddlePrincipalElasticStrain.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PlotData"></a>

### *property* MiddlePrincipalElasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Ply"></a>

### *property* MiddlePrincipalElasticStrain.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Position"></a>

### *property* MiddlePrincipalElasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Properties"></a>

### *property* MiddlePrincipalElasticStrain.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.RPMSelection"></a>

### *property* MiddlePrincipalElasticStrain.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ReportedFrequency"></a>

### *property* MiddlePrincipalElasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ScopingMethod"></a>

### *property* MiddlePrincipalElasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SetNumber"></a>

### *property* MiddlePrincipalElasticStrain.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SolutionCombinationDriver"></a>

### *property* MiddlePrincipalElasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SolverComponentIDs"></a>

### *property* MiddlePrincipalElasticStrain.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.StressStrainType"></a>

### *property* MiddlePrincipalElasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SubScopeBy"></a>

### *property* MiddlePrincipalElasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Substep"></a>

### *property* MiddlePrincipalElasticStrain.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Suppressed"></a>

### *property* MiddlePrincipalElasticStrain.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Surface"></a>

### *property* MiddlePrincipalElasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SurfaceCoating"></a>

### *property* MiddlePrincipalElasticStrain.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.SweepingPhase"></a>

### *property* MiddlePrincipalElasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Time"></a>

### *property* MiddlePrincipalElasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.TimeForMaximumOfMaximumValues"></a>

### *property* MiddlePrincipalElasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.TimeForMaximumOfMinimumValues"></a>

### *property* MiddlePrincipalElasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.TimeForMinimumOfMaximumValues"></a>

### *property* MiddlePrincipalElasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.TimeForMinimumOfMinimumValues"></a>

### *property* MiddlePrincipalElasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Total"></a>

### *property* MiddlePrincipalElasticStrain.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.VisibleProperties"></a>

### *property* MiddlePrincipalElasticStrain.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MiddlePrincipalElasticStrain.Activate"></a>

### MiddlePrincipalElasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddAlert"></a>

### MiddlePrincipalElasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddComment"></a>

### MiddlePrincipalElasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddConvergence"></a>

### MiddlePrincipalElasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddFigure"></a>

### MiddlePrincipalElasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.AddImage"></a>

### MiddlePrincipalElasticStrain.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ClearGeneratedData"></a>

### MiddlePrincipalElasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CopyTo"></a>

### MiddlePrincipalElasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CreateParameter"></a>

### MiddlePrincipalElasticStrain.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.CreateResultsAtAllSets"></a>

### MiddlePrincipalElasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Delete"></a>

### MiddlePrincipalElasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.Duplicate"></a>

### MiddlePrincipalElasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.DuplicateWithoutResults"></a>

### MiddlePrincipalElasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.EvaluateAllResults"></a>

### MiddlePrincipalElasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ExportAnimation"></a>

### MiddlePrincipalElasticStrain.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.ExportToTextFile"></a>

### MiddlePrincipalElasticStrain.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.FetchRemoteResults"></a>

### MiddlePrincipalElasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GetChildren"></a>

### MiddlePrincipalElasticStrain.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GetParameter"></a>

### MiddlePrincipalElasticStrain.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GroupAllSimilarChildren"></a>

### MiddlePrincipalElasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.GroupSimilarObjects"></a>

### MiddlePrincipalElasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PromoteToNamedSelection"></a>

### MiddlePrincipalElasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PropertyByAPIName"></a>

### MiddlePrincipalElasticStrain.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.PropertyByName"></a>

### MiddlePrincipalElasticStrain.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.RemoveParameter"></a>

### MiddlePrincipalElasticStrain.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalElasticStrain.RenameBasedOnDefinition"></a>

### MiddlePrincipalElasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

