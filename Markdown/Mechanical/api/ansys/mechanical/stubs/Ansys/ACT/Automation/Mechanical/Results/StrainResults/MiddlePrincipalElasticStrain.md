# MiddlePrincipalElasticStrain

### *class* MiddlePrincipalElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MiddlePrincipalElasticStrain.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MiddlePrincipalElasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MiddlePrincipalElasticStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MiddlePrincipalElasticStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MiddlePrincipalElasticStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MiddlePrincipalElasticStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MiddlePrincipalElasticStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MiddlePrincipalElasticStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MiddlePrincipalElasticStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MiddlePrincipalElasticStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MiddlePrincipalElasticStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MiddlePrincipalElasticStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MiddlePrincipalElasticStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MiddlePrincipalElasticStrain.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MiddlePrincipalElasticStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MiddlePrincipalElasticStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MiddlePrincipalElasticStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MiddlePrincipalElasticStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MiddlePrincipalElasticStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MiddlePrincipalElasticStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MiddlePrincipalElasticStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MiddlePrincipalElasticStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MiddlePrincipalElasticStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MiddlePrincipalElasticStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MiddlePrincipalElasticStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MiddlePrincipalElasticStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MiddlePrincipalElasticStrain.Mode)                                                                              | Gets or sets the Mode.                                                 |
| [`Ply`](#MiddlePrincipalElasticStrain.Ply)                                                                                | Gets or sets the Ply selection.                                        |
| [`Plies`](#MiddlePrincipalElasticStrain.Plies)                                                                            | Plies property.                                                        |
| [`EnvironmentSelection`](#MiddlePrincipalElasticStrain.EnvironmentSelection)                                              | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#MiddlePrincipalElasticStrain.HarmonicIndex)                                                            | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#MiddlePrincipalElasticStrain.CyclicMode)                                                                  | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#MiddlePrincipalElasticStrain.IterationStep)                                                            | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#MiddlePrincipalElasticStrain.LoadMultiplier)                                                          | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#MiddlePrincipalElasticStrain.ReportedFrequency)                                                    | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#MiddlePrincipalElasticStrain.SweepingPhase)                                                            | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#MiddlePrincipalElasticStrain.PhaseIncrement)                                                          | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#MiddlePrincipalElasticStrain.Frequency)                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#MiddlePrincipalElasticStrain.SubScopeBy)                                                                  | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#MiddlePrincipalElasticStrain.Amplitude)                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#MiddlePrincipalElasticStrain.AverageAcrossBodies)                                                | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#MiddlePrincipalElasticStrain.PlotData)                                                                      | Gets the result table.                                                 |
| [`Location`](#MiddlePrincipalElasticStrain.Location)                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MiddlePrincipalElasticStrain.TimeForMinimumOfMinimumValues)                            | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MiddlePrincipalElasticStrain.TimeForMinimumOfMaximumValues)                            | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MiddlePrincipalElasticStrain.LoadStepForMinimumOfMinimumValues)                    | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MiddlePrincipalElasticStrain.LoadStepForMinimumOfMaximumValues)                    | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MiddlePrincipalElasticStrain.TimeForMaximumOfMinimumValues)                            | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MiddlePrincipalElasticStrain.TimeForMaximumOfMaximumValues)                            | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MiddlePrincipalElasticStrain.LoadStepForMaximumOfMinimumValues)                    | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MiddlePrincipalElasticStrain.LoadStepForMaximumOfMaximumValues)                    | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MiddlePrincipalElasticStrain.IsSolved)                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MiddlePrincipalElasticStrain.ScopingMethod)                                                            | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MiddlePrincipalElasticStrain.SetNumber)                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MiddlePrincipalElasticStrain.CombinationNumber)                                                    | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MiddlePrincipalElasticStrain.SolutionCombinationDriver)                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MiddlePrincipalElasticStrain.WaterfallPanelShowTextOnMosaic)                          | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MiddlePrincipalElasticStrain.CrackFrontNumber)                                                      | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MiddlePrincipalElasticStrain.GlobalIDs)                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MiddlePrincipalElasticStrain.Identifier)                                                                  | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MiddlePrincipalElasticStrain.IterationNumber)                                                        | Gets the IterationNumber.                                              |
| [`LoadStep`](#MiddlePrincipalElasticStrain.LoadStep)                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MiddlePrincipalElasticStrain.MaximumOccursOn)                                                        | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MiddlePrincipalElasticStrain.MinimumOccursOn)                                                        | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MiddlePrincipalElasticStrain.LoadStepNumber)                                                          | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MiddlePrincipalElasticStrain.SolverComponentIDs)                                                  | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MiddlePrincipalElasticStrain.Substep)                                                                        | Gets the Substep.                                                      |
| [`Average`](#MiddlePrincipalElasticStrain.Average)                                                                        | Gets the Average.                                                      |
| [`Maximum`](#MiddlePrincipalElasticStrain.Maximum)                                                                        | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MiddlePrincipalElasticStrain.MaximumOfMaximumOverTime)                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MiddlePrincipalElasticStrain.MaximumOfMinimumOverTime)                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MiddlePrincipalElasticStrain.Minimum)                                                                        | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MiddlePrincipalElasticStrain.MinimumOfMaximumOverTime)                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MiddlePrincipalElasticStrain.MinimumOfMinimumOverTime)                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MiddlePrincipalElasticStrain.Time)                                                                              | Gets the Time.                                                         |
| [`DisplayTime`](#MiddlePrincipalElasticStrain.DisplayTime)                                                                | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MiddlePrincipalElasticStrain.DisplayOption)                                                            | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MiddlePrincipalElasticStrain.DpfEvaluation)                                                            | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MiddlePrincipalElasticStrain.By)                                                                                  | Gets or sets the By.                                                   |
| [`ItemType`](#MiddlePrincipalElasticStrain.ItemType)                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MiddlePrincipalElasticStrain.CalculateTimeHistory)                                              | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MiddlePrincipalElasticStrain.Suppressed)                                                                  | Gets or sets the Suppressed.                                           |
| [`Children`](#MiddlePrincipalElasticStrain.Children)                                                                      | Gets the list of children.                                             |
| [`Comments`](#MiddlePrincipalElasticStrain.Comments)                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#MiddlePrincipalElasticStrain.Figures)                                                                        | Gets the list of associated figures.                                   |
| [`Images`](#MiddlePrincipalElasticStrain.Images)                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MiddlePrincipalElasticStrain.Properties)                                                                  | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MiddlePrincipalElasticStrain.VisibleProperties)                                                    | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import MiddlePrincipalElasticStrain
```

## Property detail

### *property* MiddlePrincipalElasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalElasticStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MiddlePrincipalElasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalElasticStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
