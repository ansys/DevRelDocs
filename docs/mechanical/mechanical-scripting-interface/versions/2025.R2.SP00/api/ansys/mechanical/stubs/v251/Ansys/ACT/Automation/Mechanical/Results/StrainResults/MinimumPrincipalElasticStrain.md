# `MinimumPrincipalElasticStrain`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MinimumPrincipalElasticStrain"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.MinimumPrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MinimumPrincipalElasticStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MinimumPrincipalElasticStrain.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#MinimumPrincipalElasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#MinimumPrincipalElasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#MinimumPrincipalElasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#MinimumPrincipalElasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MinimumPrincipalElasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MinimumPrincipalElasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#MinimumPrincipalElasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MinimumPrincipalElasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#MinimumPrincipalElasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#MinimumPrincipalElasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MinimumPrincipalElasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#MinimumPrincipalElasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MinimumPrincipalElasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#MinimumPrincipalElasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#MinimumPrincipalElasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#MinimumPrincipalElasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#MinimumPrincipalElasticStrain.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MinimumPrincipalElasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MinimumPrincipalElasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MinimumPrincipalElasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MinimumPrincipalElasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MinimumPrincipalElasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MinimumPrincipalElasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MinimumPrincipalElasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MinimumPrincipalElasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#MinimumPrincipalElasticStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#MinimumPrincipalElasticStrain.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#MinimumPrincipalElasticStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#MinimumPrincipalElasticStrain.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#MinimumPrincipalElasticStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#MinimumPrincipalElasticStrain.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#MinimumPrincipalElasticStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#MinimumPrincipalElasticStrain.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#MinimumPrincipalElasticStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#MinimumPrincipalElasticStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#MinimumPrincipalElasticStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#MinimumPrincipalElasticStrain.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#MinimumPrincipalElasticStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#MinimumPrincipalElasticStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#MinimumPrincipalElasticStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#MinimumPrincipalElasticStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#MinimumPrincipalElasticStrain.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#MinimumPrincipalElasticStrain.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#MinimumPrincipalElasticStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#MinimumPrincipalElasticStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#MinimumPrincipalElasticStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#MinimumPrincipalElasticStrain.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#MinimumPrincipalElasticStrain.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#MinimumPrincipalElasticStrain.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#MinimumPrincipalElasticStrain.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#MinimumPrincipalElasticStrain.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#MinimumPrincipalElasticStrain.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#MinimumPrincipalElasticStrain.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`LoadMultiplier`](#MinimumPrincipalElasticStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#MinimumPrincipalElasticStrain.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MinimumPrincipalElasticStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#MinimumPrincipalElasticStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#MinimumPrincipalElasticStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#MinimumPrincipalElasticStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#MinimumPrincipalElasticStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#MinimumPrincipalElasticStrain.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#MinimumPrincipalElasticStrain.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#MinimumPrincipalElasticStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#MinimumPrincipalElasticStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#MinimumPrincipalElasticStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#MinimumPrincipalElasticStrain.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#MinimumPrincipalElasticStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#MinimumPrincipalElasticStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#MinimumPrincipalElasticStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#MinimumPrincipalElasticStrain.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#MinimumPrincipalElasticStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#MinimumPrincipalElasticStrain.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#MinimumPrincipalElasticStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#MinimumPrincipalElasticStrain.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#MinimumPrincipalElasticStrain.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#MinimumPrincipalElasticStrain.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#MinimumPrincipalElasticStrain.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#MinimumPrincipalElasticStrain.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#MinimumPrincipalElasticStrain.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#MinimumPrincipalElasticStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#MinimumPrincipalElasticStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#MinimumPrincipalElasticStrain.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#MinimumPrincipalElasticStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#MinimumPrincipalElasticStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#MinimumPrincipalElasticStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#MinimumPrincipalElasticStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#MinimumPrincipalElasticStrain.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#MinimumPrincipalElasticStrain.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#MinimumPrincipalElasticStrain.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#MinimumPrincipalElasticStrain.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#MinimumPrincipalElasticStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#MinimumPrincipalElasticStrain.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#MinimumPrincipalElasticStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#MinimumPrincipalElasticStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#MinimumPrincipalElasticStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#MinimumPrincipalElasticStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#MinimumPrincipalElasticStrain.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#MinimumPrincipalElasticStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="MinimumPrincipalElasticStrain.Amplitude"></a>

### *property* MinimumPrincipalElasticStrain.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Average"></a>

### *property* MinimumPrincipalElasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.AverageAcrossBodies"></a>

### *property* MinimumPrincipalElasticStrain.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.By"></a>

### *property* MinimumPrincipalElasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.CalculateTimeHistory"></a>

### *property* MinimumPrincipalElasticStrain.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Children"></a>

### *property* MinimumPrincipalElasticStrain.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.CombinationNumber"></a>

### *property* MinimumPrincipalElasticStrain.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Comments"></a>

### *property* MinimumPrincipalElasticStrain.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.CoordinateSystem"></a>

### *property* MinimumPrincipalElasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.CrackFrontNumber"></a>

### *property* MinimumPrincipalElasticStrain.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.CyclicMode"></a>

### *property* MinimumPrincipalElasticStrain.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.DataModelObjectCategory"></a>

### *property* MinimumPrincipalElasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.DisplayOption"></a>

### *property* MinimumPrincipalElasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.DisplayTime"></a>

### *property* MinimumPrincipalElasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.DpfEvaluation"></a>

### *property* MinimumPrincipalElasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.EnvironmentSelection"></a>

### *property* MinimumPrincipalElasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Figures"></a>

### *property* MinimumPrincipalElasticStrain.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Frequency"></a>

### *property* MinimumPrincipalElasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.GlobalIDs"></a>

### *property* MinimumPrincipalElasticStrain.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.GraphControlsXAxis"></a>

### *property* MinimumPrincipalElasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.HarmonicIndex"></a>

### *property* MinimumPrincipalElasticStrain.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Identifier"></a>

### *property* MinimumPrincipalElasticStrain.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Images"></a>

### *property* MinimumPrincipalElasticStrain.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.InternalObject"></a>

### *property* MinimumPrincipalElasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.IsSolved"></a>

### *property* MinimumPrincipalElasticStrain.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.ItemType"></a>

### *property* MinimumPrincipalElasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.IterationNumber"></a>

### *property* MinimumPrincipalElasticStrain.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.IterationStep"></a>

### *property* MinimumPrincipalElasticStrain.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.LoadMultiplier"></a>

### *property* MinimumPrincipalElasticStrain.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.LoadStep"></a>

### *property* MinimumPrincipalElasticStrain.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* MinimumPrincipalElasticStrain.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* MinimumPrincipalElasticStrain.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* MinimumPrincipalElasticStrain.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* MinimumPrincipalElasticStrain.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.LoadStepNumber"></a>

### *property* MinimumPrincipalElasticStrain.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Location"></a>

### *property* MinimumPrincipalElasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Maximum"></a>

### *property* MinimumPrincipalElasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.MaximumOccursOn"></a>

### *property* MinimumPrincipalElasticStrain.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.MaximumOfMaximumOverTime"></a>

### *property* MinimumPrincipalElasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.MaximumOfMinimumOverTime"></a>

### *property* MinimumPrincipalElasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Minimum"></a>

### *property* MinimumPrincipalElasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.MinimumOccursOn"></a>

### *property* MinimumPrincipalElasticStrain.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.MinimumOfMaximumOverTime"></a>

### *property* MinimumPrincipalElasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.MinimumOfMinimumOverTime"></a>

### *property* MinimumPrincipalElasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Mode"></a>

### *property* MinimumPrincipalElasticStrain.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.NamedSelections"></a>

### *property* MinimumPrincipalElasticStrain.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Path"></a>

### *property* MinimumPrincipalElasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.PhaseIncrement"></a>

### *property* MinimumPrincipalElasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Plies"></a>

### *property* MinimumPrincipalElasticStrain.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.PlotData"></a>

### *property* MinimumPrincipalElasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Ply"></a>

### *property* MinimumPrincipalElasticStrain.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Position"></a>

### *property* MinimumPrincipalElasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Properties"></a>

### *property* MinimumPrincipalElasticStrain.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.RPMSelection"></a>

### *property* MinimumPrincipalElasticStrain.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.ReportedFrequency"></a>

### *property* MinimumPrincipalElasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.ScopingMethod"></a>

### *property* MinimumPrincipalElasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.SetNumber"></a>

### *property* MinimumPrincipalElasticStrain.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.SolutionCombinationDriver"></a>

### *property* MinimumPrincipalElasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.SolverComponentIDs"></a>

### *property* MinimumPrincipalElasticStrain.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.StressStrainType"></a>

### *property* MinimumPrincipalElasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.SubScopeBy"></a>

### *property* MinimumPrincipalElasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Substep"></a>

### *property* MinimumPrincipalElasticStrain.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Suppressed"></a>

### *property* MinimumPrincipalElasticStrain.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Surface"></a>

### *property* MinimumPrincipalElasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.SurfaceCoating"></a>

### *property* MinimumPrincipalElasticStrain.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.SweepingPhase"></a>

### *property* MinimumPrincipalElasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Time"></a>

### *property* MinimumPrincipalElasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.TimeForMaximumOfMaximumValues"></a>

### *property* MinimumPrincipalElasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.TimeForMaximumOfMinimumValues"></a>

### *property* MinimumPrincipalElasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.TimeForMinimumOfMaximumValues"></a>

### *property* MinimumPrincipalElasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.TimeForMinimumOfMinimumValues"></a>

### *property* MinimumPrincipalElasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Total"></a>

### *property* MinimumPrincipalElasticStrain.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.VisibleProperties"></a>

### *property* MinimumPrincipalElasticStrain.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MinimumPrincipalElasticStrain.Activate"></a>

### MinimumPrincipalElasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.AddAlert"></a>

### MinimumPrincipalElasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.AddComment"></a>

### MinimumPrincipalElasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.AddConvergence"></a>

### MinimumPrincipalElasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.AddFigure"></a>

### MinimumPrincipalElasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.AddImage"></a>

### MinimumPrincipalElasticStrain.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.ClearGeneratedData"></a>

### MinimumPrincipalElasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.CopyTo"></a>

### MinimumPrincipalElasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.CreateParameter"></a>

### MinimumPrincipalElasticStrain.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.CreateResultsAtAllSets"></a>

### MinimumPrincipalElasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Delete"></a>

### MinimumPrincipalElasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.Duplicate"></a>

### MinimumPrincipalElasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.DuplicateWithoutResults"></a>

### MinimumPrincipalElasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.EvaluateAllResults"></a>

### MinimumPrincipalElasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.ExportAnimation"></a>

### MinimumPrincipalElasticStrain.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.ExportToTextFile"></a>

### MinimumPrincipalElasticStrain.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.FetchRemoteResults"></a>

### MinimumPrincipalElasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.GetChildren"></a>

### MinimumPrincipalElasticStrain.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.GetParameter"></a>

### MinimumPrincipalElasticStrain.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.GroupAllSimilarChildren"></a>

### MinimumPrincipalElasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.GroupSimilarObjects"></a>

### MinimumPrincipalElasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.PromoteToNamedSelection"></a>

### MinimumPrincipalElasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.PropertyByAPIName"></a>

### MinimumPrincipalElasticStrain.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.PropertyByName"></a>

### MinimumPrincipalElasticStrain.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.RemoveParameter"></a>

### MinimumPrincipalElasticStrain.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalElasticStrain.RenameBasedOnDefinition"></a>

### MinimumPrincipalElasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

