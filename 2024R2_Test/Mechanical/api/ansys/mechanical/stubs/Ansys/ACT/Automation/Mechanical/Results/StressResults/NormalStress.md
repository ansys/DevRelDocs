# NormalStress

### *class* NormalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NormalStress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#NormalStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#NormalStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#NormalStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#NormalStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#NormalStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#NormalStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#NormalStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#NormalStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#NormalStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#NormalStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#NormalStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#NormalStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NormalStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NormalStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NormalStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NormalStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NormalStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NormalStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NormalStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NormalStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NormalStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NormalStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NormalStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#NormalStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NormalStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ScaleFactorValue`](#NormalStress.ScaleFactorValue)                                                                                        | Gets or sets the ScaleFactorValue.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#NormalStress.Mode)                                                                                                                | Gets or sets the Mode.                                                 |
| [`Ply`](#NormalStress.Ply)                                                                                                                  | Gets or sets the Ply selection.                                        |
| [`Plies`](#NormalStress.Plies)                                                                                                              | Plies property.                                                        |
| [`EnvironmentSelection`](#NormalStress.EnvironmentSelection)                                                                                | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#NormalStress.HarmonicIndex)                                                                                              | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#NormalStress.CyclicMode)                                                                                                    | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#NormalStress.IterationStep)                                                                                              | Gets or sets the IterationStep.                                        |
| [`Layer`](#NormalStress.Layer)                                                                                                              | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#NormalStress.LoadMultiplier)                                                                                            | Gets the LoadMultiplier.                                               |
| [`Probability`](#NormalStress.Probability)                                                                                                  | Gets the Probability.                                                  |
| [`ReportedFrequency`](#NormalStress.ReportedFrequency)                                                                                      | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#NormalStress.AverageRadiusOfCurvature)                                                                        | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#NormalStress.BendingInside)                                                                                              | Gets the BendingInside.                                                |
| [`BendingOutside`](#NormalStress.BendingOutside)                                                                                            | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#NormalStress.MembraneBendingCenter)                                                                              | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#NormalStress.MembraneBendingInside)                                                                              | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#NormalStress.MembraneBendingOutside)                                                                            | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#NormalStress.Membrane)                                                                                                        | Gets the Membrane.                                                     |
| [`PeakCenter`](#NormalStress.PeakCenter)                                                                                                    | Gets the PeakCenter.                                                   |
| [`PeakInside`](#NormalStress.PeakInside)                                                                                                    | Gets the PeakInside.                                                   |
| [`PeakOutside`](#NormalStress.PeakOutside)                                                                                                  | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#NormalStress.SweepingPhase)                                                                                              | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#NormalStress.PhaseIncrement)                                                                                            | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#NormalStress.Frequency)                                                                                                      | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#NormalStress.TotalCenter)                                                                                                  | Gets the TotalCenter.                                                  |
| [`TotalInside`](#NormalStress.TotalInside)                                                                                                  | Gets the TotalInside.                                                  |
| [`TotalOutside`](#NormalStress.TotalOutside)                                                                                                | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#NormalStress.Subtype)                                                                                                          | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#NormalStress.NormalOrientation)                                                                                      | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#NormalStress.ScaleFactor)                                                                                                  | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#NormalStress.SubScopeBy)                                                                                                    | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#NormalStress.Amplitude)                                                                                                      | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#NormalStress.AverageAcrossBodies)                                                                                  | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#NormalStress.PlotData)                                                                                                        | Gets the result table.                                                 |
| [`Location`](#NormalStress.Location)                                                                                                        | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#NormalStress.TimeForMinimumOfMinimumValues)                                                              | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#NormalStress.TimeForMinimumOfMaximumValues)                                                              | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#NormalStress.LoadStepForMinimumOfMinimumValues)                                                      | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#NormalStress.LoadStepForMinimumOfMaximumValues)                                                      | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#NormalStress.TimeForMaximumOfMinimumValues)                                                              | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#NormalStress.TimeForMaximumOfMaximumValues)                                                              | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#NormalStress.LoadStepForMaximumOfMinimumValues)                                                      | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#NormalStress.LoadStepForMaximumOfMaximumValues)                                                      | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#NormalStress.IsSolved)                                                                                                        | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#NormalStress.ScopingMethod)                                                                                              | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#NormalStress.SetNumber)                                                                                                      | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#NormalStress.CombinationNumber)                                                                                      | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#NormalStress.SolutionCombinationDriver)                                                                      | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#NormalStress.WaterfallPanelShowTextOnMosaic)                                                            | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#NormalStress.CrackFrontNumber)                                                                                        | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#NormalStress.GlobalIDs)                                                                                                      | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#NormalStress.Identifier)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#NormalStress.IterationNumber)                                                                                          | Gets the IterationNumber.                                              |
| [`LoadStep`](#NormalStress.LoadStep)                                                                                                        | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#NormalStress.MaximumOccursOn)                                                                                          | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#NormalStress.MinimumOccursOn)                                                                                          | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#NormalStress.LoadStepNumber)                                                                                            | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#NormalStress.SolverComponentIDs)                                                                                    | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#NormalStress.Substep)                                                                                                          | Gets the Substep.                                                      |
| [`Average`](#NormalStress.Average)                                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#NormalStress.Maximum)                                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#NormalStress.MaximumOfMaximumOverTime)                                                                        | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#NormalStress.MaximumOfMinimumOverTime)                                                                        | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#NormalStress.Minimum)                                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#NormalStress.MinimumOfMaximumOverTime)                                                                        | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#NormalStress.MinimumOfMinimumOverTime)                                                                        | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#NormalStress.Time)                                                                                                                | Gets the Time.                                                         |
| [`DisplayTime`](#NormalStress.DisplayTime)                                                                                                  | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#NormalStress.DisplayOption)                                                                                              | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#NormalStress.DpfEvaluation)                                                                                              | Gets or sets the DpfEvaluation.                                        |
| [`By`](#NormalStress.By)                                                                                                                    | Gets or sets the By.                                                   |
| [`ItemType`](#NormalStress.ItemType)                                                                                                        | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#NormalStress.CalculateTimeHistory)                                                                                | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#NormalStress.Suppressed)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#NormalStress.Children)                                                                                                        | Gets the list of children.                                             |
| [`Comments`](#NormalStress.Comments)                                                                                                        | Gets the list of associated comments.                                  |
| [`Figures`](#NormalStress.Figures)                                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#NormalStress.Images)                                                                                                            | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#NormalStress.Properties)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#NormalStress.VisibleProperties)                                                                                      | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import NormalStress
```

## Property detail

### *property* NormalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NormalStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NormalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### NormalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### NormalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### NormalStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### NormalStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### NormalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### NormalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### NormalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### NormalStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### NormalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### NormalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### NormalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### NormalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NormalStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NormalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NormalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NormalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NormalStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NormalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NormalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NormalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NormalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NormalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NormalStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NormalStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NormalStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NormalStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
