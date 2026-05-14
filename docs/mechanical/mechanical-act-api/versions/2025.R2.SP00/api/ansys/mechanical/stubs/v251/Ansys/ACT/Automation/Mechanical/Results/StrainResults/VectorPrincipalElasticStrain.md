# `VectorPrincipalElasticStrain`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StrainResults.VectorPrincipalElasticStrain"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.VectorPrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VectorPrincipalElasticStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#VectorPrincipalElasticStrain.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#VectorPrincipalElasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#VectorPrincipalElasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#VectorPrincipalElasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#VectorPrincipalElasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VectorPrincipalElasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#VectorPrincipalElasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#VectorPrincipalElasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#VectorPrincipalElasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#VectorPrincipalElasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#VectorPrincipalElasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#VectorPrincipalElasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#VectorPrincipalElasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#VectorPrincipalElasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#VectorPrincipalElasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#VectorPrincipalElasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#VectorPrincipalElasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#VectorPrincipalElasticStrain.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#VectorPrincipalElasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#VectorPrincipalElasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VectorPrincipalElasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#VectorPrincipalElasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#VectorPrincipalElasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#VectorPrincipalElasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#VectorPrincipalElasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#VectorPrincipalElasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#VectorPrincipalElasticStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#VectorPrincipalElasticStrain.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#VectorPrincipalElasticStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#VectorPrincipalElasticStrain.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#VectorPrincipalElasticStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#VectorPrincipalElasticStrain.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#VectorPrincipalElasticStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#VectorPrincipalElasticStrain.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#VectorPrincipalElasticStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#VectorPrincipalElasticStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#VectorPrincipalElasticStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#VectorPrincipalElasticStrain.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#VectorPrincipalElasticStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#VectorPrincipalElasticStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#VectorPrincipalElasticStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#VectorPrincipalElasticStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#VectorPrincipalElasticStrain.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#VectorPrincipalElasticStrain.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#VectorPrincipalElasticStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#VectorPrincipalElasticStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#VectorPrincipalElasticStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#VectorPrincipalElasticStrain.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#VectorPrincipalElasticStrain.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#VectorPrincipalElasticStrain.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#VectorPrincipalElasticStrain.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#VectorPrincipalElasticStrain.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#VectorPrincipalElasticStrain.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#VectorPrincipalElasticStrain.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`LoadMultiplier`](#VectorPrincipalElasticStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#VectorPrincipalElasticStrain.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#VectorPrincipalElasticStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#VectorPrincipalElasticStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#VectorPrincipalElasticStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#VectorPrincipalElasticStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#VectorPrincipalElasticStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#VectorPrincipalElasticStrain.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#VectorPrincipalElasticStrain.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#VectorPrincipalElasticStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#VectorPrincipalElasticStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#VectorPrincipalElasticStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#VectorPrincipalElasticStrain.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#VectorPrincipalElasticStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#VectorPrincipalElasticStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#VectorPrincipalElasticStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#VectorPrincipalElasticStrain.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#VectorPrincipalElasticStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#VectorPrincipalElasticStrain.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#VectorPrincipalElasticStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#VectorPrincipalElasticStrain.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#VectorPrincipalElasticStrain.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#VectorPrincipalElasticStrain.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#VectorPrincipalElasticStrain.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#VectorPrincipalElasticStrain.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#VectorPrincipalElasticStrain.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#VectorPrincipalElasticStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#VectorPrincipalElasticStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#VectorPrincipalElasticStrain.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#VectorPrincipalElasticStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#VectorPrincipalElasticStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#VectorPrincipalElasticStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#VectorPrincipalElasticStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#VectorPrincipalElasticStrain.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#VectorPrincipalElasticStrain.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#VectorPrincipalElasticStrain.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#VectorPrincipalElasticStrain.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#VectorPrincipalElasticStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#VectorPrincipalElasticStrain.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#VectorPrincipalElasticStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#VectorPrincipalElasticStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#VectorPrincipalElasticStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#VectorPrincipalElasticStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#VectorPrincipalElasticStrain.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#VectorPrincipalElasticStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="VectorPrincipalElasticStrain.Amplitude"></a>

### *property* VectorPrincipalElasticStrain.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Average"></a>

### *property* VectorPrincipalElasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.AverageAcrossBodies"></a>

### *property* VectorPrincipalElasticStrain.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.By"></a>

### *property* VectorPrincipalElasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.CalculateTimeHistory"></a>

### *property* VectorPrincipalElasticStrain.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Children"></a>

### *property* VectorPrincipalElasticStrain.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.CombinationNumber"></a>

### *property* VectorPrincipalElasticStrain.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Comments"></a>

### *property* VectorPrincipalElasticStrain.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.CoordinateSystem"></a>

### *property* VectorPrincipalElasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.CrackFrontNumber"></a>

### *property* VectorPrincipalElasticStrain.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.CyclicMode"></a>

### *property* VectorPrincipalElasticStrain.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.DataModelObjectCategory"></a>

### *property* VectorPrincipalElasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.DisplayOption"></a>

### *property* VectorPrincipalElasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.DisplayTime"></a>

### *property* VectorPrincipalElasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.DpfEvaluation"></a>

### *property* VectorPrincipalElasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.EnvironmentSelection"></a>

### *property* VectorPrincipalElasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Figures"></a>

### *property* VectorPrincipalElasticStrain.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Frequency"></a>

### *property* VectorPrincipalElasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.GlobalIDs"></a>

### *property* VectorPrincipalElasticStrain.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.GraphControlsXAxis"></a>

### *property* VectorPrincipalElasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.HarmonicIndex"></a>

### *property* VectorPrincipalElasticStrain.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Identifier"></a>

### *property* VectorPrincipalElasticStrain.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Images"></a>

### *property* VectorPrincipalElasticStrain.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.InternalObject"></a>

### *property* VectorPrincipalElasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.IsSolved"></a>

### *property* VectorPrincipalElasticStrain.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.ItemType"></a>

### *property* VectorPrincipalElasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.IterationNumber"></a>

### *property* VectorPrincipalElasticStrain.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.IterationStep"></a>

### *property* VectorPrincipalElasticStrain.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.LoadMultiplier"></a>

### *property* VectorPrincipalElasticStrain.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.LoadStep"></a>

### *property* VectorPrincipalElasticStrain.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* VectorPrincipalElasticStrain.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* VectorPrincipalElasticStrain.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* VectorPrincipalElasticStrain.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* VectorPrincipalElasticStrain.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.LoadStepNumber"></a>

### *property* VectorPrincipalElasticStrain.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Location"></a>

### *property* VectorPrincipalElasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Maximum"></a>

### *property* VectorPrincipalElasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.MaximumOccursOn"></a>

### *property* VectorPrincipalElasticStrain.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.MaximumOfMaximumOverTime"></a>

### *property* VectorPrincipalElasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.MaximumOfMinimumOverTime"></a>

### *property* VectorPrincipalElasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Minimum"></a>

### *property* VectorPrincipalElasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.MinimumOccursOn"></a>

### *property* VectorPrincipalElasticStrain.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.MinimumOfMaximumOverTime"></a>

### *property* VectorPrincipalElasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.MinimumOfMinimumOverTime"></a>

### *property* VectorPrincipalElasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Mode"></a>

### *property* VectorPrincipalElasticStrain.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.NamedSelections"></a>

### *property* VectorPrincipalElasticStrain.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Path"></a>

### *property* VectorPrincipalElasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.PhaseIncrement"></a>

### *property* VectorPrincipalElasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Plies"></a>

### *property* VectorPrincipalElasticStrain.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.PlotData"></a>

### *property* VectorPrincipalElasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Ply"></a>

### *property* VectorPrincipalElasticStrain.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Position"></a>

### *property* VectorPrincipalElasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Properties"></a>

### *property* VectorPrincipalElasticStrain.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.RPMSelection"></a>

### *property* VectorPrincipalElasticStrain.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.ReportedFrequency"></a>

### *property* VectorPrincipalElasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.ScopingMethod"></a>

### *property* VectorPrincipalElasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.SetNumber"></a>

### *property* VectorPrincipalElasticStrain.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.SolutionCombinationDriver"></a>

### *property* VectorPrincipalElasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.SolverComponentIDs"></a>

### *property* VectorPrincipalElasticStrain.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.StressStrainType"></a>

### *property* VectorPrincipalElasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.SubScopeBy"></a>

### *property* VectorPrincipalElasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Substep"></a>

### *property* VectorPrincipalElasticStrain.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Suppressed"></a>

### *property* VectorPrincipalElasticStrain.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Surface"></a>

### *property* VectorPrincipalElasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.SurfaceCoating"></a>

### *property* VectorPrincipalElasticStrain.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.SweepingPhase"></a>

### *property* VectorPrincipalElasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Time"></a>

### *property* VectorPrincipalElasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.TimeForMaximumOfMaximumValues"></a>

### *property* VectorPrincipalElasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.TimeForMaximumOfMinimumValues"></a>

### *property* VectorPrincipalElasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.TimeForMinimumOfMaximumValues"></a>

### *property* VectorPrincipalElasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.TimeForMinimumOfMinimumValues"></a>

### *property* VectorPrincipalElasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Total"></a>

### *property* VectorPrincipalElasticStrain.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.VisibleProperties"></a>

### *property* VectorPrincipalElasticStrain.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VectorPrincipalElasticStrain.Activate"></a>

### VectorPrincipalElasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.AddAlert"></a>

### VectorPrincipalElasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.AddComment"></a>

### VectorPrincipalElasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.AddConvergence"></a>

### VectorPrincipalElasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.AddFigure"></a>

### VectorPrincipalElasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.AddImage"></a>

### VectorPrincipalElasticStrain.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.ClearGeneratedData"></a>

### VectorPrincipalElasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.CopyTo"></a>

### VectorPrincipalElasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.CreateParameter"></a>

### VectorPrincipalElasticStrain.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.CreateResultsAtAllSets"></a>

### VectorPrincipalElasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Delete"></a>

### VectorPrincipalElasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.Duplicate"></a>

### VectorPrincipalElasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.DuplicateWithoutResults"></a>

### VectorPrincipalElasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.EvaluateAllResults"></a>

### VectorPrincipalElasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.ExportAnimation"></a>

### VectorPrincipalElasticStrain.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.ExportToTextFile"></a>

### VectorPrincipalElasticStrain.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.FetchRemoteResults"></a>

### VectorPrincipalElasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.GetChildren"></a>

### VectorPrincipalElasticStrain.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.GetParameter"></a>

### VectorPrincipalElasticStrain.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.GroupAllSimilarChildren"></a>

### VectorPrincipalElasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.GroupSimilarObjects"></a>

### VectorPrincipalElasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.PromoteToNamedSelection"></a>

### VectorPrincipalElasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.PropertyByAPIName"></a>

### VectorPrincipalElasticStrain.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.PropertyByName"></a>

### VectorPrincipalElasticStrain.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.RemoveParameter"></a>

### VectorPrincipalElasticStrain.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalElasticStrain.RenameBasedOnDefinition"></a>

### VectorPrincipalElasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

