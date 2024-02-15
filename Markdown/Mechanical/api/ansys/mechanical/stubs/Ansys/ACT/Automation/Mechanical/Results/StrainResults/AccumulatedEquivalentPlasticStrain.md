# AccumulatedEquivalentPlasticStrain

### *class* AccumulatedEquivalentPlasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AccumulatedEquivalentPlasticStrain.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AccumulatedEquivalentPlasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AccumulatedEquivalentPlasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AccumulatedEquivalentPlasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AccumulatedEquivalentPlasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AccumulatedEquivalentPlasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AccumulatedEquivalentPlasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AccumulatedEquivalentPlasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AccumulatedEquivalentPlasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AccumulatedEquivalentPlasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AccumulatedEquivalentPlasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AccumulatedEquivalentPlasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AccumulatedEquivalentPlasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AccumulatedEquivalentPlasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AccumulatedEquivalentPlasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AccumulatedEquivalentPlasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AccumulatedEquivalentPlasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AccumulatedEquivalentPlasticStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AccumulatedEquivalentPlasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AccumulatedEquivalentPlasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AccumulatedEquivalentPlasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AccumulatedEquivalentPlasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AccumulatedEquivalentPlasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AccumulatedEquivalentPlasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AccumulatedEquivalentPlasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AccumulatedEquivalentPlasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AccumulatedEquivalentPlasticStrain.Mode)                                                                        | Gets or sets the Mode.                                                 |
| [`Ply`](#AccumulatedEquivalentPlasticStrain.Ply)                                                                          | Gets or sets the Ply selection.                                        |
| [`Plies`](#AccumulatedEquivalentPlasticStrain.Plies)                                                                      | Plies property.                                                        |
| [`EnvironmentSelection`](#AccumulatedEquivalentPlasticStrain.EnvironmentSelection)                                        | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#AccumulatedEquivalentPlasticStrain.HarmonicIndex)                                                      | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#AccumulatedEquivalentPlasticStrain.CyclicMode)                                                            | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#AccumulatedEquivalentPlasticStrain.IterationStep)                                                      | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#AccumulatedEquivalentPlasticStrain.LoadMultiplier)                                                    | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#AccumulatedEquivalentPlasticStrain.ReportedFrequency)                                              | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#AccumulatedEquivalentPlasticStrain.SweepingPhase)                                                      | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#AccumulatedEquivalentPlasticStrain.PhaseIncrement)                                                    | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#AccumulatedEquivalentPlasticStrain.Frequency)                                                              | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#AccumulatedEquivalentPlasticStrain.SubScopeBy)                                                            | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#AccumulatedEquivalentPlasticStrain.Amplitude)                                                              | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#AccumulatedEquivalentPlasticStrain.AverageAcrossBodies)                                          | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#AccumulatedEquivalentPlasticStrain.PlotData)                                                                | Gets the result table.                                                 |
| [`Location`](#AccumulatedEquivalentPlasticStrain.Location)                                                                | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMinimumValues)                      | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMaximumValues)                      | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMinimumValues)              | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMaximumValues)              | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMinimumValues)                      | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMaximumValues)                      | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMinimumValues)              | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMaximumValues)              | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AccumulatedEquivalentPlasticStrain.IsSolved)                                                                | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AccumulatedEquivalentPlasticStrain.ScopingMethod)                                                      | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AccumulatedEquivalentPlasticStrain.SetNumber)                                                              | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AccumulatedEquivalentPlasticStrain.CombinationNumber)                                              | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AccumulatedEquivalentPlasticStrain.SolutionCombinationDriver)                              | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AccumulatedEquivalentPlasticStrain.WaterfallPanelShowTextOnMosaic)                    | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AccumulatedEquivalentPlasticStrain.CrackFrontNumber)                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AccumulatedEquivalentPlasticStrain.GlobalIDs)                                                              | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AccumulatedEquivalentPlasticStrain.Identifier)                                                            | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AccumulatedEquivalentPlasticStrain.IterationNumber)                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#AccumulatedEquivalentPlasticStrain.LoadStep)                                                                | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AccumulatedEquivalentPlasticStrain.MaximumOccursOn)                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AccumulatedEquivalentPlasticStrain.MinimumOccursOn)                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AccumulatedEquivalentPlasticStrain.LoadStepNumber)                                                    | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AccumulatedEquivalentPlasticStrain.SolverComponentIDs)                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AccumulatedEquivalentPlasticStrain.Substep)                                                                  | Gets the Substep.                                                      |
| [`Average`](#AccumulatedEquivalentPlasticStrain.Average)                                                                  | Gets the Average.                                                      |
| [`Maximum`](#AccumulatedEquivalentPlasticStrain.Maximum)                                                                  | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AccumulatedEquivalentPlasticStrain.MaximumOfMaximumOverTime)                                | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AccumulatedEquivalentPlasticStrain.MaximumOfMinimumOverTime)                                | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AccumulatedEquivalentPlasticStrain.Minimum)                                                                  | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AccumulatedEquivalentPlasticStrain.MinimumOfMaximumOverTime)                                | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AccumulatedEquivalentPlasticStrain.MinimumOfMinimumOverTime)                                | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AccumulatedEquivalentPlasticStrain.Time)                                                                        | Gets the Time.                                                         |
| [`DisplayTime`](#AccumulatedEquivalentPlasticStrain.DisplayTime)                                                          | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AccumulatedEquivalentPlasticStrain.DisplayOption)                                                      | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AccumulatedEquivalentPlasticStrain.DpfEvaluation)                                                      | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AccumulatedEquivalentPlasticStrain.By)                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#AccumulatedEquivalentPlasticStrain.ItemType)                                                                | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AccumulatedEquivalentPlasticStrain.CalculateTimeHistory)                                        | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AccumulatedEquivalentPlasticStrain.Suppressed)                                                            | Gets or sets the Suppressed.                                           |
| [`Children`](#AccumulatedEquivalentPlasticStrain.Children)                                                                | Gets the list of children.                                             |
| [`Comments`](#AccumulatedEquivalentPlasticStrain.Comments)                                                                | Gets the list of associated comments.                                  |
| [`Figures`](#AccumulatedEquivalentPlasticStrain.Figures)                                                                  | Gets the list of associated figures.                                   |
| [`Images`](#AccumulatedEquivalentPlasticStrain.Images)                                                                    | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AccumulatedEquivalentPlasticStrain.Properties)                                                            | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AccumulatedEquivalentPlasticStrain.VisibleProperties)                                              | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import AccumulatedEquivalentPlasticStrain
```

## Property detail

### *property* AccumulatedEquivalentPlasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AccumulatedEquivalentPlasticStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AccumulatedEquivalentPlasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AccumulatedEquivalentPlasticStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
