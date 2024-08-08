# `EquivalentElasticStrain`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EquivalentElasticStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#EquivalentElasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#EquivalentElasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentElasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentElasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentElasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentElasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentElasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentElasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentElasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentElasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentElasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentElasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentElasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentElasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentElasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentElasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentElasticStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentElasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentElasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentElasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentElasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentElasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentElasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentElasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentElasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                          | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#EquivalentElasticStrain.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](#EquivalentElasticStrain.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#EquivalentElasticStrain.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#EquivalentElasticStrain.Plies)                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](#EquivalentElasticStrain.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#EquivalentElasticStrain.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#EquivalentElasticStrain.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#EquivalentElasticStrain.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#EquivalentElasticStrain.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#EquivalentElasticStrain.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#EquivalentElasticStrain.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#EquivalentElasticStrain.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#EquivalentElasticStrain.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Position`](#EquivalentElasticStrain.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](#EquivalentElasticStrain.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#EquivalentElasticStrain.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#EquivalentElasticStrain.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#EquivalentElasticStrain.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#EquivalentElasticStrain.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#EquivalentElasticStrain.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentElasticStrain.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentElasticStrain.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentElasticStrain.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentElasticStrain.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentElasticStrain.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentElasticStrain.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentElasticStrain.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentElasticStrain.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentElasticStrain.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#EquivalentElasticStrain.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentElasticStrain.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentElasticStrain.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentElasticStrain.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentElasticStrain.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#EquivalentElasticStrain.Path)                                                           | Path property.                                                         |
| [`Surface`](#EquivalentElasticStrain.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#EquivalentElasticStrain.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#EquivalentElasticStrain.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#EquivalentElasticStrain.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#EquivalentElasticStrain.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentElasticStrain.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentElasticStrain.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentElasticStrain.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentElasticStrain.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentElasticStrain.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentElasticStrain.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentElasticStrain.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentElasticStrain.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentElasticStrain.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#EquivalentElasticStrain.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#EquivalentElasticStrain.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentElasticStrain.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentElasticStrain.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentElasticStrain.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentElasticStrain.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentElasticStrain.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentElasticStrain.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentElasticStrain.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#EquivalentElasticStrain.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentElasticStrain.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentElasticStrain.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentElasticStrain.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentElasticStrain.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentElasticStrain.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentElasticStrain.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentElasticStrain.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#EquivalentElasticStrain.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentElasticStrain.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentElasticStrain.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                          | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentElasticStrain.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentElasticStrain.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentElasticStrain.InternalObject"></a>

### *property* EquivalentElasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DataModelObjectCategory"></a>

### *property* EquivalentElasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Mode"></a>

### *property* EquivalentElasticStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Ply"></a>

### *property* EquivalentElasticStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Plies"></a>

### *property* EquivalentElasticStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.EnvironmentSelection"></a>

### *property* EquivalentElasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.HarmonicIndex"></a>

### *property* EquivalentElasticStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CyclicMode"></a>

### *property* EquivalentElasticStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.IterationStep"></a>

### *property* EquivalentElasticStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadMultiplier"></a>

### *property* EquivalentElasticStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ReportedFrequency"></a>

### *property* EquivalentElasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SweepingPhase"></a>

### *property* EquivalentElasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PhaseIncrement"></a>

### *property* EquivalentElasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Frequency"></a>

### *property* EquivalentElasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Position"></a>

### *property* EquivalentElasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.StressStrainType"></a>

### *property* EquivalentElasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SubScopeBy"></a>

### *property* EquivalentElasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Amplitude"></a>

### *property* EquivalentElasticStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AverageAcrossBodies"></a>

### *property* EquivalentElasticStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PlotData"></a>

### *property* EquivalentElasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Location"></a>

### *property* EquivalentElasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentElasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentElasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentElasticStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentElasticStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentElasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentElasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentElasticStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentElasticStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.IsSolved"></a>

### *property* EquivalentElasticStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CoordinateSystem"></a>

### *property* EquivalentElasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ScopingMethod"></a>

### *property* EquivalentElasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SetNumber"></a>

### *property* EquivalentElasticStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CombinationNumber"></a>

### *property* EquivalentElasticStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SolutionCombinationDriver"></a>

### *property* EquivalentElasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Path"></a>

### *property* EquivalentElasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Surface"></a>

### *property* EquivalentElasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SurfaceCoating"></a>

### *property* EquivalentElasticStrain.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.NamedSelections"></a>

### *property* EquivalentElasticStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.WaterfallShowTextOnMosaic"></a>

### *property* EquivalentElasticStrain.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CrackFrontNumber"></a>

### *property* EquivalentElasticStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GlobalIDs"></a>

### *property* EquivalentElasticStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Identifier"></a>

### *property* EquivalentElasticStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.IterationNumber"></a>

### *property* EquivalentElasticStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStep"></a>

### *property* EquivalentElasticStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MaximumOccursOn"></a>

### *property* EquivalentElasticStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MinimumOccursOn"></a>

### *property* EquivalentElasticStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.LoadStepNumber"></a>

### *property* EquivalentElasticStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.SolverComponentIDs"></a>

### *property* EquivalentElasticStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Substep"></a>

### *property* EquivalentElasticStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Average"></a>

### *property* EquivalentElasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Maximum"></a>

### *property* EquivalentElasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

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

<a id="EquivalentElasticStrain.MinimumOfMaximumOverTime"></a>

### *property* EquivalentElasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.MinimumOfMinimumOverTime"></a>

### *property* EquivalentElasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Time"></a>

### *property* EquivalentElasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DisplayTime"></a>

### *property* EquivalentElasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GraphControlsXAxis"></a>

### *property* EquivalentElasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DisplayOption"></a>

### *property* EquivalentElasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DpfEvaluation"></a>

### *property* EquivalentElasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.By"></a>

### *property* EquivalentElasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ItemType"></a>

### *property* EquivalentElasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CalculateTimeHistory"></a>

### *property* EquivalentElasticStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Suppressed"></a>

### *property* EquivalentElasticStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Children"></a>

### *property* EquivalentElasticStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Comments"></a>

### *property* EquivalentElasticStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Figures"></a>

### *property* EquivalentElasticStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Images"></a>

### *property* EquivalentElasticStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EquivalentElasticStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Properties"></a>

### *property* EquivalentElasticStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.VisibleProperties"></a>

### *property* EquivalentElasticStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentElasticStrain.ClearGeneratedData"></a>

### EquivalentElasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.EvaluateAllResults"></a>

### EquivalentElasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.FetchRemoteResults"></a>

### EquivalentElasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ExportToTextFile"></a>

### EquivalentElasticStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.ExportAnimation"></a>

### EquivalentElasticStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.DuplicateWithoutResults"></a>

### EquivalentElasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CreateResultsAtAllSets"></a>

### EquivalentElasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PromoteToNamedSelection"></a>

### EquivalentElasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CreateParameter"></a>

### EquivalentElasticStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddAlert"></a>

### EquivalentElasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddConvergence"></a>

### EquivalentElasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.RenameBasedOnDefinition"></a>

### EquivalentElasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Delete"></a>

### EquivalentElasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GetChildren"></a>

### EquivalentElasticStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EquivalentElasticStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddComment"></a>

### EquivalentElasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddFigure"></a>

### EquivalentElasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.AddImage"></a>

### EquivalentElasticStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Activate"></a>

### EquivalentElasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.CopyTo"></a>

### EquivalentElasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.Duplicate"></a>

### EquivalentElasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GroupAllSimilarChildren"></a>

### EquivalentElasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GroupSimilarObjects"></a>

### EquivalentElasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PropertyByName"></a>

### EquivalentElasticStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.PropertyByAPIName"></a>

### EquivalentElasticStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.GetParameter"></a>

### EquivalentElasticStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentElasticStrain.RemoveParameter"></a>

### EquivalentElasticStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

