# `EquivalentElasticStrain`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrain"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EquivalentElasticStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EquivalentElasticStrain.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#EquivalentElasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#EquivalentElasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#EquivalentElasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#EquivalentElasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentElasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#EquivalentElasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#EquivalentElasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EquivalentElasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#EquivalentElasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#EquivalentElasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#EquivalentElasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#EquivalentElasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#EquivalentElasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#EquivalentElasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#EquivalentElasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#EquivalentElasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#EquivalentElasticStrain.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#EquivalentElasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#EquivalentElasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentElasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#EquivalentElasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#EquivalentElasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#EquivalentElasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EquivalentElasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#EquivalentElasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Amplitude`](#EquivalentElasticStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`Average`](#EquivalentElasticStrain.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#EquivalentElasticStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#EquivalentElasticStrain.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#EquivalentElasticStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#EquivalentElasticStrain.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#EquivalentElasticStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#EquivalentElasticStrain.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#EquivalentElasticStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#EquivalentElasticStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`CyclicMode`](#EquivalentElasticStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`DataModelObjectCategory`](#EquivalentElasticStrain.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#EquivalentElasticStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#EquivalentElasticStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#EquivalentElasticStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`EnvironmentSelection`](#EquivalentElasticStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`Figures`](#EquivalentElasticStrain.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Frequency`](#EquivalentElasticStrain.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`GlobalIDs`](#EquivalentElasticStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#EquivalentElasticStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`HarmonicIndex`](#EquivalentElasticStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`Identifier`](#EquivalentElasticStrain.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#EquivalentElasticStrain.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#EquivalentElasticStrain.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#EquivalentElasticStrain.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#EquivalentElasticStrain.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#EquivalentElasticStrain.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`IterationStep`](#EquivalentElasticStrain.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#EquivalentElasticStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#EquivalentElasticStrain.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentElasticStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentElasticStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentElasticStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentElasticStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#EquivalentElasticStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#EquivalentElasticStrain.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#EquivalentElasticStrain.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#EquivalentElasticStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#EquivalentElasticStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentElasticStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentElasticStrain.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#EquivalentElasticStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#EquivalentElasticStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentElasticStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#EquivalentElasticStrain.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#EquivalentElasticStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#EquivalentElasticStrain.Path)                                                           | Path property.                                                         |
| [`PhaseIncrement`](#EquivalentElasticStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Plies`](#EquivalentElasticStrain.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#EquivalentElasticStrain.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#EquivalentElasticStrain.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Position`](#EquivalentElasticStrain.Position)                                                   | Gets or sets the Position.                                             |
| [`Properties`](#EquivalentElasticStrain.Properties)                                               | Gets the list of properties for this object.                           |
| [`ReportedFrequency`](#EquivalentElasticStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`ScopingMethod`](#EquivalentElasticStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentElasticStrain.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#EquivalentElasticStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#EquivalentElasticStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`StressStrainType`](#EquivalentElasticStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#EquivalentElasticStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Substep`](#EquivalentElasticStrain.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#EquivalentElasticStrain.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#EquivalentElasticStrain.Surface)                                                     | Surface property.                                                      |
| [`SweepingPhase`](#EquivalentElasticStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Time`](#EquivalentElasticStrain.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#EquivalentElasticStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#EquivalentElasticStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentElasticStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#EquivalentElasticStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#EquivalentElasticStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentElasticStrain.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentElasticStrain.Amplitude"></a>

### *property* EquivalentElasticStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Average"></a>

### *property* EquivalentElasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AverageAcrossBodies"></a>

### *property* EquivalentElasticStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.By"></a>

### *property* EquivalentElasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CalculateTimeHistory"></a>

### *property* EquivalentElasticStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Children"></a>

### *property* EquivalentElasticStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CombinationNumber"></a>

### *property* EquivalentElasticStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Comments"></a>

### *property* EquivalentElasticStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CoordinateSystem"></a>

### *property* EquivalentElasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CrackFrontNumber"></a>

### *property* EquivalentElasticStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CyclicMode"></a>

### *property* EquivalentElasticStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DataModelObjectCategory"></a>

### *property* EquivalentElasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DisplayOption"></a>

### *property* EquivalentElasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DisplayTime"></a>

### *property* EquivalentElasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DpfEvaluation"></a>

### *property* EquivalentElasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.EnvironmentSelection"></a>

### *property* EquivalentElasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Figures"></a>

### *property* EquivalentElasticStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Frequency"></a>

### *property* EquivalentElasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GlobalIDs"></a>

### *property* EquivalentElasticStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GraphControlsXAxis"></a>

### *property* EquivalentElasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.HarmonicIndex"></a>

### *property* EquivalentElasticStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Identifier"></a>

### *property* EquivalentElasticStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Images"></a>

### *property* EquivalentElasticStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.InternalObject"></a>

### *property* EquivalentElasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.IsSolved"></a>

### *property* EquivalentElasticStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ItemType"></a>

### *property* EquivalentElasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.IterationNumber"></a>

### *property* EquivalentElasticStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.IterationStep"></a>

### *property* EquivalentElasticStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadMultiplier"></a>

### *property* EquivalentElasticStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStep"></a>

### *property* EquivalentElasticStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentElasticStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentElasticStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentElasticStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentElasticStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepNumber"></a>

### *property* EquivalentElasticStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Location"></a>

### *property* EquivalentElasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Maximum"></a>

### *property* EquivalentElasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MaximumOccursOn"></a>

### *property* EquivalentElasticStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MaximumOfMaximumOverTime"></a>

### *property* EquivalentElasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MaximumOfMinimumOverTime"></a>

### *property* EquivalentElasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Minimum"></a>

### *property* EquivalentElasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MinimumOccursOn"></a>

### *property* EquivalentElasticStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MinimumOfMaximumOverTime"></a>

### *property* EquivalentElasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MinimumOfMinimumOverTime"></a>

### *property* EquivalentElasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Mode"></a>

### *property* EquivalentElasticStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.NamedSelections"></a>

### *property* EquivalentElasticStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Path"></a>

### *property* EquivalentElasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PhaseIncrement"></a>

### *property* EquivalentElasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Plies"></a>

### *property* EquivalentElasticStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PlotData"></a>

### *property* EquivalentElasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Ply"></a>

### *property* EquivalentElasticStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Position"></a>

### *property* EquivalentElasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Properties"></a>

### *property* EquivalentElasticStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ReportedFrequency"></a>

### *property* EquivalentElasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ScopingMethod"></a>

### *property* EquivalentElasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SetNumber"></a>

### *property* EquivalentElasticStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SolutionCombinationDriver"></a>

### *property* EquivalentElasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SolverComponentIDs"></a>

### *property* EquivalentElasticStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.StressStrainType"></a>

### *property* EquivalentElasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SubScopeBy"></a>

### *property* EquivalentElasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Substep"></a>

### *property* EquivalentElasticStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Suppressed"></a>

### *property* EquivalentElasticStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Surface"></a>

### *property* EquivalentElasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SweepingPhase"></a>

### *property* EquivalentElasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Time"></a>

### *property* EquivalentElasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentElasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentElasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentElasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentElasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.VisibleProperties"></a>

### *property* EquivalentElasticStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.WaterfallPanelShowTextOnMosaic"></a>

### *property* EquivalentElasticStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentElasticStrain.Activate"></a>

### EquivalentElasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddAlert"></a>

### EquivalentElasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddComment"></a>

### EquivalentElasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddConvergence"></a>

### EquivalentElasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddFigure"></a>

### EquivalentElasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddImage"></a>

### EquivalentElasticStrain.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ClearGeneratedData"></a>

### EquivalentElasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CopyTo"></a>

### EquivalentElasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CreateParameter"></a>

### EquivalentElasticStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CreateResultsAtAllSets"></a>

### EquivalentElasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Delete"></a>

### EquivalentElasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Duplicate"></a>

### EquivalentElasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DuplicateWithoutResults"></a>

### EquivalentElasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.EvaluateAllResults"></a>

### EquivalentElasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ExportAnimation"></a>

### EquivalentElasticStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ExportToTextFile"></a>

### EquivalentElasticStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.FetchRemoteResults"></a>

### EquivalentElasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GetChildren"></a>

### EquivalentElasticStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GetParameter"></a>

### EquivalentElasticStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GroupAllSimilarChildren"></a>

### EquivalentElasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GroupSimilarObjects"></a>

### EquivalentElasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PromoteToNamedSelection"></a>

### EquivalentElasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PropertyByAPIName"></a>

### EquivalentElasticStrain.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PropertyByName"></a>

### EquivalentElasticStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.RemoveParameter"></a>

### EquivalentElasticStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.RenameBasedOnDefinition"></a>

### EquivalentElasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

