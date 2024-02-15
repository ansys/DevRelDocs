# BendingStressEquivalent

### *class* BendingStressEquivalent

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BendingStressEquivalent.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#BendingStressEquivalent.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#BendingStressEquivalent.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#BendingStressEquivalent.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#BendingStressEquivalent.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#BendingStressEquivalent.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#BendingStressEquivalent.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#BendingStressEquivalent.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#BendingStressEquivalent.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#BendingStressEquivalent.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#BendingStressEquivalent.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#BendingStressEquivalent.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#BendingStressEquivalent.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#BendingStressEquivalent.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BendingStressEquivalent.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BendingStressEquivalent.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BendingStressEquivalent.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BendingStressEquivalent.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BendingStressEquivalent.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BendingStressEquivalent.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BendingStressEquivalent.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BendingStressEquivalent.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BendingStressEquivalent.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BendingStressEquivalent.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#BendingStressEquivalent.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BendingStressEquivalent.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#BendingStressEquivalent.Mode)                                                                                                     | Gets or sets the Mode.                                                 |
| [`Ply`](#BendingStressEquivalent.Ply)                                                                                                       | Gets or sets the Ply selection.                                        |
| [`Plies`](#BendingStressEquivalent.Plies)                                                                                                   | Plies property.                                                        |
| [`EnvironmentSelection`](#BendingStressEquivalent.EnvironmentSelection)                                                                     | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#BendingStressEquivalent.HarmonicIndex)                                                                                   | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#BendingStressEquivalent.CyclicMode)                                                                                         | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#BendingStressEquivalent.IterationStep)                                                                                   | Gets or sets the IterationStep.                                        |
| [`Layer`](#BendingStressEquivalent.Layer)                                                                                                   | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#BendingStressEquivalent.LoadMultiplier)                                                                                 | Gets the LoadMultiplier.                                               |
| [`Probability`](#BendingStressEquivalent.Probability)                                                                                       | Gets the Probability.                                                  |
| [`ReportedFrequency`](#BendingStressEquivalent.ReportedFrequency)                                                                           | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#BendingStressEquivalent.AverageRadiusOfCurvature)                                                             | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#BendingStressEquivalent.BendingInside)                                                                                   | Gets the BendingInside.                                                |
| [`BendingOutside`](#BendingStressEquivalent.BendingOutside)                                                                                 | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#BendingStressEquivalent.MembraneBendingCenter)                                                                   | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#BendingStressEquivalent.MembraneBendingInside)                                                                   | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#BendingStressEquivalent.MembraneBendingOutside)                                                                 | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#BendingStressEquivalent.Membrane)                                                                                             | Gets the Membrane.                                                     |
| [`PeakCenter`](#BendingStressEquivalent.PeakCenter)                                                                                         | Gets the PeakCenter.                                                   |
| [`PeakInside`](#BendingStressEquivalent.PeakInside)                                                                                         | Gets the PeakInside.                                                   |
| [`PeakOutside`](#BendingStressEquivalent.PeakOutside)                                                                                       | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#BendingStressEquivalent.SweepingPhase)                                                                                   | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#BendingStressEquivalent.PhaseIncrement)                                                                                 | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#BendingStressEquivalent.Frequency)                                                                                           | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#BendingStressEquivalent.TotalCenter)                                                                                       | Gets the TotalCenter.                                                  |
| [`TotalInside`](#BendingStressEquivalent.TotalInside)                                                                                       | Gets the TotalInside.                                                  |
| [`TotalOutside`](#BendingStressEquivalent.TotalOutside)                                                                                     | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#BendingStressEquivalent.Subtype)                                                                                               | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#BendingStressEquivalent.NormalOrientation)                                                                           | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#BendingStressEquivalent.ScaleFactor)                                                                                       | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#BendingStressEquivalent.SubScopeBy)                                                                                         | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#BendingStressEquivalent.Amplitude)                                                                                           | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#BendingStressEquivalent.AverageAcrossBodies)                                                                       | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#BendingStressEquivalent.PlotData)                                                                                             | Gets the result table.                                                 |
| [`Location`](#BendingStressEquivalent.Location)                                                                                             | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#BendingStressEquivalent.TimeForMinimumOfMinimumValues)                                                   | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#BendingStressEquivalent.TimeForMinimumOfMaximumValues)                                                   | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#BendingStressEquivalent.LoadStepForMinimumOfMinimumValues)                                           | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#BendingStressEquivalent.LoadStepForMinimumOfMaximumValues)                                           | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#BendingStressEquivalent.TimeForMaximumOfMinimumValues)                                                   | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#BendingStressEquivalent.TimeForMaximumOfMaximumValues)                                                   | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#BendingStressEquivalent.LoadStepForMaximumOfMinimumValues)                                           | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#BendingStressEquivalent.LoadStepForMaximumOfMaximumValues)                                           | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#BendingStressEquivalent.IsSolved)                                                                                             | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#BendingStressEquivalent.ScopingMethod)                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#BendingStressEquivalent.SetNumber)                                                                                           | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#BendingStressEquivalent.CombinationNumber)                                                                           | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#BendingStressEquivalent.SolutionCombinationDriver)                                                           | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#BendingStressEquivalent.WaterfallPanelShowTextOnMosaic)                                                 | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#BendingStressEquivalent.CrackFrontNumber)                                                                             | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#BendingStressEquivalent.GlobalIDs)                                                                                           | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#BendingStressEquivalent.Identifier)                                                                                         | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#BendingStressEquivalent.IterationNumber)                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#BendingStressEquivalent.LoadStep)                                                                                             | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#BendingStressEquivalent.MaximumOccursOn)                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#BendingStressEquivalent.MinimumOccursOn)                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#BendingStressEquivalent.LoadStepNumber)                                                                                 | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#BendingStressEquivalent.SolverComponentIDs)                                                                         | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#BendingStressEquivalent.Substep)                                                                                               | Gets the Substep.                                                      |
| [`Average`](#BendingStressEquivalent.Average)                                                                                               | Gets the Average.                                                      |
| [`Maximum`](#BendingStressEquivalent.Maximum)                                                                                               | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#BendingStressEquivalent.MaximumOfMaximumOverTime)                                                             | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#BendingStressEquivalent.MaximumOfMinimumOverTime)                                                             | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#BendingStressEquivalent.Minimum)                                                                                               | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#BendingStressEquivalent.MinimumOfMaximumOverTime)                                                             | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#BendingStressEquivalent.MinimumOfMinimumOverTime)                                                             | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#BendingStressEquivalent.Time)                                                                                                     | Gets the Time.                                                         |
| [`DisplayTime`](#BendingStressEquivalent.DisplayTime)                                                                                       | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#BendingStressEquivalent.DisplayOption)                                                                                   | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#BendingStressEquivalent.DpfEvaluation)                                                                                   | Gets or sets the DpfEvaluation.                                        |
| [`By`](#BendingStressEquivalent.By)                                                                                                         | Gets or sets the By.                                                   |
| [`ItemType`](#BendingStressEquivalent.ItemType)                                                                                             | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#BendingStressEquivalent.CalculateTimeHistory)                                                                     | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#BendingStressEquivalent.Suppressed)                                                                                         | Gets or sets the Suppressed.                                           |
| [`Children`](#BendingStressEquivalent.Children)                                                                                             | Gets the list of children.                                             |
| [`Comments`](#BendingStressEquivalent.Comments)                                                                                             | Gets the list of associated comments.                                  |
| [`Figures`](#BendingStressEquivalent.Figures)                                                                                               | Gets the list of associated figures.                                   |
| [`Images`](#BendingStressEquivalent.Images)                                                                                                 | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#BendingStressEquivalent.Properties)                                                                                         | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#BendingStressEquivalent.VisibleProperties)                                                                           | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import BendingStressEquivalent
```

## Property detail

### *property* BendingStressEquivalent.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BendingStressEquivalent.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### BendingStressEquivalent.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BendingStressEquivalent.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
