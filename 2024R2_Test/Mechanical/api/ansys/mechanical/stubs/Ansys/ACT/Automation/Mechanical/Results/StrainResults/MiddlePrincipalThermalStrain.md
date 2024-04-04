# MiddlePrincipalThermalStrain

### *class* MiddlePrincipalThermalStrain

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MiddlePrincipalThermalStrain.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MiddlePrincipalThermalStrain.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MiddlePrincipalThermalStrain.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MiddlePrincipalThermalStrain.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MiddlePrincipalThermalStrain.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MiddlePrincipalThermalStrain.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MiddlePrincipalThermalStrain.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MiddlePrincipalThermalStrain.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MiddlePrincipalThermalStrain.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MiddlePrincipalThermalStrain.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MiddlePrincipalThermalStrain.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MiddlePrincipalThermalStrain.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MiddlePrincipalThermalStrain.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MiddlePrincipalThermalStrain.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MiddlePrincipalThermalStrain.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MiddlePrincipalThermalStrain.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MiddlePrincipalThermalStrain.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MiddlePrincipalThermalStrain.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MiddlePrincipalThermalStrain.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MiddlePrincipalThermalStrain.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MiddlePrincipalThermalStrain.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MiddlePrincipalThermalStrain.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MiddlePrincipalThermalStrain.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MiddlePrincipalThermalStrain.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MiddlePrincipalThermalStrain.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MiddlePrincipalThermalStrain.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MiddlePrincipalThermalStrain.Mode)                                                                              | Gets or sets the Mode.                                                 |
| [`Ply`](#MiddlePrincipalThermalStrain.Ply)                                                                                | Gets or sets the Ply selection.                                        |
| [`Plies`](#MiddlePrincipalThermalStrain.Plies)                                                                            | Plies property.                                                        |
| [`EnvironmentSelection`](#MiddlePrincipalThermalStrain.EnvironmentSelection)                                              | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#MiddlePrincipalThermalStrain.HarmonicIndex)                                                            | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#MiddlePrincipalThermalStrain.CyclicMode)                                                                  | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#MiddlePrincipalThermalStrain.IterationStep)                                                            | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#MiddlePrincipalThermalStrain.LoadMultiplier)                                                          | Gets the LoadMultiplier.                                               |
| [`ReportedFrequency`](#MiddlePrincipalThermalStrain.ReportedFrequency)                                                    | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#MiddlePrincipalThermalStrain.SweepingPhase)                                                            | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#MiddlePrincipalThermalStrain.PhaseIncrement)                                                          | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#MiddlePrincipalThermalStrain.Frequency)                                                                    | Gets or sets the Frequency.                                            |
| [`Position`](../ProbeResults/Position.md#Position)                                                                        | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#MiddlePrincipalThermalStrain.SubScopeBy)                                                                  | Gets or sets the SubScopeBy.                                           |
| [`Amplitude`](#MiddlePrincipalThermalStrain.Amplitude)                                                                    | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#MiddlePrincipalThermalStrain.AverageAcrossBodies)                                                | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#MiddlePrincipalThermalStrain.PlotData)                                                                      | Gets the result table.                                                 |
| [`Location`](#MiddlePrincipalThermalStrain.Location)                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MiddlePrincipalThermalStrain.TimeForMinimumOfMinimumValues)                            | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MiddlePrincipalThermalStrain.TimeForMinimumOfMaximumValues)                            | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MiddlePrincipalThermalStrain.LoadStepForMinimumOfMinimumValues)                    | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MiddlePrincipalThermalStrain.LoadStepForMinimumOfMaximumValues)                    | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MiddlePrincipalThermalStrain.TimeForMaximumOfMinimumValues)                            | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MiddlePrincipalThermalStrain.TimeForMaximumOfMaximumValues)                            | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MiddlePrincipalThermalStrain.LoadStepForMaximumOfMinimumValues)                    | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MiddlePrincipalThermalStrain.LoadStepForMaximumOfMaximumValues)                    | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MiddlePrincipalThermalStrain.IsSolved)                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MiddlePrincipalThermalStrain.ScopingMethod)                                                            | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MiddlePrincipalThermalStrain.SetNumber)                                                                    | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MiddlePrincipalThermalStrain.CombinationNumber)                                                    | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MiddlePrincipalThermalStrain.SolutionCombinationDriver)                                    | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MiddlePrincipalThermalStrain.WaterfallPanelShowTextOnMosaic)                          | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MiddlePrincipalThermalStrain.CrackFrontNumber)                                                      | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MiddlePrincipalThermalStrain.GlobalIDs)                                                                    | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MiddlePrincipalThermalStrain.Identifier)                                                                  | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MiddlePrincipalThermalStrain.IterationNumber)                                                        | Gets the IterationNumber.                                              |
| [`LoadStep`](#MiddlePrincipalThermalStrain.LoadStep)                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MiddlePrincipalThermalStrain.MaximumOccursOn)                                                        | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MiddlePrincipalThermalStrain.MinimumOccursOn)                                                        | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MiddlePrincipalThermalStrain.LoadStepNumber)                                                          | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MiddlePrincipalThermalStrain.SolverComponentIDs)                                                  | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MiddlePrincipalThermalStrain.Substep)                                                                        | Gets the Substep.                                                      |
| [`Average`](#MiddlePrincipalThermalStrain.Average)                                                                        | Gets the Average.                                                      |
| [`Maximum`](#MiddlePrincipalThermalStrain.Maximum)                                                                        | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MiddlePrincipalThermalStrain.MaximumOfMaximumOverTime)                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MiddlePrincipalThermalStrain.MaximumOfMinimumOverTime)                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MiddlePrincipalThermalStrain.Minimum)                                                                        | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MiddlePrincipalThermalStrain.MinimumOfMaximumOverTime)                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MiddlePrincipalThermalStrain.MinimumOfMinimumOverTime)                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MiddlePrincipalThermalStrain.Time)                                                                              | Gets the Time.                                                         |
| [`DisplayTime`](#MiddlePrincipalThermalStrain.DisplayTime)                                                                | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MiddlePrincipalThermalStrain.DisplayOption)                                                            | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MiddlePrincipalThermalStrain.DpfEvaluation)                                                            | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MiddlePrincipalThermalStrain.By)                                                                                  | Gets or sets the By.                                                   |
| [`ItemType`](#MiddlePrincipalThermalStrain.ItemType)                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MiddlePrincipalThermalStrain.CalculateTimeHistory)                                              | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MiddlePrincipalThermalStrain.Suppressed)                                                                  | Gets or sets the Suppressed.                                           |
| [`Children`](#MiddlePrincipalThermalStrain.Children)                                                                      | Gets the list of children.                                             |
| [`Comments`](#MiddlePrincipalThermalStrain.Comments)                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#MiddlePrincipalThermalStrain.Figures)                                                                        | Gets the list of associated figures.                                   |
| [`Images`](#MiddlePrincipalThermalStrain.Images)                                                                          | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MiddlePrincipalThermalStrain.Properties)                                                                  | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MiddlePrincipalThermalStrain.VisibleProperties)                                                    | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StrainResults import MiddlePrincipalThermalStrain
```

## Property detail

### *property* MiddlePrincipalThermalStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MiddlePrincipalThermalStrain.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MiddlePrincipalThermalStrain.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MiddlePrincipalThermalStrain.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
