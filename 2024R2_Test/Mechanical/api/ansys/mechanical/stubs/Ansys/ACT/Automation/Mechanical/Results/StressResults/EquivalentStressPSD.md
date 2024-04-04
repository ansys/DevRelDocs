# EquivalentStressPSD

### *class* EquivalentStressPSD

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentStressPSD.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#EquivalentStressPSD.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#EquivalentStressPSD.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentStressPSD.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentStressPSD.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentStressPSD.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentStressPSD.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentStressPSD.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentStressPSD.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentStressPSD.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentStressPSD.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentStressPSD.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentStressPSD.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentStressPSD.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentStressPSD.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentStressPSD.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentStressPSD.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentStressPSD.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentStressPSD.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentStressPSD.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentStressPSD.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentStressPSD.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentStressPSD.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentStressPSD.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentStressPSD.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentStressPSD.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ScaleFactorValue`](#EquivalentStressPSD.ScaleFactorValue)                                                                                 | Gets or sets the ScaleFactorValue.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#EquivalentStressPSD.Mode)                                                                                                         | Gets or sets the Mode.                                                 |
| [`Ply`](#EquivalentStressPSD.Ply)                                                                                                           | Gets or sets the Ply selection.                                        |
| [`Plies`](#EquivalentStressPSD.Plies)                                                                                                       | Plies property.                                                        |
| [`EnvironmentSelection`](#EquivalentStressPSD.EnvironmentSelection)                                                                         | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#EquivalentStressPSD.HarmonicIndex)                                                                                       | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#EquivalentStressPSD.CyclicMode)                                                                                             | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#EquivalentStressPSD.IterationStep)                                                                                       | Gets or sets the IterationStep.                                        |
| [`Layer`](#EquivalentStressPSD.Layer)                                                                                                       | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#EquivalentStressPSD.LoadMultiplier)                                                                                     | Gets the LoadMultiplier.                                               |
| [`Probability`](#EquivalentStressPSD.Probability)                                                                                           | Gets the Probability.                                                  |
| [`ReportedFrequency`](#EquivalentStressPSD.ReportedFrequency)                                                                               | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#EquivalentStressPSD.AverageRadiusOfCurvature)                                                                 | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#EquivalentStressPSD.BendingInside)                                                                                       | Gets the BendingInside.                                                |
| [`BendingOutside`](#EquivalentStressPSD.BendingOutside)                                                                                     | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#EquivalentStressPSD.MembraneBendingCenter)                                                                       | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#EquivalentStressPSD.MembraneBendingInside)                                                                       | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#EquivalentStressPSD.MembraneBendingOutside)                                                                     | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#EquivalentStressPSD.Membrane)                                                                                                 | Gets the Membrane.                                                     |
| [`PeakCenter`](#EquivalentStressPSD.PeakCenter)                                                                                             | Gets the PeakCenter.                                                   |
| [`PeakInside`](#EquivalentStressPSD.PeakInside)                                                                                             | Gets the PeakInside.                                                   |
| [`PeakOutside`](#EquivalentStressPSD.PeakOutside)                                                                                           | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#EquivalentStressPSD.SweepingPhase)                                                                                       | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#EquivalentStressPSD.PhaseIncrement)                                                                                     | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#EquivalentStressPSD.Frequency)                                                                                               | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#EquivalentStressPSD.TotalCenter)                                                                                           | Gets the TotalCenter.                                                  |
| [`TotalInside`](#EquivalentStressPSD.TotalInside)                                                                                           | Gets the TotalInside.                                                  |
| [`TotalOutside`](#EquivalentStressPSD.TotalOutside)                                                                                         | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#EquivalentStressPSD.Subtype)                                                                                                   | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#EquivalentStressPSD.NormalOrientation)                                                                               | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#EquivalentStressPSD.ScaleFactor)                                                                                           | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#EquivalentStressPSD.SubScopeBy)                                                                                             | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#EquivalentStressPSD.Amplitude)                                                                                               | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#EquivalentStressPSD.AverageAcrossBodies)                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#EquivalentStressPSD.PlotData)                                                                                                 | Gets the result table.                                                 |
| [`Location`](#EquivalentStressPSD.Location)                                                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentStressPSD.TimeForMinimumOfMinimumValues)                                                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentStressPSD.TimeForMinimumOfMaximumValues)                                                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentStressPSD.LoadStepForMinimumOfMinimumValues)                                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentStressPSD.LoadStepForMinimumOfMaximumValues)                                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentStressPSD.TimeForMaximumOfMinimumValues)                                                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentStressPSD.TimeForMaximumOfMaximumValues)                                                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentStressPSD.LoadStepForMaximumOfMinimumValues)                                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentStressPSD.LoadStepForMaximumOfMaximumValues)                                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentStressPSD.IsSolved)                                                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentStressPSD.ScopingMethod)                                                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentStressPSD.SetNumber)                                                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentStressPSD.CombinationNumber)                                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentStressPSD.SolutionCombinationDriver)                                                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentStressPSD.WaterfallPanelShowTextOnMosaic)                                                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentStressPSD.CrackFrontNumber)                                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentStressPSD.GlobalIDs)                                                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentStressPSD.Identifier)                                                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentStressPSD.IterationNumber)                                                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentStressPSD.LoadStep)                                                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentStressPSD.MaximumOccursOn)                                                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentStressPSD.MinimumOccursOn)                                                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentStressPSD.LoadStepNumber)                                                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentStressPSD.SolverComponentIDs)                                                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentStressPSD.Substep)                                                                                                   | Gets the Substep.                                                      |
| [`Average`](#EquivalentStressPSD.Average)                                                                                                   | Gets the Average.                                                      |
| [`Maximum`](#EquivalentStressPSD.Maximum)                                                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentStressPSD.MaximumOfMaximumOverTime)                                                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentStressPSD.MaximumOfMinimumOverTime)                                                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentStressPSD.Minimum)                                                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentStressPSD.MinimumOfMaximumOverTime)                                                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentStressPSD.MinimumOfMinimumOverTime)                                                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentStressPSD.Time)                                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentStressPSD.DisplayTime)                                                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentStressPSD.DisplayOption)                                                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentStressPSD.DpfEvaluation)                                                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentStressPSD.By)                                                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentStressPSD.ItemType)                                                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentStressPSD.CalculateTimeHistory)                                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentStressPSD.Suppressed)                                                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentStressPSD.Children)                                                                                                 | Gets the list of children.                                             |
| [`Comments`](#EquivalentStressPSD.Comments)                                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentStressPSD.Figures)                                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentStressPSD.Images)                                                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentStressPSD.Properties)                                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentStressPSD.VisibleProperties)                                                                               | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import EquivalentStressPSD
```

## Property detail

### *property* EquivalentStressPSD.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EquivalentStressPSD.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EquivalentStressPSD.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EquivalentStressPSD.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
