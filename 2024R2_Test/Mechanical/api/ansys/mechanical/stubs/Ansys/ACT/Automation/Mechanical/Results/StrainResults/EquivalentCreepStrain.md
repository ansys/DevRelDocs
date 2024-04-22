<a id="equivalentcreepstrain"></a>

# EquivalentCreepStrain

<a id="EquivalentCreepStrain"></a>

### *class* EquivalentCreepStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentCreepStrain.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#EquivalentCreepStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#EquivalentCreepStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentCreepStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentCreepStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentCreepStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentCreepStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentCreepStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentCreepStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentCreepStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentCreepStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentCreepStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentCreepStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentCreepStrain.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentCreepStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentCreepStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentCreepStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentCreepStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentCreepStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentCreepStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentCreepStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentCreepStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentCreepStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentCreepStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentCreepStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentCreepStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#EquivalentCreepStrain.Mode)                                                                                     | Gets or sets the Mode.                                                 |
| [`Ply`](#EquivalentCreepStrain.Ply)                                                                                       | Gets or sets the Ply selection.                                        |
| [`Plies`](#EquivalentCreepStrain.Plies)                                                                                   | Plies property.                                                        |
| [`EnvironmentSelection`](#EquivalentCreepStrain.EnvironmentSelection)                                                     | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#EquivalentCreepStrain.HarmonicIndex)                                                                   | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#EquivalentCreepStrain.CyclicMode)                                                                         | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#EquivalentCreepStrain.IterationStep)                                                                   | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#EquivalentCreepStrain.LoadMultiplier)                                                                 | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#EquivalentCreepStrain.ReportedFrequency)                                                           | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#EquivalentCreepStrain.SweepingPhase)                                                                   | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#EquivalentCreepStrain.PhaseIncrement)                                                                 | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#EquivalentCreepStrain.Frequency)                                                                           | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#EquivalentCreepStrain.SubScopeBy)                                                                         | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#EquivalentCreepStrain.Amplitude)                                                                           | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#EquivalentCreepStrain.AverageAcrossBodies)                                                       | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#EquivalentCreepStrain.PlotData)                                                                             | Gets the result table.                                                 |
| [`Location`](#EquivalentCreepStrain.Location)                                                                             | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentCreepStrain.TimeForMinimumOfMinimumValues)                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentCreepStrain.TimeForMinimumOfMaximumValues)                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentCreepStrain.LoadStepForMinimumOfMinimumValues)                           | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentCreepStrain.LoadStepForMinimumOfMaximumValues)                           | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentCreepStrain.TimeForMaximumOfMinimumValues)                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentCreepStrain.TimeForMaximumOfMaximumValues)                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentCreepStrain.LoadStepForMaximumOfMinimumValues)                           | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentCreepStrain.LoadStepForMaximumOfMaximumValues)                           | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentCreepStrain.IsSolved)                                                                             | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentCreepStrain.ScopingMethod)                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentCreepStrain.SetNumber)                                                                           | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentCreepStrain.CombinationNumber)                                                           | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentCreepStrain.SolutionCombinationDriver)                                           | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentCreepStrain.WaterfallPanelShowTextOnMosaic)                                 | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentCreepStrain.CrackFrontNumber)                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentCreepStrain.GlobalIDs)                                                                           | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentCreepStrain.Identifier)                                                                         | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentCreepStrain.IterationNumber)                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentCreepStrain.LoadStep)                                                                             | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentCreepStrain.MaximumOccursOn)                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentCreepStrain.MinimumOccursOn)                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentCreepStrain.LoadStepNumber)                                                                 | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentCreepStrain.SolverComponentIDs)                                                         | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentCreepStrain.Substep)                                                                               | Gets the Substep.                                                      |
| [`Average`](#EquivalentCreepStrain.Average)                                                                               | Gets the Average.                                                      |
| [`Maximum`](#EquivalentCreepStrain.Maximum)                                                                               | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentCreepStrain.MaximumOfMaximumOverTime)                                             | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentCreepStrain.MaximumOfMinimumOverTime)                                             | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentCreepStrain.Minimum)                                                                               | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentCreepStrain.MinimumOfMaximumOverTime)                                             | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentCreepStrain.MinimumOfMinimumOverTime)                                             | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentCreepStrain.Time)                                                                                     | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentCreepStrain.DisplayTime)                                                                       | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentCreepStrain.DisplayOption)                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentCreepStrain.DpfEvaluation)                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentCreepStrain.By)                                                                                         | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentCreepStrain.ItemType)                                                                             | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentCreepStrain.CalculateTimeHistory)                                                     | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentCreepStrain.Suppressed)                                                                         | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentCreepStrain.Children)                                                                             | Gets the list of children.                                             |
| [`Comments`](#EquivalentCreepStrain.Comments)                                                                             | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentCreepStrain.Figures)                                                                               | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentCreepStrain.Images)                                                                                 | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentCreepStrain.Properties)                                                                         | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentCreepStrain.VisibleProperties)                                                           | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentCreepStrain
```

<a id="property-detail"></a>

## Property detail

<a id="EquivalentCreepStrain.InternalObject"></a>

### *property* EquivalentCreepStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.DataModelObjectCategory"></a>

### *property* EquivalentCreepStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Mode"></a>

### *property* EquivalentCreepStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Ply"></a>

### *property* EquivalentCreepStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Plies"></a>

### *property* EquivalentCreepStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.EnvironmentSelection"></a>

### *property* EquivalentCreepStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.HarmonicIndex"></a>

### *property* EquivalentCreepStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.CyclicMode"></a>

### *property* EquivalentCreepStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.IterationStep"></a>

### *property* EquivalentCreepStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.LoadMultiplier"></a>

### *property* EquivalentCreepStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.ReportedFrequency"></a>

### *property* EquivalentCreepStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.SweepingPhase"></a>

### *property* EquivalentCreepStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.PhaseIncrement"></a>

### *property* EquivalentCreepStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Frequency"></a>

### *property* EquivalentCreepStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Position"></a>

### *property* EquivalentCreepStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.StressStrainType"></a>

### *property* EquivalentCreepStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.SubScopeBy"></a>

### *property* EquivalentCreepStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Amplitude"></a>

### *property* EquivalentCreepStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.AverageAcrossBodies"></a>

### *property* EquivalentCreepStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.PlotData"></a>

### *property* EquivalentCreepStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Location"></a>

### *property* EquivalentCreepStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentCreepStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentCreepStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentCreepStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentCreepStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentCreepStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentCreepStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentCreepStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentCreepStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.IsSolved"></a>

### *property* EquivalentCreepStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.CoordinateSystem"></a>

### *property* EquivalentCreepStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.ScopingMethod"></a>

### *property* EquivalentCreepStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.SetNumber"></a>

### *property* EquivalentCreepStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.CombinationNumber"></a>

### *property* EquivalentCreepStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.SolutionCombinationDriver"></a>

### *property* EquivalentCreepStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Path"></a>

### *property* EquivalentCreepStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Surface"></a>

### *property* EquivalentCreepStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.NamedSelections"></a>

### *property* EquivalentCreepStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.WaterfallPanelShowTextOnMosaic"></a>

### *property* EquivalentCreepStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.CrackFrontNumber"></a>

### *property* EquivalentCreepStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.GlobalIDs"></a>

### *property* EquivalentCreepStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Identifier"></a>

### *property* EquivalentCreepStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.IterationNumber"></a>

### *property* EquivalentCreepStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.LoadStep"></a>

### *property* EquivalentCreepStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.MaximumOccursOn"></a>

### *property* EquivalentCreepStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.MinimumOccursOn"></a>

### *property* EquivalentCreepStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.LoadStepNumber"></a>

### *property* EquivalentCreepStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.SolverComponentIDs"></a>

### *property* EquivalentCreepStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Substep"></a>

### *property* EquivalentCreepStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Average"></a>

### *property* EquivalentCreepStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Maximum"></a>

### *property* EquivalentCreepStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.MaximumOfMaximumOverTime"></a>

### *property* EquivalentCreepStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.MaximumOfMinimumOverTime"></a>

### *property* EquivalentCreepStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Minimum"></a>

### *property* EquivalentCreepStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.MinimumOfMaximumOverTime"></a>

### *property* EquivalentCreepStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.MinimumOfMinimumOverTime"></a>

### *property* EquivalentCreepStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Time"></a>

### *property* EquivalentCreepStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.DisplayTime"></a>

### *property* EquivalentCreepStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.GraphControlsXAxis"></a>

### *property* EquivalentCreepStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.DisplayOption"></a>

### *property* EquivalentCreepStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.DpfEvaluation"></a>

### *property* EquivalentCreepStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.By"></a>

### *property* EquivalentCreepStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.ItemType"></a>

### *property* EquivalentCreepStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.CalculateTimeHistory"></a>

### *property* EquivalentCreepStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Suppressed"></a>

### *property* EquivalentCreepStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Children"></a>

### *property* EquivalentCreepStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Comments"></a>

### *property* EquivalentCreepStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Figures"></a>

### *property* EquivalentCreepStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Images"></a>

### *property* EquivalentCreepStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EquivalentCreepStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Properties"></a>

### *property* EquivalentCreepStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.VisibleProperties"></a>

### *property* EquivalentCreepStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentCreepStrain.ClearGeneratedData"></a>

### EquivalentCreepStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.EvaluateAllResults"></a>

### EquivalentCreepStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.FetchRemoteResults"></a>

### EquivalentCreepStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.ExportToTextFile"></a>

### EquivalentCreepStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.ExportAnimation"></a>

### EquivalentCreepStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.DuplicateWithoutResults"></a>

### EquivalentCreepStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.CreateResultsAtAllSets"></a>

### EquivalentCreepStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.PromoteToNamedSelection"></a>

### EquivalentCreepStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.CreateParameter"></a>

### EquivalentCreepStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.AddAlert"></a>

### EquivalentCreepStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.AddConvergence"></a>

### EquivalentCreepStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.RenameBasedOnDefinition"></a>

### EquivalentCreepStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Delete"></a>

### EquivalentCreepStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.GetChildren"></a>

### EquivalentCreepStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EquivalentCreepStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.AddComment"></a>

### EquivalentCreepStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.AddFigure"></a>

### EquivalentCreepStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.AddImage"></a>

### EquivalentCreepStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Activate"></a>

### EquivalentCreepStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.CopyTo"></a>

### EquivalentCreepStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.Duplicate"></a>

### EquivalentCreepStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.GroupAllSimilarChildren"></a>

### EquivalentCreepStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.GroupSimilarObjects"></a>

### EquivalentCreepStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.PropertyByName"></a>

### EquivalentCreepStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.PropertyByAPIName"></a>

### EquivalentCreepStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.GetParameter"></a>

### EquivalentCreepStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrain.RemoveParameter"></a>

### EquivalentCreepStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
