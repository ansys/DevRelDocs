# MaximumPrincipalStress

### *class* MaximumPrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaximumPrincipalStress.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MaximumPrincipalStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#MaximumPrincipalStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MaximumPrincipalStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MaximumPrincipalStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MaximumPrincipalStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MaximumPrincipalStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MaximumPrincipalStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MaximumPrincipalStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MaximumPrincipalStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MaximumPrincipalStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MaximumPrincipalStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MaximumPrincipalStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MaximumPrincipalStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MaximumPrincipalStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MaximumPrincipalStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MaximumPrincipalStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MaximumPrincipalStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MaximumPrincipalStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MaximumPrincipalStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MaximumPrincipalStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaximumPrincipalStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MaximumPrincipalStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MaximumPrincipalStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MaximumPrincipalStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MaximumPrincipalStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MaximumPrincipalStress.Mode)                                                                                                      | Gets or sets the Mode.                                                 |
| [`Ply`](#MaximumPrincipalStress.Ply)                                                                                                        | Gets or sets the Ply selection.                                        |
| [`Plies`](#MaximumPrincipalStress.Plies)                                                                                                    | Plies property.                                                        |
| [`EnvironmentSelection`](#MaximumPrincipalStress.EnvironmentSelection)                                                                      | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#MaximumPrincipalStress.HarmonicIndex)                                                                                    | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#MaximumPrincipalStress.CyclicMode)                                                                                          | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#MaximumPrincipalStress.IterationStep)                                                                                    | Gets or sets the IterationStep.                                        |
| [`Layer`](#MaximumPrincipalStress.Layer)                                                                                                    | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#MaximumPrincipalStress.LoadMultiplier)                                                                                  | Gets the LoadMultiplier.                                               |
| [`Probability`](#MaximumPrincipalStress.Probability)                                                                                        | Gets the Probability.                                                  |
| [`ReportedFrequency`](#MaximumPrincipalStress.ReportedFrequency)                                                                            | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#MaximumPrincipalStress.AverageRadiusOfCurvature)                                                              | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#MaximumPrincipalStress.BendingInside)                                                                                    | Gets the BendingInside.                                                |
| [`BendingOutside`](#MaximumPrincipalStress.BendingOutside)                                                                                  | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#MaximumPrincipalStress.MembraneBendingCenter)                                                                    | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#MaximumPrincipalStress.MembraneBendingInside)                                                                    | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#MaximumPrincipalStress.MembraneBendingOutside)                                                                  | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#MaximumPrincipalStress.Membrane)                                                                                              | Gets the Membrane.                                                     |
| [`PeakCenter`](#MaximumPrincipalStress.PeakCenter)                                                                                          | Gets the PeakCenter.                                                   |
| [`PeakInside`](#MaximumPrincipalStress.PeakInside)                                                                                          | Gets the PeakInside.                                                   |
| [`PeakOutside`](#MaximumPrincipalStress.PeakOutside)                                                                                        | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#MaximumPrincipalStress.SweepingPhase)                                                                                    | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#MaximumPrincipalStress.PhaseIncrement)                                                                                  | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#MaximumPrincipalStress.Frequency)                                                                                            | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#MaximumPrincipalStress.TotalCenter)                                                                                        | Gets the TotalCenter.                                                  |
| [`TotalInside`](#MaximumPrincipalStress.TotalInside)                                                                                        | Gets the TotalInside.                                                  |
| [`TotalOutside`](#MaximumPrincipalStress.TotalOutside)                                                                                      | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#MaximumPrincipalStress.Subtype)                                                                                                | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#MaximumPrincipalStress.NormalOrientation)                                                                            | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#MaximumPrincipalStress.ScaleFactor)                                                                                        | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#MaximumPrincipalStress.SubScopeBy)                                                                                          | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#MaximumPrincipalStress.Amplitude)                                                                                            | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#MaximumPrincipalStress.AverageAcrossBodies)                                                                        | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#MaximumPrincipalStress.PlotData)                                                                                              | Gets the result table.                                                 |
| [`Location`](#MaximumPrincipalStress.Location)                                                                                              | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MaximumPrincipalStress.TimeForMinimumOfMinimumValues)                                                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MaximumPrincipalStress.TimeForMinimumOfMaximumValues)                                                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MaximumPrincipalStress.LoadStepForMinimumOfMinimumValues)                                            | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MaximumPrincipalStress.LoadStepForMinimumOfMaximumValues)                                            | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MaximumPrincipalStress.TimeForMaximumOfMinimumValues)                                                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MaximumPrincipalStress.TimeForMaximumOfMaximumValues)                                                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MaximumPrincipalStress.LoadStepForMaximumOfMinimumValues)                                            | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MaximumPrincipalStress.LoadStepForMaximumOfMaximumValues)                                            | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MaximumPrincipalStress.IsSolved)                                                                                              | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MaximumPrincipalStress.ScopingMethod)                                                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MaximumPrincipalStress.SetNumber)                                                                                            | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MaximumPrincipalStress.CombinationNumber)                                                                            | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MaximumPrincipalStress.SolutionCombinationDriver)                                                            | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MaximumPrincipalStress.WaterfallPanelShowTextOnMosaic)                                                  | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MaximumPrincipalStress.CrackFrontNumber)                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MaximumPrincipalStress.GlobalIDs)                                                                                            | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MaximumPrincipalStress.Identifier)                                                                                          | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MaximumPrincipalStress.IterationNumber)                                                                                | Gets the IterationNumber.                                              |
| [`LoadStep`](#MaximumPrincipalStress.LoadStep)                                                                                              | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MaximumPrincipalStress.MaximumOccursOn)                                                                                | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MaximumPrincipalStress.MinimumOccursOn)                                                                                | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MaximumPrincipalStress.LoadStepNumber)                                                                                  | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MaximumPrincipalStress.SolverComponentIDs)                                                                          | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MaximumPrincipalStress.Substep)                                                                                                | Gets the Substep.                                                      |
| [`Average`](#MaximumPrincipalStress.Average)                                                                                                | Gets the Average.                                                      |
| [`Maximum`](#MaximumPrincipalStress.Maximum)                                                                                                | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MaximumPrincipalStress.MaximumOfMaximumOverTime)                                                              | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MaximumPrincipalStress.MaximumOfMinimumOverTime)                                                              | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MaximumPrincipalStress.Minimum)                                                                                                | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MaximumPrincipalStress.MinimumOfMaximumOverTime)                                                              | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MaximumPrincipalStress.MinimumOfMinimumOverTime)                                                              | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MaximumPrincipalStress.Time)                                                                                                      | Gets the Time.                                                         |
| [`DisplayTime`](#MaximumPrincipalStress.DisplayTime)                                                                                        | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MaximumPrincipalStress.DisplayOption)                                                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MaximumPrincipalStress.DpfEvaluation)                                                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MaximumPrincipalStress.By)                                                                                                          | Gets or sets the By.                                                   |
| [`ItemType`](#MaximumPrincipalStress.ItemType)                                                                                              | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MaximumPrincipalStress.CalculateTimeHistory)                                                                      | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MaximumPrincipalStress.Suppressed)                                                                                          | Gets or sets the Suppressed.                                           |
| [`Children`](#MaximumPrincipalStress.Children)                                                                                              | Gets the list of children.                                             |
| [`Comments`](#MaximumPrincipalStress.Comments)                                                                                              | Gets the list of associated comments.                                  |
| [`Figures`](#MaximumPrincipalStress.Figures)                                                                                                | Gets the list of associated figures.                                   |
| [`Images`](#MaximumPrincipalStress.Images)                                                                                                  | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MaximumPrincipalStress.Properties)                                                                                          | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MaximumPrincipalStress.VisibleProperties)                                                                            | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import MaximumPrincipalStress
```

## Property detail

### *property* MaximumPrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MaximumPrincipalStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MaximumPrincipalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MaximumPrincipalStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
