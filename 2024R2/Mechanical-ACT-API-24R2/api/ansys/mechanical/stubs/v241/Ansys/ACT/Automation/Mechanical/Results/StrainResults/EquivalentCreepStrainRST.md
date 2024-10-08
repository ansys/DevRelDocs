# `EquivalentCreepStrainRST`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentCreepStrainRST"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentCreepStrainRST

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EquivalentCreepStrainRST.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EquivalentCreepStrainRST.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#EquivalentCreepStrainRST.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#EquivalentCreepStrainRST.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#EquivalentCreepStrainRST.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#EquivalentCreepStrainRST.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentCreepStrainRST.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#EquivalentCreepStrainRST.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#EquivalentCreepStrainRST.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EquivalentCreepStrainRST.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#EquivalentCreepStrainRST.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#EquivalentCreepStrainRST.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#EquivalentCreepStrainRST.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#EquivalentCreepStrainRST.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#EquivalentCreepStrainRST.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#EquivalentCreepStrainRST.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#EquivalentCreepStrainRST.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#EquivalentCreepStrainRST.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#EquivalentCreepStrainRST.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#EquivalentCreepStrainRST.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#EquivalentCreepStrainRST.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentCreepStrainRST.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#EquivalentCreepStrainRST.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#EquivalentCreepStrainRST.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#EquivalentCreepStrainRST.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EquivalentCreepStrainRST.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#EquivalentCreepStrainRST.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Amplitude`](#EquivalentCreepStrainRST.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`Average`](#EquivalentCreepStrainRST.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#EquivalentCreepStrainRST.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#EquivalentCreepStrainRST.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#EquivalentCreepStrainRST.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#EquivalentCreepStrainRST.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#EquivalentCreepStrainRST.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#EquivalentCreepStrainRST.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#EquivalentCreepStrainRST.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#EquivalentCreepStrainRST.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`CyclicMode`](#EquivalentCreepStrainRST.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`DataModelObjectCategory`](#EquivalentCreepStrainRST.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#EquivalentCreepStrainRST.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#EquivalentCreepStrainRST.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#EquivalentCreepStrainRST.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`EnvironmentSelection`](#EquivalentCreepStrainRST.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`Figures`](#EquivalentCreepStrainRST.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Frequency`](#EquivalentCreepStrainRST.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`GlobalIDs`](#EquivalentCreepStrainRST.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#EquivalentCreepStrainRST.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`HarmonicIndex`](#EquivalentCreepStrainRST.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`Identifier`](#EquivalentCreepStrainRST.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#EquivalentCreepStrainRST.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#EquivalentCreepStrainRST.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#EquivalentCreepStrainRST.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#EquivalentCreepStrainRST.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#EquivalentCreepStrainRST.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`IterationStep`](#EquivalentCreepStrainRST.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#EquivalentCreepStrainRST.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#EquivalentCreepStrainRST.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentCreepStrainRST.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentCreepStrainRST.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentCreepStrainRST.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentCreepStrainRST.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#EquivalentCreepStrainRST.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#EquivalentCreepStrainRST.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#EquivalentCreepStrainRST.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#EquivalentCreepStrainRST.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#EquivalentCreepStrainRST.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentCreepStrainRST.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentCreepStrainRST.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#EquivalentCreepStrainRST.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#EquivalentCreepStrainRST.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentCreepStrainRST.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#EquivalentCreepStrainRST.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#EquivalentCreepStrainRST.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#EquivalentCreepStrainRST.Path)                                                           | Path property.                                                         |
| [`PhaseIncrement`](#EquivalentCreepStrainRST.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Plies`](#EquivalentCreepStrainRST.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#EquivalentCreepStrainRST.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#EquivalentCreepStrainRST.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Position`](#EquivalentCreepStrainRST.Position)                                                   | Gets or sets the Position.                                             |
| [`Properties`](#EquivalentCreepStrainRST.Properties)                                               | Gets the list of properties for this object.                           |
| [`ReportedFrequency`](#EquivalentCreepStrainRST.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`ScopingMethod`](#EquivalentCreepStrainRST.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentCreepStrainRST.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#EquivalentCreepStrainRST.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#EquivalentCreepStrainRST.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`StressStrainType`](#EquivalentCreepStrainRST.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#EquivalentCreepStrainRST.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Substep`](#EquivalentCreepStrainRST.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#EquivalentCreepStrainRST.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#EquivalentCreepStrainRST.Surface)                                                     | Surface property.                                                      |
| [`SweepingPhase`](#EquivalentCreepStrainRST.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Time`](#EquivalentCreepStrainRST.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#EquivalentCreepStrainRST.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#EquivalentCreepStrainRST.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentCreepStrainRST.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#EquivalentCreepStrainRST.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#EquivalentCreepStrainRST.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentCreepStrainRST.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentCreepStrainRST.Amplitude"></a>

### *property* EquivalentCreepStrainRST.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Average"></a>

### *property* EquivalentCreepStrainRST.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AverageAcrossBodies"></a>

### *property* EquivalentCreepStrainRST.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.By"></a>

### *property* EquivalentCreepStrainRST.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CalculateTimeHistory"></a>

### *property* EquivalentCreepStrainRST.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Children"></a>

### *property* EquivalentCreepStrainRST.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CombinationNumber"></a>

### *property* EquivalentCreepStrainRST.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Comments"></a>

### *property* EquivalentCreepStrainRST.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CoordinateSystem"></a>

### *property* EquivalentCreepStrainRST.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CrackFrontNumber"></a>

### *property* EquivalentCreepStrainRST.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CyclicMode"></a>

### *property* EquivalentCreepStrainRST.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DataModelObjectCategory"></a>

### *property* EquivalentCreepStrainRST.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DisplayOption"></a>

### *property* EquivalentCreepStrainRST.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DisplayTime"></a>

### *property* EquivalentCreepStrainRST.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DpfEvaluation"></a>

### *property* EquivalentCreepStrainRST.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.EnvironmentSelection"></a>

### *property* EquivalentCreepStrainRST.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Figures"></a>

### *property* EquivalentCreepStrainRST.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Frequency"></a>

### *property* EquivalentCreepStrainRST.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GlobalIDs"></a>

### *property* EquivalentCreepStrainRST.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GraphControlsXAxis"></a>

### *property* EquivalentCreepStrainRST.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.HarmonicIndex"></a>

### *property* EquivalentCreepStrainRST.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Identifier"></a>

### *property* EquivalentCreepStrainRST.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Images"></a>

### *property* EquivalentCreepStrainRST.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.InternalObject"></a>

### *property* EquivalentCreepStrainRST.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IsSolved"></a>

### *property* EquivalentCreepStrainRST.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ItemType"></a>

### *property* EquivalentCreepStrainRST.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IterationNumber"></a>

### *property* EquivalentCreepStrainRST.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IterationStep"></a>

### *property* EquivalentCreepStrainRST.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadMultiplier"></a>

### *property* EquivalentCreepStrainRST.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStep"></a>

### *property* EquivalentCreepStrainRST.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentCreepStrainRST.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentCreepStrainRST.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentCreepStrainRST.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentCreepStrainRST.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepNumber"></a>

### *property* EquivalentCreepStrainRST.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Location"></a>

### *property* EquivalentCreepStrainRST.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Maximum"></a>

### *property* EquivalentCreepStrainRST.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MaximumOccursOn"></a>

### *property* EquivalentCreepStrainRST.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MaximumOfMaximumOverTime"></a>

### *property* EquivalentCreepStrainRST.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MaximumOfMinimumOverTime"></a>

### *property* EquivalentCreepStrainRST.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Minimum"></a>

### *property* EquivalentCreepStrainRST.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MinimumOccursOn"></a>

### *property* EquivalentCreepStrainRST.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MinimumOfMaximumOverTime"></a>

### *property* EquivalentCreepStrainRST.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MinimumOfMinimumOverTime"></a>

### *property* EquivalentCreepStrainRST.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Mode"></a>

### *property* EquivalentCreepStrainRST.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.NamedSelections"></a>

### *property* EquivalentCreepStrainRST.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Path"></a>

### *property* EquivalentCreepStrainRST.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PhaseIncrement"></a>

### *property* EquivalentCreepStrainRST.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Plies"></a>

### *property* EquivalentCreepStrainRST.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PlotData"></a>

### *property* EquivalentCreepStrainRST.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Ply"></a>

### *property* EquivalentCreepStrainRST.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Position"></a>

### *property* EquivalentCreepStrainRST.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Properties"></a>

### *property* EquivalentCreepStrainRST.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ReportedFrequency"></a>

### *property* EquivalentCreepStrainRST.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ScopingMethod"></a>

### *property* EquivalentCreepStrainRST.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SetNumber"></a>

### *property* EquivalentCreepStrainRST.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SolutionCombinationDriver"></a>

### *property* EquivalentCreepStrainRST.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SolverComponentIDs"></a>

### *property* EquivalentCreepStrainRST.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.StressStrainType"></a>

### *property* EquivalentCreepStrainRST.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SubScopeBy"></a>

### *property* EquivalentCreepStrainRST.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Substep"></a>

### *property* EquivalentCreepStrainRST.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Suppressed"></a>

### *property* EquivalentCreepStrainRST.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Surface"></a>

### *property* EquivalentCreepStrainRST.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SweepingPhase"></a>

### *property* EquivalentCreepStrainRST.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Time"></a>

### *property* EquivalentCreepStrainRST.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentCreepStrainRST.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentCreepStrainRST.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentCreepStrainRST.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentCreepStrainRST.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.VisibleProperties"></a>

### *property* EquivalentCreepStrainRST.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallPanelShowTextOnMosaic"></a>

### *property* EquivalentCreepStrainRST.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentCreepStrainRST.Activate"></a>

### EquivalentCreepStrainRST.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddAlert"></a>

### EquivalentCreepStrainRST.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddComment"></a>

### EquivalentCreepStrainRST.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddConvergence"></a>

### EquivalentCreepStrainRST.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddFigure"></a>

### EquivalentCreepStrainRST.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddImage"></a>

### EquivalentCreepStrainRST.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ClearGeneratedData"></a>

### EquivalentCreepStrainRST.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CopyTo"></a>

### EquivalentCreepStrainRST.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CreateParameter"></a>

### EquivalentCreepStrainRST.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CreateResultsAtAllSets"></a>

### EquivalentCreepStrainRST.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Delete"></a>

### EquivalentCreepStrainRST.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Duplicate"></a>

### EquivalentCreepStrainRST.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DuplicateWithoutResults"></a>

### EquivalentCreepStrainRST.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.EvaluateAllResults"></a>

### EquivalentCreepStrainRST.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ExportAnimation"></a>

### EquivalentCreepStrainRST.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ExportToTextFile"></a>

### EquivalentCreepStrainRST.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.FetchRemoteResults"></a>

### EquivalentCreepStrainRST.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetChildren"></a>

### EquivalentCreepStrainRST.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetParameter"></a>

### EquivalentCreepStrainRST.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GroupAllSimilarChildren"></a>

### EquivalentCreepStrainRST.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GroupSimilarObjects"></a>

### EquivalentCreepStrainRST.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PromoteToNamedSelection"></a>

### EquivalentCreepStrainRST.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PropertyByAPIName"></a>

### EquivalentCreepStrainRST.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PropertyByName"></a>

### EquivalentCreepStrainRST.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RemoveParameter"></a>

### EquivalentCreepStrainRST.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RenameBasedOnDefinition"></a>

### EquivalentCreepStrainRST.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

