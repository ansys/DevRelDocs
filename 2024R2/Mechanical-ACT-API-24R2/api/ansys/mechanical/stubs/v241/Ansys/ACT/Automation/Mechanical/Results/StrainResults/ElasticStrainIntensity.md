# `ElasticStrainIntensity`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StrainResults.ElasticStrainIntensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.ElasticStrainIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElasticStrainIntensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElasticStrainIntensity.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ElasticStrainIntensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ElasticStrainIntensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ElasticStrainIntensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ElasticStrainIntensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElasticStrainIntensity.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ElasticStrainIntensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ElasticStrainIntensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElasticStrainIntensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ElasticStrainIntensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ElasticStrainIntensity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElasticStrainIntensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ElasticStrainIntensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ElasticStrainIntensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ElasticStrainIntensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ElasticStrainIntensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ElasticStrainIntensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ElasticStrainIntensity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElasticStrainIntensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElasticStrainIntensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElasticStrainIntensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ElasticStrainIntensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ElasticStrainIntensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElasticStrainIntensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElasticStrainIntensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ElasticStrainIntensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Amplitude`](#ElasticStrainIntensity.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`Average`](#ElasticStrainIntensity.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#ElasticStrainIntensity.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`By`](#ElasticStrainIntensity.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#ElasticStrainIntensity.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#ElasticStrainIntensity.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#ElasticStrainIntensity.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#ElasticStrainIntensity.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#ElasticStrainIntensity.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#ElasticStrainIntensity.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`CyclicMode`](#ElasticStrainIntensity.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`DataModelObjectCategory`](#ElasticStrainIntensity.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#ElasticStrainIntensity.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#ElasticStrainIntensity.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#ElasticStrainIntensity.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`EnvironmentSelection`](#ElasticStrainIntensity.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`Figures`](#ElasticStrainIntensity.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Frequency`](#ElasticStrainIntensity.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`GlobalIDs`](#ElasticStrainIntensity.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#ElasticStrainIntensity.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`HarmonicIndex`](#ElasticStrainIntensity.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`Identifier`](#ElasticStrainIntensity.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#ElasticStrainIntensity.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#ElasticStrainIntensity.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#ElasticStrainIntensity.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#ElasticStrainIntensity.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#ElasticStrainIntensity.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`IterationStep`](#ElasticStrainIntensity.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#ElasticStrainIntensity.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#ElasticStrainIntensity.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#ElasticStrainIntensity.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#ElasticStrainIntensity.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ElasticStrainIntensity.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#ElasticStrainIntensity.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#ElasticStrainIntensity.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#ElasticStrainIntensity.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#ElasticStrainIntensity.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#ElasticStrainIntensity.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#ElasticStrainIntensity.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ElasticStrainIntensity.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ElasticStrainIntensity.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#ElasticStrainIntensity.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#ElasticStrainIntensity.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ElasticStrainIntensity.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#ElasticStrainIntensity.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#ElasticStrainIntensity.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`Path`](#ElasticStrainIntensity.Path)                                                           | Path property.                                                         |
| [`PhaseIncrement`](#ElasticStrainIntensity.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Plies`](#ElasticStrainIntensity.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#ElasticStrainIntensity.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#ElasticStrainIntensity.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Position`](#ElasticStrainIntensity.Position)                                                   | Gets or sets the Position.                                             |
| [`Properties`](#ElasticStrainIntensity.Properties)                                               | Gets the list of properties for this object.                           |
| [`ReportedFrequency`](#ElasticStrainIntensity.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`ScopingMethod`](#ElasticStrainIntensity.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ElasticStrainIntensity.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#ElasticStrainIntensity.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#ElasticStrainIntensity.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`StressStrainType`](#ElasticStrainIntensity.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#ElasticStrainIntensity.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Substep`](#ElasticStrainIntensity.Substep)                                                     | Gets the Substep.                                                      |
| [`Suppressed`](#ElasticStrainIntensity.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#ElasticStrainIntensity.Surface)                                                     | Surface property.                                                      |
| [`SweepingPhase`](#ElasticStrainIntensity.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Time`](#ElasticStrainIntensity.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#ElasticStrainIntensity.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#ElasticStrainIntensity.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ElasticStrainIntensity.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#ElasticStrainIntensity.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`VisibleProperties`](#ElasticStrainIntensity.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#ElasticStrainIntensity.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="ElasticStrainIntensity.Amplitude"></a>

### *property* ElasticStrainIntensity.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Average"></a>

### *property* ElasticStrainIntensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.AverageAcrossBodies"></a>

### *property* ElasticStrainIntensity.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.By"></a>

### *property* ElasticStrainIntensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.CalculateTimeHistory"></a>

### *property* ElasticStrainIntensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Children"></a>

### *property* ElasticStrainIntensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.CombinationNumber"></a>

### *property* ElasticStrainIntensity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Comments"></a>

### *property* ElasticStrainIntensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.CoordinateSystem"></a>

### *property* ElasticStrainIntensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.CrackFrontNumber"></a>

### *property* ElasticStrainIntensity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.CyclicMode"></a>

### *property* ElasticStrainIntensity.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.DataModelObjectCategory"></a>

### *property* ElasticStrainIntensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.DisplayOption"></a>

### *property* ElasticStrainIntensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.DisplayTime"></a>

### *property* ElasticStrainIntensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.DpfEvaluation"></a>

### *property* ElasticStrainIntensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.EnvironmentSelection"></a>

### *property* ElasticStrainIntensity.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Figures"></a>

### *property* ElasticStrainIntensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Frequency"></a>

### *property* ElasticStrainIntensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.GlobalIDs"></a>

### *property* ElasticStrainIntensity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.GraphControlsXAxis"></a>

### *property* ElasticStrainIntensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.HarmonicIndex"></a>

### *property* ElasticStrainIntensity.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Identifier"></a>

### *property* ElasticStrainIntensity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Images"></a>

### *property* ElasticStrainIntensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.InternalObject"></a>

### *property* ElasticStrainIntensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.IsSolved"></a>

### *property* ElasticStrainIntensity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.ItemType"></a>

### *property* ElasticStrainIntensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.IterationNumber"></a>

### *property* ElasticStrainIntensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.IterationStep"></a>

### *property* ElasticStrainIntensity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.LoadMultiplier"></a>

### *property* ElasticStrainIntensity.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.LoadStep"></a>

### *property* ElasticStrainIntensity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElasticStrainIntensity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElasticStrainIntensity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElasticStrainIntensity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElasticStrainIntensity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.LoadStepNumber"></a>

### *property* ElasticStrainIntensity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Location"></a>

### *property* ElasticStrainIntensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Maximum"></a>

### *property* ElasticStrainIntensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.MaximumOccursOn"></a>

### *property* ElasticStrainIntensity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.MaximumOfMaximumOverTime"></a>

### *property* ElasticStrainIntensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.MaximumOfMinimumOverTime"></a>

### *property* ElasticStrainIntensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Minimum"></a>

### *property* ElasticStrainIntensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.MinimumOccursOn"></a>

### *property* ElasticStrainIntensity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.MinimumOfMaximumOverTime"></a>

### *property* ElasticStrainIntensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.MinimumOfMinimumOverTime"></a>

### *property* ElasticStrainIntensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Mode"></a>

### *property* ElasticStrainIntensity.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.NamedSelections"></a>

### *property* ElasticStrainIntensity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Path"></a>

### *property* ElasticStrainIntensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.PhaseIncrement"></a>

### *property* ElasticStrainIntensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Plies"></a>

### *property* ElasticStrainIntensity.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.PlotData"></a>

### *property* ElasticStrainIntensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Ply"></a>

### *property* ElasticStrainIntensity.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Position"></a>

### *property* ElasticStrainIntensity.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Properties"></a>

### *property* ElasticStrainIntensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.ReportedFrequency"></a>

### *property* ElasticStrainIntensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.ScopingMethod"></a>

### *property* ElasticStrainIntensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.SetNumber"></a>

### *property* ElasticStrainIntensity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.SolutionCombinationDriver"></a>

### *property* ElasticStrainIntensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.SolverComponentIDs"></a>

### *property* ElasticStrainIntensity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.StressStrainType"></a>

### *property* ElasticStrainIntensity.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.SubScopeBy"></a>

### *property* ElasticStrainIntensity.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Substep"></a>

### *property* ElasticStrainIntensity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Suppressed"></a>

### *property* ElasticStrainIntensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Surface"></a>

### *property* ElasticStrainIntensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.SweepingPhase"></a>

### *property* ElasticStrainIntensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Time"></a>

### *property* ElasticStrainIntensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.TimeForMaximumOfMaximumValues"></a>

### *property* ElasticStrainIntensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.TimeForMaximumOfMinimumValues"></a>

### *property* ElasticStrainIntensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.TimeForMinimumOfMaximumValues"></a>

### *property* ElasticStrainIntensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.TimeForMinimumOfMinimumValues"></a>

### *property* ElasticStrainIntensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.VisibleProperties"></a>

### *property* ElasticStrainIntensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.WaterfallPanelShowTextOnMosaic"></a>

### *property* ElasticStrainIntensity.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElasticStrainIntensity.Activate"></a>

### ElasticStrainIntensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.AddAlert"></a>

### ElasticStrainIntensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.AddComment"></a>

### ElasticStrainIntensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.AddConvergence"></a>

### ElasticStrainIntensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.AddFigure"></a>

### ElasticStrainIntensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.AddImage"></a>

### ElasticStrainIntensity.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.ClearGeneratedData"></a>

### ElasticStrainIntensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.CopyTo"></a>

### ElasticStrainIntensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.CreateParameter"></a>

### ElasticStrainIntensity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.CreateResultsAtAllSets"></a>

### ElasticStrainIntensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Delete"></a>

### ElasticStrainIntensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.Duplicate"></a>

### ElasticStrainIntensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.DuplicateWithoutResults"></a>

### ElasticStrainIntensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.EvaluateAllResults"></a>

### ElasticStrainIntensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.ExportAnimation"></a>

### ElasticStrainIntensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.ExportToTextFile"></a>

### ElasticStrainIntensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.FetchRemoteResults"></a>

### ElasticStrainIntensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.GetChildren"></a>

### ElasticStrainIntensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.GetParameter"></a>

### ElasticStrainIntensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.GroupAllSimilarChildren"></a>

### ElasticStrainIntensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.GroupSimilarObjects"></a>

### ElasticStrainIntensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.PromoteToNamedSelection"></a>

### ElasticStrainIntensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.PropertyByAPIName"></a>

### ElasticStrainIntensity.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.PropertyByName"></a>

### ElasticStrainIntensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.RemoveParameter"></a>

### ElasticStrainIntensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticStrainIntensity.RenameBasedOnDefinition"></a>

### ElasticStrainIntensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

