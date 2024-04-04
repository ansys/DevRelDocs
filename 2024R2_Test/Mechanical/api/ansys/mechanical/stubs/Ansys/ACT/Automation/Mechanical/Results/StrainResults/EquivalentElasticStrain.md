# EquivalentElasticStrain

### *class* EquivalentElasticStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentElasticStrain.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#EquivalentElasticStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#EquivalentElasticStrain.Mode)                                                                                   | Gets or sets the Mode.                                                 |
| [`Ply`](#EquivalentElasticStrain.Ply)                                                                                     | Gets or sets the Ply selection.                                        |
| [`Plies`](#EquivalentElasticStrain.Plies)                                                                                 | Plies property.                                                        |
| [`EnvironmentSelection`](#EquivalentElasticStrain.EnvironmentSelection)                                                   | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#EquivalentElasticStrain.HarmonicIndex)                                                                 | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#EquivalentElasticStrain.CyclicMode)                                                                       | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#EquivalentElasticStrain.IterationStep)                                                                 | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#EquivalentElasticStrain.LoadMultiplier)                                                               | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#EquivalentElasticStrain.ReportedFrequency)                                                         | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#EquivalentElasticStrain.SweepingPhase)                                                                 | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#EquivalentElasticStrain.PhaseIncrement)                                                               | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#EquivalentElasticStrain.Frequency)                                                                         | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#EquivalentElasticStrain.SubScopeBy)                                                                       | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#EquivalentElasticStrain.Amplitude)                                                                         | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#EquivalentElasticStrain.AverageAcrossBodies)                                                     | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#EquivalentElasticStrain.PlotData)                                                                           | Gets the result table.                                                 |
| [`Location`](#EquivalentElasticStrain.Location)                                                                           | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentElasticStrain.TimeForMinimumOfMinimumValues)                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentElasticStrain.TimeForMinimumOfMaximumValues)                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentElasticStrain.LoadStepForMinimumOfMinimumValues)                         | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentElasticStrain.LoadStepForMinimumOfMaximumValues)                         | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentElasticStrain.TimeForMaximumOfMinimumValues)                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentElasticStrain.TimeForMaximumOfMaximumValues)                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentElasticStrain.LoadStepForMaximumOfMinimumValues)                         | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentElasticStrain.LoadStepForMaximumOfMaximumValues)                         | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentElasticStrain.IsSolved)                                                                           | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentElasticStrain.ScopingMethod)                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentElasticStrain.SetNumber)                                                                         | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentElasticStrain.CombinationNumber)                                                         | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentElasticStrain.SolutionCombinationDriver)                                         | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentElasticStrain.WaterfallPanelShowTextOnMosaic)                               | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentElasticStrain.CrackFrontNumber)                                                           | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentElasticStrain.GlobalIDs)                                                                         | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentElasticStrain.Identifier)                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentElasticStrain.IterationNumber)                                                             | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentElasticStrain.LoadStep)                                                                           | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentElasticStrain.MaximumOccursOn)                                                             | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentElasticStrain.MinimumOccursOn)                                                             | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentElasticStrain.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentElasticStrain.SolverComponentIDs)                                                       | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentElasticStrain.Substep)                                                                             | Gets the Substep.                                                      |
| [`Average`](#EquivalentElasticStrain.Average)                                                                             | Gets the Average.                                                      |
| [`Maximum`](#EquivalentElasticStrain.Maximum)                                                                             | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentElasticStrain.MaximumOfMaximumOverTime)                                           | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentElasticStrain.MaximumOfMinimumOverTime)                                           | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentElasticStrain.Minimum)                                                                             | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentElasticStrain.MinimumOfMaximumOverTime)                                           | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentElasticStrain.MinimumOfMinimumOverTime)                                           | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentElasticStrain.Time)                                                                                   | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentElasticStrain.DisplayTime)                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentElasticStrain.DisplayOption)                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentElasticStrain.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentElasticStrain.By)                                                                                       | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentElasticStrain.ItemType)                                                                           | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentElasticStrain.CalculateTimeHistory)                                                   | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentElasticStrain.Suppressed)                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentElasticStrain.Children)                                                                           | Gets the list of children.                                             |
| [`Comments`](#EquivalentElasticStrain.Comments)                                                                           | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentElasticStrain.Figures)                                                                             | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentElasticStrain.Images)                                                                               | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentElasticStrain.Properties)                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentElasticStrain.VisibleProperties)                                                         | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import EquivalentElasticStrain
```

## Property detail

### *property* EquivalentElasticStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentElasticStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EquivalentElasticStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EquivalentElasticStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
