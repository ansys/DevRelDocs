# ShellBottomPeakStress

### *class* ShellBottomPeakStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ShellBottomPeakStress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#ShellBottomPeakStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#ShellBottomPeakStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ShellBottomPeakStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ShellBottomPeakStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ShellBottomPeakStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ShellBottomPeakStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ShellBottomPeakStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ShellBottomPeakStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ShellBottomPeakStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ShellBottomPeakStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ShellBottomPeakStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ShellBottomPeakStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ShellBottomPeakStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id2)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ShellBottomPeakStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ShellBottomPeakStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ShellBottomPeakStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ShellBottomPeakStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ShellBottomPeakStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ShellBottomPeakStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ShellBottomPeakStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ShellBottomPeakStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ShellBottomPeakStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ShellBottomPeakStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ShellBottomPeakStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ShellBottomPeakStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`NormalOrientation`](#id0)                                                                                                                 | Gets or sets the NormalOrientation.                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id1)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`ShellMBPType`](../../../../../Mechanical/DataModel/Enums/ShellMBPType.md#ShellMBPType)                                                    | Gets the ShellMBPType.                                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#ShellBottomPeakStress.Mode)                                                                                                       | Gets or sets the Mode.                                                 |
| [`Ply`](#ShellBottomPeakStress.Ply)                                                                                                         | Gets or sets the Ply selection.                                        |
| [`Plies`](#ShellBottomPeakStress.Plies)                                                                                                     | Plies property.                                                        |
| [`EnvironmentSelection`](#ShellBottomPeakStress.EnvironmentSelection)                                                                       | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#ShellBottomPeakStress.HarmonicIndex)                                                                                     | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#ShellBottomPeakStress.CyclicMode)                                                                                           | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#ShellBottomPeakStress.IterationStep)                                                                                     | Gets or sets the IterationStep.                                        |
| [`Layer`](#ShellBottomPeakStress.Layer)                                                                                                     | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#ShellBottomPeakStress.LoadMultiplier)                                                                                   | Gets the LoadMultiplier.                                               |
| [`Probability`](#ShellBottomPeakStress.Probability)                                                                                         | Gets the Probability.                                                  |
| [`ReportedFrequency`](#ShellBottomPeakStress.ReportedFrequency)                                                                             | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#ShellBottomPeakStress.AverageRadiusOfCurvature)                                                               | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#ShellBottomPeakStress.BendingInside)                                                                                     | Gets the BendingInside.                                                |
| [`BendingOutside`](#ShellBottomPeakStress.BendingOutside)                                                                                   | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#ShellBottomPeakStress.MembraneBendingCenter)                                                                     | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#ShellBottomPeakStress.MembraneBendingInside)                                                                     | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#ShellBottomPeakStress.MembraneBendingOutside)                                                                   | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#ShellBottomPeakStress.Membrane)                                                                                               | Gets the Membrane.                                                     |
| [`PeakCenter`](#ShellBottomPeakStress.PeakCenter)                                                                                           | Gets the PeakCenter.                                                   |
| [`PeakInside`](#ShellBottomPeakStress.PeakInside)                                                                                           | Gets the PeakInside.                                                   |
| [`PeakOutside`](#ShellBottomPeakStress.PeakOutside)                                                                                         | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#ShellBottomPeakStress.SweepingPhase)                                                                                     | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#ShellBottomPeakStress.PhaseIncrement)                                                                                   | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#ShellBottomPeakStress.Frequency)                                                                                             | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#ShellBottomPeakStress.TotalCenter)                                                                                         | Gets the TotalCenter.                                                  |
| [`TotalInside`](#ShellBottomPeakStress.TotalInside)                                                                                         | Gets the TotalInside.                                                  |
| [`TotalOutside`](#ShellBottomPeakStress.TotalOutside)                                                                                       | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#ShellBottomPeakStress.Subtype)                                                                                                 | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id0)                                                                                                                 | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#ShellBottomPeakStress.ScaleFactor)                                                                                         | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#ShellBottomPeakStress.SubScopeBy)                                                                                           | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#ShellBottomPeakStress.Amplitude)                                                                                             | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#ShellBottomPeakStress.AverageAcrossBodies)                                                                         | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#ShellBottomPeakStress.PlotData)                                                                                               | Gets the result table.                                                 |
| [`Location`](#ShellBottomPeakStress.Location)                                                                                               | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ShellBottomPeakStress.TimeForMinimumOfMinimumValues)                                                     | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ShellBottomPeakStress.TimeForMinimumOfMaximumValues)                                                     | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues)                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues)                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ShellBottomPeakStress.TimeForMaximumOfMinimumValues)                                                     | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ShellBottomPeakStress.TimeForMaximumOfMaximumValues)                                                     | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues)                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues)                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ShellBottomPeakStress.IsSolved)                                                                                               | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ShellBottomPeakStress.ScopingMethod)                                                                                     | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ShellBottomPeakStress.SetNumber)                                                                                             | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ShellBottomPeakStress.CombinationNumber)                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ShellBottomPeakStress.SolutionCombinationDriver)                                                             | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ShellBottomPeakStress.WaterfallPanelShowTextOnMosaic)                                                   | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ShellBottomPeakStress.CrackFrontNumber)                                                                               | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ShellBottomPeakStress.GlobalIDs)                                                                                             | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ShellBottomPeakStress.Identifier)                                                                                           | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ShellBottomPeakStress.IterationNumber)                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#ShellBottomPeakStress.LoadStep)                                                                                               | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ShellBottomPeakStress.MaximumOccursOn)                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ShellBottomPeakStress.MinimumOccursOn)                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ShellBottomPeakStress.LoadStepNumber)                                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ShellBottomPeakStress.SolverComponentIDs)                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ShellBottomPeakStress.Substep)                                                                                                 | Gets the Substep.                                                      |
| [`Average`](#ShellBottomPeakStress.Average)                                                                                                 | Gets the Average.                                                      |
| [`Maximum`](#ShellBottomPeakStress.Maximum)                                                                                                 | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ShellBottomPeakStress.MaximumOfMaximumOverTime)                                                               | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ShellBottomPeakStress.MaximumOfMinimumOverTime)                                                               | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ShellBottomPeakStress.Minimum)                                                                                                 | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ShellBottomPeakStress.MinimumOfMaximumOverTime)                                                               | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ShellBottomPeakStress.MinimumOfMinimumOverTime)                                                               | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ShellBottomPeakStress.Time)                                                                                                       | Gets the Time.                                                         |
| [`DisplayTime`](#ShellBottomPeakStress.DisplayTime)                                                                                         | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ShellBottomPeakStress.DisplayOption)                                                                                     | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ShellBottomPeakStress.DpfEvaluation)                                                                                     | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ShellBottomPeakStress.By)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#ShellBottomPeakStress.ItemType)                                                                                               | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ShellBottomPeakStress.CalculateTimeHistory)                                                                       | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ShellBottomPeakStress.Suppressed)                                                                                           | Gets or sets the Suppressed.                                           |
| [`Children`](#ShellBottomPeakStress.Children)                                                                                               | Gets the list of children.                                             |
| [`Comments`](#ShellBottomPeakStress.Comments)                                                                                               | Gets the list of associated comments.                                  |
| [`Figures`](#ShellBottomPeakStress.Figures)                                                                                                 | Gets the list of associated figures.                                   |
| [`Images`](#ShellBottomPeakStress.Images)                                                                                                   | Gets the list of associated images.                                    |
| [`InternalObject`](#id1)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ShellBottomPeakStress.Properties)                                                                                           | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ShellBottomPeakStress.VisibleProperties)                                                                             | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import ShellBottomPeakStress
```

## Property detail

### *property* ShellBottomPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType](../../../../../Mechanical/DataModel/Enums/ShellMBPOrientationType.md#ShellMBPOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.ShellMBPType *: [Ansys.Mechanical.DataModel.Enums.ShellMBPType](../../../../../Mechanical/DataModel/Enums/ShellMBPType.md#ShellMBPType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellMBPType.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ShellBottomPeakStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ShellBottomPeakStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ShellBottomPeakStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
